import express from 'express';
import path from 'path';

import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';

import config from '../config.js'

import morgan from 'morgan'; // HTTP REQUEST LOGGER
import bodyParser from 'body-parser'; // PARSE HTML BODY

const app = express();
const port = config.web.port;
const devPort = config.web.devPort;

app.use(morgan('dev'));
app.use(bodyParser.json());

app.use('/', express.static(__dirname + './../public'));

app.get('/hello', (req, res) => {
  return res.send('Hello CodeLab');
});

app.listen(port, () => {
  console.log('Express is listening on port', port);
});

if(process.env.NODE_ENV == 'development') {
  console.log('Server is running on development mode');
  const webpackConfig = require('../webpack.dev.config');
  const compiler = webpack(webpackConfig);
  const devServer = new WebpackDevServer(compiler, webpackConfig.devServer);
  devServer.listen(
    devPort, () => {
      console.log('webpack-dev-server is listening on port', devPort);
    }
  );
}
