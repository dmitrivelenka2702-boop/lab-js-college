// Знаходимо всі кнопки-вкладки
const tabButtons = document.querySelectorAll(".tab-button");

// Знаходимо всі блоки з таблицями
const tabContents = document.querySelectorAll(".tab-content");


// Для кожної кнопки додаємо обробник події click
tabButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        // Отримуємо назву вкладки з атрибута data-tab
        const tabName = button.dataset.tab;


        // Прибираємо клас active з усіх кнопок
        tabButtons.forEach(function(item) {
            item.classList.remove("active");
        });


        // Прибираємо клас active з усіх таблиць
        tabContents.forEach(function(content) {
            content.classList.remove("active");
        });


        // Робимо натиснуту кнопку активною
        button.classList.add("active");


        // Показуємо відповідну таблицю
        document
            .getElementById(tabName)
            .classList.add("active");

    });

});