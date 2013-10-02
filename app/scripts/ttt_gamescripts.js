/*
	javascripts for Evan Pavlica's Tiq Taq Toe
	General Assembly - Los Angeles
	Web Development Immersive, Sep 2013

*/

var winNotifDiv;
var boardState;
var allCells;


// On Load function to define variables
window.onload = function loadMe(){
	//Define the winNotif div for use to switch display (none / block)
		winNotifDiv = document.getElementById("winNotif");
		winNotifDiv.style.display = "none";
		allCells = document.getElementsByClassName("cell");
		//add an onclick property to all "cell" divs
		for(i = 0; i< allCells.length; ++i){
		    allCells[i].addEventListener('click', playerTurn(this.id));
		}
		
};

//This code is jQuery's
function RemoveClassFromElement(elem,value){
 var rspaces = /\s+/;
 var rclass = /[\n\t]/g;
 var classNames = (value || "").split( rspaces );
 var className = (" " + elem.className + " ").replace(rclass, " ");
 for ( var c = 0, cl = classNames.length; c < cl; c++ ) {
  className = className.replace(" " + classNames[c] + " ", " ");
 }
 elem.className = className.replace(/^\s+|\s+$/g,'');//trim
}


// Clear Cell Contents for New Game
function clearCells() {
    	i = 0;
		while(i < allCells.length){
			allCells[i].innerHTML='';
			RemoveClassFromElement(allCells[i],"placed_x");
			RemoveClassFromElement(allCells[i],"placed_o");
			i += 1;
		}
		//Reset Counter
		playCount = 1;
		//Clear boardState
		boardState = 0;
		//Clear Win notification if present
		winNotifDiv.style.display = "none";
		
}			

//Help function for playerTurn to determine if playCount is even
function isEven(value) {
	if (value%2 == 0)
		return true;
	else
		return false;
}

//Counter for determining who's turn it is
var playCount = 1;

// Function to switch player name in multiple places
function playerChange(str){
	var player = document.getElementsByClassName("player");
	
	for(i=0;i<player.length;++i){
		player[i].innerHTML = str;
	}
}


//Display a Tie notification
function tie(){
	if(playCount > 9){
	document.getElementById("notif").innerHTML = "It's a Tie!";
	winNotifDiv.style.display = "block";
	}
}

// Function that places Xs & Os and sends play to winCheck
// also executes playerChange if no win
function playerTurn(id) {
	var cell = document.getElementById(id);
	
	
	if(cell.innerHTML.length == 0){
		if(isEven(playCount)) {
			cell.innerHTML = "<img class='o' src='resources/images/xo_sprites.png'>";
			cell.className += " placed_o";
			playCount += 1;
			if(winCheck(placedItems("o"))){
				winNotifDiv.style.display = "block";
			}
			else {
				tie();
				playerChange("X");
			}
		}
		else if(isEven(playCount) == false) {
			cell.innerHTML = "<img class='x' src='resources/images/xo_sprites.png'>";
			cell.className += " placed_x";
			playCount += 1;
			document.getElementsByClassName("player").innerHTML = "O";
			if(winCheck(placedItems("x"))){
				winNotifDiv.style.display = "block";
			}
			else {
				tie();
				playerChange("O");
			}
		}
	}
	else {
			alert("That cell is already full! Please choose another.");
	}
}


//Convert filled cells to number for win check
function placedItems(gp) {
	boardState = "";
	var cellArray = document.getElementsByClassName("cell");

	for(i=0;i<cellArray.length;++i){
		var workingCell = cellArray[i].className;
		if((workingCell.indexOf("placed_"+gp)) >= 0){
			boardState += "1";
		}
		else {
			boardState += "0";
		}
	}
		return boardState;
		winCheck();
}

//Winning combos
var winners = ["111000000", "000111000", "000000111", "100100100", "010010010", "001001001", "100010001", "001010100"];

//Check board state against winners array
function winCheck(str) {
	for(i=0;i<winners.length;++i){
		if(winners[i] == str)
			return true;
	}
}

