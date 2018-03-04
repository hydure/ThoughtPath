import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TherapistService {
    constructor(private http:Http){
        console.log('Task Service Initialized...');
    }

    getTherapists(){
        return this.http.get('http://localhost:3000/api/therapists')
            .map(res => res.json());
    }

    addTherapist(newTherapist){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/api/therapists', JSON.stringify(newTherapist), {headers: headers})
            .map(res => res.json());
    }
}