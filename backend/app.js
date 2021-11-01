/* Imports server settings  */
const app = require('./config/server');

/**Server port */
const port = 9001;

/* Parameterize the listening port */
app.listen(port, () => {
    console.log(`Online Server running on http://localhost:${port}`);
});