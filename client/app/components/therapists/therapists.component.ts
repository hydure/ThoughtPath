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
    password: string;
    age: string;
    hobby: string;
    location: string;
    insurances: String[];
    personality: string;
    specializations: String[];
    

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
            name:this.name,
            password: this.password,
            hobby: this.hobby,
            age: this.age,
            location: this.location,
            insurances: this.insurances,
            personality: this.personality,
            specializations: this.specializations
        }

        this.therapistService.addTherapist(newTherapist)
            .subscribe(therapist =>{
                this.therapists.push(therapist);
                this.name= '';
                this.password = '';
                this.hobby = '';
                this.age = '';
                this.location = '';
                this.insurances = [];
                this.personality = '';
                this.specializations = [];
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
            name: therapist.name,
            password: therapist.password,
            hobby: therapist.hobby,
            age: therapist.age,
            location: therapist.location,
            insurances: therapist.insurances,
            personality: therapist.personality,
            specializations: therapist.specializations
        };

        this.therapistService.updateStatus(_therapist).subscribe(data => {});
    }
}
