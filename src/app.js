const express = require('express');
const chalk = require('chalk');
const app = express();
const PORT = process.env.PORT || 3000;

app.use('/users',(req,res,next)=>{
    res.send("initail start up");
});

app.listen(PORT,()=>console.log(`%s App is running at http://localhost: ${PORT} `, chalk.green('✓')));