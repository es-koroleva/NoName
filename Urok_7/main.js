// let fun1 = document.querySelector('.test-func');
//
// function one () {
//     console.log('Наша почти первая функция');
// }
// one();                  // 1-й вариант вызвать функцию
// fun1.onclick = one;     // 2-й вариант вызвать функцию (вызывается каждый раз при нажатии кнопки)

// function bosh() {
//     //ряд команд:
//     почистить лук;
//     порезать овощи;
//     поставить кострюлю;
// }

// function one () {
//     console.log('Наша почти первая функция');
//     return 666;
// }
// one();

// let a = 9;
// let b = 10;
// function multiply() {
//     console.log(a*b);       // выведет решение
// }
// multiply();

// let a = 9;
// let b = 10;
// function multiply() {
//     console.log(a*b);
//     return a*b;
// }
// let c = multiply();
// console.log(c);

// function mlt(x,y, z) {
//     return x*y*z;
// }
// console.log(mlt(20,10, 10));
// console.log(mlt(200, 90));          // выдаст ошибку, т.к. не указан 3-й параметр

//Анонимная функция (используется один раз)
// let fun1 = document.querySelector(".test-func");
// fun1.onclick = function () {
//     console.log("anonimus");
// };

//Стрелочная функция (сокращается запись)
// let fun1 = document.querySelector(".test-func");
// fun1.onclick = () => {
//     console.log("anonimus");
// }

//Пример
// let fun = document.querySelector(".test-func");
// let fun1 = document.querySelector(".test-func1");
// let fun2 = document.querySelector(".test-func2");
// let fun3 = document.querySelector(".test-func3");
//
// let abv = () => {
//     console.log(2000*2000);
// };
// fun.onclick = abv;
//
// let bol = () => {
//     alert('Тебе уже давно больше двадцати, но ты так ничего и не добился');
// }
// fun1.onclick = bol;
//
// let vopros = () => {
//     let otvet = prompt ('Сколько тебе лет?');
//     if (otvet > 20) {
//         alert('Фуу, старик');
//     } else {
//         alert('Фуу, малышня');
//     }
// };
// fun2.onclick = vopros;
//
// let myInfo = () => {
//     alert('Привет, я Бэймакс - Ваш персональный помошник');
// };
// fun3.onclick = myInfo;

//Пример
// let fun = document.querySelector('.test-func4');
// let div = document.querySelector('.divs');
// let dark = () => {
//     // div.style.backgroundColor = 'red';
//     div.classList.add ('dark');
// };
// fun.onclick = dark;

// ЗАДАНИЕ №1
let a = 'Hello World!';
let btn = document.querySelector('.btn');
let div = document.querySelector('.div-btn');
let text = () => {
    div.innerHTML = a;
    div.classList.add('text');
};
btn.onclick = text;

//ЗАДАНИЕ №2

// Вариант 1
// let op;
// function func() {
//     let result;
//     let num1 = Number(document.getElementById('num1').value);
//     let num2 = Number(document.getElementById('num2').value);
//     switch (op) {
//         case ('+'):
//             result = num1 + num2;
//             break;
//         case ('-'):
//             result = num1 - num2;
//             break;
//         case ('*'):
//             result = num1 * num2;
//             break;
//         case ('/'):
//             result = num1 / num2;
//             break;
//     }
//     document.getElementById('result').value = result;
// }

//Вариант 2
let num1 = Number(document.getElementById('num1').value);
let num2 = Number(document.getElementById('num2').value);
let actions = document.querySelectorAll('.action');
actions.forEach(function (el){
    el.onclick = function (e) {
        const action = e.target.innerHTML;
        let result;
        switch (action) {
        case ('+'):
            result = num1 + num2;
            break;
        case ('-'):
            result = num1 - num2;
            break;
        case ('*'):
            result = num1 * num2;
            break;
        case ('/'):
            result = num1 / num2;
            break;
    }
    document.getElementById('result').value = result;
    }
})

