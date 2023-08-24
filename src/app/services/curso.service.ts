import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';

import { Observable } from 'rxjs';
import { Curso } from '../models/curso';
import { Global } from './global';

@Injectable()
export class CursoService {
	public url:string;

	constructor(
		private _http:HttpClient
		){
		this.url = Global.url;
	}
	getCursos(): Observable<any>{
		let headers = new HttpHeaders().set('Content-type','application/json');
		return this._http.get(this.url+'cus', {headers: headers});
	}
}