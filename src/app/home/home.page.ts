import { Component } from '@angular/core';
import { CovidAPIService } from '../API/covid-api.service';
import { CountriesModel} from '../models/countries.model';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  countries: CountriesModel[] =[{
    'country':     'string',
    'cases':       'cases',
    'todayCases':  'todayCases',
    'deaths':      'deaths',
    'todayDeaths': 'todayDeaths',
    'recovered':   'recovered',
    'todayRecovered': 'todayRecovered',
  }];

  constructor(private covidAPIService: CovidAPIService) {}

  async ngOnInit() {
     
    this.covidAPIService.getAll().subscribe(val=>{
      
      this.countries = val; 
    })
  }

  onClickFind(){
    return this.covidAPIService.getAll().subscribe(
      fetchedCountries =>{
        fetchedCountries.forEach(x => {
          //console.log(x.country);
        }); 
  }
    );
  }

}
