const form = document.getElementById('weatherForm');
const input = document.getElementById('cityInput');
const resultDiv = document.getElementById('weatherResult');

const mockWeatherData = {
  "Hyderabad": { temp: 32, condition: "Sunny" },
  "Delhi": { temp: 38, condition: "Hot" },
  "Mumbai": { temp: 30, condition: "Humid" },
  "Chennai": { temp: 35, condition: "Partly Cloudy" }
};

form.addEventListener('submit', function (e) {
  e.preventDefault(); 
  
  const city = input.value.trim();
  resultDiv.innerHTML = "Loading...";
  
  setTimeout(() => {
    if (mockWeatherData[city]) {
      const weather = mockWeatherData[city];
      resultDiv.innerHTML = `
        <p>🌆 City: <strong>${city}</strong></p>
        <p>🌡️ Temperature: <strong>${weather.temp}°C</strong></p>
        <p>⛅ Condition: <strong>${weather.condition}</strong></p>
      `;
    } else {
      resultDiv.innerHTML = `<span style="color:red;">No data found for "${city}". Try another city.</span>`;
    }
  }, 1000);
});
