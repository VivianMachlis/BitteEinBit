import { Component, OnInit } from '@angular/core';
import {ComService} from 'app/com.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {

	public oldPw : string;
	public newPw : string;
	public newPwCheck : string;

  constructor(private com : ComService, private router : Router) { }

  ngOnInit() {
  }


  changePw(oldPw,newPw,newPwCheck){
  	if(oldPw&&newPw&&newPwCheck&&newPw==newPwCheck){
  		this.com.changePassword(oldPw,newPw);
  		this.router.navigate(['achievedCompetences']);
  	}else{
  		this.handleError();
  	}

  }

  handleError(){
  	console.log("change password error: new Password not matching");
  	console.log("oldpw: "+ this.oldPw+"; new Pw: "+ this.newPw+ "; new Pw Check: "+ this.newPwCheck);
  	//TODO handle me
  }

}
