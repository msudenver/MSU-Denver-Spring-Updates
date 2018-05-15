$(document).ready(function() {
	var mainNavId = $("#main-news-nav");
	var navbarId = $("#newsroom-nav.newsroom-nav-container");
	var headerElement = $("#nav-h3");
	var navRight = $("#nav-right");
	var navLeft = $("#nav-left");
	var brandLogo = $("#newsroom-logo");
	var newsHero = $("#newsroom-hero");
	$(window).scroll(function() {
		if( $(window).scrollTop() >= 35) {
			mainNavId.addClass('navbar-fixed-top');
			navbarId.css("height", "150px");
			headerElement.css("display", "none");
			navRight.css("margin-top", "30px");
			navLeft.css("padding-top", "50px");
			brandLogo.css({"max-width" :"120px", "padding-top" :"0px"});
			newsHero.css("padding-top", "158px");
		} else {
			mainNavId.removeClass('navbar-fixed-top');
			navbarId.removeAttr("style");
			headerElement.removeAttr("style");
			navRight.removeAttr("style");
			navLeft.removeAttr("style");
			brandLogo.removeAttr("style");
			newsHero.removeAttr("style");
		}
	});
});

// add this to id after scroll .navbar-fixed-top