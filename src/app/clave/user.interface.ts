export interface Materia {
  materia: string;
  secciones: string[];
  materiaActual?: string;
  seccionActual?: string;
}

export interface User {
  id: string;
  nombreUsuario: string;
  clave: string;
  tipo: string;
  nombre: string;
  materias: Materia[];
}
