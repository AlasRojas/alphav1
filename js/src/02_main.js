$(document).ready(function(){
	console.log("demo");

	//$(".underConstruction ul li")

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

});