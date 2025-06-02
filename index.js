let soundURLAr = {
  w: "sounds/tom-1.mp3",
  a: "sounds/tom-2.mp3",
  s: "sounds/tom-3.mp3",
  d: "sounds/tom-4.mp3",
  j: "sounds/snare.mp3",
  k: "sounds/crash.mp3",
  l: "sounds/kick-bass.mp3",
};

document.querySelectorAll(".set button").forEach((button) => {
  button.addEventListener("click", () => {
    playSound([button.innerHTML]);
    styleButton(button);
  });
});

addEventListener("keydown", (event) => {
  let key = event.key.toLowerCase();
  playSound(key);

  let button = document.querySelector(`.${key.toLowerCase()}`);
  styleButton(button);
});

let playSound = function (key) {
  if (soundURLAr[key]) {
    let audio = new Audio(soundURLAr[key]);
    audio.play();
  }
};

let styleButton = function (button) {
  if (button) {
    button.style.color = "white";
    button.classList.add("pressed");

    setTimeout(() => {
      button.classList.remove("pressed");
      button.style.color = "#da0463";
    }, 100);
  }
};
