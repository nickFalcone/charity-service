require('dotenv').config();
const express = require('express');
const fetch = require('node-fetch');
const app = express();

const APP_ID = '043b739c';

app.get('/', (req, res) => {
  fetch(`https://api.data.charitynavigator.org/v2/Organizations?app_id=${APP_ID}&app_key=${process.env.API_KEY}&search=${req.query.search}&searchType=NAME_ONLY&rated=${req.query.rated}`)
    .then(res => res.json())
    .then(res.set({
      'Access-Control-Allow-Origin': 'https://501c3.fyi'
    }))
    .then(json => res.send(json));
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});