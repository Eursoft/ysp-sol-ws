var $ = jQuery.noConflict();
jQuery(function($) {
	"use strict";
	// preloader
	$(window).load(function() {
		$("#preloader").delay(500).fadeOut("slow");
		setTimeout(function(){$("#header-content").addClass("animated fadeInDown")},1000);
    })
});	

// legg til klassen active til knappa som blir trykt
(function($) {
    "use strict";
    $(document).ready(function() {
        $('a.btn').click(function() {
            $('a.btn').removeClass('active');
            $(this).addClass('active');
        });
    });
})(jQuery);

// bootstrap carousel
(function($) {
    "use strict";
    $('.carousel').carousel({
        interval: 5000,
        pause: "hover",
    });
})(jQuery);


//scroll til topp
(function($) {
    "use strict";
    $(document).ready(function() {
        $(".scrollopp").hide();
        $(window).scroll(function() {
            if ($(this).scrollTop() > 400) {
                $('.scrollup').fadeIn();
            } else {
                $('.scrollup').fadeOut();
            }
        });
    });

})(jQuery);
// Action
(function($) {
    "use strict";
    $("a.scrolltiltopp[href^='#']").on('click', function(e) {

        // prevent default anchor click behavior
        e.preventDefault();

        // store hash
        var hash = this.hash;

        // animate
        $('html, body').stop().animate({
            scrollTop: 0
        }, 1000, 'easeOutExpo');

    });
})(jQuery);

(function($) {
    "use strict";
    $(document).ready(function() {
        $(".nav-fadein").hide();
        $(window).on('scroll load', function() {
            if ($(this).scrollTop() > 400) {
                $('.nav-fadein').fadeIn();
            } else {
                $('.nav-fadein').fadeOut();
            }
        });
    });
})(jQuery);

(function($) {
    "use strict";
    $("a.scrollto[href^='#']").on('click', function(e) {

        // prevent default anchor click behavior
        e.preventDefault();

        // store hash
        var hash = this.hash;

        // animate
        $('html, body').stop().animate({
            scrollTop: $(hash).offset().top - 56
        }, 1000, 'easeOutExpo');

    });
})(jQuery);

// parallax
(function($) {
    "use strict";
    $('.parallax').stellar();
    $.stellar({
        horizontalScrolling: false,
        verticalOffset: 0
    });
})(jQuery);

// lukk meny på mobil

(function($) {
    "use strict";
    $(document).ready(function() {
        $('.nav li a').click(function() {
            $('.navbar-collapse').removeClass('in');
        });
        $('.nav li.dropdown a').click(function() {
            $('.navbar-collapse').addClass('in');
        });
    });
})(jQuery);

$(function(){
		$("#typed").typed({
			strings: ["Typed.js is a jQuery plugin.", "It types out sentences.", "And then deletes them.", "Try it out!"],
			typeSpeed: 30,
			backDelay: 500,
			loop: false,
			// defaults to false for infinite loop
			loopCount: false,
		});

	});
   // ========== END HOMEPAGE TYPED EFFECT ========== //
  // ========== 16. CONTACT FORM ========== //   
	var theForm = document.getElementById( 'theForm' );
	new stepsForm( theForm, {
		onSubmit : function( form ) {
		classie.addClass( theForm.querySelector( '.simform-inner' ), 'hide' );
		$.ajax({
           type: "POST",
           url: "contact-form.php",
           data: $(this).parent().serialize(), // changed
        });
		var messageEl = theForm.querySelector( '.final-message' );
		messageEl.innerHTML = 'Meldingen din har blitt sendt. (Egentlig ikke, denne formen gjør ingenting, he-he.)';
		classie.addClass( messageEl, 'show' );
		}
	});

