import { Component, OnInit } from '@angular/core';
import {MyListService} from 'service/my-list.service';
import {oneTrackModel} from 'service/oneTrackModel';

@Component({
  selector: 'app-genre-and-year',
  templateUrl: './genre-and-year.component.html',
  styleUrls: ['./genre-and-year.component.css']
})
export class GenreAndYearComponent implements OnInit {

  randomDataModel: oneTrackModel[];
  comedyName: '';
  year: number;
  constructor(private _myListService: MyListService) {}

  ngOnInit() {
  }
  private postByGenresAndYear(a, b) {
    this._myListService.postByGenresAndYear(a, b).subscribe(data => {
      this.randomDataModel = data.movies
      console.log(this.randomDataModel);
    });
  }


  onSubmit(val) {
    this.comedyName = val.genres;
    this.year = val.year;
    this.postByGenresAndYear(this.comedyName, this.year);
    console.log(this.year);
    console.log(this.comedyName);
  }
}
