import { Component, OnInit,OnChanges } from '@angular/core';
import {ComService} from './com.service';
import {ValidateService} from './validate.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ComService,ValidateService]
})
export class AppComponent {
  title = 'i works!';
}
