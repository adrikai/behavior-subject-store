import { Component, ChangeDetectionStrategy, OnDestroy, OnInit} from '@angular/core';
import { GlobalStoreService } from './shared/global-store.service';
import { Subscription } from 'rxjs';
import { GlobalStoreModel } from './shared/global-store.interface';

import * as appActions from './actions/actions'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'behavior-store';

  public appModel: GlobalStoreModel;

  private _storeSubscription: Subscription

  constructor(private globalStoreService: GlobalStoreService) {
    this._storeSubscription = this.globalStoreService.subscribe((m: GlobalStoreModel) => this.__onModelUpdated(m))
  }

  public ngOnInit(): void {
    this.__onDataLoaded();
  }

  public ngOnDestroy(): void
  {
    this._storeSubscription.unsubscribe();
  }

  private __onDataLoaded(): void {
    this.globalStoreService.dispatchAction(appActions.INIT, null)
  }



  private __onModelUpdated(model: GlobalStoreModel ): void {
    if(model !== undefined && model != null) {
      this.appModel = model;
    }
  }
}
