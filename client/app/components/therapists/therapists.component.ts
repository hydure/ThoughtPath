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
    name: string;

    ngOnInit(){
        this.therapistService.getTherapists()
        .subscribe(therapists => {
            this.therapists = therapists;
        });
    };
    constructor(private therapistService:TherapistService){}

    addTherapist(event){
        event.preventDefault();
        var newTherapist = {
            name:this.name
        }

        this.therapistService.addTherapist(newTherapist)
            .subscribe(therapist =>{
                this.therapists.push(therapist);
                this.name= '';
            });
    }
}
