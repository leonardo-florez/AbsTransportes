const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    port: 3306,
    database: 'db_abc_transportes'
});

connection.connect((err)=>{
    if(err){
        console.log("ha ocurrido un error: " + err);
    }
    else{
        console.log("Conexion exitosa!");
    }
});

module.exports = connection;