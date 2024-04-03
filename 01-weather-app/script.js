const apiKey = '643bc2146c0f2bf89d0ec5daeb098de1';
const apiUrl =
	'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');

function changeWeatherImg(weatherCondition) {
	switch (weatherCondition) {
		case 'Clouds':
			weatherIcon.src = 'images/clouds.png';
			return;
		case 'Clear':
			weatherIcon.src = 'images/clear.png';
			return;
		case 'Drizzle':
			weatherIcon.src = 'images/drizzle.png';
			return;
		case 'Mist':
			weatherIcon.src = 'images/mist.png';
			return;
		case 'Rain':
			weatherIcon.src = 'images/rain.png';
			return;
		case 'Snow':
			weatherIcon.src = 'images/snow.png';
			return;
	}
}

async function checkWeather(city) {
	const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
	if (response.status === 404) {
		document.querySelector('.error').style.display = 'block';
		document.querySelector('.weather').style.display = 'none';
	} else {
		const data = await response.json();
		document.querySelector('.temp').innerHTML =
			Math.round(data.main.temp) + '°C';
		document.querySelector('.city').innerHTML = data.name;
		document.querySelector('.humidity').innerHTML = data.main.humidity + ' %';
		document.querySelector('.wind').innerHTML = data.wind.speed + ' km/h';
		changeWeatherImg(data.weather[0].main);
		document.querySelector('.error').style.display = 'none';
		document.querySelector('.weather').style.display = 'block';
		console.log(data);
	}
}

searchBtn.addEventListener('click', () => {
	checkWeather(searchBox.value);
});
