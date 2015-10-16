$(document).off("pagebeforeshow", "search_view").on("pagebeforeshow", "#search_view",function(){
//                                                    ListUI.callHomeListService(succesPropertyListService,failurePropertyListService);
                                                    });


//Show the List UI Fields


function succesPropertyListService ()
{
//    retriveAllHomeProperty("123",updateListUI);
    
    //    retriveHomePropertyConstraintBased (modelType, hometype, levels, pricemin, pricemax, bedroommin, bedroommax, bathroommin, bathroommax, garagesmin, garagesmax, squarefootagemin, squarefootagemax, buildersid, sortorder,updateListUI)
    //    retriveAllSavedHomeProperties();
}


function failurePropertyListService ()
{
    
}


function updateListUI(transaction, result) {
    if (result != null && result.rows != null) {
        var html="<ul data-role='listview'  style='margin-top: 60px; padding:20px; overflow-x:hidden;overflow-y: scroll;min-height:480px;'>";
        for (var i = 0; i < result.rows.length; i++) {
            
            var homeProperty = result.rows.item(i);
          html += "<li style='background-color:#2EA620'><a href='#'><img src='img/home_thumbnail.png' style='height:100%;padding:20px 5px;' /><h2 style='margin:-5px 0px;'>"+homeProperty.name+"</h3><p>"+homeProperty.hometype_name+" | By "+homeProperty.builder_name+"</p><p style='color:green;'> $ "+homeProperty.price+" | Sq Ft "+homeProperty.square_footage+"</p><div class='ui-grid-c' style='width:120%;margin-left:-1.5%;'><div class='ui-block-a' style = 'padding-left: 5px;'><p style='border: 1px; border-style: solid; border-color: #545658;padding:2px;color:#545658;'><img src='img/bedroom-icon.png' style = 'padding-left: 5px;padding-right:5px;'/> "+ homeProperty.bedrooms +" Beds </p></div><div class='ui-block-b' style = 'padding-left: 5px;'><p  style='border: 1px; border-style: solid; border-color: #3790ba; padding: 2px;color:#3790ba;'> <img src='img/bathroom-icon.png' style = 'padding-left: 5px;padding-right:5px;'/>"+ homeProperty.bathrooms  +" Baths </p></div><div class='ui-block-c' style = 'padding-left:5px;padding-right:5px;'></div><div class='ui-block-d' style = 'padding-left: 35px;padding-top:4px'> <img src='img/list-arrow.png'/> </div></div><div class='ui-grid-b' style='width:120%;margin-left:-1.5%;'><div class='ui-block-a' style = 'padding-left: 5px;'><p style='border: 1px; border-style: solid; border-color: #71cc6e; padding: 2px;color:#71cc6e;'> <img src='img/floor-icon.png' style = 'padding-left: 5px;padding-right:5px;'/> "+ homeProperty.stories +" Stories </p></div><div class='ui-block-b' style = 'padding-left: 5px;'><p style='border:1px; border-style:solid; border-color: #bd7114; color:#bd7114; padding:2px;'><img src='img/car-garage-icon.png' style = 'padding-left: 5px;padding-right:5px;'/>"+ homeProperty.garages  +" Car Garages </p></div><div class='ui-block-c' style = 'padding-left:5px;padding-right:5px;'></div></div></a></li>";
        }
        $("#fill_list").html(html+"</ul>");
        $("#fill_list").trigger("create");
    }
    
}
//Add / Remove  a Property to favourites

function addPropertyToFav()
{
    saveProperty("homeID",showSuccessAlert);
}
function showSuccessAlert()
{
//    alert("Success");
//     $( "#dialogPage" ).dialog();
//   $.mobile.changePage('#dialog', 'pop', true, true);
    
    showTimout();

}
function removePropertyFromFav()
{
    removeProperty("homeID",showSuccessAlert);
}


//Add a PropertyList to favourites
function addPropertyListToFav()
{
    savePropertyList(showSuccessAlert);
}
function removePropertyListFromFav()
{
    removePropertyList("name",showSuccessAlert);
}



//function showSavedProperties (transaction, result) {
//    if (result != null && result.rows != null) {
//        for (var i = 0; i < result.rows.length; i++) {
//            
//            var homeProperty = result.rows.item(i);
//            
//            console.log('<br> List 2222 ' + homeProperty.id + '. ' + homeProperty.name + '. ' + homeProperty.address + '. ' + homeProperty.city + '. ' + homeProperty.price + '. ' + homeProperty.bedrooms + '. ' + homeProperty.bathrooms + '. ' + homeProperty.garages + '. ' + homeProperty.square_footage + '. ' + homeProperty.stories + '. ' + homeProperty.property_description + '. ' + homeProperty.latitude + '. ' + homeProperty.longitude + '. ' + " " + '. ' + " " + '. ' + homeProperty.categoryID);
//        }
//    }
//}
//
//
//function showSavedPropertiesList (transaction, result) {
//    if (result != null && result.rows != null) {
//        for (var i = 0; i < result.rows.length; i++) {
//            var homeListItem = result.rows.item(i);
//            
//        }
//    }
//}