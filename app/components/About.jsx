var React = require('react');

var About =  (props) => {
  return(
   <div>
      <h1 className="text-center">About</h1>
      <p>This is  a weather aplication build on React. I Have built this 
      for the Complete React Web Aplication Course, to find this repositories please visit 
      <a href="https://github.com/deripal5/ReactWeather"> Simple Weather Web App </a>  on my github page.</p>
      <p>Here are some tools I used : </p>
      <ul>
        <li><a href="http://facebook.github.io/react">React</a> - This is javasrcipt framwork used</li>
        <li><a href="http://openweathermap.org">Open Weather Map</a>- I used Open Weather Map to search for weather data by city name</li>
      </ul>
   </div>
  )
};

module.exports = About;
