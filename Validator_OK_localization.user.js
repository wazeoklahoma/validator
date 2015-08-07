// ==UserScript==
// @name                WME Validator Localization for Oklahoma
// @namespace           https://greasyfork.org/en/scripts/10930-wme-validator-oklahoma-localization
// @version             1.0.14
// @author              turnertr
// @description         This script localizes WME Validator for United States/Oklahoma. You also need main package (WME Validator) installed.
// @match               https://editor-beta.waze.com/*editor/*
// @match               https://www.waze.com/*editor/*
// @grant               none
// @run-at              document-start
// ==/UserScript==
//
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
  ".author": "turnertr",
  ".updated": "2015-07-12",
  ".link": "https://greasyfork.org/en/scripts/10930-wme-validator-oklahoma-localization",
 
  "112.enabled": false,
  "112.params": {
  "n": 55,
  },
  "130.enabled": false,
  "130.params": {
    "titleEN": "Not Oklahoma",
    "problem": "The segment is assigned to another state",
    "solutionEN": "Make sure you are editing in OK and change it or disable script when working in another state",
    "template": "${state}",
    "regexp": "!/Oklahoma/"
  },
  "130.solutionLink": "W:Creating_and_editing_road_segments#Address_Properties", 
  "131.enabled": true,
  "131.params": {
    "titleEN": "Potential Incorrect Abbreviation",
    "problemEN": "Name abbreviation may be incorrect. Alternative routes should be labeled ALT and abbreviations ALT, BUS, BYP, CONN, LOOP, SCN, and SPUR should be in ALL CAPS",
    "solutionEN": "Change abbreviation to ALT, BUS, BYP, CONN, LOOP, SCN, SPUR, or TRUCK in ALL CAPS",
    "template": "${street}##${altStreet[0]}##${altStreet[1]}##${altStreet[2]}##${altStreet[3]}##${altStreet[4]}##${altStreet[5]}##${altStreet[6]}##${altStreet[7]}##${altStreet[8]}##${altStreet[9]}",
    "regexp": "/!?[0-9].+(Alt|Business|Bus|Byp|Conn|Loop|Scn|Spur)\\b/"
  },
  "132.enabled": true,
  "132.params": {
    "titleEN": "Wrong name on US Highway",
    "problemEN": "All US highways should be named US-XXX",
    "solutionEN": "Change name to US-XX (include directional if one-way) and verify with GIS the highway name is correct.",
    "template": "${street}##${altStreet[0]}##${altStreet[1]}##${altStreet[2]}##${altStreet[3]}##${altStreet[4]}##${altStreet[5]}##${altStreet[6]}##${altStreet[7]}##${altStreet[8]}##${altStreet[9]}",
    "regexp": ".*\\b(?:US Highway |US Hwy Route |US Hwy Rte |US Hwy |US Rte |US- |US )[0-9]{1,3}\\b/i"
  },
  "132.solutionLink": "W:Oklahoma#Roads",
  "133.enabled": true,
  "133.params": {
    "titleEN": "Wrong name on state highway",
    "problemEN": "All state highways should be named SH-XXX in Oklahoma",
    "solutionEN": "Change name to SH-XXX and verify with GIS the highway name is correct.",
    "template": "${state}:##${street}##${altStreet[0]}##${altStreet[1]}##${altStreet[2]}##${altStreet[3]}##${altStreet[4]}##${altStreet[5]}##${altStreet[6]}##${altStreet[7]}##${altStreet[8]}##${altStreet[9]}",
    "regexp": "/^Oklahoma:.*\\b(?:State Highway |State Hwy |State Rd |State Rte |SR-|OK-|Oklahoma |Okla |OK )[0-9]{1,3}[A-Z]?\\b/i"
  },
  "133.solutionLink": "W:Oklahoma#Roads",
  "134.enabled": true,
  "134.params": {
    "titleEN": "Wrong road type (Major)",
    "problemEN": "All US Highways should be at least Major Highway (except BUS, SPUR, LOOP)",
    "solutionEN": "Change the road type to Major Highway",
    "template": "${typeRank}#${street}@#${altStreet[0]}@#${altStreet[1]}@#${altStreet[2]}@#${altStreet[3]}@#${altStreet[4]}@#${altStreet[5]}@#${altStreet[6]}@#${altStreet[7]}@#${altStreet[8]}@#${altStreet[9]}@",
    "regexp": "/^[1-9](?![245]).*#(?:US Hwy |US-)[0-9]+(?: ALT| BYP| CONN| TRUCK| SCN| Scenic| [NSWE])*@/i"
  },
  "134.solutionLink": "W:Road_types/USA#Major_Highway",
  "135.enabled": true,
  "135.params": {
    "titleEN": "Wrong road type (Minor)",
    "problemEN": "All US BUS, SPUR, LOOP Highways and all State Highways (except BUS, SPUR, LOOP) should be at least Minor Highway type",
    "solutionEN": "Change the road type to Minor Highway",
    "template": "${typeRank}#${street}@#${altStreet[0]}@#${altStreet[1]}@#${altStreet[2]}@#${altStreet[3]}@#${altStreet[4]}@#${altStreet[5]}@#${altStreet[6]}@#${altStreet[7]}@#${altStreet[8]}@#${altStreet[9]}@",
    "regexp": "/^[1-9](?![2-5]).*#(?:(?:State Hwy |SH-|K-|LA-|M-|MA-|MS-|NC-|SC-)[0-9]+(?:| ALT| BYP| CONN| TRUCK| SCN| Scenic| [NSWE])*|(?:US Hwy |US-)[0-9]+(?: BUS| LOOP| SPUR)+(?: [NSWE])?)@/i"
  },
  "135.solutionLink": "W:Road_types/USA#Minor_Highway",
  "136.enabled": true,
  "136.params": {
    "titleEN": "Wrong road type (Primary)",
    "problemEN": "All State BUS, SPUR, LOOP Highways should be at least Primary Street type",
    "solutionEN": "Change the road type to Primary Street",
    "template": "${typeRank}#${street}@#${altStreet[0]}@#${altStreet[1]}@#${altStreet[2]}@#${altStreet[3]}@#${altStreet[4]}@#${altStreet[5]}@#${altStreet[6]}@#${altStreet[7]}@#${altStreet[8]}@#${altStreet[9]}@",
    "regexp": "/^[1-9](?![1-5]).*#(?:State Hwy |SH-|K-|LA-|M-|MA-|MS-|NC-|SC-)[0-9]+(?: BUS| LOOP| SPUR)+(?: [NSWE])?@/i"
  },
  "136.solutionLink": "W:Road_types/USA#Primary_Street",
    "137.enabled": true,    
    //"137.severity": "warning",
    "137.params": {
        "titleEN": "Tulsa Metro: Incorrect N/S Street Name Format",
        "problemEN": "Tulsa Street Types: East/West Ave not Abbreviated (excluding ramps)",
        "solutionEN": "For streets based in Tulsa ending in Ave, the preceding East/West is not abbreviated",
        "template": "${type}#${state}:${street}##${altStreet[0]}##${altStreet[1]}##${altStreet[2]}##${altStreet[3]}##${altStreet[4]}##${altStreet[5]}##${altStreet[6]}##${altStreet[7]}##${altStreet[8]}##${altStreet[9]}",
        "regexp": "/^(?!4).*Oklahoma:.*\\b(?:N |S |)[1-9]{1,3}(?:st|nd|rd|th|) ([WE]) (Av|Ave|Pl|Ct|Cr)\\b"
    },
    "137.solutionLink": "W:Oklahoma#Roads",    
    "138.enabled": true,        
    //"138.severity": "low",
    "138.params": {
        "titleEN": "Tulsa: Incorrect E/W Street Name Format",
        "problemEN": "Tulsa Street Types: E/W Street Containing Post-Directional South (excludes ramps)",
        "solutionEN": "For streets within the city of Tulsa, all E/W Streets omit the post-directional S, remove the S",
        "template": "${type}#${city}:${street}##${altStreet[0]}##${altStreet[1]}##${altStreet[2]}##${altStreet[3]}##${altStreet[4]}##${altStreet[5]}##${altStreet[6]}##${altStreet[7]}##${altStreet[8]}##${altStreet[9]}",
        "regexp": "/^(?!4).*#Tulsa:.*\\b([EW]|[East|West]) [1-9]{1,3}(?:st|nd|rd|th) (St|Street|Pl|Ct|Cr) ([S|South])\\b"
    },
    "138.solutionLink": "W:Oklahoma#Roads",
  "150.enabled": true,
  "150.params": {
  // {number} minimum lock level
  "n": 5,
  },
  "151.enabled": true,
  "151.params": {
  // {number} minimum lock level
  "n": 4,
  },
  "152.enabled": true,
  "152.params": {
  // {number} minimum lock level
  "n": 3,
  },
  "153.enabled": true,
  "153.params": {
    // {number} minimum lock level
    "n": 5,
  },
  "154.enabled": true,
  "154.params": {
  // {number} minimum lock level
  "n": 2,
  },
    // 163: Incorrect ramp name
  "163.enabled": true,
  "163.params": {
    "regexp": "/^(Exit: |Exit to )"
  },
  "163.solutionLink": "W:Road_names/USA#Exit_ramps_and_entrance_ramps_.28on-ramps.29",
  // 171 Incorrectly Abbreviated Street Name
    "171.enabled": true,
    "171.params":{
    "regexp": "/!?[0-9].+(Street|Avenue|Place|Tpke|Turnpike|Circle|South|North|East|West|Northeast|Northwest|Southeast|Southwest|Co Rd|Cord|County Rd|County Road)(! (Ave|Pl))\\b/"
    }    
    
};
