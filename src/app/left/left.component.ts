import { Component, OnInit } from '@angular/core';
//import {ComService} from 'src';


@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.css']
})
export class LeftComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	//ComService.signin();
  	//document.getElementById('app-left').innerHTML= "" + ComService.get
  }

}
