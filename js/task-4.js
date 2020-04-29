let credits = 23580;
const pricePerDroid = 3000;

let message;
let totalPrice;

const droidRequest = prompt("Какое количество дроидов желаете приобрести?");

if (droidRequest === null) {
  console.log((message = "Отменено пользователем"));
} else {
  totalPrice = Number(droidRequest) * pricePerDroid;
}

if (totalPrice <= credits) {
  console.log(
    (message = `Вы приобрели ${droidRequest} дроидов, на счету у вас оставлось ${
      credits - totalPrice
      }`)
  );
} else if (totalPrice > credits) {
  console.log((message = "Недостаточно средств на счету!"));
}
