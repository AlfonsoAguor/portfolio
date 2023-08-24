export class Experiencia{
	constructor(
		public _id: string,
		public site:string,
		public startMonth:number,
		public startYear: number,
		public endMonth:number,
		public endYear: number,
		public details:string[]
		){}
}