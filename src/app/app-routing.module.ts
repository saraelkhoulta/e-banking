import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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
    loadChildren: () => import('./update-carte/update-carte.module').then(m => m.UpdateCarteModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
