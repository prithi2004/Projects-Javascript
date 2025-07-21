async function getWeather() {
  const city = document.getElementById('cityInput').value;
  const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    if (data.cod === 200) {
      document.getElementById('weatherResult').innerHTML = `
        <h3>Weather in ${data.name}</h3>
        <p>🌡️ Temp: ${data.main.temp}°C</p>
        <p>🌥️ Condition: ${data.weather[0].main}</p>
        <p>💨 Wind: ${data.wind.speed} m/s</p>
      `;
    } else {
      document.getElementById('weatherResult').innerHTML = '<p>City not found!</p>';
    }
  } catch (error) {
    document.getElementById('weatherResult').innerHTML = '<p>Error fetching data!</p>';
  }
}
