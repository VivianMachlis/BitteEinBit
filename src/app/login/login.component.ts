import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { ComService } from '../com.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	private username : string;
	private password : string;

  constructor(private com : ComService, private router : Router) { }

  ngOnInit() {
  }

  update(a:string,b:string){
	this.username = a;
	this.password = b;
	console.log("updating is fun "+ a +" "+ b)
  }

  login(){
  	if(this.username&&this.password){
  		this.com.login(this.username,this.password);
  		console.log("posted username and password");
  		this.router.navigate(['achievedCompetences']);
  	}else{
  		console.log("no username, password");
  		console.log(this.password +"--"+this.username);
  		//TODO display: please enter a username and a password
  	}
  }

}

