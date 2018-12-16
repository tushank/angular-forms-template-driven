import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IAdminAccount } from './admin-account';
import { BsModalRef } from 'ngx-bootstrap';
import { AppService } from '../app.service';

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
  modelData: IAdminAccount[] = [];

  constructor(public bsModalRef: BsModalRef, private appService: AppService) { }


  ngOnInit() {
    this.model = {
      loginName: '',
      password: '',
      fullName: '',
      adminDescription: '',
      adminGroups: ''
    };
  }

  ngAfterViewInit() {
    this.appService.productDataSubject.subscribe((product) => {
      console.log(product);
      if (product) {
        this.signupForm.form.patchValue({
          loginName: product.loginName,
          password: product.password,
          fullName: product.fullName,
          adminDescription: product.adminDescription,
          adminGroups: product.adminGroups
        });
        console.log('after : ', this.signupForm);
      }
    });

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
    this.modelData.push(this.model);
    localStorage.setItem('adminAccountData', JSON.stringify(this.modelData));
    this.signupForm.reset();
  }
}
