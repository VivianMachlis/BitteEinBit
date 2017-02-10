import { Component, OnInit,OnChanges } from '@angular/core';
import {ComService} from './com.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ComService]
})
export class AppComponent {
  title = 'i works!';
}
