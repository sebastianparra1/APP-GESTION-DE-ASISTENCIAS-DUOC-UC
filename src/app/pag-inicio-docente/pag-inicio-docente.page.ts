import { Component } from '@angular/core';
import { NavController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-pag-inicio-docente',
  templateUrl: './pag-inicio-docente.page.html',
  styleUrls: ['./pag-inicio-docente.page.scss'],
})
export class PagInicioDocentePage {
  constructor(private navCtrl: NavController, private loadingCtrl: LoadingController) {}

  irAAsignaturas() {
    this.navCtrl.navigateForward('/asignaturas');
  }

  irAAsistencias() {
    this.navCtrl.navigateForward('/asistencias');
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

    // Simulación de cierre de sesión después de 1 segundo
    setTimeout(() => {
      localStorage.clear(); // Limpia datos almacenados
      this.navCtrl.navigateRoot('/login'); // Redirige a la página de login
    }, 1000);
  }
}