'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

var _webpackDevServer = require('webpack-dev-server');

var _webpackDevServer2 = _interopRequireDefault(_webpackDevServer);

var _config = require('../config.js');

var _config2 = _interopRequireDefault(_config);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// PARSE HTML BODY

var app = (0, _express2.default)(); // HTTP REQUEST LOGGER

var port = _config2.default.web.port;
var devPort = _config2.default.web.devPort;

app.use((0, _morgan2.default)('dev'));
app.use(_bodyParser2.default.json());

app.use('/', _express2.default.static(__dirname + './../public'));

app.get('/hello', function (req, res) {
    return res.send('Hello CodeLab');
});

app.listen(port, function () {
    console.log('Express is listening on port', port);
});

if (process.env.NODE_ENV == 'development') {
    console.log('Server is running on development mode');
    var webpackConfig = require('../webpack.dev.config');
    var compiler = (0, _webpack2.default)(webpackConfig);
    var devServer = new _webpackDevServer2.default(compiler, webpackConfig.devServer);
    devServer.listen(devPort, function () {
        console.log('webpack-dev-server is listening on port', devPort);
    });
}