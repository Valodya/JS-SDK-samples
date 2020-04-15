const path = require('path');
const express = require('express');
const app = express();

const APP_PORT = 3000;

app.use(express.static(path.join(__dirname, './node_modules/backendless/dist')));
app.use(express.static('src'));

app.get('/config.js', (req, res) => {
  res.send(`window.BackendlessConfig = ${JSON.stringify(require('../backendless'))}`)
});

app.listen(APP_PORT, () => console.log(`Example app listening at http://localhost:${APP_PORT}`));
