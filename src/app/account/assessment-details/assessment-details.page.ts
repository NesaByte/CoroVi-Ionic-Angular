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

  loadedAssessment: AssessmentQuestionModel[];// = new AssessmentQuestionModel('', '', '', '', '', '', '', '', '', '', '', '', '', );

  constructor(private activatedRoute: ActivatedRoute, private StorageService: StorageService) { }

  async ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log("id : " + id);
    //this.loadedAssessment = this.StorageService.getAllAssessments();

    this.activatedRoute.paramMap.subscribe(paramMap => {
      // console.log("activatedRoute: ");
      if (!paramMap.has('assessmentKey')) { return; }
      const assessmentKEY = paramMap.get('assessmentKey');
      // console.log("assessmentKEY: " + assessmentKEY);
      // this.StorageService.getAssessmentKey(assessmentKEY).then(saved => { 
      //   console.log("saved : " + saved.q1);
      //   this.loadedAssessment = saved;
      // })

      this.loadedAssessment = this.StorageService.getAssessmentKey(assessmentKEY);
      //this.getOne(assessmentKEY);
    })

    //check this one out tmr: https://stackoverflow.com/questions/52566640/using-ionic-storage-service-how-to-get-and-return-stored-json-data
    
  }

  public async getOne(assessmentKEY) {
    console.log("getOne: " + assessmentKEY);

    //this.loadedAssessment = await this.StorageService.getAssessmentKey(assessmentKEY);
  }

}
