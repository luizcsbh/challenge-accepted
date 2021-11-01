/** Import file-system module */
const fs = require('fs');

module.exports = (app) => {
    /** Root da API */
    app.get('/', (req, res) => {
        res.send('<strong>Weather Server: Online</strong> ');
    });

    /** Route all locales */
    app.get('/api/locales/', (req,res) =>{
        const dados = fs.readFileSync('./src/database/locales.json', 'utf-8');
        res.send(JSON.parse(dados))
    });

    app.get('/api/locales/:id', function (req, res) {
        const locales = fs.readFileSync('./src/database/locales.json', 'utf8');
    
        res.send(
            JSON.parse(locales).filter(
                (item) => item.locale.id === Number(req.params['id']),
            ),
        );
    });

    app.get('/api/weather/', function (req, res) {
        const dados = fs.readFileSync('./src/database/weather.json', 'utf8');
        res.send(JSON.parse(dados));
    });

    app.get('/api/weather/:id', function (req, res) {
        const weather = fs.readFileSync('./src/database/weather.json', 'utf8');
    
        res.send(
            JSON.parse(weather).filter(
                (item) => item.locales.id === Number(req.params['id']),
            ),
        );
    });
    
} 