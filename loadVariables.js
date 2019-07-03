      //Icon URLs
      var commercialIcon = "https://raw.githubusercontent.com/outendesigns/firma/master/commercial.png";
      var hospitalityIcon = "https://doc-14-a4-docs.googleusercontent.com/docs/securesc/ha0ro937gcuc7l7deffksulhg5h7mbp1/59n6bh66g87lh184dphf5qh478tdtoba/1562126400000/04007978502801228319/*/1VMmUuRIN_tvzxYqkFDfPcp25056VwDcC";
      var institutionalIcon = "https://doc-0s-a4-docs.googleusercontent.com/docs/securesc/ha0ro937gcuc7l7deffksulhg5h7mbp1/bf34vd64hlaskki3ngo8anhk0f6rh8o1/1562126400000/04007978502801228319/*/101ZjRIouJwp2XTacT_HSzbUINgcXScGW";
      var multiFamilyIcon = "https://doc-0g-a4-docs.googleusercontent.com/docs/securesc/ha0ro937gcuc7l7deffksulhg5h7mbp1/1mcl0hhaq2r12jsk7j5rmtq6v14n9k8n/1562126400000/04007978502801228319/*/1bge4YT3aVtK5nAJv27s-MYhdDtBEiHdm";
      var otherIcon = "https://doc-08-a4-docs.googleusercontent.com/docs/securesc/ha0ro937gcuc7l7deffksulhg5h7mbp1/ae5mikfp8hhjk3me2gp90qdk5tcucpj0/1562126400000/04007978502801228319/*/1XSmVSnFHozGrkLzdeB5E5v6WlRRcWtHF";
      var parksIcon = "https://doc-10-a4-docs.googleusercontent.com/docs/securesc/ha0ro937gcuc7l7deffksulhg5h7mbp1/g4bhg3a8i9a8qp3egih4bo4hgi51cerh/1562126400000/04007978502801228319/*/1Wkr4rFuAyzUKcWqLcN9hrx2nsN7YgkAM";
      var residentialIcon = "https://doc-00-a4-docs.googleusercontent.com/docs/securesc/ha0ro937gcuc7l7deffksulhg5h7mbp1/2o0p00u25bshjtqft544ql0v90cuqrtu/1562126400000/04007978502801228319/*/1ncz6qFIeAxVcUmaSCF-LHMujEOTwx3Ip";
      var restorationIcon = "https://doc-00-a4-docs.googleusercontent.com/docs/securesc/ha0ro937gcuc7l7deffksulhg5h7mbp1/3e7vjsr4kkno64mjk5k13klgvjb4vi48/1562126400000/04007978502801228319/*/1VxTMMn8K9OT0T2i1gKPRa7FRJZKNHreV";
      
      
      //Location Database
      
      var locationArray = new Array();
      //Commercial Properties//
      var push = {type:"commercial", name:"Icon Building, San Luis Obispo, CA", lat:35.2911468, lng:-120.6618753, icon:commercialIcon};
      locationArray.push(push);
      var push = {type:"commercial", name:"Splash N' Dash, Orcutt, CA", lat:34.864662, lng:-120.4371118, icon:commercialIcon};
      locationArray.push(push);
      var push = {type:"commercial", name:"Starbucks, Buellton, CA", lat:34.61121, lng:-120.1890247, icon:commercialIcon};
      locationArray.push(push);
      var push = {type:"commercial", name:"Monterey Mix Use, San Luis Obispo, CA", lat:35.2842868, lng:-120.6593946, icon:commercialIcon};
      locationArray.push(push);
      var push = {type:"commercial", name:"Harris Administration Building, San Luis Obispo, CA", lat:35.2387395, lng:-120.6374, icon:commercialIcon};
      locationArray.push(push);
      //Multi-Family Housing Properties//
      var push = {type:"multiFamily", name:"Plaza Riviera 45 Unit - Santa Barbara, CA", lat:34.4333037, lng:-119.6976859, icon:multiFamilyIcon};
      locationArray.push(push);
      var push = {type:"multiFamily", name:"Bishop Street Studios - San Luis Obispo, CA", lat:35.2757267, lng:-120.6466518, icon:multiFamilyIcon};
      locationArray.push(push);
      var push = {type:"multiFamily", name:"Oak Park Housing Development - Paso Robles, CA", lat:35.6457154, lng:-120.6925346, icon:multiFamilyIcon};
      locationArray.push(push);
      //Residential Properties//
      var push = {type:"residential", name:"Ocean Avenue Residence - Pismo Beach, CA", lat:35.1532595, lng:-120.6757273, icon:residentialIcon};
      locationArray.push(push);
      var push = {type:"residential", name:"Pool + Cabana - San Luis Obispo, CA", lat:35.282297, lng:-120.6297307, icon:residentialIcon};
      locationArray.push(push);
      var push = {type:"residential", name:"Sunset Beach Estates - Shell Beach, CA", lat:35.1739314, lng:-120.7054284, icon:residentialIcon};
      locationArray.push(push);
      //Hospitality Properties//
      var push = {type:"hospitality", name:"Peake Ranch Winery - Buellton, CA", lat:34.5953388, lng:-120.2567004, icon:hospitalityIcon};
      locationArray.push(push);
      var push = {type:"hospitality", name:"Hotel Ava - Paso Robles, CA", lat:35.6255528, lng:-120.6942483, icon:hospitalityIcon};
      locationArray.push(push);
      var push = {type:"hospitality", name:"The Monterey - San Luis Obispo, CA", lat:35.28, lng:-120.6593946, icon:hospitalityIcon};
      locationArray.push(push);
      //Parks Properties//
      var push = {type:"parks", name:"Vandenberg Village Park & Playground - Vandenberg, CA", lat:34.7046483, lng:-120.4829516, icon:parksIcon};
      locationArray.push(push);
      var push = {type:"parks", name:"Mentone Park Renovation - Grover Beach, CA", lat:35.1155144, lng:-120.6154412, icon:parksIcon};
      locationArray.push(push);
      var push = {type:"parks", name:"Village Park - Buellton, CA", lat:34.6145, lng:-120.1891996, icon:parksIcon};
      locationArray.push(push);
      var push = {type:"parks", name:"Jim May Park - Santa Maria, CA", lat:34.9755846, lng:-120.427149, icon:parksIcon};
      locationArray.push(push);
      //Restoration Properties//
      var push = {type:"restoration", name:"Oak Hills Estates Open Space & Oak Mitigation - Vandenberg, CA", lat:34.7161678, lng:-120.4607621, icon:restorationIcon};
      locationArray.push(push);
      var push = {type:"restoration", name:"Communication Tower - Restoration for Native American Site", lat:35.2834, lng:-120.759, icon:restorationIcon};
      locationArray.push(push);
      var push = {type:"restoration", name:"Operational Revegetation - Plains Exploration", lat:35.28, lng:-120.6, icon:restorationIcon};
      locationArray.push(push);
      //Institutional Properties//
      var push = {type:"institutional", name:"Cuesta Community College - San Luis Obispo, CA", lat:35.329454, lng:-120.7465993, icon:institutionalIcon};
      locationArray.push(push);
      var push = {type:"institutional", name:"Las Flores Pre School - Santa Barbara, CA", lat:34.4138875, lng:-119.7011398, icon:institutionalIcon};
      locationArray.push(push);
      var push = {type:"institutional", name:"Elementary School Campus - Summerland, CA", lat:34.4244738, lng:-119.6115547, icon:institutionalIcon};
      locationArray.push(push);
      //Other Properties//
      var push = {type:"other", name:"San Luis Obispo Repertory Theater - San Luis Obispo, CA", lat:35.282416, lng:-120.6654087, icon:otherIcon};
      locationArray.push(push);
