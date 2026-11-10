// let heading = document.querySelector('p');
// console.log(heading);
// let nameElement = document.getElementById('profile-name');
// let profileElement = document.getElementsByClassName('profile-role');
// let skills = document.querySelectorAll('.skill');
//
// for (let skill of skills) {
//     console.log(skill);
// }
// nameElement.textContent = "Надійка"

let student = {
    name: "Надійка",
    role: "ліцеїстка 11 IT класу",
    city: "Київ",
    portfolio: 'https://github.com',
};

let nameElement = document.querySelector("#profile-name");
let roleElement = document.querySelector(".profile-role");
let cityElement = document.querySelector("#profile-city");
let portfolioElement = document.querySelector("#profile-link");

nameElement.textContent = student.name;
roleElement.textContent = student.role;
cityElement.textContent = student.city;
// portfolioElement.textContent = student.portfolio;
// portfolioElement.innerHTML = student.portfolio;
portfolioElement.setAttribute("href", student.portfolio);
portfolioElement.setAttribute("title", "відкрити портфоліо");


let skills = document.querySelectorAll(".skill");
skills[0].textContent = "HTML";
skills[1].textContent = "CSS";
skills[2].textContent = "JS";

