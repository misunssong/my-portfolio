import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {WeatherService} from './weather.service';

// import $ from 'jquery/dist/jquery';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],

})
export class WeatherComponent implements OnInit {

  //Setting
  city:string;
  code:string;

  value:any;
  weather:any;
  temp:any;

  conditions:any;
  wtVal:any;
  val:any;
  

  location={
    city:'',
    code:''
  }


  onChange(val:any){
    //alert(JSON.stringify(val));
    this.location.city=val;
    //this.city=val;
  }

  constructor(private _weatherService:WeatherService) { }

  ngOnInit() {

    this.city='london';
    this.code='uk';
    let location={
      city:this.city,
      code:this.code
    };

    this.save(this.city);
    this.getWT();
        
  }

  save(val:any){
    // console.log(event); 
    console.log(val);

    this.city= val;

    let location={
      city:this.city,
      code:this.code
    };
    
    localStorage.setItem('location', JSON.stringify(location));
    this.getWT();
    
  }


  getWT(){

    this.value = localStorage.getItem('location');
    
      if(this.value!= null){
        this.location = JSON.parse(this.value);
        //alert(this.location.city);
        let location={
          city:this.city,
          code:this.code
        };
      }else{
        //alert('데이터를 찾을 수 없습니다.');
        this.location={
          city:'london',
          code:'uk'
        };
      }



    this._weatherService.getWeather(this.location.city, this.location.code).subscribe((response)=>{
      console.log(response);
      this.weather= response;

      this.temp= this.weather.list[0].main.temp-273.15;
      this.temp= parseInt(this.temp);

      this.wtVal = this.weather.list[0].weather[0].main;
      if(this.wtVal=='Rain'){
        this.conditions='&#xf008;';
      }else if(this.wtVal=='Clear'){
        this.conditions='&#xf00d;';
      }else if(this.wtVal=='Cloudy'){
        this.conditions='&#xf002;';
      }else if(this.wtVal=='Clouds'){
        this.conditions='&#xf013;';
      }else {
        this.conditions='&#xf00d;';
      }

      
    });  
  }


 

}
