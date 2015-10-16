var Network = {
    
       restCall : function (url, dataType, method,successFunction, errorFunction){
		if(!Network.checkConnectivity()){
		//	errorFunction(null, ErrorMessages.networkError);
			return false;
		}
		$.support.cors = true;
        
		$.ajax({
			type : method,
//			contentType : contentType,			
			dataType : dataType,
			crossDomain : true,			
			url : url,
			//headers: headerData,
			cache : false,
			success : function (response, textStatus)
            {
               successFunction(response);
			},
			error : function (response, textStatus,errorThrown) {				
				errorFunction(response, textStatus,errorThrown);
			}
		});
	},
	checkConnectivity : function () {	
        return true;
	}
}

var NetworkPost = {
    
    restCall : function (url, dataType, method,data,successFunction, errorFunction){
        if(!Network.checkConnectivity()){
            //	errorFunction(null, ErrorMessages.networkError);
            return false;
        }
        $.support.cors = true;
        
        $.ajax({
               type : method,
               dataType : dataType,
               crossDomain : true,
               data : data,
               url : url,
               //headers: headerData,
               cache : false,
               success : function (response, textStatus)
               {
               successFunction(response);
               },
               error : function (response, textStatus,errorThrown) {
               errorFunction(response, textStatus,errorThrown);
               }
               });
    },
    checkConnectivity : function () {	
        return true;
    }
}





