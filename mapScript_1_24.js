var map,infowindow,contentString,mapStyle=[{stylers:[{visibility:"off"}]},{featureType:"landscape",elementType:"geometry",stylers:[{visibility:"on"},{color:"#fafafa"}]},{featureType:"water",elementType:"geometry",stylers:[{visibility:"on"},{color:"#d4ebf2"}]}],markerArray=new Array;function initMap(){(map=new google.maps.Map(document.getElementById("map"),{center:{lat:35.280096,lng:-120.6609255},zoom:8,styles:mapStyle})).setMapTypeId("terrain");var t=document.getElementById("legend");map.controls[google.maps.ControlPosition.LEFT_TOP].push(t);var e={lat:0,lng:0};for(i=0;i<locationArray.length;i++)e={lat:locationArray[i].lat,lng:locationArray[i].lng},markerArray[i]=new google.maps.Marker({position:e,icon:locationArray[i].icon,map:map});contentString="Error: Content cannot be loaded",infowindow=new google.maps.InfoWindow({content:contentString}),markerArray.forEach(function(i,t){i.addListener("click",function(){var e={lat:locationArray[t].lat,lng:locationArray[t].lng},a="<p>"+locationArray[t].name+"<br>"+locationArray[t].city+"</p>";map.setZoom(11),map.panTo(e),infowindow.setContent(a),infowindow.open(map,i)})}),map.data.setStyle({fillColor:"white",strokeWeight:5,strokeColor:"#1d1e60"}),loadMapShapes()}function centerOnClick(i,t,e){document.getElementById("map").scrollIntoView();var a={lat:i,lng:t},n="<p>"+locationArray[e].name+"<br>"+locationArray[e].city+"</p>";map.setZoom(10),map.panTo(a),infowindow.setContent(n),infowindow.open(map,markerArray[e])}function loadMapShapes(){map.data.loadGeoJson("https://storage.googleapis.com/mapsdevsite/json/states.js",{idPropertyName:"STATE"}),google.maps.event.addListenerOnce(map.data,"addfeature",function(){google.maps.event.trigger(document.getElementById("census-variable"),"change")})}for(var lgndItems=document.getElementsByClassName("legendCategory"),i=0;i<lgndItems.length;i++)lgndItems[i].addEventListener("click",function(){var i=document.getElementsByClassName("active");i[0].className=i[0].className.replace(" active",""),this.className+=" active"});function showHideMarkers(i,t){markerArray.forEach(function(t,e){locationArray[e].type!=i?markerArray[e].setVisible(!1):markerArray[e].setVisible(!0)});map.panTo({lat:35.280096,lng:-120.6609255}),map.setZoom(8),infowindow.close()}function showAllMarkers(){markerArray.forEach(function(i){i.setVisible(!0)});map.panTo({lat:35.280096,lng:-120.6609255}),map.setZoom(8),infowindow.close()}var commercialList=document.getElementById("commercialList"),multiFamilyList=document.getElementById("multiFamilyList"),residentialList=document.getElementById("residentialList"),hospitalityList=document.getElementById("hospitalityList"),parksList=document.getElementById("parksList"),restorationList=document.getElementById("restorationList"),institutionalList=document.getElementById("institutionalList"),otherList=document.getElementById("otherList");for(i=0;i<locationArray.length;i++){var li;if("commercial"==locationArray[i].type)(li=document.createElement("li")).innerHTML="<p class='projListLi' onclick='centerOnClick("+locationArray[i].lat+","+locationArray[i].lng+","+i+")'>"+locationArray[i].name+"</p>",commercialList.appendChild(li);if("multiFamily"==locationArray[i].type)(li=document.createElement("li")).innerHTML="<p class='projListLi' onclick='centerOnClick("+locationArray[i].lat+","+locationArray[i].lng+","+i+")'>"+locationArray[i].name+"</p>",multiFamilyList.appendChild(li);if("residential"==locationArray[i].type)(li=document.createElement("li")).innerHTML="<p class='projListLi' onclick='centerOnClick("+locationArray[i].lat+","+locationArray[i].lng+","+i+")'>"+locationArray[i].name+"</p>",residentialList.appendChild(li);if("hospitality"==locationArray[i].type)(li=document.createElement("li")).innerHTML="<p class='projListLi' onclick='centerOnClick("+locationArray[i].lat+","+locationArray[i].lng+","+i+")'>"+locationArray[i].name+"</p>",hospitalityList.appendChild(li);if("parks"==locationArray[i].type)(li=document.createElement("li")).innerHTML="<p class='projListLi' onclick='centerOnClick("+locationArray[i].lat+","+locationArray[i].lng+","+i+")'>"+locationArray[i].name+"</p>",parksList.appendChild(li);if("restoration"==locationArray[i].type)(li=document.createElement("li")).innerHTML="<p class='projListLi' color:#1d1e60;' onclick='centerOnClick("+locationArray[i].lat+","+locationArray[i].lng+","+i+")'>"+locationArray[i].name+"</p>",restorationList.appendChild(li);if("institutional"==locationArray[i].type)(li=document.createElement("li")).innerHTML="<p class='projListLi' onclick='centerOnClick("+locationArray[i].lat+","+locationArray[i].lng+","+i+")'>"+locationArray[i].name+"</p>",institutionalList.appendChild(li);if("other"==locationArray[i].type)(li=document.createElement("li")).innerHTML="<p class='projListLi' onclick='centerOnClick("+locationArray[i].lat+","+locationArray[i].lng+","+i+")'>"+locationArray[i].name+"</p>",otherList.appendChild(li)}
