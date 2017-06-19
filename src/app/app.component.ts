import { Component } from '@angular/core';
import { MyListService } from '../service/my-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MyListService]
})
export class AppComponent {
  title = 'app';
}
