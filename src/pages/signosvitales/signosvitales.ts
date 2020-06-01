import { Component } from '@angular/core';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


import { HomePage } from '../home/home';
import { ReportePage } from '../reporte/reporte';
import { PacientePage } from '../paciente/paciente';

@Component({
  templateUrl: 'signosvitales.html'
})


export class SignosvitalesPage {

  homeRoot = HomePage;
  reporteRoot = ReportePage;
  pacienteRoot = PacientePage;


  constructor() {}

}
