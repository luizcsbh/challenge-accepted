const fs = require('fs');

module.exports = (app) => {

    /** Route all weather */
    
    app.get('/api/weather/', (req, res) => {
        const data = fs.readFileSync('./src/database/weather.json', 'utf8');
    
        res.send(JSON.parse(data));
    });

    /** Route all weather for id: */
    app.get('/api/weather/:id', (req, res) => {
        const weather = fs.readFileSync('./src/database/weather.json', 'utf8');
    
        res.send(
            JSON.parse(weather).filter(
                (item) => item.locale.id === Number(req.params['id']),
            ),
        );
    });
    
} 