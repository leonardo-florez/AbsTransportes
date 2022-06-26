require('./config/connection');

const express = require('express');
const port = (process.env.port || 3000);

const app = express();

// Set type data 
app.use(express.json());

// Port Config 
app.set('port', port);

// Routes
app.use('/api', require('./routes'));

// Run Express
app.listen(app.get('port'), (err) => {
    if(err){
        console.log('Error al iniciar servidor: ' + err);
    }
    else{
        console.log('Servidor iniciado en el puerto: ' + port);
    }
});