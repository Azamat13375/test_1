// Задание№1
const regExp = /^\d+$/;

const containsOnlyDigits = (str) => {
    return regExp.test(str);
}

console.log(containsOnlyDigits("12345")); // Выведет true
console.log(containsOnlyDigits("12a45")); // Выведет false

// // Задание№2
// let counter = 1;
// const interval = setInterval(() => {
//     console.log(counter);
//     counter++;
// }, 1000);
//
// setTimeout(() => {
//     clearInterval(intervalId);
// }, 10000);






// Задание№3
let counter = 1;
const intervalId = setInterval(() => {
    console.log("Прошла секунда", counter);
    counter++;
}, 1000);

// Чтобы остановить вывод через 10 секунд:
setTimeout(() => {
    clearInterval(intervalId);
}, 10000);



// Задание№4
const Wrapper = document.getElementById('wrapper');

Wrapper.addEventListener('click', () => {
    Wrapper.classList.toggle('bg-color');
});