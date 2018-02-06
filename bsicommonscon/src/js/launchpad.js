var launchPad = (function () {
    function _fillData(data) {
      showLaunchPad();
    };
    function showLaunchPad() {
        $('#launchPadWindow').show();
        doSortable();
    };
    function toggleLaunchItem(idd){
        $(idd).toggle();
    }
    return {
    	config: {
          
        },
        show: function (data) {
            _fillData(data);
            
        },
        hide: function (data) {
            hideLaunchPad(data);
        },
        toggleItem:function(idd){
            toggleLaunchItem(idd);
        }
    };
}());
$(document).ready(function () {
  
});
function hideLaunchPad() {
    $('#launchPadWindow').hide();
}
