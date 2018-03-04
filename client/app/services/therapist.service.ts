import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TherapistService {
    constructor(private http:Http){
        console.log('Task Service Initialized...');
    }

    getTherapists(){
        return this.http.get('/api/therapists')
            .map(res => res.json());
    }

    addTherapist(newTherapist){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/therapists', JSON.stringify(newTherapist), {headers: headers})
            .map(res => res.json());
    }

    deleteTherapist(id){
        return this.http.delete('/api/therapists/' + id)
            .map(res => res.json());
    }

    updateStatus(therapist){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put('/api/therapists/'+therapist._id, JSON.stringify(therapist), {headers: headers})
            .map(res => res.json());
    }
}