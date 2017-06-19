import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenreAndYearComponent } from './genre-and-year.component';

describe('GenreAndYearComponent', () => {
  let component: GenreAndYearComponent;
  let fixture: ComponentFixture<GenreAndYearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenreAndYearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenreAndYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
