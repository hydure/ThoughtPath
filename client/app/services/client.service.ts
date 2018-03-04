import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ClientService {
    constructor(private http:Http){
        console.log('Task Service Initialized...');
    }

    getClients(){
        return this.http.get('/api/clients')
            .map(res => res.json());
    }

    addClient(newClient){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/clients', JSON.stringify(newClient), {headers: headers})
            .map(res => res.json());
    }

    deleteClient(id){
        return this.http.delete('/api/clients/' + id)
            .map(res => res.json());
    }

    updateStatus(client){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put('/api/clients/'+client._id, JSON.stringify(client), {headers: headers})
            .map(res => res.json());
    }
}