import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelfassessmentPageRoutingModule } from './selfassessment-routing.module';

import { SelfassessmentPage } from './selfassessment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelfassessmentPageRoutingModule
  ],
  declarations: [SelfassessmentPage]
})
export class SelfassessmentPageModule {}
