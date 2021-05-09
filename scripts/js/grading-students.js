// grades in range from 0 to 100
// any grade less than 40 is a failing grade
// Rounding rules: #! if the diff between the grade and the next multiple of 5 is less than 3, round grade up to the next multiple of 5
// 2# if the value of grade is less than 28, no rounding occurs as the reslut will be failing grade

// EX: 84 round to 85 --------- 29 does not round ------------ 57 does not round (60 - 57 is 3 or higher)

// INPUT: array of grades before rounding
// OUTPUT: array of grades after rounding

const prompt = require('prompt-sync')();

const size = prompt();
let grades = []

for (let i = 0; i < size; i++) {
  grades.push(parseInt(prompt()));
}

const gradesRounder = (grades) => {
  for (let i = 0; i < size; i++) {
    if (grades[i] < 38) {
      continue;
    }
    else if ((grades[i] + 2) % 5 === 0) {
      grades[i] += 2;
    } else if ((grades[i] + 1) % 5 === 0) {
      grades[i] += 1;
    }
  }
  return grades;
}

const finalGrades = gradesRounder(grades);

for (let i = 0; i < size; i++) {
  console.log(finalGrades[i]);
}