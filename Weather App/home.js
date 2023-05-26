async function fetchWeather() {
   const url = ('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city , options)
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '640683931fmshcde23238ce98ccfp1a8259jsnae5c0b5145a1',
      'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
  };
  
  
  const getWeather = async (city) => {
    
    cityName.innerHTML = city;
  
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
  
    
      cloud_pct.innerHTML = result.cloud_pct;
  
      
      temp.innerHTML = result.temp;
  
     
      feels_like.innerHTML = result.feels_like;
  
      
      humidity.innerHTML = result.humidity;
  
      min_temp.innerHTML = result.min_temp;
  
      
      max_temp.innerHTML = result.max_temp;
  
 
      wind_speed.innerHTML = result.wind_speed;
  
      wind_degrees.innerHTML = result.wind_degrees;
  
    
      sunrise.innerHTML = result.sunrise;
  
    
      sunset.innerHTML = result.sunset;
    } 
    catch (error) {
      console.error(error);
    }
  };

  
  
    GO.addEventListener('click', (e) => {
      e.preventDefault();
      getWeather(city.value);
    });
  
    getWeather('kathmandu');
  }

  
  fetchWeather();