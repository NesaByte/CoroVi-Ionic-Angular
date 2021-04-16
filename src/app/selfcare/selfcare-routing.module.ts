import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelfcarePage } from './selfcare.page';

const routes: Routes = [
  {
    path: '',
    component: SelfcarePage
  },
  {
    path: 'selfassessment',
    loadChildren: () => import('./selfassessment/selfassessment.module').then( m => m.SelfassessmentPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelfcarePageRoutingModule {}
