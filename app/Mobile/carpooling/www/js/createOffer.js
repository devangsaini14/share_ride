
//                     {
//                        "ride": {
//                            "contact": 244355535,
//                            "date": "2015-10-16",
//                            "destination": "Sri lanka",
//                            "destination_latitude": 3244,
//                            "destination_longitude": 43535,
//                            "email": "sdfksbf@sdkjn.com",
//                            "price": 434,
//                            "seats": 3,
//                            "source": "GOA,",
//                            "source_latitude": 423423,
//                            "source_longitude": 34242
//                        }
//                     }

//$('input').geocomplete({ map: ".map_canvas" });
//
//// Call the find method with the parameter "NYC".
//$('input').geocomplete("find", "NYC");
//
//// Get the map and set a new zoom level.
//var map = $("input").geocomplete("map");
//map.setZoom(3);

function submitCreateAction()
{
    var source=$("#csource").val();
    var destination=$("#cdestination").val();
    var date=$("#cdate").val();
    var time=$("#ctime").val();
    var price=$("#cprice").val();
    var seats=$("#cseats").val();
    var email=$("#cemail").val();
    var phone =$("#cphone").val();
    
    
    var data = new Object();
    data = {'source': source,'destination': destination,'date': date,'price': price,'seats': seats,'email': email,'contact': phone};
    CreateOffer.callCreateService(succesCreateService,failureCreateService,data);
    
//    var geocoder =  new google.maps.Geocoder();
//    geocoder.geocode( { 'address': source}, function(results, status) {
//                     if (status == google.maps.GeocoderStatus.OK) {
//                     alert("location : " + results[0].geometry.location.lat() + " " +results[0].geometry.location.lng());
//                     data.ride.source_latitude = results[0].geometry.location.lat();
//                     data.ride.source_longitude = results[0].geometry.location.lng();
//                  
//                     geocoder.geocode( { 'address': destination}, function(results, status) {
//                                      if (status == google.maps.GeocoderStatus.OK) {
//                                      alert("location : " + results[0].geometry.location.lat() + " " +results[0].geometry.location.lng());
//                                      data.ride.destination_latitude = results[0].geometry.location.lat();
//                                      data.ride.destination_longitude = results[0].geometry.location.lng();
//                                      CreateOffer.callCreateService(succesCreateService,failureCreateService,data);
//                                      } else {
//                                      data.ride.destination_latitude = "0.000000";
//                                      data.ride.destination_longitude = "0.000000";
//                                      }
//                                      });
//                     
//                     
//                     } else {
//                     data.ride.source_latitude = "0.000000";
//                     data.ride.source_longitude = "0.000000";
//                     }
//                     });

}

function succesCreateService ()
{
    alert("success");
}


function failureCreateService ()
{
    alert("failure");
}


function ClearCreateView()
{
    $("#source").val('');
    $("#destination").val('');
  $("#date").val('');
$("#time").val('');
$("#price").val('');
$("#seats").val('');
$("#email").val('');
    $("#phone").val('');
}

