// let a = [1,2,3];
// localStorage.setItem("data", a);                    // добавление значения в localStorage
// let b = localStorage.getItem('data');
// console.log(localStorage.getItem('data'));
// console.log(typeof b);                              // localStorage преобразовывает массив в строку

// для корректроного вывода данных нужно преобразовать все в json-строку
// let a = [1,2,3,];
// localStorage.setItem('data', JSON.stringify(a));
// let b = localStorage.getItem('data');
// b = JSON.parse(b);                                      // преобразование в объект
// console.log(localStorage.getItem('data'));
// console.log(typeof b);

// get/post запросы

// AJAX - асинхронный код для обращения к серверу
// XMLHttpRequest - это встроенный в браузер объект, который даёт возможность делать HTTP-запросы к серверу без перезагрузки страницы.

let xhttp = new XMLHttpRequest();                       // создан новый объект
xhttp.onreadystatechange = function () {                // когда состояние объекта изменяется - вызываем функцию
    if (this.readyState == 4 & this.status == 200) {    // Выполняется проверка и если все "ОК" - передаем функцию с ответом с помощью responseText.
                                                        // This используется обязательно, т.к. обращение к свойству объекта (статус "200" - "ОК. Запрос клиента выполнен успешно")
        myfunc(this.responseText);                      // responseText - ответ на запрос в виде строки
    }
}

xhttp.open('GET', 'https://automarine.ru/', true);  // открыли запрос
xhttp.send();                                                        // высылаем запрос

function myfunc(data) {
    console.log(data);
}
