//  Num counter
function numCounter(selector, number, time, step) {
    const counter = document.querySelector(selector)

    let res = 0

    const allTime = Math.round(time / (number / step))

    let interval = setInterval(() => {
        res = res + step

        if (res === number) {
            clearInterval(interval)
        }
        counter.innerHTML = res
    }, allTime)
}

// ДАННАЯ ФУНКЦИЯ МОЖЕТ БЫТЬ ВЫЗВАННА НЕОГРАНИЧЕННОЕ КОЛИЧЕСВТО РАЗ

// Первый аргумент - селектор, куда будем выводить результат ( с . если класс и с # если id). ПРИМЕР: '.num1' или '#num1'
// Второй аргумент - конечное значение которое будет показано на странице
// Третий аргумент - время анмации (миллисекунды)
// Четвертый аргумен - шаг анимации ( например добавляем по 1 или по 10 или по 100)

// Play animation on scroll
// Проиграть анимацию при скролле
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // Вместо section-3 пишем тот класс секции, при скролле до которой хотим проиграть анимацию
        if (entry.target.classList.contains('section-3')) {
            numCounter('#num-1', 600, 2000, 10)
        }
    })
})
document.querySelectorAll('.section').forEach((section) => {
    observer.observe(section)
})
