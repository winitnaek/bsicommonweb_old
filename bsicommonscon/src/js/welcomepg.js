var welcomePg = (function () {
    function _fillData(data) {
        showWelcomePg();
    };
    return {
    	config: {
          
        },
        loadData: function (data) {
            _fillData(data);
            
        }
    };
}());
$(document).ready(function () {
    
});
function showWelcomePg() {
   $('#welcomePg').show();
}
function hideWelcomePg() {
   $('#welcomePg').hide();
}

