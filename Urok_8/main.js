// const one = document.querySelector('.one');
// // one.style.color = 'red';
// one.style.paddingLeft = '200px';
// console.log(one.style);

//Добавить класс
// one.classList.add('black');
// one.classList.add('two');
// one.classList.add('konoha');
// one.classList.add('naruto');
//Удалить класс
// one.classList.remove('black');

// let btn = document.querySelector('.btn');
// const one = document.querySelector('.one');
// btn.onclick = function () {
//     one.classList.add('one2');
//     this.classList.add('black');
// }
// one.getAttribute('data');                      // читаем атрибут
// one.setAttribute('data-num', 6);               //создаем атрибут
// console.log(one.getAttribute('data-num'));

// let genrys = document.querySelectorAll('.genry');
// for (let i = 0; genrys.length > 1; i++) {
//     genrys[i].onclick = function () {
//         let shop = document.querySelector('.shop').value;
//         let price = this.getAttribute('data');
//         console.log(shop * price);
//     };
// }

// ЗАДАНИЕ №1
let btn = document.querySelector('.btn');
const element = document.querySelector('.element');
btn.onclick = function () {
    element.classList.add('msk');
    element.style.backgroundColor = 'green';
    element.style.width = '100px';
    element.style.height = 'auto';
}

// ЗАДАНИЕ №2-3
let btn1 = document.querySelector('.btn1');
let btn2 = document.querySelector('.btn2');
let text = document.getElementById('text');
btn1.onclick = function () {
    text.classList.add('class1');
    text.classList.add('class2');
    text.classList.add('class3');
}
btn2.onclick = function () {
    text.classList.remove('class2');
}