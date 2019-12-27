import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdateCarteComponent } from './update-carte/update-carte.component';

const routes: Routes = [
  {
    path: 'liste',
    loadChildren: () => import('./listes-comptes/listes-comptes.module').then(m => m.ListeComptesModule)
  },
  {
    path: 'releve/:id',
    loadChildren: () => import('./releve/releve.module').then(m => m.ReleveModule)
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
