import { Component } from '@angular/core';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';
import { DetailspacientePage } from '../detailspaciente/detailspaciente';

@Component({
  selector: 'page-paciente',
  templateUrl: 'paciente.html',
})
export class PacientePage {

	private _dataVideo: any;
 	private _detailspaciente: any;

  constructor(public navCrtl:NavController, public navParams:NavParams) {
  	
  	this._detailspaciente = DetailspacientePage;

  		this._dataVideo = [
  		{title:"Health Information Science and Systems", image:"Imagen1.png", video:"Video1.mp4", 
      descripcion:"¿Qué es HIS? Selección de un sistema de información hospitalario", 
      especificacion:"Un sistema de información hospitalario (HIS, por el inglés Hospital Information System) apoya las actividades en los niveles operativos, tácticos y estratégicos de un hospital. El propósito de este artículo, es proveer una guía de pasos que ayude a un hospital a seleccionar el sistema HIS que mejor se adapte a sus necesidades, características y objetivos institucionales. La problemática de encontrar un sistema de información hospitalario nace de la necesidad que tienen los centros de salud de seleccionar adecuadamente una herramienta de software que los ayude a: contrarrestar posibles negligencias médicas, retrasos en la atención, cirugías, robos y desperdicios, e ineficiencias operativas, etc. Así, que todos los profesionales de salud tendrá acceso al expediente completo del paciente al momento de tomar decisiones clínicas."},

  		{title:"Sistema de Información Clínico Hospitalaria. Arquitectura y Mapa de camas", image:"Imagen2.png", video:"Video2.mp4", 
      descripcion:"Hoy el uso de los avances de las tecnologías de la información en la sociedad es imprescindible, de ahí la necesidad de sistemas automatizados que permitan la gestión de un gran volumen de datos. El Ministerio de Salud Pública cubano ha dado pasos importantes en la informatización con la construcción de infraestructuras de telecomunicaciones actualmente asumidas por sistemas manuales con sus posibles sesgos humanos y de tiempo.",
       especificacion:"Desde los comienzos de la historia de la humanidad, el hombre ha sufrido de enfermedades y epidemias, lo que llevó a que se preocupara por el cuidado de la salud; para evitar contraer enfermedades fue tomando conciencia y pretendió comenzar el estudio de la salud al dedicar tiempo a descubrir sus misterios, lo cual le permitió adoptar medidas para tener buena higiene personal, buena alimentación e ingerir agua limpia; como esas medidas no eran del todo suficiente para su cuidado, estudió como prevenir y atender las enfermedades, de esta manera surge la salud como ciencia."},
  		{title:"¿Qué es el RIS PACS?", image:"Imagen3.png", video:"Video3.mp4", descripcion:"Desafíos decurrentes del uso de multiplataformas no es algo nuevo para gestores de centros de medicina diagnóstica.", especificacion:"El banco de datos del Sistema de Informaciones en Radiología (Radiology Information System – RIS) puede ser integrado al Sistema de Comunicación y Archivo de Imágenes (Picture Archiving and Communication System – PACS), principal solución de almacenamiento de imágenes disponible en medicina diagnóstica. Esa integración permite un registre único del paciente, haciendo un gerenciamiento de imágenes más asertivo, cuando se unen a otros datos clínicos. Además de eso, el PACS permite que los datos se encuentren y las imágenes se manipulen incluso a partir de acceso remoto. La integración con el RIS consolida esa base, creando un registro de acceso universal, para que profesionales radiólogos puedan consultar datos sin tener que salir de un sistema y acceder a otro."},
  		];

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PacientePage');
  }
  loadDetails( currentInfovideo ){
    this.navCrtl.push( this._detailspaciente, { details: currentInfovideo });
  }

}
