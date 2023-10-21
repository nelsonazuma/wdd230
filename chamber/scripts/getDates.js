// Get the current year
const currentYear = new Date().getFullYear();

// Get the last modified date of the document
const lastModifiedDate = document.lastModified;

// Set the copyright year in the footer
document.querySelector('footer p').textContent = `© ${currentYear} Nelson Azumah. Accra, Ghana.`;

// Set the last modified date in the footer
document.querySelector('#lastModified').textContent = `Last modified: ${lastModifiedDate}.`;


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