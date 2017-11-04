import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CodeModalPage } from './code-modal';

@NgModule({
  declarations: [
    CodeModalPage,
  ],
  imports: [
    IonicPageModule.forChild(CodeModalPage),
  ],
})
export class CodeModalPageModule {}
