jQuery(document).ready(function($) {


	var mastheadheight = $('.ci-header').outerHeight();
	//console.log(mastheadheight);
	$(".ci-banner,.ci-main-section").css("margin-top" , mastheadheight);

	$(window).scroll(function(){
	    if ($(window).scrollTop() >= 10) {
	        $('.ci-header').addClass('ci-fixed-header');
	    }
	    else {
	        $('.ci-header').removeClass('ci-fixed-header');
	    }
	}).scroll();


});