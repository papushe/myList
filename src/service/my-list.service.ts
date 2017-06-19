import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class MyListService {
  constructor(private _http: Http) { }

  getAllData() {
    return this._http
      .get('https://vod-my-list-web-service-alex.herokuapp.com/getAllMyList')
      .map(this.extractData)
      .catch(this.catchError)
  }

  postByOrderData(orderNumber) {
    return this._http
      .post('https://vod-my-list-web-service-alex.herokuapp.com/getMovieByOrderNum/', {order_num: orderNumber})
      .map(this.extractData)
      .catch(this.catchError)
  }

  postByGenresAndYear(genre, year) {
    return this._http
      .post('https://vod-my-list-web-service-alex.herokuapp.com/getMovieGenreYear/', {genre: genre, year: year})
      .map(this.extractData)
      .catch(this.catchError)
  }

  private logResponse(response: Response) {
    console.log(response);
  }
  private extractData(response: Response) {
    return response.json();
  }
  private catchError(error: Response | any) {
    console.log(error);
    return Observable.throw(error.json().error || 'Server Error')
  }
}
