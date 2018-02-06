var quickApprovalReport = (function () {
    function _fillData(data) {
      showQuickApprovalReport();
    };
    function showQuickApprovalReport() {
        $('#quickApprovalReportId').show();
    };
    function toggleItem(idd){
        $(idd).toggle();
    }
    return {
    	config: {
          
        },
        show: function (data) {
            _fillData(data);
            
        },
        hide: function (data) {
            hideQuickApprovalReport();
        },
    };
}());
$(document).ready(function () {
  
});
function hideQuickApprovalReport() {
    $('#quickApprovalReportId').hide();
    $('#quickApprovalReportId').remove();
}