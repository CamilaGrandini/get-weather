var app = {};
var apiLib = require("./lib/api");
var fs = require("fs");

app.config = {
  q: process.argv[2].charAt(0).toUpperCase() + process.argv[2].slice(1),
  
};
app.init = () => {
  const response = apiLib.getAPI(app.config.q);
};
app.init();
