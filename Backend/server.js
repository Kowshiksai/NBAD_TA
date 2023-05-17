const express = require('express');
const app = express();

const port = 3000; // You can change the port number if desired
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

app.get('/random-number', (req, res) => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    res.json({ number: randomNumber });
  });
