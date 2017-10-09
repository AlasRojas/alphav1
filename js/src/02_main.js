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
	console.log("demo");

	//$(".underConstruction ul li")
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

	$( window ).resize(function(){
		wHeight = $( window ).height();
		resizeFunctions();
	});

	function resizeFunctions(){
		$('section').height( (wHeight/2)+'px' );
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
});