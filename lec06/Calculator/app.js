const http = require('http');

const {requestHandler} = require('./handler'); // destructuring //

const server=http.createServer(requestHandler); 

const PORT = 8080;

server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});