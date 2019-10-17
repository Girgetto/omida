  
require('dotenv').config();

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require('express');
const logger = require('morgan');
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const flash = require('connect-flash');
const debug = require('debug')('app');

const appName = require('./package.json').name;

require('./configs/db.config');

const app = express();

const corsOptions = {
	origin(origin, callback) {
		const originIsWhitelisted = whitelist.indexOf(origin) !== -1;
		callback(null, originIsWhitelisted);
	},
	credentials: true,
};

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors(corsOptions));


app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./routes'));

app.use('*', (_, res) => {
	res.sendFile(path.join(__dirname, 'public/index.html'));
});


const server = app.listen(process.env.PORT || 4000, () => {
	debug(`Running %o on port ${server.address().port}`, appName);
});

module.exports = app;