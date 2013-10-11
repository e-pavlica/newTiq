
angular.module('newTicApp')
  .controller('mainCtrl', function ($scope, angularFire) {



	$scope.games= {};
	$scope.myGame;
	$scope.queue = [];
	$scope.gameUrl = "";
	$scope.localPlayer = "";
	$scope.nameEntered = false;

	//set a var that will relate to the game being played
	var firebGame;
	
	//set a var for the connection 
	var connected;

	//set a var for the queue and connect it to firebase
	var q = new Firebase("https://tiqtac.firebaseio.com/queue");
	angularFire(q, $scope, "queue", []);

	//set a var for ALL games, and connect to firebase
	var db = new Firebase("https://tiqtac.firebaseio.com/games");
	angularFire(db, $scope, "games").then (function() {
		checkQ();
		});

	function checkQ() {

		console.log($scope.queue.length);
		if($scope.queue.length == 0){
			newGame();
		}
		joinGame();
	}

	function newGame() {
		console.log('create new game...');

		//create an object that will hold all data for the game
		var gameBoard = {};

		//prepare the grid
		var gamePrep = [];
		var gridWidth = 3;
		var row;
		for (row=0;row<gridWidth;++row){
			var newObj = [];
	  		gamePrep.push (newObj);
	  		var col;
	  	  	for (col=0; col<gridWidth; ++col){
	  		newObj.push({value:"", img:"1x1.png"});
	  		};
	  	};

	  	//add the grid to the gameboard object
	  	gameBoard.ticTacToe = gamePrep;

	  	//add properties for players, win, states, and turn counter
	  	gameBoard.playerOne = {name:""};
	  	gameBoard.playerTwo = {name:""};
	  	gameBoard.activePlayer = "";
	  	gameBoard.win = false;
	  	gameBoard.tie = false;
	  	gameBoard.turnCounter = 0;
	  	gameBoard.ready = false;
	  	gameBoard.online = true;
	  	gameBoard.reset = false;


	  	//push the new game to firebase
	  	var x = db.push(gameBoard).toString();
	  	//add the new game to the queue for another player to pick up
	  	$scope.queue.push({gameUrl:x,joined:0});
	};

	function joinGame() {
		console.log('join game....');
		//get the object ID of the first game in the queue
		var gameUrl = $scope.queue[0].gameUrl.slice(36);
		//setup angularfire to connect to game
		firebGame = db.child(gameUrl);
		angularFire(firebGame, $scope, "myGame" );
		//set a var to notify when the opponent disconnects
		connected = firebGame.child('online');
		//notify users if a player disconnects:
		connected.onDisconnect().set(false);
		//
		$scope.queue[0].joined += 1;
		if ($scope.queue[0].joined >=2)
			removeFromQueue();
	};

	function removeFromQueue() {
		$scope.queue.splice(0,1);
	};
	

    //create a function to clear the welcome/ player name box
    $scope.clearWelcome = function(){

    	$scope.nameEntered = true;
    	if ($scope.myGame.playerOne.name == ""){
    		$scope.myGame.playerOne.name = $scope.localPlayer;
    	} else {
    		$scope.myGame.playerTwo.name = $scope.localPlayer;
    		$scope.myGame.ready = true;
    	}

    	$scope.myGame.activePlayer = $scope.myGame.playerOne.name;
    };

	// define a function to clear the board for a new game
    $scope.clickReset = function(){
    	// $scope.myGame.reset = true;
   		$scope.myGame.reset = true;
		$scope.nameEntered = false;
		$scope.gameUrl = "";
		// firebGame.set($scope.myGame);
		// firebGame.update();
		// firebGame.unauth();
		// db.unauth();
		// $scope.nameEntered = false;
		// $scope.gameUrl = "";
		// angularFire(db, $scope, "games").then (function() {
		$scope.myGame = undefined;
		checkQ();
		// })
	};


	// new click function for gameplay: filling cells form an object-oriented arry rather than manipulating the DOM
	$scope.clickSquare2 = function(cell) {
		var player;
		var boardState = "";
		var winners = ["111000000", "000111000", "000000111", "100100100", "010010010", "001001001", "100010001", "001010100"];
		if ($scope.localPlayer == $scope.myGame.activePlayer && cell.value == ""){
			if ($scope.myGame.turnCounter%2 == 0){
				player = "x";
				playerTurn(player);
				$scope.myGame.turnCounter++;
			}
			else{
				player = "o";
				playerTurn(player);
				$scope.myGame.turnCounter++;
			}
		};
		function playerTurn(player) {
			cell.value = player;
			cell.img = "big_" + player + ".png";
			// console.log($scope.myGame.ticTacToe);
			placedItems(player);
			if (winCheck(boardState)){
				$scope.myGame.win = true;
			}
			else {
				if($scope.myGame.turnCounter >= 8)
					showTie();
				else
					changePlayers();
			}
		};
		function placedItems(player) {
			var i;
			for(i=0;i<$scope.myGame.ticTacToe.length;++i){
				var j;
				for(j=0;j<$scope.myGame.ticTacToe[i].length;++j){
					if ($scope.myGame.ticTacToe[i][j].value == player){
						boardState += "1";
					}
					else {
						boardState += "0";
					}
				}
			}
			//console.log(boardState); //for debug
			//winCheck(boardState);
		};
		function winCheck(str) {
			// var winHelper;
			// angular.forEach(winners, function(winner, key){
			// 	var j;
			// 	for(j=0;j<winner.length;++j){
			// 		winHelper = 0;
			// 		if(str[j] == winner[j]){
			// 			winHelper += 1;
			// 		};
			// 	console.log(winner + ':' + winHelper);
			// 	};
			// });
			var winHelper;
			var i;
			for(i=0;i<winners.length;++i){
				winHelper = 0;
				var j;
				for(j=0;j<str.length;++j){
					if(str[j] == 1 && str[j] == winners[i][j]){
						winHelper += 1;
					};
				};
			// console.log(winners[i] + ':' + winHelper)
			if (winHelper == 3) {
				return true;
			};
			};
		};

		function changePlayers() {
			// console.log("Entered changePlayers");
			var active = $scope.myGame.activePlayer;
			var one = $scope.myGame.playerOne.name;
			var two = $scope.myGame.playerTwo.name;
			if (active == one) {
				active = two;
			}
			else {
				active = one;
			}
			$scope.myGame.activePlayer = active;
		};
		function showTie(){
			$scope.myGame.tie = true;
		};
	};
});			

