const express=require('express');
const bodyparser=require('body-parser');
const multer=require('multer')();
const app=express();
const db=require('./config/dbsetup');


// Setting body-parser
app.use(express.json());



// Setting view engines
app.set('view engine','ejs');

// Website routes
app.use('/',require('./routes/homeRoute'));

const PORT= process.env.PORT || 3000;


// Server listening
app.listen(PORT,()=>{
    console.log(`Server listening at: ${PORT}`);
})