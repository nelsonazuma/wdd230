 let visitCount = localStorage.getItem('visitCount') || 0;
 visitCount = parseInt(visitCount) + 1;
 localStorage.setItem('visitCount', visitCount);

 // Display the visit count on the page
 const visitCounterElement = document.querySelector('.visit-counter');
 if (visitCounterElement) {
     visitCounterElement.textContent = `Page Visits: ${visitCount}`;
 }

 // function to fetch and display weather data
function getWeather() {
    const apiKey = '9a749bbbab85984be5f1f1fbc7254110';
    const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=accra&units=metric&appid=' + apiKey;
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const weatherInfo = document.getElementById('weather-info');
  
        const temperature = data.main.temp;
        const description = data.weather[0].description;
        const icon = data.weather[0].icon;
  
        const html = `
          <ul>
            <li>Temperature: ${temperature}°C</li>
            <li>Weather: ${description}</li>
            <li><img src="https://openweathermap.org/img/wn/${icon}.png" alt="Weather Icon"></li>
          </ul>
        `;
  
        weatherInfo.innerHTML = html;
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
      });
  }
  
  // Call getWeather function
  getWeather();
  