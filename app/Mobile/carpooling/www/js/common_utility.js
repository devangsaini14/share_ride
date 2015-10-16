function Dictionary(){
    var dictionary = {};
    
    this.setData = function(key, val) { dictionary[key] = val; }
    this.getData = function(key) { return dictionary[key]; }
}

var Utilities={
getContentHeight: function() {
    var screen = $.mobile.getScreenHeight();
    var header = $(".ui-header").hasClass("ui-header-fixed") ? $(".ui-header").outerHeight() - 1 : $(".ui-header").outerHeight();
    var footer = $(".ui-footer").hasClass("ui-footer-fixed") ? $(".ui-footer").outerHeight() - 1 : $(".ui-footer").outerHeight();
    
    /* content div has padding of 1em = 16px (32px top+bottom). This step
     can be skipped by subtracting 32px from content var directly. */
    var contentCurrent = $(".ui-content").outerHeight() - $(".ui-content").height();
    
    var content = screen - header - footer - contentCurrent;
    
    return content;
}
}

function showTimout() {
    $('body').pagecontainer('getActivePage').find('#popupDialogLogout').remove();
    
    var html = '';
    html += '<div data-role="popup" id="popupDialogLogout" data-dismissible="false" class="ui-corner-all">';
    html += '<div data-role="header" data-theme="a" ><h1 class="dialog-title">'+ "Message"+'</h1></div>';
    html += '<div data-role="content" data-theme="d" class="dialog-content">';
    html += '<p>'+"Saved Successfully"+'</p>';
    html += '<a class="btn-timeout logout" href="#" data-role="button" data-corners="false" data-shadow="false" data-iconshadow="false" data-inline="true" data-rel="back" data-theme="a">Ok</a>';
    
    $('body').pagecontainer('getActivePage').prepend(html).trigger('create');
    
    var popupDialogLogout = $('body').pagecontainer('getActivePage').find('#popupDialogLogout');
    
    popupDialogLogout.popup("open").removeClass('ui-body-c');
    
    $('.btn-timeout').unbind('tap').bind('tap', function () {
                    popupDialogLogout.popup("close");
                    });
    return false;
}

String.prototype.replaceAll = function (find, replace) {
var str = this;
return str.replace(new RegExp(find.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'g'), replace);
};
