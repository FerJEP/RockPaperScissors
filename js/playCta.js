playCta.addEventListener("click", () => {
  //Mid toggle
  versus.classList.toggle("no-active");
  score.classList.toggle("no-active");
  for (i of player) {
    i.playTxt.classList.toggle("no-active");
  }
  //bot toggle
  playCta.classList.toggle("no-active");
  plays.wrapper.classList.toggle("no-active");
});
