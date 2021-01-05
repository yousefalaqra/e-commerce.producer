const express = require('express');
const bodyParser = require('body-parser');
const chalk = require('chalk');
const pack = require('../package');
const cors = require('cors');
const config = require('config');
const app = express();

app.use(cors());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(require('express-status-monitor')());
require('./routes')(app);

app.use(haltOnTimedout);
function haltOnTimedout(req, res, next) {
  if (!req.timedout) next();
}

mode = process.env.NODE_ENV;

const start = () => (
    app.listen(config.get(`${mode}.port`), () => {
      console.log(chalk.yellow('.......................................')); //eslint-disable-line
      console.log(chalk.green(config.get(`${mode}.name`))); //eslint-disable-line
      console.log(chalk.green(`Port:\t\t${config.get(`${mode}.port`)}`)); //eslint-disable-line
      console.log(chalk.green(`Mode:\t\t${config.get(`${mode}.mode`)}`)); //eslint-disable-line
      console.log(chalk.green(`App version:\t${pack.version}`)); //eslint-disable-line
      console.log(chalk.yellow('.......................................')); //eslint-disable-line
    })
  );

start();