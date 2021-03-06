// Angular imports
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Project imports
import { UpdateCarteComponent } from './update-carte.component';
const routes: Routes = [
  {
    path: '',
    component: UpdateCarteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateCarteRoutingModule {}
