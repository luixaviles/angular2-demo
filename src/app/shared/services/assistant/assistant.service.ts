import {Injectable} from '@angular/core';
import {Http, Response, URLSearchParams} from '@angular/http';

import {Observable} from 'rxjs/Observable'
import {Assistants} from '../../model/assistants.model'

@Injectable()
export class AssistantService {

  constructor(private http:Http) {
  }

  private USER_URL = 'http://api.randomuser.me';

  getAssistants(number:string):Observable<Assistants> {
    let params:URLSearchParams = new URLSearchParams();
    params.set('results', number);

    return this.http.get(this.USER_URL, {
      search: params
    })
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res:Response) {
    let body = res.json();
    return body || {};
  }

  private handleError(error:any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
