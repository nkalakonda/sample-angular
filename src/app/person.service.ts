import { Injectable } from '@angular/core';
import { Person } from './person';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PersonService {
  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getPersons(query = {}): Observable<any> {
    return this.http.get(this.baseUrl + '/api/persons/');
  }

  createPerson(personData: Person): Observable<Object> {
    return this.http.post(this.baseUrl + '/api/persons/', personData);
  }

  updatePerson(personData: Person):  Observable<Object> {
    return this.http.put(this.baseUrl + '/api/person/' + personData.id, personData);
  }

  deletePerson(id: string): Observable<any> {
    return this.http.delete(this.baseUrl + '/api/person/' + id);
  }

  private handleError(error: any): Promise<any> {
    console.error('Some error occured', error);
    return Promise.reject(error.message || error);
  }
}

