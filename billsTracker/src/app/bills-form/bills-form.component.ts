import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';

export interface BillsTable {
  name: string;
  amount: string;
  dueDate: any;
  paid: boolean;
}

@Component({
  selector: 'app-bills-form',
  templateUrl: './bills-form.component.html',
  styleUrls: ['./bills-form.component.scss']
})

export class BillsFormComponent implements OnInit {

  @ViewChild(MatTable)
  table!: MatTable<BillsTable>;

  billName = '';
  billAmount = '';
  billDueDate: Date | undefined;

  billsArrayTable: any = [];
  displayedColumns: string[] = ['name', 'amount', 'duedate', 'paid'];

  ngOnInit(): void {
    console.log('Loading BillsFormComponent');
  }

  addBillItem() {
    const item: BillsTable = {
      name: this.billName,
      amount: this.billAmount,
      dueDate: this.billDueDate,
      paid: false
    };
    this.billsArrayTable.push(item);
    this.table.renderRows();
    console.log(this.billDueDate);
    this.clearForm();
    console.log('this.billsArrayTable = ', this.billsArrayTable);
  }

  clearForm() {
    this.billName = '';
    this.billAmount = '';
    this.billDueDate = undefined;
  }

  removeTableItem() {

  }

}
