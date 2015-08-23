$(document).ready(function(){
	$(function(){
		$('.rsr_port-images a').fluidbox();
	});
	$(window).scroll(function(){
		var scroll = $(window).scrollTop();
		// var portLettersFixed = $('#portLetter').offset().top;
		// var portLettersStatic = $('.rsr_header-light').position().top+$('.rsr_header-light').outerHeight(true) +20;
		// console.log(portLettersFixed);
		// console.log(portLettersStatic);
		// if (scroll >= portLettersFixed){
		// 	$("#portLetter").addClass("rsr_make-sticky");
		// 	$(".rsr_port-images").addClass("rsr_bump-work");
		// 	$(".rsr_small-grid .col-9-12").addClass("rsr_bump-para");
		// }
		// if (scroll <= portLettersStatic){
		// 	$("#portLetter").removeClass("rsr_make-sticky");
		// 	$(".rsr_port-images").removeClass("rsr_bump-work");
		// 	$(".rsr_small-grid .col-9-12").removeClass("rsr_bump-para");
		// }
		var bigLettersFixed = $('.rsr_hugework-letter').offset().top;
		var bigLettersStatic = $('.rsr_header-light').position().top+$('.rsr_header-light').outerHeight(true)
		if (scroll >= bigLettersFixed){
			$(".rsr_hugework-letter").addClass("rsr_huge-sticky");
			$(".rsr_small-grid").addClass("rsr_bumpthis-shit");
		}
		if (scroll <= bigLettersStatic){
			$(".rsr_hugework-letter").removeClass("rsr_huge-sticky");
			$(".rsr_small-grid").removeClass("rsr_bumpthis-shit");
		}
	});
});