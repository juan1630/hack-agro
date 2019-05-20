import { URL_SERVICE } from './../config/index';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../interfaces/usuario';
import { map } from 'rxjs/operators';
import { Plaga } from '../models/plaga.model';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  logint = false;

  constructor( private http: HttpClient ) { }

  login(usuario: Usuario) {
    const url = `${URL_SERVICE}/login`;
    console.log(  usuario);

    return this.http.post(url, usuario)
    .pipe( map( (resp: any) => {

      console.log(resp);
      localStorage.setItem('user', resp);
      this.logint = true;
      return resp.usuario;
     }));

      }

      agregarUsuario( user: Usuario ) {
        const url = `${URL_SERVICE}/usuario`;

        return this.http.post( url, user )
          .pipe( map( (res: any ) => {
            console.log( res );
            return res;
           } ) );
      }

      getPlaga(data: Plaga) {
        console.log(data);

        const url = 'http://localhost:5000/grafica';

        return this.http.post(url , data)
           .pipe( map( (res: any ) => {
             console.log(res);
             return res;
         } ) );
      }
}
