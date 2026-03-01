'use strict';

const express = require('express');

const app = express();
const port = 3000;

app.disable('x-powered-by');

app.get('/', (req, res) => {
  res.type('text/plain').send('Hello World');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
