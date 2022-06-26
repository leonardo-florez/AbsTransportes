create database if not exists DB_ABC_TRANSPORTES;

use DB_ABC_TRANSPORTES;

create table Tbl_Proveedores(
	Id_Proveedor int not null auto_increment primary key,
    Nombre_Proveedor varchar(100),
    Identificacion_Proveedor varchar(100),
    Direccion_Proveedor varchar(50),
    Correo_Proveedor varchar(100),
    Cantidad_Vehiculos_Proveedor int
);

insert into Tbl_Proveedores (Nombre_Proveedor, Identificacion_Proveedor, Direccion_Proveedor, Correo_Proveedor, Cantidad_Vehiculos_Proveedor) 
values ('Reparto de Santander', '123456789', 'CRA 99# 99 - 99', 'repartos_santander@test.com', 20);