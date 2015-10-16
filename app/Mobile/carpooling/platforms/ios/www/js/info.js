

function succesInfoUIFieldsService ()
{
    retriveInfo(showInfoUI);
}


function failureInfoUIFieldsService ()
{
    
}


$(document).off("pagebeforeshow", "info_page").on("pagebeforeshow", "#info_page", function()
{
InfoUI.callInfoService(succesInfoUIFieldsService,failureInfoUIFieldsService);
});


function showInfoUI (transaction, result) {
    var html="<div style='text-align: justify'><p class='info_content'>";
     var html1="";
    if ((result != null && result.rows != null)) {
        for (var i = 0; i < result.rows.length; i++) {
            var row = result.rows.item(i);
//            console.log(row.about,row.name);
            html+=row.about;
            html1+="<h1>"+row.name+"</h1><br/>";
            html1+="<p>"+row.address+"<p><br/>";
            html1+="<p>"+row.contact_no+"</p><br/><br/>";
            html1+="<p>"+row.email+"</p>";
            $("#info_address").html1(html1);
            $("#info_address").trigger("create");
        }
        
    }
    else{
        html+="Verrado is a place to experience the very best of home, town and Arizona. Only twenty five miles from Downtown Phoenix, in the heart of the Sonoran Desert you’ll find a modern hometown unlike any other. Verrado brings people together by design. You can’t miss the warm, welcoming ambience that exudes an authentic small-town charm. It’s a diverse community where you can follow your own path to happiness. And likely that path will take you through some of the most scenic desert vistas in Arizona.\r\n\r\nSet against the White Tank Mountains in Buckeye, Arizona, our vibrant Verrado community of a proposed 11,000 homes, spans across 8,800 acres in the West Valley, and ranges in elevation from 1,100 to 3,600 feet. Built on small-town design principles, Verrado offers a diverse array of authentic architectural styles including Craftsman, Spanish Colonial, Ranch Hacienda and other first-of-their-kind homes that complement the natural topography of the surrounding landscape.\r\n\r\nA DMB community, you’ll find Verrado offers many amenities and features that bring neighbors together, and create opportunities for social activities and gatherings that become lasting traditions. This sense of neighborliness and expression of individuality is quite unique to this 21st century Arizona town.\r\n\r\nIn each of our communities, a dedicated Community Life team brings DMB’s passion for remarkable and sustainable legacy communities to life. Diverse neighborhood engagement programs developed and hosted by the Community Life team bring residents together in our unique settings to work toward goals that support the community today, and in the future. Supporting Livable Places Defined by extraordinary surroundings, DMB communities build distinct neighborhoods with deliberate connections to work and retail centers, and schools and parks, each complementing the natural beauty and history of the land. DMB’s commitment to creating great communities extends beyond the structures, embracing the landscape and the people who live in, and care for, these exceptional places. To learn more about community in Verrado, or to arrange a viewing to experience it for yourself, contact us today at (623) 215-6000!\r\n\r\nDMB’s business practices are committed to creating sustainable, legacy communities that are truly livable. We take a long-term view for each community, and for the Company, with a focus on innovation, integration, and legacy. Ultimately, our vision is to build the next generation of communities that stand apart by creating an authentic sense of place and connection that reflects how people want to live today and in the future. With each community our dedication to innovative and responsible planning respects the aspirations of all community stakeholders, honors local cultures, and preserves special landscapes, ensuring a unique vision and plan that is authentic and regionally appropriate. It also ensures that no two DMB communities are alike. DMB’s experience and expertise in building sustainable, legacy communities has also established us as a model for livable community planning, positioning us well for long-term success.";
    }
    $("#info_content").html(html+"</p></div>");
    $("#info_content").trigger("create");
    
   

}
