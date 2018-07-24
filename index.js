const request = require('request');
const argv = require('yargs').argv;
//console.log(argv);

const apiKey = 'c34f5253865ef668227184c10cff9e0c';
let city = argv.c || 'Boston'; //default value can be given using ||
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;//obtained from their api doc. '&' is used to append conditions

request(url, function (error, response, body) { //If successful, our required data will be present in body. You just need to fetch.
  if(error)
  console.log('error:', error); // Print the error if one occurred
  else{
      //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
      //console.log('body:', body); // Print the HTML for the Google homepage.
      let weather = JSON.parse(body);
      let message = `It's ${weather.main.temp} degrees in ${weather.name}`;
      console.log(message);
  }
});