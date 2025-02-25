import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginPage } from './login.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApirestService } from './apirest.service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { of, throwError } from 'rxjs';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;
  let apiService: jasmine.SpyObj<ApirestService>;
  let router: jasmine.SpyObj<Router>;
  let storageSpy: jasmine.SpyObj<Storage>;

  beforeEach(async () => {
    const apiServiceSpy = jasmine.createSpyObj('ApirestService', ['login']);
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    const storageSpyObj = jasmine.createSpyObj('Storage', ['create', 'set']);

    await TestBed.configureTestingModule({
      declarations: [LoginPage],
      imports: [FormsModule, ReactiveFormsModule],
      providers: [
        { provide: ApirestService, useValue: apiServiceSpy },
        { provide: Router, useValue: routerSpy },
        { provide: Storage, useValue: storageSpyObj },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    apiService = TestBed.inject(ApirestService) as jasmine.SpyObj<ApirestService>;
    router = TestBed.inject(Router) as jasmine.SpyObj<Router>;
    storageSpy = TestBed.inject(Storage) as jasmine.SpyObj<Storage>;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('login', () => {
    it('should not proceed if form is invalid', () => {
      const form = { valid: false, value: { username: '', password: '' } } as any;
      component.login(form);
      expect(apiService.login).not.toHaveBeenCalled();
    });

    it('should call ApirestService.login with correct credentials', () => {
      const mockResponse = [{ id: '1', nombreUsuario: 'testuser', tipo: 'docente' }];
      apiService.login.and.returnValue(of(mockResponse));
      const form = { valid: true, value: { username: 'testuser', password: 'testpassword' } } as any;

      component.login(form);

      expect(apiService.login).toHaveBeenCalledWith('testuser', 'testpassword');
    });

    it('should navigate to the correct page based on user type', () => {
      const mockResponse = [{ id: '1', nombreUsuario: 'testuser', tipo: 'docente' }];
      apiService.login.and.returnValue(of(mockResponse));
      const form = { valid: true, value: { username: 'testuser', password: 'testpassword' } } as any;

      component.login(form);

      expect(router.navigate).toHaveBeenCalledWith(['/pag-inicio-docente']);
    });

    it('should store user data in localStorage and Ionic Storage', async () => {
      const mockResponse = [{ id: '1', nombreUsuario: 'testuser', tipo: 'docente' }];
      apiService.login.and.returnValue(of(mockResponse));
      const form = { valid: true, value: { username: 'testuser', password: 'testpassword' } } as any;

      await component.login(form);

      expect(localStorage.getItem('usuario')).toBe('1');
      expect(storageSpy.set).toHaveBeenCalledWith('nombreUsuario', 'testuser');
    });

    it('should display an error message on invalid credentials', () => {
      apiService.login.and.returnValue(of([]));
      const form = { valid: true, value: { username: 'wronguser', password: 'wrongpassword' } } as any;

      component.login(form);

      expect(component.errorMessage).toBe('Esta cuenta no existe');
    });

    it('should display an error message on API error', () => {
      apiService.login.and.returnValue(throwError({ error: 'API error' }));
      const form = { valid: true, value: { username: 'testuser', password: 'testpassword' } } as any;

      component.login(form);

      expect(component.errorMessage).toBe('Error en el inicio de sesión');
    });
  });

  describe('resetPassword', () => {
    it('should navigate to the recuperar page', () => {
      component.resetPassword();
      expect(router.navigate).toHaveBeenCalledWith(['/recuperar']);
    });
  });
});
