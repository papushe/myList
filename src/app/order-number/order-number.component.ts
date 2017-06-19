import { Component, OnInit } from '@angular/core';
import {MyListService} from 'service/my-list.service';
import {oneTrackModel} from 'service/oneTrackModel';



@Component({
  selector: 'app-order-number',
  templateUrl: './order-number.component.html',
  styleUrls: ['./order-number.component.css']
})
export class OrderNumberComponent implements OnInit {

  trackData: oneTrackModel[];
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
