var ALPHA = ALPHA || {};
ALPHA.lanch_modal = function( $elem ){
	var html_modal = '<div class="modal">';
			html_modal += '<div class="modal_container">';
				html_modal += $elem;
			html_modal += '</div>';
		html_modal += '</div>';
	$('body').append( html_modal );
}
$(document).ready(function(){
	/*==========DEMO===========*/
	var activeLi = 0;setInterval(function(){ changeLi();}, 3000);function changeLi(){$(".underConstruction ul li").removeClass('active');activeLi++;if ( activeLi == 3) {activeLi = 0;}$(".underConstruction ul li").eq(activeLi).addClass('active');}
	/*========== END DEMO ===========*/
	/*==========Variables===========*/
	var wHeight = $( window ).height();
	var wWidth = $( window ).width();
	var activeLiDemo = 0;
	var activeLiNosotros = 0;
	var activeLiContacto = 0;
	var animationNosotros, animationContacto, animationServicios, animationClientes;
	var item_width = $('.serviciosSection li').outerWidth(); 
	var left_value = item_width * (-1); 
	var item_height = $('.clientesSection li').outerHeight(); 
	var top_value = item_height * (-1); 
	var top_indent = parseInt($('.clientesSection ul').css('top')) - item_height;
	var left_indent = parseInt($('.serviciosSection ul').css('left')) - item_width;
	$('.serviciosSection li:first').before($('.serviciosSection li:last'));
	$('.clientesSection li:first').before($('.clientesSection li:last'));
	/*==========End Variables===========*/
	/*==========Resize===========*/
	$( window ).resize(function(){
		resizeFunctions();
	});

	function resizeFunctions(){
		wHeight = $( window ).height();
		wWidth = $( window ).width();
		$('section').height( (wHeight/2)+'px' );
		liHeight = $('section').height();
		liWidth = $('section').width();
		$('section ul li').height( liHeight+'px' );
		$('section ul li').width( liWidth+'px' );

		item_width = $('.serviciosSection').outerWidth(); 
		left_value = item_width * (-1); 
		item_height = $('.clientesSection').outerHeight(); 
		top_value = item_height * (-1); 
		top_indent = parseInt($('.clientesSection ul').css('top')) - item_height;
		left_indent = parseInt($('.serviciosSection ul').css('left')) - item_width;

		$('.serviciosSection ul').css({'left' : left_value});
		$('.clientesSection ul').css({'top' : top_value});
	}
	resizeFunctions();
	/*==========End Resize===========*/
	/*==========Click Logo===========*/
	$('.logoImage').click(function($evt){
		$evt.preventDefault();
		var add_html = '<img src="images/gif_demo.gif" />'
		ALPHA.lanch_modal( add_html );
		setTimeout(
			function(){ 
				$('.modal').remove(); 
			}, 1800
		);
	});
	/*==========End Click Logo===========*/
	/*==========Hover Animations===========*/
	$('.nosotrosSection').mouseenter(function() {
		animationNosotros = setInterval(function(){ changeLiNosotros(); }, 1500);
	});
	$('.contactoSection').mouseenter(function() {
		animationContacto = setInterval(function(){ changeLiContacto(); }, 1500);
	});
	$('.serviciosSection').mouseenter(function() {
		animationServicios = setInterval(function(){ changeLiServicios(); }, 1500);
	});
	$('.clientesSection').mouseenter(function() {
		animationClientes = setInterval(function(){ changeLiClientes(); }, 1500);
	});

	$('.nosotrosSection').mouseleave(function() {
		clearTimeout(animationNosotros);
	});
	$('.contactoSection').mouseleave(function() {
		clearTimeout(animationContacto);
	});
	$('.serviciosSection').mouseleave(function() {
		clearTimeout(animationServicios);
	});
	$('.clientesSection').mouseleave(function() {
		clearTimeout(animationClientes);
	});
	
	function changeLiNosotros(){
		$(".nosotrosSection ul li").removeClass('active');
		activeLiNosotros++;
		if ( activeLiNosotros == 4) {
			activeLiNosotros = 0;
		}
		$(".nosotrosSection ul li").eq(activeLiNosotros).addClass('active');
	}
	function changeLiContacto(){
		$(".contactoSection ul li").removeClass('active');
		activeLiContacto++;
		if ( activeLiContacto == 4) {
			activeLiContacto = 0;
		}
		$(".contactoSection ul li").eq(activeLiContacto).addClass('active');
	}
	function changeLiServicios(){
		left_indent = parseInt($('.serviciosSection ul').css('left')) - item_width;
		$('.serviciosSection ul:not(:animated)').animate({'left' : left_indent}, 500, function () {
			$('.serviciosSection li:last').after($('.serviciosSection li:first'));                 	
			$('.serviciosSection ul').css({'left' : left_value});
		});
	}
	function changeLiClientes(){
		top_indent = parseInt($('.clientesSection ul').css('top')) - item_height;
		$('.clientesSection ul:not(:animated)').animate({'top' : top_indent}, 500, function () {
			$('.clientesSection li:last').after($('.clientesSection li:first'));
			$('.clientesSection ul').css({'top' : top_value});
		});
	}
	/*========== End Hover Animations ===========*/

	$('.nosotrosSection').click(function($evt){
		$evt.preventDefault();
		$(this).addClass('openSection');
		$('.contactoSection , .serviciosSection, .clientesSection').animate(
			{ 'width' : '0', 'height' : '0', 'opacity' : '0' }, 
			250, function(){
				$('.nosotrosSection').animate(
					{ 'width' : '100%', 'height' : '100%' }, 
					250
				);
			}
		);
	});
	$('.contactoSection').click(function($evt){
		$evt.preventDefault();
		$(this).addClass('openSection');
		$('.nosotrosSection , .serviciosSection, .clientesSection').animate(
			{ 'width' : '0', 'height' : '0', 'opacity' : '0'  }, 
			250, function(){
				$('.contactoSection').animate(
					{ 'width' : '100%', 'height' : '100%' }, 
					250
				);
			}
		);
	});
	$('.serviciosSection').click(function($evt){
		$evt.preventDefault();
		$(this).addClass('openSection');
		$('.contactoSection , .nosotrosSection, .clientesSection').animate(
			{ 'width' : '0', 'height' : '0', 'opacity' : '0'  }, 
			250, function(){
				$('.serviciosSection').animate(
					{ 'width' : '100%', 'height' : '100%' }, 
					250
				);
			}
		);
	});
	$('.clientesSection').click(function($evt){
		$evt.preventDefault();
		$(this).addClass('openSection');
		$('.contactoSection , .serviciosSection, .nosotrosSection').animate(
			{ 'width' : '0', 'height' : '0', 'opacity' : '0'  }, 
			250, function(){
				$('.clientesSection').animate(
					{ 'width' : '100%', 'height' : '100%' }, 
					250
				);
			}
		);
	});
});