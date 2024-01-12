let input = document.getElementById('#dayQuantity');
let button = document.getElementById('#btn');
let result = document.getElementById('#result');

function print() {
    let day = Number(input.value);
    let sec = day * 86400;
    result.value = sec;
}
button.addEventListener('click', print)