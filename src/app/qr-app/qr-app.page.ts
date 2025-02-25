import { Component } from '@angular/core';

@Component({
  selector: 'app-qr-app',
  templateUrl: './qr-app.page.html',
  styleUrls: ['./qr-app.page.scss'],
})
export class QrAppPage {
  asignaturaSeleccionada: string | null = null;
  seccionSeleccionada: string | null = null;
  puedeGenerarQR: boolean = false;
  mostrarQR: boolean = false;
  qrImage: string | null = null;

  verificarSeleccion() {
    // Habilita el botón si ambos valores están seleccionados
    this.puedeGenerarQR = !!this.asignaturaSeleccionada && !!this.seccionSeleccionada;
  }

  generarQR() {
    if (this.puedeGenerarQR) {
      // Genera la URL del QR con los valores seleccionados
      this.qrImage = `https://api.qrserver.com/v1/create-qr-code/?data=Asignatura:${this.asignaturaSeleccionada}+Seccion:${this.seccionSeleccionada}&size=200x200`;
      this.mostrarQR = true;
    }
  }
}
