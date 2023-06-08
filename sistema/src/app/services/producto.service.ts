import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  url = 'http://localhost:4000/api/productos/';

  constructor(private http: HttpClient) { 

  }

  getProductos(): Observable<any> {
    return this.http.get(this.url);
  }

  deleteProducto(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }

  guardarProducto(datos: FormData): Observable<any> {
    return this.http.post(this.url, datos);
  }

  viewProducto(id?: string): Observable<any> {
    return this.http.get(this.url + id)
  }

  actualizarProducto(id: string, datos: FormData): Observable<any> {
    return this.http.put(this.url + id, datos);
  }
  
}
