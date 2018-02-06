function getUIAlerts(){
	var url1 = "/bsicommonscon/src/html/UIAlerts.html";
        $.ajax({
            dataType: "html",
	    url: url1,
	    success: function (data) {
	    	$('#modal-content_alt_id').html(data);
                $("#mod_alerts").modal('show');
	    },
	    error: function () {
	    	alert('error');
	    }
	});
}
function getUIMessages(){
    var url1 = "/bsicommonscon/src/html/UIMessages.html";
    $.ajax({
        dataType: "html",
        url: url1,
	success: function (data) {
	    $('#modal-content_msg_id').html(data);
	},
	error: function () {
            alert('error');
	}
    });
}
function getCustomizeUIPg(){
	var url1 = "/bsicommonscon/src/html/CustomizeUI.html";
	$.ajax({
            dataType: "html",
	    url: url1,
	    success: function (data) {
	    	$('#customizepg-content_id').html(data);
	    },
	    error: function () {
	    	alert('error');
	    }
	});
}
function setTheme(thiss,theme){
    $(".btn_th").removeClass("active");
    $(thiss).addClass("active");	
    $('.theSheet').attr('href','res/css/bootstrap/css/'+theme+'.css');
}