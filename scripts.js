$(document).ready(function(){
	$('a[href^="#"]').click(function(event) {
		var target = $($(this).attr("href")).offset().top - 40;
		$('html, body').animate({scrollTop:target}, 400);
		event.preventDefault();
	});
});