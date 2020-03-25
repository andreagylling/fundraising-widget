const express = require('express');
const app = express();
const fs = require('fs');
const port = 5000;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  next();
});

app.use(
  express.json({
    type: ["application/json", "text/plain"]
  })
);

app.get('/totalFunds', (req, res) => {
  fs.readFile('raisedFunds.json', 'utf8', (err, data) => {
    if (err) console.log(err);
    res.send(JSON.parse(data));
  })
});

app.post('/totalFunds/pledge', (req, res) => {
  const { newTotal } = req.body;
  const amount = { totalFunds: JSON.stringify(newTotal)}
  const totalFunds = JSON.stringify(amount)
  fs.writeFile('raisedFunds.json', totalFunds, 'utf8', () => {})
})


app.listen(port, () => console.log(`Listening on port ${port}`));