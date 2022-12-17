// const todol = document.querySelector('.name-list');
// const listInput = document.querySelector('.list-input');
// const addlist = document.querySelector('.addlist');
//
// addlist.addEventListener('click', function () {
//     //создаем li
//     const newLi = document.createElement('LI');                          // добавить элемент
//     const liContent = document.createTextNode(listInput.value);          // добавить текст ещё
//     //добавление входного li
//     newLi.appendChild(liContent);                                        // добавить начало li
//     //прекрепляем li к списку дел
//     todol.appendChild(newLi);
// })

// let a = 'Anime';
// let b = 'Триган';
// let c = 15;
//
// // переносим переменные в массив:
// let arr = ['Anime', 'Триган', 15];
// console.log(arr);
// // индекс массива: [0,1,2] всегда начинается с 0 и пишется в [] ) -> Anime - 0, Триган - 1, 15 - 2
// console.log(arr[1]);            // выведет вторую переменную в массиве
// console.log(arr.length);        // параметр length - длина массива
//
// let e = [];                     // пустой массив

// // Метод push - добавляет элемент в конец массива
// let a = [1,2,3,4,5,6,7];
// console.log(a.length);
// // console.log(a.push(8));
// console.log(a);
//
// const b = ['a','b','c','d'];
// b.push('Naruto');
// console.log(b);
//
// // Метод pop - удаляет последний элемент массива
// b.pop();            // удалится Naruto
// b.pop();            // удалится с и т.д.
// console.log(b);
//
// // Команда delete - удаляет эдемент внутри массива
// delete a[3];
// console.log(a);
//
// // Метод splice - удаляет/ добавляет элемент внутри массива и пересчитывает его индексы
// a.splice(3,2,"new");      // 2-число удаленный элементов после 3-го
// console.log(a);
// console.log(a);

// Метод Sprice -

// Двумерные массивы
// let a = [1,2,3,4,5];
// let b = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9],
// ];

// пример 1: вывести массив в html
//
// let out = ' ';
// for (let i = 0; i<b.length; i++) {
//     // console.log(b[i]);
//     // let c = b[i];
//     // for (let j = 0; j<c.length; j++) {
//     //     console.log(c[j]);
//     // }
//     for (let j = 0; j<b[i].length; j++) {
//         console.log(b[i][j]);
//         out += b[i][j] + ' ';
//     }
//     out += '<br>';
// }
// document.querySelector('.out').innerHTML = out;
// // console.log(b);

// пример 2: вывести массив больше 4 в html

// let out = ' ';
// for (let i=0; i<b.length; i++) {
//     for (let j = 0; j<b[i].length; j++) {
//         console.log(b[i][j]);
//         if (b[i][j]>4) {
//             out += b[i][j];
//         }
//     }
//     out += '<br>';
// }
// document.querySelector('.out').innerHTML = out;

// ЗАДАНИЕ 1-4:
let btn1 = document.querySelector('.btn1');
let btn2 = document.querySelector('.btn2');
let btn3 = document.querySelector('.btn3');
let btn4 = document.querySelector('.btn4');
let outText1 = document.querySelector('.out-text1');
let indexInput = document.getElementById('index-input');
let outInput2 = document.getElementById('out-input2');
let outInput3 = document.getElementById('out-input3');
let a = [5,8,75,0,6,13,4,11,22,19,2,7,42,35];
let b = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
]

btn1.onclick = function () {
    // outText1.textContent = `${a[4]}`;
    let index = Number.parseInt(indexInput.value);
    if (!Number.isNaN(index) && typeof a[index] !== 'undefined') {
        outText1.textContent = `${a[index]}`;
    } else {
        outText1.textContent = 'элемент не найден';
    }
}

btn2.onclick = function () {
    let out = [];
    for (let i = 0; i < a.length; i++) {
        let el = a[i];
        if (el !==0 && el % 2 === 0) {
            out.push(el);
        }
    }
    outInput2.value = out.join(', ');
}

btn3.onclick = function () {
    let out = [];
    for (let i = 0; i < a.length; i++) {
        let el = a[i];
        if (el % 2 !== 0) {
            out.push(el);
        }
    }
    outInput3.value = out.join(', ');
}

btn4.onclick = function () {
    for (let i=b.length-1; i>=0; i--) {
        let c=b[i];
        let arr = [];
        for (let j=c.length-1; j>=0; j--) {
            arr.push(c[j]);
        }
        document.querySelector(`.arr${i}`).textContent = `[${arr.join(' ')}]`;
    }
}

