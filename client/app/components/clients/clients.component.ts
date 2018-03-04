import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service'
import { Client } from '../../../Client';
@Component({
    moduleId: module.id,
    selector: 'clients',
    templateUrl: 'clients.component.html'
})

export class ClientsComponent implements OnInit{ 
    clients: Client[];
    name: string;
    password: string;
    age: string;
    hobby: string;
    best_therapist: string;

    ngOnInit(){
        this.clientService.getClients()
        .subscribe(clients => {
            this.clients = clients;
        });
    };
    constructor(private clientService:ClientService){}

    addClient(event){
        event.preventDefault();
        var newClient = {
            name:this.name,
            password: this.password,
            hobby: this.hobby,
            age: this.age
        }

        this.clientService.addClient(newClient)
            .subscribe(client=>{
                this.clients.push(client);
                this.name = '';
                this.password = '';
                this.hobby = '';
                this.age = '';
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

    generateTherapist(id){
        var therapistPerson = this.clientService.generateTherapist(id);
        return therapistPerson;
    }

    updateStatus(client){
        var _client = {
            _id:client._id,
            name: client.name,
            password: client.password,
            hobby: client.hobby,
            age: client.age
        };

        this.clientService.updateStatus(_client).subscribe(data => {});
    }
}