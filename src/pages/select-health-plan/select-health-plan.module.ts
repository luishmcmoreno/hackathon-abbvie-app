import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SelectHealthPlanPage } from './select-health-plan';

@NgModule({
  declarations: [
    SelectHealthPlanPage,
  ],
  imports: [
    IonicPageModule.forChild(SelectHealthPlanPage),
  ],
})
export class SelectHealthPlanPageModule {}
