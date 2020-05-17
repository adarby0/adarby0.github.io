let currentPlayer = "♥"; // ♥💀
let notCurrentPlayer = "💀";
let gameStatus = ""; // "" - continue, "Tie", "♥ Wins", "💀 Wins"
let numTurns = 0;

// take player turn
function playerTakeTurn(e) {
	if (e.innerHTML == "") {
		e.innerHTML = currentPlayer;
		checkGameStatus();
	} else {
		showLightBox("This box is full.", "Select an empty box to continue.");
		return;
	} // else

	// game is over
	if (gameStatus != "") {
		showLightBox(gameStatus, "Game Over.");
	}
} // playerTakeTurn

// after each turn, check for a winner, a tie,
// or continue playing
function checkGameStatus() {
	numTurns++; // count turns

	// check for a win
	if (checkWin()) {
		gameStatus = currentPlayer + " dunked on " + notCurrentPlayer + "!!!";
		return;
	} // if

	// check for tie
	if (numTurns == 9) {
	gameStatus = "You have tied.";
	} // if

	// switch current player
	currentPlayer = (currentPlayer == "♥" ? "💀" : "♥"); 
	// switch not current player
	notCurrentPlayer = (notCurrentPlayer == "💀" ? "♥" : "💀"); 

} // checkGameStatus

// check for a Win, there are 8 possible win paths
function checkWin() {
	let cb = []; // current board
	cb[0] = ""; // not going to use
	cb[1] = document.getElementById("one").innerHTML;
	cb[2] = document.getElementById("two").innerHTML;
	cb[3] = document.getElementById("thr").innerHTML;
	cb[4] = document.getElementById("fou").innerHTML;
	cb[5] = document.getElementById("fiv").innerHTML;
	cb[6] = document.getElementById("six").innerHTML;
	cb[7] = document.getElementById("sev").innerHTML;
	cb[8] = document.getElementById("eig").innerHTML;
	cb[9] = document.getElementById("nin").innerHTML;

	// top row
	if (cb [1] != "" && cb[1] == cb[2] && cb[2] == cb[3]) {
		return true;
	}

	// middle row
	if (cb [4] != "" && cb[4] == cb[5] && cb[5] == cb[6]) {
		return true;
	}

	// bottom row
	if (cb [7] != "" && cb[7] == cb[8] && cb[8] == cb[9]) {
		return true;
	}

	// left column
	if (cb [1] != "" && cb[1] == cb[4] && cb[4] == cb[7]) {
		return true;
	}

	// middle column
	if (cb [2] != "" && cb[2] == cb[5] && cb[5] == cb[8]) {
		return true;
	}

	// bottom column
	if (cb [3] != "" && cb[3] == cb[6] && cb[6] == cb[9]) {
		return true;
	}

	// "\" diagonal
	if (cb [1] != "" && cb[1] == cb[5] && cb[5] == cb[9]) {
		return true;
	}

	// "/" diagonal
	if (cb [3] != "" && cb[3] == cb[5] && cb[5] == cb[7]) {
		return true;
	}

	return false;

} // checkWin

function changeVisibility(divID) {
	var element = document.getElementById(divID);

	//if element exists, toggle its class
	// between hidden and unhidden
	if (element) {
		element.className = (element.className == 'hidden')? 'unhidden' : 'hidden';
	} // if
} // changeVisibility

// display message in lightbox
function showLightBox(message, message2) {
	// set messages
	document.getElementById("message").innerHTML = message;
	document.getElementById("message2").innerHTML = message2;

	// show lightbox
	changeVisibility("lightbox");
	changeVisibility("boundaryMessage");
} // showLightBox

// close light box
function continueGame() {
	changeVisibility("lightbox");
	changeVisibility("boundaryMessage");

	// if the game is over, show controls
} // continueGame
