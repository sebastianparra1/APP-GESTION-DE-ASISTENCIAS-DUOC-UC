import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router'; // Importar Router

@Component({
  selector: 'app-asignaturas',
  templateUrl: './asignaturas.page.html',
  styleUrls: ['./asignaturas.page.scss'],
})
export class AsignaturasPage implements OnInit {
  asignaturas = {
    lunes: [
      { nombre: 'Estadística Descriptiva', seccion: '001D' },
      { nombre: 'Inglés Intermedio', seccion: '002D' }
    ],
    martes: [
      { nombre: 'Programación de Aplicaciones Móviles', seccion: '003D' },
      { nombre: 'Calidad de Software', seccion: '004D' }
    ],
    miercoles: [
      { nombre: 'Estadística Descriptiva', seccion: '005D' },
      { nombre: 'Inglés Intermedio', seccion: '006D' }
    ],
    jueves: [
      { nombre: 'Programación de Aplicaciones Móviles', seccion: '007D' },
      { nombre: 'Calidad de Software', seccion: '008D' }
    ],
    viernes: [
      { nombre: 'Estadística Descriptiva', seccion: '009D' },
      { nombre: 'Inglés Intermedio', seccion: '010D' }
    ]
  };

  constructor(private storage: Storage, private router: Router) {}

  ngOnInit() {}

  async verDatosStorage() {
    let nombre = await this.storage.get('nombreUsuario');
    console.log('El nombre guardado es: ' + nombre);
  }

  // Función para redirigir al escaneo de QR al hacer clic en una asignatura
  irARegistrar(asignatura: string) {
    this.router.navigate(['/registrar'], {
      queryParams: { asignatura: asignatura } // Pasar el nombre de la asignatura a la página del QR
    });
  }

  cargarAsignaturas() {
    const usuario = JSON.parse(localStorage.getItem('usuario') || '{}');
    if (usuario && usuario.materias) {
      this.asignaturas = usuario.materias;
  } else {
    alert('No se encontraron Asignaturas. Porfavor verifica tu cuenta. ');
  }


  }
}
