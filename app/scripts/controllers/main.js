'use strict';

function mainCtrl($scope) {
	//Define obejects for player names
  	$scope.playerOne = null;
  	$scope.playerTwo = null;
  	$scope.activePlayer = null;
  	//Array to create the board
    $scope.ticTacToe = [["","",""],["","",""],["","",""]];
    //define a turn counter to determine next player
    $scope.turnCounter = 0;
    //create a function to clear the welcome/ player name box
    $scope.clearWelcome = function(){
    	
    }
    //logic & gameplay functions
    $scope.clickSquare = function(row, col){
    	var cell = event.target;
    	var player;
    	var boardState = "";
    	var winners = ["111000000", "000111000", "000000111", "100100100", "010010010", "001001001", "100010001", "001010100"];
	    if (this.ticTacToe[row][col] == "") {
	    	if (this.turnCounter%2 == 0) {
	    		player = "x"
	    		cell.innerHTML = "<img src='../resources/images/big_" + player + ".png' />";
	    		cell.className += " placed_" + player
	    		this.ticTacToe[row][col] = player;
	    		placedItems(player);
	    		$scope.activePlayer = this.playerTwo;
	    		console.log(this.activePlayer);
	       	}
	    	else {
	    		player = "o"
	    		cell.innerHTML = "<img src='../resources/images/big_" + player + ".png' />";
	    		cell.className += " placed_" + player
	    		this.ticTacToe[row][col] = player;
	    		placedItems(player);
	    		$scope.activePlayer = this.playerOne;
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
				console.log(boardState);
		};

		function winCheck(str) {
			var i;
			for(i=0;i<winners.length;++i){
				if(winners[i] == str)
					return true;
					alert("winner!");
			}
		};
    };

}