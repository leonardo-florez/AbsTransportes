import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiRest } from '../../environments/environment';
import { Proveedor } from '../models/proveedor';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {
  
  private url: string = apiRest.url;

  constructor(private http: HttpClient) { }

  createProveedor(proveedor: Proveedor){
    return this.http.post(this.url, proveedor);
  }

  getProveedores(){
    return this.http.get(this.url);
  }

  deleteProveedor(id: number){
    return this.http.delete(this.url + "/" + id);
  }

  editProveedor(proveedor: Proveedor){
    return this.http.put(this.url + "/" + proveedor.Id_Proveedor , proveedor);
  }
  
}
