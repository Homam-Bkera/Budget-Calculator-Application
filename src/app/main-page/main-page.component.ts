import { Component, OnInit } from '@angular/core';
import { BudgetItem } from './../../shared/models/budget-item.model';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  budgetItems:BudgetItem[] = new Array<BudgetItem>();
  totalBudet:number = 0;

  constructor() { }

  ngOnInit() {
  }

  addItem(newItem:BudgetItem){
    this.budgetItems.push(newItem);
    this.totalBudet+=newItem.amount;
  }

  deleteItem(item:BudgetItem){
    let index = this.budgetItems.indexOf(item)
    this.budgetItems.splice(index , 1);
    this.totalBudet-=item.amount;
  }
}
