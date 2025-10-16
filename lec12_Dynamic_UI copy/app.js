// core module //
const path=require('path');

// external module //
const express = require('express');

const userRouter = require('./routes/userRouter');
const {hostRouter} = require('./routes/hostRouter');

const rootDir=require('./utils/pathUtil');

const app = express();

app.set('view engine','ejs'); // setup ejs engine //
app.set('views','views');

// ✅ fixed
app.use(express.urlencoded({ extended: true }));

app.use((req,res,next)=>{
  console.log(req.url, req.method);
  next();
});

app.use(userRouter);
app.use("/host",hostRouter);

app.use(express.static(path.join(rootDir,"public")));

app.use((req,res,next)=>{
  res.status(404).sendFile(path.join(rootDir,'views','error(404).html'));
});

const port = 8080;
app.listen(port, ()=>{
  console.log(`server is running on address http://localhost:${port}`);
});
