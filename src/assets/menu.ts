class Menu {
    name: string;
    path: string;
    icon: string;
}

export const arrayMenu: Menu[] = [
    {name: "Home", path: "/home", icon: "home"},
    {name: "Crear Proveedor", path: "/proveedor/crear-proveedor", icon: "add_business"},
    {name: "Consultar Proveedores", path: "/proveedor/consultar-proveedores", icon: "content_paste_search"},
]