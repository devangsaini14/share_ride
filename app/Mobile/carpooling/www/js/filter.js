function applyButtonClick()
{
    
}


//Show the Filter UI Fields

function succesFilterUIFieldsService ()
{
    retriveAllFilterUIFields(updateFilterUI);
    retriveAllBuilders(updateFilterBuilderUI);
    retriveAllHomeTypes(updateFilterHomeTypesUI);
}


function failureFilterUIFieldsService ()
{
    
}


  


$(document).off("pagebeforeshow", "filter_UI").on("pagebeforeshow", "#filter_UI", function()

{
FilterUI.callFilterFieldsService(succesFilterUIFieldsService,failureFilterUIFieldsService);
ListUI.callHomeListService(succesPropertyListService,failurePropertyListService);
$('#filter_UI .ui-content').height(Utilities.getContentHeight());
	$('#filter_form').off('submit').on('submit',function(e){
                                       var categoryID=1;
                                       var categoryType="Model Home";
                                       var homeTypeID= $('.home_type:checked').val();
                                       var homeType=$('.home_type:checked').attr('id');
                                       var levels=1;
                                       var pricemin=$("#price_a").val();
                                       var pricemax=$("#price_b").val();
                                       var bedroom=[];
                                       $('.bedroom:checked').each(function(){
                                                bedroom.push($(this).val());
                                        });
                                        var bathroom=[];
                                        $('.bathroom:checked').each(function(){
                                                bathroom.push($(this).val());
                                        });
                                        var garages=[];
                                        $('.garage:checked').each(function(){
                                                garages.push($(this).val());
                                        });
                                        var sqftmin=$("#sqft_a").val();
                                        var sqftmax=$("#sqft_b").val();
                                        var buildersID=[];
                                        $('.builder:checked').each(function(){
                                                buildersID.push($(this).val());
                                        });
                                        var sortorder=$("#sort_by").val();
                                        retriveHomePropertyConstraintBased (categoryID, categoryType, homeTypeID, homeType, levels, pricemin, pricemax, bedroom[0], bedroom[bedroom.length-1], bathroom[0], bathroom[bathroom.length-1], garages[0], garages[garages.length-1], sqftmin, sqftmax, buildersID, sortorder,updateListUI);
                                       
});
                                                  var sqft_a_value = $('#min_sqft_value');
                                                  
                                                  $('#sqft_a').change(function(){
                                                                      sqft_a_value.html((this.value));
                                                                      });
                                                  
                                                  // Trigger the event on load, so
                                                  // the value field is populated:
                                                  
                                                  $('#sqft_a').change();
                                                  var sqft_b_value = $('#max_sqft_value');
                                                  
                                                  $('#sqft_b').change(function(){
                                                                      sqft_b_value.html((this.value));
                                                                      });
                                                  
                                                  // Trigger the event on load, so
                                                  // the value field is populated:
                                                  
                                                  $('#sqft_b').change();
                                                  var price_a_value = $('#min_price_value');
                                                  
                                                  $('#price_a').change(function(){
                                                                      price_a_value.html((this.value)/1000);
                                                                      });
                                                  
                                                  // Trigger the event on load, so
                                                  // the value field is populated:
                                                  
                                                  $('#price_a').change();
                                                  var price_b_value = $('#max_price_value');
                                                  
                                                  $('#price_b').change(function(){
                                                                      price_b_value.html((this.value)/1000);
                                                                      });
                                                  
                                                  // Trigger the event on load, so
                                                  // the value field is populated:
                                                  
                                                  $('#price_b').change();
	
	 
                                                  

});


function updateFilterUI(transaction, result) {
    if (result != null && result.rows != null) {
        for (var i = 0; i < result.rows.length; i++) {
            var row = result.rows.item(i);
            
            $("#price_a").attr("min", row.pricemin);
            $("#price_a").attr("max",  row.pricemax);
            $("#price_a").attr("value",row.pricemin);
            
            $("#price_b").attr("min", row.pricemin);
            $("#price_b").attr("max", row.pricemax);
            $("#price_b").attr("value", row.pricemax);
            
            $("#sqft_a").attr("min", row.squarefootagemin);
            $("#sqft_a").attr("max", row.squarefootagemax);
            $("#sqft_a").attr("value", row.squarefootagemin);
            $("#sqft_b").attr("min", row.squarefootagemin);
            $("#sqft_b").attr("max", row.squarefootagemax);
            $("#sqft_b").attr("value", row.squarefootagemax);
            
            $("#max_price_value").html(row.pricemax/1000);
            $("#max_sqft_value").html(row.squarefootagemax);
            $("#min_price_value").html(row.pricemin/1000);
            $("#min_sqft_value").html(row.squarefootagemin);
            
            var html="<fieldset id='bedroom' data-role='controlgroup' data-type='horizontal' class='ui-field-contain' >";
            var count=0;
            for (var index= row.bedroomsmin; index<=row.bedroomsmax;index+=0.5)
            {
                if(count < 5){
                    html += "<input type='checkbox' hidden id= 'bedroom_" + index + "' name='bedroom_" + index + "' class='bedroom' value='"+index+"' /><label for='bedroom_"+ index + "'>"+ index+ "</label>";
                    count++;
                }
                else
                    break;
            }
            
            html += "<input type='checkbox'  hidden id= 'bedroom_" +  Math.floor(index) + "+' name='bedroom_" +   Math.floor(index) + "+' class='bedroom' value='"+Math.floor(index)+"' /> <label for='bedroom_"+   Math.floor(index) + "+'>"+   Math.floor(index) + "+" + "</label>";
            
            $("#bedroom_range").html(html+"</fieldset>");
            $("#bedroom_range").trigger("create");
            
            var html="<fieldset id='bathroom'  data-role='controlgroup' data-type='horizontal' class='ui-field-contain' >";
            var count=0;
            for (var index=row.bathroomsmin; index<=row.bathroomsmax;index+=0.5)
            {
                if(count<5){
                    html+="<input type='checkbox' hidden id= 'bathroom_" + index + "' name='bathroom_" + index + "' class='bathroom' value='"+index+"'/><label for='bathroom_"+index+"'>"+index+ "</label>";
                count++;
                }
                else
                    break;
            }
             html+="<input type='checkbox' hidden id= 'bathroom_" +  Math.floor(index) + "+' name='bathroom_" +  Math.floor(index) + "+' class='bathroom' value='"+Math.floor(index)+"'/><label for='bathroom_"+ Math.floor(index)+"+'>"+ Math.floor(index)+ "+</label>";
            $("#bathroom_range").html(html+"</fieldset>");
            $("#bathroom_range").trigger("create");
            
            var html="<fieldset id='garage' data-role='controlgroup' data-type='horizontal' class='ui-field-contain' >";
            var count=0;
            for (var index=row.garagesmin; index<=row.garagesmax;index+=0.5)
            {
                if(count<5){
                    html+="<input type='checkbox' hidden id= 'garage_" + index + "' name='garage_" + index + "' class='garage' value='"+index+"'/><label for='garage_"+index+"' class='garage' value='"+index+"'>"+index+ "</label>";
                count++;
                }
                else
                    break;
            }
             html+="<input type='checkbox' hidden id= 'garage_"+Math.floor(index)+"+' name='garage_" +Math.floor(index)+"+' class='garage' value='"+Math.floor(index)+"'/><label for='garage_"+Math.floor(index)+"+'>"+Math.floor(index)+"+</label>";
            $("#garage_range").html(html+"</fieldset>");
            $("#garage_range").trigger("create");
        }
    }
}

//$(document).off("pageshow", "filter_UI").on("pageshow", "#filter_UI", function()
//{
//                                            var arr=$(".ui-slider-track a");
//                                                  for(var i=0;i<arr.length;i++){
//                                                  if(arr[i].getAttribute("aria-labelledby")=="price_b-label"){
//                                                  $(".ui-slider-handle").css("left","100%");
//                                                  }
//                                                  else{
//                                                  alert("hai");
//                                                  }
//                                                 }
//                                                  $("input[type='range']").slider( "refresh" );
//                         
//                                                  });

        
function updateFilterBuilderUI(transaction, result) {
    if (result != null && result.rows != null) {
        var html="<fieldset id='builderlist' data-role='controlgroup' >";
        for (var i = 0; i < result.rows.length; i++) {
            var builder = result.rows.item(i);
            //            console.log('<br> builder 2222' + row.id + '. ' + row.name + '. ' + row.email + '. ' + row.weblink + '. ' + row.builder_description + '. ' + row.categoryID );
            html+="<input type='checkbox' hidden id= '" + builder.name + "' name='" + builder.name + "'  class='builder' value='"+builder.id+"' /><label for='"+builder.name+"' data-iconpos='right'>"+builder.name+ "</label>";
        }
        $("#builder_list").html(html+"</fieldset>");
        $("#builder_list").trigger("create");
        
        
    }
}

function updateFilterHomeTypesUI (transaction, result)
{
    if (result != null && result.rows != null) {
        
        var html="<fieldset id='hometypelist' data-role='controlgroup' >";
        for (var i = 0; i < result.rows.length; i++)
        {
            var home_type = result.rows.item(i);
            html+="<input type='radio' hidden id= '" + home_type.name + "' name='hometypelist'  class='home_type' value='"+home_type.id+"'/><label for='"+home_type.name+"' data-iconpos='right'>"+home_type.name+ "</label>";
        }
        $("#hometype_list").html(html+"</fieldset>");
        $("#hometype_list").trigger("create");
        
        //        for (var i = 0; i < result.rows.length; i++) {
        //            var homeType = result.rows.item(i);
        //            console.log('<br> homeType :' + homeType.id + '. ' + homeType.name + '. '+ homeType.categoryID );
        //        }
    }
}

//function applyButtonClick(){
////    alert(JSON.stringify($(this)));
//    console.log("click11",$(this).toString());
////    console.log("click",JSON.stringify($(this)));
//    
//    $.mobile.changePage( "spechome.html", { transition: "slidedown", changeHash: false });
//}

function submitAction()
{
    $('#filter_form').submit();
}

function changeval(){
    var levels;
    if(document.getElementById("stories_2").innerHTML=="Stories 2"){
        document.getElementById("stories_value").innerHTML
    }
    else{
    }
}


function changeView(){
    var categoryID=2;
    var categoryType="Spec Home";
    retriveAllHomeProperty(2,categoryType,updateListUI);
    $.mobile.changePage( "spechome.html", { transition: "slidedown", changeHash: false });
}

function changeText(){
    if(document.getElementById("sort_by").innerHTML == "Lowest - Highest"){
    document.getElementById("sort_by").innerHTML="Highest - Lowest";
    document.getElementById("sort_by").value="DESC";
    }
    else
    {
        document.getElementById("sort_by").innerHTML="Lowest - Highest";
        document.getElementById("sort_by").value="ASC";
    }
}
