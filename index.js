const express = require("express");
const app = express();


app.get('/test',(req,res)=>{
    res.send('hi');
});

app.listen(5000,()=>{

});
