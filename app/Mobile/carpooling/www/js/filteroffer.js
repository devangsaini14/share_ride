function submitAction()
{
    
    var source=$("#fsource").val();
    var destination=$("#fdestination").val();
    var date=$("#fdate").val();
    var time=$("#fime").val();
    var seats=$("#fseats").val();
    var query="";
    if(source.length>0)
    {
        query += "search[source]="+source+"&";
    }
    else
    {
        query += "search[source]=&";
    }
        
        
    if(destination.length>0)
    {
        query += "search[destination]="+destination+"&";
    }
    else
    {
          query += "search[destination]=&";
    }
        
    if(seats.length>0)
    {
        query += "search[seats]="+seats;
    }
    else
    {
        query += "search[seats]=";
    }
   
    if(source.length > 0 & destination.length > 0 & seats.length > 0)
    {
        filterOffer.callFilterOfferService(succesFilterService,failureFilterService,query);
    }
    else
    {
        alert ("Please Enter the proper values");
    }
    
}

function succesFilterService (response)
{
//    alert("success");
    succesPropertyListService(response);
    $.mobile.changePage( "listmyOffers.html", { transition: "slidedown", changeHash: false });
    
}


function failureFilterService ()
{
    alert("Problem in retriving the data");
}


function ClearFilterView()
{
    $("#source").val('');
    $("#destination").val('');
    $("#date").val('');
    $("#time").val('');
    $("#price").val('');
    $("#seats").val('');
}