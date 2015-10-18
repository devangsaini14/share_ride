var directionsDisplay = new google.maps.DirectionsRenderer();
var directionsService = new google.maps.DirectionsService();

function calcRoute(source_lat,source_lng,dest_lat,dest_lng) {

  var origin      = new google.maps.LatLng(source_lat,source_lng);
  var destination = new google.maps.LatLng(dest_lat, dest_lng);
  var request = {
      origin:      origin,
      destination: destination,
      travelMode:  google.maps.TravelMode.DRIVING
  };
  directionsService.route(request, function(response, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(response);
    }
  });
}


var handler = Gmaps.build('Google');
handler.buildMap({ internal: {id: 'map'}}, function(){
  markers = handler.addMarkers(<%=raw @hash.to_json %>);
  markers2 = handler.addMarkers(<%=raw @hash2.to_json %>);
  source_lat = markers[0].serviceObject.position.A;
  source_lng = markers[0].serviceObject.position.F;
  dest_lat = markers2[0].serviceObject.position.A;
  dest_lng = markers2[0].serviceObject.position.F;
  calcRoute(source_lat,source_lng,dest_lat,dest_lng);
  directionsDisplay.setMap(handler.getMap());
});
