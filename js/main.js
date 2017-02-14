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

        /** Moves links for mobile navigation */
            function moveLinks(tar, list) {
            $(tar).append(
                $(list).each(function(i) {
                    $(this).text();
                })
            );
        }

    document.querySelector( "#nav-toggle" )
        .addEventListener( "click", function() {
            this.classList.toggle( "active" );

            // if (this.classList.contains("active")) {
            //     $("nav ul li").show();
            //     $("nav").addClass("fullscreen-menu");
            //     moveLinks('.fullscreen-menu-links', 'nav ul li');
            //
            // } else {
            //     $("nav").removeClass("fullscreen-menu");
            //     moveLinks('.nav-reg', 'nav ol li');
            //     //$("nav ul li").hide();
            // }

        });


});




