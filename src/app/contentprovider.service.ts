import { Injectable } from '@angular/core';
import {ComService} from"./com.service";
import {image} from 'app/class/image.class'
import {chapter} from 'app/class/chapter.class'
import {educationalPlan} from 'app/class/educationalPlan.class';
import { RouterModule} from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import {Competence} from 'app/class/competence.class'

@Injectable()
export class ContentproviderService {
	private imageRight : BehaviorSubject<string> = new BehaviorSubject<string>(null);
	private imageLeft : BehaviorSubject<string> = new BehaviorSubject<string>(null);
	private flag : BehaviorSubject<string> = new BehaviorSubject<string>(null);
	private competences : BehaviorSubject<Array<Competence>> = new BehaviorSubject<Array<Competence>>(null);
	private backroundColor : BehaviorSubject<string> = new BehaviorSubject<string>(this.standard);
	private illustrations : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private standard : string = "#005daa";


  constructor(private com : ComService) { 
  	this.competences.next(com.getCompetenceList());
  }

  setAchievedCompetences(){

  }

  setAchievedCompetence(id:number){

  }
  setEdPlan(id:number){
    this.illustrations.next(false);
    this.backroundColor.next(this.standard);
    //this.com.getEdPlans(id).subscribe(data=>)
    //this.competences.next()
  }
  setCompetences(){

  }
  setCompetence(id:number){

  }

  getBackRoundColor(): BehaviorSubject<string>{
  	return this.backroundColor;
  }
  getImageLeft() :BehaviorSubject<string>{
  	return this.imageLeft;
  }
  getImageRight() :BehaviorSubject<string>{
  	return this.imageRight;
  }
  getFlag() :BehaviorSubject<string>{
  	return this.flag;
  }
  getIllustrations():BehaviorSubject<boolean>{
  	return this.illustrations;
  }
  getCompetences():BehaviorSubject<Array<Competence>>{
  	return this.competences;
  }

}
