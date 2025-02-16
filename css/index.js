// Открыть модальное окно
function openModal() {
    document.getElementById("orderModal").style.display = "flex";
}

// Закрыть модальное окно
function closeModal() {
    document.getElementById("orderModal").style.display = "none";
}

// Закрыть окно при клике вне формы
window.onclick = function(event) {
    let modal = document.getElementById("orderModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

// Обработчик формы
document.getElementById("orderForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;

    // Отправляем данные (выберите способ ↓)
    sendToTelegram(name, phone); // Для Telegram
    // sendToGoogleSheets(name, phone); // Для Google Sheets
});
