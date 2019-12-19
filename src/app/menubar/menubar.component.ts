import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {

  items:object[] = [];

  constructor() { 
    this.items = [
      // {text: "Dashboard", routerLink:"/dashboard"},
      {text: "Weather", routerLink:"/weather"},
      {text: "Board", routerLink:"/board"},
      {text: "Carousel", routerLink:"/carousel"},
      {text: "Calendar", routerLink:"/calendar"},
      {text: "Tables", routerLink:"/tables"},
      {text: "Maps", routerLink:"/maps"},
      {text: "Health Care", routerLink:"/health-care"},
    ];
  }

  ngOnInit() {
  }

  showStyle: false;
  getStyle() {
    if(this.showStyle) {
      return "hotpink;";
    } else {
      return "none";
    }  
  }

  //isClassVisible: false;
  //isHighlighted: Array<boolean> = [];

  //toggleClassActive:false;
  //toggleClassActive: Array<boolean> = []; //메뉴바 toggle class active
  //toggleClassActive: Array<boolean> = Array();
  //toggleClassActive: Array<> = [];
  //toggleClassActive: boolean[] = [true, false];
  toggleClassActive: boolean;

  // toggleClass(item:any){
  //   item.active = !item.active;
  // }

  //selectItem=-1;
}
