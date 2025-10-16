const http = require('http');

const server = http.createServer((req, res) => {
   console.log(req.url, req.method, req.headers);
   if(req.url==='/'){
    res.setHeader('Content-Type', 'text/html');
   res.write('<html>');
   res.write('<head><title>Complete Coding</title></head>');
   res.write('<body><h1>Wecome Home</h1></body>');
   res.write('</html>');
   return res.end();
   }
   else if(req.url==='/product'){
    res.setHeader('Content-Type', 'text/html');
   res.write('<html>');
   res.write('<head><title>Complete Coding</title></head>');
   res.write('<body><h1>this is product page </h1></body>');
   res.write('</html>');
   return res.end();
   }
   res.setHeader('Content-Type', 'text/html');
   res.write('<html>');
   res.write('<head><title>Complete Coding</title></head>');
   res.write('<body><h1>Like / Share / Subscribe</h1></body>');
   res.write('</html>');
   res.end();//return is optional here //
});

const PORT = 8080;
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
