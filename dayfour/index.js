const fs = require("fs");

const puzzleInput = [
  4, 75, 74, 31, 76, 79, 27, 19, 69, 46, 98, 59, 83, 23, 90, 52, 87, 6, 11, 92,
  80, 51, 43, 5, 94, 17, 15, 67, 25, 30, 48, 47, 62, 71, 85, 58, 60, 1, 72, 99,
  3, 35, 42, 10, 96, 49, 37, 36, 8, 44, 70, 40, 45, 39, 0, 63, 2, 78, 68, 53,
  50, 77, 20, 55, 38, 86, 54, 93, 26, 88, 12, 91, 95, 34, 9, 14, 33, 66, 41, 13,
  28, 57, 29, 73, 56, 22, 89, 21, 64, 61, 32, 65, 97, 84, 18, 82, 81, 7, 16, 24,
];

const bingoArray = fs
  .readFileSync("bingoBoards.txt", "utf-8")
  .split('\n')
  .filter(e=>e)
fs.writeFileSync('bingoArray.json', JSON.stringify(bingoArray))

function createBingoCards(bingoArray) {
  let bingoCards = [];
  let cardLength = 5;
  let cardNumber = 1 
  for(i=0; i<bingoArray.length;){
  let card = bingoArray.slice(i, cardLength);
  let cardNumbers = []
  for(c=0; c<card.length; c++){
      let numbers = card[c].match(/\d+/g)
      cardNumbers.push(numbers)
  }
  bingoCards.push({
      cardNumber: cardNumber,
      numbers: cardNumbers.flat()});
  cardLength = cardLength + 5;
      i = i + 5
      cardNumber ++
  }
  return bingoCards
}

function createBingoRows(bingoCards){
    // loops over all the cards
    for(i=0; i<bingoCards.length; i++){
        // gets the numbers of current card
        let numbers = bingoCards[i].numbers
        let startIndex = 0
        let endIndex = 5
        let rowNumber = 1
        let rows = []
        // loops over 5 times to get rows
        for(r=0; r<5; r++){
            let row = {
                row: numbers.slice(startIndex, endIndex),
                rowNumber: rowNumber,
                cardNumber: i+1
            }
            rows.push(row)
            startIndex = startIndex + 5
            endIndex = endIndex + 5
            rowNumber ++
        }

        Object.assign(bingoCards[i], {rows: rows} )
    }
    return bingoCards
}

function createBingoColumns(bingoCards){
    for(i=0; i<bingoCards.length; i++){
        let rows = bingoCards[i].rows
        let columnNumber = 1
        let columns = []
        for(c=0; c<5; c++){
            let numbers = [rows[0].row[c], rows[1].row[c], rows[2].row[c], rows[3].row[c], rows[4].row[c]]
            let column = {
                column: numbers,
                columnNumber: columnNumber,
                cardNumber: i+1
            }
            columns.push(column)
            columnNumber ++
        }
        Object.assign(bingoCards[i], {columns: columns} )
    }
    return bingoCards
}

function puzzleOneSolution(bingoArray){
    
    // for(i=0; i<bingoArray.length; i++){
    //     console.log(bingoArray[i].match(/\d+/g))
    // }

    let bingoCards = createBingoCards(bingoArray)
    bingoCards = createBingoRows(bingoCards)
    bingoCards = createBingoColumns(bingoCards)
    console.log(JSON.stringify(bingoCards[0]))
}

puzzleOneSolution(bingoArray)