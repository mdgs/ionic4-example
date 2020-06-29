import { Injectable } from '@angular/core';
import { MySecondService } from '../second/my-second.service';

@Injectable({
  providedIn: 'root'
})
export class MyFirstServiceService {

  constructor(private mySecondService: MySecondService) {
    console.log('MyFirstService constructor: Injected in AppInitializerService #1');
  }
}
