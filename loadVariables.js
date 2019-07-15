////////////////////////////
//    loadVariables.js    //
//     firma project      //
//      version 1.24      //
// Designed by Eric Outen //
//     copyright 2019     //
////////////////////////////


/////////////
//Icon URLs//
/////////////
var commercialIcon = "https://raw.githubusercontent.com/outendesigns/firma/master/commercial.png";
var multiFamilyIcon = "https://raw.githubusercontent.com/outendesigns/firma/master/multi-familiy-housing.png";
var residentialIcon = "https://raw.githubusercontent.com/outendesigns/firma/master/residential.png";
var hospitalityIcon = "https://raw.githubusercontent.com/outendesigns/firma/master/hospitality-wineries.png";
var parksIcon = "https://raw.githubusercontent.com/outendesigns/firma/master/parks.png";
var restorationIcon = "https://raw.githubusercontent.com/outendesigns/firma/master/restoration.png";
var institutionalIcon = "https://raw.githubusercontent.com/outendesigns/firma/master/institutional.png";
var otherIcon = "https://raw.githubusercontent.com/outendesigns/firma/master/other.png";



      

/////////////////////
//Location Database//
/////////////////////
var locationArray = new Array();

//Commercial Properties//
var push = {type:"commercial", name:"Icon Building", city:"San Luis Obispo, CA" ,lat:35.2911468, lng:-120.6618753, icon:commercialIcon};
      locationArray.push(push);
var push = {type:"commercial", name:"Splash N' Dash", city:"Orcutt, CA" ,lat:34.864662, lng:-120.4371118, icon:commercialIcon};
      locationArray.push(push);
var push = {type:"commercial", name:"Starbucks", city:"Buellton, CA" ,lat:34.61121, lng:-120.1890247, icon:commercialIcon};
      locationArray.push(push);
var push = {type:"commercial", name:"Monterey Mix Use", city:"San Luis Obispo, CA" ,lat:35.2842868, lng:-120.6593946, icon:commercialIcon};
      locationArray.push(push);
var push = {type:"commercial", name:"Harris Administration Building", city:"San Luis Obispo, CA" ,lat:35.2387395, lng:-120.6374, icon:commercialIcon};
      locationArray.push(push);

//Multi-Family Housing Properties//
var push = {type:"multiFamily", name:"Plaza Riviera 45 Unit", city:"Santa Barbara, CA" ,lat:34.4333037, lng:-119.6976859, icon:multiFamilyIcon};
      locationArray.push(push);
var push = {type:"multiFamily", name:"Bishop Street Studios", city:"San Luis Obispo, CA" ,lat:35.2757267, lng:-120.6466518, icon:multiFamilyIcon};
      locationArray.push(push);
var push = {type:"multiFamily", name:"Oak Park Housing Development", city:"Paso Robles, CA" ,lat:35.6457154, lng:-120.6925346, icon:multiFamilyIcon};
      locationArray.push(push);
      
//Residential Properties//
var push = {type:"residential", name:"Ocean Avenue Residence", city:"Pismo Beach, CA" ,lat:35.1532595, lng:-120.6757273, icon:residentialIcon};
      locationArray.push(push);
var push = {type:"residential", name:"Pool + Cabana", city:"San Luis Obispo, CA" ,lat:35.282297, lng:-120.6297307, icon:residentialIcon};
      locationArray.push(push);
var push = {type:"residential", name:"Sunset Beach Estates", city:"Shell Beach, CA" ,lat:35.1739314, lng:-120.7054284, icon:residentialIcon};
      locationArray.push(push);

//Hospitality Properties//
var push = {type:"hospitality", name:"Peake Ranch Winery", city:"Buellton, CA" ,lat:34.5953388, lng:-120.2567004, icon:hospitalityIcon};
      locationArray.push(push);
var push = {type:"hospitality", name:"Hotel Ava", city:"Paso Robles, CA" ,lat:35.6255528, lng:-120.6942483, icon:hospitalityIcon};
      locationArray.push(push);
var push = {type:"hospitality", name:"The Monterey", city:"San Luis Obispo, CA" ,lat:35.28, lng:-120.6593946, icon:hospitalityIcon};
      locationArray.push(push);

//Parks Properties//
var push = {type:"parks", name:"Vandenberg Village Park & Playground", city:"Vandenberg, CA" ,lat:34.7046483, lng:-120.4829516, icon:parksIcon};
      locationArray.push(push);
var push = {type:"parks", name:"Mentone Park Renovation", city:"Grover Beach, CA" ,lat:35.1155144, lng:-120.6154412, icon:parksIcon};
      locationArray.push(push);
var push = {type:"parks", name:"Village Park", city:"Buellton, CA" ,lat:34.6, lng:-120.1, icon:parksIcon};
      locationArray.push(push);
var push = {type:"parks", name:"Jim May Park", city:"Santa Maria, CA" ,lat:34.9755846, lng:-120.427149, icon:parksIcon};
      locationArray.push(push);

//Restoration Properties//
var push = {type:"restoration", name:"Oak Hills Estates Open Space & Oak Mitigation", city:"Vandenberg, CA" ,lat:34.7161678, lng:-120.4607621, icon:restorationIcon};
      locationArray.push(push);
var push = {type:"restoration", name:"Communication Tower - Restoration for Native American Site", city:"" ,lat:35.2834, lng:-120.759, icon:restorationIcon};
      locationArray.push(push);
var push = {type:"restoration", name:"Operational Revegetation - Plains Exploration", city:"" ,lat:35.28, lng:-120.6, icon:restorationIcon};
      locationArray.push(push);

//Institutional Properties//
var push = {type:"institutional", name:"Cuesta Community College", city:"San Luis Obispo, CA" ,lat:35.329454, lng:-120.7465993, icon:institutionalIcon};
      locationArray.push(push);
var push = {type:"institutional", name:"Las Flores Pre School", city:"Santa Barbara, CA" ,lat:34.4138875, lng:-119.7011398, icon:institutionalIcon};
      locationArray.push(push);
var push = {type:"institutional", name:"Elementary School Campus", city:"Summerland, CA" ,lat:34.4244738, lng:-119.6115547, icon:institutionalIcon};
      locationArray.push(push);

//Other Properties//
var push = {type:"other", name:"San Luis Obispo Repertory Theater", city:"San Luis Obispo, CA" ,lat:35.282416, lng:-120.6654087, icon:otherIcon};
      locationArray.push(push);
