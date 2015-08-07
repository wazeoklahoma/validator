// ==UserScript==
// @name                WME Validator Localization for Oklahoma
// @namespace           https://greasyfork.org/en/scripts/10930-wme-validator-oklahoma-localization
// @version             1.0.17
// @author              turnertr,dBsooner
// @description         This script localizes WME Validator for United States/Oklahoma. You also need main package (WME Validator) installed.
// @match               https://editor-beta.waze.com/*editor/*
// @match               https://www.waze.com/*editor/*
// @grant               none
// @run-at              document-start
// ==/UserScript==
//


// CHANGELOG
// 1.1.15 -- Imported to github  wazeoklahoma/validator
// 1.1.16 -- Enabled some options that were enabled in most states.  Railroads, etc.
// 1.1.17 -- Merged dBsooner's copy with master

// TODO:
// Evaluate Exit detection to make sure it is grabbing all, similar to what dBsooner did in Massachusetts

/*
  See Settings->About->Available checks for complete list of checks and their params.

  Examples:

  Enable #170 "Lowercase street name" but allow lowercase "exit" and "to":
    "170.enabled": true,
    "170.params": {
        "regexp": "/^((exit|to) )?[a-z]/",
    "},

  Enable #130 "Custom check" to find a dot in street names, but allow dots at Ramps:
    "130.enabled": true,
    "130.params": {
        "titleEN": "Street name with a dot",
        "problemEN": "There is a dot in the street name (excluding Ramps)",
        "solutionEN": "Expand the abbreviation or remove the dot",
        "template": "${type}:${street}",
        "regexp": "D/^[^4][0-9]?:.*\\./",
    },
    *Note: use D at the beginning of RegExp to enable debugging on JS console.
    *Note: do not forget to escape backslashes in strings, i.e. use "\\" instead of "\".
*/

window.WME_Validator_United_States = {
  ".country": "United States/Oklahoma",
  ".codeISO": "US",
  ".author": "turnertr|dBsooner",
  ".updated": "2015-08-07",
  ".link": "https://greasyfork.org/en/scripts/10930-wme-validator-oklahoma-localization",

  // MODIFICATIONS TO DEFAULT CHECKS -- START
  // 27: no city name on railroad
  "27.enabled": !0,
  // 90: Two-way Freeway Segment
  "90.enabled": !0,
  // 106: No State name selected
  "106.enabled": !0,
  // Ramp name longer than n characters. No reason to enable this as it is !US at this time.
  "112.enabled": false,
  "112.params": {
  "n": 55,
  },
  //130: Custom Script 1: Not working in Oklahoma
  // disabled due to having rights in other states, it gets somewhat.. preachy.
  // revisit at a later date if this is useful. -tt
  "128.enabled": true,
  "128.params": {
    "titleEN": "Bad TTS Street name",
    "problemEN": "Streets that start with St and Dr result in TTS reading Street or Drive",
    "solutionEN": "Add a period after St or Dr at the beginning of the street name",
    "template": "${street}#${altStreet[#]}",
    "regexp": "/^St |^Dr /"
  },
  //150: Freeway Locks - "n": # (Where # = actual lock level)
  "150.enabled": true,
  "150.params": {
	"n": 5,
  },
  //151: Major Highway Locks - "n": # (Where # = actual lock level)
  //increased to 4 8/04/15 per RC(txemt)
  "151.enabled": true,
  "151.params": {
	"n": 4,
  },
  //152: Minor Highway Locks - "n": # (Where # = actual lock level)
  "152.enabled": true,
  "152.params": {
	"n": 3,
  },
  //153: Ramp Locks - "n": # (Where # = actual lock level)
  //(average ramp will be 5, some 4.  You shouldn't see too many 2/3's, if so we'll ignore the validator)
  //Changed this to 3, just because there may be SOME, and we don't want it to flag them. There should be no 2's.
  "153.enabled": true,     
  "153.params": {
    "n": 3,
  },
  //154: Primary Street Locks - "n": # (Where # = actual lock level)
  "154.enabled": true,
  "154.params": {
	"n": 2,
  },
  // 163: Incorrect ramp name
  "163.enabled": true,
  "163.params": {
	"regexp": "/^(Exit: |Exit to )"
  },
  "163.solutionLink": "W:Road_names/USA#Exit_ramps_and_entrance_ramps_.28on-ramps.29",
  // 170: Lowercase Street Names, excluding to
  "170.enabled": true,
  "170.params": {
	"regexp": "/^(?!(to) [^a-z])((S|N|W|E) )?[a-z]/"
  },
  // 171: Incorrectly Abbreviated Street Name
  "171.enabled": !0,
  "171.solutionLink": "W:Abbreviations_&_Acronyms#Standard_Suffix_Abbreviations",
//    "171.params":{
//    "regexp": "/!?[0-9].+(Street|Avenue|Place|Tpke|Turnpike|Circle|South|North|East|West|Northeast|Northwest|Southeast|Southwest|Co Rd|Cord|County Rd|County Road)(! (Ave|Pl))\\b/"
//    }      
  // MODIFICATIONS TO DEFAULT CHECKS -- END
  // CUSTOM CHECKS -- START

  // 130: NOT Oklahoma. Good to leave enabled for all. Easier to disable in your local copy, or disable the entire tampermonkey script.
  "130.enabled": true,
  "130.params": {
	"titleEN": "Not Oklahoma",
	"problem": "The segment is assigned to another state",
	"solutionEN": "Make sure you are editing in OK and change it or disable script when working in another state",
	"template": "${state}",
	"regexp": "!/Oklahoma/"
  },
  "130.solutionLink": "W:Creating_and_editing_road_segments#Address_Properties",
  
  //131: Check for abbreviated or lower case banner abbreviations on numbered highways.
  "131.enabled": true,
  "131.params": {
	"titleEN": "Wrong banner abbreviation",
	"problemEN": "Banner abbreviation may be incorrect. Abbreviations ALT, BUS, BYP, CONN, LOOP, and SPUR should be in ALL CAPS",
	"solutionEN": "Change banner abbreviation to ALT, BUS, BYP, CONN, LOOP, SPUR, or TRUCK",
	"template": "${street}#${altStreet[#]}",
	"regexp": "/[0-9]+[A-Z]? ([Aa]lt(ernate)?|[Bb](us(iness)?|yp(ass)?)|[Cc]onn(ector)?|[Ll]oop|[Ss]pur|[Tt]ruck)/"
  },
  
  //132: Looking for bad highway names.
  "132.enabled": true,
  "132.params": {
	"titleEN": "Incorrect Segment Name",
	"problemEN": "Oklahoma uses CR for county road, SH for state highway, US for national highway, and I for interstate names",
	"solutionEN": "Rename the Street or Alt Street",
	"template": "${state}:${street}#${altStreet[#]}",
    "regexp": "/^Oklahoma:.*(?!(SH|CR|US|I)-[0-9]+ ?[A-Za-z]*)([Ii](- | -|-|=| =|= )?|[Uu]\.?[Ss]\.?( [Hh](WY|wy|ighway)| Rte| -|- |-|=| =|= )?|([Oo][Kk]|[Ss]tate|[Cc](ounty|[Oo])) ?([Hh](WY|wy|ighway)|[Rr][Dd]|Rte)|(([Oo][Kk]|([Ss]|[Cc])([Hh]|[Rr]))(- | -|-|=| =|= ))) ?[0-9]+ ?[A-Za-z]*/"
  },
  "132.solutionLink": "W:Oklahoma",
  
  //133: Wrong road type (freeway/major/minor/PS)
  "133.enabled": true,
  "133.params": {
	"titleEN": "Wrong road type (freeway/major/minor/PS)",
	"problemEN": "All non-BUS/SPUR/LOOP Interstates should be Freeway. All BUS/SPUR/LOOP Interstates and non-BUS/SPUR/LOOP US Highways should be at least Major Highway. All BUS/SPUR/LOOP US Highways and non-BUS/SPUR/LOOP State Highways should be at least Minor Highway. All BUS/SPUR/LOOP State Highways should be at least Primary Street.",
	"solutionEN": "Change the road type to Freeway or Major Highway",
	"template": "${typeRank}:#${street}@#${altStreet[@#]}@",
	"regexp": "/^(1[^25]?:#I-[0-9]+[A-Za-z]? ?(?:(?!SPUR|LOOP|BUS).)*)@|^[1-9][^245]?:#.*(I-[0-9]+[A-Za-z]* ?(SPUR|BUS|LOOP).*@)|^[1-9][^245]?:#.*(US-[0-9]+(?:(?!SPUR|LOOP|BUS).)*)@|^[1-9][^2-5]:.*#(SH-[0-9]+(?:(?!SPUR|LOOP|BUS).)*)@|^[1-9][^2-5]:.*#(US-)[0-9]+( BUS| LOOP| SPUR)+( [NSWE])?.*@|^[1-9][^1-5]:.*#(SH-)[0-9]+( BUS| LOOP| SPUR)+( [NSWE])?.*@/i"
  },
  "133.solutionLink": "W:Road_types/USA#Quick_reference_chart",
  
  //134: Tulsa Metro: Incorrect Street Name Format
  // N/S Segments should have have trailing East/West abbreviated (Pending Change to ONLY be abbreviated, not spelled out)
  // revisiting guidance per slack conversation 8/6/15.  Leaving enabled because it does check the current standard of spelling out East/West
  // E/W Segments in TULSA only should not have Trailing S or South
  "134.enabled": true,    
  //"134.severity": "warning",
  "134.params": {
	"titleEN": "Tulsa Metro: Incorrect Street Name Format",
	"problemEN": "Tulsa Metro Street Types: N/S Segments should not have East/West abbreviated. E/W Segments south of Admiral and East of Main should not have trailing 'S' or 'South'. (Excludes ramps)",
	"solutionEN": "Rename the Street or Alt Street",
	"template": "${type}#${state}:@${city}:${street}@#${altStreet[@#]}@",
    //New Check for N/S with East/West instead of E/W.
    //^(?!4).*Oklahoma:.*(@Tulsa:(E|East) [0-9]{1,3}(st|nd|rd|th) (St|Street|Pl|Ct|Cr|Cir) S)|((N(orth)?|S(outh)?) ?[0-9]{1,3}(st|nd|rd|th|) ?(West|East) ?(Av|Pl|Ct|Cr|Cir))
	"regexp": "/^(?!4).*Oklahoma:.*((@Tulsa:(E(ast)?) [0-9]+(st|nd|rd|th) ?(S(outh)?)? ?(St(reet)?|Pl(ace)?|C(our)?t|C(i)?r(cle)?|B(ou)?l(a)?v(ar)?d) S(outh)?)|((N |S )[0-9]+(st|nd|rd|th|) ?[WE]? ?(Av(e|enue)?|Pl(ace)?|C(our)?t|C(i)?r(cle)?))).*@/i"
  },
  "134.solutionLink": "W:Oklahoma#Roads",   

  //135: Bad TTS Street names
  "135.enabled": true,
  "135.params": {
    "titleEN": "Bad TTS Street name",
    "problemEN": "Streets that start with St and Dr result in TTS reading Street or Drive",
    "solutionEN": "Add a period after Jr or St or Dr where required",
    "template": "${street}#${altStreet[#]}",
    "regexp": "/^([SNEW] )+(St |Dr )|^St |^Dr |Jr |Rev /"
  },
  
  // CUSTOM CHECKS -- END
};
