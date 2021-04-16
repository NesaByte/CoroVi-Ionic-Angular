import { Component, OnInit } from '@angular/core';
import { StorageService } from '../storage.service';
import { AssessmentQuestionModel } from '../models/assessmentQuestion.model';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  AssessmentQuestionModel: AssessmentQuestionModel[];

  constructor(private storage: StorageService) { }

  ngOnInit() {
    this.AssessmentQuestionModel = this.storage.getAllAssessments();
  }

  ionViewWillEnter() {
    this.AssessmentQuestionModel = this.storage.getAllAssessments();
  }
}
