$(document).ready(function(){

	/* Define window */
	var windowWidth = $(window).width();

	/* Reload window to avoid scrolling CSS issues */
	$(window).resize(function() {
		if(windowWidth != $(window).width()){
			location.reload();
			return;
		}
	});

	/* Grab animated elements */
	$nav = $('#nav-main');
	$link = $("#nav-link");
	$inq = $("#inq-link");
	$status = $(".reading");

	/* Define the scroll state */
	var scrollState = 'top';
	$(window).scroll(function(){
		/* Get the position of the scroll (top) */
		var scrollPos = $(window).scrollTop();
		if( ( scrollPos != 0 ) && ( scrollState === 'top' ) ) {

			/* Animate header */
			$nav.stop().animate({
				backgroundColor: "#2763cd",
				opacity: "0.5"
			}, 500);

			/* Animate blog link */
			$link.stop().animate({
				backgroundColor: "#2763cd",
				borderLeftColor: "#2763cd",
				opacity: "0.0"
			}, 500);

			/* Animate contact link */
			$inq.stop().animate({
				top: "10px",
				opacity: "0.5"
			}, 500);

			/* Hide status link */
			$status.stop().animate({
				right: "-410px",
				top: "110px",
				opacity: "0.5"
			}, 500);

			/* If the window size is less than 1101 animate differently */
			if ($(window).width() < 1101){
				$inq.stop().animate({
					top: "15px",
					right: "15px",
					opacity: "0.5"
				}, 500);

				$status.stop().animate({
					top: "158px",
					opacity: "1.0"
				}, 500);
			}

			/* If the window size is less than 626 animate differently */
			if ($(window).width() < 626){
				$inq.stop().animate({
					// top: "30px",
					// right: "15px",
					// opacity: "0.5"
				}, 500);
			}

			scrollState = 'scrolled';
		}

		/* Reset the position of the animate elements */
		else if( ( scrollPos === 0 ) && ( scrollState === 'scrolled' ) ) {

			/* Reset the state of the header once the top is reached */
			$nav.stop().animate({
				backgroundColor: "#5693ff",
				opacity: "1.0"
			}, 500);

			/* Reset the state of the blog link once the top is reached */
			$link.stop().animate({
				backgroundColor: "#80acf9",
				borderLeftColor: "#fff",
				opacity: "1.0"
			}, 500);

			/* Reset the state of the contact link once the top is reached */
			$inq.stop().animate({
				top: "111px",
				opacity: "1.0"
			}, 500);

			/* Reset the state of the status link */
			$status.stop().animate({
				right: "15px",
				top: "210px",
				opacity: "1.0"
			}, 500);

			/* If the window size is less than 1101 animate differently */
			if ($(window).width() < 1101){
				$inq.stop().animate({
					top: "15px",
					right: "369px",
					opacity: "1.0"
				}, 500);
			}

			/* If the window size is less than 626 animate differently */
			if ($(window).width() < 626){
				$inq.stop().animate({
					top: "109px",
					opacity: "1.0"
				}, 500);

				$status.stop().animate({
					top: "198px",
					opacity: "1.0"
				}, 500);
			}

			scrollState = 'top';
		}
	});

});