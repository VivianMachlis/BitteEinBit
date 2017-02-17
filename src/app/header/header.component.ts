import { Component, OnInit } from '@angular/core';
import {ComService} from 'app/com.service';
import {chapter} from 'app/class/chapter.class'
import {educationalPlan} from 'app/class/educationalPlan.class';
import { RouterModule} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

	private chapters : Array<chapter> = [];
  private educationalPlans : Array<educationalPlan> = [];


 	constructor(private comservice: ComService) { 
     //this.check.validate();
   }

  ngOnInit() {
    
  	//this.comservice.login("bugsbunny","M11K");
  	this.getChapters();
    this.educationalMenu();
  }
  getChapters(){
  	this.comservice.getChapterDetails()
  	.subscribe(	data => this.handleChapterData(data),   
  				error =>  this.logError(error));
  }
  educationalMenu(){
    this.comservice.getEducationalPlan()
    .subscribe(data => this.handleEducationalMenu(data),
           error => this.logError(error));
  }
  getAchievedCompetences(){
    //this.getAchievedCompetences()
    //.subscribe(   )
  }
  logError(er){
  	console.error(er);
  }
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
    }

}
