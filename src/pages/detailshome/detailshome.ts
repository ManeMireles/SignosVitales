import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Geolocation, Geoposition } from '@ionic-native/geolocation';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker,
  LatLng,
  Environment
} from '@ionic-native/google-maps';

@IonicPage()
@Component({
  selector: 'page-detailshome',
  templateUrl: 'detailshome.html',
})
export class DetailshomePage {
	private _currentDetails: any;
	private base64Image: string;

  constructor(
  	public navCtrl: NavController, 
    public navParams: NavParams,
    private camera: Camera,
    public geolocation: Geolocation,
    private googleMaps: GoogleMaps
    ) {
  	this._currentDetails = navParams.data.details;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailshomePage');
  }
  /*Empieza camara*/
  takePicture(){
    	const options: CameraOptions = {
    		quality: 100,
   			destinationType: this.camera.DestinationType.DATA_URL,
    		encodingType: this.camera.EncodingType.JPEG,
    		mediaType: this.camera.MediaType.PICTURE
    }

  	this.camera.getPicture(options).then((imageData) => {
    this.base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (error) => {
    });
  }
  /*Termina Camara*/
  /*Empieza geolocalizacion*/

  ngAfterViewInit(){
  this.geolocationNative();

  }
  geolocationNative(){
    this.geolocation.getCurrentPosition().then((geposition: Geoposition) => {
        this.loadMap(geposition);
    })
  }

  //Empieza código de mapa

loadMap(position){
  let element: HTMLElement = document.getElementById('map');

  let map: GoogleMap = this.googleMaps.create(element);

  let latlng = new LatLng(position.coords.latitude, position.coords.longitude);

  map.one(GoogleMapsEvent.MAP_READY).then(() => {
  
    let position:CameraPosition <LatLng> = {
      target: latlng,   
      zoom: 10,
      tilt: 20
    };
    map.moveCamera(position);
  })  


}

}
