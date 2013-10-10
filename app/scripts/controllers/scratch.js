
function checkGames() {
	for(i=0;i<games.length;++i){
		if(games[i].open < 2){
			joinGame(i);
		}
		else {
			newGame();
			checkGames();
		}
	}
};

function newGame() {
	//create an object that will hold all data for the game
	var gameBoard = {};
	//prepare the grid
	var gamePrep = [];
	var gridWidth = 3;
	for (row=0;row<gridWidth;++row){
		var newObj = [];
  		gamePrep.push (newObj);
  	  	for (col=0; col<gridWidth; ++col){
  		newObj.push({value:"", img:"1x1.png"});
  		};
  	};
  	//add the grid to the gameboard object
  	gameBoard.ticTacToe = gamePrep;
  	//add properties for players, win, states, and turn counter
  	gameBoard.playerOne = {name:""};
  	gameBoard.playerTwo = {name:""};
  	gameBoard.activePlayer = null;
  	gameBoard.win = false;
  	gameBoard.tie = false;
  	gameBoard.turnCounter =0;
  	gameBoard.open = 0;

  	//push the new game to the games array
  	$scope.games.push(gameBoard);
};

function joinGame(index) {
	$scope.myGame = $scope.games[index];
	$scope.games[index].open += 1;
}













function checkQ() {
	if(queue == {})
		newGame();
	else
		joinGame();
}