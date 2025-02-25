import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {

  qrText = 'YorchDev';  // Valor por defecto para el QR

  constructor() { }

  ngOnInit() {
    // Aquí puedes agregar lógica adicional si es necesario
  }

  escanearQR() {
    // Aquí va la lógica para escanear el QR
    console.log('Escaneando QR...');
  }
}
