import { Component } from '@angular/core';
import { ClientService } from '../../services/client.service'
import { Client } from '../../../Client';
@Component({
    moduleId: module.id,
    selector: 'clients',
    templateUrl: 'clients.component.html'
})
export class ClientsComponent { 
    clients: Client[];

    constructor(private clientService:ClientService){
        this.clientService.getClients()
            .subscribe(clients => {
                console.log(clients);
            })
    }
}