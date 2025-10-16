

  // //external module
  // const express=require('express');

  // //local module
  // const requestHandler=require('./user');

  // const app=express();
  
  // app.use("/",(req,res,next)=>{
  //   console.log("came in first middleware",req.url,req.method);
  //   next();
  // });

  // app.use("/submit-details",(req,res,next)=>{
  //   console.log("came in second middleware",req.url,req.method);
  //   res.send('<p>welcome to complete coding nodejs series</p>');
  // });


  // const PORT = 8080;
  // app.listen(PORT, () => {
  //   console.log(`Server is running at http://localhost:${PORT}`);
  // });




//   const express = require('express');
// const app = express();

// // Normal middleware (runs for all requests)
// app.use("/surya",(req, res, next) => {
//   console.log("This is a general middleware");
//   next();
// });
// app.use("/by",(req,res,next)=>{
//   console.log("surya is here");
//   next();
// })
// // GET route middleware
// app.get('/', (req, res, next) => {
//   console.log("GET middleware triggered");
//   res.send("Hello via GET");
// });

// // POST route middleware
// app.use('/hello', (req, res, next) => {
//   console.log("POST middleware triggered");
//   res.send("Hello via POST");
// });

// app.listen(3000, () => {
//   console.log("Server running on http://localhost:3000");
// });


const express = require('express');
const app = express();

// First GET middleware
app.get('/profile', (req, res, next) => {
  console.log("Step 1: Check authentication");
  req.user = { name: "Surya", age: 18 };  // add data to request
  next(); // go to next middleware
});

// Second GET middleware
app.get('/p', (req, res, next) => {
  console.log("Step 2: Add extra info");
  req.user.role = "Student";  // add more data
  next(); // go to final handler
});

// Final GET handler (sends response)
app.get('/', (req, res) => {
  console.log("Step 3: Send response");
  res.send(`User: ${req.user.name}, Age: ${req.user.age}, Role: ${req.user.role}`);
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
