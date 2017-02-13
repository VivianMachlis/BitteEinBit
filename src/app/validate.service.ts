import { Injectable } from '@angular/core';
import { ComService } from './com.service';
import { RouterModule, Router } from '@angular/router';
import {CanActivate} from "@angular/router";

//Service to reroute unwanted access
@Injectable()
export class ValidateService implements CanActivate{

  constructor(private com : ComService, private router : Router) { }

  validate(){
  	console.log('validation::    ---');
  	//console.log(this.com.getStatusAuth());
  	if(this.com.getStatusAuth()){
  		console.log('validation::    authenticated');
  		//this.router.navigate(['achievedCompetences']);
  		return this.com.getStatusAuth();
  	}else{
  		console.log('validation::    not authenticated');
  		this.router.navigate(['login']);
  		return this.com.getStatusAuth();
  	}
  }

  canActivate():boolean{
  	return this.validate();
  }

}
