const sumRequestHandler = (req, res) => {
  console.log("1. in sum request handler", req.url);
  const body=[];
  let result;
  req.on('data',(chunk)=>{
    body.push(chunk)
    console.log("2. chunk came");
  });
  req.on('end',()=>{
    console.log("3. request ended");
    const bodyStr=Buffer.concat(body).toString();
    const params=new URLSearchParams(bodyStr);
    const bodyObj=Object.fromEntries(params);
    result=Number(bodyObj.first)+Number(bodyObj.second);
    console.log(result);

  })
  console.log("4. response sending");
  res.setHeader('Content-Type' , 'text/html');
    res.write(`
      <html>
      <head><title>Practise set</title></head>
      <body>
      <h1>Your Sum is ${result}</h1>
      </body>
      </html>
      `);
      return res.end();
};

exports.sumRequestHandler = sumRequestHandler;


// it will give an error that you result is undefined because execution is not in the sequence of 1,2,3,4 it will be in the sequence 1,4,2,3 that means result is still not calculated that is why it is giving that error.//
