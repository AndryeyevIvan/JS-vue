// let num = 1;
//
// while (num < 5) {
//     console.log(num);
//     num += 1;
// }

// let us = prompt("Enter your name");
// while (us < 1 || us > 10) {
//     console.log(us + prompt("Enter your name"));
// }
// console.log(us + prompt("Enter your email"));

// isNan()

// console.log(Number(7))

// let age = +prompt("Enter your age number");
//
// while (isNaN(age) || age >= 100) {
//     age = +prompt("Enter your age number");
// }

// const correctPin = 1234;
//
// let pin = +prompt("Enter a valid pin");
// let attempts = 1;
//
// while (attempts < 3 && pin !== correctPin) {
//     attempts++;
//     pin = +prompt("Enter a valid pin");
// }

// let attempt = 1;
// const password = 1234;
//
// while (attempt <= 3) {
//     let userPassword = +prompt("Enter your password");
//
//     if (password === userPassword) {
//         console.log("Доступ дозволено");
//         break;
//     } else {
//         console.log("Неправильний пароль");
//     }
//
//     attempt++;
// }

// let menuChoice;
// do {
//     menuChoice = +prompt("Оберіть дію:\n" +
//         "1 - Профіль\n" + "2 - налаштування\n" + "0 - вихід");
//
//     if (menuChoice === 1) {
//         alert("відкриваємо профіль");
//     }
//     else if (menuChoice === 2) {
//         alert("відкриваємо налаштування");
//     }
//     else if (menuChoice === 0) {
//         alert("вихід");
//     }
//     else {
//         alert("невідомий вибір");
//     }
// }
// while (menuChoice !== 0);

//------

// let menuChoice;
// do {
//     menuChoice = +prompt("Оберіть дію:\n" +
//         "1 - Профіль\n" + "2 - налаштування\n" + "0 - вихід");
//
//     switch (menuChoice) {
//         case 1:
//             alert("відкриваємо профіль");
//             break;
//         case 2:
//             alert("відкриваємо налаштування");
//             break;
//         case 0:
//             alert("вихід");
//             break;
//         default:
//             alert("невідомий вибір");
//     }
// }
// while (menuChoice !== 0);


// let count = 0, sum = 0;
// while (count < 5) {
//     let currentGrade = +prompt(`введіть оцінку № ${count + 1}`);
//     if (currentGrade < 1 || currentGrade > 12 || Number.isNaN(currentGrade)) {
//         alert("не коректна оцінка");
//         continue;
//     }
//
//     sum += currentGrade;
//     count++;
// }
//
// console.log(sum);
// console.log(sum / 5);

// let questionsNumber = 1;
// let score = 1;
// while (questionsNumber <= 5){
//     let questions = "", answers = "";
//     switch (questionsNumber){
//         case 1:
//             questions = "Як створювати змінну?";
//             answers = 'let';
//             break;
//         case 2:
//             questions = "який оператор рівності строгої?";
//             answers = '===';
//             break;
//         case 3:
//             questions = "як позначається оператор and";
//             answers = '&&';
//             break;
//         case 4:
//             questions = "як завершити цикл?";
//             answers = "break";
//             break;
//         case 5:
//             questions = "як записати інкремент?";
//             answers = "++"
//             break;
//     }
//     let answer = prompt(`Запитання № ${questionsNumber} із 5\n ${questions}`);
//     if (answer === "") {
//         console.log("відповідь не може бути пустою");
//         continue;
//     }
//     if (answer === answers) {
//         alert("lalala");
//         score++;
//     } else {
//         alert("nonononon")
//     }
//     questionsNumber++;
// }
//
// if (score === 5) {
//     alert("Відмінно")
// }
// else if (score >= 3) {
//     alert("норм")
// }
// else {
//     alert("невдаха")
// }

// ----------------------

let age = +prompt("What is your age?");

while (age < 12 || age > 90 || isNaN(age)) {
    age = +prompt("Error! What is your age?");
}

const correctPassword = 1234;
let password = +prompt("Please enter your password");
let attempts = 0;

while (attempts < 2 && password !== correctPassword) {
    password = +prompt(`Error! You have ${2 - attempts} attempts. Please enter your password`);
    attempts++;
}

if (password === correctPassword) {
    let option = 0;

    do {
        let option = +prompt("Menu: \n 1 - Personal Account \n 2 - Messages \n 3 - Settings \n 0 - Exit");

        switch (option) {
            case "1":
                alert("Opening your account");
                break;
            case "2":
                alert("Opening your messages");
                break;
            case "3":
                alert("Opening your settings");
                break;
            case "0":
                alert("Exit");
                break;
            default:
                alert(`Option: ${option} is not available!`);
        }
    }
    while (option !== "0");


} else {
    alert("Goodbye!");
}