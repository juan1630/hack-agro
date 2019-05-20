import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  public socketStatus = false;

  constructor( private socket: Socket ) {
    this.checkStatus();
  }


  checkStatus() {
    this.socket.on('connect', () => {
      console.log('conectado al servidor');
      this.socketStatus = true;
     });

    this.socket.on('disconnect', () => {
      console.log('desconectado del servidor');
      this.socketStatus = false;
     });
  }
  // tslint:disable-next-line:ban-types
  emitir( evento: string, payload?: any, callback?: Function ) {
    this.socket.emit( evento, payload, callback );
    // emitimos los eventos de cualquier tipo

  }

  escuchar( evento: string ) {
    return this.socket.fromEvent( evento );
  }
}

