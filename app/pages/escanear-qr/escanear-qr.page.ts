import { Component, OnDestroy, OnInit } from '@angular/core';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';

@Component({
  selector: 'app-escanear-qr',
  templateUrl: './escanear-qr.page.html',
  styleUrls: ['./escanear-qr.page.scss'],
})
export class EscanearQrPage implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit() {
    console.log('abriendo pagescanner');
  }

  qrCodeString = 'This is a secret qr code message';
  scannedResult: any;
  visibilidad = 'show';


  async checkPermission() {
    try {
      const status = await BarcodeScanner.checkPermission({ force: true });
      if (!status.granted) {
        return true; //el usuario dio permisos para la camara  
      }
      return false;
    } catch (error) {
      console.log(error);
    }
  }

  async startScan() {
    try {
      const permission = await this.checkPermission();
      if (!permission) {
        return;
      }
      await BarcodeScanner.hideBackground();
      this.visibilidad = 'hidden';
      document.querySelector('body').classList.add('scanner-activo');
      const result = await BarcodeScanner.startScan();
      console.log(result);
      BarcodeScanner.showBackground();
      document.querySelector('body').classList.remove('scanner-activo');
      this.visibilidad = 'show';
      if (result?.hasContent) {//si el usuario escaneo algo
        this.scannedResult = result.content;
        console.log(this.scannedResult);
      }
    } catch (error) {
      console.log(error);
      this.stopScan();
    }
  }

  stopScan() {
    this.visibilidad = 'show';
    BarcodeScanner.showBackground();
    BarcodeScanner.stopScan();
    document.querySelector('body').classList.remove('scanner-activo');
  }

  ngOnDestroy(): void {
    this.stopScan();
  }

}


