$(document).ready(function(){

    $(".menu-icon").click(function(){
        $("nav div").css("display", "block");
        $(".menu-icon").hide();
        $(".menu-close-icon").show();
    });

    $(".menu-close-icon").click(function(){
        $("nav div").hide();
        $(".menu-close-icon").hide();
        $(".menu-icon").show();
    });
   
    $('nav div a').on('click', function(){

        $("nav div").hide();
        $(".menu-close-icon").hide();
        $(".menu-icon").show();

        var elem = $(this).attr("href");

        $('html, body').animate({
            scrollTop: $(elem).offset().top - 70
        }, 'slow');
            
    });

 });
