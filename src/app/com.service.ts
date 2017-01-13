import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class ComService {
	token: any;
	loginHeader = new Headers();
	private result: Array<JSON>;
	private url:  string = "http://46.101.204.215:1337";
	constructor(private http: Http) { 
	}



	login(username, password){
			username = "Bugsbunny";
			password = "M11K";
			this.loginHeader.append('Content-Type', 'application/json');

			this.token = (this.http.put(this.url+"/api/V1/login",
				JSON.stringify({ username, password }),this.loginHeader)).map((res: Response) => this.result = res.json());
			//.map((res: Response) => res.json());
			return this.result[0];
	}
  	
  	
  	getAchievedCompetences(){
  		return this.http.get("")
  	}

}
