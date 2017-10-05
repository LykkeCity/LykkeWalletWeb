import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  // TODO HISTORY SERVICE
  // HANDLE INPUTS OF TABLE
  // HANDLE INPUTS OF FILTER
  selectedFilter: string;

  constructor() {
    this.selectedFilter = 'all';
  }

  ngOnInit() {
  }

  onFilterChange(event) {
    this.selectedFilter = event.target.value;

    // handle value to service ?
    // event.target.value
  }

}
