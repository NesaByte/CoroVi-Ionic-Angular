export class AssessmentQuestionModel{
    dateTaken: string;
    public q1: String;
    public q2: String;
    public q3: String;
    public q4: String;
    public q5: String;
    public q6: String;
    public q7: String;
    public q8: String;
    public q9: String;
    public q10: String;
    public q11: String;
    public q12: String;

    constructor(
        dt: string,
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
        ){
            this.dateTaken = dt;
            this.q1  = qq1;
            this.q2  = qq2;
            this.q3  = qq3;
            this.q4  = qq4;
            this.q5  = qq5;
            this.q6  = qq6;
            this.q7  = qq7;
            this.q8  = qq8;
            this.q9  = qq9;
            this.q10  = qq10;
            this.q11  = qq11;
            this.q12  = qq12;

        }
}