import { Component, OnInit } from '@angular/core';
import {MyListService} from 'service/my-list.service';
import {AllData} from 'service/dataModel';

@Component({
  selector: 'app-all-data',
  templateUrl: './all-data.component.html',
  styleUrls: ['./all-data.component.css']
})
export class AllDataComponent implements OnInit {

  allData: AllData[];

  constructor(private _myListService: MyListService) {
    this.getAllData();
  }

  ngOnInit() {}

  getAllData() {
    this._myListService.getAllData()
      .subscribe(
        data => this.allData = data.movie
      );
  }
}
