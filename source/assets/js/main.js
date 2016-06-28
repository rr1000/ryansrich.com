$('document').ready(function(){
    // Mobile menu
    var nav = $('.main-header nav');
    var navIcon = $('.main-header .icon-nav');
    navIcon.click(function(){ nav.fadeToggle(350); });
});
