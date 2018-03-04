import { Component } from '@angular/core';
import { TherapistService } from '../../services/therapist.service'
import { Therapist } from '../../../Therapist';
@Component({
    moduleId: module.id,
    selector: 'therapists',
    templateUrl: 'therapists.component.html'
})
export class TherapistsComponent { 
    therapists: Therapist[];

    constructor(private therapistService:TherapistService){
        this.therapistService.getTherapists()
            .subscribe(therapists => {
                console.log(therapists);
            })
    }
}
