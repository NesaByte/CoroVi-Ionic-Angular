import { Component } from '@angular/core';
import { CovidAPIService } from '../API/covid-api.service';
import { CountriesModel } from '../models/countries.model';
import { GlobalTotalModel } from '../models/globalTotal.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  total: GlobalTotalModel[] = [{
    'cases': 'cases',
    'todayCases': 'todayCases',
    'deaths': 'deaths',
    'todayDeaths': 'todayDeaths',
    'recovered': 'recovered',
    'todayRecovered': 'todayRecovered',
  }];

  countries: CountriesModel[] = [{
    'country': 'string',
    'cases': 'cases',
    'todayCases': 'todayCases',
    'deaths': 'deaths',
    'todayDeaths': 'todayDeaths',
    'recovered': 'recovered',
    'todayRecovered': 'todayRecovered',
  }];
  input_cn: String = "";
  tobeEntered: String = "GLOBAL";

  constructor(private covidAPIService: CovidAPIService) { }

  async ngOnInit() {
    this.covidAPIService.getAll().subscribe(val => {
      this.countries = val;
    });

    this.covidAPIService.getTotal().subscribe(tot => {
      this.total = tot;
    })
  }

  onClickEnter(cn) {
    this.covidAPIService.getEnteredCountry(cn).subscribe(tot => {
      this.total = tot;
    }) 
    this.input_cn = "";
    this.tobeEntered = cn;
  }

}
