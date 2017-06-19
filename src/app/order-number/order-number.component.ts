import { Component, OnInit } from '@angular/core';
import {MyListService} from 'service/my-list.service';
import {OneTrackModel} from 'service/OneTrackModel';



@Component({
  selector: 'app-order-number',
  templateUrl: './order-number.component.html',
  styleUrls: ['./order-number.component.css']
})
export class OrderNumberComponent implements OnInit {

  // order: number;
  trackData: OneTrackModel[];
  validation = false;
  constructor(private _myListService: MyListService) {}
  ngOnInit() {}

  private postData(a) {
    this._myListService.postByOrderData(a)
      .subscribe(data => {
        this.trackData = data;
        this.validation = true;
      });
  }
  onSubmit(val) {
    this.postData(val.order);
  }

}
