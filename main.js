// УРОК 2

// let number = '02';      // числовой тип
// console.log(number);
//
// let month = 'Февраль';
// console.log(month);        // Строчный тип
//
// let hello = `Добро ${"пожаловать"} ${"на курс,"} ${"Евгения"}`;
// console.log(hello);
//
// // alert("11.2022");
//
// document.getElementById("one").innerHTML = "Hello World!>";
//
// typeof undefined;
// console.log(typeof undefined);                  // undefined
// typeof 0;
// console.log(typeof 0);                          // Number
// typeof 12n;
// console.log(typeof 12n);                        // BigInt
// typeof true
// console.log(typeof true);                       // Boolean
// typeof 'Hello';
// console.log(typeof 'Hello')                     // String
// typeof Symbol('id');
// console.log(typeof Symbol('id'))                // Symbol
// typeof null;
// console.log(typeof null);                       // Objects

// УРОК 3

document.getElementById("one").innerHTML = "<h1>Hello World!</h1>";
// let inputIN = document.querySelector(".text");
// let btn = document.querySelector(".btn");
// let div = document.querySelector(".out");
// btn.onclick = function () {
//     console.log("Da");
//     console.log(inputIN.value);
//     let e = inputIN.value;
//     console.log(e);
//     div.innerHTML = e;
// };

// let myBirthDay = prompt('Когда у тебя день рождения?');
// console.log(myBirthDay);
//
// if (myBirthDay == 22) {
//     alert("Да ты молод бро!");
// } else if (myBirthDay == 23) {
//     alert("Ты крут");
// } else if (myBirthDay >= 33) {
//     alert("От тебя уже веет старостью");
// } else if (myBirthDay == 63) {
//     alert("Тебе пора на пенсию");
// } else if (myBirthDay == "") {
//     alert("Введи что-нибудь");
// } else {
//     alert("Фууу, старик!");
// }

let myBirthDay = prompt('Загадайте число от 1 до 200');

if (myBirthDay > 100) {
    document.querySelector(".out").innerHTML = myBirthDay;
} else {
    console.log(myBirthDay);
}








