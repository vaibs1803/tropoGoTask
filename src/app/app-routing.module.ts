import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TrainingInstituteDetailsComponent } from './trainingInstituteDetails/trainingInstituteDetails.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'welcome', component: TrainingInstituteDetailsComponent },
      {
        path: 'products',
        data: { preload: false }
      },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', component: TrainingInstituteDetailsComponent }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
