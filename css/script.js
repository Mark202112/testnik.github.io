// Проверка для мобильных устройств
if (window.innerWidth <= 768) {
    const galleryImages = document.querySelectorAll('.gallery-container img');

    galleryImages.forEach(img => {
        img.addEventListener('click', () => {
            // Переключаем класс enlarged при клике
            if (img.classList.contains('enlarged')) {
                img.classList.remove('enlarged');  // Убираем увеличение
            } else {
                img.classList.add('enlarged');  // Увеличиваем картинку
            }
        });
    });
}
