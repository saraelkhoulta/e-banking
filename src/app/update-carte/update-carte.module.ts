// Angular imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Project imports
import { UpdateCarteComponent } from './update-carte.component';
import { UpdateCarteRoutingModule } from './update-carte-routing.module';

@NgModule({
  declarations: [UpdateCarteComponent],
  imports: [CommonModule, UpdateCarteRoutingModule],
  exports: [UpdateCarteComponent]
})
export class UpdateCarteModule {}
