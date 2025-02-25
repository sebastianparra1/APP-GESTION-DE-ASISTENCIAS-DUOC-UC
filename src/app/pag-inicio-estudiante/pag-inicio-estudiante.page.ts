import { Component } from '@angular/core';
import { NavController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-pag-inicio-estudiante',
  templateUrl: './pag-inicio-estudiante.page.html',
  styleUrls: ['./pag-inicio-estudiante.page.scss'],
})
export class PagInicioEstudiantePage {
  constructor(private navCtrl: NavController, private loadingCtrl: LoadingController) {}

  irAAsignaturas() {
    this.navCtrl.navigateForward('/asignaturas');
  }

  irAAsistencias() {
    this.navCtrl.navigateForward('/asistencias');
  }

  irARegistrar() {
    this.navCtrl.navigateForward('/registrar');
  }

  irACLave() {
    this.navCtrl.navigateForward('/clave');
  }

  async cerrarSesion() {
    const loading = await this.loadingCtrl.create({
      message: 'Cerrando sesión...', // Mensaje de carga
      duration: 1000, // Duración de 1 segundo
    });
    await loading.present();

    // Simulación de cierre de sesión
    setTimeout(() => {
      localStorage.clear(); // Limpia el almacenamiento local
      this.navCtrl.navigateRoot('/login'); // Redirige a la página de login
    }, 1000);
  }
}
