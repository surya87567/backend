  const http = require("http");

  const surya=require('./user');

  const server = http.createServer(surya);

  const PORT = 8080;
  server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
  });