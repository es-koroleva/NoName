// let xhttp = new XMLHttpRequest();
//
// xhttp.onreadystatechange = function () {
//     if (this.readyState === 4 && this.status === 200) {
//         myfunc(this.responseText);
//     }
// }
//
// xhttp.open('GET', 'https://automarine.ru/', true);
// xhttp.send();
//
// function myfunc(data) {
//     console.log(data);
// }

// fetch('http://localhost:63342/index.html/JS/Urok_14/main.js?_ijt=7br0uft4tg40s7vr25a0o482h2')         // метод сетевого запроса
//     .then(data => {
//     console.log(data);
// })

// fetch('http://localhost:63342/index.html/JS/Urok_14/main.js?_ijt=7br0uft4tg40s7vr25a0o482h2')
// .then(data => {
//     console.log(data);
//     console.log(data.text());
// })

// fetch('http://localhost:63342/index.html/JS/Urok_14/index.html?_ijt=7br0uft4tg40s7vr25a0o482h2&_ij_reload=RELOAD_ON_SAVE')
// .then(data => {
//     console.log(data);
//     data.text().then(data2 => {
//         console.log(data2);              //выведется вся структура страницы в виде текста
//     })
// })

// более читаемая структура записи выше:
// fetch('http://localhost:63342/index.html/JS/Urok_14/index.html?_ijt=7br0uft4tg40s7vr25a0o482h2&_ij_reload=RELOAD_ON_SAVE')
// .then(data => {
//     console.log(data);
//     return data.text()
// })
// .then(data => {
//     console.log(data)
// })

// запись выше, но без return (но и без promise)
// без return можно применить, если используем одну операцию
// fetch('http://localhost:63342/index.html/JS/Urok_14/index.html?_ijt=7br0uft4tg40s7vr25a0o482h2&_ij_reload=RELOAD_ON_SAVE')
// .then(data => data.text())
// .then(data => console.log(data))

//PROMISE - удобный способ организации асинхронного кода
// let a = new Promise((resolve, reject) => {      // после завершения при успешном выполнении - resolve, при ошибке - reject
//     fetch('http://localhost:63342/index.html/JS/Urok_14/index.html?_ijt=7br0uft4tg40s7vr25a0o482h2&_ij_reload=RELOAD_ON_SAVE')
//         .then(data => {
//             resolve(data.text())
//         })
// })

let a = new Promise((resolve, reject) => {
    fetch('http://localhost:63342/index.html/JS/Urok_14/index.html?_ijt=7br0uft4tg40s7vr25a0o482h2&_ij_reload=RELOAD_ON_SAVE')
        .then(data => {
            resolve(data.text())
        })
})

a.then(data => {
    console.log(data)
})

let b = new Promise((resolve, reject) => {
    fetch('http://localhost:63342/index.html/JS/Urok_14/index.html?_ijt=7br0uft4tg40s7vr25a0o482h2&_ij_reload=RELOAD_ON_SAVE')
        .then(data => {
            resolve(data.text())
        })
})

b.then(data => {
    console.log(data)
})

Promise.all([a, b]).then(data => {          // выведутся все промисы в указанном порядке, становится массивом
    console.log(data)
})