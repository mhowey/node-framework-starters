const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('hello world - Express.js');
})
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Express server is running at http://localhost:${port}`)
})