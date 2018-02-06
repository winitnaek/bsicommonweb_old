// fix ® START
 $(document).ready(function() {
	if ($("body h1").length > 0) {
		 $("h1").html(
				$("h1").html().replace("®", "<sup>®</sup>")
		 );		 	 
	 }
});
// fix ® END


// bails login page START
$(document).ready(function() {
	if ( $( "#bailsEmail" ).length ) {
		$("#bailsEmail").keyup(function() {
			
			var disable = true;
			
			if($(this).val().indexOf("@bailsllc.com") > -1){			
				disable = false;
				if ( $( "#partnerEmail" ).length ) {
					$( "#partnerEmail" ).val($(this).val());
				} //set value of form field
			}

			if (disable) {
				$('#submitThis').attr('disabled', true);
			} else {
				$('#submitThis').attr('disabled', false);
			}
		});
		$('#submitThis').attr('disabled', true);
	}
})
// bails login page END


// I hate IE start
$(document).ready(function(){
	$(".home header h1, #paytech header h1").hide();
});
// I hate IE end


// anchor animate START
$(document).ready(function() {
	
	$("a").click(function(event){ // on click within "a" link		
		var thisPage = window.location.href.split('#')[0];
		var nextPage = this.href.split('#')[0];
		
		if(thisPage == nextPage) { 		
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
		$('html,body').animate({scrollTop: aTag.offset().top - 80 },'slow');
	}
});
// anchor animate END


// blink start
$(document).ready(function(){
	$(".blink").click(function() {
		$('html, body').animate({ scrollTop: $(".blinkThis").offset().top }, 'slow');
		$( ".blinkThis" ).effect( "highlight", {color:"#ffb81d"}, 250 );
		$( ".blinkThis" ).delay(100).effect( "highlight", {color:"#ffb81d"}, 250 );
		$( ".blinkThis" ).delay(200).effect( "highlight", {color:"#ffb81d"}, 500 );
	});
});
// blink end


// cookies START
function setCookie(cname, cvalue, exdays) {
	var d = new Date();
	d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
	var expires = "expires = " + d.toUTCString();
	document.cookie = cname + "=" + cvalue  + "; " + expires + "; path=/";
}

function getCookie(cname) {
	var name = cname + "=";
	var ca = document.cookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}
//$(document).ready(function(){});

// check for CID START
var getUrlParameter = function getUrlParameter(sParam) {
	var sPageURL = decodeURIComponent(window.location.search.substring(1)),
	sURLVariables = sPageURL.split('&'),
	sParameterName,
	i;

	for (i = 0; i < sURLVariables.length; i++) {
		sParameterName = sURLVariables[i].split('=');
		if (sParameterName[0] === sParam) {
			return sParameterName[1] === undefined ? true : sParameterName[1];
		}
	}
};

$(document).ready(function(){
	var hasCid = getUrlParameter('cid');
	if(hasCid != null) {
		setCookie("BSIcid", hasCid, 1); // "paytech" print campaign code
	}
});
// check for CID END

// check for CTA links START
$(document).ready(function () {
	if(window.location.href.indexOf("paytech") > -1) {
		setCookie("BSIcid", "7010B000001RPuo", 1); // "paytech" print campaign code
	}
	if(window.location.href.indexOf("SAP") > -1) {
		setCookie("BSIcid", "7010B000001RPuy", 1); // "SAP" print campaign code
	}
	if(window.location.href.indexOf("sapappcenter") > -1) {
		$('#lead_source').val("SAP Storefront"); // "sapappcenter"
	}
	// leads email 2/17 START
	if(window.location.href.indexOf("KnowBSI") > -1) {
		setCookie("BSIcid", "7010B000001RYv5", 1); // "leads email to 71" campaign code
	}
	// leads email 2/17 END
	
});
// check for CTA links END

// adjusts #Campaign_ID START
$(document).ready(function(){
	var campaignCookie = getCookie("BSIcid");
	if(campaignCookie){
		$("#Campaign_ID").val(campaignCookie);
	}
});
// adjusts #Campaign_ID END

// cookies END


// elevator START
$(document).ready(function() {
	var $sidebar   = $(".elevator"),
	$frame 		= $sidebar.parent(),
	$window    = $(window),
	offset     = $sidebar.offset(),
	topPadding = 100;
	
	if($sidebar.length){
		$window.scroll(elevate);
		$window.resize(elevate);
	}
	
	function elevate() {
		
		var maxMargin = $frame.height() - $sidebar.height() - topPadding; // height of elevator shaft
		var minMargin = 0;
		var goMargin = $window.scrollTop() - offset.top + topPadding; // elevator destination
		
			
		if(maxMargin > goMargin && minMargin < goMargin){ // shaft is deeper than target AND  
			
			$sidebar.stop().animate({ 
				marginTop: goMargin // go to new margin
			}, 1000, function() {
				// Animation complete.
			});
		}  else if (maxMargin < goMargin) { // elevator shaft floor too close for destination
			
			if (minMargin < $sidebar.height() ) { // elevator height > height of shaft
			
			} else {
		
				$sidebar.stop().animate({
					marginTop: maxMargin // go to bottom
				}, 1000, function() {
					// Animation complete.
				});
			
			}
		} else {
			
			$sidebar.stop().animate({
				marginTop: minMargin // go to top
			}, 2000, function() {
				// Animation complete.
			});
		}
	}
	
});
// elevator STOP

// button with icon fix START
$(document).ready(function() {
	$( ".btn span" ).parent().each(function () {
		this.style.setProperty( "margin-right","30px","important" );
		this.style.setProperty( "display","inline","important" );
	});	
});
// button with icon fix END


// show case study/testimonials toggle (see: http://mkt.bsi.com/products-and-services/bsi-compliancefactory/ ) START
$(document).ready(function() {
	$(".showMore").click(function() {
		$( this ).next( ".showThis" ).toggle();
	});
});
// show case study/testimonials toggle END


// tabs START
/*$(document).ready(function() {
	$( "#tabs" ).tabs();
	$( "#tabs" ).tabs().addClass( "ui-tabs-vertical ui-helper-clearfix" );
	$( "#tabs li" ).removeClass( "ui-corner-top" ).addClass( "ui-corner-left" );
});*/
// tabs END


// Tabs NEW responsive START
$(document).ready(function() {
	
	// show/hide tabs START
	
	$('.tab_content').hide();
	$( ".tab_container" ).each(function () {
		$(this).find( ".tab_content:first" ).show();
	});
	$( "ul.tabs" ).each(function () {
		$(this).find( "li" ).last().addClass('tab_last');
	});
	
	$('ul.tabs li').click(function () {
		 $(this).parent().next('.tab_container').find(".tab_content").hide();
		 var activeTab = $(this).attr('class').split(' ')[0];
		 $('#' + activeTab).fadeIn();
		 $(this).parent().find("li").removeClass('active');
		 $(this).addClass('active');
		 $(this).parent().next('.tab_container').find(".tab_drawer_heading").removeClass('d_active');
		 $('.tab_drawer_heading[class^=\'' + activeTab + '\']').addClass('d_active');
	});	
	
	$('.tab_drawer_heading').click(function () {
		 $(this).parent().find(".tab_content").hide();
		 var d_activeTab = $(this).attr('class').split(' ')[0];
		 $('#' + d_activeTab).fadeIn();
		 $(this).parent().find('.tab_drawer_heading').removeClass('d_active');
		 $(this).addClass('d_active');
		 $(this).parent().prev("ul.tabs").find('li').removeClass('active');
		 $('ul.tabs li[class^=\'' + d_activeTab + '\']').addClass('active');
	});

	/*$('.tab_content').hide();
	$('.tab_content:first').show();
	$('ul.tabs li').click(function () {
		 $('.tab_content').hide();
		 var activeTab = $(this).attr('class').split(' ')[0];
		 $('#' + activeTab).fadeIn();
		 $('ul.tabs li').removeClass('active');
		 $(this).addClass('active');
		 $('.tab_drawer_heading').removeClass('d_active');
		 $('.tab_drawer_heading[class^=\'' + activeTab + '\']').addClass('d_active');
	});
	$('.tab_drawer_heading').click(function () {
		 $('.tab_content').hide();
		 var d_activeTab = $(this).attr('class').split(' ')[0];
		 $('#' + d_activeTab).fadeIn();
		 $('.tab_drawer_heading').removeClass('d_active');
		 $(this).addClass('d_active');
		 $('ul.tabs li').removeClass('active');
		 $('ul.tabs li[class^=\'' + d_activeTab + '\']').addClass('active');
	});
	$('ul.tabs li').last().addClass('tab_last');*/
	// show/hide tabs END
	
	// show/hide tabsToo START
	$('.tabToo_content').hide();
	$('.tabToo_content:first').show();
	$('ul.tabsToo li').click(function () {
		 $('.tabToo_content').hide();
		 var activeTab = $(this).attr('class').split(' ')[0];
		 $('#' + activeTab).fadeIn();
		 $('ul.tabsToo li').removeClass('active');
		 $(this).addClass('active');
		 $('.tabToo_drawer_heading').removeClass('d_active');
		 $('.tabToo_drawer_heading[class^=\'' + activeTab + '\']').addClass('d_active');
	});
	$('.tabToo_drawer_heading').click(function () {
		 $('.tabToo_content').hide();
		 var d_activeTab = $(this).attr('class').split(' ')[0];
		 $('#' + d_activeTab).fadeIn();
		 $('.tabToo_drawer_heading').removeClass('d_active');
		 $(this).addClass('d_active');
		 $('ul.tabsToo li').removeClass('active');
		 $('ul.tabsToo li[class^=\'' + d_activeTab + '\']').addClass('active');
	});
	$('ul.tabsToo li').last().addClass('tab_last');
	// show/hide tabsToo END
	
	
	// show/hide tabs_loop START
	$('.tab_loop_content').hide();
	$('.tab_loop_content:first').show();
	$('ul.tabs_loop li').click(function () {
		 $('.tab_loop_content').hide();
		 var activeTab = $(this).attr('class').split(' ')[0];
		 $('#' + activeTab).fadeIn();
		 $('ul.tabs_loop li').removeClass('active');
		 $(this).addClass('active');
		 $('.tab_loop_drawer_heading').removeClass('d_active');
		 $('.tab_loop_drawer_heading[class^=\'' + activeTab + '\']').addClass('d_active');
	});
	$('.tab_loop_drawer_heading').click(function () {
		 $('.tab_loop_content').hide();
		 var d_activeTab = $(this).attr('class').split(' ')[0];
		 $('#' + d_activeTab).fadeIn();
		 $('.tab_loop_drawer_heading').removeClass('d_active');
		 $(this).addClass('d_active');
		 $('ul.tabs_loop li').removeClass('active');
		 $('ul.tabs_loop li[class^=\'' + d_activeTab + '\']').addClass('active');
	});
	$('ul.tabs_loop li').last().addClass('tab_last');
	// show/hide tabs_loop END
	
	// expand all tabs START
	$('#expandAll').click(function () {    
		var showStatus = $(this).attr('class');		  
		if(showStatus == "close"){ // change to expand
		
			$('.tab_drawer_heading, .tabToo_drawer_heading, .tab_loop_drawer_heading').each(function() {
				$(this).addClass('d_active');
			});
			$('.tab_content, .tabToo_content, .tab_loop_content').fadeIn();
			$("#expandAll").html('Collapse All');
			$(this).attr('class', 'open');
		} else { // change to collapse
			$('.tab_drawer_heading, .tabToo_drawer_heading, .tab_loop_drawer_heading').each(function() {
				$(this).removeClass('d_active');
			});
			$('.tab_content, .tabToo_content, .tab_loop_content').hide();
			$("#expandAll").html('Expand All');
			$(this).attr('class', 'close');
		}   
	});
	 
	 //resize fix START
	 // Cache a reference to $(window), for performance, and get the initial dimensions of the window
    var $window = $(window),
        previousDimensions = {
            width: $window.width(),
            height: $window.height()
        };

    $window.resize(function(e) {
        var newDimensions = {
            width: $window.width(),
            height: $window.height()
        };

        //if (newDimensions.width > previousDimensions.width) {
		  if (3 > 4) {
            // scaling up 479
				//@media only screen and (max-width: 767px) {
				if (767 > previousDimensions.width) { // when changing from accordion to tabs
      	      
					$('.tab_drawer_heading, .tabToo_drawer_heading, .tab_loop_drawer_heading').each(function() {
						$(this).removeClass('d_active'); // set acc headers to NOT active
					});	
					$('.tab_content, .tabToo_content, .tab_loop_content').hide(); // close all content
								
					/* set default header/content to active */
					  
					if ($('ul.tabs li.active').length) { // elevator height > height of shaft
						var activeTab = $('ul.tabs li.active').attr('class').split(' ')[0];
						$('#' + activeTab).fadeIn();
					}
					
					if ($('ul.tabsToo li.active').length) { // elevator height > height of shaft
						var activeTabToo = $('ul.tabsToo li.active').attr('class').split(' ')[0];
						$('#' + activeTabToo).fadeIn();
					}
					
					if ($('ul.tabs_loop li.active').length) { // elevator height > height of shaft
						var activeTab_loop = $('ul.tabs_loop li.active').attr('class').split(' ')[0];
						$('#' + activeTab_loop).fadeIn();
					}
					
					 $('.tab_drawer_heading, .tabToo_drawer_heading, .tab_loop_drawer_heading').removeClass('d_active');
	        		 $('.tab_drawer_heading[class^=\'' + activeTab + '\']').addClass('d_active');
					 $('.tabToo_drawer_heading[class^=\'' + activeTabToo + '\']').addClass('d_active');
					 $('.tab_loop_drawer_heading[class^=\'' + activeTab_loop + '\']').addClass('d_active');
			  }
        } else {
            // scaling down
        }

        // Store the new dimensions
        previousDimensions = newDimensions;
    });
	//resize fix END
   // expand all tabs END
});

// Tabs NEW responsive END


// tooltip START
$(document).ready(function() {
	
	// bootstrap tooltip START
   $('[data-toggle="tooltip"]').tooltip();
	// bootstrap tooltip END

	
	/*$(".icons_sol").tooltip({
		position: {
			my: "center bottom-20",
			at: "center top",
			using: function( position, feedback ) {
				$( this ).css( position );
				$( "<div>" )
			.addClass( "arrow" )
			.addClass( feedback.vertical )
			.addClass( feedback.horizontal )
			.appendTo( this );
			}
		}
	});*/
	
	$(".tip_nav span, .tip").tooltip({
		track: true,
		position: {
			my: "center bottom-20",
			at: "center top",
			using: function( position, feedback ) {
				$( this ).css( position );
				$( "<div>" )
			.addClass( feedback.vertical )
			.addClass( feedback.horizontal )
			.appendTo( this );
			}
		}
	});
	
});
// tooltip END

// #contactForm START
$(document).ready(function() {
	// fix return URL START
	if ($("#retURL").length) { // elevator height > height of shaft
		$("#retURL").val(window.location.href);
	}
	// fix return URL END
});
// #contactForm END

// stop links START
$(document).ready(function() {
	$(".noGo").click( function(event) {
		event.preventDefault();
	});
});
// stop links END

// accordion START
$(document).ready(function() {
	$("#accordion").accordion({ 
		event: "click",
		heightStyle: "content",
		active: false,
		collapsible: true,
		header: 'table,h3,h5'
	});
	
	// open first panel START
	if($("#bsi-events").length > 0) {
		$( "#accordion" ).accordion( "option", "active", 0 );
	}
	// open first panel END
	
	if(window.location.hash) {
		var hash = "#"+window.location.hash.substring(1); // Puts hash in variable, and removes the # character
		$("#accordion").accordion({active:"h3"+hash})
		$("h3"+hash).focus();
		
		//calculate destination place
		if($("h3"+hash).length > 0) {
			var dest=0;
			if($("h3"+hash).offset().top > $(document).height()-$(window).height()){
				dest=$(document).height(); // go to bottom
			}else{
				dest=$("h3"+hash).offset().top-75;
			}
			//go to destination
			$('html,body').animate({scrollTop:dest}, 2000,'swing');
		}
	}
	
	$('#accordion').fadeIn('fast', function() {
		// Animation complete
	});

});/**/
// accordion END



// parallax START
$(document).ready(function() {
	
	// fix parallax_0 for ie7 START

		var theWindow = $(window),
		$bg = $("#parallax_0"),
		aspectRatio = $bg.width() / $bg.height();
		
		function resizeBg() {
			if ( (theWindow.width() / theWindow.height()) < aspectRatio ) {
				$bg.removeClass().addClass('bgheight');
			} else {
				$bg.removeClass().addClass('bgwidth');
			}
		}
				
		theWindow.resize(resizeBg).trigger("resize");

// fix parallax_0 for ie7 END

	
	$(window).bind('scroll',function(e){
		parallaxScroll();
	});
		
	function parallaxScroll(){
		var scrolledY = $(window).scrollTop();
		//$('#parallax_0').css('background-position','center -'+((scrolledY*0.2))+'px');
		$('#parallax_0').css('top','-'+((scrolledY*0.2))+'px');
		$('#parallax_1').css('top','-'+((scrolledY*0.5))+'px');
		$('#parallax_2').css('top','-'+((scrolledY*0.8))+'px');
		$('#parallax_dot_a').css('top','-'+((scrolledY*.3))+'px');
		$('#parallax_dot_b').css('top','-'+((scrolledY*.4))+'px');
	}
	
	
});
// parallax END



// popMessage START
function popMessage() {

	var cWidth = $(".container").width();

	$( "#popMessage" ).dialog({
		autoOpen: false,
		width: cWidth,
		modal: true,
		open: function(){
				$('.ui-widget-overlay').bind('click',function(){
					$('#popMessage').dialog('close');
					$( "#popMessage" ).html("");
				});
			},
		buttons: {
		Close: function() {
				$( this ).dialog( "close" );
				$( "#popMessage" ).html("");
			}
		}
	});

	$( "#popMessage" ).dialog( "open" );

};
// popMessage END



// modal START
$(document).ready(function() {
	
	// dialog1 START
	$( "#opener, .opener" ).click(function() {
		
		var cWidth = $(".container").width();
		
		$( "#dialog" ).dialog({
			autoOpen: false,
			width: cWidth,
			modal: true,
			open: function(){
					jQuery('.ui-widget-overlay').bind('click',function(){
						jQuery('#dialog').dialog('close');
					})				
				},
						
			buttons: [
            {
               text: "Privacy Policy",
               "class": 'left',
               click:function() {
					window.location.replace("/privacy-policy/");
               }
            },
            {
               text: "Cancel",
               click: function() { 
                  $(this).dialog("close"); 
               }
            }
          ]
			
		});
				
		$( "#dialog" ).dialog( "open" );
		
		// to preset #description
		if ( $(this).hasClass('act_Contact')) {
			$(".this_contact").attr('checked', 'checked');
		} 
		if ($(this).hasClass('act_Quote')) {
			$(".this_quote").attr('checked', 'checked');
		} 
		if ($(this).hasClass('act_Info')) {
			$(".this_info").attr('checked', 'checked');
		}
		if ($(this).hasClass('act_Demonstration')) {
			$(".this_demo").attr('checked', 'checked');
		}
		
	});
	
	// dialog1 END
	// dialog2 START
	$( "#opener2, .opener2" ).click(function() {
		
		var cWidth = $(".container").width();
		
		$( "#dialog2" ).dialog({
			autoOpen: false,
			width: cWidth,
			modal: true,
			open: function(){
					jQuery('.ui-widget-overlay').bind('click',function(){
						jQuery('#dialog2').dialog('close');
					})				
				},
			buttons: {
			Cancel: function() {
					$( this ).dialog( "close" );
				}
			}
		});
				
		$( "#dialog2" ).dialog( "open" );
	});
	
	// dialog2 END
	// dialog3 START
	
	$( "#opener3, .opener3" ).click(function() {
		
		var cWidth = $(".container").width();
		
		$( "#dialog3" ).dialog({
			autoOpen: false,
			width: cWidth,
			modal: true,
			open: function(){
					jQuery('.ui-widget-overlay').bind('click',function(){
						jQuery('#dialog3').dialog('close');
					})				
				},
			buttons: {
			Cancel: function() {
					$( this ).dialog( "close" );
				}
			}
		});
				
		$( "#dialog3" ).dialog( "open" );
	});
	// dialog3 END
	
	// dialog4 START
	
	$( "#opener4, .opener4" ).click(function() {
		
		var cWidth = $(".container").width();
		
		$( "#dialog4" ).dialog({
			autoOpen: false,
			width: cWidth,
			modal: true,
			open: function(){
					jQuery('.ui-widget-overlay').bind('click',function(){
						jQuery('#dialog4').dialog('close');
					})				
				},
			buttons: {
			Cancel: function() {
					$( this ).dialog( "close" );
				}
			}
		});
				
		$( "#dialog4" ).dialog( "open" );
	});
	// dialog3 END
	
});
// modal END
