import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListesComptesComponent } from './listes-comptes/listes-comptes.component';
import {HttpClientModule} from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { ReleveComponent } from './releve/releve.component';
import { UpdateCarteComponent } from './update-carte/update-carte.component';


@NgModule({
  declarations: [
    AppComponent,
    ListesComptesComponent,
    ReleveComponent,
    UpdateCarteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule, FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
