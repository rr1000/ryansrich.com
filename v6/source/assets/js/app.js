$(document).ready(function(){
	//YC SUS Blog Post
	$("div.tooltip-body").animate({
		"opacity" : "0"
	}, 0);
	$("header.yc").mouseenter(function(){
		$(this).find("div.tooltip-body").show(0);
		$(this).find("div.tooltip-body").animate({
			"opacity" : "1"
		}, 250);
	});
	$("header.yc").mouseleave(function(){
		$(this).find("div.tooltip-body").animate({
			"opacity" : "0"
		}, 250);
		$(this).find("div.tooltip-body").hide(0);
	});
});