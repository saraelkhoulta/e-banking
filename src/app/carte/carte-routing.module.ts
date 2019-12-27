// Angular imports
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

// Project imports
import {CarteComponent} from './carte.component';
const routes: Routes = [
  {
    path: '',
    component: CarteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarteRoutingModule {}
