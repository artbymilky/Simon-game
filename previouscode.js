/****************** LOGGED SEQUENCE ********************/
var sequence = [];
/****************** PLAYERS SEQUENCE ********************/
var playersPressedButtons = [];

/****************** REFRESH BY KEY ********************/
$('body').keypress(function () {
  location.reload();
});
/****************** RANDOM NUMBER GENERATOR WITH SOUND EFFECTS ********************/
function random() {
  
  var colors = ['green', 'red', 'yellow', 'blue'];
  var randomColor = colors[randomNumber];
  cssTrigger(randomColor);
  playAudio(randomColor);
  console.log(randomColor);
  sequence.push(randomColor);
}

function nextSequence(){
  randomNumber = Math.floor(Math.random() * 4);
console.log(randomNumber);
}

// sequence.push(randomColor);



/****************** LISTENER/TRIGGER FOR CLICK ********************/
$('#green, #yellow, #red, #blue').on('click', function (event) {
  var pressedButton = event.currentTarget.id;
  cssTrigger(pressedButton);
  playAudio(pressedButton);
  playersPressedButtons.push(pressedButton);
  console.log(pressedButton);
  checker();
});

function checker(nivel) {
  if (sequence[nivel] === playersPressedButtons[nivel]) {
    console.log('LEVEL UP');
  }
}

// function checker(input) {
//   console.log("hi");
// }
//   $('body').click(function (level) {
//     level =
//     if (sequence[level] === input[level]) {
//       console.log('yes');
//     }
//     else
// {
//     console.log("youre shit");

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
  $('h1').text('Game Over, Press Any Key to Restart');
  playAudio('wrong');
  $('body').addClass('game-over');
  setTimeout(function () {
    $('body').removeClass('game-over');
  }, 200);
}

random();
checker(playersPressedButtons);
