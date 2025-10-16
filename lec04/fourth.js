const http = require('http');

const server = http.createServer((req, res) => {
   console.log(req.url, req.method, req.headers);
   const fs=require('fs');

   if(req.url==='/'){
    res.setHeader('Content-Type', 'text/html');
   res.write('<html>');
   res.write('<head><title>Complete Coding</title></head>');
   res.write('<body><h1>Enter Your details: </h1>');
   
   // now we are going to create our form //

   res.write('<form action="/submit-details" method="POST"  >');
   res.write('<input type="text" name="username" placeholder="Enter your name : " /><br/>');
   res.write('<label for="male">Male</label>');
   res.write('<input type="radio" id="male" name="gender" value="male" />');
   res.write('<label for="female">Female</label>');
   res.write('<input type="radio" id="female" name="gender" value="female" />');
   res.write('<br/><input type="submit" vlaue="Submit"/>');
   res.write('</form>');
   
   
   res.write('</body>');
   res.write('</html>');
   return res.end();
   }
   else if (req.url.toLowerCase()==="/submit-details" && req.method=="POST"){
    fs.writeFileSync('user.text', 'Surya Jain');
    res.statusCode=302;
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
