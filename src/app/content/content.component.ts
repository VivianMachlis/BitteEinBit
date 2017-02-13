import { Component, OnInit } from '@angular/core';
import {ComService} from"../com.service";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {

  constructor(private comService: ComService) { 
  }

  ngOnInit() {
  	//document.getElementById("test").innerHTML = this.comService.login("","").toString();
  }

}


