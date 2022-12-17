fetch('https://api.openweathermap.org/data/2.5/weather?lat=51.660548&lon=39.199774&appid=58e0736cfd619593a1a7747746d519f7&units=metric')
    .then(function (resp) {
        return resp.json()
    })
    .then(function (data) {
        console.log(data);
        document.querySelector('.city-name').innerHTML = data.name;
        document.querySelector('.temperature').textContent = Math.round((data.main.temp)) + '\t°';
        document.querySelector('.weather').innerHTML = data.weather[0]['description'];
        document.querySelector('.icon').innerHTML = `<img alt="icon" src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png" width="50px">`;
        document.querySelector('.wind-speed').innerHTML = data.wind.speed + ' км/ч';
        document.querySelector('.humidity').innerHTML = data.main.humidity + ' %';
        document.querySelector('.sunrise').innerHTML = getTime(data.sys.sunrise);
        document.querySelector('.sunset').innerHTML = getTime(data.sys.sunset);
    })

function getTime(timestamp) {
    const date = new Date(timestamp * 1000);
    const hours = date.getHours();
    const minutes = date.getMinutes()<10
        ? "0" + date.getMinutes()
        : date.getMinutes();
    return `${hours}:${minutes}`
}