// document.querySelector('.one').onclick = function (event) {
//     console.log(event);
//     console.log('Вы кликнули на блок один')
// }

// двойной клик мыши
// document.querySelector('.two').ondblclick = function () {
//     console.log('Вы кликнули на второй блок');
// }

// вывод меню правой кнопкой мыши
// document.querySelector('.two').oncontextmenu = function () {
//     console.log('Вы кликнули на второй блок');
//     return false;                                                           // запрет выводить меню
// }

// результат при наведении мыши на объект
// let width = 100;
// document.querySelector('.three').onmousemove = function () {
//     // console.log('Вы навели мышь на третий блок');
//     document.querySelector('.three').style.width = width + 'px';         // при наведении квадрат будет расширяться
//     width++;
// }

// действия мышки после выполненого наведения
// document.querySelector('.three').onmouseenter = function () {
//     document.querySelector('.three').style.background = 'blue';
// }
// document.querySelector('.three').onmouseleave = function () {
//     document.querySelector('.three').style.background = 'white';
// }

// действия мышки при нажатии и удержании
// document.querySelector('.three').onmousedown = function () {
//     document.querySelector('.three').style.background = 'red';
// }

// возвращение к началу после снятия нажатия мышки
// document.querySelector('.three').onmouseup = function () {
//     document.querySelector('.three').style.background = 'green';
// }

// изменение событий в инпуте
// document.querySelector('.inp-1-text').oninput = function (event) {
//     console.log(event);
// }

// событие при нажатии клавиши (срабатывает когда отпускаешь клавишу)
// document.querySelector('.inp-1-text').onkeypress = function (event) {
//     console.log(event.charCode);
//     console.log(event.code);
//     console.log(event.keyCode);
//     console.log(event.key);
//     console.log(event);
// }

// событие при нажатии клавиши (срабатывает когда клавиша еще не отпущена)
// document.querySelector('.inp-1-text').onkeydown = function (event) {
//     console.log(event.charCode);
//     console.log(event.code);
//     console.log(event.keyCode);
//     console.log(event.key);
// }

// событие, возникающие при отпускании нажатой клавиши
// document.querySelector('.inp-1-text').onkeyup = function (event) {
//     console.log(event.charCode);
//     console.log(event.code);
//     console.log(event.keyCode);
//     console.log(event.key);
// }

// ЗАДАНИЕ №1
let width = 1;
let height = 1;
let round1 = document.querySelector('.round-1');
let r1 = new Map();
r1.set('down', {
    classToAdd: 'down',
    classToRemove: 'up',
    width: width + '15px',
    height: height + '15px'
})
r1.set('up', {
    classToAdd: 'up',
    classToRemove: 'down',
    width: '50px',
    height: '50px'
})

round1.onclick = function () {
    let s;
    if (round1.classList.contains('up')) {
        s = r1.get('down');
    } else {
        s = r1.get('up');
    }
    round1.classList.remove(s.classToRemove);
    round1.classList.add(s.classToAdd);
    round1.style.width = s.width;
    round1.style.height = s.height;
}

// ЗАДАНИЕ №2
let round2 = document.querySelector('.round-2');
let r2 = {
    down: {
        classToAdd: 'down',
        classToRemove: 'up',
        width: width + '15px',
        height: height + '15px',
        boxShadow: '0 0 7px darkgreen',
        backgroundColor: '#E9F5BA',
        lineHeight: '115px',
        textAlign: 'center',
        textContent: 'HELLO!'
    },
    up: {
        classToAdd: 'up',
        classToRemove: 'down',
        width: '50px',
        height: '50px',
        boxShadow: 'none',
        backgroundColor: 'white',
        lineHeight: '50px',
        textAlign: 'center',
        textContent: 'OK!'
    }
};
round2.ondblclick = function () {
    let s;
    if (round2.classList.contains('up')) {
        s = r2.down;
    } else {
        s = r2.up;
    }
    round2.classList.remove(s.classToRemove);
    round2.classList.add(s.classToAdd);
    round2.style.width = s.width;
    round2.style.height = s.height;
    round2.style.boxShadow = s.boxShadow;
    round2.style.backgroundColor = s.backgroundColor;
    round2.style.lineHeight = s.lineHeight;
    round2.style.textAlign = s.textAlign;
    round2.textContent = s.textContent;
    console.log(round2.textContent);
}

// ЗАДАНИЕ №3
let image = document.querySelector('img');
document.querySelector('.round-3').onclick = function () {
    let img1 = 'image/image-1.jpg';
    let img2 = 'image/image-2.jpg';
    let currentSrc = image.getAttribute('src');
    let s = currentSrc === img1 ? img2 : img1;
    image.setAttribute('src', s);
}

// ЗАДАНИЕ №4-5
let inpText = document.querySelector('.inp-text');
inpText.onkeypress = function (event) {
    let code = event.charCode;
    event.preventDefault();
    inpText.value = code;
    console.log(!(code < 58 && code > 47));
}
