$(document).ready(function(){

	$nav = $('#nav-main');

	var scrollState = 'top';
	$(window).scroll(function(){
		var scrollPos = $(window).scrollTop();
		if( ( scrollPos != 0 ) && ( scrollState === 'top' ) ) {
			$nav.stop().animate({
				backgroundColor: "#2763cd",
				opacity: "0.5"
			}, 500);
			scrollState = 'scrolled';
		}
		else if( ( scrollPos === 0 ) && ( scrollState === 'scrolled' ) ) {
			$nav.stop().animate({
				backgroundColor: "#5693ff",
				opacity: "1.0"
			}, 500);
			scrollState = 'top';
		}
	});

	//Bitcoin expo
	$(".dark").click(function(e){
		e.preventDefault();
		e.stopPropagation();
		console.log("Bitcoin pay has been clicked");
		$(".bitcoin-expo").fadeToggle(250);
	});

	//Hide Bitcoin expo when clicking anywhere
	$(document).click(function(){
		$(".bitcoin-expo").fadeOut(250);
	});

});