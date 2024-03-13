//  скрипт для получения cv

document.addEventListener("DOMContentLoaded", function () {
  // Получаем все элементы с классом "cv-button"
  const downloadButtons = document.querySelectorAll(".resume-button");

  // Добавляем обработчик события на клик по каждой кнопке
  downloadButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      // Создаем ссылку для скачивания файла
      const downloadLink = document.createElement("a");
      downloadLink.href = "/images/resume.pdf"; // Укажите здесь путь к файлу для скачивания
      downloadLink.download = "AleshkinCV"; // Укажите здесь название файла при скачивании

      // Добавляем ссылку на страницу
      document.body.appendChild(downloadLink);

      // Эмулируем клик по ссылке для начала скачивания файла
      downloadLink.click();

      // Удаляем ссылку после скачивания файла
      document.body.removeChild(downloadLink);
    });
  });
});


var theme = document.getElementById('theme-toggle');

theme.onclick = () => {
    let style = getComputedStyle(document.body)
    let a = style.getPropertyValue('--black-color')
    rootElement = document.documentElement;  
    if (a === 'black') {  
        console.log(1)
      rootElement.style.setProperty('--grey-color', 'grey'),
      rootElement.style.setProperty('--light-grey-color', 'black'),
      rootElement.style.setProperty('--black-color', 'white'),
      rootElement.style.setProperty('--white-color', 'grey') 
    } else {
        console.log(2)
        rootElement.style.setProperty('--grey-color', 'rgb(179, 179, 179)'),
        rootElement.style.setProperty('--light-grey-color', 'rgb(249, 249, 249)'),
        rootElement.style.setProperty('--black-color', 'black'),
        rootElement.style.setProperty('--white-color', 'white') 
    }
    
}
