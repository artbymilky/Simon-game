/****************** REFRESH BY KEY ********************/
$('body').keypress(function () {
  location.reload();
});
/****************** RANDOM NUMBER GENERATOR WITH SOUND EFFECTS ********************/
function random() {
  randomNumber = Math.floor(Math.random() * 4);
  var colors = ['green', 'red', 'yellow', 'blue'];
  var randomColor = colors[randomNumber];
  sequence.push(randomColor);
  cssTrigger(randomColor);
  playAudio(randomColor);
  console.log(randomColor);
}

/****************** LOGGED SEQUENCE ********************/
var sequence = [];
/****************** PLAYERS SEQUENCE ********************/
var playersPressedButtons = [];
/****************** LISTENER/TRIGGER FOR CLICK ********************/
$('#green, #yellow, #red, #blue').on('click', function (event) {
  var pressedButton = event.currentTarget.id;
  cssTrigger(pressedButton);
  playAudio(pressedButton);
  playersPressedButtons.push(pressedButton);
});
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


function checker() {
  
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
// }
//   });
//  for (let i = 0; index < sequence.length; index++) {
//      const element = sequence[i];
     
 