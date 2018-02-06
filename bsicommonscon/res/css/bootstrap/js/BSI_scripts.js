// print are START
function printAction(item) {
	alert("print " + item)
	//var newWin=window.open('','Print-Window');
	//newWin.document.open();
	//newWin.document.write('<html><body onload="window.print()">'+$(item).html()+'</body></html>');
	//newWin.document.close();
	//setTimeout(function(){newWin.close();},10);
}

$('.btn_printThis').click(function () {
	var forThis = $(this).attr("target");
	printAction(forThis);
});
// print area END


// side menu NAV START
$('.closebtn').click(function () {
	closeNav_left();
});

$('.openNav_left').click(function () {
	if ($('#siednav_left').css('opacity') == 0) {
		openNav_left(); //span.fa-navicon			
	} else {
		closeNav_left();
	}
});

function openNav_left() {
	$("#siednav_left").animate({
		opacity: 1,
		left: "0"
	}, "fast", "linear", function () {
		modal_open(); // Animation complete.
		$(".drag_nav_left").delay(200).animate({
			opacity: 1,
			left: "0"
		}, "fast", "linear");
		$(".openNav_left").addClass("navState_open");
		$(".openNav_left").removeClass("navState_close");
	});
}

function closeNav_left() {
	$("#siednav_left, .drag_nav_left").animate({
		opacity: 0,
		left: "-300px"
	}, "fast", "linear", function () {
		modal_close(); // Animation complete.
		$(".openNav_left").addClass("navState_close");
		$(".openNav_left").removeClass("navState_open");
	});
}
closeNav_left();

function modal_open() {
	document.getElementById("siednav_modal").style.backgroundColor = "rgba(0,0,0,0.4)";
	document.getElementById("siednav_modal").style.width = "100%";
	document.getElementById("siednav_modal").style.height = "100%";
}

function modal_close() {
	document.getElementById("siednav_modal").style.backgroundColor = "white";
	document.getElementById("siednav_modal").style.width = "0";
	document.getElementById("siednav_modal").style.height = "0";
	alertBox();
}

$('#siednav_modal').click(function () {
	closeNav_left();
});

// side menu NAV END


// blink start
$(document).ready(function () {
	function blinker() {
		$('.blinkThis').fadeOut(1000);
		$('.blinkThis').fadeIn(50);
	}
	setInterval(blinker, 1000);
});
// blink end


function alertBox() {
	if ($("#mod_alerts .alert-warning").length > 0) {
		$(".alertArea").show();
	} else {
		//$(".alertArea").hide();
	}
}
alertBox();

$('#mod_alerts').on('hidden.bs.modal', function () {
	alertBox();
})


function checkEyes(forThis, onThis) {
	if ($(forThis + ":visible").length > 0) {
		$(onThis).find(".fa-eye-slash").removeClass("fa-eye-slash").addClass("fa-eye");
	} else {
		$(onThis).find(".fa-eye").removeClass("fa-eye").addClass("fa-eye-slash");
	}
}

// Nav Items START
$(".btn_showNav, .btn_showQA, .btn_showTools, .btn_showProfile, .btn_showLogs").click(function () {
	var forThis = "." + $(this).attr("for");
	$(forThis).toggle();
	checkEyes(forThis, this);
	checkCBox();
});

// Nav Items END


// charts START

// prepare chart data
var  sampleData = [
	{ Day:'Monday', Keith:30, Erica:15, George: 25},
	{ Day:'Tuesday', Keith:25, Erica:25, George: 30},
	{ Day:'Wednesday', Keith:30, Erica:20, George: 25},
	{ Day:'Thursday', Keith:35, Erica:25, George: 45},
	{ Day:'Friday', Keith:20, Erica:20, George: 25},
	{ Day:'Saturday', Keith:30, Erica:20, George: 30},
	{ Day:'Sunday', Keith:60, Erica:45, George: 90}
];

// chart 1 START
var settings1 = {
	  title: "Sample report title",
	 description: "Sample report description",
	 padding: { left: 5, top: 5, right: 5, bottom: 5 },
	 titlePadding: { left: 90, top: 0, right: 0, bottom: 10 },
	 source: sampleData,
	 categoryAxis:
		  {
				dataField: 'Day',
				showGridLines: false
		  },
	 colorScheme: 'scheme01',
	 seriesGroups:
		  [
				{
					 type: 'column',
					 columnsGapPercent: 30,
					 seriesGapPercent: 0,
					 valueAxis:
					 {
						  minValue: 0,
						  maxValue: 100,
						  unitInterval: 10,
						  description: 'Time in minutes'
					 },
					 series: [
								{ dataField: 'Keith', displayText: 'Keith'},
								{ dataField: 'Erica', displayText: 'Erica'},
								{ dataField: 'George', displayText: 'George'}
						  ]
				}
		  ]
};
// chart 1 END

// prepare jqxChart settings
var settings2 = {
	 title: "Sample report title",
	 description: "Sample report description",
	 padding: { left: 5, top: 5, right: 50, bottom: 5 },
	 titlePadding: { left: 90, top: 0, right: 0, bottom: 10 },
	 source: sampleData,
	 xAxis:
	 {
		  dataField: 'Day',
		  valuesOnTicks: false
	 },
	 valueAxis:
	 {
		  minValue: 0,
		  maxValue: 100,
		  unitInterval: 10,
		  title: {text: 'Time in minutes'}
	 },
	 colorScheme: 'scheme01',
	 seriesGroups:
		  [
				{
					 type: 'pie',
					 series: [
								{ dataField: 'George', displayText: 'George'}
						  ]
				},
				{
					 type: 'line',
					 series: [
								{ dataField: 'Keith', displayText: 'Keith'},
								{ dataField: 'Erica', displayText: 'Erica'},
						  ]
				}
		  ]
};


var settings3 = {
	  title: "Sample report title",
	 description: "Sample report description",
	 padding: { left: 5, top: 5, right: 50, bottom: 5 },
	 titlePadding: { left: 90, top: 0, right: 0, bottom: 10 },
	 source: sampleData,
	 xAxis:
	 {
		  dataField: 'Day',
		  valuesOnTicks: false
	 },
	 valueAxis:
	 {
		  minValue: 0,
		  maxValue: 100,
		  unitInterval: 10,
		  title: {text: 'Time in minutes'}
	 },
	 colorScheme: 'scheme01',
	 seriesGroups:
		  [
				{
					 type: 'pie',
					 series: [
								{ dataField: 'George', displayText: 'George'}
						  ]
				},
				{
					 type: 'line',
					 series: [
								{ dataField: 'Keith', displayText: 'Keith'},
								{ dataField: 'Erica', displayText: 'Erica'},
						  ]
				}
		  ]
};


$(".btn_show_3c").click(function () {
	var forThis = "." + $(this).attr("for");
	$(forThis).toggle();
	checkEyes(forThis, this);
	checkCBox();
	$('#chartContainer1').jqxChart(settings1);
});

$(".btn_show_2b").click(function () {
	var forThis = "." + $(this).attr("for");
	$(forThis).toggle();
	checkEyes(forThis, this);
	checkCBox();
	$('#chartContainer2').jqxChart(settings2);
});

$(".btn_show_2c").click(function () {
	var forThis = "." + $(this).attr("for");
	$(forThis).toggle();
	checkEyes(forThis, this);
	checkCBox();
	$('#chartContainer3').jqxChart(settings3);
});

// charts END

// anchor animate START
$(document).ready(function() {
	
	$("a").click(function(event){ // on click within "a" link		
		var thisPage = window.location.href.split('#')[0];
		var nextPage = this.href.split('#')[0];
		
		if(thisPage === nextPage) {
			var thisHash = this.hash.split('#')[1];
			if($("a[name='"+ thisHash +"']").length > 0) { // if target is on this page
				event.preventDefault(); // noGo
				scrollToAnchor(thisHash);
			}
		 };
	});
	
	if(window.location.hash) {
	  scrollToAnchor(window.location.hash.substr(1));
	}
	
	function scrollToAnchor(aid){
		var aTag = $("a[name='"+ aid +"']");
		if($(aTag).length) {
			$('html,body').animate({scrollTop: aTag.offset().top - 80 },'slow');
		}
	}
});
// anchor animate END


/* nav sort START */
	$( ".sortMe" ).sortable({
		placeholder: "ui-state-highlight",
		items: "li:not(.noSort)"
	});
	$( ".sortMe" ).disableSelection();
	
$( ".sortMeToo" ).sortable({
		placeholder: "ui-state-highlight"
	});
	$( ".sortMeToo" ).disableSelection();

/* nav sort END */


function checkCBox() {
	if ($(".cBox:visible").length > 0) {
		$(".pageText").hide();
	} else {
		$(".pageText").show();
	}
}
checkCBox();

//
function doSortable() {
	if ($(window).width() > 480) {
		$("#theGrid").sortable({
			placeholder: "grid_ph"
		});
		$("#launchPad .panel-body").sortable({
			cancel: ".pin",
			placeholder: "launchPad_ph"
		});
		$("#theGrid, #launchPad").disableSelection();
	}
}
doSortable();
// hide on click START
$('.btn_hideThis').click(function (e) {
	e.preventDefault();
	$(this).closest(".cBox").hide();

	var newEye = $(this).attr("target");
	$("." + newEye).find("i").addClass("fa-eye-slash");
	$("." + newEye).find("i").removeClass("fa-eye");

	checkCBox();
});

$('.btn_toggleTarget').click(function (e) {
	e.preventDefault();
	var toggleThis = "." + $(this).attr("for");
	$(toggleThis).slideToggle('slow');
});

// hide on click END


function initEyes() {
	$(".togItem").each(function () {
		var forThis = "." + $(this).attr("for");
		checkEyes(forThis, this);
	});
}
initEyes();


/* tooltip START */
$('[data-toggle="tooltip"]').tooltip();
/* tooltip END */


/* event log START 
$(".table_eventLog").jqxDataTable({
	altRows: true,
	autoRowHeight: true,
	editable: true,
	filterable: true,
	filterMode: 'advanced',
	pageable: true,
	pagerMode: 'advanced',
	pageSize: 5,
	pageSizeOptions: ['5', '10', '25', '50'],
	selectionMode: 'singleRow',
	sortable: true,                
	width: "100%",
	columns: [
		{ text: 'CustId', dataField: 'CustId', width: 55, align: 'center', cellsAlign: 'center' },
		{ text: 'CustName', dataField: 'CustName', align: 'center' },
		{ text: 'FEIN', dataField: 'FEIN', width: 90, align: 'center', cellsAlign: 'center' },
		{ text: 'Emp ID', dataField: 'Emp ID', width: 60, align: 'center' },
		{ text: 'Context', dataField: 'Context', width: 70, align: 'center', cellsAlign: 'center' },
		{ text: 'Severity', dataField: 'Severity', width: 70, align: 'center', cellsAlign: 'center' },
		{ text: 'ReportID', dataField: 'ReportID', width: 80, align: 'center' },
		{ text: 'Description', dataField: 'Description' },
		{ text: 'Date', dataField: 'Date', width: 90, align: 'center', cellsFormat: 'd' },						
		{ text: 'Time', dataField: 'Time', width: 110, align: 'center', cellsFormat: 't' },
		{ text: 'Logged On User', dataField: 'Logged On User', width: 140, align: 'center' }
	]
});*/
/* event log END */

/* auto complete START */
var availableTags = [      
	"Asure",
	"CIC Plus",
	"Criterion",
	"Deltek",
	"Greenshades",
	"HarrisData",
	"High Line", 
	"Homegrown – Caliber Technology",
	"Homegrown – Self Maintained",
	"Homegrown – Symmetry",
	"Homegrown - Vertex",
	"Infor - GEAC",
	"Infor - Infinium",
	"Infor - Lawson",
	"iSystems",
	"Kronos",
	"MasterTax",
	"McKesson",
	"Microsoft - Axapta",
	"Microsoft - ERP",
	"Microsoft - Great Plains",
	"MPay",
	"Namely",
	"Optimum Solutions",
	"Oracle",
	"Oracle - JDE",
	"Oracle - PSFT",
	"Other - Outsource",
	"Other - Software",
	"Outsource - ADP",
	"Outsource - Ceridian",
	"Outsource - Regional",
	"PTM - Payroll Tax Management",
	"PDS – Vista HRMS Payroll",
	"Rimini Street",
	"Sage",
	"SAP",
	"SAP -- EC",
	"SunGard",
	"Tyler Technologies",
	"Ultimate",
	"Unicorn HRO",
	"Valiant Solutions",
	"Ventyx",
	"Workday",
	
	"wf-ob: Workflow / Onboarding 1",
	"wf-ob: Workflow / Onboarding 2",
	"wf-ob: Workflow / Onboarding 3",
	"wf-ob: Workflow / Onboarding 4",
	"wf-ca: Workflow / Calculation 1",
	"wf-ca: Workflow / Calculation 2",
	"wf-ca: Workflow / Calculation 3",
	"wf-ca: Workflow / Calculation 4",
	"wf-co: Workflow / Compliance 1 ",
	"wf-co: Workflow / Compliance 2 ",
	"wf-co: Workflow / Compliance 3 ",
	"wf-co: Workflow / Compliance 4 "
	
];
			
/*$( ".search_top" ).autocomplete({
	source: availableTags
});*/

  $( function() {
    $.widget( "custom.catcomplete", $.ui.autocomplete, {
      _create: function() {
        this._super();
        this.widget().menu( "option", "items", "> :not(.ui-autocomplete-category)" );
      },
      _renderMenu: function( ul, items ) {
        var that = this,
          currentCategory = "";
        $.each( items, function( index, item ) {
          var li;
          if ( item.category != currentCategory ) {
            ul.append( "<li class='ui-autocomplete-category'>" + item.category + "</li>" );
            currentCategory = item.category;
          }
          li = that._renderItemData( ul, item );
          if ( item.category ) {
            li.attr( "aria-label", item.category + " : " + item.label );
          }
        });
      }
    });
	  
    var data = [

{ label: "Reports/Statistics", category: "Onboarding" },
{ label: "Dashboard", category: "Onboarding" },
{ label: "Form Status", category: "Onboarding" },
{ label: "Event Log", category: "Onboarding" },
{ label: "Alerts", category: "Onboarding" },

{ label: "Maintenance", category: "Onboarding" },
{ label: "Refresh Employee Taxes", category: "Onboarding" },
{ label: "Schedule Imports", category: "Onboarding" },
{ label: "Downloads", category: "Onboarding" },
{ label: "Manual Import", category: "Onboarding" },
{ label: "Manual Export", category: "Onboarding" },
{ label: "Worksites", category: "Onboarding" },
{ label: "Authority Tax Review", category: "Onboarding" },

{ label: "Email", category: "Onboarding" },
{ label: "Content/Settings", category: "Onboarding" },
{ label: "Distribution", category: "Onboarding" },



{ label: "Reporting", category: "Calculation" },
{ label: "PA Service Tax Report", category: "Calculation" },
{ label: "Tax History Report", category: "Calculation" },
{ label: "Taxability Report", category: "Calculation" },
{ label: "User Data Queries", category: "Calculation" },
{ label: "U.S. QuickFormulas", category: "Calculation" },
{ label: "U.S. Pension QuickFormulas", category: "Calculation" },
{ label: "U.S. Wage Attachment QuickFormulas", category: "Calculation" },

{ label: "Tax Management", category: "Calculation" },
{ label: "Manage Tax Types", category: "Calculation" },
{ label: "Manage Plan/Earning Codes", category: "Calculation" },

{ label: "Rate Overrides", category: "Calculation" },
{ label: "Setup Tools", category: "Calculation" },
{ label: "Message Viewer", category: "Calculation" },
{ label: "Worksite Management", category: "Calculation" },
{ label: "Employee Groups", category: "Calculation" },

{ label: "Override Tools", category: "Calculation" },
{ label: "Unemployment Overrides", category: "Calculation" },
{ label: "Optional Rate Overrides", category: "Calculation" },
{ label: "Group Overrides", category: "Calculation" },
{ label: "Reciprocal Overrides", category: "Calculation" },
{ label: "Payment Overrides", category: "Calculation" },
{ label: "Disposable Overrides", category: "Calculation" },

{ label: "Payroll Data", category: "Compliance" },

{ label: "Filing", category: "Compliance" },
{ label: "Master Table", category: "Compliance" },
{ label: "calendar", category: "Compliance" },
{ label: "run status", category: "Compliance" },
{ label: "prepare filings", category: "Compliance" },
{ label: "process filings", category: "Compliance" },
{ label: "service status", category: "Compliance" },

{ label: "Payment", category: "Compliance" },
{ label: "run status", category: "Compliance" },
{ label: "prepare liabilities", category: "Compliance" },
{ label: "prepare payments", category: "Compliance" },
{ label: "process payments", category: "Compliance" },
{ label: "service status", category: "Compliance" },

{ label: "Amended Reports", category: "Compliance" },
{ label: "process amended reports", category: "Compliance" },
{ label: "service status", category: "Compliance" },
		 
		 

	{ label: "wf-ob: Onboarding 1", category: "Workflows" },
	{ label: "wf-ob: Onboarding 2", category: "Workflows" },
	{ label: "wf-ob: Onboarding 3", category: "Workflows" },
	{ label: "wf-ob: Onboarding 4", category: "Workflows" },

	{ label: "wf-ca: Calculation 1", category: "Workflows" },
	{ label: "wf-ca: Calculation 2", category: "Workflows" },
	{ label: "wf-ca: Calculation 3", category: "Workflows" },
	{ label: "wf-ca: Calculation 4", category: "Workflows" },

	{ label: "wf-co: Compliance 1", category: "Workflows" },
	{ label: "wf-co: Compliance 2", category: "Workflows" },
	{ label: "wf-co: Compliance 3", category: "Workflows" },
	{ label: "wf-co: Compliance 4", category: "Workflows" }
	 

		 

		 
    ];
 
    $( ".search_top" ).catcomplete({
      delay: 0,
      source: data
    });
} );
/* auto complete END */


/* theme select START */
$('#btn_th_default').click(function (){
	$(".btn_th").removeClass("active");
	$(this).addClass("active");	
	$('.theSheet').attr('href','/bootstrap/css/bsi-theme.css');
});
$('#btn_th_default2').click(function (){
	$(".btn_th").removeClass("active");
	$(this).addClass("active");	
	$('.theSheet').attr('href','/bootstrap/css/bsi-theme2.css');
});
$('#btn_th_dark').click(function (){
	$(".btn_th").removeClass("active");
	$(this).addClass("active");	
	$('.theSheet').attr('href','/bootstrap/css/bootstrapdark.css');
});
$('#btn_th_bow').click(function (){
	$(".btn_th").removeClass("active");
	$(this).addClass("active");	
	$('.theSheet').attr('href','/bootstrap/css/bootstrapbow.css');
});
$('#btn_th_wob').click(function (){
	$(".btn_th").removeClass("active");
	$(this).addClass("active");	
	$('.theSheet').attr('href','/bootstrap/css/bootstrapwob.css');
});
/* theme select END */
