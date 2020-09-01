$(document).ready(function(){
	$(".loader, .loading icon").fadeOut("slow");
	$('.carousel').carousel();
	$('.carousel').on('slid.bs.carousel', setStyling);
	function setStyling() {
  		if ($('.carousel-item.c1.active').length > 0) {
    		$("#tech-skills").removeClass("card-disable");
    		$("#tech-skills").addClass("card-active");
    		$("#rel-skills").removeClass("card-active");
    		$("#rel-skills").addClass("card-disable");
  		};
  		if ($('.carousel-item.c2.active').length > 0) {
    		$("#rel-skills").removeClass("card-disable");
    		$("#rel-skills").addClass("card-active");
    		$("#tech-skills").removeClass("card-active");
    		$("#tech-skills").addClass("card-disable");
  		};
	}
	setStyling();
  	$("#tech-skills").click(function(){
    	$("#tech-skills").removeClass("card-disable");
    	$("#tech-skills").addClass("card-active");
    	$("#rel-skills").removeClass("card-active");
    	$("#rel-skills").addClass("card-disable");
  	})
	$("#rel-skills").click(function(){
		$("#rel-skills").removeClass("card-disable");
    	$("#rel-skills").addClass("card-active");
    	$("#tech-skills").removeClass("card-active");
    	$("#tech-skills").addClass("card-disable");
  	})
  	$("#slide1").click(function(){
    	$("#panel1").slideToggle();
    	$("#panel2").slideUp();
    	$("#panel3").slideUp();
    	$("#panel4").slideUp();
  	})
  	$("#slide2").click(function(){
    	$("#panel2").slideToggle();
    	$("#panel1").slideUp();
    	$("#panel3").slideUp();
    	$("#panel4").slideUp();
  	})
  	$("#slide3").click(function(){
    	$("#panel3").slideToggle();
    	$("#panel1").slideUp();
    	$("#panel2").slideUp();
    	$("#panel4").slideUp();
  	})
  	$("#slide4").click(function(){
    	$("#panel4").slideToggle();
    	$("#panel1").slideUp();
    	$("#panel3").slideUp();
    	$("#panel2").slideUp();
  	})
  	$("#about-slider").click(function(){
    	$("#about-detailed").slideToggle();
    })
    $("#show-less").click(function(){
    	$("#about-detailed").slideUp();
    })
    $(".dark-theme").click(function(){
    	$("body").addClass("theme-change");
    	$(".navbar").addClass("navbar-theme-change");
    	$(".navbar").addClass("navbar-dark");
    	$(".bar").addClass("line-white");
    	$(".inp").addClass("input-text");
    	$(".light-theme").removeClass("light-theme-hide");
    	$(".dark-theme").addClass("dark-theme-hide");
    })
    $("#nav-icon").click(function(){
    	$("#collapsibleNavbar").slideToggle();
    })
    $('.nav-link').click(function() {
    	var sectionTo = $(this).attr('href');
    	$('html, body').animate({
      		scrollTop: $(sectionTo).offset().top
    	}, 600);
	});
	 $("#nav-icon").click(function(){
	 	$("#bar").toggleClass("transition");
    	$("#l1").toggleClass("bar1");
    	$("#l2").toggleClass("bar2");
    	$("#l3").toggleClass("bar3");
    })
	$('.dark-theme').click(function(){
    localStorage.setItem("contrast", "theme-change");
	});
	$("body").toggleClass(localStorage.getItem("contrast"));
	$('.dark-theme').click(function(){
    localStorage.setItem("contrast1", "navbar-theme-change");
	});
	$(".navbar").toggleClass(localStorage.getItem("contrast1"));
	$('.dark-theme').click(function(){
    localStorage.setItem("contrast2", "navbar-dark");
	});
	$(".navbar").toggleClass(localStorage.getItem("contrast2"));
	$('.dark-theme').click(function(){
    localStorage.setItem("contrast3", "line-white");
	});
	$(".bar").toggleClass(localStorage.getItem("contrast3"));
	$('.dark-theme').click(function(){
    localStorage.setItem("contrast4", "input-text");
	});
	$(".inp").toggleClass(localStorage.getItem("contrast4"));
	$('.dark-theme').click(function(){
    localStorage.setItem("contrast5", "dark-theme-hide");
	});
	$(".dark-theme").addClass(localStorage.getItem("contrast5"));
	$('.dark-theme').click(function(){
    localStorage.setItem("contrast6", "light-theme-hide");
	});
	$(".light-theme").removeClass(localStorage.getItem("contrast6"));
	
	$(".light-theme").click(function(){
    	$("body").removeClass("theme-change");
    	$(".navbar").removeClass("navbar-theme-change");
    	$(".navbar").removeClass("navbar-dark");
    	$(".bar").removeClass("line-white");	
    	$(".dark-theme").removeClass("dark-theme-hide");
    	$(".light-theme").addClass("light-theme-hide");
    	$(".inp").removeClass("input-text");
    	localStorage.clear();
    })
})