import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { UDObject } from './module/udobject';

@Injectable()
export class UDObjectService {
	private headers = new Headers({ 'Content-Type': 'application/json' });
	private heroesUrl = "http://localhost:8080/api/";

	constructor(private http: Http) { }

	getUDObjects(): Promise<UDObject[]> {
		return this.http.get(this.heroesUrl+"udobjects")
			.toPromise()
			.then(response => response.json().data as UDObject[])
			.catch(this.handleError);
	}


	getHero(id: number): Promise<UDObject> {
		const url = `${this.heroesUrl}/${id}`;
		return this.http.get(url)
			.toPromise()
			.then(response => response.json().data as UDObject)
			.catch(this.handleError);
	}

	delete(id: number): Promise<void> {
		const url = `${this.heroesUrl}/${id}`;
		return this.http.delete(url, { headers: this.headers })
			.toPromise()
			.then(() => null)
			.catch(this.handleError);
	}

	create(name: string): Promise<UDObject> {
		return this.http
			.post(this.heroesUrl, JSON.stringify({ name: name }), { headers: this.headers })
			.toPromise()
			.then(res => res.json().data as UDObject)
			.catch(this.handleError);
	}

	update(hero: UDObject): Promise<UDObject> {
		const url = `${this.heroesUrl}/${hero.id}`;
		return this.http
			.put(url, JSON.stringify(hero), { headers: this.headers })
			.toPromise()
			.then(() => hero)
			.catch(this.handleError);
	}

	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error); // for demo purposes only
		return Promise.reject(error.message || error);
	}

}
