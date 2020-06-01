import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailspacientePage } from './detailspaciente';

@NgModule({
  declarations: [
    DetailspacientePage,
  ],
  imports: [
    IonicPageModule.forChild(DetailspacientePage),
  ],
})
export class DetailspacientePageModule {}
