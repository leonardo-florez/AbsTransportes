export class ProveedorForm {
    name: string;
    identification: string;
    adress: string;
    email: string;
    vehicles: number;
}

export class Proveedor {
    Nombre_Proveedor: string;
    Identificacion_Proveedor: string;
    Direccion_Proveedor: string;
    Correo_Proveedor: string;
    Cantidad_Vehiculos_Proveedor: number;

    constructor( proveedorForm?: ProveedorForm ) {
        this.Nombre_Proveedor = proveedorForm.name;
        this.Identificacion_Proveedor = proveedorForm.identification;
        this.Direccion_Proveedor = proveedorForm.email;
        this.Correo_Proveedor = proveedorForm.email;
        this.Cantidad_Vehiculos_Proveedor = proveedorForm.vehicles;
    }
}