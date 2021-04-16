import { Component, OnInit } from '@angular/core';
import { AssessmentQuestionModel } from '../../models/assessmentQuestion.model';
import { StorageService } from '../../storage.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selfassessment',
  templateUrl: './selfassessment.page.html',
  styleUrls: ['./selfassessment.page.scss'],
})
export class SelfassessmentPage implements OnInit {
  AssessmentQuestionModel: AssessmentQuestionModel[];

  qq1: string = "false";
  qq2: string = "false";
  qq3: string = "false";
  qq4: string = "false";
  qq5: string = "false";
  qq6: string = "false";
  qq7: string = "false";
  qq8: string = "false";
  qq9: string = "false";
  qq10: string = "false";
  qq11: string = "false";
  qq12: string = "false";

  lengthForKey: string = "key";
  
  constructor(private storage: StorageService, private alertController: AlertController, private router: Router) { }

  ngOnInit() {
  }

  onClickSubmit(qq1, qq2, qq3, qq4, qq5, qq6, qq7, qq8, qq9, qq10, qq11, qq12) {
    this.alertController.create({
      header: 'Confimrmation',
      message: 'Proceed to submit the assessment ',
      buttons: [{
        text: 'Submit',
        handler: () => {
          this.storage.SaveNewAssessment(
            Date.now().toString(), qq1, qq2, qq3, qq4, qq5, qq6, qq7, qq8, qq9, qq10, qq11, qq12,
          );
          this.storage.getStorageLength().then(val => {
            this.lengthForKey += val;
            console.log("--lengthForKey: " + this.lengthForKey);

          })
          this.router.navigate([""]);
        }
      }, 'Cancel']
    }).then(alert => {
      alert.present();
    })
  }

  onTest(test) {
    console.log("test: " + test);
  }
}
