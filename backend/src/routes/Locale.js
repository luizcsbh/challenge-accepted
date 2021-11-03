const fs = require('fs'); 

module.exports = (app) => {
   
    /** Route all locales */
    app.get('/api/locales/', (req, res) => {
        data = require('../database/locales.json', 'utf-8');
        res.json(data);
    });

     /** Route locales for id: */
     app.get('/api/locales/:id', (req, res) => {
        const locale = fs.readFileSync('./src/database/locales.json', 'utf-8');
    
        res.send(
            JSON.parse(locale).filter(
                (item) => item.id === Number(req.params['id']),
            ),
        );
    });
}

