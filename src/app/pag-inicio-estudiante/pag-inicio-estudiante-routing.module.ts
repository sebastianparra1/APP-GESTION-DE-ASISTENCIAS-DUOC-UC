import { PaginaInicioEstudiantePage } from './pagina-inicio-estudiante.page';

@NgModule({
  declarations: [PaginaInicioEstudiantePage],
  imports: [CommonModule, IonicModule, RouterModule.forChild(routes)],
  exports: [PaginaInicioEstudiantePage],
})
export class PaginaInicioEstudiantePageModule {}
