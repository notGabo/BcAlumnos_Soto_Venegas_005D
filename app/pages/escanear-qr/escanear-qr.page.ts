import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import { AlertController } from '@ionic/angular';
import { QRScanner, QRScannerStatus } from "@ionic-native/qr-scanner/ngx";
Component({
  selector: 'app-escanear-qr',
  templateUrl: './escanear-qr.page.html',
  styleUrls: ['./escanear-qr.page.scss'],
})
export class EscanearQrPage implements OnInit {

  constructor(private alertController: AlertController, private qrScanner: QRScanner) { }

  ngOnInit() {
  }

  async startScan() {
    this.qrScanner.prepare().then((status: QRScannerStatus) => {
      if (status.authorized) {
        this.qrScanner.show();
        document.getElementsByTagName('body')[0].style.opacity = '0.5';
        this.qrScanner.scan().subscribe((val) => {
          //alert(val);
          this.alertController.create({
            header: 'Estas presente!',
            message: val,
            buttons: ['OK'],
            //custom css
            cssClass: 'alertcss'
          });
          document.getElementsByTagName('body')[0].style.opacity = '1';
        });
      } else if (status.denied) {
        this.alertController.create({
          header: 'Error',
          message: 'Debes permitir el acceso a la camara. Por favor, hazlo manualmente',
          buttons: ['OK'],
          //custom css
          cssClass: 'alertcss'
        });
      } else {
        this.alertController.create({
          header: 'Error',
          message: 'Error desconocido. Contactar al desarollador',
          buttons: ['OK'],
          //custom css
          cssClass: 'alertcss'
        });
      }
    })
  }
}


