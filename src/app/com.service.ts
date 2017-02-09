import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class ComService {
	private token: String;
	private isAuth : Boolean;
	private loginHeader;
	
	private url:  string = "http://46.101.204.215:1337";
	private loginUrl: String = "/api/V1/login"; //PUT
	private changePwUrl: String = "/api/V1/requestPasswordRecovery"; //PUT
	private resetPwUrl:String = "/api/V1/passwordRecovery/reset"; //PUT
	private deleteProfileUrl = "/api/V1/student/"; //DELETE
	private changeAvatarUrl = "api/V1/avatar/:avatarId"; //PUT
	private getAvatarsUrl = "/api/V1/avatar/";		//GET
	private getStudentUrl = "/api/V1/student/";	//GET
	private getChapterDetailsUrl = "/api/V1/chapter"; //GET
	private getChapterColorUrl = "/api/V1/chapter/:chapterId"; //GET
	private getChapterIllustrationsUrl = "/api/V1/chapterillustrations/:chapterId"; //GET
	private getStudentCompetencesUrl = "/api/V1/studentcompetence?checked=true&chapterId="; //GET chapter with ID
	private getEducationalPlanUrl = "/api/V1/educationalPlan"; //GET
	private getEducationalPlanFilteredUrl = "/api/V1/educationalPlan/:"; //GET with ID




	constructor(private http: Http) { 
		this.isAuth = false;
		this.loginHeader = new Headers();
		this.loginHeader.append('Content-Type', 'application/json');
	}



	async login(username: String , password: String ){
			await this.http.put(this.url+this.loginUrl,
				JSON.stringify({ username, password }),
				{headers:this.loginHeader})
				.map((res: Response) => res.json())
				.subscribe(data => this.handleData(data, this),this.handleError);
			return this.token;
	}
  	private handleError(data:any){
  		console.log(data);
  	}
  	private handleData(data, com:ComService){
  		console.log(data);
  		if(data){
 			com.isAuth = true;
  			com.token = data.token;
  			com.loginHeader.append('Authorization', data.token);
  		}
  	}

  	changePassword(oldPw : String , newPw : String){
  		if(oldPw&&newPw&&this.isAuth){
  			return this.http.put(this.url+this.getChapterDetailsUrl, 
  				JSON.stringify({ oldPw, newPw }),
  				{headers:this.loginHeader})
  				.map((res: Response) => res.json());
  		}else{
  			this.noAuthError;
  		}
  	}

  	getChapterDetails(){
  		if(this.isAuth){
  			return this.http.get(this.url+this.getChapterDetailsUrl,{headers:this.loginHeader})
  				.map((res: Response) => res.json());
  		}else{
  			this.noAuthError;
  		}
  	}

  	getChapterColors(){
  		if(this.isAuth){
  			return this.http.get(this.url+this.getChapterColorUrl,{headers:this.loginHeader})
  				.map((res: Response) => res.json());
  		}else{
  			this.noAuthError;
  		}
  	}
  	getChapterIllustration(id: number){
  		if(this.isAuth){
  			return this.http.get(this.url+this.getChapterIllustrationsUrl+id,{headers:this.loginHeader})
  				.map((res: Response) => res.json());
  		}else{
  			this.noAuthError;
  		}
  	}
  	getCompetences(){
  		if(this.isAuth){
  			return this.http.get(this.url+this.getStudentCompetencesUrl,{headers:this.loginHeader})
  				.map((res: Response) => res.json());
  		}else{
  			this.noAuthError;
  		}
  	}
  	getEducationalPlan(){
  		if(this.isAuth){
  			return this.http.get(this.url+this.getEducationalPlanUrl,{headers:this.loginHeader})
  				.map((res: Response) => res.json());
  		}else{
  			this.noAuthError;
  		}
  	}
  	getEducationalPlanFiltered(id: number){
  		if(this.isAuth){
  			return this.http.get(this.url+this.getEducationalPlanFiltered+id,{headers:this.loginHeader})
  				.map((res: Response) => res.json());
  		}else{
  			this.noAuthError;
  		}
  	}
  	


  	async getAchievedCompetences(){
  		return this.http.get("")
  	}

  	private noAuthError(){}

}
