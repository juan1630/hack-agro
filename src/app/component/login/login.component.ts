import { Component, OnInit } from '@angular/core';
import { RestService } from '../../service/rest.service';
import { NgForm } from '@angular/forms';
import { Usuario } from '../../interfaces/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // tslint:disable-next-line:variable-name
  constructor( public _restService: RestService,
               public router: Router ) { }

  ngOnInit() {
  }

  login( forma: NgForm ) {
    const usuario = new Usuario( null, forma.value.email, forma.value.pass );
    console.log(usuario);
    this._restService.login(usuario)
    .subscribe( (resp) => {
      console.log(resp);
      this.router.navigateByUrl('/home');
     });
  }
}
