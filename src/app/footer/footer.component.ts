import { Component, OnInit } from '@angular/core';
import {ValidateService} from './../validate.service'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private check : ValidateService) { 
  	this.check.validate();
  }

  ngOnInit() {
  	
  }

}
