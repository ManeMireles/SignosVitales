import { Component } from '@angular/core';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';
import { DetailsreportePage } from '../detailsreporte/detailsreporte';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { DatabaseProvider } from '../../providers/database/database';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'page-reporte',
  templateUrl: 'reporte.html',
})
export class ReportePage {

	private _dataVideo: any;
  private _detailsreporte: any;

  private ListRegister: any;

  constructor(
    public navCrtl:NavController, 
    public navParams:NavParams,
    private database : DatabaseProvider
    ) {

      this._detailsreporte = DetailsreportePage;

  	this._dataVideo = [
  		{title:"¿Qué es un RIS?", image:"Imagen1.png", video:"Video1.mp4", descripcion:"RIS (por su sigla en inglés Radiology Information Systems) es un sistema de información radiológica conformado por un conjunto de computadoras y sistemas, destinados a controlar el flujo de trabajo en un servicio de radiología.", especificacion:"RIS (por su sigla en inglés Radiology Information Systems) es un sistema de información radiológica conformado por un conjunto de computadoras y sistemas, destinados a controlar el flujo de trabajo en un servicio de radiología. Esto incluye: agenda de turnos, módulo de informes, digitalización de documentos, inventario, facturación y visualización de las diferentes etapas que atraviesa el paciente, desde que es admitido hasta que retira el resultado del estudio. Pero revisemos cada etapa para entender todo su potencial..."},

  		{title:"Reglamentos de insumos para la salud", image:"Imagen2.png", video:"Video2.mp4", descripcion:"Cualquier texto 2", especificacion:"Tiene como objeto reglamentar el control sanitario de los insumos y de los remedios herbolarios, así como sus establecimientos, actividades y servicios relacionados con los mismos. REGLAMENTOS DE INSUMOS PARA LA SALUD (RIS). Es una serie de lineamientos que ocupa la secretaria de la salud para evaluar los registros sanitarios para los insumos de la salud. REGLAMENTOS DE INSUMOS PARA LA SALUD (RIS) El reglamento de insumos para la salud, resultan aplicables en la materia: Garantizando la calidad, Garantizando la seguridad y eficacia que deben satisfacer dichos insumos para obtener en nuestro país se registro sanitario."},
  		{title:"¿Qué es el RIS PACS?", image:"Imagen3.png", video:"Video3.mp4", descripcion:"Desafíos decurrentes del uso de multiplataformas no es algo nuevo para gestores de centros de medicina diagnóstica.", especificacion:"El banco de datos del Sistema de Informaciones en Radiología (Radiology Information System – RIS) puede ser integrado al Sistema de Comunicación y Archivo de Imágenes (Picture Archiving and Communication System – PACS), principal solución de almacenamiento de imágenes disponible en medicina diagnóstica. Esa integración permite un registre único del paciente, haciendo un gerenciamiento de imágenes más asertivo, cuando se unen a otros datos clínicos. Además de eso, el PACS permite que los datos se encuentren y las imágenes se manipulen incluso a partir de acceso remoto. La integración con el RIS consolida esa base, creando un registro de acceso universal, para que profesionales radiólogos puedan consultar datos sin tener que salir de un sistema y acceder a otro."},
  		];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReportePage');
  }

  loadDetails( currentInfovideo ){
    this.navCrtl.push( this._detailsreporte, { details: currentInfovideo });
  }
  /*Registro*/
  GetAllRegister(){
        this.database.GetAllRegister().then((data: any) => {
          console.log(data);
          this.ListRegister = data;
        }, (error) => {
          console.log(error);
        })
     }
}
