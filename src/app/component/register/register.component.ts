import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RestService } from '../../service/rest.service';
import { Usuario } from 'src/app/interfaces/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    public restService: RestService,
    public router: Router
   ) { }

  ngOnInit() {
  }

  registro( valor: NgForm ) {
     const usuario = new Usuario( valor.value.nombre, valor.value.correo, valor.value.pass );
     this.restService.agregarUsuario( usuario )
     .subscribe( (res: any) => {
      this.router.navigateByUrl('/home');
      this.restService.logint = true;
      });
  }

}
