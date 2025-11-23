! function($) {
	$(document).ready(function() {
		// Scroll lors de l'arrivée sur la page si ancre dans l'url
		(function() {
			anchor = document.location.hash;
			if (anchor) {
				//$.scrollTo(($(anchor).offset().top - $('header').height()), 800);
				$.scrollTo(anchor, 800);
			}
		}) ();
	
		// Scroll au clic sur les menus
		(function() {
			$('a').click(function(e) {
				var anchor = $(this).attr('href');
				var index = anchor.indexOf('#');
				if (index > -1) {
					var url = anchor.substring(0, index);
					if (url == document.location.pathname) {
					    e.preventDefault();
						anchor = anchor.substring(index);
						//$.scrollTo(anchor, 800);
						$.scrollTo(($(anchor).offset().top - $('header').height()), 800);
					}
				}
			});
		}) ();
		
		// effets d'animation lors du scroll
		$(window).scroll(function() {
			effet();
		});
	});
	
	$(window).on("load", function() {
		// Effets d'animation lors du chargement de la page
		effet();

		// Menu fixe en haut
		/*(function() {
			if (document.body.clientWidth > 767) {
				// position verticale du menu top :
				hauteur = $('#menu_top').offset().top;
				//alert(hauteur);
				$(document).scroll(function() {
					if ($(window).scrollTop() > hauteur) {
						if ( $('#menu_top_fixe').hasClass('element-cache-scroll')) {
							$('#menu_top').addClass('element-cache-scroll');
							$('#menu_top_fixe').removeClass('element-cache-scroll');
						}
					} else {
						if ( $('#menu_top').hasClass('element-cache-scroll')) {
							$('#menu_top_fixe').addClass('element-cache-scroll');
							$('#menu_top').removeClass('element-cache-scroll');
						}
					}
				});
			}
		})();*/
	});
	
	function effet() {
		$('.animation').each(function() {
			if (isScrolledIntoView(this)) {
				$(this).addClass('animated');
				$(this).removeClass('animation');
			}
		});
	}

	jQuery(document).ready(function(){
		jQuery("#lyon").click(function(){
        jQuery("#img-lieux").removeClass("lyon");
        jQuery("#img-lieux").removeClass("foie");
        jQuery("#img-lieux").removeClass("medipole");
        jQuery("#img-lieux").removeClass("trenel");
        jQuery("#img-lieux").addClass("lyon");
		});
		
		jQuery("#foie").click(function(){
        jQuery("#img-lieux").removeClass("lyon");
        jQuery("#img-lieux").removeClass("foie");
        jQuery("#img-lieux").removeClass("medipole");
        jQuery("#img-lieux").removeClass("trenel");
        jQuery("#img-lieux").addClass("foie");
		});
		
		jQuery("#medipole").click(function(){
        jQuery("#img-lieux").removeClass("lyon");
        jQuery("#img-lieux").removeClass("foie");
        jQuery("#img-lieux").removeClass("medipole");
        jQuery("#img-lieux").removeClass("trenel");
        jQuery("#img-lieux").addClass("medipole");
		});
		
		jQuery("#trenel").click(function(){
        jQuery("#img-lieux").removeClass("lyon");
        jQuery("#img-lieux").removeClass("foie");
        jQuery("#img-lieux").removeClass("medipole");
        jQuery("#img-lieux").removeClass("trenel");
        jQuery("#img-lieux").addClass("trenel");
		});
	});


	function isScrolledIntoView(elem) {
		var docViewTop = $(window).scrollTop();
		var docViewBottom = docViewTop + $(window).height();
		var elemTop = $(elem).offset().top;
		var elemBottom = elemTop + $(elem).height();
		return !((elemTop > docViewBottom) || (elemBottom < docViewTop));
	}
}(jQuery);

