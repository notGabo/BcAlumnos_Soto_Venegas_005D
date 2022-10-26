import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EscanearQrPageRoutingModule } from './escanear-qr-routing.module';

import { EscanearQrPage } from './escanear-qr.page';
import { QRScanner } from "@ionic-native/qr-scanner/ngx";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EscanearQrPageRoutingModule,
    QRScanner
  ],
  declarations: [EscanearQrPage]
})
export class EscanearQrPageModule {

  constructor() { }

  ngOnInit() {
  }


}

