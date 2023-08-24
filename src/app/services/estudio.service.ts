import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';

import { Observable } from 'rxjs';
import { Estudio } from '../models/estudios';
import { Global } from './global';

@Injectable()
export class EstudioService {
	public url:string;

	constructor(
		private _http:HttpClient
		){
		this.url = Global.url;
	}

	getEses(): Observable<any>{
		let headers = new HttpHeaders().set('Content-type','application/json');
		return this._http.get(this.url+'eses', {headers: headers});
	}

}