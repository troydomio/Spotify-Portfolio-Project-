require('dotenv').config() 
const express = require('express');
const querystring = require('querystring');
const app = express();
const port = 8888

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;

// console.log(process.env.REDIRECT_URI);

app.get('/', (req, res) => {
    // res.send('Hello World!');
    const data = {
        name: 'Troy',
        isAwesome: true
    };
    res.json(data);
});

// app.get('/callback', (req,res) => {

// })
    const queryParams = querystring.stringify({
        client_id: CLIENT_ID,
        response_type: 'code',
        redirect_uri: REDIRECT_URI
    })

    app.get('/login', (req, res) => {
  res.redirect(`https://accounts.spotify.com/authorize?${queryParams}`);
  
});


app.listen(port,()=>{
    console.log(`Express app is listening at http://localhost:${port}`)
})

