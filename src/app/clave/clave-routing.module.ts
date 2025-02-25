import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClavePage } from './clave.page';  // Import your 'ClavePage' component

const routes: Routes = [
  {
    path: '',
    component: ClavePage  // Update the component to 'ClavePage'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClavePageRoutingModule {}  // Update the module name if needed
