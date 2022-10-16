import { Component, OnInit } from '@angular/core';
import { GetValueService } from '../../services/get-value.service';


@Component({
  selector: 'app-alumno',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  alumno = {
    email: '',
    password: ''
  };

  onSubmit() {
    console.log('Formulario enviado');
    console.log(this.alumno);
    GetValueService.correoAlumno = this.alumno.email;

  };
}

