import { Component, OnInit } from '@angular/core';
import { StorageService } from '../storage.service';
import { AssessmentQuestionModel } from '../models/assessmentQuestion.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  AssessmentQuestionModel: AssessmentQuestionModel[];

  constructor(private storage: StorageService, private alertController: AlertController) { }

  ngOnInit() {
    this.AssessmentQuestionModel = this.storage.getAllAssessments();
  }

  ionViewWillEnter() {
    this.AssessmentQuestionModel = this.storage.getAllAssessments();
  }

  deleteTask(AssessmentToDelete: AssessmentQuestionModel){
    this.alertController.create({
      header: 'Attention',
      message : 'Are sure you want to delete?? ',
      buttons: [{
        text :'Delete',
        handler : ()=>{
          //console.log("delete" + AssessmentToDelete);
          this.storage.deleteOneAssessment(AssessmentToDelete);
          this.AssessmentQuestionModel = this.storage.getAllAssessments();
        }
      },'Cancel']
    }).then(alert => {
      alert.present();
    })
  }
}
