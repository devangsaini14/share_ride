/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

$(document).off("pagebeforeshow", "registration").on("pagebeforeshow", "#registration",function()
{
    $('#registerPage .ui-content').height(Utilities.getContentHeight() + 20);
    
});

var app = {
    // Application Constructor
initialize: function() {
    this.bindEvents();
},
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
bindEvents: function() {
    document.addEventListener("deviceready", this.onDeviceReady, false);
    document.addEventListener("resume", this.onResume, false);
    document.addEventListener("pause", this.onPause, false);
   
    
    //  document.addEventListener("backbutton", this.onBackKeyDown, false);
},
    
    
    
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
onDeviceReady: function() {
    console.log('Device Ready');
    openDataBase();
    
   // Login.callLoginService(successLoginUIFields,failureLoginUIFields);
    
},
    
onResume:function() {
    console.log('Device Resume');
},
    
    
onPause:function() {
    console.log('Device Pause');
}
    
    //
    //    onBackKeyDown:function() {
    //        console.log('Device Back Button');
    //    }
};

app.initialize();






function successLoginUIFields ()
{
    retriveAllRegisterFields(updateUI);
    
}


function failureLoginUIFields ()
{

}


function updateUI(transaction, result)
{
//    if (result != null && result.rows != null) {
//        var output = "";
//        for (var i = 0; i < result.rows.length; i++) {
//            var row = result.rows.item(i);
//            console.log('<br> REgister 2222 ' + row.fieldName + '. ' + row.title);
//                output += "<input type='text' id= '" + row.fieldName + "' name='" + row.title + "'  value='' style='width:220px;' placeholder='" + row.title + "'> </input> <br> <br>";
//            
//        }
//         document.getElementById("registerBodyContent").innerHTML = output;
//    }
}



$("#b2").click(function(){
               FilterUI.callFilterFieldsService(succesFilterUIFieldsService,failureFilterUIFieldsService);
               });

$("#b3").click(function(){
               ListUI.callHomeListService(succesPropertyListService,failurePropertyListService);
               });

$("#b4").click(function(){
                InfoUI.callInfoService(succesInfoUIFieldsService,failureInfoUIFieldsService);
               });




//$(document).on('pagebeforeshow', '#home', function(){
//               $("#home").load("registartion.html", function() {
//                                $(this).trigger("pagecreate");
//                                });
//               });



//$('#screen-selector').on('click', 'a', function(event)
//{
//    console.log("You clicked on: ", event.target);
//
// //Method 1: change one page to another page
//    if( event.target.id == "1")
//    {
//        $.mobile.changePage('community.html', { dataUrl : "community.html", reloadPage : true, changeHash : true });
//    }
//    else if( event.target.id == "2")
//           $.mobile.changePage('search.html', { dataUrl : "search.html", reloadPage : true, changeHash : true });
//    else if( event.target.id== "3")
//            $.mobile.changePage('calculator.html', { dataUrl : "calculator.html?paremeter=123", data : { 'paremeter' : '123' }, reloadPage : false, changeHash : true });
//    else if( event.target.id == "4")
//            $.mobile.changePage('savedsearch.html', { dataUrl : "savedsearch.html?paremeter=123", data : { 'paremeter' : '123' }, reloadPage : false, changeHash : true });
//
//});




//Method 2
//    $('#home').load('community.html #pageone');
//      $('#navigationItemContent').html('community.html');





//Method 3:
//$(document).on('pagebeforeshow', '#index', function(){
//               $("#index").load("load.html", function() {
//                                $(this).trigger("pagecreate");
//                                });
//               });



//$(function() {
//  var $menu = $('#menu'),
//  $target = $('#target');
//
//  $menu.on('click', '> a', function(event) {
//           var $this = $(this);
//           event.preventDefault();
//           $('#target').load($this.attr('href'));
//           });
//  });


//                         $("#navigationItemContent").load("community.html");
//    $.mobile.loadPage("community.html", {pageContainer: $('#navigationItemContent')})
//    $('#navigationItemContent").trigger('pagecreate');





//    $.get('community.html').success(function(html) {
//                                                         $('#navigationItemContent').html(html);
//                                                         });


