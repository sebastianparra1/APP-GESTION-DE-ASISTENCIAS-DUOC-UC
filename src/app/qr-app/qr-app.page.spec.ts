import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QrAppPage } from './qr-app.page';
import { IonicModule } from '@ionic/angular'; // Asegúrate de importar IonicModule

describe('QrAppPage', () => {
  let component: QrAppPage;
  let fixture: ComponentFixture<QrAppPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QrAppPage],
      imports: [IonicModule.forRoot()] // Asegúrate de que IonicModule esté importado
    }).compileComponents();

    fixture = TestBed.createComponent(QrAppPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should set "puedeGenerarQR" to true when both "asignaturaSeleccionada" and "seccionSeleccionada" are selected', () => {
    component.asignaturaSeleccionada = 'Matematicas';
    component.seccionSeleccionada = 'mat001';
    component.verificarSeleccion();
    expect(component.puedeGenerarQR).toBeTrue();
  });

  it('should generate a QR when both selections are made and show it', () => {
    component.asignaturaSeleccionada = 'Matematicas';
    component.seccionSeleccionada = 'mat001';
    component.verificarSeleccion();
    component.generarQR();
    expect(component.mostrarQR).toBeTrue();
    expect(component.qrImage).toContain('https://api.qrserver.com/v1/create-qr-code');
  });
});
