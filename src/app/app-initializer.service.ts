import { Injectable } from '@angular/core';
import { MyFirstServiceService } from './first/my-first-service.service';
import { MyThirdService } from './third/my-third.service';

@Injectable()
export class AppInitializerService {

  constructor(private myFirstServiceService: MyFirstServiceService,
              private myThirdService: MyThirdService) {
    console.log('AppInitializerService constructor');
  }

  loadConfig() {
    console.log('Load Configuration 1');
  }

  loadSettings() {
    console.log('Load Settings 2');

    return new Promise<void> ((resolve, reject) => {
      console.log('AppInitializerService.loadSettings()');

      setTimeout(() => {
        console.log('Load Settings Finished 2');
        resolve();
      }, 3000);
    });
  }

  loadThird() {
    console.log('Load Third 3');

    return new Promise<void> ((resolve, reject) => {
      console.log('AppInitializerService.loadThird()');

      setTimeout(() => {
        console.log('loadThird Finished 3');
        resolve();
      }, 5000);
    });
  }

  loadForth() {
    console.log('Load Forth 4');

    return new Promise<void> ((resolve, reject) => {
      console.log('AppInitializerService.loadForth()');

      setTimeout(() => {
        console.log('loadForth Finished 4');
        resolve();
      }, 4000);
    });
  }
}
