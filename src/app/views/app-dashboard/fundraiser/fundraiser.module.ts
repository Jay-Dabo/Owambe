import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FundraiserComponent } from './fundraiser.component';
import { FundraiserRoutingModule } from './fundraiser-routing.module';
import { AllComponent } from './all/all.component';
import { SingleComponent } from './single/single.component';



@NgModule({
  declarations: [FundraiserComponent, AllComponent, SingleComponent],
  imports: [
    CommonModule,
    FundraiserRoutingModule
  ]
})
export class FundraiserModule { }
