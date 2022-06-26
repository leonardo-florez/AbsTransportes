const router = require('express').Router();
const connection = require('./config/connection');

/* ADD ROUTES */

/***GET PROVEEDORES***/
router.get('/', (req, res) => {
    let sql = 'select * from Tbl_Proveedores';
    connection.query(sql, (err, rows, fields) => {
        if(err){
            throw err;
        }
        else{
            res.json(rows);
        }
    });
});

/***GET PROVEEDOR BY ID***/
router.get('/:id', (req, res) => {
    const {id} = req.params;
    let sql = 'select * from Tbl_Proveedores where Id_Proveedor = ?';
    connection.query(sql, [id], (err, rows, fields) => {
        if(err){
            throw err;
        }
        else{
            res.json(rows);
        }
    });
});

/***ADD PROVEEDOR***/
router.post('/', (req, res)=> {
    const {
        Nombre_Proveedor, 
        Identificacion_Proveedor, 
        Direccion_Proveedor, 
        Correo_Proveedor, 
        Cantidad_Vehiculos_Proveedor
    } =  req.body;

    let sql = `insert into Tbl_Proveedores(Nombre_Proveedor, Identificacion_Proveedor, Direccion_Proveedor, Correo_Proveedor, Cantidad_Vehiculos_Proveedor) values('${Nombre_Proveedor}','${Identificacion_Proveedor}','${Direccion_Proveedor}','${Correo_Proveedor}','${Cantidad_Vehiculos_Proveedor}')`;
    
    connection.query(sql, (err,rows,fields) => {
        if(err){
            throw err;
        }
        else{
            res.json({status: 'Proveedor agregado'});
        }
    });
});

/***DELETE PROVEEDOR***/
router.delete('/:id', (req, res) => {
    const {id} = req.params;
    let sql = `delete from Tbl_Proveedores where Id_Proveedor = '${id}'`;
    connection.query(sql, (err, rows, fields) => {
        if(err){
            throw err;
        }
        else{
            res.json({status: 'Proveedor eliminado'});
        }
    });
});


/***EDIT PROVEEDOR***/
router.put('/:id', (req, res) => {
    const {id} = req.params;
    const {
        Nombre_Proveedor, 
        Identificacion_Proveedor, 
        Direccion_Proveedor, 
        Correo_Proveedor, 
        Cantidad_Vehiculos_Proveedor
    } =  req.body;

    let sql = `update Tbl_Proveedores set
                Nombre_Proveedor = '${Nombre_Proveedor}',
                Identificacion_Proveedor = '${Identificacion_Proveedor}',
                Direccion_Proveedor = '${Direccion_Proveedor}',
                Correo_Proveedor = '${Correo_Proveedor}',
                Cantidad_Vehiculos_Proveedor = '${Cantidad_Vehiculos_Proveedor}'
                where Id_Proveedor = '${id}'`;

    connection.query(sql, (err, rows, fields) => {
        if(err){
            throw err;
        }
        else{
            res.json({status: 'Proveedor modificado'});
        }
    });
});



module.exports = router;