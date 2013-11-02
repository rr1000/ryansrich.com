$(document).ready(function(){

	$nav = $('#nav-main');
	$link = $("#nav-link");
	$inq = $("#inq-link");

	var scrollState = 'top';
	$(window).scroll(function(){
		var scrollPos = $(window).scrollTop();
		if( ( scrollPos != 0 ) && ( scrollState === 'top' ) ) {
			$nav.stop().animate({
				backgroundColor: "#2763cd",
				opacity: "0.5"
			}, 500);
			$link.stop().animate({
				backgroundColor: "#2763cd",
				borderLeftColor: "#2763cd",
				opacity: "0.0"
			}, 500);
			$inq.stop().animate({
				top: "15px",
				opacity: "0.5"
			}, 500);
			//
			if ($(window).width() < 1101){
				$inq.stop().animate({
					top: "15px",
					right: "15px",
					opacity: "1.0"
				}, 500);
			}
			//
			scrollState = 'scrolled';
		}
		else if( ( scrollPos === 0 ) && ( scrollState === 'scrolled' ) ) {
			$nav.stop().animate({
				backgroundColor: "#5693ff",
				opacity: "1.0"
			}, 500);
			$link.stop().animate({
				backgroundColor: "#80acf9",
				borderLeftColor: "#fff",
				opacity: "1.0"
			}, 500);
			$inq.stop().animate({
				top: "111px",
				opacity: "1.0"
			}, 500);
			//
			if ($(window).width() < 1101){
				$inq.stop().animate({
					top: "15px",
					right: "369px",
					opacity: "1.0"
				}, 500);
			}
			//
			scrollState = 'top';
		}
	});

});