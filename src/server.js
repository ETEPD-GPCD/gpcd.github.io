const express = require('express')
const app = express()
const port = 5500

app.get('/', (req, res) => {
  res.render('index.html', () => { console.log('working')});
});