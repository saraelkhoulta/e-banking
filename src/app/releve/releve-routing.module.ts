// Angular imports
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

// Project imports
import {ReleveComponent} from './releve.component';

const routes: Routes = [
  {
    path: '',
    component: ReleveComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReleveRoutingModule {}
