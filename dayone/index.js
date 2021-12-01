/// plug in an array of comma seperated numbers as puzzledata
const puzzleData = []

function solvePuzzle1(puzzleData) {
  var amountChanged = 0;
  var amountUnchanged = 0;
  for (i = 0; i < puzzleData.length; i++) {
    let currentNumber = puzzleData[i];
    let previousNumber = puzzleData[i - 1];
    if (i > 0) {
      if (currentNumber > previousNumber) {
        amountChanged++;
      } else {
        amountUnchanged++;
      }
    } else {
      amountUnchanged++;
    }
  }
  console.log('Answer to puzzle 1')
  console.log(`Total amount changed = ${amountChanged}`);
  console.log(`Total amount unchanged = ${amountUnchanged}`);
}

function solvePuzzle2(puzzleData) {
  var windowNumber1 = 0;
  var windowNumber2 = 1;
  var windowNumber3 = 2;
  var previousWindow = 0;
  var windowsIncreased = 0;
  for (i = 0; i < puzzleData.length; i++) {
    var currentWindow =
      puzzleData[windowNumber1] +
      puzzleData[windowNumber2] +
      puzzleData[windowNumber3];
    if (previousWindow === 0) {
      windowNumber1++;
      windowNumber2++;
      windowNumber3++;
      previousWindow = currentWindow;
    } else {
      if (currentWindow > previousWindow) {
        windowsIncreased++;
        windowNumber1++;
        windowNumber2++;
        windowNumber3++;
        previousWindow = currentWindow;
      } else {
        windowNumber1++;
        windowNumber2++;
        windowNumber3++;
        previousWindow = currentWindow;
      }
    }
  }
  console.log("Answer to puzzle two");
  console.log(`Number of windows increased ${windowsIncreased}`);
}
solvePuzzle1(puzzleData);
solvePuzzle2(puzzleData);
