$(function() {

	$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");	
		$(".main-mnu").toggleClass("resp");
		return false;
	});

	$(".down").click(function () {
		$(".top-social").slideToggle();
	});

	$(".search").click(function () {
		$(".search-form").slideToggle();
	});


	// to top

	$(window).scroll(function() {
		if ($(this).scrollTop() > 800) {
			$(".top").addClass("active");
		} else {
			$(".top").removeClass("active");
		}
	});

	$(".top").click(function() {
		$("html, body").animate({ scrollTop: 0 }, 800 );
		return false;
	});


	// fixed position in scrolling div

	var s = $(".box-category");
	var pos = s.position();                    
	$(window).scroll(function() {
		var windowpos = $(window).scrollTop();
		// s.html("Distance from top:" + pos.top + "<br />Scroll position: " + windowpos);
		if (windowpos >= 270) {
			s.addClass("stick");
			if (windowpos >= 3680) {
				s.removeClass("stick");
			}
		} else {
			s.removeClass("stick"); 
		}
	});


	$(".owl-carousel").owlCarousel({
		loop: true,
		autoplay:true,
		autoplayTimeout:4000,
		autoplayHoverPause:true,
		responsive:{
			0:{
				items:1
			},
			700:{
				items:2
			},
			1000:{
				items:3
			}
		}
	});


	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});
