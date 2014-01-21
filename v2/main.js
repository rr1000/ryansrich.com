// var fadeStart=0
// 	,fadeUntil=300
// 	,fading = $('.fading');

// // Only apply fading when screen size is greater than 480px
// $(window).resize(function() {
// 	if ($(this).width() > 480) {
// 		$(window).bind('scroll', function(){
// 			var offset = $(document).scrollTop(),opacity=0;
// 			if( offset<=fadeStart ){
// 				opacity=1;
// 			}else if( offset<=fadeUntil ){
// 				opacity=1-offset/fadeUntil;
// 			}
// 			fading.css('opacity',opacity);
// 		});
// 	}
// });