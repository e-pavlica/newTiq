'use strict';

function mainCtrl($scope) {
  	$scope.playerOne = null;
  	$scope.playerTwo = null;
    //$scope.activePlayer = $scope.playerOne;
    //$scope.ticTacRows = ["","",""];
    //$scope.ticTacCols = ["","",""];
    }

/*function codingFunController($scope){
    //$scope.releases = [{released:new Date('May 22, 2013'),version:'1.0.7',codename:'monochromatic-rainbow',status:'stable'},{released:new Date('May 22, 2013'),version:'1.1.5',codename:'triangle-squarification',status:'unstable'},{released:new Date('Apr 4, 2013'),version:'1.0.6',codename:'universal-irreversibility',status:'stable'},{released:new Date('Apr 3, 2013'),version:'1.1.4',codename:'quantum-manipulation',status:'unstable'},{released:new Date('Feb 22, 2013'),version:'1.1.3',codename:'radioactive-gargle',status:''},{released:new Date('Feb 20, 2013'),version:'1.0.5',codename:'flatulent-propulsion',status:''},{released:new Date('Jan 22, 2013'),version:'1.1.2',codename:'tofu-animation',status:''},{released:new Date('Jan 22, 2013'),version:'1.0.4',codename:'bewildering-hair',status:''},{released:new Date('Nov 26, 2012'),version:'1.1.1',codename:'pathological-kerning',status:''},{released:new Date('Nov 26, 2012'),version:'1.0.3',codename:'bouncy-thunder',status:''},{released:new Date('Aug 31, 2012'),version:'1.1.0',codename:'increase-gravatas',status:''},{released:new Date('Aug 31, 2012'),version:'1.0.2',codename:'debilitating-awesomeness',status:''},{released:new Date('Jun 25, 2012'),version:'1.0.1',codename:'thorium-shielding',status:''},{released:new Date('Jun 13, 2012'),version:'1.0.0',codename:'temporal-domination',status:'stable'},{released:new Date('Jun 12, 2012'),version:'1.0.0rc12',codename:'regression-extermination',status:''},{released:new Date('Jun 10, 2012'),version:'1.0.0rc11',codename:'promise-resolution',status:''},{released:new Date('May 23, 2012'),version:'1.0.0rc10',codename:'tesseract-giftwrapping',status:''},{released:new Date('May 14, 2012'),version:'1.0.0rc9',codename:'eggplant-teleportation',status:''},{released:new Date('May 6, 2012'),version:'1.0.0rc8',codename:'blooming-touch',status:''},{released:new Date('Apr 30, 2012'),version:'1.0.0rc7',codename:'rc-generation',status:''},{released:new Date('Apr 20, 2012'),version:'1.0.0rc6',codename:'runny-nose',status:''},{released:new Date('Apr 12, 2012'),version:'1.0.0rc5',codename:'reality-distortion',status:''},{released:new Date('Apr 5, 2012'),version:'1.0.0rc4',codename:'insomnia-induction',status:''},{released:new Date('Mar 29, 2012'),version:'1.0.0rc3',codename:'barefoot-telepathy',status:''},{released:new Date('Mar 20, 2012'),version:'1.0.0rc2',codename:'silence-absorption',status:''},{released:new Date('Mar 13, 2012'),version:'1.0.0rc1',codename:'moiré-vision',status:''},{released:new Date('Jan 17, 2012'),version:'0.10.6',codename:'bubblewrap-cape',status:''},{released:new Date('Nov 8, 2011'),version:'0.10.5',codename:'steel-fist',status:''},{released:new Date('Oct 22, 2011'),version:'0.10.4',codename:'human-torch',status:''},{released:new Date('Oct 13, 2011'),version:'0.10.3',codename:'shattering-heartbeat',status:''},{released:new Date('Oct 8, 2011'),version:'0.10.2',codename:'sneaky-seagull',status:''},{released:new Date('Sep 9, 2011'),version:'0.10.1',codename:'inexorable-juggernaut',status:''},{released:new Date('Sep 2, 2011'),version:'0.10.0',codename:'chicken-hands',status:''},{released:new Date('Aug 20, 2011'),version:'0.9.19',codename:'canine-psychokinesis',status:''},{released:new Date('Jul 29, 2011'),version:'0.9.18',codename:'jiggling-armfat',status:''},{released:new Date('Jun 30, 2011'),version:'0.9.17',codename:'vegetable-reanimation',status:''},{released:new Date('Jun 7, 2011'),version:'0.9.16',codename:'weather-control',status:''},{released:new Date('April 11, 2011'),version:'0.9.15',codename:'lethal-stutter',status:''},{released:new Date('April 1, 2011'),version:'0.9.14',codename:'key-maker',status:''},{released:new Date('Mar 13, 2011'),version:'0.9.13',codename:'curdling-stare',status:''},{released:new Date('Mar 3, 2011'),version:'0.9.12',codename:'thought-implanter',status:''},{released:new Date('Feb 8, 2011'),version:'0.9.11',codename:'snow-maker',status:''},{released:new Date('Jan 26, 2011'),version:'0.9.10',codename:'flea-whisperer',status:''},{released:new Date('Jan 13, 2011'),version:'0.9.9',codename:'time-shift',status:''},{released:new Date('Dec 23, 2010'),version:'0.9.8',codename:'astral-projection',status:''},{released:new Date('Dec 10, 2010'),version:'0.9.7',codename:'sonic-scream',status:''},{released:new Date('Dec 6, 2010'),version:'0.9.6',codename:'night-vision',status:''},{released:new Date('Nov 25, 2010'),version:'0.9.5',codename:'turkey-blast',status:''},{released:new Date('Nov 18, 2010'),version:'0.9.4',codename:'total-recall',status:''},{released:new Date('Nov 10, 2010'),version:'0.9.3',codename:'cold-resistance',status:''},{released:new Date('Nov 3, 2010'),version:'0.9.2',codename:'faunal-mimicry',status:''},{released:new Date('Oct 26, 2010'),version:'0.9.1',codename:'repulsion-field',status:''},{released:new Date('Oct 20, 2010'),version:'0.9.0',codename:'dragon-breath',status:''}];
    $scope.ticTacRows = ["","",""];
    $scope.ticTacCols = ["","",""];
}
*/

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

	for(j=0;j<cellArray.length;++j){
		var workingCell = cellArray[j].className;
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

