function winner() {
  if (player[0].playName === "Rock" && player[1].playName === "Scissors") {
    //console.log("PLAYER WINS rock");
    return 0;
  } else if (player[0].playName === "Papper" && player[1].playName === "Rock") {
    //console.log("PLAYER WINS paper");
    return 0;
  } else if (
    player[0].playName === "Scissors" &&
    player[1].playName === "Paper"
  ) {
    //console.log("PLAYER WINS scissors");
    return 0;
  } else if (player[0].playName === player[1].playName) {
    //console.log("TIE");
    return 2;
  } else {
    //console.log("COMPU WINS");
    return 1;
  }
}

function computerPlay() {
  let random_play = Math.floor(Math.random() * 3);
  player[1].playName = plays.array[random_play];
  //console.log("COMPU: " + player[1].playName);
}

function showPlays() {
  for (i of player) {
    i.playTxt.innerHTML = i.playName;
    i.playImg.src = plays[i.playName.toLowerCase()].img;
  }
}

function setWinner() {
  let who = winner();

  if (who === 0 || who == 1) {
    player[who].score++;
    player[who].scoreTxt.innerHTML = player[who].score;
  }
}

/*function setPlays(e) {
  if (e.target.currentSrc === plays.rock.img) {
    
  } else if (e.target.currentSrc === plays.paper.img) {
  
  } else {
  
  }
}*/
