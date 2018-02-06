$(document).ready(function(){
    function blink_text() {
        $('.blink').fadeOut(500);
        $('.blink').fadeIn(500);
    }
    setInterval(blink_text, 2000);

    $("#widgetView").hide();
    $("#home").hide();

    $("#dashboard").click(function(){
        $("#iconView").hide();
        $("#widgetView").fadeIn();
        $("#home").show();
        $("#dashboard").hide();

    });

    $("#home").click(function(){
        $("#dashboard").show();
        $("#home").hide();
        $("#widgetView").hide();
        $("#iconView").fadeIn();
    });

    $("#sidebar-serach").keyup(function(e){
        
         if(e.keyCode <=90 && e.keyCode >=48)//enter
        {                    
            var txt = $('#sidebar-serach').val();
            if(txt && txt.length > 2){                       
                $('.nav-item-link').each(function(){                            
                    if($(this).html().toUpperCase().indexOf(txt.toUpperCase()) != -1){
                        $(this).show();
                    }
                    else
                    {
                        $(this).hide();
                    }
                });
            }                            
                
        }
        else {                  
            var txt = $('#sidebar-serach').val();
            if(txt || txt.length < 3){
                $('.nav-item-link').each(function(){                           
                     $(this).show();                            
                });                    
            }
        }
    });

    
    
});