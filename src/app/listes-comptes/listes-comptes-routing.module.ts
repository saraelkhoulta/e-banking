// Angular imports
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Project imports
import { ListesComptesComponent } from './listes-comptes.component';
const routes: Routes = [
  {
    path: '',
    component: ListesComptesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListesComptesRoutingModule {}
