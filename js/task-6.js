let userInput;
let total = 0;

do {
  userInput = prompt("Введи число");
  total += Number(userInput);
  console.log(userInput);
} while (userInput !== null);

alert(`Total sum is ${total}`);
