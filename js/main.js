$(document).ready(function(){


	$("#portfolio-contant-active").mixItUp();


	$("#testimonial-slider").owlCarousel({
	    paginationSpeed : 500,      
	    singleItem:true,
	    autoPlay: 3000,
	});




	$("#clients-logo").owlCarousel({
		autoPlay: 3000,
		items : 5,
		itemsDesktop : [1199,5],
		itemsDesktopSmall : [979,5],
	});

	$("#works-logo").owlCarousel({
		autoPlay: 3000,
		items : 5,
		itemsDesktop : [1199,5],
		itemsDesktopSmall : [979,5],
	});


	// google map
		var map;
		function initMap() {
		  map = new google.maps.Map(document.getElementById('map'), {
		    center: {lat: -34.397, lng: 150.644},
		    zoom: 8
		  });
		}


	// Counter

	$('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    /**
	 *
     */

    // $(window).on('resize', function() {
    //
    //     if ($(window).width() <= 768) {
            document.querySelector("#nav-toggle")
                .addEventListener("click", function () {
                    this.classList.toggle("active");
                    $(".full-screen-mobile-menu").toggleClass("show");
                    $("body, html").toggleClass("no-scroll");
                });
    //    }
    //     else {
    //     	$("#nav-toggle").removeClass("active");
    //         $(".full-screen-mobile-menu").removeClass("show");
    //         $("body").removeClass("no-scroll");
    //     }
    //
    // });

});




