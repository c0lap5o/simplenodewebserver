/*server.js*/
// return the built-in HTTP module
const http = require('http');
const fs = require('fs');
     
const hostname = '127.0.0.1';
const port = 8080;
const indexPath = 'src/index.html';

//Read the file synchronously and conver to string
const index = fs.readFileSync(indexPath,'utf8').toString();

//Create server from built in HTTP module
const server = http.createServer(async function(req, res) {
  res.statusCode = 200;
  //tells what type of data is going to be sent
  res.setHeader('Content-Type', 'text/html');
   //Sends response body
  console.log('sending index');
  res.write(index);
  //tells to the server that everything has been sent
  res.end();
});

//Set the server to listen in the desired port and hostname
server.listen(port, hostname, function() {
  console.log('Server running at http://'+ hostname + ':' + port + '/');
});