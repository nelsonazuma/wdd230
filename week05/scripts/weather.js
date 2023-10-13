// Select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

// API URL with coordinates
const apiKey = '9a749bbbab85984be5f1f1fbc7254110';
const latitude = '49.75'; // latitude
const longitude = '6.64'; // longitude
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${apiKey}`;

// Function to fetch weather data and update the HTML
async function apiFetch() {
  try {
    // Fetch data
    const response = await fetch(url);

    if (response.ok) {
      // Convert response to JSON
      const data = await response.json();

      // Output the results to the console
      console.log(data);

      // Update HTML elements with weather data
      currentTemp.textContent = data.main.temp + "°F";
      captionDesc.textContent = data.weather[0].description;

      // Set the weather icon
      const iconCode = data.weather[0].icon;
      const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
      weatherIcon.src = iconUrl;
      weatherIcon.alt = data.weather[0].description;
    } else {
      throw new Error(await response.text());
    }
  } catch (error) {
    console.error(error);
  }
}

// Call the apiFetch() function
apiFetch();
