import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class MyThirdService {

  constructor(
    // never inject ModalController into Provider, since it will cause cyclic deps
    // private modal: ModalController
  ) {
    console.log('MyThirdService constructor: injected in AppInitializerService #2, should be after MyFirst');
  }
}
