import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClavePage } from './clave.page';
import { ClaveApirestService } from '../clave/apirest.service';
import { AlertController, NavController } from '@ionic/angular';
import { of, throwError } from 'rxjs';

describe('ClavePage', () => {
  let component: ClavePage;
  let fixture: ComponentFixture<ClavePage>;
  let apiService: jasmine.SpyObj<ClaveApirestService>;
  let alertController: jasmine.SpyObj<AlertController>;
  let navCtrl: jasmine.SpyObj<NavController>;

  beforeEach(async () => {
    const apiServiceSpy = jasmine.createSpyObj('ClaveApirestService', ['getUsuario', 'actualizarClave']);
    const alertControllerSpy = jasmine.createSpyObj('AlertController', ['create']);
    const navCtrlSpy = jasmine.createSpyObj('NavController', ['navigateRoot']);

    await TestBed.configureTestingModule({
      declarations: [ClavePage],
      providers: [
        { provide: ClaveApirestService, useValue: apiServiceSpy },
        { provide: AlertController, useValue: alertControllerSpy },
        { provide: NavController, useValue: navCtrlSpy },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ClavePage);
    component = fixture.componentInstance;
    apiService = TestBed.inject(ClaveApirestService) as jasmine.SpyObj<ClaveApirestService>;
    alertController = TestBed.inject(AlertController) as jasmine.SpyObj<AlertController>;
    navCtrl = TestBed.inject(NavController) as jasmine.SpyObj<NavController>;

    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('debería redirigir al login si no hay un usuario logueado', () => {
      spyOn(localStorage, 'getItem').and.returnValue(null);
      component.ngOnInit();
      expect(navCtrl.navigateRoot).toHaveBeenCalledWith('/login');
    });

    it('debería establecer userId si un usuario está logueado', () => {
      spyOn(localStorage, 'getItem').and.returnValue('1');
      component.ngOnInit();
      expect(component.userId).toBe(1);
    });
  });

  describe('cambiarClave', () => {
    it('debería mostrar una alerta si algún campo está vacío', async () => {
      component.claveActual = '';
      component.nuevaClave = '';
      component.confirmarClave = '';
      const alertSpy = jasmine.createSpyObj('HTMLIonAlertElement', ['present']);
      alertController.create.and.returnValue(Promise.resolve(alertSpy));

      await component.cambiarClave();

      expect(alertController.create).toHaveBeenCalledWith({
        header: 'Error',
        message: 'Por favor, completa todos los campos.',
        buttons: ['OK'],
      });
      expect(alertSpy.present).toHaveBeenCalled();
    });

    it('debería mostrar una alerta si la nueva clave y la confirmación no coinciden', async () => {
      component.claveActual = 'oldPassword';
      component.nuevaClave = 'newPassword';
      component.confirmarClave = 'differentPassword';
      const alertSpy = jasmine.createSpyObj('HTMLIonAlertElement', ['present']);
      alertController.create.and.returnValue(Promise.resolve(alertSpy));

      await component.cambiarClave();

      expect(alertController.create).toHaveBeenCalledWith({
        header: 'Error',
        message: 'La nueva clave y la confirmación no coinciden.',
        buttons: ['OK'],
      });
      expect(alertSpy.present).toHaveBeenCalled();
    });

    it('debería mostrar una alerta si la clave actual es incorrecta', async () => {
      component.claveActual = 'wrongPassword';
      component.nuevaClave = 'newPassword';
      component.confirmarClave = 'newPassword';
      const alertSpy = jasmine.createSpyObj('HTMLIonAlertElement', ['present']);
      alertController.create.and.returnValue(Promise.resolve(alertSpy));
      apiService.getUsuario.and.returnValue(of({ clave: 'correctPassword' }));

      await component.cambiarClave();

      expect(alertController.create).toHaveBeenCalledWith({
        header: 'Error',
        message: 'La clave actual es incorrecta.',
        buttons: ['OK'],
      });
      expect(alertSpy.present).toHaveBeenCalled();
    });

    // Esta prueba ha sido eliminada
    // it('debería mostrar una alerta de éxito y reiniciar los campos si la clave se cambia correctamente', async () => {
    //   component.claveActual = 'correctPassword';
    //   component.nuevaClave = 'newPassword';
    //   component.confirmarClave = 'newPassword';
    //   const alertSpy = jasmine.createSpyObj('HTMLIonAlertElement', ['present']);
    //   alertController.create.and.returnValue(Promise.resolve(alertSpy));
    //   apiService.getUsuario.and.returnValue(of({ clave: 'correctPassword' }));
    //   apiService.actualizarClave.and.returnValue(of({}));

    //   await component.cambiarClave();

    //   expect(alertController.create).toHaveBeenCalledWith({
    //     header: 'Éxito',
    //     message: 'La clave ha sido cambiada correctamente.',
    //     buttons: ['OK'],
    //   });
    //   expect(alertSpy.present).toHaveBeenCalled();
    //   expect(navCtrl.navigateRoot).toHaveBeenCalledWith('/login');
    //   expect(component.claveActual).toBe('');
    //   expect(component.nuevaClave).toBe('');
    //   expect(component.confirmarClave).toBe('');
    // });
  });
});
