export class ProveedorForm {
    id: number;
    name: string;
    document: string;
    adress: string;
    email: string;
    vehicles: number;

    constructor( proveedor?: Proveedor ) {
        this.id = proveedor.Id_Proveedor;
        this.name = proveedor.Nombre_Proveedor;
        this.document = proveedor.Identificacion_Proveedor;
        this.adress = proveedor.Direccion_Proveedor;
        this.email = proveedor.Correo_Proveedor;
        this.vehicles = proveedor.Cantidad_Vehiculos_Proveedor;
    }
}

export class Proveedor {
    Id_Proveedor: number;
    Nombre_Proveedor: string;
    Identificacion_Proveedor: string;
    Direccion_Proveedor: string;
    Correo_Proveedor: string;
    Cantidad_Vehiculos_Proveedor: number;

    constructor( proveedorForm?: ProveedorForm ) {
        this.Id_Proveedor = proveedorForm.id;
        this.Nombre_Proveedor = proveedorForm.name;
        this.Identificacion_Proveedor = proveedorForm.document;
        this.Direccion_Proveedor = proveedorForm.adress;
        this.Correo_Proveedor = proveedorForm.email;
        this.Cantidad_Vehiculos_Proveedor = proveedorForm.vehicles;
    }
}