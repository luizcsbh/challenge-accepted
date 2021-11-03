/** Rota raiz do Back end */

module.exports = (app) => {
    /** Root da API */
    app.get('/', (req, res) => {
        res.send('<strong>Weather Server: Online</strong> ');
    });
}