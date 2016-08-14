import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable }     from 'rxjs/Observable';
import                         'rxjs/add/observable/throw';
import                         'rxjs/add/operator/catch';

import { Tour }           from './tour';


@Injectable()
export class TourService {

  constructor(private http: Http) { }

  private toursUrl = 'app/tours/tours.json';

  getToursByText(term:string): Observable<Tour[]> {
    return this.http.get(this.toursUrl)
                    .map(this.extractData)
                    .map(dataArray => {
                      return dataArray.filter(d => {
                        console.info(d.title.toLowerCase().indexOf(term.toLowerCase()));
                        console.info(d.description.toLowerCase().indexOf(term.toLowerCase()));
                        return d.title.toLowerCase().indexOf(term.toLowerCase()) > -1 || d.description.toLowerCase().indexOf(term.toLowerCase()) > -1
                      });
                    })
                    .catch(this.handleError);
  }

  // filterTours(dataArray) {
  //   return dataArray.filter(d => {
  //     return d.title.toLowerCase().indexOf(term.toLowerCase()) > -1 || d.description.toLowerCase().indexOf(term.toLowerCase()) > -1
  //   });
  // }

  getToursByCollection(collection: string): Observable<Tour[]> {
    return this.http.get(this.toursUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  getToursByQuery(query: Object): Observable<Tour[]> {
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
