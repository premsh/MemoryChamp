import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { IMAGENAMES  } from './mockImageName';

@Injectable()
export class DataService {

    jsonUrl : string = './imageName.json';

    getImageName() {
        return "test";
    }

    getImageNamesThroughMockData() : Promise<string[]> {
        return Promise.resolve(IMAGENAMES);
    }
}