const image = document.querySelector("img");

document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();

    let city = document.getElementById("cityName").value;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0607cf12e6b08e55a4f7d52f2d3c093a&units=metric`)
    .then((res) => {
        return res.json();
    })
    .then((res) => {
        document.getElementById("box").innerHTML = view(res);
    })
    .catch((err) => {
        console.log(err)
    })
})

function view(res){
    return `
        <h1> Current celcius: ${res.main.temp} </h1>
        <img src="http://openweathermap.org/img/w/${res.weather[0].icon}.png" alt="">
    `;
}