import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { TherapistsComponent } from './components/therapists/therapists.component'

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, TherapistsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
