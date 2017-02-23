import { Component, OnInit } from '@angular/core';
import {ComService} from 'app/com.service'

@Component({
  selector: 'app-deleteprofile',
  templateUrl: './deleteprofile.component.html',
  styleUrls: ['./deleteprofile.component.css']
})
export class DeleteprofileComponent implements OnInit {

  constructor(private com : ComService) { }

  ngOnInit() {
  }

  deleteAccount(pw:string){
  	if(pw){
  		this.com.deleteAccount(pw);
  	}else{
  		//handleme
  	}
  }

}
