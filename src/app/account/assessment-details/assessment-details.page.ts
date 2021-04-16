import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AssessmentQuestionModel } from '../../models/assessmentQuestion.model';
import { StorageService } from '../../storage.service';

@Component({
  selector: 'app-assessment-details',
  templateUrl: './assessment-details.page.html',
  styleUrls: ['./assessment-details.page.scss'],
})
export class AssessmentDetailsPage implements OnInit {

  AssessmentQuestionModel: AssessmentQuestionModel;
  constructor(private activatedRoute: ActivatedRoute, private StorageService: StorageService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('assessmentKey')) { return; }
      const assessmentKEY = paramMap.get('assessmentKey');
      this.AssessmentQuestionModel = this.StorageService.getAssessmentKey(assessmentKEY);
    })
  }

}
