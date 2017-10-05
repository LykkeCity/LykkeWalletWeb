import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Http, Response, Headers, RequestOptions , URLSearchParams} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

export interface UrlParams {
  param: string;
  value: string;
}
export abstract class CrudService{

  token: string;
  requestOptions: RequestOptions;

  constructor(private http, private notificationsService) {
    this.setHeaders();
  }

  get(url, queryParams?) {
    if (queryParams) {
        this.setQueryParams(queryParams);
    }
    return this.http.get(environment.apiUrl + url, this.requestOptions)
      .map(response => response.json().Result)
      .catch(this.handleError.bind(this));
  }

  put(url, data) {
    return this.http.put(environment.apiUrl + url, data, this.requestOptions)
      .map(response => response.json().Result)
      .catch(this.handleError.bind(this));
  }

  post(url, data) {
    return this.http.post(environment.apiUrl + url, data, this.requestOptions)
      .map((response) => {
        this.notificationsService.success('Success', 'Action completed.');
        return response.json().Result;
        })
      .catch(this.handleError.bind(this));
  }

  delete(url, data) {
    return this.http.delete(environment.apiUrl + url, data, this.requestOptions)
      .map(response => response.json().Result)
      .catch(this.handleError.bind(this));
  }

  private setHeaders() {
    this.requestOptions = new RequestOptions();
    this.requestOptions.headers = new Headers();
    this.requestOptions.headers.append('Content-Type', 'application/json');
    const token = localStorage.getItem('token');

    if(token) {
      this.requestOptions.headers.append('Authorization', 'Bearer ' + localStorage.getItem('token'));
    }

    return this.requestOptions;
  }

  private setQueryParams(queryParams) {
    this.requestOptions.params = new URLSearchParams();
    this.requestOptions.params = queryParams;
  }

  handleError (errorResponse: Response | any) {
    this.notificationsService.error('Error', 'Error accoured.')
    console.error('ApiService::handleError', errorResponse);
    return Observable.throw('Error');
  }
}
