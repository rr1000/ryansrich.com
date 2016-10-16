$('document').ready(function(){
    // Mobile menu
    var nav = $('.main-header nav');
    var navIcon = $('.main-header .icon-nav');
    navIcon.click(function(){ nav.fadeToggle(350); });
    // Smooth scroll
    $(function(){
        $('a[href*="#"]:not([href="#"])').click(function(){
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname){
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length){
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });
    document.getElementById('stratum').addEventListener('loadedmetadata', function(){
        this.currentTime = 50;
    }, false);
    // Video controls
    $('video').click(function(){
        this.paused ? this.play() : this.pause();
    });
    // Video autoplay
     var media = $('video').not("[autoplay='autoplay']");
     var tolerancePixel = 40;
     function checkMedia(){
         var scrollTop = $(window).scrollTop() + tolerancePixel;
         var scrollBottom = $(window).scrollTop() + $(window).height() - tolerancePixel;
         media.each(function(index, el) {
             var yTopMedia = $(this).offset().top;
             var yBottomMedia = $(this).height() + yTopMedia;
             if(scrollTop < yBottomMedia && scrollBottom > yTopMedia){
                 $(this).get(0).play();
             }else{
                 $(this).get(0).pause();
             }
         });
     }
     $(document).on('scroll', checkMedia);
});
