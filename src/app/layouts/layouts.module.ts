import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopnavComponent } from './topnav/topnav.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [TopnavComponent, FooterComponent],
  imports: [
    CommonModule
  ],
  exports: [TopnavComponent, FooterComponent]
})
export class LayoutsModule { }
