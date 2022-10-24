import { Component, OnDestroy, OnInit, AfterViewInit } from '@angular/core';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-escanear-qr',
  templateUrl: './escanear-qr.page.html',
  styleUrls: ['./escanear-qr.page.scss'],
})
export class EscanearQrPage implements OnInit, AfterViewInit {

  resultado;
  scanActivo = false;

  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    BarcodeScanner.prepare();
  }

  ngOnDestroy() {
    BarcodeScanner.stopScan();
  }

  async startScan() {
    const permitido = await this.checkPermission();
    if (permitido) {
      this.scanActivo = true;
      const resultado = await BarcodeScanner.startScan();
      console.log('resultado' + resultado);
      if (resultado.hasContent) {
        this.resultado = resultado.content;
        this.scanActivo = false;
      }
    }
  }

  async checkPermission() {
    return new Promise(async (resolve, reject) => {
      const status = await BarcodeScanner.checkPermission({ force: true });
      if (status.granted) {
        resolve(true);
      } else if (status.denied) {
        const alert = await this.alertController.create({
          header: 'Error de permisos',
          message: 'Parece que alguien no le dio permisos a la camarita eh... 😾',
          buttons: ['OK']
        });

      } else {
        resolve(false);
      }
    });
  }

  stopScan() {
    BarcodeScanner.stopScan();
    this.scanActivo = false;
  }

}


