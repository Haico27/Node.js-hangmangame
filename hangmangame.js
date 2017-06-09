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
