$(document).off("pagebeforeshow", "saved_list_view").on("pagebeforeshow", "#saved_list_view",function()
{
    retriveAllSavedHomePropertyList(showSavedPropertiesList);
});

function showPropertyListHandler()
{
    $("#saved_list").html("");
     $("#saved_list").html("<h1> Loading </h1>");
    retriveAllSavedHomePropertyList(showSavedPropertiesList);
}

function showPropertyHandler()
{
    $("#saved_list").html("");
     $("#saved_list").html("<h1> Loading </h1>");
    retriveAllSavedHomeProperties(showSavedProperties);
}



//Add / Remove  a Property to favourites

function showSuccessAlert()
{
  //  alert("Success");
//    $("#dialogPage").dialog('open');
    showTimout();
   
}
function removePropertyFromFav()
{
    removeProperty("homeID",showSuccessAlert);
}


//Add a PropertyList to favourites
function removePropertyListFromFav()
{
   // removePropertyList(queryString,showSuccessAlert);
}



function showSavedProperties (transaction, result) {
    var count = 0;
    if (result != null && result.rows != null) {
          var html="<ul data-role='listview'  style = 'margin-top: 10%;' >";
        for (var i = 0; i < result.rows.length; i++) {
            
            var homeProperty = result.rows.item(i);
            count++;
             html+=" <li><a href='#'> <img src='http://placehold.it/50x50' style='height:100%;width:5%;padding:0.6%;' /> <h3 style='margin:-5px 0px;'>"+homeProperty.name+"</h3><p>"+homeProperty.name/*home_type*/+" | By "+homeProperty.name/*builder*/+"</p> <p>$"+homeProperty.price+" | Sq Ft "+homeProperty.square_footage+"</p><p>"+homeProperty.bedrooms+" | "+homeProperty.bathrooms+"</p><p>"+homeProperty.garages+" | "+homeProperty.stories+"</p></a></li>";
            
            
            
            
//            console.log('<br> List 2222 ' + homeProperty.id + '. ' + homeProperty.name + '. ' + homeProperty.address + '. ' + homeProperty.city + '. ' + homeProperty.price + '. ' + homeProperty.bedrooms + '. ' + homeProperty.bathrooms + '. ' + homeProperty.garages + '. ' + homeProperty.square_footage + '. ' + homeProperty.stories + '. ' + homeProperty.property_description + '. ' + homeProperty.latitude + '. ' + homeProperty.longitude + '. ' + " " + '. ' + " " + '. ' + homeProperty.categoryID);
        }
         $("#saved_list").html("");
        if(count == 0)
        {
            html += " <li> No Results </li>"
        }
        $("#saved_list").html(html+"</ul>");
        $("#saved_list").trigger("create");
    }
}



function showSavedPropertiesList (transaction, result) {
    var count = 0;
    if (result != null && result.rows != null) {
          var html="<ul id='list' data-role='listview' style='overflow-x:hidden;overflow-y: scroll;;min-height:550px;margin-top: 20%;padding-left:20px;width:100%;'>";
        for (var i = 0; i < result.rows.length; i++) {
            var homeProperty = result.rows.item(i);
//            html+=" <li><a href='#'><h3 style='margin:-5px 0px;'>"+homeProperty.homeType+"</h3>"+ "<p> Price From $ " +homeProperty.pricemax+" | Sq Ft "+homeProperty.squarefootagemax+"</p> <p>"+ homeProperty.bedroomsmax +" Beds | "+homeProperty.bathroomsmax+" Baths </p> <p>"+homeProperty.garagesmax+" Garages | "+ homeProperty.storiesmax+" Levels </p></a></li>";
            
            count++;
            html += "<li><a href='#'><div class='ui-grid-a' style='width:100%;'><div class='ui-block-a'>"+ homeProperty.homeType+"</div><div id='favourite' class='ui-block-b' style = 'text-align:right;'><img src='img/fav-icon-select.png'/></div></div><p> Price From $ "+ homeProperty.pricemax +" | Sq Ft From " + homeProperty.squarefootagemax +"</p><div class='ui-grid-c' style='width:100%;'><div class='ui-block-a' style = 'margin-left:1.5px;width:30%;max-width:120px;min-width:50px;'><p style='border: 1px; border-style: solid; border-color: #545658;padding:2px;color:#545658;'><img src='img/bedroom-icon.png' style = 'padding-left: 5px;'/>"+homeProperty.bedroomsmax+" Beds</p></div><div class='ui-block-b' style = 'margin-left: 1.5px;max-width:120px;min-width:85px;'><p  style='border: 1px; border-style: solid; border-color: #3790ba; padding: 2px;color:#3790ba;'> <img src='img/bathroom-icon.png' style = 'padding-left: 5px;'/>"+ homeProperty.bathroomsmax  +" Baths</p></div><div class='ui-block-c' style = 'margin-left: 1.5px;max-width:120px;min-width:80px;'><p style='border: 1px; border-style: solid; border-color: #71cc6e; padding: 2px;color:#71cc6e;'> <img src='img/floor-icon.png' style = 'padding-left: 5px;'/>"+ homeProperty.storiesmax +" Stories</p></div><div class='ui-block-d' style = 'margin-left:1.5px;width:40%;max-width:130px;min-width:90px;'> <p style='border:1px; border-style:solid; border-color: #bd7114;padding:2px; color:#bd7114;'><img src='img/car-garage-icon.png' style = 'padding-left: 5px;'/>"+homeProperty.garagesmax+" Car Garage</p></div></div></a></li>"

           
            
    
        }
         $("#saved_list").html("");
        if(count == 0)
        {
            html += " <li> No Results </li>"
        }
        $("#saved_list").html(html+"</ul>");
        $("#saved_list").trigger("create");
        


        $("#list").on("swipeleft",">li",function(e){
                       var listitem = $( this )
                      alert(removed);
                      
//                       // These are the classnames used for the CSS transition
//                       dir = event.type === "swipeleft" ? "left" : "right",
//                       // Check if the browser supports the transform (3D) CSS transition
//                       transition = $.support.cssTransform3d ? dir : false;
//                       confirmAndDelete( listitem, transition );
                       });
        
//               $('#list li').on('tap',function(e)
//             {
//                       console.log("hai")
//                });
        
    }
}






//// If it's not a touch device...
//if ( ! $.mobile.support.touch ) {
//    // Remove the class that is used to hide the delete button on touch devices
//    $( "#list" ).removeClass( "touch" );
//    // Click delete split-button to remove list item
//    $( ".delete" ).on( "click", function() {
//                      var listitem = $( this ).parent( "li.ui-li" );
//                      confirmAndDelete( listitem );
//                      });
//}
function confirmAndDelete( listitem, transition ) {
    // Highlight the list item that will be removed
    listitem.addClass( "ui-btn-down-d" );
    // Inject topic in confirmation popup after removing any previous injected topics
    $( "#confirm .topic" ).remove();
    listitem.find( ".topic" ).clone().insertAfter( "#question" );
    // Show the confirmation popup
    $( "#confirm" ).popup( "open" );
    // Proceed when the user confirms
    $( "#confirm #yes" ).on( "click", function() {
                            // Remove with a transition
                            if ( transition ) {
                            listitem
                            // Remove the highlight
                            .removeClass( "ui-btn-down-d" )
                            // Add the class for the transition direction
                            .addClass( transition )
                            // When the transition is done...
                            .on( "webkitTransitionEnd transitionend otransitionend", function() {
                                // ...the list item will be removed
                                listitem.remove();
                                // ...the list will be refreshed and the temporary class for border styling removed
                                $( "#list" ).listview( "refresh" ).find( ".ui-li.border" ).removeClass( "border" );
                                })
                            // During the transition the previous list item should get bottom border
                            .prev( "li.ui-li" ).addClass( "border" );
                            }
                            // If it's not a touch device or the CSS transition isn't supported just remove the list item and refresh the list
                            else {
                            listitem.remove();
                            $( "#list" ).listview( "refresh" );
                            }
                            });
    // Remove active state and unbind when the cancel button is clicked
    $( "#confirm #cancel" ).on( "click", function() {
                               listitem.removeClass( "ui-btn-down-d" );
                               $( "#confirm #yes" ).off();
                               });
}

