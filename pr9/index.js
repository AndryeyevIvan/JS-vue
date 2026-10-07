// let prices = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// console.log(prices[1]);
//
// prices[1] = 50;
//
// console.log(prices.length);

// let s = 0;
//
// for (let i = 0; i < prices.length; i++) {
//     s += prices[i];
// }
//
// console.log(s);

// function getPrice(prices) {
//     let s = 0;
//
//     for (let i = 0; i < prices.length; i++) {
//         s += prices[i];
//     }
//
//     return s;
// }
//
// let prices = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
//
// console.log(getPrice(prices));

//----------------------------------------------------

// let prices = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// let lim = 50;
//
// function getSomething(prices, lim) {
//     for (let i = 0; i < prices.length; i++) {
//         if (prices[i] > lim) {
//             console.log(prices[i]);
//         }
//     }
// }
//
// getSomething(prices, lim);

//----------------------

// function something() {
//     let numbers = []
//     let count = 0
//
//     count = Number(prompt('Enter number'));
//
//     for (let i = 0; i < count; i++) {
//         numbers.push(Number(prompt('Enter number')));
//     }
//
//     for (let i = 0; i < count; i++) {
//         if (numbers[i] % 2 === 0) {
//             console.log(numbers[i]);
//         }
//     }
// }
//
// something();