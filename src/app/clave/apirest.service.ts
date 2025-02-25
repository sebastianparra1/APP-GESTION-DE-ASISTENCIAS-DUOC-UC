import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClaveApirestService {
  private apiUrl = 'http://localhost:3000/usuarios'; // URL de JSON Server

  constructor(private http: HttpClient) {}

  // Obtener usuario por ID
  getUsuario(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  // Actualizar clave del usuario
  actualizarClave(id: number, nuevaClave: string): Observable<any> {
    return this.http.patch(`${this.apiUrl}/${id}`, { clave: nuevaClave });
  }

  // Función de login (opcional, si la tienes en este servicio)
  login(nombreUsuario: string, clave: string): Observable<any> {
    return this.http.get<any[]>(`${this.apiUrl}?nombreUsuario=${nombreUsuario}&clave=${clave}`);
  }
}