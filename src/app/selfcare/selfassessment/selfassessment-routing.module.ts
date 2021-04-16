import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelfassessmentPage } from './selfassessment.page';

const routes: Routes = [
  {
    path: '',
    component: SelfassessmentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelfassessmentPageRoutingModule {}
