/// Turned puzzle data into an array of json objects
/// Example:   [{ direction: "forward", amount: 5 }......]
let puzzleData = [];
var horizontal = 0;
var depth = 0;
var aim = 0;

function move(direction, amount) {
  console.log(`Moving ${direction} for ${amount}`);
  if (direction === "forward") {
    horizontal = horizontal + amount;
  }
  if (direction === "down") {
    depth = depth + amount;
  }
  if (direction === "up") {
    depth = depth - amount;
  }
}

function puzzleOneSolution(puzzleData) {
  for (i = 0; i < puzzleData.length; i++) {
    let direction = puzzleData[i].direction;
    let amount = puzzleData[i].amount;
    move(direction, amount);
  }
  console.log(`Total horizontal ${horizontal}`);
  console.log(`Total depth ${depth}`);
  let answer = horizontal * depth;
  console.log(`Answer ${answer}`);
  return;
}

function moveWithAim(direction, amount) {
  console.log(`Moving ${direction} for ${amount}`);
  if (direction === "forward") {
    horizontal = horizontal + amount;
    depth = depth + aim * amount;
  }
  if (direction === "down") {
    aim = aim + amount;
  }
  if (direction === "up") {
    aim = aim - amount;
  }
}

function puzzleTwoSolution(puzzleData) {
  for (i = 0; i < puzzleData.length; i++) {
    let direction = puzzleData[i].direction;
    let amount = puzzleData[i].amount;
    moveWithAim(direction, amount);
  }
  console.log(`Total horizontal ${horizontal}`);
  console.log(`Total depth ${depth}`);
  let answer = horizontal * depth;
  console.log(`Answer ${answer}`);
  return;
}

// puzzleOneSolution(puzzleData);

// puzzleTwoSolution(puzzleData);
