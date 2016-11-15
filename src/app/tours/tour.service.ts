import { Injectable }     from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { Observable }     from 'rxjs/Observable';
import                         'rxjs/add/observable/throw';
import                         'rxjs/add/operator/catch';
import                         'rxjs/add/operator/toPromise';
import                         'rxjs/add/operator/filter';


import { Tour }           from './tour';
import { TourQuery }      from './tour-query';

import { Event }           from './event';
import { EventQuery }      from './event-query';


@Injectable()
export class TourService {
    constructor(private http: Http) { }

    // private toursUrl = 'app/tours/tours.json';
    private toursUrl = 'app/tours';  // URL to web api
    private eventsUrl = 'app/events';  // URL to web api

    // Tours
    getTourById(id: number): Observable<Tour> {

        let url = this.toursUrl;

        if (id) {
            url = `${this.toursUrl}/${id}`;
        }

        return this.http.get(url)
                        .map(this.extractData)
                        .catch(this.handleError);
    }

    getToursByText(term:string): Observable<Tour[]> {

      let url = `${this.toursUrl}/?title=${term}`;

      return this.http.get(url)
                      .map(this.extractData)
                      .catch(this.handleError);
    }

    getToursByQuery(query: TourQuery): Observable<Tour[]> {

        let url = `${this.toursUrl}/?title=${query.title}`;

        var filterByMovement = function(type, tour) {
            return query[type] && tour.movementType === type;
        }

        var filterByDuration = function(type, min, max, tour) {
            return query[type] && (min ? Number(tour.duration) > min : true) && (max ? Number(tour.duration) <= max : true)
        }

        return this.http.get(url)
                        .map(this.extractData)
                        .map(tours => tours.filter(tour => tour.dates <= query.dateMax && tour.dates >= query.dateMin))
                        .map(tours => tours.filter(tour => {
                            return  !query['car'] && !query['bycicle'] && !query['walk'] ||
                                    filterByMovement('car', tour) ||
                                    filterByMovement('bycicle', tour) ||
                                    filterByMovement('walk', tour)
                        }))
                        .map(tours => tours.filter(tour => {
                            return  !query['smallPeriod'] && !query['middlePeriod'] &&
                                    !query['largPeriod'] && !query['xlargePeriod'] ||
                                    filterByDuration('smallPeriod', 0, 2, tour) ||
                                    filterByDuration('middlePeriod', 2, 4, tour) ||
                                    filterByDuration('largPeriod', 4, 8, tour) ||
                                    filterByDuration('xlargePeriod', 8, 0, tour)
                        }))
                        .catch(this.handleError);
    }

    getToursByCabinet(id: number): Observable<Tour[]> {

      let url = `${this.toursUrl}/?cabinetId=${id}`;

      return this.http.get(url)
                      .map(this.extractData)
                      .catch(this.handleError);
    }

    getToursByCollection(collection: string): Observable<Tour[]> {
        return this.http.get(this.toursUrl)
                        .map(this.extractData)
                        .map(dataArray => {
                            return dataArray.filter(d => {
                                return d.collections.indexOf(collection) > -1
                            });
                        })
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

    delete(tour: Tour) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let url = `${this.toursUrl}/${tour.id}`;

        return this.http
                   .delete(url, {headers: headers})
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

    // Events
    postEvent(event: Event): Promise<Event> {
        let headers = new Headers({'Content-Type': 'application/json'});

        return this.http
                   .post(this.eventsUrl, JSON.stringify(event), {headers: headers})
                   .toPromise()
                   .then(res => res.json().data)
                   .catch(this.handleError);
    }

    getEventsByQuery(query: EventQuery): Observable<Event[]> {
        return this.http.get(this.eventsUrl)
                        .map(this.extractData)
                        .map(dataArray => dataArray.filter(event => query.userId ? Number(event.userId) === Number(query.userId) : true))
                        .map(dataArray => dataArray.filter(event => query.cabinetId ? Number(event.cabinetId) === Number(query.cabinetId) : true ))
                        .map(dataArray => dataArray.filter(event => {
                            let todayDate = new Date();
                            let todayDay = todayDate.setHours(0,0,0,0);
                            // let today = todayDate.getTime();
                            let eventDate = new Date(event.date);
                            let eventDay = eventDate.setHours(0,0,0,0);
                            switch (query.period) {
                                case 'past':
                                    return eventDay < todayDay;
                                case 'today':
                                    return eventDay === todayDay;
                                case 'future':
                                    return eventDay > todayDay;
                                case 'todayfuture':
                                    return eventDay >= todayDay;
                                default:
                                    return true;
                            }
                        }))
                        .catch(this.handleError);
    }

    // Helpers
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
