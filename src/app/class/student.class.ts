import {school} from './school.class';
import {studyGroup} from './studyGroup.class'

export class student{
	constructor(public id: number,
				public forename: string,
  				public surename : string, 
  				public birth : string,
  				public formteacher : string,
  				public avatarId : number, 
  				public school : school,
  				public studyGroup : studyGroup
  				){}
}