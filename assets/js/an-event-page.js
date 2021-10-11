// Event page map

$(document).ready(function(){
  var mapDiv = $("#Single-Action-Map")
  console.log(mapDiv)
  var addr = JSON.parse(decodeURIComponent(mapDiv.attr("map_location")));
  var addrLoc = [addr.location.latitude,addr.location.longitude]
  console.log(addr)
  var map = L.map("Single-Action-Map",{
                      center: addrLoc,
                      crs: L.CRS.EPSG3857,
                      zoom: 15,
                      zoomControl: true,
                      preferCanvas: false,
  });
  var OpenStreetMap_Mapnik = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  });
  OpenStreetMap_Mapnik.addTo(map);
  var redMarker = new L.Icon({
   iconUrl: '/assets/marker-icon-red.png',
   shadowUrl: '/assets/marker-shadow.png',
   iconSize: [25, 41],
   iconAnchor: [12, 41],
   popupAnchor: [1, -34],
   shadowSize: [41, 41]
  });
  var newMarker = L.marker(addrLoc,{icon: redMarker});
  newMarker.addTo(map);
})
