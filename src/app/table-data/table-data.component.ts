import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AdminAccountComponent } from '../admin-account/admin-account.component';

@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.css']
})
export class TableDataComponent implements OnInit {
  bsModalRef: BsModalRef;

  constructor(private modalService: BsModalService) { }

  openModalWithComponent() {
    this.bsModalRef = this.modalService.show(AdminAccountComponent);
    this.bsModalRef.content.closeBtnName = 'Close';
  }

  ngOnInit() {
  }

}
