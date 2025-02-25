import { Component } from '@angular/core';

@Component({
  selector: 'app-asistencias',
  templateUrl: './asistencias.page.html',
  styleUrls: ['./asistencias.page.scss'],
})
export class AsistenciasPage {
  mostrarAsignaturas: boolean = false; // Controla si se muestra la lista de asignaturas
  asignaturaSeleccionada: { nombre: string; codigo: string } | null = null; // Almacena la asignatura seleccionada
  cargando: boolean = false; // Indica si el spinner está activo

  constructor() {}

  // Muestra u oculta la lista de asignaturas
  mostrarOpciones() {
    this.mostrarAsignaturas = !this.mostrarAsignaturas;
  }

  // Selecciona una asignatura, simula carga y muestra el mensaje
  seleccionarAsignatura(nombre: string, codigo: string) {
    this.cargando = true; // Activa el spinner
    this.asignaturaSeleccionada = null; // Limpia la selección previa
    this.mostrarAsignaturas = false; // Oculta la lista de asignaturas

    // Simula una espera de 1 segundo
    setTimeout(() => {
      this.cargando = false; // Detiene el spinner
      this.asignaturaSeleccionada = { nombre, codigo }; // Establece la asignatura seleccionada
    }, 1000); // 1 segundo
  }
}
