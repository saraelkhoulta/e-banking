// Angular imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Project imports
import { CarteComponent } from './carte.component';
import { CarteRoutingModule } from './carte-routing.module';

@NgModule({
  declarations: [CarteComponent],
  imports: [CommonModule, CarteRoutingModule],
  exports: [CarteComponent]
})
export class CarteModule {}
