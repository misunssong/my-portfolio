import { Component, OnInit } from '@angular/core';
//import * from 'jquery/dist/jquery';
declare var jquery:any;
declare var $ :any;
//import * as $ from 'jquery/dist/jquery.min.js';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  slides:object[] = [];

  constructor() { 
    this.slides = [
      {text: "slide1", textSmall:"slide1 설명 입니다."},
      {text: "slide2", textSmall:"slide2 설명 입니다."},
      {text: "slide3", textSmall:"slide3 설명 입니다."},
    ];
  }

  ngOnInit() {
    $(document).ready(function($) { 
      $('.slider').bxSlider({ 
        // speed: 1500, 
        // pause: 5000, 
        // mode: 'fade', 
        // captions: true, 
        // auto: false, 
        // infiniteLoop: true, 
        // stopAuto: false, 
        // pager: false, 
        // nextSelector: '#slider-next', 
        // prevSelector: '#slider-prev', 
      }); 
    }); 
  }



}
