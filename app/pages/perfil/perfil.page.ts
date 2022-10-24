import { Component, OnInit } from '@angular/core';
import { GetValueService } from '../../services/get-value.service';
import { ToastController, NavController } from '@ionic/angular';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  constructor(private toastController: ToastController, private navController: NavController) { }

  ngOnInit() {
  }

  getNombre() {
    return GetValueService.nombre;
  }

  getCorreo() {
    return GetValueService.email;
  }

  //close sesion
  cerrarSesion() {
    localStorage.clear(); //limpia el local storage, se puede usar para cerrar sesion
    this.navController.navigateForward('/intro');
    this.showToast('Se ha cerrado sesion');
  };

  async showToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    await toast.present();
  };

}