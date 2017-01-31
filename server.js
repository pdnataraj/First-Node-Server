const express = require("express");
const app = express();
var path = require('path');
app.get('/', (request, response) => {  
  response.sendFile(path.join(__dirname + '/index.html'));
})
// Define port to listen on
const PORT = 8080;

// Create a function which handles requests and sends response
app.listen(PORT, (err) => {  
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${PORT}`)
})

