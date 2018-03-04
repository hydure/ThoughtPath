import { Component, OnInit } from '@angular/core';
import { Login } from '../../../Login';
@Component({
    moduleId: module.id,
    selector: 'logins',
    templateUrl: 'logins.component.html'
})

export class LoginComponent implements OnInit{
    login: Login[];
    username: string;
    password: string;
    ngOnInit(){
       
    };
    constructor(){}

    requestLogin(event){
        event.preventDefault();
        var login = {
            username:this.username,
            password: this.password
        }

    }

}