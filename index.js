require('dotenv').config() 
const express = require('express');
const app = express();
const port = 8888

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;

// console.log(process.env.CLIENT_ID);

app.get('/', (req, res) => {
    // res.send('Hello World!');
    const data = {
        name: 'Troy',
        isAwesome: true
    };
    res.json(data);
});

app.listen(port,()=>{
    console.log(`Express app is listening at http://localhost:${port}`)
})

