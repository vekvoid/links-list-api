const express = require('express');
const helmet = require('helmet');
const config = require('./config');
const routes = require('./routes');

const app = express();

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.listen(config.port, () => console.log(`Listening port ${config.port}`));
