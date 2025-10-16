 const { sumRequestHandler } = require('./sum');

  const requestHandler=(req,res)=>{
  console.log(req.url,req.method);

  if(req.url==='/'){
    res.setHeader('Content-Type' , 'text/html');
    res.write(`
      <html>
      <head><title>Practise set</title></head>
      <body>
      <h1> Welcome to calculator</h1>
      <a href="/calculator">Go to calculator<a/>
      </body>
      </html>
      `);
      return res.end();
  }
  else if(req.url==="/calculator"){
    res.setHeader('Content-Type','text/html');
    res.write(`
      <html>
  <head>
    <title>Practise set</title>
  </head>
  <body>
    <h1>Here is the calculator</h1>
    <form action="/calculate-result" method="POST">
      <input type="text" placeholder="First num" name="first">
      <input type="text" placeholder="Second num" name="second">
      <input type="submit" value="sum">
    </form>
  </body>
  </html>
      `);
      return res.end();
  }
  else if(req.url.toLowerCase()==="/calculate-result" && req.method==='POST'){
    return sumRequestHandler(req, res);
  }

  res.setHeader('Content-Type' , 'text/html');
    res.write(`
      <html>
      <head><title>Practise set</title></head>
      <body>
      <h1>404 page does not exist </h1>
      <a href="/">Go to home<a/>
      </body>
      </html>
      `);
      return res.end();
  }

  exports.requestHandler=requestHandler;  // we are exporting the object so we will need destructuring //