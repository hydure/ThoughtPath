import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service'
import { TherapistService} from '../../services/therapist.service'
import { Therapist } from '../../../Therapist';
import { Client } from '../../../Client';

import { Http } from '@angular/http';
@Component({
    moduleId: module.id,
    selector: 'clients',
    templateUrl: 'clients.component.html'
})

export class ClientsComponent implements OnInit{ 
    clients: Client[];
    therapists: Therapist[];
    name: string;
    password: string;
    age: string;
    hobby: string;
    client: Client;
    clientname: string;
    location: string;
    insurance: string;
    personality: string;
    ailment: string;


    ngOnInit(){
        this.therapistService.getTherapists()
            .subscribe(therapists => {
                this.therapists = therapists; });


        this.clientService.getClients()
        .subscribe(clients => {
            this.clients = clients;
        });
    };
    constructor(private clientService:ClientService, private therapistService:TherapistService){}

    addClient(event){
        event.preventDefault();
        var newClient = {
            name:this.name,
            password: this.password,
            hobby: this.hobby,
            age: this.age,
            location: this.location,
            insurance: this.insurance,
            personality: this.personality,
            ailment: this.ailment
        }

        this.clientService.addClient(newClient)
            .subscribe(client=>{
                this.clients.push(client);
                this.name = '';
                this.password = '';
                this.hobby = '';
                this.age = '';
                this.location = '';
                this.insurance = '';
                this.personality = '';
                this.ailment = '';
            });
    }

    deleteClient(id){
        var clients = this.clients;
        this.clientService.deleteClient(id).subscribe(data => {
            if(data.n == 1){
                for (var i = 0; i < clients.length; i++){
                    if(clients[i]._id == id){
                        clients.splice(i, 1);
                    }
                }
            }
        });
    }

    updateStatus(client){
        var _client = {
            _id:client._id,
            name: client.name,
            password: client.password,
            hobby: client.hobby,
            age: client.age,
            location: client.location,
            insurance: client.insurance,
            personality: client.personality,
            ailment: client.ailment
        };

        this.clientService.updateStatus(_client).subscribe(data => {});
    }


    generateTherapist(event){
        event.preventDefault();
        var therapists = this.therapists;
        console.log(therapists);
        var i;
        var best = 0;
        var bestCandidate = therapists[0];
        //error when 1 therapist or fewer
        for (i=0; i < therapists.length; i++){
            var score = 0;
            if (therapists[i].hobby != null && therapists[i].hobby == this.hobby){

                score++;
            }
            if (therapists[i].age != null && (parseInt(therapists[i].age) - parseInt(this.age) <= 10 && (parseInt(therapists[i].age) - parseInt(this.age) > 0))){

                score++;
            }
            if (therapists[i].location != null && therapists[i].location == this.location){
                score+=2;
            }
            if (therapists[i].insurances != null){
                var j;
                for (j = 0; j < therapists[i].insurances.length; j++){
                    if (therapists[i].insurances[j] == this.insurance){
                        score++;
                    }
                }
            }
            if (therapists[i].personality != null && therapists[i].personality == this.personality){
                score++;
            }
            if (therapists[i].specializations != null){
                var k;
                for (k = 0; k < therapists[i].specializations.length; k++){
                    if (therapists[i].specializations[k] == this.ailment){
                        score+=3;
                    }
                }
            }
            if (score > best){
                best = score;
                bestCandidate = therapists[i];
            }
        }
        console.log(bestCandidate);
        return bestCandidate;
    }
}