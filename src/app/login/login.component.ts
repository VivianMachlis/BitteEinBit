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
	//enables routing after succesfully recieved token. i'm smart sometimes!
	private callback = () : void =>{
  		this.router.navigate(['achievedCompetences']);
  	}

  constructor(private com : ComService, private router : Router) { }

  ngOnInit() {
  }

  login(username:string,password:string){
  	this.username = username;
  	this.password = password;
  	if(this.username&&this.password){
  		this.com.login(this.username,this.password,this.callback);
  		console.log("posted username and password");
  		
  	}else{
  		console.log("no username, password");
  		console.log(this.password +"--"+this.username);
  		//TODO display: please enter a username and a password
  	}

  }

  
 

}

