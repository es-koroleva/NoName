(() => {
    // Объект SET
    // let a = new Set();              // создается объект Set (должен быть уникальным)
    // a.add(666);                     // метод add - создает новый объект в Set
    // a.add(888);
    // a.add(888);
    // a.add('Это строка');
    // a.add(true);
    // // a.clear();                       // метод clear - удаляет все имеющиеся значения
    // a.delete(666);                   //метод delete - уаляет значение

    // // let b = [1,2,3,4,5,6,7,8,9,1,2,5,4,3,3,2,2,];
    // // console.log(b);
    // console.log(a);
    // console.log(a.has(666));    // has - возвращает true, если такое значение есть в set

    // FOR OF; FOR; FOR IN
    // 1 способ

    // let b = [1,2,3,4,5,5,5,6,6,6,7,8,9,5,4,2,5,6,6,6,1,1,1,2];
    // let a = new Set(b);
    // let arr = Array.from(a);
    // console.log(arr);

    // 2 способ
    // let b = [1,2,3,4,5,5,5,6,6,6,7,8,9,5,4,2,5,6,6,6,1,1,1,2];
    // let a = new Set(b);
    // for (let i of a) {
    //     console.log(i);
    // }
    // for (let i = 0; b.length > i; i++) {
    //     console.log(b[i]);
    // }

    // 3 способ (в качестве ключей - индексы)
    // let b = [1,2,3,4,5,5,5,6,6,6,7,8,9,5,4,2,5,6,6,6,1,1,1,2];
    // for (let key in b) {
    //     console.log(b[key]);
    // }

    // 4 способ (в качестве ключей - значения)
    // let b = [1,2,3,4,5,5,4,3,2,2,3]
    // for (let key of b) {
    //     console.log(key);
    // }

    // ЗАДАНИЕ №1
    let a = new Set();
    a.add('e');
    a.add('r');
    a.add('i');
    a.add('k');
    a.add('t');
    a.add('h');
    a.add('e');
    a.add('b');
    a.add('e');
    a.add('s');
    a.add('t');
    console.log(a);

    // ЗАДАНИЕ №2-3
    let btn1 = document.querySelector('.btn1');
    let btn2 = document.querySelector('.btn2');
    let inputText = document.getElementById('input-text');

    btn1.onclick = function () {
        if (inputText.value === '') {
            alert('Заполни меня');
            return;
        }
        a.add(inputText.value);
        inputText.value = '';
        console.log(a);
    }

    // ЗАДАНИЕ №3
    // 1 вариант решения
    btn2.onclick = function () {
        let userValue = inputText.value;
        document.querySelector('.out-text').innerHTML = `${a.has(userValue)}`;
    }

    // 2 вариант решения
    // btn2.onclick = function () {
    //     let userValue = inputText.value;
    //     let f = false;
    //     for (let b of a) {
    //         if (b === userValue) {
    //             f = true;
    //             break;
    //         }
    //     }
    //     document.querySelector('.out-text').innerHTML = `${f}`;
    // }

    // 3 вариант решения
    // btn2.onclick = function () {
    //     let userValue = inputText.value;
    //     document.querySelector('.out-text').innerHTML = `${checkValue(userValue)}`;
    //
    //     function checkValue(value) {
    //         for (let b of a) {
    //             if (b === value) {
    //                 return true;
    //             }
    //         }
    //         return false;
    //     }
    // }

    //ЗАДАНИЕ №4
    let btn3 = document.querySelector('.btn3');
    let c = [1, 3, 10, 5, 8, 2, 11, 7, 3, 4, 9, 15, 4, 2, 2, 1];
    btn3.onclick = function () {
        let d = new Set();
        for (let i of c) {
            if (i > 5) {
                d.add(i);
            }
        }
        let arr = Array.from(d);
        document.querySelector('.out-text2').textContent = arr.join(', ');
    }

}) ();