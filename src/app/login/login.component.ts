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
  private callbackCounter: number = 0;
	//enables routing after succesfully recieved token. i'm smart sometimes!
  //since the html requests are all paralell i have to count the callbacks to make sure everything is loaded properly
	private callback = () : void =>{
    if(this.callbackCounter > 1){
      console.log("IF:    callbacks: "+this.callbackCounter);
  		this.router.navigate(['achievedCompetences']);
    }else{
      console.log("ELSE: callbacks: "+this.callbackCounter);
       this.callbackCounter++;
    }
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

