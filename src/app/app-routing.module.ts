import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListesComptesComponent} from './listes-comptes/listes-comptes.component';
import {ReleveComponent} from './releve/releve.component';
import {UpdateCarteComponent} from './update-carte/update-carte.component';


const routes: Routes = [
  {
    path: 'liste', component: ListesComptesComponent
  },
  {
    path: 'releve/:id', component: ReleveComponent
  },
  {
    path: 'carte/:id',
    loadChildren: () => import('./carte/carte.module').then(m => m.CarteModule)
  },
  {
    path: 'updateCarte/:id', component: UpdateCarteComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
