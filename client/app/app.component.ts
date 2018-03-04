import { Component } from '@angular/core';
import { TherapistService } from './services/therapist.service';
import { ClientService } from './services/client.service'
@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  providers: [TherapistService, ClientService]
})

export class AppComponent { }