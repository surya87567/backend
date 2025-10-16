  const http = require("http");
  const testingSyntax=require('./syntax');

  const server = http.createServer((req,res)=>{
    console.log(req.url,req.method);
    testingSyntax();
  });

  const PORT = 8080;
  server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
  });