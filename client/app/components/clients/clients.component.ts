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
            name:this.name
        }

        this.clientService.addClient(newClient)
            .subscribe(client=>{
                this.clients.push(client);
                this.name= '';
            });
    }
}