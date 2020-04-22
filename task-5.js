let country = prompt("Укажите страну доставки");

let normalizedCountry = country.toLowerCase();
let price;

switch (normalizedCountry) {
  case "china":
    price = 100;
    country = "China";
    alert(`Доставка в ${country} стоит ${price}`);
    break;
  case "chile":
    price = 250;
    country = "Chile";
    alert(`Доставка в ${country} стоит ${price}`);
    break;
  case "australia":
    price = 170;
    country = "Australia";
    alert(`Доставка в ${country} стоит ${price}`);
    break;
  case "india":
    price = 80;
    country = "India";
    alert(`Доставка в ${country} стоит ${price}`);
    break;
  case "jamaica":
    price = 120;
    country = "Jamaica";
    alert(`Доставка в ${country} стоит ${price}`);
    break;
  default:
    alert("В вашей стране нет доставки");
    break;
}
