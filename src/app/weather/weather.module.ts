import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {WeatherComponent} from './weather.component';
import {RouterModule} from '@angular/router';
import {MenubarModule} from '../menubar/menubar.module';
import {WeatherService} from './weather.service';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MenubarModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'weather', component: WeatherComponent}
    ]),
    HttpModule
  ],
  providers: [WeatherService],
  declarations: [WeatherComponent],
})
export class WeatherModule { }
