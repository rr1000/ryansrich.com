// tbd
$('document').ready(function(){
    // Fade in/out availability badge
    $(window).scroll(function(){
        if ($(this).scrollTop()>0){
            $('.badge').fadeOut();
        }else{
            $('.badge').fadeIn();
        }
    });
});
