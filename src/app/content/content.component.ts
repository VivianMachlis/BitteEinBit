import { Component, OnInit } from '@angular/core';
import {ComService} from"../com.service";
import {ContentproviderService} from '../contentprovider.service'
import {image} from 'app/class/image.class'
import {Competence} from 'app/class/competence.class'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {

	public imageRight : string = null;
	public imageLeft : string = null;
	public flag : string = null;
	public competences : Array<Competence> = null;
	public backroundColor : string =null;
	public illustrations : boolean = false;

  constructor(private comService: ComService, private provider : ContentproviderService) {
  	provider.getImageLeft().subscribe(data => this.imageLeft = data); 
  	provider.getImageRight().subscribe(data => this.imageLeft = data);
  	provider.getFlag().subscribe(data => this.flag = data);
  	provider.getCompetences().subscribe(data => this.competences = data);
  	provider.getBackRoundColor().subscribe(data => this.backroundColor = data);
  	provider.getIllustrations().subscribe(data => this.illustrations = data);
  
  }

  ngOnInit() {
  	
  }

}


