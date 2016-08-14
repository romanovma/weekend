import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';

import { Tour }           from '../shared/tour';
import { Observable }     from 'rxjs/Observable';
// import 'rxjs/operators/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class TourService {

  constructor(private http: Http) { }

  private toursUrl = 'app/shared/tours.json';

  getToursByCollection(): Observable<Tour[]> {
    return this.http.get(this.toursUrl)
                    .map(this.extractData)
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
