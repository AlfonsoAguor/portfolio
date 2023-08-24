import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';

import { Observable } from 'rxjs';
import { Experiencia } from '../models/experiencia';
import { Global } from './global';

@Injectable()
export class ExperienciaService {
	public url:string;

	constructor(
		private _http:HttpClient
		){
		this.url = Global.url;
	}

	getExes(): Observable<any>{
		let headers = new HttpHeaders().set('Content-type','application/json');
		return this._http.get(this.url+'exes', {headers: headers});
	}

}