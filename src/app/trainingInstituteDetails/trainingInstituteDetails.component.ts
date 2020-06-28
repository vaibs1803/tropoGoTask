import { Component, OnInit, Output, OnChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn, FormArray, FormControl } from '@angular/forms';

import { debounceTime } from 'rxjs/operators';

import { InstituteDetails } from './instituteDetails';
import { CourseDetailsComponent } from './courseDetails/courseDetails.component';


@Component({
    selector: 'institute-details',
    templateUrl: './trainingInstituteDetails.component.html',
    styleUrls: ['./trainingInstituteDetails.component.css']
})
export class TrainingInstituteDetailsComponent implements OnInit {
    instituteForm: FormGroup;
    institute = new InstituteDetails();
    imageSrc: string;
    myFiles: File;
    ArrayOfSelectedFile = new Array<string>();
    @Output() courseDetailComp: CourseDetailsComponent;

    showInstituteDetail: boolean = true;
    showCustomerDetail: boolean = false;

    constructor(private fb: FormBuilder) { }

    ngOnInit() {
        this.instituteForm = this.fb.group({
            instituteName: ['', [Validators.required, Validators.minLength(3)]],
            instituteBroucher: [''],
            certifications: [''],
            instituteGallery: ['', [Validators.required]],
            file: new FormControl('', [Validators.required]),
            fileSource: new FormControl('', [Validators.required])
        });
        this.imageSrc = 'assets/img/ic_logoiid.png';
    }

    onFileChange(event) {
        const reader = new FileReader();

        if (event.target.files && event.target.files.length) {
            const [file] = event.target.files;
            reader.readAsDataURL(file);
            reader.onload = () => {
                this.imageSrc = reader.result as string;
                this.instituteForm.patchValue({
                    fileSource: reader.result
                });

            };

        }
    }

    onInstituteBroucherChange(event) {
        this.ArrayOfSelectedFile= [];
        this.myFiles = event.target.files;
        this.ArrayOfSelectedFile.push(event.target.files);
        // for (var i = 0; i < event.target.files.length; i++) {
        //     var reader = new FileReader();
        //     reader.readAsDataURL(event.target.files[i]);
        //         reader.onload = (event:any) => {
        //           console.log(event.target.result);
        //            this.myFiles.push(event.target.files);
        //         }
        // }
    }

    removeSelectedFile(index){
        this.ArrayOfSelectedFile.splice(index,1);
    }

    nextClick() {
        console.log(this.instituteForm);
        console.log('Saved: ' + JSON.stringify(this.instituteForm.value));
        this.showCustomerDetail = true;
    }

}
