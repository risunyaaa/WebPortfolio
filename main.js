document.addEventListener('DOMContentLoaded', function() {
    // Получаем все элементы с классом "cv-button"
    const downloadButtons = document.querySelectorAll('.cv-button');

    // Добавляем обработчик события на клик по каждой кнопке
    downloadButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            // Создаем ссылку для скачивания файла
            const downloadLink = document.createElement('a');
            downloadLink.href = '/images/resume.pdf'; // Укажите здесь путь к файлу для скачивания
            downloadLink.download = 'AleshkinCV'; // Укажите здесь название файла при скачивании

            // Добавляем ссылку на страницу
            document.body.appendChild(downloadLink);

            // Эмулируем клик по ссылке для начала скачивания файла
            downloadLink.click();

            // Удаляем ссылку после скачивания файла
            document.body.removeChild(downloadLink);
        });
    });
});