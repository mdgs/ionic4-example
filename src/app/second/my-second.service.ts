import { Injectable } from '@angular/core';

@Injectable()
export class MySecondService {

  constructor() {
    console.log('MySecondService constructor: injected in MyFirst #1, should be before MyFirst');
  }
}
