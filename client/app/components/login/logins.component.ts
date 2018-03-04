import { Component, OnInit } from '@angular/core';
import { Login } from '../../../Login';
@Component({
    moduleId: module.id,
    selector: 'logins',
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit{
    login: Login[];

    ngOnInit(){
       
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