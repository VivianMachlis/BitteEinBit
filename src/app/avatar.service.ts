import { Injectable } from '@angular/core';
import {ComService} from './com.service';
import {avatar} from './class/avatar.class';
import {image} from './class/image.class';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class AvatarService {

	private avatarList : Array<avatar> = [];
	private currentAvatar : number;
  private currentImageSource : BehaviorSubject<avatar> = new BehaviorSubject<avatar>(this.avatarList[this.currentAvatar]);

  $currentImage = this.currentImageSource.asObservable()

  constructor(private com : ComService) { 
  	this.avatarList  = com.getAvatars();
  	//console.log("avatarservice:"+this.avatarList[0].id);
  	this.currentAvatar = com.getStudentData().avatarId;
  	//console.log("avatar id in avatar service: "+ this.currentAvatar);
    
    this.currentImageSource.next(this.avatarList[this.currentAvatar]);
  }


getAvatar() :BehaviorSubject<avatar>{
  //console.log("avatarS: "+ this.currentImageSource);
	return this.currentImageSource;
}

getAvatarList() : Array<avatar> {
	return this.avatarList;
}

updateAvatar(id:number){
  this.currentImageSource.next(this.avatarList[id]);
  this.com.udpateAvatar(id);
}

}
