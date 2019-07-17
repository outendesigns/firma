////////////////////////////
//     mapScript.js       //
//     firma project      //
//      version 2.0       //
// Designed by Eric Outen //
//     copyright 2019     //
////////////////////////////

var mapStyle = [{
  'stylers': [{'visibility': 'off'}]
}, {
  'featureType': 'landscape',
  'elementType': 'geometry',
  'stylers': [{'visibility': 'on'}, {'color': '#fafafa'}]
}, {
  'featureType': 'water',
  'elementType': 'geometry',
  'stylers': [{'visibility': 'on'}, {'color': '#d4ebf2'}]
}];

var map;
var markerArray = new Array();
var infowindow;
var contentString;
var legend;

////////////////////////////////
// Initialize and add the map //
////////////////////////////////
function initMap() {
  // The location of San Luis Obispo
  var slo = {lat: 35.280096, lng: -120.6609255};
  // The map, centered at San Luis Obispo
  map = new google.maps.Map(document.getElementById('map'), {
    center: slo,
    zoom: 8,
    styles: mapStyle,
    disableDefaultUI: true
  });

  map.setMapTypeId('terrain');

  //map.

  //Initiate Legend Toggle Switch//
  var legendToggle = document.getElementById('legendToggle');
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(legendToggle);


  //Initiate Map Legend Position
  var legend = document.getElementById('legend');
  map.controls[google.maps.ControlPosition.LEFT_CENTER].push(legend);

  //For Loop Map Markers
  var markerLatLng = {lat:0, lng:0};
  for (i=0; i<locationArray.length; i++){
    markerLatLng = {lat:locationArray[i].lat, lng:locationArray[i].lng};
    markerArray[i] = new google.maps.Marker({position: markerLatLng, icon:locationArray[i].icon, map: map});
  }

  //Initialize content of infowindow
  contentString = "Error: Content cannot be loaded";
  
  //Create infowindow with default content
  infowindow = new google.maps.InfoWindow({
    content:contentString
  });

  //Create loop to click on markers and pop up infowindow with dynamically loaded content (Also center and zoom on the marker)
  markerArray.forEach(function(marker, i){
    //console.log(i);
    marker.addListener('click', function(){
      var centerLatLng = {lat: locationArray[i].lat, lng: locationArray[i].lng};
      var newContent = "<p>"+locationArray[i].name+"<br>"+locationArray[i].city+"</p>"
      map.setZoom(11);
      map.panTo(centerLatLng);
      infowindow.setContent(newContent);
      infowindow.open(map,marker);
    });
  });

  // Adjust map styles
  map.data.setStyle({
    fillColor: 'white',
    strokeWeight: 5,
    strokeColor: '#1d1e60'
  });

  //state polygons only need to be loaded once, do them now
  loadMapShapes();

//End initmap function        
}

function hideLegend(){
  //alert("clicky");
  document.getElementById("legend").style.display="none";
}
function showLegend(){
  document.getElementById("legend").style.display="block";
}

var toggleItems = document.getElementsByClassName("mapToggle");
for (var i = 0; i < toggleItems.length; i++) {
  toggleItems[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("toggleActive");
    current[0].className = current[0].className.replace(" toggleActive", "");
    this.className += " toggleActive";
  });
}

function centerOnClick(lt,lg,id){
  //document.getElementById("map").scrollIntoView();
  var centerLatLng = {lat: lt, lng: lg};
  var newContent = "<p>"+locationArray[id].name+"<br>"+locationArray[id].city+"</p>"
  map.setZoom(10);
  map.panTo(centerLatLng);
  infowindow.setContent(newContent);
  infowindow.open(map, markerArray[id]);
  //Reset all markers
  markerArray.forEach(function(marker){
    marker.setVisible(true);
  });
}

/** Loads the state boundary polygons from a GeoJSON source. */
function loadMapShapes() {
  // load US state outline polygons from a GeoJson file
  map.data.loadGeoJson('https://storage.googleapis.com/mapsdevsite/json/states.js', { idPropertyName: 'STATE' });

  // wait for the request to complete by listening for the first feature to be added
  google.maps.event.addListenerOnce(map.data, 'addfeature', function() {
    google.maps.event.trigger(document.getElementById('census-variable'),
      'change');
  });
}

//Change display of Legend item on click
var lgndItems = document.getElementsByClassName("legendCategory");
for (var i = 0; i < lgndItems.length; i++) {
  lgndItems[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

//Show Hide Markers
function showHideMarkers(type, id){
  markerArray.forEach(function(marker,i){
    if (locationArray[i].type != type){
      markerArray[i].setVisible(false);
    } else {
      markerArray[i].setVisible(true);
    }
  });
  var slo = {lat: 35.280096, lng: -120.6609255};
  map.panTo(slo);
  map.setZoom(8);
  infowindow.close();
};

//Show All Markers
function showAllMarkers(){
  markerArray.forEach(function(marker){
    marker.setVisible(true);
  });
  var slo = {lat: 35.280096, lng: -120.6609255};
  map.panTo(slo);
  map.setZoom(8);
  infowindow.close();
}

//Variables and dynamically load the project list//
var commercialList = document.getElementById("commercialList");
var multiFamilyList = document.getElementById("multiFamilyList");
var residentialList = document.getElementById("residentialList");
var hospitalityList = document.getElementById("hospitalityList");
var parksList = document.getElementById("parksList");
var restorationList = document.getElementById("restorationList");
var institutionalList = document.getElementById("institutionalList");
var otherList = document.getElementById("otherList");

for (i=0; i<locationArray.length; i++){
  if (locationArray[i].type == "commercial"){
    var li = document.createElement("li");
    li.innerHTML = "<a href='#map' class='projListLi' onclick='centerOnClick("+locationArray[i].lat+","+locationArray[i].lng+","+i+")'>"+locationArray[i].name+"</a>";
    commercialList.appendChild(li);
  }

  if (locationArray[i].type == "multiFamily"){
    var li = document.createElement("li");
    li.innerHTML = "<a href='#map' class='projListLi' onclick='centerOnClick("+locationArray[i].lat+","+locationArray[i].lng+","+i+")'>"+locationArray[i].name+"</a>";
    multiFamilyList.appendChild(li);
  }

  if (locationArray[i].type == "residential"){
    var li = document.createElement("li");
    li.innerHTML = "<a href='#map' class='projListLi' onclick='centerOnClick("+locationArray[i].lat+","+locationArray[i].lng+","+i+")'>"+locationArray[i].name+"</a>";
    residentialList.appendChild(li);
  }

  if (locationArray[i].type == "hospitality"){
    var li = document.createElement("li");
    li.innerHTML = "<a href='#map' class='projListLi' onclick='centerOnClick("+locationArray[i].lat+","+locationArray[i].lng+","+i+")'>"+locationArray[i].name+"</a>";
    hospitalityList.appendChild(li);
  }

  if (locationArray[i].type == "parks"){
    var li = document.createElement("li");
    li.innerHTML = "<a href='#map' class='projListLi' onclick='centerOnClick("+locationArray[i].lat+","+locationArray[i].lng+","+i+")'>"+locationArray[i].name+"</a>";
    parksList.appendChild(li);
  }

  if (locationArray[i].type == "restoration"){
    var li = document.createElement("li");
    li.innerHTML = "<a href='#map' class='projListLi' onclick='centerOnClick("+locationArray[i].lat+","+locationArray[i].lng+","+i+")'>"+locationArray[i].name+"</a>";
    restorationList.appendChild(li);
  }

  if (locationArray[i].type == "institutional"){
    var li = document.createElement("li");
    li.innerHTML = "<a href='#map' class='projListLi' onclick='centerOnClick("+locationArray[i].lat+","+locationArray[i].lng+","+i+")'>"+locationArray[i].name+"</a>";
    institutionalList.appendChild(li);
  }

  if (locationArray[i].type == "other"){
    var li = document.createElement("li");
    li.innerHTML = "<a href='#map' class='projListLi' onclick='centerOnClick("+locationArray[i].lat+","+locationArray[i].lng+","+i+")'>"+locationArray[i].name+"</a>";
    otherList.appendChild(li);
  }
}

//Detect Mobile Device or Screen Size and change styles//
if( navigator.userAgent.match(/Android/i)
|| navigator.userAgent.match(/webOS/i)
|| navigator.userAgent.match(/iPhone/i)
|| navigator.userAgent.match(/iPad/i)
|| navigator.userAgent.match(/iPod/i)
|| navigator.userAgent.match(/BlackBerry/i)
|| navigator.userAgent.match(/Windows Phone/i)
)
{
  //Mobile & Or small window size detected
  var all = document.getElementsByClassName('projListDivs');
  for (var i=0; i<all.length; i++){
    all[i].style.width="100%";
    all[i].style.float="none";
  }
  //Hide Map Legend on Mobile by Default
  document.getElementById("legend").style.display="none";
  document.getElementById("showLegend").className.replace(" toggleActive", "");
  document.getElementById("hideLegend").className += " toggleActive";
}
