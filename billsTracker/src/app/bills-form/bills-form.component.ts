import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';

export interface BillsTable {
  name: string;
  amount: string;
  dueDate: any;
  paid: boolean;
  remove: boolean;
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
  displayedColumns: string[] = ['name', 'amount', 'duedate', 'paid', 'remove'];

  ngOnInit(): void {
    console.log('Loading BillsFormComponent');
  }

  /**
   * Add bill item to table and clear inputs
   */
  addBillItem() {
    const item: BillsTable = {
      name: this.billName,
      amount: this.billAmount,
      dueDate: this.billDueDate,
      paid: false,
      remove: false
    };
    this.billsArrayTable.push(item);
    if (this.billsArrayTable.length > 1) {
      this.table.renderRows();
    }
    this.clearForm();
  }

  /**
   * Clear form data
   */
  clearForm() {
    this.billName = '';
    this.billAmount = '';
    this.billDueDate = undefined;
  }

  /**
   * Remove item from table array
   */
  removeTableItem() {
    this.billsArrayTable.forEach((item: any, index: any, object: any[]) => {
      if (item.remove) {
        object.splice(index, 1);
        this.table.renderRows();
      }
    });
    if (this.billsArrayTable.length > 1) {
      this.table.renderRows();
    }
  }

}
