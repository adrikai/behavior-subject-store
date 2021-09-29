import { Injectable } from '@angular/core';

import {
  BehaviorSubject,
  Subscription
} from 'rxjs';

@Injectable({providedIn: 'root'})
export class ServiceNameService {

  protected subject: BehaviorSubject<any>;

  // protected model: IAppModel;

  constructor() {
    this.subject = new BehaviorSubject<any>(false);
  }

}
