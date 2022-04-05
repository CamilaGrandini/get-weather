const axios = require("axios");
var fs = require("fs");
var api = {};

api.getAPI = (city) => {
  const options = {
    method: "GET",
    url: "https://community-open-weather-map.p.rapidapi.com/weather",
    params: {
      q: city,
      lat: "0",
      lon: "0",
      callback: "test",
      id: "2172797",
      lang: "null",
      units: "imperial",
      mode: "xml",
    },
    headers: {
      "X-RapidAPI-Host": "community-open-weather-map.p.rapidapi.com",
      "X-RapidAPI-Key": "98fe0ad276mshf544a0b4ff38bfcp1ea824jsnb2d17a34e986",
    },
  };
  return axios
    .request(options)
    .then(function (response) {
      console.log(response.data.body);

      fs.appendFile(
        __dirname + "/logs/log.txt",
        "" + "Current weather for: " + city + " : " + response.data + "\r\n",
        function (err) {
          if (err) console.log("error", err);
          console.log("File Updated with the latest weather!");
        }
      );
    })
    .catch(function (error) {
      console.error(error);
    });
};
module.exports = api;
