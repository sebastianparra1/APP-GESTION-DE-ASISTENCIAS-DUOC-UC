import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QrAppPage } from './qr-app.page';

const routes: Routes = [
  {
    path: '',
    component: QrAppPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QrAppPageRoutingModule {}
