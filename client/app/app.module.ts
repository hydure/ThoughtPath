import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { ClientsComponent } from './components/clients/clients.component';
import { TherapistsComponent } from './components/therapists/therapists.component';
import { HttpModule } from '@angular/http';
import {FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/logins.component';
import { ClientFormComponent } from './components/clientform/clientform.component';


@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule ],
  declarations: [ AppComponent, TherapistsComponent, ClientsComponent, LoginComponent, ClientFormComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
