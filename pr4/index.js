// for (let i = 1; i <= 5; i++) {
//     console.log(i);
// }

// for (let i = 1; i <= 5; i + 2) {
//     console.log(i);
// }

// let sum = 0;
//
// for (let i = 0; i < 10; i++) {
//     sum += i;
// }
// console.log(sum);

//1------

// let s = 0;
//
// for (let i = 1; i <= 50; i += 2) {
//     s += i;
// }
// console.log(s);

// let count = 0;
//
// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0) {
//         count ++;
//     }
// }
//
// console.log(count)

// for (let i = 1; i <= 100; i++) {
//     if (i > 20 && i % 4 === 0 && i % 6 === 0) {
//         console.log(i);
//         break;
//     }
// }

// for (let i = 1; i <= 30; i++) {
//     if (i % 5 === 0) {
//         continue;
//     }
//
//     console.log(i);
// }

// let a = Number(prompt("how mach students"));
// let sum = 0;
// let av = 0;
// let high = 0;
// let normal = 0;
//
// for (let i = 0; i < a; i++) {
//     let m = Number(prompt("mark"));
//
//     while (m <= 0 || m > 12) {
//         m = Number(prompt("error"));
//     }
//
//     sum += m;
//
//     if (m > 9) {
//         high++;
//     } else if (m > 6) {
//         normal++;
//     }
// }
//
// console.log(high);
// console.log(normal);
// console.log(sum);
// av = sum / a;
// console.log(av);

// 2 --------------------

let students = Number(prompt("How many students?"));

// Зручніше - while, але, якщо потрібно for:

for (let i = 0; i < 1; i++) {
    if (students < 0) {
        students = Number(prompt("Error! How many students?"));
        i -= 1;
    }
}

let avg = 0;
let high = 0;
let normal = 0;
let low = 0;
let min = 100;
let max = 0;
let sum = 0;
let first = -1;

for (let i = 0; i < students; i++) {
    let mark = Number(prompt("Mark?"));

    // Зручніше - while, але, якщо потрібно for:

    for (let i = 0; i < 1; i++) {
        if (mark < 0 || mark > 100) {
            mark = Number(prompt("Error! Mark?"));
            i -= 1;
        }
    }

    sum += mark;

    if (mark >= 90) {
        high += 1;
    } else if (mark >= 60) {
        normal += 1;
    } else {
        low += 1;
    }

    if (mark > max) {
        max = mark;
    }

    if (mark < min) {
        min = mark;
    }

    if (first === -1 && mark === 100) {
        first = i;
    }
}

avg = sum / students;

console.log(`avg: ${avg}`);
console.log(`90-100: ${high}`);
console.log(`60-89: ${normal}`);
console.log(`0-60: ${low}`);
console.log(`max: ${max}`);
console.log(`min: ${min}`);
console.log(`first 100: ${first}`);