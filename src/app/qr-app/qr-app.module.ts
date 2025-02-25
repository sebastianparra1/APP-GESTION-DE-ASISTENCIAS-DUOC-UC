import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QrAppPageRoutingModule } from './qr-app-routing.module';

import { QrAppPage } from './qr-app.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QrAppPageRoutingModule
  ],
  declarations: [QrAppPage]
})
export class QrAppPageModule {}
