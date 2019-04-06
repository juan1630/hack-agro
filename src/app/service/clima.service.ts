import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {
   key = '607dfc9ce0760fa3a825664535be9c4d';
   url = 'http://api.openweathermap.org/data/2.5/forecast?id=524901&cnt=7&units=metric&APPID=';
  constructor( private http: HttpClient ) {

  }
  getClima() {
  return this.http.get(this.url + this.key );
  }
}
