export class Competence {
	constructor(public id: number,
    			public chapterId: number,
   				public teacherText: string,
   				public studentText: string,
    			public number: number,
    			checked: boolean,
    			fromDate: Date
				){}
}
