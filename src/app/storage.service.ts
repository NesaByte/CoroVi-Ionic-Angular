import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { AssessmentQuestionModel } from './models/assessmentQuestion.model';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private _storage: Storage | null = null;

  private assessmentQuestionModel: AssessmentQuestionModel[] = [];

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    const storage = await this.storage.create();
    this._storage = storage;
  }

  //save new assessment
  public SaveNewAssessment(
    key: any,
    qq1: string,
    qq2: string,
    qq3: string,
    qq4: string,
    qq5: string,
    qq6: string,
    qq7: string,
    qq8: string,
    qq9: string,
    qq10: string,
    qq11: string,
    qq12: string,
  ) {
    var newAssessment = new AssessmentQuestionModel(key, qq1, qq2, qq3, qq4, qq5, qq6, qq7, qq8, qq9, qq10, qq11, qq12);
    console.log("Adding new assessment: " + newAssessment.q1);
    console.log(key, qq1, qq2, qq3, qq4, qq5, qq6, qq7, qq8, qq9, qq10, qq11, qq12);
    this._storage?.set(key, newAssessment);
    this.logAllAssessments();
  }

  private logAllAssessments() {
    console.log("all assessments");
    this._storage.forEach((value, key, index) => {
      console.log(key, value as AssessmentQuestionModel)
    })
  }

  //get all assessments
  public getAllAssessments() {
    var alltasks: AssessmentQuestionModel[] = [];
    if (this._storage != null) {
      this._storage.forEach((value, key, index) => {
        alltasks.push(value as AssessmentQuestionModel);
      });
    }
    return alltasks;
  }

  //get one assessment
  public getOneAssessments(AssessmentQuestionModel: AssessmentQuestionModel) {
    console.log("getOneAssessments " + AssessmentQuestionModel);
    var onetask: AssessmentQuestionModel[];
    if (this._storage != null) {
      this._storage.forEach((value, key, index) => {
        onetask.push(value as AssessmentQuestionModel);
      });
    }
    return onetask;
  }

  //delete existing account
  public async deleteOneAssessment(AssessmentQuestionModel: AssessmentQuestionModel) {
    await this._storage.remove(AssessmentQuestionModel.dateTaken);
  }

  //route into the assessment details page using the KEY
  public getAssessmentKey(assessmentKey) {
    console.log("getAssessmentKey: " + assessmentKey);
    return this._storage.get(assessmentKey).then((val) => {
      console.log("value " + val);
      return val;
    })
  }
  //await storage.length()
//route into the assessment details page using the KEY
public getStorageLength() { 
  return this._storage.length().then((val) => {
    console.log("Length " + val);
    return val;
  })
}
}
