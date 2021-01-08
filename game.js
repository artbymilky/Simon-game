var userClickedPattern = [];

var gamePattern = [];

var sequence = [];

var playersPressedButtons = [];

$("h1").on("click",function()
{
nextSequence();
})
/****************** GAME CHOSEN COLOR ********************/
function nextSequence() {
  userClickedPattern = [];
  level++;
  var randomNumber = Math.floor(Math.random() * 4);
  var buttonColors = ['green', 'red', 'yellow', 'blue'];
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  cssTrigger(randomChosenColor);
  playAudio(randomChosenColor);
  
  $('h1').text('Level ' + level);
}
/****************** USER CHOSEN COLOR ********************/
$('#green, #yellow, #red, #blue').on('click', function (event) {
  var userChosenColor = event.currentTarget.id;
  userClickedPattern.push(userChosenColor);
  playAudio(userChosenColor);
  cssTrigger(userChosenColor);
  checkAnswer(userClickedPattern.length);
});

$('body').keypress(function () {
  nextSequence();
});

var level = 0;

function checkAnswer(currentLevel) {
  if (userClickedPattern[currentLevel - 1] === gamePattern[currentLevel - 1]) {
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    gameOver();
  }
}

/****************** SOUND FUNCTION ********************/
function playAudio(input) {
  var audio = new Audio('sounds/' + input + '.mp3');
  audio.play();
}
/****************** CSS FUNCTION ********************/
function cssTrigger(input) {
  $('#' + input).addClass('pressed');
  setTimeout(function () {
    $('#' + input).removeClass('pressed');
  }, 100);
}
/****************** GAME-OVER FUNCTION ********************/
function gameOver() {
  $('h1').text('Game Over, Click Me or Press Any Key to Restart');
  playAudio('wrong');
  $('body').addClass('game-over');
  setTimeout(function () {
    $('body').removeClass('game-over');
  }, 200);
  startOver();
}

function startOver() {
  level = 0;
  gamePattern = [];
  userClickedPattern = [];
}