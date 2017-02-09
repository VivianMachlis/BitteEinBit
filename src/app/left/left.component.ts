import { Component, OnInit } from '@angular/core';
import {ComService} from 'app/com.service';


@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.css']
})
export class LeftComponent implements OnInit {

  constructor(private comservice: ComService) { 

  }

  ngOnInit() {
  	this.comservice.login("bugsbunny","M11K");
  }

}
