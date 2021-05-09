const prompt = require('prompt-sync')();

const numberOfGames = prompt() * 1;
let scores = prompt().split(' ');

scores = scores.map(score => score * 1);

const game = {
  gameNo: 0,
  score: scores[0],
  high: scores[0],
  low: scores[0]
};

let highCounter = 0;
let lowCounter = 0;

for (let i = 0; i < numberOfGames; i++) {
  game.gameNo = i;
  game.score = scores[game.gameNo];

  if (game.high < game.score) {
    highCounter++;
    game.high = game.score;
  }
  if (game.low > game.score) {
    lowCounter++;
    game.low = game.score;
  }
}

console.log(highCounter, lowCounter);
