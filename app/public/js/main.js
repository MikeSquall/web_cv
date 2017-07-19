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

// google analytics 

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-83336720-1', 'auto');
ga('send', 'pageview');

//