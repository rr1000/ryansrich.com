// tbd
$('document').ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop()>0){
            $('.badge').fadeOut();
        }else{
            $('.badge').fadeIn();
        }
    });
});
