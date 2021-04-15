import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs';
import { CountriesModel } from '../models/countries.model';
import { GlobalTotalModel } from '../models/globalTotal.model';
import { Component } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CovidAPIService {

  constructor(private http: HttpClient) { }

  // getAlll(): Observable<any>{
  //   console.log("getAll() called");
  //   return this.http.get<any>(`https://corona.lmao.ninja/v3/covid-19/countries`)
  //   .pipe(map(results=>{
  //     console.log("TEST: ", results);
  //     return results;
  //   }))
  // }

  getAll() {
    console.log("TEST ");
    return this.http.get<CountriesModel[]>('https://corona.lmao.ninja/v3/covid-19/countries/');
  }

  getTotal() {
    return this.http.get<CountriesModel[]>('https://corona.lmao.ninja/v3/covid-19/all');
  }

  getEnteredCountry(countryName) { 
    return this.http.get<GlobalTotalModel[]>('https://corona.lmao.ninja/v3/covid-19/countries/'+ countryName);
  }
}
