import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GraficoService {

  constructor( public http: HttpClient ) { }



    // consultas de la grafica

    getData() {
      return this.http.get('http://localhost:5000/grafica')
      .pipe( map( (res: any) => {
        return res;
       } ));
    }
}
