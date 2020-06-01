import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { SignosvitalesPage } from '../pages/signosvitales/signosvitales';
import { HomePage } from '../pages/home/home';
import { ReportePage } from '../pages/reporte/reporte';
import { PacientePage } from '../pages/paciente/paciente';

import { CommonModule } from '@angular/common';
import { DetailshomePage} from '../pages/detailshome/detailshome';
import { DetailsreportePage } from '../pages/detailsreporte/detailsreporte';
import { DetailspacientePage } from '../pages/detailspaciente/detailspaciente';

import { Camera, CameraOptions } from '@ionic-native/camera';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { HttpClientModule } from '@angular/common/http';
import { Geolocation, Geoposition } from '@ionic-native/geolocation';
import { GoogleMaps } from '@ionic-native/google-maps';

import { DatabaseProvider } from '../providers/database/database';


@NgModule({
  declarations: [
    MyApp,
    SignosvitalesPage,
    HomePage,
    ReportePage,
    PacientePage,
    DetailshomePage,
    DetailsreportePage,
    DetailspacientePage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    CommonModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SignosvitalesPage,
    HomePage,
    ReportePage,
    PacientePage,
    DetailshomePage,
    DetailsreportePage,
    DetailspacientePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    SQLite,
    Geolocation,
    GoogleMaps,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DatabaseProvider
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

})
export class AppModule {}

