import { Injectable }     from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { Observable }     from 'rxjs/Observable';
import                         'rxjs/add/observable/throw';
import                         'rxjs/add/operator/catch';
import                         'rxjs/add/operator/toPromise';
import                         'rxjs/add/operator/filter';

import { User }           from './user';

@Injectable()
export class UserService {
    constructor(private http: Http) { }

    private usersUrl = 'http://localhost:4300/user';

    isLoggedIn() {
        return localStorage.getItem('token') !== null;
    }

    logout() {
        localStorage.clear();
    }

    save(user: User): Promise<User>  {
        if (user._id) {
            return this.put(user);
        }

        return this.post(user);
    }

    login(user: User) {
        let headers = new Headers({
          'Content-Type': 'application/json'});

        let url = `${this.usersUrl}/login`;

        return this.http
                   .post(url, JSON.stringify(user), {headers: headers})
                   .toPromise()
                   .then(res => res.json())
                   .catch(this.handleError);
    }

    private post(user: User): Promise<User> {
        let headers = new Headers({
          'Content-Type': 'application/json'});

        return this.http
                   .post(this.usersUrl, JSON.stringify(user), {headers: headers})
                   .toPromise()
                   .then(res => res.json().data)
                   .catch(this.handleError);
    }

    private put(user: User) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let url = `${this.usersUrl}/${user._id}`;

        return this.http
                   .patch(url, JSON.stringify(user), {headers: headers})
                   .toPromise()
                   .then(() => user)
                   .catch(this.handleError);
    }

    getUserById(id: number): Observable<User> {
      return this.http.get(this.usersUrl)
                      .map(this.extractData)
                      .map(dataArray => dataArray.filter(d => d._id === id)[0])
                      .catch(this.handleError);
    }

    private extractData(res: Response) {
      let body = res.json();
      return body.data || { };
    }

    private handleError (error: any) {
      let errMsg = (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
      console.error(errMsg); // log to console instead
      return Observable.throw(errMsg);
    }

}
