const express = require('express');
const app = express();

const port = 3000;

const utils = require('./utils');

app.use(express.json());

const router = require('./routes/index')

app.use('/api', router);

function setupGlobals() {
  global.Utils = utils;
}

setupGlobals();

app.listen(port, () => {
  console.log(`Server listening on ${port}...`);
})
