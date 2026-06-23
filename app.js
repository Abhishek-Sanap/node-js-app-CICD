const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hiiiiiiii from jenkins, added webhook, we are from 18 MAY Devops batch');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
