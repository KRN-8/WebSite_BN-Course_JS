const RPS = {
	0: "Rock",
	1: "Paper",
	2: "Scissors"
}

setTimeout(() => {
	//alert("yo tt !");
	/*
	for (let i = 0; i < 3; i++) {
		playRound(i % 3, 0, i);
		playRound(i % 3, 1, 22);
		playRound(i % 3, 2, 33);
	}//*/
	game(5);
}, 500);

function game(rounds) {
	let roundResult;
	let playerScore = 0;
	let computerScore = 0;

	for (let i = 1; i <= rounds; i++) {
		roundResult = playRound(playerPlay(), computerPlay(), i);
		playerScore += roundResult % 2;
		computerScore += roundResult == 2 ? 1 : 0;
	}

	let msg = "Game Over:\n";
	if (playerScore > computerScore) {
		msg += "You WIN !";
	} else if (playerScore < computerScore) {
		msg += "You LOSE !";
	} else msg += "It is a TIE !";
	alert(msg);
}

function computerPlay() {
	let pcMove = Math.round(Math.random() * 2);
	console.log(`PC choice: ${RPS[pcMove]}`);
	return pcMove;
}
function playerPlay() {
	while (true) {
		let playerInput = prompt("Your move:", `${RPS[0]} | ${RPS[1]} | ${RPS[2]}`);
		if (playerInput == null) continue;// cancel the Cancel button
		else playerInput = playerInput.toUpperCase();

		if (playerInput.includes(RPS[0].toUpperCase()))
			return 0;
		if (playerInput.includes(RPS[1].toUpperCase()))
			return 1;
		if (playerInput.includes(RPS[2].toUpperCase()))
			return 2;
	}
}

/** Player<>PC = result for Player
 * 00 01 02 = T L W
 * 10 11 12 = W T L
 * 20 21 22 = L W T
 * T = 0
 * W = 1
 * L = 2
 */
function playRound(playerSelection, computerSelection, round = 1) {
	let result = (playerSelection - computerSelection + 3) % 3;
	//console.log(playerSelection, computerSelection, "=", result);

	const resText = {
		0: "Tied",
		1: "Win",
		2: "Lose"
	}
	let msg = `Round ${round}:\nYou ${resText[result]}! `;
	switch (result) {
		case 1:
			msg += `${RPS[playerSelection]} beats ${RPS[computerSelection]}`;
			break;
		case 2:
			msg += `${RPS[computerSelection]} beats ${RPS[playerSelection]}`;
			break;

		default:
			msg += `(you both chose ${RPS[playerSelection]})`;
			break;
	}
	alert(msg);

	return result;
}
