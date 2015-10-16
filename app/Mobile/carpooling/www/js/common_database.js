// global variables
var db;
var shortName = 'VerradoSqlDB';
var version = '1.0';
var displayName = 'VerradoSqlDB';
var maxSize = 65535;
var query = "";
var savedListquery = "";
var savedListDictionary ;
// this is called when an error happens in a transaction
function errorHandler(tx, error) {
    alert('Error: ' + error.message + ' code: ' + error.code);

}

// this is called when a successful transaction happens
function successCallBack() {
    //     alert("DEBUGGING: success");

}

function nullHandler() {};


function openDataBase() {
    if (!window.openDatabase) {
        // not all mobile devices support databases  if it does not, the following alert will display
        // indicating the device will not be albe to run this application
        alert('Databases are not supported in this browser.');
        return;
    }
    db = window.openDatabase(shortName, version, displayName, maxSize);
    db.transaction(createTables, errorHandler, successCallBack);


}

// create all the tables
function createTables(tx) {

    //    query = "CREATE TABLE IF NOT EXISTS general_info(service TEXT , lastmodifiedTime Text , categoryID TEXT)";
    //    tx.executeSql(query);
    //
    //    query = "CREATE TABLE IF NOT EXISTS registered_user(emailID TEXT,username TEXT)";
    //    tx.executeSql(query);


    query = "CREATE TABLE IF NOT EXISTS registered_UI_fields(fieldName TEXT,title TEXT)";
    tx.executeSql(query);

    query = "CREATE TABLE IF NOT EXISTS filter_UI_fields(pricemin FLOAT, pricemax FLOAT, bedroomsmin FLOAT, bedroomsmax FLOAT, bathroomsmin FLOAT, bathroomsmax FLOAT, garagesmin FLOAT, garagesmax FLOAT, squarefootagemin FLOAT, squarefootagemax FLOAT,storiesmin FLOAT,storiesmax FLOAT, categoryID TEXT, general TEXT)";
    tx.executeSql(query);

    query = "CREATE TABLE IF NOT EXISTS builders(id TEXT, name TEXT, email TEXT, contact TEXT, weblink TEXT, builder_description TEXT,categoryID TEXT)";
    tx.executeSql(query);

    query = "CREATE TABLE IF NOT EXISTS homeTypes(id TEXT, name TEXT,categoryID TEXT)";
    tx.executeSql(query);

    query = "CREATE TABLE IF NOT EXISTS home_property(hometype_id TEXT,hometype_name TEXT,id TEXT,name TEXT, address TEXT, city TEXT, price FLOAT,bedrooms FLOAT,bathrooms FLOAT, garages FLOAT,square_footage FLOAT,stories FLOAT,property_description TEXT,latitude TEXT, longitude TEXT,nearByAmenties TEXT, builder_id TEXT, builder_name TEXT,categoryID TEXT,categoryName TEXT,thumnailImage BLOB,galleryImagesURL TEXT,floorPrintImagesURL TEXT,isAvailOffline TEXT)";
    tx.executeSql(query);

    query = "CREATE TABLE IF NOT EXISTS info(about TEXT,name TEXT, address TEXT, termsandcondition TEXT,contact_no TEXT,contact_email TEXT)";
    tx.executeSql(query);

    query = "CREATE TABLE IF NOT EXISTS savedPropertyList(homeType TEXT,pricemax TEXT,bedroomsmax TEXT,bathroomsmax TEXT,garagesmax TEXT,squarefootagemax TEXT,storiesmax TEXT,categoryID TEXT,categoryName,query TEXT)";
    tx.executeSql(query);

    //    query = "CREATE TABLE IF NOT EXISTS community(type TEXT,name TEXT, address TEXT, latitude TEXT,longitude TEXT,description TEXT, contact_no TEXT, contact_email TEXT)";
    //    tx.executeSql(query);
    //



}
//Register_table
function addRegisteredUIFields(registerUIFields, serviceResponse, receiveSuccessResponse)
{
    db.transaction(function(tx)
    {
        query = "DELETE from registered_UI_fields";
        tx.executeSql(query);

        for (count = 0; count < registerUIFields.length; count++)
        {
            query = "INSERT INTO registered_UI_fields(fieldName, title) VALUES (' " + serviceResponse[count] + " ', ' " + registerUIFields[count] + " ')";
            tx.executeSql(query);
        }
    },
    errorHandler, receiveSuccessResponse);

}

function retriveAllRegisterFields(updateUI)
{
    db.transaction(function(tx) {

        query = "SELECT * FROM registered_UI_fields;";
        tx.executeSql(query, [], updateUI, errorHandler);
    }, errorHandler, successCallBack
    );
}

////Filter_table
function addFilterUIFields(filterUIFieldsDictionary, receiveSuccessResponse)
{
    // this is the section that actually inserts the values into the User     table
    db.transaction(function(tx) {

        query = "DELETE from filter_UI_fields";
        tx.executeSql(query);

        query = "DELETE from builders";
        tx.executeSql(query);

        query = "DELETE from homeTypes";
        tx.executeSql(query);


        query = "INSERT INTO filter_UI_fields(pricemin ,pricemax , bedroomsmin , bedroomsmax , bathroomsmin ,bathroomsmax , garagesmin , garagesmax ,squarefootagemin ,squarefootagemax,storiesmin,storiesmax,categoryID) VALUES (" + filterUIFieldsDictionary.filters.price.min + "," + filterUIFieldsDictionary.filters.price.max + "," + filterUIFieldsDictionary.filters.bedrooms.min + "," + filterUIFieldsDictionary.filters.bedrooms.max + "," + filterUIFieldsDictionary.filters.bathrooms.min + "," + filterUIFieldsDictionary.filters.bathrooms.max + "," + filterUIFieldsDictionary.filters.garages.min + "," + filterUIFieldsDictionary.filters.garages.max + "," + filterUIFieldsDictionary.filters.square_footage_max.min + "," + filterUIFieldsDictionary.filters.square_footage_max.max + "," + filterUIFieldsDictionary.filters.stories.min + "," + filterUIFieldsDictionary.filters.stories.max + ",'" + filterUIFieldsDictionary.category_id + "');";
        tx.executeSql(query);

        console.log("Query :" + query);
        var builders = filterUIFieldsDictionary.builderslist.items;
        for (var key in builders)
        {
            var builder = builders[key];
            query = "INSERT INTO builders(id, name ,email ,contact ,weblink ,builder_description ,categoryID) VALUES ('" + builder.id + "','" + builder.name + "','" + builder.email + "','" + builder.contact + "','" + builder.weblink + "','" + builder.builder_description + "','" + filterUIFieldsDictionary.category_id + "')";
            tx.executeSql(query);
            console.log("Query :" + query);
        }

        var homeTypes = filterUIFieldsDictionary.home_types;
        for (var key in homeTypes)
        {
            var homeType = homeTypes[key];
            query = "INSERT INTO homeTypes(id,name,categoryID ) VALUES ('" + homeType.id + "','" + homeType.name + "','" + filterUIFieldsDictionary.category_id + "')";
            tx.executeSql(query);
            console.log("Query :" + query);
        }
    }, errorHandler, receiveSuccessResponse);
}


function retriveAllFilterUIFields(updateFilterUI)
{
    db.transaction(function(tx) {
        query = "SELECT * FROM filter_UI_fields;";
        tx.executeSql(query, [], updateFilterUI );

    }, errorHandler, successCallBack);
}

//builders_table
function retriveAllBuilders(updateFilterBuilderUI)
{
    db.transaction(function(tx) {
        query = "SELECT * FROM builders;";
        tx.executeSql(query, [], updateFilterBuilderUI);
    }, errorHandler, successCallBack);
}

//home_types
function retriveAllHomeTypes(updateFilterHomeTypesUI)
{
    db.transaction(function(tx) {
        query = "SELECT * FROM homeTypes;";

        tx.executeSql(query, [], updateFilterHomeTypesUI);
    }, errorHandler, successCallBack);
}


//home_list_table
function addListUIFields(propertyListDic, receiveSuccessResponse)
{
    // this is the section that actually inserts the values into the User     table
    db.transaction(function(tx) {
        var homePropertyArray = propertyListDic.home_properties;

        //Check the saved properties
        //        var savedproperties = retriveAllSavedHomeProperty();

        query = "DELETE from home_property";
        tx.executeSql(query);

        for (var key in homePropertyArray)
        {
            var homeProperty = homePropertyArray[key];
            query = "INSERT INTO home_property(hometype_id,hometype_name,id ,name , address , city , price ,bedrooms ,bathrooms , garages ,square_footage ,stories ,property_description ,latitude , longitude ,nearByAmenties, builder_id ,builder_name,categoryID,categoryName,thumnailImage ,galleryImagesURL ,floorPrintImagesURL,isAvailOffline) VALUES ('" +
            homeProperty.home_type_id + "','" +
            homeProperty.home_type + "','" +
            homeProperty.id + "','" +
            homeProperty.name + "','" +
            homeProperty.address + "','" +
            homeProperty.city + "'," +
            homeProperty.price + "," +
            homeProperty.bedrooms + "," +
            homeProperty.bathrooms + "," +
            homeProperty.garages + "," +
            homeProperty.square_footage + "," +
            homeProperty.stories + ",'" +
            homeProperty.property_description + "','" +
            homeProperty.latitude + "','" +
            homeProperty.longitude + "','" +
            "null" + "','" +
            homeProperty.builder_id + "','" +
            homeProperty.builder + "','" +
            homeProperty.category_id + "','" +
            homeProperty.category + "','" +
            homeProperty.thumbnail + "','" +
            "null" + "','" +
            "null" + "','" +
            "NO" +
            "')";

            console.log(query);

            tx.executeSql(query);
        }
    }, errorHandler, receiveSuccessResponse);
}

function retriveAllHomeProperty (categoryID, categoryName, updateListUI)
{
    db.transaction(function(tx) {

        query = "SELECT * FROM home_property where categoryID = '" + categoryID + "';";
        //query = "SELECT * FROM home_property";
        savedListDictionary = new Dictionary();
        savedListDictionary.setData("categoryID", categoryID);
        savedListDictionary.setData("categoryName", categoryName);
        savedListDictionary.setData("homeType", "Any ");
        savedListDictionary.setData("levels", "Any ");
        savedListDictionary.setData("pricemax", "Any ");
        savedListDictionary.setData("bedroommax", "Any ");
        savedListDictionary.setData("bathroommax", "Any ");
        savedListDictionary.setData("garagesmax", "Any ");
        savedListDictionary.setData("squarefootagemax", "Any ");
        savedListDictionary.setData("query", query);


        tx.executeSql(query, [], updateListUI );
    }, errorHandler, successCallBack);

}

function retriveHomePropertyConstraintBased (categoryID, categoryName, hometype_id, hometype_name, levels, pricemin, pricemax, bedroommin, bedroommax, bathroommin, bathroommax, garagesmin, garagesmax, squarefootagemin, squarefootagemax, buildersid, sortorder, updateListUI)
{

    query = "SELECT * FROM home_property where categoryID = '" + $.trim(categoryID) + "'" + " AND " +
    "hometype_id ='" + $.trim(hometype_id) + "' AND " +
    "stories = " + levels + " AND " +
    "price  >= " + pricemin + " AND " + "price  <= " + pricemax + " AND " +
    "bedrooms >= " + bedroommin + " AND " + "bedrooms <= " + bedroommax + " AND " +
    "bathrooms  >=  " + bathroommin + " AND " + "bathrooms  <=  " + bathroommax + " AND " +
    "garages >= " + garagesmin + " AND " + "garages <= " + garagesmax + " AND " +
    "square_footage >= " + squarefootagemin + " AND " + "square_footage <= " + squarefootagemax + " AND ";

    var builderquery;
    for (var index = 0; index < buildersid.length; index++)
    {
        if (index == 0)
            builderquery = "builder_id ='";

        builderquery += $.trim(buildersid[index]) ;

        if (index < buildersid.length - 1)
            builderquery += "' OR builder_id ='";
        else
            builderquery += "'";
    }
    if (builderquery.length > 0)
    {
        query = query + builderquery;
    }
    query = query + " order by " + "price";
    if (sortorder == "DESC")
        query = query + " DESC ";

    query = query + ";";

    //To save the list query on the database
    savedListDictionary = new Dictionary();
    savedListDictionary.setData("categoryID", categoryID);
    savedListDictionary.setData("categoryName", categoryName);
    savedListDictionary.setData("homeType", hometype_name);
    savedListDictionary.setData("levels", levels);
    savedListDictionary.setData("pricemax", pricemin);
    savedListDictionary.setData("bedroommax", bedroommax);
    savedListDictionary.setData("bathroommax", bathroommax);
    savedListDictionary.setData("garagesmax", garagesmax);
    savedListDictionary.setData("squarefootagemax", squarefootagemin);
    savedListDictionary.setData("query", query);



    db.transaction(function(tx) {
        tx.executeSql(query, [], updateListUI);
    }, errorHandler, successCallBack);
}



//Save Property

function saveProperty(homeID, showSuccessAlert)
{
    db.transaction(function(tx) {

        query = "UPDATE filter_UI_fields SET isAvailOffline = 'YES' where id ='" + homeID + "');";
        tx.executeSql(query);
        console.log("Query :" + query);
    }, errorHandler, showSuccessAlert)
}

function removeProperty(homeID, showSuccessAlert)
{
    db.transaction(function(tx) {

        query = "UPDATE filter_UI_fields SET isAvailOffline = 'NO' where id ='" + homeID + "');";
        tx.executeSql(query);
        console.log("Query :" + query);
    }, errorHandler, showSuccessAlert);

}

function retriveAllSavedHomeProperties(showSavedProperties)
{
    db.transaction(function(tx) {

        query = "SELECT * FROM home_property where isAvailOffline = 'YES';";
        tx.executeSql(query, [], showSavedProperties);
    }, errorHandler, successCallBack);

}


//Saved List
function savePropertyList(showSuccessAlert)
{
    // this is the section that actually inserts the values into the User table
    //    savedListDictionary = new Dictionary();
    //    savedListDictionary.setData("categoryID", "1");
    //    savedListDictionary.setData("categoryName", "Spec Home");
    //    savedListDictionary.setData("homeType", "Duplex");
    //    savedListDictionary.setData("levels", "2");
    //    savedListDictionary.setData("pricemax", "$550");
    //    savedListDictionary.setData("bedroommax", "2");
    //    savedListDictionary.setData("bathroommax", "3");
    //    savedListDictionary.setData("garagesmax", "1");
    //    savedListDictionary.setData("squarefootagemax", "1000 sqft");
    //    savedListDictionary.setData("query", query);


    var savedQuery = savedListDictionary.getData("query");
    savedQuery = savedQuery.replaceAll("'","''");

    db.transaction(function(tx) {
        query = "INSERT INTO savedPropertyList(homeType ,pricemax ,bedroomsmax ,bathroomsmax ,garagesmax ,squarefootagemax ,storiesmax ,categoryID,categoryName,query) VALUES ('" +
        savedListDictionary.getData("homeType") + "','" + savedListDictionary.getData("pricemax") + "','" + savedListDictionary.getData("bedroommax") + "','" + savedListDictionary.getData("bathroommax") + "','" + savedListDictionary.getData("garagesmax") + "','" + savedListDictionary.getData("squarefootagemax") + "','" + savedListDictionary.getData("levels") + "','" + savedListDictionary.getData("categoryID") + "','" + savedListDictionary.getData("categoryName") + "','" + savedQuery + "');";
        console.log(query);

        tx.executeSql(query);
    }, errorHandler, showSuccessAlert);
}


function removePropertyList(name, showSuccessAlert)
{
    // this is the section that actually inserts the values into the User table
    db.transaction(function(tx) {
        query = "DELETE from savedPropertyList where name = '" +
        savedListquery + "'"
        ")";

        console.log(query);

        tx.executeSql(query);
    }, errorHandler, showSuccessAlert);
}


function retriveAllSavedHomePropertyList(showSavedPropertiesList)
{
    db.transaction(function(tx) {

        query = "SELECT * FROM savedPropertyList;";
        tx.executeSql(query, [], showSavedPropertiesList);

    }, errorHandler, successCallBack);

}




//Info table
function addInfoUI(serviceResponse, receiveSuccessResponse)
{
    db.transaction(function(tx)
    {
        query = "DELETE from info";
        tx.executeSql(query);

        query = "INSERT INTO info(about, termsandcondition,name, address, contact_no, contact_email) VALUES (' " + serviceResponse.about + " ', ' " + serviceResponse.termsandcondition + " ', ' " + serviceResponse.name + " ', ' " + serviceResponse.address + " ', ' " + serviceResponse.contact_no + " ', ' " + serviceResponse.contact_email + " ')";

        tx.executeSql(query);

    }, errorHandler, receiveSuccessResponse);

}

function retriveInfo(showInfoUI)
{
    db.transaction(function(tx) {

        query = "SELECT * FROM info;";
        tx.executeSql(query, [], showInfoUI, errorHandler);

    }, errorHandler, successCallBack );
}










