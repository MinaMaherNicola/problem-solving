const prompt = require('prompt-sync')();

const arrSize = prompt();
let candlesHeight = prompt();
candlesHeight = candlesHeight.split(' ');
for (let i = 0; i < arrSize; i++) {
  candlesHeight[i] = parseInt(candlesHeight[i]);
}

const birthdayCakeCandles = candles => {
  let maxHolder = candles[0];
  let maxCounter = 0;
  for (let i = 0; i < candles.length; i++) {
    if (maxHolder === candles[i]) {
      maxCounter++;
    }
    if (maxHolder < candles[i]) {
      maxCounter = 1;
      maxHolder = candles[i];
    }
  }
  return maxCounter;
}

console.log(birthdayCakeCandles(candlesHeight));
// new nlienrfweingft'wel;gmfs;
