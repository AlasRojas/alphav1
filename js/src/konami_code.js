$(document).ready(function(){

	var allowedKeys = {
		37: 'left',
		38: 'up',
		39: 'right',
		40: 'down',
		65: 'a',
		66: 'b'
	};
	var konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a'];
	var konamiCodePosition = 0;

	document.addEventListener('keydown', function(e) {
		console.log(e.keyCode);
		var key = allowedKeys[e.keyCode];
		var requiredKey = konamiCode[konamiCodePosition];

		if (key == requiredKey) {
			konamiCodePosition++;
			if (konamiCodePosition == konamiCode.length) {
				activateCheats();
				konamiCodePosition = 0;
			}
		} else {
			konamiCodePosition = 0;
		}
	});

	function activateCheats() {
		alert("cheats activated");
		rockPaper();
	}

	function rockPaper(){
		var add_html =  '<div class="gameSelect" data-select="rock">rock</div>';
			add_html += '<div class="gameSelect" data-select="paper">paper</div>';
			add_html += '<div class="gameSelect" data-select="scissors">scissors</div>';
			add_html += '<div class="gameSelect" data-select="lizard">lizard</div>';
			add_html += '<div class="gameSelect" data-select="spock">spock</div>';
		ALPHA.lanch_modal( add_html );

		$('.gameSelect').click(function($evt){
			$evt.preventDefault();

			console.log( $(this).data('select') );
			var userCoice = $(this).data('select');

			var computerChoice = Math.random();
			if (computerChoice < 0.2) {
				computerChoice = "rock";
			} else if(computerChoice <= 0.4) {
				computerChoice = "paper";
			} else if(computerChoice <= 0.6) {
				computerChoice = "scissors";
			} else if(computerChoice <= 0.8) {
				computerChoice = "lizard";
			} else {
				computerChoice = "spock";
			}
			console.log(computerChoice);
			comparacion(userCoice, computerChoice);
		});

		function comparacion(user, computer){
			if (user == computer) {
				console.log("Tie");
			}else{
				console.log('not tie');
				if (user == 'rock') {

					if (computer == 'paper') {
						console.log('Paper cover rock');
						console.log('You lose');
					}else if (computer == 'scissors') {
						console.log('Rock crushes scissors');
						console.log('You win');
					}else if (computer == 'lizard') {
						console.log('Rock crushes lizard');
						console.log('You win');
					}else if (computer == 'spock') {
						console.log('Spock vaporizes rock');
						console.log('You lose');
					}

				}else if (user == 'paper') {

					if (computer == 'rock') {
						console.log('Paper cover rock');
						console.log('You win');
					}else if (computer == 'scissors') {
						console.log('scissors cuts paper');
						console.log('You lose');
					}else if (computer == 'lizard') {
						console.log('lizard eats paper');
						console.log('You lose');
					}else if (computer == 'spock') {
						console.log('paper disproves spock');
						console.log('You win');
					}

				}else if (user == 'scissors') {

					if (computer == 'rock') {
						console.log('Rock crushes scissors');
						console.log('You lose');
					}else if (computer == 'paper') {
						console.log('scissors cuts paper');
						console.log('You win');
					}else if (computer == 'lizard') {
						console.log('scissors decapitates lizard');
						console.log('You win');
					}else if (computer == 'spock') {
						console.log('spock smashes scissors');
						console.log('You lose');
					}

				}else if (user == 'lizard') {

					if (computer == 'rock') {
						console.log('Rock crushes lizard');
						console.log('You lose');
					}else if (computer == 'paper') {
						console.log('lizard eats paper');
						console.log('You win');
					}else if (computer == 'scissors') {
						console.log('scissors decapitates lizard');
						console.log('You lose');
					}else if (computer == 'spock') {
						console.log('lizard poison spock');
						console.log('You win');
					}

				}else if (user == 'spock') {

					if (computer == 'rock') {
						console.log('Spock vaporizes rock');
						console.log('You win');
					}else if (computer == 'paper') {
						console.log('paper disproves spock');
						console.log('You lose');
					}else if (computer == 'scissors') {
						console.log('spock smashes scissors');
						console.log('You win');
					}else if (computer == 'lizard') {
						console.log('lizard poison spock');
						console.log('You lose');
					}

				}
			}
		}
			
	}
		//}

});