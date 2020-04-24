let userInput;
let total = 0;



while (true) {
  userInput = prompt("Введи число");

  if (userInput === null) {
    break;
  }

  userInput = Number(userInput);
  const isNumber = Number.isNaN(userInput)

  if (isNumber) {
    alert('It is not a number, try again')
    continue
  }
  total += userInput
}

alert(`Total sum is ${total}`);