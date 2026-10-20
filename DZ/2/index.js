
let courses = [
    { id: 1, title: "JavaScript для початківців", category: "IT", price: 1200, duration: 20, rating: 4.8, available: true },
    { id: 2, title: "Основи Python", category: "IT", price: 1500, duration: 25, rating: 4.9, available: true },
    { id: 3, title: "Вебдизайн", category: "Дизайн", price: 900, duration: 15, rating: 4.5, available: true },
    { id: 4, title: "Основи фотографії", category: "Мистецтво", price: 700, duration: 12, rating: 4.2, available: false },
    { id: 5, title: "Розробка ігор", category: "IT", price: 2000, duration: 40, rating: 4.7, available: true },
    { id: 6, title: "Графічний дизайн", category: "Дизайн", price: 1100, duration: 18, rating: 4.6, available: true },
    { id: 7, title: "Основи маркетингу", category: "Бізнес", price: 800, duration: 10, rating: 4.1, available: false },
    { id: 8, title: "HTML і CSS", category: "IT", price: 1000, duration: 16, rating: 4.8, available: true }
];

function showCourses(list) {
    if (list.length === 0) {
        alert("Курсів не знайдено");
        return;
    }

    let result = "";

    list.forEach(course => {result += "ID: " + course.id + "\nНазва: " + course.title + "\nКатегорія: " + course.category + "\nЦіна: " + course.price + " грн" + "\nТривалість: " + course.duration + " год." + "\nРейтинг: " + course.rating + "\nДоступність: " + (course.available ? "Так" : "Ні") + "\n\n";});

    alert(result);
}

function findCourseById() {
    let id = Number(prompt("Введіть ID курсу:"));

    if (!Number.isInteger(id) || id <= 0) {
        alert("Некоректний ID");
        return;
    }

    let course = courses.find(course => course.id === id);

    if (!course) {
        alert("Курс не знайдено");
        return;
    }

    showCourses([course]);
}

function findCoursesByCategory() {
    let category = prompt("Введіть категорію:");

    if (category === null || category.trim() === "") {
        alert("Введіть категорію");
        return;
    }

    let result = courses.filter(course => course.category.toLowerCase() === category.trim().toLowerCase());

    showCourses(result);
}

function findCoursesByPrice() {
    let price = prompt("Введіть максимальну вартість курсу:");

    if (price === null || price.trim() === "") {
        return;
    }

    price = Number(price);

    if (!Number.isFinite(price) || price < 0) {
        alert("Некоректна вартість");
        return;
    }

    let result = courses.filter(course => course.price <= price);

    showCourses(result);
}

function findCoursesByTitle() {
    let title = prompt("Введіть частину назви курсу:");

    if (title === null || title.trim() === "") {
        alert("Введіть назву");
        return;
    }

    let result = courses.filter(course =>
        course.title.toLowerCase().includes(title.trim().toLowerCase())
    );

    showCourses(result);
}

function showCourseTitles() {
    let titles = courses.map(course => course.title);

    alert(titles.join("\n"));
}

function showDiscountedCourses() {
    let discounted = courses.map(course => ({title: course.title, price: Number((course.price * 0.85).toFixed(2))}));

    let result = "";

    discounted.forEach(course => {result += course.title + " — " + course.price + " грн\n";});

    alert(result);
}

function sortByPrice() {
    let sorted = [...courses].sort((a, b) => a.price - b.price);

    showCourses(sorted);
}

function sortByRating() {
    let sorted = [...courses].sort((a, b) => b.rating - a.rating);

    showCourses(sorted);
}

function sortByTitle() {
    let sorted = [...courses].sort((a, b) =>
        a.title.localeCompare(b.title, "uk")
    );

    showCourses(sorted);
}

function showAvailableStatistics() {
    let availableCourses = courses.filter(course => course.available);

    if (availableCourses.length === 0) {
        alert("Немає доступних курсів");
        return;
    }

    let total = availableCourses.reduce((sum, course) => sum + course.price, 0);

    let average = total / availableCourses.length;

    alert("Кількість доступних курсів: " + availableCourses.length + "\nЗагальна вартість: " + total + " грн" + "\nСередня вартість: " + average.toFixed(2) + " грн");
}

let choice;

do {
    choice = prompt(
        "КАТАЛОГ ОНЛАЙН-КУРСІВ\n\n" +
        "1 - Знайти курс за ID\n" +
        "2 - Курси за категорією\n" +
        "3 - Курси за максимальною ціною\n" +
        "4 - Пошук за назвою\n" +
        "5 - Показати назви всіх курсів\n" +
        "6 - Ціни зі знижкою 15%\n" +
        "7 - Сортувати за зростанням ціни\n" +
        "8 - Сортувати за спаданням рейтингу\n" +
        "9 - Сортувати за назвою\n" +
        "10 - Статистика доступних курсів\n" +
        "11 - Показати всі курси\n" +
        "0 - Вихід"
    );

    switch (choice) {
        case "1":
            findCourseById();
            break;
        case "2":
            findCoursesByCategory();
            break;
        case "3":
            findCoursesByPrice();
            break;
        case "4":
            findCoursesByTitle();
            break;
        case "5":
            showCourseTitles();
            break;
        case "6":
            showDiscountedCourses();
            break;
        case "7":
            sortByPrice();
            break;
        case "8":
            sortByRating();
            break;
        case "9":
            sortByTitle();
            break;
        case "10":
            showAvailableStatistics();
            break;
        case "11":
            showCourses(courses);
            break;
        case "0":
            alert("Роботу завершено");
            break;
        case null:
            choice = "0";
            break;
        default:
            alert("Неправильний пункт меню");
    }

    if (choice !== "0" && choice !== null) {
        if (!confirm("Повернутися до меню?")) {
            choice = "0";
        }
    }
} while (choice !== "0");
