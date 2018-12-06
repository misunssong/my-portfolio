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
      {text: "Dashboard", routerLink:"/dashboard"},
      {text: "Weather", routerLink:"/weather"},
      {text: "Chart", routerLink:"/chart"},
      {text: "Carousel", routerLink:"/carousel"},
      {text: "Forms", routerLink:"/forms"},
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

  //toggleClassActive:true;
  toggleClassActive: Array<boolean> = []; //메뉴바 toggle class active

  toggleClass(item){
    item.active = !item.active;
  }

  selectItem=-1;
}
