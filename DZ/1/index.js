console.log("1");

let queue = ["Марія", "Олександра", "Влад", "Іван", "Павло"];

queue.push("Влад");
queue.unshift("Всеволод");
queue.pop();
queue[2] = "Егор";

for (let i = 0; i < queue.length; i++) {
    console.log((i + 1) + ". " + queue[i]);
}

for (const name of queue) {
    console.log(name);
}

queue.forEach(function (name) {
    console.log("Ім'я: " + name + ", Довжина: " + name.length);
});


console.log("\n2");

const prices = [120, 250, 180, 300, 150, 400];

const totalRevenue = prices.reduce(function (sum, price) {
    return sum + price;
    }, 0);
console.log("1) Загальний виторг: " + totalRevenue + " грн");

const expensiveTickets = prices.filter(function (price) {
    return price >= 200;
});
const expensiveTicketsCount = expensiveTickets.length;
console.log("2) Кількість квитків від 200 грн: " + expensiveTicketsCount + " шт.");

const averagePrice = totalRevenue / prices.length;
console.log("3) Середня ціна квитка: " + averagePrice.toFixed(2) + " грн");

let totalRevenueAlt = 0;
let expensiveTicketsCountAlt = 0;

for (let i = 0; i < prices.length; i++) {
    totalRevenueAlt += prices[i];
    if (prices[i] >= 200) {
        expensiveTicketsCountAlt++;
    }
}
