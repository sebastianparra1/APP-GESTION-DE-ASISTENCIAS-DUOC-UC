import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LoginPageRoutingModule } from './login-routing.module';
import { LoginPage } from './login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule
  ],
  declarations: [LoginPage],
  // El servicio AuthService se puede proporcionar aquí, pero no es necesario si ya está en el root
  // providers: [AuthService] // No es necesario si ya está en 'root'
})
export class LoginPageModule {}
