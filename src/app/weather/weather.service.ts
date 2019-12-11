import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiKey ='4d85a8e23f6c6c94fe2d014673d546b5';
  url;


  constructor(private http:Http) { 
    this.url='http://api.openweathermap.org/data/2.5/forecast?q=';
  }


  getWeather(city:string, code:string){
    return this.http.get(this.url + city + ',' + code +','+'&APPID=' + this.apiKey).pipe(map((res:Response)=>res.json()));
  }



}
