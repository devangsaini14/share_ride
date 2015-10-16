//Retrive the login Screen UI fields
var Login =  {
    
    callLoginService : function (receiveSuccessResponse , receiveFailureResponse) {
//        var loginServiceURL = "http://172.24.144.193:3000/api/v1/registration_fields";
//        var type = "GET";
//        var dataType = "json";
//        var loginUIFieldsArray = [];
//        var loginUIFieldsFromServiceArray = [];
//        
//        var retrieve_loginUI_Success = function (response) {
//            for (var key in response.registration_fields[0].fields)
//            {
//                if(response.registration_fields[0].fields[key] == true)
//                {
//                    
//                    loginUIFieldsFromServiceArray.push(key);
//                    if(key == "name")
//                        key = "Full Name";
//                    
//                    else if(key == "email")
//                        key = "Email";
//                    
//                    else if(key == "zipcode")
//                        key = "Zip Code";
//                    
//                    loginUIFieldsArray.push(key);
//                    
//                }
//            }
//            
//            addRegisteredUIFields(loginUIFieldsArray,loginUIFieldsFromServiceArray,receiveSuccessResponse)
//
//            
//        };
//        
//        var retrieve_loginUI_failure = function (response, textStatus,errorThrown){
//            
//        };
//        
//        Network.restCall(loginServiceURL,dataType,type,retrieve_loginUI_Success,retrieve_loginUI_failure);
    },
};

var FilterUI =  {
//    callFilterFieldsService : function (receiveSuccessResponse , receiveFailureResponse) {
//        var filterServiceURL = "http://172.24.144.193:3000/api/v1/home_properties/filter_fields";
//        var type = "GET";
//        var dataType = "json";
//        var retrieve_FilterUI_Success = function (response) {
//            addFilterUIFields(response,receiveSuccessResponse);
//        };
//        
//        var retrieve_FilterUI_failure = function (response, textStatus,errorThrown){
//            
//        };
//        
//        Network.restCall(filterServiceURL,dataType,type,retrieve_FilterUI_Success,retrieve_FilterUI_failure);
//    },
};


var ListUI =  {
    
    callHomeListService : function (receiveSuccessResponse , receiveFailureResponse) {
        var homeListServiceURL = "http://172.24.144.193:3000/api/v1/rides";
        var type = "GET";
        var dataType = "json";
        var retrieve_List_Success = function (response) {
            receiveSuccessResponse(response);
        };
        
        var retrieve_List_failure = function (response, textStatus,errorThrown){
            receiveFailureResponse();
        };
        
        Network.restCall(homeListServiceURL,dataType,type,retrieve_List_Success,retrieve_List_failure);
    },
};



var CreateOffer =  {
    
    callCreateService : function (receiveSuccessResponse , receiveFailureResponse,data) {
        var homeListServiceURL = "http://172.24.144.193:3000/api/v1/rides";
        var type = "POST";
        var dataType = "json";
      
    
        
        
       var data={"source":"Ray"};
       //
//        var data = JSON.stringify(parentObject);
        
        var retrieve_Info_Success = function (response) {
            receiveSuccessResponse();
        };
        
        var retrieve_Info_failure = function (response, textStatus,errorThrown){
            receiveFailureResponse();
        };
        
        NetworkPost.restCall(homeListServiceURL,dataType,type,data,retrieve_Info_Success,retrieve_Info_failure);
    },
};


var filterOffer =  {
    
    callFilterOfferService : function (receiveSuccessResponse , receiveFailureResponse,queryString) {
        var homeListServiceURL = "http://172.24.144.193:3000/api/v1/rides?";
        homeListServiceURL += queryString;
        var type = "GET";
        var dataType = "json";
        var retrieve_List_Success = function (response) {
            receiveSuccessResponse(response);
        };
        
        var retrieve_List_failure = function (response, textStatus,errorThrown){
            receiveFailureResponse();
        };
        
        Network.restCall(homeListServiceURL,dataType,type,retrieve_List_Success,retrieve_List_failure);
    },
};







