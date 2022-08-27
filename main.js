let text = document.querySelector('.text');
let words = document.querySelector('.words');
let characters = document.querySelector('.characters');

// Стрелочные фунции 
//addEventListener — это способ зарегистрировать обработчик события, описанный в документации W3C DOM. Вот список преимуществ его использования: Позволяет добавлять множество обработчиков для одного события.
text.addEventListener('input', () => {
    characters.textContent = text.value.length;
    let txt = text.value.trim()
    words.textContent = txt.split(/\s+/).filter((item) => item).length
});