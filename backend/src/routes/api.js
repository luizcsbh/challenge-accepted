/** Import file-system module */
const fs = require('fs');

module.exports = (app) => {
   
    /** Route all locales */
    app.get('/apis/locales/', (req,res) => {
        const dados = fs.readFileSync('./src/database/locales.json', 'utf-8');
        res.send(JSON.parse(dados))
    });

    app.get('/apis/weather/', (req, res) => {
        const dados = fs.readFileSync('./src/database/weather.json', 'utf8');
        res.send(JSON.parse(dados));
    });

    app.get('/apis/weather/:id', function (req, res) {
        const weather = fs.readFileSync('./data/weather.json', 'utf8');
    
        res.send(
            JSON.parse(weather).filter(
                (item) => item.locale.id === Number(req.params['id']),
            ),
        );
    });
    
} 