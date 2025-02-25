import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController } from '@ionic/angular'; // Importar NavController para navegación

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage {
  email: string = ''; // Campo para el correo
  emailSent: boolean = false; // Controlar si el correo ha sido enviado

  constructor(private navCtrl: NavController) {} // Inyectar NavController en el constructor

  // Función para enviar el correo de recuperación
  sendRecoveryEmail(form: NgForm) {
    if (form.valid) {
      this.email = form.value.email; // Obtener el correo del formulario
      console.log(`Enviando correo de recuperación a ${this.email}`);
      
      // Aquí iría la lógica para enviar el correo real de recuperación

      // Simular el envío de correo
      setTimeout(() => {
        this.emailSent = true; // Mostrar mensaje de confirmación
      }, 1000); // Simula un retraso de 1 segundo
    }
  }

  // Función para navegar a la página de login
  goToLogin() {
    this.navCtrl.navigateBack('/login'); // Navegar de regreso a la página de login
  }
}
