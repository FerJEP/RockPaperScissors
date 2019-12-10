//PLAY BUTTON
const playCta = document.querySelector(".play-cta-wrapper");

//PLAYS

const plays = {
  rock: {
    name: "Rock",
    button: document.querySelector(".play-rock"),
    img: "./assets/rock.svg"
  },
  paper: {
    name: "Paper",
    button: document.querySelector(".play-paper"),
    img: "./assets/paper.svg"
  },
  scissors: {
    name: "Scissors",
    button: document.querySelector(".play-scissors"),
    img: "./assets/scissors.svg"
  },
  wrapper: document.querySelector(".plays-wrapper"),

  array: ["Rock", "Paper", "Scissors"]
};

let player = [
  {
    playName: "none",
    playTxt: document.querySelector(".player1-choice-txt"),
    playImg: document.querySelector(".player1-img"),
    score: 0,
    scoreTxt: document.querySelector(".score-player1"),
    scoreBar: document.querySelector(".score-bar1")
  },
  {
    playName: "none",
    playTxt: document.querySelector(".player2-choice-txt"),
    playImg: document.querySelector(".player2-img"),
    score: 0,
    scoreTxt: document.querySelector(".score-player2"),
    scoreBar: document.querySelector(".score-bar2")
  }
];

//SCORE AND VERSUS WRAPPER
const versus = document.querySelector(".versus-wrapper");
const score = document.querySelector(".score-wrapper");
