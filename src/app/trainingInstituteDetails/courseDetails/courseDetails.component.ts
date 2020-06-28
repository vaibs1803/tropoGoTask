import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

import { debounceTime } from 'rxjs/operators';
import { CourseDetails } from './courseDetails';


@Component({
    selector: 'course-details',
    templateUrl: './courseDetails.component.html',
    styleUrls: ['./courseDetails.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class CourseDetailsComponent implements OnInit {
    courseDetailForm: FormGroup;
    courseDetails = new CourseDetails();
    public locations: { [key: string]: Object }[];
    languages: { Name: string; Code: string; }[];
    hideCourseDetail:boolean = true;

    get batches(): FormArray {
        return this.courseDetailForm.get('batches') as FormArray;
    }

    constructor(private fb: FormBuilder) { }

    ngOnInit() {
        this.courseDetailForm = this.fb.group({
            courseName: ['', [Validators.required, Validators.minLength(3)]],
            aircraftType: 'multirotar',
            sendCatalog: true,
            batches: this.fb.array([this.buildBatch()]),
            courseDetail: ''
        });
        this.locations= [
            { Name: 'Karnataka', Code: 'KA' },
            { Name: 'Kerala', Code: 'KL' },
            { Name: 'TamilNadu', Code: 'TN' },
            { Name: 'Andhra Pradesh', Code: 'AP' },
            { Name: 'Madhya Pradesh', Code: 'MP' },
            { Name: 'Uttar Pradesh', Code: 'UP' },
            { Name: 'Rajasthan', Code: 'RJ' }
        ];
        this.languages= [
            { Name: 'Hindi', Code: 'Hindi' },
            { Name: 'English', Code: 'English' },
            { Name: 'Kannad', Code: 'Kannad' },
            { Name: 'Malayalam', Code: 'Malayalam' },
            { Name: 'Urdu', Code: 'Urdu' },
            { Name: 'French', Code: 'French' },
            { Name: 'German', Code: 'German' },
            { Name: 'Spanish', Code: 'Spanish' }
        ];
    }

    addBatches(): void {
        this.batches.push(this.buildBatch());
    }

    removeBatch(i: number): void {
        this.batches.removeAt(i);
    }

    buildBatch(): FormGroup {
        return this.fb.group({
            startdate: ['', Validators.required],
            enddate: '',
            courseLocation: '',
            courseLanguage: '',
            courseCost: 0,
            isWeekendCourse: false
        });
    }

    backClick(): void {
        this.hideCourseDetail = false;
    }

    save() {
        console.log(this.courseDetailForm);
        console.log('Saved: ' + JSON.stringify(this.courseDetailForm.value));
        alert("Saved Successfully!");
    }

}
