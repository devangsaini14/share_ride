var directionsDisplay = new google.maps.DirectionsRenderer();
var directionsService = new google.maps.DirectionsService();

function calcRoute(source,dest) {
  var origin      = new google.maps.LatLng(source.lat, source.lng);
  var destination = new google.maps.LatLng(dest.lat, dest.lng);
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
  directionsDisplay.setMap(handler.getMap());
});

var source;
var dest;

$( "#ride_source" ).blur(function() {
  var area = $("#ride_source" ).val();
  $.get("http://maps.googleapis.com/maps/api/geocode/json?address="+area+",+IN&sensor=true", function(data, status){
        alert("Data: " + data + "\nStatus: " + status);
        source = data.results[0].geometry.location;
        $("#ride_source_latitude").val(source.lat);
        $("#ride_source_longitude").val(source.lng);
  });

});
$( "#ride_destination" ).blur(function() {
  var area = $("#ride_destination" ).val();
  $.get("http://maps.googleapis.com/maps/api/geocode/json?address="+area+",+IN&sensor=true", function(data, status){
        alert("Data: " + data + "\nStatus: " + status);
        dest = data.results[0].geometry.location;
        $("#ride_destination_latitude").val(dest.lat);
        $("#ride_destination_longitude").val(dest.lng);
        calcRoute(source,dest);
  });

});
