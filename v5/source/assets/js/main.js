$(document).ready(function(){
	console.log("All set!");
	$('.affix-menu').waypoint(function(direction){
		console.log("Stucking");
		if ($(window).width() > 1000){
			$(this).toggleClass('stuck');
		}else{
			return false;
		}
	},{offset: 20});
});