import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';

@Component({
  selector: 'app-escanear-qr',
  templateUrl: './escanear-qr.page.html',
  styleUrls: ['./escanear-qr.page.scss'],
})
export class EscanearQrPage implements OnInit {

  public modalAbierto = false;

  constructor() { }

  ngOnInit() {
  }

  public async startScan() {
    const element = document.getElementById('fondoEsp');
    const boton = document.getElementById('boton');
    await BarcodeScanner.checkPermission({ force: true });
    BarcodeScanner.hideBackground();
    element.classList.add('fondoInvisible');
    element.classList.remove('fondo');
    boton.style.visibility = 'hidden';
    const result = await BarcodeScanner.startScan();
    if (result.hasContent) {
      this.modalAbierto = true;
      BarcodeScanner.showBackground();
      element.classList.remove('fondoInvisible');
      element.classList.add('fondo');
      boton.style.visibility = 'visible';


    }
  }

  public abrir(input: boolean) {
    this.modalAbierto = input;
  }

}


