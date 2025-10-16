const express=require('express');
const bodyParser = require('body-parser');

const app=express();

app.use((req,res,next)=>{
  console.log("first dummy middleware",req.url,req.method);
  next();
});

app.use((req,res,next)=>{
  console.log("second dummy middleware",req.url,req.method);
  next();
});

// app.use((req,res,next)=>{
//   console.log("third dummy middleware",req.url,req.method);
//   res.send(`<h1>this is surya</h1>`);
// });

app.get("/",(req,res,next)=>{
  console.log("handling for GET", req.url,req.method);
  res.send(`
    <h1>this is surya</h1>

    `);
});

app.get("/contact-us",(req,res,next)=>{
  console.log("handling /contact-us for GET", req.url,req.method);
  res.send(`
    <h1>Please give your details here</h1>
    <form action="/contact-us" method="POST">
    <input type="text" name="name" placeholder="Enter your name"/>
    <input type="email" name="email" placeholder="Enter your email"/>
    <input type="Submit"/>
    </form>
    `);
});


app.post("/contact-us", (req,res,next)=>{
  console.log("checking the body parsing", req.url,req.method,req.body);
  next();
});

app.use(bodyParser.urlencoded());// it will return body //

app.post("/contact-us",(req,res,next)=>{
  console.log("handling /contact-us for POST", req.url,req.method,req.body);
  res.send(`
    <h1>We will contact you shortly</h1>
    `);
});

const port=8080;
app.listen(port,()=>{
  console.log(`server is running on address http://localhost:${port}`);
});