import { Component, OnInit } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//import { HomePage } from '../pages/home/home';
import { SignosvitalesPage } from '../pages/signosvitales/signosvitales';

@Component({
  selector: 'app-component',
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = SignosvitalesPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
export class AppComponent implements OnInit {
  constructor () {}
  ngOnInit () {}
}
