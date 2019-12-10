plays.rock.button.addEventListener("click", () => {
  player[0].playName = plays.rock.name;
  computerPlay();
  showPlays();
  setWinner();
});
plays.paper.button.addEventListener("click", () => {
  player[0].playName = plays.paper.name;
  computerPlay();
  showPlays();
  setWinner();
});
plays.scissors.button.addEventListener("click", () => {
  player[0].playName = plays.scissors.name;
  computerPlay();
  showPlays();
  setWinner();
});
