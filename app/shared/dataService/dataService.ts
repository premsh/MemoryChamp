import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { IMAGENAMES } from './mockImageName';

@Injectable()
export class DataService {


    private jsonUrl: string = './app/shared/dataService/imageName.json';

    constructor(private _http: Http) {

    }

    getImageNamesThroughJSONPromise(): Promise<any> {
        return this._http.get(this.jsonUrl)
            .toPromise()
            .then((response: Response) => {
                console.log('json result from response', response.json());
                return response.json();
            });
    }

    getImageNamesThroughJSONObservable() : Observable<any>  {
        return this._http.get(this.jsonUrl)
            .map(this.processData)
            .catch(this.handleError);
    }

    private processData(response: Response) {
        let result = response.json();
        return result || {};
    }

    private handleError(error: Response | any) {
        console.log(error);
        return Observable.throw(error.json().error || 'server error');
    }

    getImageNamesThroughMockData(): Promise<string[]> {
        return Promise.resolve(IMAGENAMES);
    }
}