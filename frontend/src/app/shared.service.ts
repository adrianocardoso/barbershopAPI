import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIUrl = 'http://127.0.0.1:8000/'

  constructor(private http: HttpClient) { }

  getScheduleList(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/agendamentos/');
  }

  addSchedule(value: any){
    return this.http.post(this.APIUrl + '/agendamentos/', value);
  }

  getBarberList(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/barbeiro/');
  }

  addBarber(value: any){
    return this.http.post(this.APIUrl + '/barbeiro/', value);
  }

  loginBarber(value: any){
    return this.http.post(this.APIUrl + '/auth/', value);
  }

  getAllSchedules(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/agendamentos/')
  }
}
