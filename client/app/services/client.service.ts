import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ClientService {
    constructor(private http:Http){
        console.log('Task Service Initialized...');
    }

    getClients(){
        return this.http.get('http://localhost:3000/api/clients')
            .map(res => res.json());
    }

    addClient(newClient){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/api/clients', JSON.stringify(newClient), {headers: headers})
            .map(res => res.json());
    }
}