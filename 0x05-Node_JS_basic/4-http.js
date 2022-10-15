/*
 * Creates a small http server
 */

const http = require('http');

const host = 'localhost'; // holds the host
const port = 1245; // holds the port number

// request listener to handle reqests from our server
const requestListener = (req, res) => {
  res.writeHead(200);
  res.end('Hello Holberton School!');
};

const app = http.createServer(requestListener); // Created a server

app.listen(port, host);
