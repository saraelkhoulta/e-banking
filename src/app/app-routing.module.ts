import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReleveComponent } from './releve/releve.component';
import { UpdateCarteComponent } from './update-carte/update-carte.component';

const routes: Routes = [
  {
    path: 'liste',
    loadChildren: () => import('./listes-comptes/listes-comptes.module').then(m => m.ListeComptesModule)
  },
  {
    path: 'releve/:id',
    component: ReleveComponent
  },
  {
    path: 'carte/:id',
    loadChildren: () => import('./carte/carte.module').then(m => m.CarteModule)
  },
  {
    path: 'updateCarte/:id',
    component: UpdateCarteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
