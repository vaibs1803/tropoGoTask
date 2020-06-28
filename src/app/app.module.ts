import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TrainingInstituteDetailsComponent } from './trainingInstituteDetails/trainingInstituteDetails.component';
import { CourseDetailsComponent } from './trainingInstituteDetails/courseDetails/courseDetails.component';
import { MultiSelectAllModule } from '@syncfusion/ej2-angular-dropdowns';
import { NumericTextBoxModule } from '@syncfusion/ej2-angular-inputs';
import { CheckBoxModule, ButtonModule } from '@syncfusion/ej2-angular-buttons';

@NgModule({
  declarations: [
    AppComponent,
    TrainingInstituteDetailsComponent,
    CourseDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MultiSelectAllModule,
    NumericTextBoxModule,
    CheckBoxModule,
    ButtonModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
