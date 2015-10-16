$(document).off("pagebeforeshow", "saved_list_view").on("pagebeforeshow", "#saved_list_view",function()
{
   //     $("#saved_list").html("<h1> Loading </h1>");
    //    ListUI.callHomeListService(succesPropertyListService,failurePropertyListService);
});


function succesPropertyListService (response)
{
    var count = 0;
    
    var html="<ul id='list' data-role='listview' style='overflow-x:hidden;overflow-y: scroll;;min-height:550px;margin-top: 20%;padding-left:20px;width:100%;'>";
    for (var i = 0; i < response.length; i++) {
        //            var homeProperty = result.rows.item(i);
        
        html += "<li style='background-color:#2EA620'><a href='#'><div class='ui-grid-a' style='width:100%;'><div class='ui-block-a' >" +response[i].source  +"</div><div class='ui-block-b' >"+ response[i].destination   +"</div></div><p>"+ response[i].price   +"</p><p>"+ response[i].seats  +"</p> <p>"+ response[i].date   +"</p><p>"+ "4.00PM" +"</p><p>"+ response[i].email + "</p><p>"+ response[i].contact + "</p> </a></li>";
        count++;
        
    }
    $("#saved_list").html("");
    if(count == 0)
    {
        html += " <li> No Results </li>"
    }
    $("#saved_list").html(html+"</ul>");
    $("#saved_list").trigger("create");
    
    
    $('#list li').on('tap',function(e)
                     {
                     console.log("hai")
                     });

}


function failurePropertyListService ()
{
    
}







function showOffers()
{
    $("#saved_list").html("");
    ListUI.callHomeListService(succesPropertyListService,failurePropertyListService);
    showMyOffers();

//    $("#saved_list").html("<h1> Loading </h1>");
//    retriveAllSavedHomePropertyList(showSavedPropertiesList);
}

function showRides()
{
    $("#saved_list").html("");
      showMyAvlRides();
//    $("#saved_list").html("<h1> Loading </h1>");
//    retriveAllSavedHomeProperties(showSavedProperties);
}




function showMyOffers (transaction, result) {
    
        var count = 0;
        var html="<ul id='list' data-role='listview' style='overflow-x:hidden;overflow-y: scroll;;min-height:550px;margin-top: 20%;padding-left:20px;width:100%;'>";
        for (var i = 0; i < 10; i++) {
//            var homeProperty = result.rows.item(i);
            
            html += "<li style='background-color:#2EA620'><a href='#'><div class='ui-grid-a' style='width:100%;'><div class='ui-block-a' > Source </div><div class='ui-block-b' > Destination </div></div><p> Price 225 </p><p> 4 Seats </p> <p> 12/05/2015 </p><p> 4.00PM </p> </a></li>";
            count++;
            
        }
        $("#saved_list").html("");
        if(count == 0)
        {
            html += " <li> No Results </li>"
        }
        $("#saved_list").html(html+"</ul>");
        $("#saved_list").trigger("create");
        
        
        $('#list li').on('tap',function(e)
                         {
                         console.log("hai")
                         });
        

    
    
//    var count = 0;
//    if (result != null && result.rows != null) {
//        var html="<ul id='list' data-role='listview' style='overflow-x:hidden;overflow-y: scroll;;min-height:550px;margin-top: 20%;padding-left:20px;width:100%;'>";
//        for (var i = 0; i < result.rows.length; i++) {
//            var homeProperty = result.rows.item(i);
//
//            html += "<ul data-role='listview' style='margin-top: 20%;padding-left:20px;width:100%;'><li style='background-color:#2EA620'><a href='#'><div class='ui-grid-a' style='width:100%;'><div class='ui-block-a' > Source </div><div class='ui-block-b' > Destination </div></div><p> Price 225 </p><p> 4 Seats </p></a></li>";
//            count++;
//            
//        }
//        $("#saved_list").html("");
//        if(count == 0)
//        {
//            html += " <li> No Results </li>"
//        }
//        $("#saved_list").html(html+"</ul>");
//        $("#saved_list").trigger("create");
//      
//        
//                       $('#list li').on('tap',function(e)
//                     {
//                               console.log("hai")
//                        });
//        
//    }
}


function showMyAvlRides (transaction, result) {
    
    var count = 0;
    var html="<ul id='list' data-role='listview' style='overflow-x:hidden;overflow-y: scroll;;min-height:550px;margin-top: 20%;padding-left:20px;width:100%;'>";
    for (var i = 0; i < 10; i++) {
        //            var homeProperty = result.rows.item(i);
        
        html += "<li style='background-color:#2EA620'><a href='#'><div class='ui-grid-a' style='width:100%;'><div class='ui-block-a' > Chennai </div><div class='ui-block-b' > Trichy </div></div><p> Price 225 </p><p> 4 Seats </p> <p> 12/05/2015 </p><p> 4.00 PM </p> </a></li>";
        count++;
        
    }
    $("#saved_list").html("");
    if(count == 0)
    {
        html += " <li> No Results </li>"
    }
    $("#saved_list").html(html+"</ul>");
    $("#saved_list").trigger("create");
    
    
    $('#list li').on('tap',function(e)
                     {
                     console.log("hai")
                     });
    
    
    
    
    //    var count = 0;
    //    if (result != null && result.rows != null) {
    //        var html="<ul id='list' data-role='listview' style='overflow-x:hidden;overflow-y: scroll;;min-height:550px;margin-top: 20%;padding-left:20px;width:100%;'>";
    //        for (var i = 0; i < result.rows.length; i++) {
    //            var homeProperty = result.rows.item(i);
    //
    //            html += "<ul data-role='listview' style='margin-top: 20%;padding-left:20px;width:100%;'><li style='background-color:#2EA620'><a href='#'><div class='ui-grid-a' style='width:100%;'><div class='ui-block-a' > Source </div><div class='ui-block-b' > Destination </div></div><p> Price 225 </p><p> 4 Seats </p></a></li>";
    //            count++;
    //
    //        }
    //        $("#saved_list").html("");
    //        if(count == 0)
    //        {
    //            html += " <li> No Results </li>"
    //        }
    //        $("#saved_list").html(html+"</ul>");
    //        $("#saved_list").trigger("create");
    //
    //
    //                       $('#list li').on('tap',function(e)
    //                     {
    //                               console.log("hai")
    //                        });
    //
    //    }
}

