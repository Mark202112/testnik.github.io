// Проверяем, что текущая ширина экрана меньше 768px
if (window.innerWidth <= 768) {
    const galleryImages = document.querySelectorAll('.gallery-container img');

    galleryImages.forEach(img => {
        img.addEventListener('click', () => {
            // Если изображение уже увеличено, уменьшаем его
            if (img.classList.contains('enlarged')) {
                img.classList.remove('enlarged');
            } else {
                // Если изображение не увеличено, увеличиваем его
                img.classList.add('enlarged');
            }
        });
    });
}
