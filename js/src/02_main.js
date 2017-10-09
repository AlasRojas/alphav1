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
	var activeLi = 0;

	setInterval(function(){ 
		changeLi();
	}, 3000);

	function changeLi(){
		$(".underConstruction ul li").removeClass('active');
		activeLi++;
		if ( activeLi == 3) {
			activeLi = 0;
		}
		$(".underConstruction ul li").eq(activeLi).addClass('active');
	}
	/*========== END DEMO ===========*/

	
	var wHeight = $( window ).height();
	var wWidth = $( window ).width();

	$( window ).resize(function(){
		wHeight = $( window ).height();
		wWidth = $( window ).width();
		resizeFunctions();
	});

	function resizeFunctions(){
		$('section').height( (wHeight/2)+'px' );
		$('section ul li').height( (wHeight/2)+'px' );
		$('section ul li').width( (wWidth/2)+'px' );
	}
	resizeFunctions();

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

	/*==========DEMO List===========*/
	var activeLiDemo = 0;


	var item_width = $('.serviciosSection li').outerWidth(); 
	var left_value = item_width * (-1); 
	$('.serviciosSection li:first').before($('.serviciosSection li:last'));
	$('.serviciosSection ul').css({'left' : left_value});




	var item_height = $('.clientesSection li').outerHeight(); 
	var top_value = item_height * (-1); 
	$('.clientesSection li:first').before($('.clientesSection li:last'));
	$('.clientesSection ul').css({'top' : top_value});
	
	/*$('.serviciosSection ul:not(:animated)').animate({'left' : left_indent}, 200, function () {
			$('.serviciosSection li:last').after($('.serviciosSection li:first'));                 	
			$('.serviciosSection ul').css({'left' : left_value});
		});*/

	setInterval(function(){ 
		changeLiDemo();
	}, 3000);

	function changeLiDemo(){
		$(".nosotrosSection ul li").removeClass('active');
		$(".contactoSection ul li").removeClass('active');
		activeLiDemo++;
		if ( activeLiDemo == 4) {
			activeLiDemo = 0;
		}
		$(".nosotrosSection ul li").eq(activeLiDemo).addClass('active');
		$(".contactoSection ul li").eq(activeLiDemo).addClass('active');



		var left_indent = parseInt($('.serviciosSection ul').css('left')) - item_width;
		$('.serviciosSection ul:not(:animated)').animate({'left' : left_indent}, 500, function () {
			$('.serviciosSection li:last').after($('.serviciosSection li:first'));                 	
			$('.serviciosSection ul').css({'left' : left_value});
		});


		var top_indent = parseInt($('.clientesSection ul').css('top')) - item_height;
		$('.clientesSection ul:not(:animated)').animate({'top' : top_indent}, 500, function () {
			$('.clientesSection li:last').after($('.clientesSection li:first'));                 	
			$('.clientesSection ul').css({'top' : top_value});
		});
	}

	/*========== END DEMO List ===========*/
});