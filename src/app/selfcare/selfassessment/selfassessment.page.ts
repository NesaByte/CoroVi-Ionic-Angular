import { Component, OnInit } from '@angular/core';
import { AssessmentQuestionModel } from '../../models/assessmentQuestion.model';
// import { Storage } from '@ionic/storage';
import { StorageService } from '../../storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selfassessment',
  templateUrl: './selfassessment.page.html',
  styleUrls: ['./selfassessment.page.scss'],
})
export class SelfassessmentPage implements OnInit {
  AssessmentQuestionModel: AssessmentQuestionModel[];
/*
  assessmentQ: AssessmentQuestionModel[] = [{
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
  }];*/

  dt : string = Date.now().toString();
  qq1 : string = "false";
  qq2 : string = "false";
  qq3 : string = "false";
  qq4 : string = "false";
  qq5 : string = "false";
  qq6 : string = "false";
  qq7 : string = "false";
  qq8 : string = "false";
  qq9 : string = "false";
  qq10 : string = "false";
  qq11 : string = "false";
  qq12 : string = "false";

  constructor(private storage: StorageService, private router:Router) { }

  ngOnInit() {
  }

  onClickSubmit(qq1, qq2, qq3, qq4, qq5, qq6, qq7, qq8, qq9, qq10, qq11, qq12) {
    console.log("onclicksubmit " + qq1);  
      this.storage.SaveNewAssessment(
        //this.dt, this.qq1, this.qq2, this.qq3, this.qq4, this.qq5, this.qq6, this.qq7, this.qq8, this.qq9, this.qq10, this.qq11, this.qq12, 
        this.dt, qq1, qq2, qq3, qq4, qq5, qq6, qq7, qq8, qq9, qq10, qq11, qq12, 
      );
      this.router.navigate(['/']);
  }

  onTest(test){
    console.log("test: " + test);
  }
}
