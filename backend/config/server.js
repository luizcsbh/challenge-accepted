/** Import express framework module */
const express = require('express');

/** Import cors module */
const cors = require('cors');

/** Import consign module */
const consign = require('consign');

/** Start express object */
const app = express();

app.use(cors());
app.use(express.json());

/* Autoloads routes, models, and controllers to the app object */
consign()
	.include('src/routes')
	.into(app);

/* Export app object */
module.exports = app;



