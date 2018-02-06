var customizeUI = (function () {
    function _fillData(data) {
        showCustomizeUIPg();
    };
    return {
    	config: {
          
        },
        show: function (data) {
            _fillData(data);
            
        }
    };
}());
$(document).ready(function () {
    
});
function showCustomizeUIPg() {
   $('#mod_custPage').show();
}
function hideCustomizeUIPg() {
   $('#mod_custPage').hide();
}