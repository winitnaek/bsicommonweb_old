/*--------------------------------------------------------------------
$("#pageLoader").pageLoader({
timeToHide:1200, //Time in milliseconds for pageLoader disappear
zIndex:"999",//Default zIndex
spinner:"spinnerCF",//Options: 'spinner1', 'spinner2', 'spinner3', 'spinner4', 'spinner5', 'spinner6', 'spinner7'
bgColor:"#2ecc71", //Hex, RGB or RGBA colors
imagePath:"yourPath/customizedImage.gif" //If you want can you insert your custom image
});
*/

(function ($) {
 
    $.fn.pageLoader = function(options) {

        //Defaults
        var settings = $.extend({
            timeToHide:1200, // Default Time to hide pageLoader
            pos:'fixed',// Default Position
            top:'0px',  // Default Top value
            left:'0px', // Default Left value
            width:'100%', // Default width 
            height:'100%', // Default Height
            zIndex: '100999',  // Default zIndex 
            bgColor: '#c5e0e9', // Default background color
            spinner:'spinnerBSI', // Default Spinner
            imagePath:'' // Default Path custom image
        }, options);

        //Customized Spinners
        
		 var spinnerBSI = '<div style="padding: 15px; margin-top:20%; text-align:center;"><div id="logo_BSI_wh"></div><span class="fa fa-spinner fa-pulse fa-4x  fa-fw" style="color:#ffffff;"></span><div id="ToBeSure_wh"></div></div>';
		  var spinnerEF = '<div style="padding: 15px; margin-top:20%; text-align:center;"><div id="logo_EF_wh"></div><span class="fa fa-spinner fa-pulse fa-4x  fa-fw" style="color:#ffffff;"></span></div>';
		  var spinnerTF = '<div style="padding: 15px; margin-top:20%; text-align:center;"><div id="logo_TF_wh"></div><span class="fa fa-spinner fa-pulse fa-4x  fa-fw" style="color:#ffffff;"></span></div>';
		  var spinnerCF = '<div style="padding: 15px; margin-top:20%; text-align:center;"><div id="logo_CF_wh"></div><span class="fa fa-spinner fa-pulse fa-4x  fa-fw" style="color:#ffffff;"></span></div>'; 

		 
        //The target
        var el = $(this);

        //Init styles
        var initStyles = {
            'position':settings.pos,
            'width':settings.width,
            'height':settings.height,
            'top':settings.top,
            'left':settings.left
        };

        //Apply styles
        el.css(initStyles);

        //Each 
        el.each(function() {
            var a = settings.spinner;
            //console.log(a)
                switch (a) {
                    case 'spinnerBSI':
                            el.html(spinnerBSI);
                        break;
							case 'spinnerEF':
                            el.html(spinnerEF);
                        break;
							case 'spinnerTF':
                            el.html(spinnerTF);
                        break;
							case 'spinnerCF':
                            el.html(spinnerCF);
                        break;
                    default:
                        el.html(spinner01);
                    }

                //Add customized loader image

                if (settings.imagePath !='') {
                    el.html('<div class="fl"><img src="'+settings.imagePath+'"></div>');
                }
                centerLoader();
        });

        //Time to hide pageLoader
        setTimeout(function(){
           $(el).fadeOut();
        }, settings.timeToHide);

        //Return Styles 
        return this.css({
            'backgroundColor':settings.bgColor,
            'zIndex':settings.zIndex
        });

 
    }; // End Fake Loader
 

        //Center Spinner
        function centerLoader() {

            var winW = $(window).width();
            var winH = $(window).height();

            var spinnerW = $('.fl').outerWidth();
            var spinnerH = $('.fl').outerHeight();

            $('.fl').css({
                'position':'absolute',
                'left':(winW/2)-(spinnerW/2),
                'top':(winH/2)-(spinnerH/2)
            });

        }

        $(window).load(function(){
                centerLoader();
              $(window).resize(function(){
                centerLoader();
              });
        });


}(jQuery));


