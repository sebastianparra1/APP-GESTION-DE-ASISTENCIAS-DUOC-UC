import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PagInicioEstudiantePage } from './pag-inicio-estudiante.page';

describe('PagInicioEstudiantePage', () => {
  let component: PagInicioEstudiantePage;
  let fixture: ComponentFixture<PagInicioEstudiantePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PagInicioEstudiantePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
