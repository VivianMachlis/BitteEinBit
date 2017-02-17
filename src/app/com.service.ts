import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {chapter} from 'app/class/chapter.class';
import {educationalPlan} from 'app/class/educationalPlan.class';
import {student} from 'app/class/student.class';
import {school} from 'app/class/school.class';
import {image} from 'app/class/image.class';
import {studyGroup} from 'app/class/studyGroup.class';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class ComService {
	private token: string;
	private isAuth : boolean;
	private loginHeader : Headers;
	
	private url:  string = "http://46.101.204.215:1337";
	private loginUrl: string = "/api/V1/login"; //PUT
	private changePwUrl: string = "/api/V1/requestPasswordRecovery"; //PUT
	private resetPwUrl:string = "/api/V1/passwordRecovery/reset"; //PUT
	private deleteProfileUrl = "/api/V1/student/"; //DELETE
	private changeAvatarUrl = "api/V1/avatar/:avatarId"; //PUT
	private getAvatarsUrl = "/api/V1/avatar/";		//GET
	private getStudentUrl = "/api/V1/student";	//GET
	private getChapterDetailsUrl = "/api/V1/chapter"; //GET
	private getChapterSingleUrl = "/api/V1/chapter/:"; //GET with id 
	private getChapterIllustrationsUrl = "/api/V1/chapterillustrations/:"; //GET with id
	private getStudentCompetencesUrl = "/api/V1/studentcompetence?checked=true&chapterId="; //GET chapter with ID
  //Liefert die Kompetenzen des angegebenen Kapitels zurück.
  //checked (true | false) optional, Default: false. Ist checked=true, dann werden nur die bereits erreichten Kompetenzen des Schülers zurückgegeben. (Filterung erfolgt auf Serverseite).
  //chapterId: Die eindeutige Id eines Kapitels
	private getEducationalPlanUrl = "/api/V1/educationalPlan"; //GET
	private getEducationalPlanFilteredUrl = "/api/V1/educationalPlan/:"; //GET with ID


  private chapters : Array<chapter> = [];
  private educationalPlanList : Array<educationalPlan> =[];
  private avatar : string;
  private student : student;


	constructor(private http: Http) { 
    this.loginHeader = new Headers();
    //todo change
		//this.isAuth = true;
    //this.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYnVnc2J1bm55In0.zGKF0WlETIB7sjN4wjFyohVQOf8R5HUrHflap4WrEJ8";
    //this.loginHeader.append('Authorization',this.token.toString());
		//
    this.isAuth = false;
    
		this.loginHeader.append('Content-Type', 'application/json');
	}



	login(username: String , password: String , callback: any){
			return this.http.put(this.url+this.loginUrl,
				JSON.stringify({ username, password }),
				{headers:this.loginHeader})
				.map((res: Response) => res.json())
				.subscribe(data => this.handleData(data, this,callback),this.handleError);
	}
  	private handleError(data:any){
  		console.log(data);
  	}
  	private handleData(data, com:ComService,callback:any){
      if(!com.isAuth){
  	  	console.log(data);
  		  if(data){
 			    com.isAuth = true;
  			  com.token = data.token;
  			  com.loginHeader.append('Authorization', data.token);
          com.ChapterDetails(callback);
          com.getEducationalPlan(callback);
          //callback to enable routing
          callback();
  		  }
      }
      return true;
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
    getEducationalPlan(callback){
      if(this.isAuth){
        return this.http.get(this.url+this.getEducationalPlanUrl,{headers:this.loginHeader})
          .map((res: Response) => res.json()).subscribe(data => this.intializeEducationalPlan(data,callback));
      }else{
        this.noAuthError();
      }
    }

    /*getStudent(){
      if(this.isAuth){
        this.http.get(this.url+this.getStudentUrl,{headers:this.loginHeader})
          .map((res: Response) => res.json()).subscribe(  data => this.initializeChapters(data);;
      }else{
        this.noAuthError();
      }
    }*/

  	ChapterDetails(callback){
      var transactionIsHandled = false;      
  		if(this.isAuth){
  			return this.http.get(this.url+this.getChapterDetailsUrl,{headers:this.loginHeader})
  				.map((res: Response) => res.json()).subscribe(  data => this.initializeChapters(data,callback));
  		}else{
        console.log("token is still not ready");
  			this.noAuthError();
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
  	
  	getEducationalPlanFiltered(id: number){
  		if(this.isAuth){
  			return this.http.get(this.url+this.getEducationalPlanFiltered+id,{headers:this.loginHeader})
  				.map((res: Response) => res.json());
  		}else{
  			this.noAuthError;
  		}
  	}
  	


  	getAchievedCompetences(){
       //first write callback => get chapters => get achievedcompetences with chapter id in callback

  		if(this.isAuth){
        return this.http.get(this.url+this.getStudentCompetencesUrl,{headers:this.loginHeader})
          .map((res: Response) => res.json());
      }else{
        this.noAuthError;
      }
  	  
    }

  	private noAuthError(){
      console.error("not auth");
      return "no auth";
    }
    //delay function to handle async
    delay(ms: number) {
       return new Promise(resolve => setTimeout(resolve, ms));
    }

    getStatusAuth() : boolean{
      console.log('auth status is '+this.isAuth);
      return this.isAuth;
    }

    getChapters() : Array<chapter>{
      console.log("handling chapters");
      return this.chapters;
    }
    getEdPlans() : Array<educationalPlan>{
      return this.educationalPlanList;
    }


    initializeChapters(data,callback){
    if(data){
      console.log("chapters handled");
      console.log(data);
      for (var i = 0; i < data.length; ++i) {
        this.chapters[i] = 
          new chapter(data[i]._id, data[i].name,data[i].strongcolor,data[i].weakcolor);
      }
      callback();
    }
  }

    intializeEducationalPlan(data,callback){
      if(data){
        console.log("ed plan handled");
        console.log(data);
        for (var i = 0; i < data.length; ++i) {
          var id : number = data[i]._id;
          var name : string = data[i].name;
          var thema : string = data[i].thema;
          console.log(id+name+thema)
          this.educationalPlanList[i] = new educationalPlan(id,name,thema);
        }
        console.log(this.educationalPlanList);
        callback();
      }
    }



}

