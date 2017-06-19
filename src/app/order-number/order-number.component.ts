import { Component, OnInit, EventEmitter, Input } from '@angular/core';
import {MyListService} from 'service/my-list.service';
import {AllData2} from 'service/dataModel2';
// import 'rxjs/add/operator/debounceTime';


@Component({
  selector: 'app-order-number',
  templateUrl: './order-number.component.html',
  styleUrls: ['./order-number.component.css']
})
export class OrderNumberComponent implements OnInit {

  allData: AllData2[];
  // a;
  // a: boolean = false;
  b = [];
  constructor(private _myListService: MyListService) {

  }

  ngOnInit() {
  }

  // private postData(a) {
  //   this._myListService.postByOrderData(a)
  //     // .debounceTime(500)
  //     .subscribe(data => {
  //       // this.allData = data.movie;
  //       this.allData = data;
  //
  //       console.log("new dataaaaaa")
  //      for (const i in this.allData) {
  //        this.b[i] = this.allData[i];
  //        console.log( this.b[i])
  //      }
  //       this.a = true;
  //
  //
  //       // console.log(this.allData)
  //     });
  //   return this.allData;
  // }

  private postData(a) {
    this._myListService.postByOrderData(a)
      .then(data => {
        this.allData = data
        console.log("8888888888888888");
        console.log(this.allData);
      });

  }
  hack(val) {
    return Array.from(val);
  }

  onSubmit(val) {
    this.postData(val.order);
  }

  private reset() {
    this.allData = null;

  }


}
