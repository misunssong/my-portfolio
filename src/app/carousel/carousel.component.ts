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

      var swiper = new Swiper('.basicSlide', { 
        slidesPerView: 3,// 동시에 보여줄 슬라이드 갯수
        slidesPerColumn: 2,
        // slidesPerGroup : 3//그룹으로 묶을 수, slidesPerView 와 같은 값을 지정하는게 좋음
        spaceBetween: 30,// 슬라이드간 간격
        loopFillGroupWithBlank : true,// 3개가 나와야 되는데 1개만 있다면 2개는 빈칸으로 채워서 3개를 만듬
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });


        var verticalSlide = new Swiper('.verticalSlide', {
          effect: 'coverflow',
          autoHeight: true,
          direction: 'vertical',
          grabCursor: true,
          centeredSlides: true,
          slidesPerView: 3,
          slidesPerGroup: 1,
          slideToClickedSlide: true,
          preventInteractionOnTransition: true,
          loop: false,
          initialSlide : 9,
          coverflowEffect: {
            rotate: 0,// 슬라이더 회전 각 : 클수록 슬라이딩시 회전이 커짐
            stretch: 80,// 슬라이더간 거리(픽셀) : 클수록 슬라이더가 서로 많이 겹침
            depth: 110,// 깊이 효과값 : 클수록 멀리있는 느낌이 강해짐
            modifier: 1,// 효과 배수 : 위 숫자값들에 이 값을 곱하기 처리하여 효과를 강하게 처리함
            slideShadows : true, // 슬라이더 그림자 : 3D 효과를 강조하기 위한 회전시 흐릿한 효과     
          },
          // on: {
          //   transitionStart: function(swiper) {
          //     //console.log($('.swiper-slide-active').index());
          //     $('.swiper-container02 .swiper-slide').removeClass('third fourth');
          //     $('.swiper-container02 .swiper-slide').eq($('.swiper-slide-active').index() - 2).addClass('third');
          //     $('.swiper-container02 .swiper-slide').eq($('.swiper-slide-active').index() - 3).addClass('fourth');
          //   }
          // }
        });
    
  


    });
 
  }





}
