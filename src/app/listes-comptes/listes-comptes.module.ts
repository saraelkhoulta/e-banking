// Angular imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Project imports
import { ListesComptesComponent } from './listes-comptes.component';
import { ListesComptesRoutingModule } from './listes-comptes-routing.module';

@NgModule({
  declarations: [ListesComptesComponent],
  imports: [CommonModule, ListesComptesRoutingModule],
  exports: [ListesComptesComponent]
})
export class ListeComptesModule {}
