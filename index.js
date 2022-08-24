// Guess the number
let number = Math.floor((Math.random() * 100) + 1);
let chances = 0;
let guess;

console.log(`this is a guess the number game, you have to enter a number from 1 to 100 and if it matches with computer generated number=> you win`);
guess = prompt(`enter a number from 1 to 100`);
++chances;

do {
  guess = Number.parseInt(guess);

  if (guess > number) {
    console.log(`number is greater than value`);
    guess = prompt(`enter the number again`);
    guess = Number.parseInt(guess);
    ++chances;
    continue;

  } else if (guess < number) {
    console.log(`entered number is smaller than value`);
    guess = prompt(`enter the number again`);
    guess = Number.parseInt(guess);
    ++chances;
    continue;

  }
} while (guess != number);

let score = 100 - chances;
console.log(`congrats you have guessed the right number: `, number, ` and your final score is=> `, score);
