import { Component, OnInit } from '@angular/core';
import { FeriadosService } from '../../services/feriados.service';
import { Feriado } from '../../Interfaces/interfaces';

@Component({
  selector: 'app-feriados',
  templateUrl: './feriados.page.html',
  styleUrls: ['./feriados.page.scss'],
})
export class FeriadosPage implements OnInit {

  feriado: Feriado[] = [];

  constructor(private feriadosService: FeriadosService) { }

  ngOnInit() {
    this.feriadosService.getFeriados().subscribe(resp => {
      console.log('feriados', resp);
      this.feriado.push();
    });

  }
}
