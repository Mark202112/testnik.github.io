<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Натяжные потолки</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <div class="header">
        <h2>Натяжные потолки</h2>
        <div>
            <a href="#gallery">Примеры работ</a>
            <a href="https://instagram.com/top__steli.nk/" target="_blank">
                <img src="images/instagram.png" alt="Instagram" loading="lazy">Instagram
            </a>
            <a href="tel:+1234567890">Позвонить</a>
        </div>
    </div>
    
    <div class="hero">
        <h1>Идеальные натяжные потолки</h1>
        <p>Качественные материалы, стильный дизайн, профессиональный монтаж.</p>
        <a href="#" class="btn" onclick="openModal()">Заказать</a>
    </div>

    <div id="orderModal" class="modal">
        <div class="modal-content">
            <span class="close" onclick="closeModal()">&times;</span>
            <h2>Оформить заказ</h2>
            <form id="orderForm">
                <input type="text" id="name" placeholder="Ваше имя" required>
                <input type="tel" id="phone" placeholder="Ваш номер телефона" required>
                <button type="submit">Отправить</button>
            </form>
        </div>
    </div>

    <div id="contact" class="contact">
        <h2>Свяжитесь с нами</h2>
        <p>📞 <a href="tel:+1234567890">+1 234 567 890</a></p>
        <p>
            <a href="https://instagram.com/top__steli.nk/" target="_blank">
                <img src="images/instagram.png" alt="Instagram" loading="lazy" class="instagram-logo">Instagram
            </a>
        </p>
    </div>

    <script>
        // Открытие и закрытие модального окна
        function openModal() {
            document.getElementById("orderModal").style.display = "block";
        }
        function closeModal() {
            document.getElementById("orderModal").style.display = "none";
        }

        // Отправка данных в Telegram
        document.getElementById("orderForm").addEventListener("submit", function(e) {
            e.preventDefault();
            
            const TOKEN = "7997339405:AAFmjR0Jr19ba_YvRCh-mhFzhYmDVq6Cnts"; // Вставьте токен бота
            const CHAT_ID = "@topstelink_bot"; // Вставьте ваш ID чата
            const API_URL = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

            let name = document.getElementById("name").value;
            let phone = document.getElementById("phone").value;

            let message = `Новый заказ!%0A👤 Имя: ${name}%0A📞 Телефон: ${phone}`;

            fetch(`${API_URL}?chat_id=${CHAT_ID}&text=${message}`, {
                method: "GET"
            })
            .then(response => {
                if (response.ok) {
                    alert("Ваш заказ отправлен! Мы скоро свяжемся с вами.");
                    closeModal();
                } else {
                    alert("Ошибка при отправке. Попробуйте снова.");
                }
            })
            .catch(error => alert("Ошибка: " + error));
        });
    </script>
</body>
</html>
