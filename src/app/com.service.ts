import { Injectable } from '@angular/core';
import {Http, Headers, HTTP_PROVIDERS, URLSearchParams} from '@angular/http';


@Injectable()
export class ComService {
	var token;

	constructor(private http: HTTP) { }
  	login(){
  		token = this.html.put("/api/V1/login");

  }
  getAchievedCompetences(){
  		return this.http.get("")
  }


}
