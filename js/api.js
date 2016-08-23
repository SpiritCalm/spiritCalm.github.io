// shortcut for Document).ready(function() {
$(function() {

  function firstGetWeather() {
    // connecting the first input to the button
    let query = $('#firstLocation').val();

    let url = 'http://api.wunderground.com/api/a39c9196d89b6b7d/geolookup/conditions/q/' + query + '.json';

    $.getJSON(url, function(weatherInfo) {
      // console.log(weatherInfo.current_observation.temp_f);

      let $weatherData = $('#firstWeatherData')

      let temp = weatherInfo.current_observation.temp_f;

      let tempFTag = '<p>Temp: ' + temp +'F</p>';

      $weatherData.append(`<div>${tempFTag}</div>`);
    });
  }

  function secondGetWeather() {
    // connecting the second input to the button
    let query = $('#secondLocation').val();

    let url = 'http://api.wunderground.com/api/a39c9196d89b6b7d/geolookup/conditions/q/' + query + '.json';

    $.getJSON(url, function(weatherInfo) {
      let $weatherData = $('#secondWeatherData')

      let temp = weatherInfo.current_observation.temp_f;

      let tempFTag = '<p>Temp: ' + temp +'F</p>';

      $weatherData.append(`<div>${tempFTag}</div>`);
    });
  }

  // using jquery to target html tags
  $('#search-btn').click(firstGetWeather);

  $('#search-btn').click(secondGetWeather);

  // searching using the enter key
  $('#firstLocation').keypress(function(event) {
    console.log(event);

    if (event.key === 'Enter'){
      firstGetWeather();
    }
  });

  $('#secondLocation').keypress(function(event) {
    console.log(event);
    if (event.key === 'Enter'){
      secondGetWeather();
    }
  });

});
