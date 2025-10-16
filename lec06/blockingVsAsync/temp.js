const fs=require('fs');

const responseHandler=(req,res)=>{
   console.log('1. start of script');

   // synchronous (blocking) operation 
   console.log('2. reading file synchronously');
   const dataSync=fs.readFileSync('user-details.txt','utf-8');
   console.log('3. synchronous read complete');
   console.log('Synchronous file content:\n', dataSync);

   // asynchronous (non-blocking) operation 
   console.log('4. reading file asynchronously');
   fs.readFile('user-details.txt','utf-8',(err,dataAsync)=>{
    if(err) throw err;
    console.log('6. asynchronous read complete');
    console.log('Asynchronous file content:\n', dataAsync);
   });
   console.log('5. end of script');
}

module.exports=responseHandler;