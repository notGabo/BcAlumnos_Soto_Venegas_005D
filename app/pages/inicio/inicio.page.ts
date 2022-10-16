import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { GetValueService } from '../../services/get-value.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(private menuController: MenuController) { }

  ngOnInit() {
  }

  mostrarMenu() {
    this.menuController.open('first');
  }

  public getUserName() {
    return GetValueService.correoAlumno;
  }
}
