'use strict';

function mainCtrl($scope) {
	//Define obejects for player names
  	$scope.playerOne = {name:""};
  	$scope.playerTwo = {name:""};
  	$scope.activePlayer = null;
  	$scope.win = false;
  	//Array to create the board
    $scope.ticTacToe = [[{value:"", img:"1x1.png"},{value:"", img:"1x1.png"},{value:"", img:"1x1.png"}],[{value:"", img:"1x1.png"},{value:"", img:"1x1.png"},{value:"", img:"1x1.png"}],[{value:"", img:"1x1.png"},{value:"", img:"1x1.png"},{value:"", img:"1x1.png"}]];
    //define a turn counter used for determining the next player
    $scope.turnCounter = 0;
    //create a function to clear the welcome/ player name box
    $scope.clearWelcome = function(){
    	var welcomeDiv = document.getElementById("welcome");
    	var playerNameDiv = document.getElementById("playerInput");
    	
    	welcomeDiv.style.display = "none";
    	playerNameDiv.style.display = "none";
    	$scope.activePlayer = $scope.playerOne.name;
    };
    //logic & gameplay functions
    $scope.clickSquare = function(row, col){
    	var cell = event.target;
    	var player;
    	var boardState = "";
    	var winNotifDiv = document.getElementById("winNotif");
    	var winners = ["111000000", "000111000", "000000111", "100100100", "010010010", "001001001", "100010001", "001010100"];
	    if (this.ticTacToe[row][col] == "") {
	    	if (this.turnCounter%2 == 0) {
	    		player = "x"
	    		cell.innerHTML = "<img src='../resources/images/big_" + player + ".png' />";
	    		cell.className += " placed_" + player
	    		this.ticTacToe[row][col] = player;
	    		placedItems(player);

	    		if(winCheck(boardState)){
	    			winNotifDiv.style.display = "block";
	    		}
	    		else {
		    		$scope.activePlayer = this.playerTwo;
		    	}
	       	}
	    	else {
	    		player = "o"
	    		cell.innerHTML = "<img src='../resources/images/big_" + player + ".png' />";
	    		cell.className += " placed_" + player
	    		this.ticTacToe[row][col] = player;
	    		placedItems(player);
	    		if(winCheck(boardState)){
	    			winNotifDiv.style.display = "block";
	    		}
	    		else {
		    		$scope.activePlayer = this.playerOne;
		    	}
	    	}
	    	$scope.turnCounter++;
			}
			else {
				alert("That square's already full!");
			}
		

			function placedItems(gp) {
				var cellArray = document.getElementsByClassName("cell");
				var i;
				for(i=0;i<cellArray.length;++i){
					var workingCell = cellArray[i].className;
					if((workingCell.indexOf("placed_"+gp)) >= 0){
						boardState += "1";
					}
					else {
						boardState += "0";
					}
				}
					console.log(boardState); //for debug
			};

			function winCheck(str) {
				var i;
				for(i=0;i<winners.length;++i){
					if(winners[i] == str){
						return true;
					}
				}
			};
    };
    // define a function to clear the board for a new game
    $scope.clickReset = function(){
	    	var allCells = document.getElementsByClassName("cell");
	    	var winNotifDiv = document.getElementById("winNotif");
	    	var j;
				for(j=0;j < allCells.length; ++j){
					allCells[j].innerHTML='';
					//allCells[j]("placed_o"); ---- write method to remove classes without using jQuery
					//allCells[j].removeClass("placed_x");
				}
				//Reset Counter
				$scope.turnCounter = 0;
				//Clear Win notification if present
				winNotifDiv.style.display = "none";
				//Reset the TTT array
				$scope.ticTacToe = [["","",""],["","",""],["","",""]];
		};
		// new click function for gameplay: filling cells form an object-oriented arry rather than manipulating the DOM
		$scope.clickSquare2 = function(cell) {
			var player;
			var boardState = "";
			var winners = ["111000000", "000111000", "000000111", "100100100", "010010010", "001001001", "100010001", "001010100"];
			if (cell.value == ""){
				if ($scope.turnCounter%2 == 0){
					player = "x";
					playerTurn(player);
					$scope.turnCounter++;
				}
				else{
					player = "o";
					playerTurn(player);
					$scope.turnCounter++;
				}
			};
			function playerTurn(player) {
				cell.value = player;
				cell.img = "big_" + player + ".png";
				console.log($scope.ticTacToe);
				placedItems(player);
				if (winCheck(boardState)){
					$scope.win = true;
				}
				else {
					changePlayers();
				}
			};
			function placedItems(player) {
				var i;
				for(i=0;i<$scope.ticTacToe.length;++i){
					var j;
					for(j=0;j<$scope.ticTacToe[i].length;++j){
						if ($scope.ticTacToe[i][j].value == player){
							boardState += "1";
						}
						else {
							boardState += "0";
						}
					}
				}
				console.log(boardState); //for debug
				//winCheck(boardState);
			};
			function winCheck(str) {
				var i;
				for(i=0;i<winners.length;++i){
					if(winners[i] == str){
						console.log ("winner!");
						return true;
					}
				}
				console.log("finish win check")
			};
			function changePlayers() {
				console.log("Entered changePlayers");
				var active = $scope.activePlayer;
				var one = $scope.playerOne.name;
				var two = $scope.playerTwo.name;
				console.log(one);
				console.log(two);
				if (active == one) {
					active = two;
				}
				else {
					active = one;
				}
				$scope.activePlayer = active;
			};
		};
}			

