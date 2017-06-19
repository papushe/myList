import { Component, OnInit } from '@angular/core';
import {MyListService} from 'service/my-list.service';
import {OneTrackModel} from 'service/OneTrackModel';

@Component({
  selector: 'app-genre-and-year',
  templateUrl: './genre-and-year.component.html',
  styleUrls: ['./genre-and-year.component.css']
})
export class GenreAndYearComponent implements OnInit {

  randomDataModel: OneTrackModel[];
  comedyName: '';
  year: number;
  validation = false;
  noData =  false;
  constructor(private _myListService: MyListService) {}

  ngOnInit() {
  }
  private postByGenresAndYear(genre, year) {
    this._myListService.postByGenresAndYear(genre, year).subscribe(data => {
      this.randomDataModel = data.movies;
      if (this.randomDataModel) {
        this.noData = false;
        return;
      }
      this.validation = true;
      this.noData = true;
    });
  }

  onSubmit(val) {
    this.comedyName = val.genres;
    this.year = val.year;
    this.postByGenresAndYear(this.comedyName, this.year);
  }
}

