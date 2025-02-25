import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  usuario = {
    nombre: 'Sebastián Parra',
    email: 'se.parra@duocuc.cl'
  };

  constructor(
    private router: Router,
    private alertController: AlertController,
    private storage: Storage
  ) {
    this.initStorage();
  }

  async initStorage() {
    await this.storage.create(); // Inicializa el almacenamiento
  }

  async confirmarCierreSesion() {
    const alert = await this.alertController.create({
      header: 'Confirmación',
      message: '¿Estás seguro de que deseas cerrar sesión?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Cierre de sesión cancelado');
          }
        },
        {
          text: 'Cerrar sesión',
          handler: () => this.cerrarSesion()
        }
      ]
    });

    await alert.present();
  }

  cerrarSesion() {
    console.log('Cerrando sesión...');
    localStorage.removeItem('nombreUsuario');
    this.router.navigate(['/login']); // Redirige al inicio de sesión
  }

  async verStorage() {
    let nombre = await this.storage.get("nombreUsuario");
    console.log("El nombre guardado es: " + nombre);
  }
}
