import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListesComptesComponent } from './listes-comptes/listes-comptes.component';
import { ReleveComponent } from './releve/releve.component';
import { CarteComponent } from './carte/carte.component';
import { UpdateCarteComponent } from './update-carte/update-carte.component';



const routes: Routes = [
{
  path: 'liste', component: ListesComptesComponent
}
,
{
  path: 'releve/:id', component: ReleveComponent
}
,
{
  path: 'carte/:id', component: CarteComponent
},
{
  path: 'updateCarte/:id', component: UpdateCarteComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
