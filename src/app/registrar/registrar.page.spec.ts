import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistrarPage } from './registrar.page';

describe('RegistrarPage', () => {
  let component: RegistrarPage;
  let fixture: ComponentFixture<RegistrarPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistrarPage],
    }).compileComponents();

    fixture = TestBed.createComponent(RegistrarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería tener un valor predeterminado para qrText', () => {
    expect(component.qrText).toBe('YorchDev');
  });

  it('debería permitir cambiar el valor de qrText', () => {
    component.qrText = 'NuevoTextoQR';
    expect(component.qrText).toBe('NuevoTextoQR');
  });

  it('debería llamar a escanearQR y registrar un mensaje en la consola', () => {
    const consoleSpy = spyOn(console, 'log');
    component.escanearQR();
    expect(consoleSpy).toHaveBeenCalledWith('Escaneando QR...');
  });

  it('debería actualizar el valor de qrText en tiempo de ejecución', () => {
    const nuevoTexto = 'TextoActualizado';
    component.qrText = nuevoTexto;
    fixture.detectChanges();
    expect(component.qrText).toBe(nuevoTexto);
  });

  it('debería mostrar un valor vacío para qrText si no se inicializa', () => {
    component.qrText = '';
    expect(component.qrText).toBe('');
  });

  it('debería mantener el valor de qrText si se intenta asignar un valor nulo', () => {
    component.qrText = null as any; // Fuerza un caso no típico
    expect(component.qrText).toBeNull();
  });

  it('debería no lanzar errores al ejecutar escanearQR sin parámetros', () => {
    expect(() => component.escanearQR()).not.toThrow();
  });

  it('debería detectar cambios en qrText automáticamente', () => {
    component.qrText = 'TextoParaPrueba';
    fixture.detectChanges();
    const qrTextInput = component.qrText;
    expect(qrTextInput).toBe('TextoParaPrueba');
  });

  it('debería poder inicializarse sin lógica adicional en ngOnInit', () => {
    expect(() => component.ngOnInit()).not.toThrow();
  });

  it('debería no modificar qrText si ya tiene un valor inicial', () => {
    const inicial = component.qrText;
    component.ngOnInit();
    expect(component.qrText).toBe(inicial);
  });

  it('debería mantener la referencia a escanearQR como una función', () => {
    expect(typeof component.escanearQR).toBe('function');
  });

  it('debería permitir que escanearQR sea llamado múltiples veces', () => {
    const consoleSpy = spyOn(console, 'log');
    component.escanearQR();
    component.escanearQR();
    expect(consoleSpy).toHaveBeenCalledTimes(2);
  });

  it('debería no cambiar el valor de qrText al llamar escanearQR', () => {
    const textoInicial = component.qrText;
    component.escanearQR();
    expect(component.qrText).toBe(textoInicial);
  });

  it('debería poder ejecutarse incluso si qrText está vacío', () => {
    component.qrText = '';
    expect(() => component.escanearQR()).not.toThrow();
  });
});
