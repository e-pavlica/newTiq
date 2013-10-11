"use strict";angular.module("newTicApp",["firebase","ngRoute"]).config(["$routeProvider","$locationProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"mainCtrl",action:null}).otherwise({redirectTo:"/"})}]).directive("wait",function(){return{replace:!0,restrict:"A",link:function(a,b,c){a.$watch(c.wait,function(a){switch(a){case!0:b[0].style.display="none";break;case!1:b[0].style.display="block"}})}}}),angular.module("newTicApp").controller("mainCtrl",["$scope","angularFire",function(a,b){function c(){console.log(a.queue.length),0==a.queue.length&&d(),e()}function d(){console.log("create new game...");var b,c={},d=[],e=3;for(b=0;e>b;++b){var f=[];d.push(f);var g;for(g=0;e>g;++g)f.push({value:"",img:"1x1.png"})}c.ticTacToe=d,c.playerOne={name:""},c.playerTwo={name:""},c.activePlayer="",c.win=!1,c.tie=!1,c.turnCounter=0,c.ready=!1,c.online=!0,c.reset=!1;var h=j.push(c).toString();a.queue.push({gameUrl:h,joined:0})}function e(){console.log("join game....");var c=a.queue[0].gameUrl.slice(36);g=j.child(c),b(g,a,"myGame"),h=g.child("online"),h.onDisconnect().set(!1),a.queue[0].joined+=1,a.queue[0].joined>=2&&f()}function f(){a.queue.splice(0,1)}a.games={},a.myGame,a.queue=[],a.gameUrl="",a.localPlayer="",a.nameEntered=!1;var g,h,i=new Firebase("https://tiqtac.firebaseio.com/queue");b(i,a,"queue",[]);var j=new Firebase("https://tiqtac.firebaseio.com/games");b(j,a,"games").then(function(){c()}),a.clearWelcome=function(){a.nameEntered=!0,""==a.myGame.playerOne.name?a.myGame.playerOne.name=a.localPlayer:(a.myGame.playerTwo.name=a.localPlayer,a.myGame.ready=!0),a.myGame.activePlayer=a.myGame.playerOne.name},a.clickReset=function(){a.myGame.reset=!0,a.nameEntered=!1,a.gameUrl="",c()},a.clickSquare2=function(b){function c(c){b.value=c,b.img="big_"+c+".png",d(c),e(i)?a.myGame.win=!0:a.myGame.turnCounter>=8?g():f()}function d(b){var c;for(c=0;c<a.myGame.ticTacToe.length;++c){var d;for(d=0;d<a.myGame.ticTacToe[c].length;++d)i+=a.myGame.ticTacToe[c][d].value==b?"1":"0"}}function e(a){var b,c;for(c=0;c<j.length;++c){b=0;var d;for(d=0;d<a.length;++d)1==a[d]&&a[d]==j[c][d]&&(b+=1);if(3==b)return!0}}function f(){var b=a.myGame.activePlayer,c=a.myGame.playerOne.name,d=a.myGame.playerTwo.name;b=b==c?d:c,a.myGame.activePlayer=b}function g(){a.myGame.tie=!0}var h,i="",j=["111000000","000111000","000000111","100100100","010010010","001001001","100010001","001010100"];a.localPlayer==a.myGame.activePlayer&&""==b.value&&(0==a.myGame.turnCounter%2?(h="x",c(h),a.myGame.turnCounter++):(h="o",c(h),a.myGame.turnCounter++))}}]);