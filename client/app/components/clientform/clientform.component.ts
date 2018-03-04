import { Component, OnInit } from '@angular/core';
@Component({
    moduleId: module.id,
    selector: 'clientform',
    templateUrl: 'clientform.component.html'
})
export class ClientFormComponent implements OnInit{


    ngOnInit(){

    };
    constructor(){}

    requestLogin(event){
        event.preventDefault();


    }

}