var buttonArr = document.querySelectorAll(".drum");
for (let i = 0; i < buttonArr.length; i++) {
  buttonArr[i].addEventListener("click", function () {
    let buttonName = this.textContent;
    checkKey(buttonName);
    buttonAnimation(buttonName);
  });
}

document.addEventListener("keypress", function (event) {
  checkKey(event.key);
  buttonAnimation(event.key);
});

function checkKey(char) {
  switch (char) {
    case "w":
      let tom1 = new Audio("./sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      let tom2 = new Audio("./sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      let tom3 = new Audio("./sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      let tom4 = new Audio("./sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      let snare = new Audio("./sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      let crash = new Audio("./sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      let kick = new Audio("./sounds/kick-bass.mp3");
      kick.play();
      break;
    default:
      console.log(buttonName);
      break;
  }
}

function buttonAnimation(currentKey) {
  var currentButton = document.querySelector(`.${currentKey}`);
  currentButton.classList.add("pressed");

  setTimeout(function () {
    currentButton.classList.remove("pressed");
  }, 100);
}
