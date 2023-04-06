const express = require('express');
const app = express();
const port = 3000;


app.get('/', (req, res) => {
    res.status(200).send({status:true,message:"test"}); 
})

app.listen(port, () => {
    console.log(`Running server on port ${port}`);
})

