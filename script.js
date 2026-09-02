let productName = prompt("Enter your product name");
let productPrice = Number(prompt("Enter your product price"));
let quantity = Number(prompt("Enter your quantity"));
let deliveryPrice = Number(prompt("Enter your delivery price"));

let totalCost = productPrice * quantity + deliveryPrice;
console.log(`Загальна вартість за товар: ${productName} становить ${totalCost}грн.`);

alert("Товар: " + productName);

let pecent = Number(prompt("Enter your pecent"));

console.log(totalCost - (totalCost * pecent / 100));