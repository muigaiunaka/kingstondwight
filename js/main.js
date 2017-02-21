$(document).ready(function(){

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




