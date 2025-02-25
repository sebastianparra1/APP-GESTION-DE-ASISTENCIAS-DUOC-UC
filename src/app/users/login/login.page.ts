import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { ApirestService } from './apirest.service'; // Asegúrate de que la ruta sea correcta

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  errorMessage: string = ''; // Para mostrar el mensaje de error
  passwordType: string = 'password'; // Controla el tipo de entrada de la contraseña
  passwordIcon: string = 'eye-off'; // Controla el icono de la contraseña

  constructor(private router: Router, private storage: Storage, private apiService: ApirestService) {}

  async ngOnInit() {
    await this.storage.create();
    // La carga de usuarios no es necesaria si usas el login directo
  }

  // Función para alternar la visibilidad de la contraseña
  togglePasswordVisibility() {
    this.passwordType = this.passwordType === 'password' ? 'text' : 'password';
    this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
  }

  login(form: NgForm) {
    if (form.valid) {
      const { username, password } = form.value;

      // Llamada al servicio para validar las credenciales
      this.apiService.login(username, password).subscribe(
        (data: any[]) => {
          if (data && data.length > 0) {
            // Si el usuario existe en la base de datos
            const usuario = data[0]; // Suponiendo que el primer resultado es el correcto

            console.log('Inicio de sesión exitoso');
            this.errorMessage = ''; // Limpiar mensaje de error
            // Guardar el id del usuario en el localStorage
            localStorage.setItem('usuario', usuario.id.toString());  // Guardamos el ID del usuario

            // Guardar el nombre de usuario en el almacenamiento de Ionic
            this.storage.set("nombreUsuario", usuario.nombreUsuario).then(() => {
              console.log('Nombre de usuario almacenado correctamente');
            }).catch((error) => {
              console.error('Error al almacenar el nombre de usuario:', error);
            });

            // Redirigir según el tipo de usuario
            if (usuario.tipo === 'docente') {
              this.router.navigate(['/pag-inicio-docente']);
            } else if (usuario.tipo === 'estudiante') {
              this.router.navigate(['/pag-inicio-estudiante']);
            } else {
              this.router.navigate(['/asignaturas']); // Si el tipo no es ni docente ni estudiante
            }
          } else {
            console.log('Credenciales incorrectas');
            this.errorMessage = 'Esta cuenta no existe'; // Mostrar mensaje de error
          }
        },
        (error) => {
          console.error('Error al iniciar sesión:', error);
          this.errorMessage = 'Error en el inicio de sesión'; // Mostrar mensaje de error
        }
      );
    } else {
      this.errorMessage = 'Por favor complete todos los campos'; // Validación para campos incompletos
    }
  }

  resetPassword() {
    console.log('Se ha solicitado el restablecimiento de la contraseña');
    // Redirigir a la página 'recuperar' cuando se presiona el botón de restablecer
    this.router.navigate(['/recuperar']);
  }
}
