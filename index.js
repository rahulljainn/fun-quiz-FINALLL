var readlineSync = require('readline-sync');
var score = 0;
var username = readlineSync.question("what is your name..?")
console.log("hello " + username + " Let's have a fun quiz..?")
function play(question, answer) {
  var useranswer = readlineSync.question(question)
  if (answer === useranswer) {
    console.log("right!")
    score = score + 1;
  }

  else {
    console.log("wrong!")
    score = score - 1;
  } console.log("your score is=" + score)
}
var questions = [
  {
    question: "what type of music I like..? ",
    answer: "EDM"
  }, {
    question: "who is my fav rapper(hollywood).? ",
    answer: "wiz khalifa"
  }, {
    question: "my fav. song .? ",
    answer: "honest"
  }, {
    question: "my fav.movie  .? ",
    answer: "shershah"
  }, {
    question: "my fav.series.? ",
    answer: "YOU"
  }];

for (i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer)
};
console.log("thanks for playing your Total score is=" + score);


