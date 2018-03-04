import { Component } from '@angular/core';
import { TherapistService } from './services/therapist.service';
@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  providers: [TherapistService]
})

export class AppComponent { }