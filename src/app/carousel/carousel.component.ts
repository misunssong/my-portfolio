import { Component, OnInit } from '@angular/core';

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
  }

}
