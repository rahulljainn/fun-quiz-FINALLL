var readlineSync = require('readline-sync');
var score = 0;
var username = readlineSync.question("what is your name..?")
console.log("hello " + username + " Let's have a fun quiz about bollywood..?")
function play(question, answer) {
  var useranswer = readlineSync.question(question)
  if (answer.toLowerCase() == useranswer.toLowerCase()) {
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
    question: "which  bollywood movie is the watched movie(2021)..? ",
    answer: "Haseen Dillruba"
  }, {
    question: "who is the most famous rapper in bollywood.? ",
    answer: "Badshah"
  }, {
    question: "Most viewed song in bollywood .? ",
    answer: " Daru Badnam"
  }, {
    question: "Best actor in bollywood  .? ",
    answer: "Salman khan"
  }, {
    question: "Best actress in bollywood.? ",
    answer: "Alia bhatt"
  }];

for (i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer)
};
console.log("thanks for playing your Total score is=" + score);


