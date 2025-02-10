const apiKey = "7bd057f69aca6447611a759c76b2ca62";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const search = document.getElementById("search");
const searchbtn = document.querySelector("#button-addon2");
const weatherimg = document.querySelector(".weather img");

async function weatherCheck(city) {
  const result = await fetch(apiUrl + city + `&appid=${apiKey}`);
  var data = await result.json();
  try {
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".speed").innerHTML =
      Math.round(data.wind.speed) + "Km/h";
    if (data.weather[0].main == "Clouds") {
      weatherimg.src = "assets/icons8-cloud-100.png";
    } else if (data.weather[0].main == "Rain") {
      weatherimg.src = "assets/icons8-heavy-rain-100.png";
    } else if (data.weather[0].main == "Clear") {
      weatherimg.src = "assets/icons8-sun-100.png";
    } else if (data.weather[0].main == "Snow") {
      weatherimg.src = "assets/icons8-snow-100.png";
    }
  } catch (err){
    console.log(err)
    document.querySelector(".weather").style.display="none"
  }
}
searchbtn.addEventListener("click", () => {
  weatherCheck(search.value);
  search.value=""
});
 