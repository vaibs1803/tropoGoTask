import { Component, Output, OnChanges } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError, NavigationCancel } from '@angular/router';
import { TrainingInstituteDetailsComponent } from './trainingInstituteDetails/trainingInstituteDetails.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Demo';
  loading: boolean;
  imageSrc: string = 'assets/img/tropogo.png';
  ngOnInit() {
    
  //   this.instituteDetailComp.valueChanges.subscribe(x => {
  //     console.log('form value changed')
  //     console.log(x)
  // })
  }
}
