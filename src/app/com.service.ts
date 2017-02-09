import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {chapter} from 'app/class/chapter.class';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class ComService {
	private token: String;
	private isAuth : Boolean;
	private loginHeader : Headers;
	
	private url:  string = "http://46.101.204.215:1337";
	private loginUrl: String = "/api/V1/login"; //PUT
	private changePwUrl: String = "/api/V1/requestPasswordRecovery"; //PUT
	private resetPwUrl:String = "/api/V1/passwordRecovery/reset"; //PUT
	private deleteProfileUrl = "/api/V1/student/"; //DELETE
	private changeAvatarUrl = "api/V1/avatar/:avatarId"; //PUT
	private getAvatarsUrl = "/api/V1/avatar/";		//GET
	private getStudentUrl = "/api/V1/student/";	//GET
	private getChapterDetailsUrl = "/api/V1/chapter"; //GET
	private getChapterSingleUrl = "/api/V1/chapter/:"; //GET with id 
	private getChapterIllustrationsUrl = "/api/V1/chapterillustrations/:"; //GET with id
	private getStudentCompetencesUrl = "/api/V1/studentcompetence?checked=true&chapterId="; //GET chapter with ID
	private getEducationalPlanUrl = "/api/V1/educationalPlan"; //GET
	private getEducationalPlanFilteredUrl = "/api/V1/educationalPlan/:"; //GET with ID




	constructor(private http: Http) { 
    this.loginHeader = new Headers();
    //todo change
		this.isAuth = true;
    this.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYnVnc2J1bm55In0.zGKF0WlETIB7sjN4wjFyohVQOf8R5HUrHflap4WrEJ8";
    this.loginHeader.append('Authorization',this.token.toString());
		//
    
		this.loginHeader.append('Content-Type', 'application/json');
	}



	login(username: String , password: String ){
			this.http.put(this.url+this.loginUrl,
				JSON.stringify({ username, password }),
				{headers:this.loginHeader})
				.map((res: Response) => res.json())
				.subscribe(data => this.handleData(data, this),this.handleError);
	}
  	private handleError(data:any){
  		console.log(data);
  	}
  	private handleData(data, com:ComService){
      if(!com.isAuth){
  	  	console.log(data);
  		  if(data){
 			    com.isAuth = true;
  			  com.token = data.token;
  			  com.loginHeader.append('Authorization', data.token);
  		  }
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

  	getChapterDetails() : Observable<chapter[]>{
      var transactionIsHandled = false;
      //ugly code to wait for authorization
      //console.log("getChapterDetails got called");
  		if(this.isAuth){
        //console.log("chapter should get handled");
        var result : Array<chapter> = [];
  			return this.http.get(this.url+this.getChapterDetailsUrl,{headers:this.loginHeader})
  				.map((res: Response) => res.json())
          //.subscribe(data =>  {result = this.handleChapter(data,this),transactionIsHandled=true},this.handleError)
        //while(!transactionIsHandled){
          //await this.delay(50);
          //console.log("fuck await");
      //}
        //console.log("iwork?: ")
        //console.log(result[1].id);
        //return result;
        //console.log(x);
        //return x;
           /*{
            for (var i = 0; i < length; ++i) {
              // code...
            }
            console.log(data);
          });
          console.log("im am auth");*/
  		}else{
        console.log("token is still not ready");
  			this.noAuthError;
  		}
  	}
   

  	getSingleChapter(id:number){
  		if(this.isAuth){
  			return this.http.get(this.url+this.getChapterSingleUrl+id,{headers:this.loginHeader})
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

  	private noAuthError(){
      console.error("not auth");
      return "no auth";
    }
    //delay function to handle async
    delay(ms: number) {
       return new Promise(resolve => setTimeout(resolve, ms));
    }



}

