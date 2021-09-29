import { Injectable } from '@angular/core';
import { GlobalStoreModel, INIT_GLOBAL_STORE } from './global-store.interface';

import * as AppActions from '../actions/actions';

import { BehaviorSubject, Subscription } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class GlobalStoreService {
  protected subject: BehaviorSubject<GlobalStoreModel>;
  protected model: GlobalStoreModel;

  constructor() {
    this.model = JSON.parse(JSON.stringify(INIT_GLOBAL_STORE));
    this.subject = new BehaviorSubject<GlobalStoreModel>(this.model);
  }

  public subscribe(callback: (model: GlobalStoreModel) => void): Subscription {
    return this.subject.subscribe(callback);
  }

  public dispatchAction(act: string, payload: any | null): void {
    this.model.action = act;
    this.__updateHistoric();
    switch (act) {
      case AppActions.NONE:
        console.log('no action');
        break;
      case AppActions.INIT:
        console.log('App init', this.model);
        break;
      case AppActions.INIT_ERROR:
        console.log('App init error');
        break;
    }
  }

  private __updateHistoric(): void {
    const { historic, ...model } = this.model;
    this.model.historic = [...this.model.historic, model];
  }
}
