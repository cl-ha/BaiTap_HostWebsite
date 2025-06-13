var pianoKeys = document.querySelectorAll(".piano-keys .key");
var Volume = document.querySelector(".volume input");
var ShowKey = document.querySelector(".Show");

var allKeys = [];
var audio = new Audio("tunes/a.wav");

function playTune(key) {
  audio.src = "style/tunes/" + key + ".wav";
  audio.play();

  var clickedKey = document.querySelector('[data-key="' + key + '"]');
  clickedKey.classList.add("active");
  setTimeout(function() {
    clickedKey.classList.remove("active");
  }, 150);
}

function changeVolume(e) {
  audio.volume = e.target.value;
}

function HideKeys() {
  pianoKeys.forEach(function(key) {
    key.classList.toggle("hide");
  });
}

function pressedKkey(e) {
  if (allKeys.includes(e.key)) playTune(e.key);
}

ShowKey.addEventListener("click", HideKeys);
Volume.addEventListener("input", changeVolume);
document.addEventListener("keydown", pressedKkey);

pianoKeys.forEach(function(key) {
  allKeys.push(key.dataset.key);
  key.addEventListener("click", function() {
    playTune(key.dataset.key);
  });
});

var nhac = new Audio("./style/Your Lie in April OST - Again.mp3");

function pretty(){
  var backgr = document.getElementById("cont");
  var tendan = document.getElementById("TenDan");
  var backgrbody = document.getElementById("april");
  var tennhac = document.getElementById("Name");

  backgrbody.style.backgroundImage = "url('./img/background.png')";
  backgrbody.style.backgroundSize = "cover";
  backgrbody.style.backgroundRepeat = "no-repeat";
  backgrbody.style.backgroundAttachment = "fixed";
  backgr.style.backgroundImage = "url('./img/pretty_pink.jpg')";
  tendan.style.color = "#E9008C";
  nhac.pause();
  tennhac.innerText = "HK's Piano";
}

function normal(){
  var backgr = document.getElementById("cont");
  var tendan = document.getElementById("TenDan");
  var backgrbody = document.getElementById("april");
  var tennhac = document.getElementById("Name");

  backgrbody.style.backgroundImage = "url('./img/background.png')";
  backgrbody.style.backgroundSize = "cover";
  backgrbody.style.backgroundRepeat = "no-repeat";
  backgrbody.style.backgroundAttachment = "fixed";
  tendan.style.color = "#b2b2b2";
  backgr.style.backgroundImage = "none";
  backgr.style.backgroundColor = "black";
  nhac.pause();
  tennhac.innerText = "HK's Piano";
}

function strong(){
  var backgr = document.getElementById("cont");
  var tendan = document.getElementById("TenDan");
  var backgrbody = document.getElementById("april");
  var tennhac = document.getElementById("Name");

  backgrbody.style.backgroundImage = "url('./img/background.png')";
  backgrbody.style.backgroundSize = "cover";
  backgrbody.style.backgroundRepeat = "no-repeat";
  backgrbody.style.backgroundAttachment = "fixed";
  tendan.style.color = "#FF0000";
  backgr.style.backgroundImage = "url('./img/strong_red.jpg')";
  nhac.pause();
  tennhac.innerText = "HK's Piano";
}

function aiyl(){
  var backgrbody = document.getElementById("april");
  var backgr = document.getElementById("cont");
  var tendan = document.getElementById("TenDan");
  var tennhac = document.getElementById("Name");

  backgr.style.backgroundImage = "url('./style/img/Your Lie in April 2.jpg')";
  backgrbody.style.backgroundSize = "cover";
  backgrbody.style.backgroundImage = "url('./style/img/Your Lie in April.jpg')";
  tendan.style.color = "white";
  nhac.play();
  tennhac.innerText = "Again OST"
}

function Again(){
  if(nhac.play()) nhac.pause();
}