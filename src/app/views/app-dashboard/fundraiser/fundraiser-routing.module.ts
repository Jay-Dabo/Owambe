import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FundraiserComponent } from './fundraiser.component';
import { AllComponent } from './all/all.component';
import { SingleComponent } from './single/single.component';

let routes: Routes = [
    {
        path: '', component: FundraiserComponent,
        children: [
        	// { path: '', redirectTo: 'all', pathMatch: 'full' },
            { path: '', component: AllComponent },
            { path: 'single', component: SingleComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FundraiserRoutingModule { }
