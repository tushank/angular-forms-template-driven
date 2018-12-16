import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AdminAccountComponent } from '../admin-account/admin-account.component';
import { IAdminAccount } from '../admin-account/admin-account';
import { AppService } from '../app.service';

@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.css']
})
export class TableDataComponent implements OnInit {
  bsModalRef: BsModalRef;
  getLocalData: IAdminAccount[];

  constructor(private modalService: BsModalService, private appService: AppService) { }

  openModalWithComponent(productdata: IAdminAccount) {
    if (productdata) {
      this.appService.productDataSubject.next(productdata);
      this.bsModalRef = this.modalService.show(AdminAccountComponent);
    } else {
      this.bsModalRef = this.modalService.show(AdminAccountComponent);
    }
    this.bsModalRef.content.closeBtnName = 'Close';
  }

  ngOnInit() {
    if (localStorage.getItem('adminAccountData')) {
      this.getLocalData = JSON.parse(localStorage.getItem('adminAccountData'));
    }
  }

}
