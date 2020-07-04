var p1Score = 0;
var p2Score = 0;
var currentPlayer = 1;
var randButtonId;
setBoard();

function checkGameOver(){
  if (p1Score == 10) {
    setScreen("gameOver_screen");
    showElement("player1Win_label");
    hideElement("player2Win_label");
  } else if ((p2Score == 10)) {
    setScreen("gameOver_screen");
    showElement("player2Win_label");
    hideElement("player1Win_label");
  }
}

function updateScoreBy(amt){
  if (currentPlayer == 1){
    p1Score = p1Score + amt;
  } else {
    p2Score = p2Score + amt;
  }
  setText("score1_label", p1Score);
  setText("score2_label", p2Score);
}

function switchPlayer (){
  if (currentPlayer==1){
    currentPlayer =2;
    showElement("player2_highlight");
    hideElement("player1_highlight");
  }else{
    currentPlayer = 1;
    showElement("player1_highlight");
    hideElement("player2_highlight");
  }
  console.log("current player is: "+currentPlayer);
}

function setBoard(){
var R = randomNumber(0,235);
var G = randomNumber(0,235);
var B = randomNumber(0,235);
var color = rgb(R,G,B);
R = R+20;
G = G+20;
B = B+20;
var diffColor = rgb(R,G,B);
randButtonId = "button"+randomNumber(1,4);

setProperty("button1", "background-color", color);
setProperty("button2", "background-color", color);
setProperty("button3", "background-color", color);
setProperty("button4", "background-color", color);
setProperty(randButtonId, "background-color", diffColor);
console.log("correct one is: "+randButtonId);
}
  

function checkCorrect(buttonId){
  console.log("Checking: "+buttonId);
    if( buttonId == randButtonId ){
    console.log("You got it right!");
    updateScoreBy(1);
  } else {
    console.log("WRONG");
    updateScoreBy(-3);
  }
  setBoard();
  switchPlayer();
  checkGameOver();
}

onEvent("button1","click",function(){
  checkCorrect("button1");
});

onEvent("button2","click",function(){
  checkCorrect("button2");
});

onEvent("button3","click",function(){
  checkCorrect("button3");
});

onEvent("button4","click",function(){
  checkCorrect("button4");
});


