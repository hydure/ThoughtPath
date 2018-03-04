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
    ngOnInit(){
        this.clientService.getClients()
        .subscribe(clients => {
            this.clients = clients;
            //console.log(therapists);
            console.log("zcvxvcxzv");
        });
    };
    constructor(private clientService:ClientService){}
}