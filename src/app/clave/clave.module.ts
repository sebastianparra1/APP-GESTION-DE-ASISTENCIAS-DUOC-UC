import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClavePageRoutingModule } from './clave-routing.module';  // Cambia a 'clave-routing.module'

import { ClavePage } from './clave.page';  // Cambia el nombre del componente a 'ClavePage'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClavePageRoutingModule  // Cambia a 'ClavePageRoutingModule'
  ],
  declarations: [ClavePage]  // Cambia a 'ClavePage'
})
export class ClavePageModule {}  // Cambia el nombre del módulo si es necesario
