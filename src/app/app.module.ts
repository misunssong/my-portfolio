import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {MenubarModule} from './menubar/menubar.module';
import {WeatherModule} from './weather/weather.module';
import {MenubarComponent} from './menubar/menubar.component';
import {WeatherComponent} from './weather/weather.component';
import { ChartComponent } from './chart/chart.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CalendarComponent } from './calendar/calendar.component';
// import $ from 'jquery/dist/jquery';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ChartComponent,
    CarouselComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    MenubarModule,
    WeatherModule,
    FormsModule,
    RouterModule.forRoot([
      //{path: 'weather', component: WeatherComponent}
      {path: 'chart', component: ChartComponent},
      {path: 'carousel', component: CarouselComponent},
      {path: 'calendar', component: CalendarComponent}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
