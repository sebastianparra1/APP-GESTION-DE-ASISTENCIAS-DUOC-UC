import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AsignaturasPage } from './asignaturas.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'; // Para Ionic components
import { HttpClientTestingModule } from '@angular/common/http/testing'; // Para manejar dependencias HTTP
import { RouterTestingModule } from '@angular/router/testing'; // Para manejar rutas

describe('AsignaturasPage', () => {
  let component: AsignaturasPage;
  let fixture: ComponentFixture<AsignaturasPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AsignaturasPage], // Declara el componente bajo prueba
      imports: [HttpClientTestingModule, RouterTestingModule], // Módulos necesarios
      schemas: [CUSTOM_ELEMENTS_SCHEMA], // Para manejar componentes personalizados de Ionic
    }).compileComponents(); // Asegura que los componentes se compilen correctamente
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignaturasPage); // Crea la instancia del componente
    component = fixture.componentInstance; // Asigna la instancia
    fixture.detectChanges(); // Detecta cambios iniciales
  });

  it('should create', () => {
    expect(component).toBeTruthy(); // Verifica que el componente se haya creado
  });
});
