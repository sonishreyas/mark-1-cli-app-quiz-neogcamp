var readlineSync = require('readline-sync');
var score = 0;

var highscore = [
  {
    name:"Sanket",
    score: 3
  },
  {
    name: "Mohit",
    score: 2
  }
];

var questions = [
  {
    question: "What is my Favourite Food? ",
    answer: "Chicken"
  },
  {
    question: "My Favourite IPL Team?",
    answer: "CSK"
  },
  {
    question: "Where do I live ?",
    answer: "Pune"
  },
  {
    question: "Which city was I born ?",
    answer: "Dhule"
  },
  {
    question: "Who's my Favourite Superhero ?",
    answer: "Spiderman"
  }  
];

function welcome(){
  var username = readlineSync.question("What's your name? ");
  console.log("Welcome "+ username + " let's see if you know Shreyas");
}

function play(question,answer)  {
  var userAnswer = readlineSync.question(question);

  if(userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("right!");
    score += 1;
  } else  {
    console.log("wrong!");
  }
  console.log("Current Score: ", score);
  console.log("************");
}

function game() {
  for (var i=0; i< questions.length;i++)  {
    var currQues = questions[i];
    play(currQues.question,currQues.answer);
  }
}

function showScores() {
  console.log("YAY! You Scored: ", score);
  console.log("Check out the high scores");

  highscore.map(score => console.log(score.name, " : ", score.score))
}

welcome();
game();
showScores();