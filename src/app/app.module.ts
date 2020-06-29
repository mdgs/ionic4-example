import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppInitializerService } from './app-initializer.service';
import { MySecondService } from './second/my-second.service';

export function loadConfig(appInitializerService: AppInitializerService) {
  console.log('APP_INITIALIZER 1');
  return () => appInitializerService.loadConfig();
}

export function loadSettings(appInitializerService: AppInitializerService) {
  console.log('APP_INITIALIZER 2');
  return (): Promise<any> => {
    return appInitializerService.loadSettings();
  };
}

export function load3(appInitializerService: AppInitializerService) {
  console.log('APP_INITIALIZER 3');
  return (): Promise<any> => {
    return appInitializerService.loadThird();
  };
}

export function load4(appInitializerService: AppInitializerService) {
  console.log('APP_INITIALIZER 4');
  return (): Promise<any> => {
    return appInitializerService.loadForth();
  };
}
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },

    MySecondService,

    AppInitializerService,
    { provide: APP_INITIALIZER, useFactory: loadConfig, deps: [AppInitializerService], multi: true },
    { provide: APP_INITIALIZER, useFactory: loadSettings, deps: [AppInitializerService], multi: true },
    { provide: APP_INITIALIZER, useFactory: load3, deps: [AppInitializerService], multi: true },
    { provide: APP_INITIALIZER, useFactory: load4, deps: [AppInitializerService], multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
