import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BarberService {
  readonly APIUrl = 'http://127.0.0.1:8000/'

  constructor(private http: HttpClient) { }

  addBarber(value: any){
    return this.http.post(this.APIUrl + '/barbeiro/', value);
  }
}
