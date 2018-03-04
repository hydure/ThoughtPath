import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { ClientsComponent } from './components/clients/clients.component';
import { TherapistsComponent } from './components/therapists/therapists.component';
import { HttpModule } from '@angular/http';
import {FormsModule } from '@angular/forms';


@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule ],
  declarations: [ AppComponent, TherapistsComponent, ClientsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
