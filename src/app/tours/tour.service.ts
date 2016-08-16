import { Injectable }     from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { Observable }     from 'rxjs/Observable';
import                         'rxjs/add/observable/throw';
import                         'rxjs/add/operator/catch';
import                         'rxjs/add/operator/toPromise';


import { Tour }           from './tour';


@Injectable()
export class TourService {

  constructor(private http: Http) { }

  // private toursUrl = 'app/tours/tours.json';
  private toursUrl = 'app/tours';  // URL to web api


  getTourById(id: number): Observable<Tour> {
    return this.http.get(this.toursUrl)
                    .map(this.extractData)
                    .map(dataArray => dataArray.filter(d => d.id === id)[0])
                    .catch(this.handleError);
  }

  private post(tour: Tour): Promise<Tour> {
    let headers = new Headers({
      'Content-Type': 'application/json'});

    return this.http
               .post(this.toursUrl, JSON.stringify(tour), {headers: headers})
               .toPromise()
               .then(res => res.json().data)
               .catch(this.handleError);
  }

  // Update existing Tour
  private put(tour: Tour) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let url = `${this.toursUrl}/${tour.id}`;

    return this.http
               .put(url, JSON.stringify(tour), {headers: headers})
               .toPromise()
               .then(() => tour)
               .catch(this.handleError);
  }

  save(tour: Tour): Promise<Tour>  {
    if (tour.id) {
      return this.put(tour);
    }
    return this.post(tour);
  }

  getToursByText(term:string): Observable<Tour[]> {
    return this.http.get(this.toursUrl)
                    .map(this.extractData)
                    .map(dataArray => {
                      return dataArray.filter(d => {
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
