	$(document).ready(function () {

		var hidWidth;
		var scrollBarWidths = 40;
		var hidHight;
		var scrollBarHeights = 40;

		var widthOfList = function () {
			var itemsWidth = 0;
			$('.drag_nav li').each(function () {
				var itemWidth = $(this).outerWidth();
				itemsWidth += itemWidth;
			});
			return itemsWidth;
		};

		var widthOfHidden = function () {
			return (($('.drag_nav-container').outerWidth()) - widthOfList() - getLeftPosi()) - scrollBarWidths;
		};

		var heightOfList = function () {
			var itemsHeight = 81; // 81px added for header
			$('.drag_nav li').each(function () {
				var itemHeight = $(this).height();
				itemsHeight += itemHeight;
			});
			return itemsHeight;
		};

		var heightOfHidden = function () {
			return (($('.drag_nav-container').height()) - heightOfList() - getTopPosi()) - scrollBarHeights;
		};

		var getLeftPosi = function () {
			return $('.drag_nav').position().left;
		};

		var getTopPosi = function () {
			return $('.drag_nav').position().top; // -81 for header adjustment
		};

		var reAdjust = function () {
			
			if (getTopPosi() < 0) {
				$('.scroller-up').show();
			} else {
				$('.item').animate({
					top: "-=" + getTopPosi() + "px"
				}, 'slow');
				$('.scroller-up').hide();
			}
		}
		
		var showNavs = function () {
			//alert($('.drag_nav-container').height()-81 +" < "+ heightOfList());
			if (($('.drag_nav-container').height()-30) < heightOfList()) {
				$('.scroller-down').show();
			} else {
				$('.scroller-down, .scroller-down').hide();
			}
			
		}

		//reAdjust();
		showNavs();

		$(window).on('resize', function (e) {
			//reAdjust();
			showNavs();
		});

		/*$('.scroller-up').click(function () {			
			$('.drag_nav').animate({
				top: "-=" + getTopPosi() + "px"
			}, 'slow', function () {

			});
			if (($('.drag_nav-container').height()) < heightOfList()) {
				$('.scroller-down').fadeIn('slow');
				$('.scroller-up').fadeOut('slow');
			} else {
				showNavs();
			}
		});

		$('.scroller-down').click(function () {
			$('.drag_nav').animate({
				top: "+=" + heightOfHidden() + "px"
			}, 'slow', function () {
				
			});
			if (($('.drag_nav-container').height()) < heightOfList()) {
				$('.scroller-up').fadeIn('slow');
				$('.scroller-down').fadeOut('slow');
			} else {
				showNavs();
			}
		});

		$(".drag_nav").on("dragstop", function (event, ui) {
			reAdjust();
			showNavs();
		});
		*/

	});



