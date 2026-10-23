// Дані предметної області «Коледж» зберігаються у JavaScript.
// HTML містить лише структуру таблиць, а рядки створюються динамічно.

const students = [
    {
        id: 1,
        name: "Іваненко Максим",
        group: "МН-31",
        course: 3,
        specialty: "073 Менеджмент",
        studyForm: "Денна",
        averageGrade: 10.2
    },
    {
        id: 2,
        name: "Петренко Анна",
        group: "МН-31",
        course: 3,
        specialty: "073 Менеджмент",
        studyForm: "Денна",
        averageGrade: 11.1
    },
    {
        id: 3,
        name: "Коваленко Артем",
        group: "МН-41",
        course: 4,
        specialty: "073 Менеджмент",
        studyForm: "Денна",
        averageGrade: 9.8
    }
];

const teachers = [
    {
        id: 1,
        name: "Дмитрів Олена Веніамінівна",
        position: "Викладач",
        category: "Вища",
        subject: "Менеджмент",
        experience: "15 років",
        room: 21
    },
    {
        id: 2,
        name: "Кравченко Петро Васильович",
        position: "Викладач",
        category: "Перша",
        subject: "Історія України",
        experience: "12 років",
        room: 15
    },
    {
        id: 3,
        name: "Шевченко Тетяна Валеріївна",
        position: "Викладач",
        category: "Вища",
        subject: "Економіка",
        experience: "18 років",
        room: 18
    }
];

const subjects = [
    {
        id: 1,
        title: "Менеджмент",
        course: 3,
        semester: 5,
        hours: 90,
        teacher: "Дмитрів О. В.",
        control: "Іспит"
    },
    {
        id: 2,
        title: "Маркетинг",
        course: 3,
        semester: 6,
        hours: 90,
        teacher: "Дмитрів О. В.",
        control: "Залік"
    },
    {
        id: 3,
        title: "Організація виробництва",
        course: 4,
        semester: 7,
        hours: 90,
        teacher: "Дмитрів О. В.",
        control: "Іспит"
    }
];

function renderTableRows(data, tbodyId, fields) {
    const tbody = document.getElementById(tbodyId);
    tbody.innerHTML = "";

    data.forEach(function(item) {
        const row = document.createElement("tr");

        fields.forEach(function(field) {
            const cell = document.createElement("td");
            cell.textContent = item[field];
            row.appendChild(cell);
        });

        tbody.appendChild(row);
    });
}

function renderAllTables() {
    renderTableRows(
        students,
        "students-body",
        ["id", "name", "group", "course", "specialty", "studyForm", "averageGrade"]
    );

    renderTableRows(
        teachers,
        "teachers-body",
        ["id", "name", "position", "category", "subject", "experience", "room"]
    );

    renderTableRows(
        subjects,
        "subjects-body",
        ["id", "title", "course", "semester", "hours", "teacher", "control"]
    );
}

const tabButtons = document.querySelectorAll(".tab-button");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        const tabName = button.dataset.tab;

        tabButtons.forEach(function(item) {
            item.classList.remove("active");
        });

        tabContents.forEach(function(content) {
            content.classList.remove("active");
        });

        button.classList.add("active");
        document.getElementById(tabName).classList.add("active");
    });
});

renderAllTables();
