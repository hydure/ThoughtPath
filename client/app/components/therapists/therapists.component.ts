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

    deleteTherapist(id){
        var therapists = this.therapists;
        this.therapistService.deleteTherapist(id).subscribe(data => {
            if(data.n == 1){
                for (var i = 0; i < therapists.length; i++){
                    if(therapists[i]._id == id){
                        therapists.splice(i, 1);
                    }
                }
            }
        });
    }

    updateStatus(therapist){
        var _therapist = {
            _id:therapist._id,
            name: therapist.name
        };

        this.therapistService.updateStatus(_therapist).subscribe(data => {});
    }
}
