import { Component } from '@angular/core';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';
import { DetailshomePage } from '../detailshome/detailshome';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { DatabaseProvider } from '../../providers/database/database';
import { HttpClientModule } from '@angular/common/http';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})

export class HomePage {
	private _dataCards: any;
  private _detailshome: any;

  private ListRegister: any;
  private todo: FormGroup;

  constructor(
    public navCrtl:NavController, 
    public navParams:NavParams,
    private database : DatabaseProvider,
    private formBuilder:FormBuilder
    ) {

      this._detailshome = DetailshomePage;

  	   this._dataCards = [
  	   {title:"Paciente", image: "Usuario.png", descripcion: "Informacion general del paciente", especificacion: "Información más detallada del paciente"}
	     ];

      this.todo = this.formBuilder.group({
      frecuencia:['', [Validators.required, Validators.minLength(2),Validators.maxLength(3)]],
      temperatura:['', [Validators.required, Validators.minLength(2),Validators.maxLength(2)]],
      saturacion:['', [Validators.required, Validators.minLength(2),Validators.maxLength(2)]],
      presion:['', [Validators.required, Validators.minLength(5),Validators.maxLength(6)]],
      })
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  loadDetails( currentInfo ) {
    this.navCrtl.push( this._detailshome, { details: currentInfo });
  }

  /*Crear registro*/
  CreateRegister(){
    console.log(this.todo.value);
      this.database.CreateRegister(this.todo.value.frecuencia, this.todo.value.temperatura, this.todo.value.saturacion, this.todo.value.presion).then( (data) => {
        console.log(data);
        /*this.GetAllRegister();*/
      }, (error) => {
        console.log(error);
      })
     }
  GetAllRegister(){
        this.database.GetAllRegister().then((data: any) => {
          console.log(data);
          this.ListRegister = data;
        }, (error) => {
          console.log(error);
        })
     }

}
