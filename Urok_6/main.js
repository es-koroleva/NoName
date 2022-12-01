// switch (x) {
//     case 'значение 1'    // значение if(x==='значение 1')
//     ..... (условие)
//     [break]
//     case 'значение 2'    // значение if(x==='значение 2')
//     ..... (условие)
//     [break]
//     default:
//     ..... (условие)
//     [break]
// }

// let a=5+5;
// switch (a) {
//     case 5:
//         alert('Маловато');
//         break;
//     case 10:
//         alert('В точку');
//         let a = prompt("Hello");
//         if (a>5) {
//             alert("Yes");
//         }
//         break;
//     case 15:
//         alert('Перебор');
//         break;
//     default:
//         alert('Нет таких значений');
// }

// let a = '1';
// let b = 0;
// if (+a === b+1) {
//     console.log(1);
// } else {
//     console.log(2);
// }
// switch (+a) {
//     case b+1:
//         alert('Выполнится, т.к. значение +а бует 1, что в точности равно b+1');
//         break;
//     default:
//         alert('Это не выполнется');
// }

// let a = 12-7;
// switch (a) {
//     case 12:
//         alert('Правильно');
//         break;
//     case 5:                     // вариант case без break
//     case 10:
//         alert('Не правильно');
//         alert('Учи математику');
//         break;
//     default:
//         alert('Результат кривой');
// }

// let arg = prompt('Введите число');
// switch (arg) {
//     case '0':
//     case '1':
//         alert('Один или ноль');
//         break;
//     case '2':
//         alert('Два');
//         break;
//     case 3:                             // сравнит 3 и '3' -> "мертвый код" -> выведет default
//         alert('.....');
//         break;
//     default:
//         alert('Неизвестное значение');
// }

// ?? - ОПЕРАТОР НУЛЕВОГО СЛИЯНИЯ           //из двух значений выводит то, что определено

// let a = 1;
// a??с
// если а опреденено, то а
// если а не определено, то с

// result = a??b;                                      // краткая запись
// result = (a !== null && a !== undefined) ? a:b;     // полная запись

// let user;
// alert(user ?? 'Аноним'); // Выведет "Аноним", т.к. user не определен

// let firstName = null;
// let lastName = undefined;
// let nickName = 'Erik Dark Super Star';
//
// alert(firstName ?? lastName ?? nickName ?? 'Аноним');

let op;
function func() {
    let result;
    let num1 = Number(document.getElementById('num1').value);
    let num2 = Number(document.getElementById('num2').value);
    switch (op) {
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
    document.getElementById('result').innerHTML = result;
}

// ЗАДАНИЕ №1
let arg1 = prompt('Введите число');
switch (arg1) {
    case '1':
        alert('Верно');
        break;
    case '10':
        alert('Не верно');
        break;
    default:
        alert('Не сработало');
}

// ЗАДАНИЕ №2
let arg2 = prompt('Введите число');
switch (arg2) {
    case '1':
    case '2':
    case '3':
        alert('ЗИМА');
        break;
    case '4':
    case '5':
    case '6':
        alert('ВЕСНА');
        break;
    case '7':
    case '8':
    case '9':
        alert('ЛЕТО');
        break;
    case '10':
    case '11':
    case '12':
        alert('ОСЕНЬ');
        break;
    default:
        alert('Еще раз');
}

// ЗАДАНИЕ №3
let a = "Hello";
let b = null;
let c = 10;
alert(a ?? b ?? c);             //Выведет Hello

// let a = null;
// let b = '10';
// let c = "Hello";
// alert(a ?? b ?? c);         // Выведет 10