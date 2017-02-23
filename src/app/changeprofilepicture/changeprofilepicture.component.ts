import { Component, OnInit } from '@angular/core';
import {AvatarService} from 'app/avatar.service';
import {avatar} from 'app/class/avatar.class'


@Component({
  selector: 'app-changeprofilepicture',
  templateUrl: './changeprofilepicture.component.html',
  styleUrls: ['./changeprofilepicture.component.css']
})
export class ChangeprofilepictureComponent implements OnInit {
	public avatarList : Array<avatar> = [];
	public currentAvatar : number; 
  constructor(private ava : AvatarService) { 
  }

  ngOnInit() {
  	this.avatarList = this.ava.getAvatarList();
  	//console.log("changeprofile: " + this.avatarList[0].image.imageUrlBig);
  	this.ava.getAvatar().subscribe(image => this.currentAvatar = image.id);
  	//this.fixStyle(this.avatarList);
  }

  changeCurrentAvatar(id:number){
  	this.currentAvatar = id;
  }
  updateAvatar(){
  	this.ava.updateAvatar(this.currentAvatar);
  }


}
