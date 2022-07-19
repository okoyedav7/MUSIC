/*var numberOfDrums = document.querySelectorAll('.wow').length;
var musicNo = Math.floor(Math.random() * 4) + 1;

for(var i = 0;  i < numberOfDrums; i++){
  document.querySelectorAll('.wow')[i].addEventListener('click', () => {

    var audio = new Audio("music/music" + musicNo + ".mp3");
    audio.play();
  }); 

};
*/

const plenty = document.querySelector('.plenty').addEventListener('click', () => {
  var audio = new Audio('music/plenty.mp3');
  audio.play();
});


const madara = document.querySelector('.madara').addEventListener('click', () => {
  var audio = new Audio('music/madara.mp3');
  audio.play();
});

const collapse = document.querySelector('.collapse').addEventListener('click', () => {
  var audio = new Audio('music/collapse.mp3');
  audio.play();
})

const fireboy = document.querySelector('.fireboy').addEventListener('click', () => {
  var audio = new Audio('music/fireboy.mp3');
  audio.play();
});

const korra = document.querySelector('.korra').addEventListener('click', () => {
  var audio = new Audio('music/korra.mp3');
  audio.play();
});

const shinobi = document.querySelector('.shinobi').addEventListener('click', () => {
  var audio = new Audio('music/shinobi.mp3');
  audio.play();
});


function stop(){
  return
}


