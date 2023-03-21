 const express = require('express');
 const app = express();
 const debug = require('debug')('app');
 const morgan = require('morgan')
 const port = 3000;

app.use(morgan('combined'));

app.get("/",(req,res)=>{


res.send('Hello Nodejs');

})

app.listen(port, ()=>{
    console.log("Listening on port %d",port);
})