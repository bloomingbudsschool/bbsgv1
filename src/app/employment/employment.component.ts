import { Component, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
// import '../../assets/js/smtp.js';
// import { ProfileService } from ‘../profile.service’;
// import { SnotifyService } from ‘ng-snotify’;import { Model } from ‘./contact-form’;
// import { NgForm } from ‘@angular/forms’;
// import ‘./../../../assets/js/smtp.js’; //file path may change → 
// declare let Email: any;



@Component({
  selector: 'app-employment',
  templateUrl: './employment.component.html',
  styleUrls: ['./employment.component.scss']
})
export class EmploymentComponent {

  @ViewChild('fileInput')

  // userForm = new FormGroup({
  //   name: new FormControl(),
  //   email: new FormControl(),

  //   address: new FormGroup({
  //     state: new FormControl(),
  //     street: new FormControl(),
  //     postalCode: new FormControl()
  //   })
  // });

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) { 
    window.addEventListener("click", function(){
     console.log("Testerr");
  });
  }



  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],

    });
    this.secondFormGroup = this._formBuilder.group({
      street: ['', Validators.required],
      city: ['', Validators.required],
      pincode: ['', Validators.required],
    });
  }

  fileInput;

  file: File | null = null;

  onClickFileInputButton(): void {
    this.fileInput.nativeElement.click();
  }

  onChangeFileInput(): void {
    const files: { [key: string]: File } = this.fileInput.nativeElement.files;
    this.file = files[0];
  }
  showdata() {
    alert(
      this.firstFormGroup.value.name + " " +
      this.firstFormGroup.value.email + " " +
      this.secondFormGroup.value.street + " " +
      this.secondFormGroup.value.city + " " +

      this.secondFormGroup.value.pincode
    );



  }

  // window.addEventListener("click", function(){
  //   document.getElementById("demo").innerHTML = Math.random();
  // });

}
  // userForm = new FormGroup({
  //   Name: new FormControl(''),
  //   lastName: new FormControl(''),
  //   age: new FormControl('')
  // });

  // userForm_ = new FormGroup({_fname: new FormControl(''), mail: new FormControl('')
  //     address: new FormGroup({
  //       state: new FormControl(),
  //       street: new FormControl(),
  //       postalCode: new FormControl()
  //     })



  // [x: string]: any;
  // phone;
  // name;
  // discribe;

  // firstFormGroup: FormGroup;
  // secondFormGroup: FormGroup;

  // isLinear = false;

  // constructor(private _formBuilder: FormBuilder) { }
  // ngOnInit() {
  //   this.firstFormGroup = this._formBuilder.group({
  //     firstCtrl: ['', Validators.required]
  //   });
  // }

  // submit(value: any) {
  //   alert(value.name);
  //   console.log(value);
  // Email.send({
  //   Host: 'smtp.elasticemail.com',
  //   Username: 'sandeep.brahma@gmail.com',
  //   Password: '88617830EF8E14B0CACA817BC9AF1F2E1FD5',
  //   To: 'sa.brahmas@gmail.com',
  //   From: 'sandeep.brahma@gmail.com',
  //   Subject: 'Elastic mail test using angular',
  //   Body: `Test mail - using angular component`

  // }).then(alert(value));
