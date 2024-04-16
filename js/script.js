
function gameLogic() {

	
	var btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9;
	btn1 = document.getElementById("btn1").value;
	btn2 = document.getElementById("btn2").value;
	btn3 = document.getElementById("btn3").value;
	btn4 = document.getElementById("btn4").value;
	btn5 = document.getElementById("btn5").value;
	btn6 = document.getElementById("btn6").value;
	btn7 = document.getElementById("btn7").value;
	btn8 = document.getElementById("btn8").value;
	btn9 = document.getElementById("btn9").value;

	
	if ((btn1 == 'x' || btn1 == 'X') && (btn2 == 'x' ||
		btn2 == 'X') && (btn3 == 'x' || btn3 == 'X')) {
		document.getElementById('result')
			.innerHTML = "Player ' X ' won";
		document.getElementById("btn4").disabled = true;
		document.getElementById("btn5").disabled = true;
		document.getElementById("btn6").disabled = true;
		document.getElementById("btn7").disabled = true;
		document.getElementById("btn8").disabled = true;
		document.getElementById("btn9").disabled = true;
		document.getElementById('popup-result').style.display = "flex";
		document.getElementById('resultpop')
			.innerHTML = "Player ' X ' won";
	}
	else if ((btn1 == 'x' || btn1 == 'X') && (btn4 == 'x' ||
		btn4 == 'X') && (btn7 == 'x' || btn7 == 'X')) {
		document.getElementById('result')
			.innerHTML = "Player ' X ' won";
		document.getElementById("btn2").disabled = true;
		document.getElementById("btn3").disabled = true;
		document.getElementById("btn5").disabled = true;
		document.getElementById("btn6").disabled = true;
		document.getElementById("btn8").disabled = true;
		document.getElementById("btn9").disabled = true;

		document.getElementById('popup-result').style.display = "flex";
		document.getElementById('resultpop')
			.innerHTML = "Player ' X ' won";
	}
	else if ((btn7 == 'x' || btn7 == 'X') && (btn8 == 'x' ||
		btn8 == 'X') && (btn9 == 'x' || btn9 == 'X')) {
		document.getElementById('result')
			.innerHTML = "Player ' X ' won";
		document.getElementById("btn1").disabled = true;
		document.getElementById("btn2").disabled = true;
		document.getElementById("btn3").disabled = true;
		document.getElementById("btn4").disabled = true;
		document.getElementById("btn5").disabled = true;
		document.getElementById("btn6").disabled = true;
		document.getElementById('popup-result').style.display = "flex";
		document.getElementById('resultpop')
			.innerHTML = "Player ' X ' won";
	}
	else if ((btn3 == 'x' || btn3 == 'X') && (btn6 == 'x' ||
		btn6 == 'X') && (btn9 == 'x' || btn9 == 'X')) {
		document.getElementById('result')
			.innerHTML = "Player ' X ' won";
		document.getElementById("btn1").disabled = true;
		document.getElementById("btn2").disabled = true;
		document.getElementById("btn4").disabled = true;
		document.getElementById("btn5").disabled = true;
		document.getElementById("btn7").disabled = true;
		document.getElementById("btn8").disabled = true;
		document.getElementById('popup-result').style.display = "flex";
		document.getElementById('resultpop')
			.innerHTML = "Player ' X ' won";
	}
	else if ((btn1 == 'x' || btn1 == 'X') && (btn5 == 'x' ||
		btn5 == 'X') && (btn9 == 'x' || btn9 == 'X')) {
		document.getElementById('result')
			.innerHTML = "Player ' X ' won";
		document.getElementById("btn2").disabled = true;
		document.getElementById("btn3").disabled = true;
		document.getElementById("btn4").disabled = true;
		document.getElementById("btn6").disabled = true;
		document.getElementById("btn7").disabled = true;
		document.getElementById("btn8").disabled = true;
		document.getElementById('popup-result').style.display = "flex";
		document.getElementById('resultpop')
			.innerHTML = "Player ' X ' won";
	}
	else if ((btn3 == 'x' || btn3 == 'X') && (btn5 == 'x' ||
		btn5 == 'X') && (btn7 == 'x' || btn7 == 'X')) {
		document.getElementById('result')
			.innerHTML = "Player ' X ' won";
		document.getElementById("btn1").disabled = true;
		document.getElementById("btn2").disabled = true;
		document.getElementById("btn4").disabled = true;
		document.getElementById("btn6").disabled = true;
		document.getElementById("btn8").disabled = true;
		document.getElementById("btn9").disabled = true;
		document.getElementById('popup-result').style.display = "flex";
		document.getElementById('resultpop')
			.innerHTML = "Player ' X ' won";
	}
	else if ((btn2 == 'x' || btn2 == 'X') && (btn5 == 'x' ||
		btn5 == 'X') && (btn8 == 'x' || btn8 == 'X')) {
		document.getElementById('result')
			.innerHTML = "Player ' X ' won";
		document.getElementById("btn1").disabled = true;
		document.getElementById("btn3").disabled = true;
		document.getElementById("btn4").disabled = true;
		document.getElementById("btn6").disabled = true;
		document.getElementById("btn7").disabled = true;
		document.getElementById("btn9").disabled = true;
		document.getElementById('popup-result').style.display = "flex";
		document.getElementById('resultpop')
			.innerHTML = "Player ' X ' won";
	}
	else if ((btn4 == 'x' || btn4 == 'X') && (btn5 == 'x' ||
		btn5 == 'X') && (btn6 == 'x' || btn6 == 'X')) {
		document.getElementById('result')
			.innerHTML = "Player ' X ' won";
		document.getElementById("btn1").disabled = true;
		document.getElementById("btn2").disabled = true;
		document.getElementById("btn3").disabled = true;
		document.getElementById("btn7").disabled = true;
		document.getElementById("btn8").disabled = true;
		document.getElementById("btn9").disabled = true;
		document.getElementById('popup-result').style.display = "flex";
		document.getElementById('resultpop')
			.innerHTML = "Player ' X ' won";
	}

	
	else if ((btn1 == '0' || btn1 == '0') && (btn2 == '0' ||
		btn2 == '0') && (btn3 == '0' || btn3 == '0')) {
		document.getElementById('result')
			.innerHTML = "Player ' O ' won";
		document.getElementById("btn4").disabled = true;
		document.getElementById("btn5").disabled = true;
		document.getElementById("btn6").disabled = true;
		document.getElementById("btn7").disabled = true;
		document.getElementById("btn8").disabled = true;
		document.getElementById("btn9").disabled = true;
		document.getElementById('popup-result').style.display = "flex";
		document.getElementById('resultpop')
			.innerHTML = "Player ' O ' won";
	}
	else if ((btn1 == 'O' || btn1 == 'O') && (btn4 == 'O' ||
		btn4 == 'O') && (btn7 == 'O' || btn7 == 'O')) {
		document.getElementById('result')
			.innerHTML = "Player ' O ' won";
		document.getElementById("btn2").disabled = true;
		document.getElementById("btn3").disabled = true;
		document.getElementById("btn5").disabled = true;
		document.getElementById("btn6").disabled = true;
		document.getElementById("btn8").disabled = true;
		document.getElementById("btn9").disabled = true;
		document.getElementById('popup-result').style.display = "flex";
		document.getElementById('resultpop')
			.innerHTML = "Player ' O ' won";
	}
	else if ((btn7 == 'O' || btn7 == 'O') && (btn8 == 'O' ||
		btn8 == 'O') && (btn9 == 'O' || btn9 == 'O')) {
		document.getElementById('result')
			.innerHTML = "Player ' O ' won";
		document.getElementById("btn1").disabled = true;
		document.getElementById("btn2").disabled = true;
		document.getElementById("btn3").disabled = true;
		document.getElementById("btn4").disabled = true;
		document.getElementById("btn5").disabled = true;
		document.getElementById("btn6").disabled = true;
		document.getElementById('popup-result').style.display = "flex";
		document.getElementById('resultpop')
			.innerHTML = "Player ' O ' won";;
	}
	else if ((btn3 == 'O' || btn3 == 'O') && (btn6 == 'O' ||
		btn6 == 'O') && (btn9 == 'O' || btn9 == 'O')) {
		document.getElementById('result')
			.innerHTML = "Player ' O ' won";
		document.getElementById("btn1").disabled = true;
		document.getElementById("btn2").disabled = true;
		document.getElementById("btn4").disabled = true;
		document.getElementById("btn5").disabled = true;
		document.getElementById("btn7").disabled = true;
		document.getElementById("btn8").disabled = true;
		document.getElementById('popup-result').style.display = "flex";
		document.getElementById('resultpop')
			.innerHTML = "Player ' O ' won";
	}
	else if ((btn1 == 'O' || btn1 == 'O') && (btn5 == 'O' ||
		btn5 == 'O') && (btn9 == 'O' || btn9 == 'O')) {
		document.getElementById('result')
			.innerHTML = "Player ' O ' won";
		document.getElementById("btn2").disabled = true;
		document.getElementById("btn3").disabled = true;
		document.getElementById("btn4").disabled = true;
		document.getElementById("btn6").disabled = true;
		document.getElementById("btn7").disabled = true;
		document.getElementById("btn8").disabled = true;
		document.getElementById('popup-result').style.display = "flex";
		document.getElementById('resultpop')
			.innerHTML = "Player ' O ' won";
	}
	else if ((btn3 == 'O' || btn3 == 'O') && (btn5 == 'O' ||
		btn5 == 'O') && (btn7 == 'O' || btn7 == 'O')) {
		document.getElementById('result')
			.innerHTML = "Player ' O ' won";
		document.getElementById("btn1").disabled = true;
		document.getElementById("btn2").disabled = true;
		document.getElementById("btn4").disabled = true;
		document.getElementById("btn6").disabled = true;
		document.getElementById("btn8").disabled = true;
		document.getElementById("btn9").disabled = true;
		document.getElementById('popup-result').style.display = "flex";
		document.getElementById('resultpop')
			.innerHTML = "Player ' O ' won";
	}
	else if ((btn2 == 'O' || btn2 == 'O') && (btn5 == 'O' ||
		btn5 == 'O') && (btn8 == 'O' || btn8 == 'O')) {
		document.getElementById('result')
			.innerHTML = "Player ' O ' won";
		document.getElementById("btn1").disabled = true;
		document.getElementById("btn3").disabled = true;
		document.getElementById("btn4").disabled = true;
		document.getElementById("btn6").disabled = true;
		document.getElementById("btn7").disabled = true;
		document.getElementById("btn9").disabled = true;
		document.getElementById('popup-result').style.display = "flex";
		document.getElementById('resultpop')
			.innerHTML = "Player ' O ' won";
	}
	else if ((btn4 == 'O' || btn4 == 'O') && (btn5 == 'O' ||
		btn5 == 'O') && (btn6 == 'O' || btn6 == 'O')) {
		document.getElementById('result')
			.innerHTML = "Player ' O ' won";
		document.getElementById("btn1").disabled = true;
		document.getElementById("btn2").disabled = true;
		document.getElementById("btn3").disabled = true;
		document.getElementById("btn7").disabled = true;
		document.getElementById("btn8").disabled = true;
		document.getElementById("btn9").disabled = true;
		document.getElementById('popup-result').style.display = "flex";
		document.getElementById('resultpop')
			.innerHTML = "Player ' O ' won";
	}

	
	else if ((btn1 == 'X' || btn1 == 'O') && (btn2 == 'X'
		|| btn2 == 'O') && (btn3 == 'X' || btn3 == 'O') &&
		(btn4 == 'X' || btn4 == 'O') && (btn5 == 'X' ||
		btn5 == 'O') && (btn6 == 'X' || btn6 == 'O') &&
		(btn7 == 'X' || btn7 == 'O') && (btn8 == 'X' ||
		btn8 == 'O') && (btn9 == 'X' || btn9 == 'O')) {
			document.getElementById('result')
				.innerHTML = "Khichdi Pak Gyi";

		document.getElementById('popup-result').style.display = "flex";
		document.getElementById('resultpop')
			.innerHTML = "Khichdi Pak Gyi";
	}
	else {

		
		if (flag == 1) {
			document.getElementById('result')
				.innerHTML = "Player ' X ' Turn";
		}
		else {
			document.getElementById('result')
				.innerHTML = "Player ' O ' Turn";
		}
	}
}


function resetGame() {
	location.reload();
	document.getElementById('btn1').value = '';
	document.getElementById("btn2").value = '';
	document.getElementById("btn3").value = '';
	document.getElementById("btn4").value = '';
	document.getElementById("btn5").value = '';
	document.getElementById("btn6").value = '';
	document.getElementById("btn7").value = '';
	document.getElementById("btn8").value = '';
	document.getElementById("btn9").value = '';

}


flag = 1;
function disableBtn1() {
	if (flag == 1) {
		document.getElementById("btn1").value = "X";
		document.getElementById("btn1").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("btn1").value = "O";
		document.getElementById("btn1").disabled = true;
		flag = 1;
	}
}

function disableBtn2() {
	if (flag == 1) {
		document.getElementById("btn2").value = "X";
		document.getElementById("btn2").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("btn2").value = "O";
		document.getElementById("btn2").disabled = true;
		flag = 1;
	}
}

function disableBtn3() {
	if (flag == 1) {
		document.getElementById("btn3").value = "X";
		document.getElementById("btn3").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("btn3").value = "O";
		document.getElementById("btn3").disabled = true;
		flag = 1;
	}
}

function disableBtn4() {
	if (flag == 1) {
		document.getElementById("btn4").value = "X";
		document.getElementById("btn4").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("btn4").value = "O";
		document.getElementById("btn4").disabled = true;
		flag = 1;
	}
}

function disableBtn5() {
	if (flag == 1) {
		document.getElementById("btn5").value = "X";
		document.getElementById("btn5").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("btn5").value = "O";
		document.getElementById("btn5").disabled = true;
		flag = 1;
	}
}

function disableBtn6() {
	if (flag == 1) {
		document.getElementById("btn6").value = "X";
		document.getElementById("btn6").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("btn6").value = "O";
		document.getElementById("btn6").disabled = true;
		flag = 1;
	}
}

function disableBtn7() {
	if (flag == 1) {
		document.getElementById("btn7").value = "X";
		document.getElementById("btn7").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("btn7").value = "O";
		document.getElementById("btn7").disabled = true;
		flag = 1;
	}
}

function disableBtn8() {
	if (flag == 1) {
		document.getElementById("btn8").value = "X";
		document.getElementById("btn8").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("btn8").value = "O";
		document.getElementById("btn8").disabled = true;
		flag = 1;
	}
}

function disableBtn9() {
	if (flag == 1) {
		document.getElementById("btn9").value = "X";
		document.getElementById("btn9").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("btn9").value = "O";
		document.getElementById("btn9").disabled = true;
		flag = 1;
	}
}

function startGame() {

	result.innerHTML = "Player ' X ' Turn"; 

	document.getElementById('btn1').disabled = false;
	document.getElementById("btn2").disabled = false;
	document.getElementById("btn3").disabled = false;
	document.getElementById("btn4").disabled = false;
	document.getElementById("btn5").disabled = false;
	document.getElementById("btn6").disabled = false;
	document.getElementById("btn7").disabled = false;
	document.getElementById("btn8").disabled = false;
	document.getElementById("btn9").disabled = false;

	document.getElementById('startGameBtn').disabled = true;

}


function closePopup(){
	document.getElementById('popup-result').style.display = 'none';
}

function closePopupAbout(){
	document.getElementById('popup-about').style.display = 'none';
}