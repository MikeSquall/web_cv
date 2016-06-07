// scroll menu
$('a[href^="#"]').click(function(){  
    var id = $(this).attr("href");
    var offset = $(id).offset().top 
    $('html, body').animate({scrollTop: offset}, 'slow'); 
    return false;  
}); 
//

// calcul âge
$("#ageCalc").text(function() {
    var today_date = new Date();
    var today_year = today_date.getFullYear();
    var today_month = today_date.getMonth();
    var today_day = today_date.getDate();
    var age = today_year - 1988;

    if ( today_month < 9)
    {
        age--;
    }

    return age;
});
//

// animation hover skill
$(".progress-bar").hover(function(){
    if(!$(this).hasClass("active")){
        $(this).addClass("progress-bar-info active");    
    } else {
        $(this).removeClass("progress-bar-info active");
    }
});
//

// icon contact hover
$(".social-link").hover(function(){
    $(this).children().toggleClass("hovered");
});
//

// animation hover vignette projet
/*
$("figcaption").each(function(){
    $(this).hide();
});
$(".vignette").hover(function(){
    $(this>figcaption).toggle(500);
});*/

//








