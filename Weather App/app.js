const API_Key = '2d14cdb2207979702f9870166ac4f4ce';

const btn = document.querySelector("button");
const weatherReport = document.querySelector(".weather");
const input = document.querySelector(".city input");
const city = document.querySelector(".card h4");
const country = document.querySelector(".country");
const img = document.querySelector(".card img");
const temperature = document.querySelector(".card h1");
const weatherDescription = document.querySelector("#weather-description");

btn.addEventListener("click", async (evt) => {
    evt.preventDefault();
    weatherReport.classList.remove("hide");

    let cityName = input.value;
    
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_Key}&units=metric`;
    let result = await fetch(URL);
    let data = await result.json();
    console.log(data);

    if(data.cod == '404'){
        alert("Please search for a valid city!");
    }

    const {main, name, sys, weather} = data;
    const icon = `https://openweathermap.org/img/wn/${weather[0]['icon']}@4x.png`

    img.src = icon;
    city.textContent = name;
    country.textContent = sys.country;
    temperature.innerText = `${Math.round(main.temp)}°C`;
    weatherDescription.innerText = `${weather[0]['description'].toUpperCase()}`;
})

weatherReport.addEventListener("click", () => {
    window.location.href = `https://www.google.com/search?q=${input.value}+weather&oq=${input.value}+weather&gs_lcrp=EgZjaHJvbWUyDwgAEEUYORiDARixAxiABDINCAEQABiDARixAxiABDINCAIQABiDARixAxiABDINCAMQABiDARixAxiABDIHCAQQABiABDIHCAUQABiABDIHCAYQABiABDIHCAcQABiABDIHCAgQABiABDIHCAkQABiABNIBCDkzNjRqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8`;
})