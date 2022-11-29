// let year = prompt('Когда вышел ходячий замок Хаяо Миядзаки?');
//
// if (year > 2004) {
//     alert('Это поздновато, сэр');
// } else if (year == '') {
//     alert('Вы оставили строку пустой');
// } else if (year < 2004) {
//     alert('Это рановато, сэр');
// } else if (year == 2004) {
//     alert('Да вы знаток, сэр');
// } else {
//     alert('А вот это не правильно!');       //Любое значеник, которое не равно 2004
// }


// let summer;
// let week = prompt('Сколько недень летом?');
//  if (week == 12) {
//      summer = true;
//  } else {
//      summer = false;
//  }

// let result = условие ?значение1 : значение2

// let week = prompt('Сколько недень летом?');
// let summer = week == 12? alert(true) : alert(false);

// Математические операторы: +, -, /, *
// Логические операторы:
// % - деление с остатком: 5%2 => 1
// ** - возведение в степень: 2**3 => 8
// Операторы сравнения:
// > - больше
// < - меньше
// >= - больше или равно
// <= - меньше или равно
// == - равенство
// === - строгое равенство
// != - не равно
// || - или     (чтобы или сработало и вернуло последнее true, достаточно 1-го true значения)
// && - и
// ! - не

// ИЛИ
// let a = 2;
// let b = 5;
// if (a>4 || b>4) {
//     console.log('Ура, все сработало');
// } else {
//     console.log('Всё пропало');
// }
// логическая цепочка:
// alert(true/true)    // true
// alert(true/false)   // true
// alert(false/true)   // true
// alert(false/false)  // false

// И
// let a = 10;
// let b = 7;
// if (a>4 && b>4) {
//     console.log('Ура, все сработало');
// } else {
//     console.log('Всё пропало');
// }
// логическая цепочка:
// alert(true/true)    // true
// alert(true/false)   // false
// alert(false/true)   // false
// alert(false/false)  // false

// !
// let a = 6;
// let b = 15;
// console.log(!a);        // false
// console.log(!false);    // true
// console.log(!0);        // true
// console.log(!true);     // false

function toogleButten() {
    let color = document.getElementById('myDiv').style.color;
    let backgroundColor = document.getElementById('myDiv').style.backgroundColor;

    if (color == 'black' && backgroundColor == 'white') {
        document.getElementById('myDiv').style.color = 'white';
        document.getElementById('myDiv').style.backgroundColor = 'black';
        document.getElementById('myDiv').style.fontFamily = 'Arial';
        document.getElementById('toogBut').style.border = '2px solid red';
        document.getElementById('toogBut').style.backgroundColor = 'white';
        document.getElementById('toogBut').style.color = 'black';
    } else {
        document.getElementById('myDiv').style.color = 'black';
        document.getElementById('myDiv').style.backgroundColor = 'white';
        document.getElementById('myDiv').style.fontFamily = 'Times New Roman';
        document.getElementById('toogBut').style.border = '2px solid red';
        document.getElementById('toogBut').style.backgroundColor = 'black';
        document.getElementById('toogBut').style.color = 'white';
    }
}

// Задание №1
let a = 6;
let b = 9;

if (a+b>15) {
    console.log("Да");
} else {
    console.log('Нет');
}

// Задание №2
function compare(a, b) {
    if (a===b) {
        console.log(true);
    } else {
        console.log(false);
    }
}
let c = 22;
let d = 22;

compare(c, d);
compare('25', 25);
compare(null, 0);
