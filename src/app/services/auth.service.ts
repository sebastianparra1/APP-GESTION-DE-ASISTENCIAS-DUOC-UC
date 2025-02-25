// auth.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { User } from '../clave/user.interface';  // Asegúrate de que esta interfaz esté bien definida

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://192.168.106.222:3000/usuarios';  // Asegúrate de que esta URL sea correcta
  private currentUser: User | null = null;

  constructor(private http: HttpClient) { }

  // Método para autenticar al usuario
  login(nombreUsuario: string, clave: string): Observable<User | null> {
    return this.http.get<User[]>(this.apiUrl).pipe(
      map(users => users.find(user => user.nombreUsuario === nombreUsuario && user.clave === clave) || null),
      tap(user => {
        this.currentUser = user; // Almacenar el usuario actual si se encuentra
      }),
      catchError(error => {
        console.error('Error en login:', error);
        return of(null); // Devolver null si hay un error
      })
    );
  }

  // Obtener el usuario actual
  getCurrentUser(): User | null {
    return this.currentUser;
  }

  // Método para cambiar la contraseña
  changePassword(userId: string, currentPassword: string, newPassword: string): Observable<any> {
    // Enviamos un PUT al backend para cambiar la contraseña
    return this.http.put(`${this.apiUrl}/${userId}/change-password`, { currentPassword, newPassword }).pipe(
      tap(() => {
        if (this.currentUser?.id === userId) {
          this.currentUser = { ...this.currentUser, clave: newPassword }; // Actualiza la clave localmente
        }
      }),
      catchError(error => {
        console.error('Error al cambiar la contraseña:', error);
        return of(null); // Devolver null en caso de error
      })
    );
  }

  // Método opcional para cerrar sesión
  logout(): void {
    this.currentUser = null;
  }
}
