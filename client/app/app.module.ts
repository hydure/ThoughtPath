import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http'
import { AppComponent }   from './app.component';
import { TherapistsComponent } from './components/therapists/therapists.component'

// Meeting file for all teh different modules and components
@NgModule({
  imports:      [ BrowserModule, HttpModule ],
  declarations: [ AppComponent, TherapistsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
