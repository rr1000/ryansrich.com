$('document').ready(function(){
    // Mobile menu
    var nav = $('.main-header nav');
    var navIcon = $('.main-header .menu');
    navIcon.click(function(){
        nav.fadeToggle(350);
        $(this).toggleClass('w');
    });
});
