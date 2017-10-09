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

});