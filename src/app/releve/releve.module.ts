// Angular imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Project imports
import { ReleveComponent } from './releve.component';
import { ReleveRoutingModule } from './releve-routing.module';

@NgModule({
  declarations: [ReleveComponent],
  imports: [CommonModule, ReleveRoutingModule],
  exports: [ReleveComponent]
})
export class ReleveModule {}
