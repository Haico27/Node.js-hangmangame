/*
Rules of the hangmangame:
  - the computer selects a random word (in this case, we enter a word when starting the game)
  - the player guesses letters
  - guess correct and the guessed letters of the word are shown
  - guess incorrectly 6 times and the player loses
*/

//Step one: write a function that takes a word, and a list of guessed letters, and returns count of failed guesses
function wrongGuessCount(word, guesses) {
  //filter the wrong guesses from all the guesses
  //string.indexOf() will return -1 if letter is not in the string
  return guesses.filter( letter => word.indexOf(letter) === -1 ).length
}

console.log("test wrong guesses: ", wrongGuessCount("hello", [ "e", "d", "x", "o" ]))

//Step two: write a function that takes a word and a list of guesses, and returns a string with dashes or letters with spaces in between
function showGuess(word, guesses) {
  var wordInLetters = word.split("")// returns an array of letters -> ["h", "e", "l", "l", "o"]
  var dashesLetters = wordInLetters.map(letter => guesses.indexOf(letter) === -1 ? "_" : letter ) //returns an array of the letters, with a dash on the place of the letters that are not yet guessed

  return dashesLetters.join(" ") //transforms the array of strings into 1 string again, with a space in between the letters
}

console.log(showGuess("hello", [ "l" ]))
console.log("test show guess 1: ", showGuess("hello", [ "l" ]) === "_ _ l l _")
console.log(showGuess("hello", [ "l", "e", "d" ]))
console.log("test show guess 2: ", showGuess("hello", [ "l", "e", "d" ]) === "_ e l l _")


//Step three: write a function that takes a word and a list of guesses, and returns if the player has won or not
function isWinner(word, guesses) {
  //player is winner when array of guesses contains all the letters of the array of word.split
  var wordArray = word.split("") //returns array of letters of the word
  return wordArray.filter( letter => guesses.indexOf(letter) === -1 ).length === 0 //the length of the array with guessed letters that are not in the word is 0
}

console.log("test winner 1: ", isWinner("hello", [ "h", "e", "d", "q", "l", "a", "o" ]) )
console.log("test winner 2: ", isWinner("hello", [ "e", "d" ]) )


//Step four: write a function that takes a word and a list of guesses and checks if the player lost, won, or asks for the next letter


//to read from the console
const readline = require('readline')
const rl = readline.createInterface({ input:process.stdin, output:process.stdout })

function nextWord(word, guesses) {
  //check if lost --> when wrongGuessCount >= 6
  if (wrongGuessCount(word, guesses) >= 6)
    return console.log("You've lost!")

    //check if won
  if (isWinner(word, guesses))
    return console.log("Well done, you are the winner!!")


  console.log(showGuess(word, guesses))


  //ask for the next letter
  rl.question("next letter? ", answer => {
    console.log("player wrote: ", answer)

    //function calls itself to keep the game going until player has lost or won. Answer.trim() removes whitespaces from the answer, answer[0] gets the first letter of the answer as a string. So only the first entered letter will count as an answer.
    nextWord(word, guesses.concat(answer.trim()[0]))

  })
}

nextWord( "switzerland", [] )
