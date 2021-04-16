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

  loadedAssessment: AssessmentQuestionModel[] = [{
    "dateTaken": "",
    "q1": "",
    "q2": "",
    "q3": "",
    "q4": "",
    "q5": "",
    "q6": "",
    "q7": "",
    "q8": "",
    "q9": "",
    "q10": "",
    "q11": "",
    "q12": "",
  }];

  qq1: boolean = false;
  qq2: boolean;
  qq3: boolean = false;
  qq4: boolean = false;
  qq5: boolean = false;
  qq6: boolean = false;
  qq7: boolean = false;
  qq8: boolean = false;
  qq9: boolean = false;
  qq10: boolean = false;
  qq11: boolean = false;
  qq12: boolean = false;

  constructor(private activatedRoute: ActivatedRoute, private StorageService: StorageService) { }

  async ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log("id : " + id);
    //this.loadedAssessment = this.StorageService.getAllAssessments();

    this.activatedRoute.paramMap.subscribe(paramMap => {
      // console.log("activatedRoute: ");
      if (!paramMap.has('assessmentKey')) { return; }
      const assessmentKEY = paramMap.get('assessmentKey');
      console.log("assessmentKEY: " + assessmentKEY);
      this.StorageService.getAssessmentKey(assessmentKEY).then(saved => {
        console.log("saved : " + saved.q1);
        this.loadedAssessment = saved;
        this.qq1 = (saved.q1.toString() === "true");
        this.qq2 = (saved.q2.toString() === "true");
        this.qq3 = (saved.q3.toString() === "true");
        this.qq4 = (saved.q4.toString() === "true");
        this.qq5 = (saved.q5.toString() === "true");
        this.qq6 = (saved.q6.toString() === "true");
        this.qq7 = (saved.q7.toString() === "true");
        this.qq8 = (saved.q8.toString() === "true");
        this.qq9 = (saved.q9.toString() === "true");
        this.qq10 = (saved.q10.toString() === "true");
        this.qq11 = (saved.q11.toString() === "true");
        this.qq12 = (saved.q12.toString() === "true");
        console.log("qq1 : " + this.qq1);
        console.log("qq2 : " + "true" + saved.q2 + ": saved.q2" + "ans: " + (saved.q2.toString() === "true"));
      })
      //this.loadedAssessment = this.StorageService.getAssessmentKey(assessmentKEY);
      //this.getOne(assessmentKEY);
    })
    //check this one out tmr: https://stackoverflow.com/questions/52566640/using-ionic-storage-service-how-to-get-and-return-stored-json-data
  }

  public async getOne(assessmentKEY) {
    console.log("getOne: " + assessmentKEY);

    //this.loadedAssessment = await this.StorageService.getAssessmentKey(assessmentKEY);
  }

}
