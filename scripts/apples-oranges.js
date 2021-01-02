const prompt = require('prompt-sync')();

// INPUTS
// s: int, starting point of Sam's house location
// t: int, ending point of Sam's house location
// a: int, location of apple tree
// b: int, location of orange tree
// apples: int array, distance at which each apple falls from the tree
// oranges: int array, distance at which each apple falls from the tree

let houseStartingPoint, houseEndingPoint, applesTreeLoc, orangeTreeLoc, applesNum, orangesNum;
let applesLoc = [], orangesLoc = [];

input = prompt().split(' ');
houseStartingPoint = parseInt(input[0]);
houseEndingPoint = parseInt(input[1]);

input = prompt().split(' ');
applesTreeLoc = parseInt(input[0]);
orangeTreeLoc = parseInt(input[1]);

input = prompt().split(' ');
applesNum = parseInt(input[0]);
orangesNum = parseInt(input[1]);

input = prompt().split(' ');
for (let i = 0; i < applesNum; i++) {
    applesLoc.push(parseInt(input[i]));
}

input = prompt().split(' ');
for (let i = 0; i < orangesNum; i++) {
    orangesLoc.push(parseInt(input[i]));
};

const counter = (startingPoint, endingPoint, applesTree, orangesTree, applesDis, orangesDis) => {
    applesCounter = 0;
    orangesCounter = 0;
    for (let i = 0; i < applesDis.length; i++) {
        applesDis[i] += applesTree;
        if (applesDis[i] >= startingPoint && applesDis[i] <= endingPoint) {
            applesCounter++;
        }
    }
    for (let i = 0; i < orangesDis.length; i++) {
        orangesDis[i] += orangesTree;
        if (orangesDis[i] >= startingPoint && orangesDis[i] <= endingPoint) {
            orangesCounter++;
        }
    }

    console.log(applesCounter);
    console.log(orangesCounter);
}

counter(houseStartingPoint, houseEndingPoint, applesTreeLoc, orangeTreeLoc, applesLoc, orangesLoc);



// console.log(`Starting: ${houseStartingPoint}, Ending: ${houseEndingPoint}, ApplesLoc: ${applesTreeLoc}, OrangesLoc: ${orangeTreeLoc}, Apples#: ${applesNum}, Oranges: ${orangesNum}, ApplesTravel: ${applesLoc}, OrangeTravel: ${orangesLoc}`)