import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MenubarComponent} from './menubar.component'
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [MenubarComponent],
  exports: [MenubarComponent]
})
export class MenubarModule { }
