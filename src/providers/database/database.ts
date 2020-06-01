import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';



@Injectable()
export class DatabaseProvider {


	public db: SQLiteObject;
	private isOpen : boolean;

  constructor(
  	public http: HttpClientModule,
  	public storage: SQLite
  	
  	) {
  		if(!this.isOpen){
    		this.storage = new SQLite();
    		this.storage.create({name: "data.db", location:"default"}).then((db:SQLiteObject) => {
    			this.db = db;
    			this.db.executeSql("CREATE TABLE IF NOT EXISTS ris (id INTEGER PRIMARY KEY AUTOINCREMENT, frecuencia INTEGER, temperatura INTEGER, saturacion INTEGER, presion INTEGER)", []);
    			this.isOpen = true;
    		}).catch((error) => {
    			console.log(error);
    		})
    	}
  	}

  	CreateRegister(frecuencia: number, temperatura: number, saturacion: number, presion: number){
  	return new Promise ((resolve, reject) => {
  		let sql = "INSERT INTO ris (frecuencia, temperatura, saturacion, presion) VALUES (?, ?, ?, ?)";
  		this.db.executeSql(sql, [frecuencia, temperatura, saturacion, presion]).then((data) => {
  			resolve(data);
  		}, (error) => {
  			reject(error);
  		});
  		});
  	}
  	GetAllRegister(){
  	return new Promise ((resolve,reject) => {
  		this.db.executeSql("SELECT * FROM ris", []). then((data) => {
  			let arrayRis = [];
  			if(data.rows.length > 0) {
  				for(var i = 0; i < data.rows.length; i++){
  					arrayRis.push({
  						frecuencia:data.rows.item(i).frecuencia,
  						temperatura:data.rows.item(i).temperatura,
  						saturacion:data.rows.item(i).saturacion,
  						presion:data.rows.item(i).presion
  					});
  				}
  			}
  			resolve(arrayRis);
  		}, (error) => {
  			reject(error);
  		})
  		})
  	}


}
