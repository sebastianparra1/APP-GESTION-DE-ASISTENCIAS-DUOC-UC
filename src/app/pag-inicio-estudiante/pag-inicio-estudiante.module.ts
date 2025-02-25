import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { PagInicioEstudiantePage } from './pag-inicio-estudiante.page';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PagInicioEstudiantePage],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: PagInicioEstudiantePage
      }
    ])
  ]
})
export class PagInicioEstudiantePageModule {}
