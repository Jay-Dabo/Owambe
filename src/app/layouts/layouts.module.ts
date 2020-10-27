import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopnavComponent } from './topnav/topnav.component';



@NgModule({
  declarations: [TopnavComponent],
  imports: [
    CommonModule
  ],
  exports: [TopnavComponent]
})
export class LayoutsModule { }
