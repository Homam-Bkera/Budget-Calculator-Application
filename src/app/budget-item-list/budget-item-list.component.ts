import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
// import { MatDialog } from '@angular/material/dialog';
import { EditItemModalComponent } from '../edit-item-modal/edit-item-modal.component';
import { BudgetItem } from './../../shared/models/budget-item.model';

@Component({
  selector: 'app-budget-item-list',
  templateUrl: './budget-item-list.component.html',
  styleUrls: ['./budget-item-list.component.css']
})
export class BudgetItemListComponent implements OnInit {

  @Input() budgetItems: BudgetItem[];
  @Output() delete:EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();

  // constructor(public dialog : MatDialog) { }

  ngOnInit() {
  }

  onDeleteButtonClicked(item : BudgetItem){
    this.delete.emit(item);
  }

  onCradClicked(){
    // show the edit modals
    // const dialogRef = this.dialog.open(EditItemModalComponent,{
    //   width : '580px',
    //   date : item
    // });

    // dialogRef.afterClosed().subscribe(result=> {
    //   // check if result has a value
    //   if(result){
    //     // resute is the update budget item
    //     // replace the item with the update/submitted item from the form
    //     this.budgetItems[this.budgetItems.indexOf(item)]=result;
    //   }
    // })

  }

}
