// Navbar Active Page
$(document).ready(function() {
	$('nav a[href="' + location.pathname + '"]').parent('li').addClass('active');
});

// Navbar Scrollspy
$(document).ready(navbar);
$(window).scroll(navbar);

function navbar() {
	var navheight = $('nav').height();
	
	if ($(document).scrollTop() > navheight / 2) {
		$('nav').addClass('scroll');
	} else {
		$('nav').removeClass('scroll');
	}
}

// Work Carousel
$(document).ready(function(){
	$('#workCarousel').carousel({
		interval: 6000
	});

	// Thumbnails - Click
	$('.carousel-indicators-thumbs li').click(function(){
		$('.carousel-indicators-thumbs li').removeClass('active');
		$(this).addClass('active');
		
		// scrollTop to show carousel
		var offheight = $(".page-content").offset().top
		var navheight = $("nav").height()
		var offset = offheight - navheight
		$('html, body').animate({
	        scrollTop: offset + 'px'
	    }, 0);
	});
	
	// Thumbnails - Auto Slide
	$('.carousel').on('slid.bs.carousel', function () {
		var carouselData = $(this).data('bs.carousel');
		var currentIndex = carouselData.getItemIndex(this.$active = $(this).find('.item.active'));
		$('.carousel-indicators-thumbs li').removeClass('active');
		$('.carousel-indicators-thumbs').find("[data-slide-to='" + currentIndex + "']").addClass('active');
	});
})