import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IAdminAccount } from './admin-account';
import { BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-admin-account',
  templateUrl: './admin-account.component.html',
  styleUrls: ['./admin-account.component.css']
})
export class AdminAccountComponent implements OnInit {
  @ViewChild('f') signupForm: NgForm;
  defaultAdminGroups = 'administrator';
  model: IAdminAccount;
  submitted = false;

  constructor(public bsModalRef: BsModalRef) {}


  ngOnInit() {
    this.model = {
      loginName: '',
      password: '',
      fullName: '',
      adminDescription: '',
      adminGroups: ''
    };
  }

  onSubmit(): void {
    this.submitted = true;
    console.log('this.signupForm : ', this.signupForm);
    this.model.loginName = this.signupForm.value.loginName;
    this.model.password = this.signupForm.value.password;
    this.model.fullName = this.signupForm.value.fullName;
    this.model.adminDescription = this.signupForm.value.adminDescription;
    this.model.adminGroups = this.signupForm.value.adminGroups;
    console.log('model : ', this.model);
  }
}
