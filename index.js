// Получаем элементы кнопки и блока для текста
const button = document.getElementById("showMessageButton");
const messageDiv = document.getElementById("message");

// Добавляем обработчик события для кнопки
button.addEventListener("click", function() {
    // Вставляем текст в блок
    messageDiv.innerHTML = "<h2>Спасибо за курс, брат!</h2>"; // Вставляем текст
    messageDiv.classList.add("visibleMessage"); // Показываем текст
});