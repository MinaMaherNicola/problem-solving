// INPUT: String s: a time in 12 hour format '12:01:00AM'
// OUTPUT: String S: a time in 24 hour format '00:01:00'

const prompt = require('prompt-sync')();

let time12 = prompt();

const timeConversion = (time) => {
  time = time.split(':');
  const meridiem = time[2].slice(2);

  if (meridiem === 'AM') {
    if (parseInt(time[0]) === 12) {
      time12 = `00:${time[1]}:${time[2].slice(0, 2)}`;
      return time12;
    }
    return time12.slice(0, 8);
  } else {
    if (time[0] === '12') {
      time12 = `${time[0]}:${time[1]}:${time[2].slice(0, 2)}`;
      return time12;
    } else {
      time12 = `${(parseInt(time[0]) + 12).toString()}:${time[1]}:${time[2].slice(0, 2)}`;
      return time12;
    }
  }
}

console.log(timeConversion(time12));