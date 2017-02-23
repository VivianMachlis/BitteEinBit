import { Component, OnInit } from '@angular/core';
import {ComService} from 'app/com.service';
import {chapter} from 'app/class/chapter.class'
import {educationalPlan} from 'app/class/educationalPlan.class';
import { RouterModule} from '@angular/router';
import {student} from 'app/class/student.class';
import {avatar} from 'app/class/avatar.class';
import {AvatarService} from 'app/avatar.service';
import {image} from 'app/class/image.class'


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

	public chapters : Array<chapter> = [];
  private educationalPlanList : Array<educationalPlan> = [];
  public avatarPicture : avatar;
  private studentData : student;
  


 	constructor(private comservice: ComService,private ava : AvatarService) { 
     
     //this.check.validate();
     
     /*this.educationalMenu();
     this.getStudent();*/
     
   }

  ngOnInit() {
    this.chapters = this.comservice.getChapters();
    this.educationalPlanList = this.comservice.getEdPlans();
    this.studentData = this.comservice.getStudentData();
    //console.log("S1: "+ this.studentData);
    this.ava.getAvatar().subscribe(image => this.avatarPicture=image);
    //console.log(this.avatarPicture);
    //console.log("A1-log: "+this.ava.getAvatar());
  	//this.comservice.login("bugsbunny","M11K");

    for (var i = 0; i < this.chapters.length; ++i) {
      this.styleDropDown(this.chapters[i]);
    }

  	
  }


  styleDropDown(chapter: chapter){
    let style = document.createElement('style');
    style.appendChild(document.createTextNode(`li#chapter${chapter.id} > a {
            background-color: ${chapter.strongcolor} !important;
            color: #FFF;
        }
        li#chapter${chapter.id} > a:hover {
            background-color: ${chapter.weakcolor} !important;
            color: #FFF;
        }`));
    document.getElementById("chapterOverview").appendChild(style);

  }
  /*getChapters(){
  	this.comservice.getChapterDetails()
  	.subscribe(	data => this.initializeChapters(data);
      //data => this.handleChapterData(data),   
  		//error =>  this.logError(error));
  }*/
  /*initializeChapters(data){
    if(data){
      console.log("chapters handled");
      for (var i = 0; i < data.length; ++i) {
        this.chapters[i] = 
          new chapter(data[i]._id, data[i].name,data[i].strongcolor,data[i].weakcolor);
      }
    }
  }*/

  /*educationalMenu(){
    this.comservice.getEducationalPlan()
    .subscribe(data => this.educationalPlan = data);
           //data => this.handleEducationalMenu(data),
           //error => this.logError(error));
  }
  getAchievedCompetences(){
    //this.getAchievedCompetences()
    //.subscribe(   )
  }
  logError(er){
  	console.error(er);
  }
  /*getStudent(){
      this.comservice.getStudent()
      .subscribe(data => this.initializeStudent(data));
  }

  initializeStudent(data){
    console.log(data);
    var schoolImage : image =  
      new image(data.school.imageUrl,data.school.imageUrlInactive,data.school.imageUrlBig);
    var studyGroupImage : image =  
      new image(data.studyGroups.imageUrl,data.studyGroups.imageUrlInactive,data.studyGroups.imageUrlBig);
    var schoolVar = new school(data.school.name,data.school.adress,data.school.country,data.school.email,data.school.telefon, schoolImage);
    var studygroup = new studyGroup(data.studyGroups.class, studyGroupImage);
    this.student = new student(data._id,data.forname,data.surname,data.birth,data.formteacher,data.avatarId,schoolVar,studygroup);
    }

   //not calles at the moment
   handleChapterData(data:any){
      console.log("chapter got handled");
      console.log(data);
      if(data){
      	//document.getElementById("chapterOverview").innerHTML = "";
        //var chapter : {id : number; strongcolor : String; weakcolor : String;}
        var chapters : Array<chapter> = [];
        var newElement : string = '';
        //console.log(chapters);
        //console.log(data[0]._id);
        for (var i = 0; i < data.length; ++i) {
          //console.log("sill alive");
          var id :number = data[i]._id;
          var name : string = data[i].name;
          if(i == 0){
      	    newElement = newElement+'</li><li class="liste"><a href="#">'+name+'</a></li>';
          }else{
            newElement = newElement+'<li role="separator" class="divider"></li><li class="liste"><a href="#">'+name+'</a></li>';
          }
          var scolor : string = data[i].strongcolor;
          var wcolor : string = data[i].weakcolor;
          //console.log("id: " + id + "scolor: " + scolor + "wcolor: " + wcolor);
          var newChapter : chapter = new chapter(id, name , scolor, wcolor);

          //console.log(chapter);
          chapters[i] = newChapter;
          //console.log(chapters[i]);
        }
        document.getElementById("insert").innerHTML = document.getElementById("insert").innerHTML+newElement;
        document.getElementById("insert2").innerHTML = document.getElementById("insert2").innerHTML+newElement;
        this.chapters = chapters;
        console.log(this.chapters[1].id);
      }
    }
    //not called at the moment
    handleEducationalMenu(data){
      console.log("educational plans got handled");
      console.log(data);
      if(data){
        var newElement : string = '';
        for (var i = 0; i < data.length; ++i) {
            //console.log("sill alive");
            var id :number = data[i]._id;
            var name : string = data[i].name;
            var thema : string = data[i].thema;
            educationalPlan[i] = new educationalPlan(id,name,thema);
            if(i == 0){
              newElement = newElement+'</li><li class="liste"><a href="#">'+name+'</a></li>';
            }else{
              newElement = newElement+'<li role="separator" class="divider"></li><li class="liste"><a href="#">'+name+'</a></li>';
            }
          }
          document.getElementById("insert3").innerHTML = document.getElementById("insert3").innerHTML+newElement;
          console.log(this.chapters[1].id);
      }else{
        console.log("unexpected error : load educational plans")
      }
    }*/

}
