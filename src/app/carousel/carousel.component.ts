import { Component, OnInit } from '@angular/core';
//import * from 'jquery/dist/jquery';
declare var jquery:any;
declare var $ :any;
//import * as $ from 'jquery/dist/jquery.min.js';
declare var Swiper: any;


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
      {text: "slide4", textSmall:"slide4 설명 입니다."},
      {text: "slide5", textSmall:"slide5 설명 입니다."},
      {text: "slide6", textSmall:"slide6 설명 입니다."},
      {text: "slide7", textSmall:"slide7 설명 입니다."},
      {text: "slide8", textSmall:"slide8 설명 입니다."},
      {text: "slide9", textSmall:"slide9 설명 입니다."},
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

      var swiper = new Swiper('.swiper-container', {
        slidesPerView: 3,
        slidesPerColumn: 2,
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });

    });
 
  }





}
