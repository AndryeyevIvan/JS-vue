
let clubs = [
    { id: 1, name: "Програмування", category: "IT", price: 800, members: 15, active: true },
    { id: 2, name: "Футбол", category: "Спорт", price: 600, members: 20, active: true },
    { id: 3, name: "Малювання", category: "Мистецтво", price: 500, members: 12, active: false },
    { id: 4, name: "Робототехніка", category: "IT", price: 1000, members: 10, active: true },
    { id: 5, name: "Шахи", category: "Спорт", price: 400, members: 8, active: false }
];

function showClubs() {
    if (clubs.length === 0) {
        alert("Каталог порожній");
        return;
    }

    let result = "";

    for (let club of clubs) {
        result += "ID: " + club.id +
            "\nНазва: " + club.name +
            "\nНапрям: " + club.category +
            "\nЦіна: " + club.price + " грн" +
            "\nУчасники: " + club.members +
            "\nНабір: " + (club.active ? "Відкритий" : "Закритий") +
            "\n\n";
    }

    alert(result);
}

function findClub() {
    let id = Number(prompt("Введіть ID гуртка:"));
    let club = clubs.find(function(club) {
        return club.id === id;
    });

    if (!club || !Number.isInteger(id) || id <= 0) {
        alert("Гурток не знайдено");
        return;
    }

    alert(
        "ID: " + club.id +
        "\nНазва: " + club.name +
        "\nНапрям: " + club.category +
        "\nЦіна: " + club.price + " грн" +
        "\nУчасники: " + club.members +
        "\nНабір: " + (club.active ? "Відкритий" : "Закритий")
    );
}

function addMember() {
    let id = Number(prompt("Введіть ID гуртка:"));
    let club = clubs.find(function(club) {
        return club.id === id;
    });

    if (!club || !Number.isInteger(id) || id <= 0) {
        alert("Гурток не знайдено");
        return;
    }

    if (!club.active) {
        alert("Набір до цього гуртка закритий");
        return;
    }

    if (confirm("Записати учасника до гуртка " + club.name + "?")) {
        club.members++;
        alert("Учасника записано. Кількість учасників: " + club.members);
    }
}

function changeStatus() {
    let id = Number(prompt("Введіть ID гуртка:"));
    let club = clubs.find(function(club) {
        return club.id === id;
    });

    if (!club || !Number.isInteger(id) || id <= 0) {
        alert("Гурток не знайдено");
        return;
    }

    if (confirm("Змінити статус набору гуртка " + club.name + "?")) {
        club.active = !club.active;
        alert("Новий статус: " + (club.active ? "Відкритий" : "Закритий"));
    }
}

function addClub() {
    let name = prompt("Введіть назву гуртка:");

    if (name === null) return;

    name = name.trim();

    if (name === "") {
        alert("Назва не може бути порожньою");
        return;
    }

    let category = prompt("Введіть напрям гуртка:");

    if (category === null) return;

    category = category.trim();

    if (category === "") {
        alert("Напрям не може бути порожнім");
        return;
    }

    let priceText = prompt("Введіть вартість занять за місяць:");

    if (priceText === null) return;

    if (priceText.trim() === "") {
        alert("Введіть вартість");
        return;
    }

    let price = Number(priceText);

    if (!Number.isFinite(price) || price < 0) {
        alert("Ціна не може бути від'ємною");
        return;
    }

    let membersText = prompt("Введіть кількість учасників:");

    if (membersText === null) return;

    if (membersText.trim() === "") {
        alert("Введіть кількість учасників");
        return;
    }

    let members = Number(membersText);

    if (!Number.isInteger(members) || members < 0) {
        alert("Кількість учасників має бути цілим невід'ємним числом");
        return;
    }

    let id = 1;

    for (let club of clubs) {
        if (club.id >= id) {
            id = club.id + 1;
        }
    }

    let active = confirm("Відкрити набір до нового гуртка?");

    clubs.push({
        id: id,
        name: name,
        category: category,
        price: price,
        members: members,
        active: active
    });

    alert("Гурток успішно додано. ID: " + id);
}

function showStatistics() {
    if (clubs.length === 0) {
        alert("Каталог порожній");
        return;
    }

    let activeCount = 0;
    let totalMembers = 0;
    let totalPrice = 0;

    clubs.forEach(function(club) {
        if (club.active) {
            activeCount++;
        }

        totalMembers += club.members;
        totalPrice += club.price;
    });

    alert(
        "Усього гуртків: " + clubs.length +
        "\nГуртків із відкритим набором: " + activeCount +
        "\nУсього учасників: " + totalMembers +
        "\nСередня вартість: " + (totalPrice / clubs.length).toFixed(2) + " грн"
    );
}

let choice;

do {
    choice = prompt(
        "КАТАЛОГ ГУРТКІВ\n\n" +
        "1 - Показати всі гуртки\n" +
        "2 - Знайти гурток за ID\n" +
        "3 - Записати учасника\n" +
        "4 - Змінити статус набору\n" +
        "5 - Додати новий гурток\n" +
        "6 - Показати статистику\n" +
        "0 - Вихід"
    );

    switch (choice) {
        case "1":
            showClubs();
            break;
        case "2":
            findClub();
            break;
        case "3":
            addMember();
            break;
        case "4":
            changeStatus();
            break;
        case "5":
            addClub();
            break;
        case "6":
            showStatistics();
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
} while (choice !== "0");
