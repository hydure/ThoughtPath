import { Component, OnInit } from '@angular/core';
import { TherapistService } from '../../services/therapist.service'
import { Therapist } from '../../../Therapist';
@Component({
    moduleId: module.id,
    selector: 'therapists',
    templateUrl: 'therapists.component.html'
})

// Gives us access to the Therapists in the html file
export class TherapistsComponent implements OnInit{ 
    therapists: Therapist[];
    ngOnInit(){
        this.therapistService.getTherapists()
        .subscribe(therapists => {
            this.therapists = therapists;
            //console.log(therapists);
            console.log("asdsdhfsdfds");
        });
    };
    constructor(private therapistService:TherapistService){}
}
