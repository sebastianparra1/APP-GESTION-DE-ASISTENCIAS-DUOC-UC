import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',  // Redirige a 'login' al iniciar
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./users/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then(m => m.FolderPageModule)
  },
  {
    path: 'asignaturas',
    loadChildren: () => import('./asignaturas/asignaturas.module').then(m => m.AsignaturasPageModule)
  },
  {
    path: 'asistencias',
    loadChildren: () => import('./asistencias/asistencias.module').then(m => m.AsistenciasPageModule)
  },
  {
    path: 'registrar',
    loadChildren: () => import('./registrar/registrar.module').then(m => m.RegistrarPageModule)
  },
  {
    path: 'clave',
    loadChildren: () => import('./clave/clave.module').then(m => m.ClavePageModule)
  },
  {
    path: 'logout',  // Ruta para cerrar sesión
    redirectTo: 'login',  // Redirigir a 'login' cuando se cierre sesión
    pathMatch: 'full'
  },
  {
    path: 'recuperar',
    loadChildren: () => import('./recuperar/recuperar.module').then(m => m.RecuperarPageModule)
  },
  {
    path: 'pag-inicio-docente',
    loadChildren: () => import('./pag-inicio-docente/pag-inicio-docente.module').then( m => m.PagInicioDocentePageModule)
  },
  {
    path: 'pag-inicio-estudiante',
    loadChildren: () => import('./pag-inicio-estudiante/pag-inicio-estudiante.module').then( m => m.PagInicioEstudiantePageModule)
  },
  {
    path: 'qr-app',
    loadChildren: () => import('./qr-app/qr-app.module').then( m => m.QrAppPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
