import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable }     from 'rxjs/Observable';
import                         'rxjs/add/observable/throw';
import                         'rxjs/add/operator/catch';

import { Cabinet }           from './cabinet';

@Injectable()
export class CabinetService {

  constructor(private http: Http) { }

  private cabinetsUrl = 'app/cabinet/cabinets.json';

  getCabinetById(id: number): Observable<Cabinet> {
    return this.http.get(this.cabinetsUrl)
                    .map(this.extractData)
                    .map(dataArray => dataArray.filter(d => d.id === id)[0])
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
