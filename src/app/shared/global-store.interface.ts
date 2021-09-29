
import * as appActions from '../actions/actions'

/**
 * Interface for main actions
 *
 * @author Adrián Rodríguez - @adrikai
 *
 *@version 1.0
 */

export interface StoreModel {
  action: string;
  first: string;
  last: string;
  role: string;
  path1Count: number;
  path3Count: number;
}

 export interface GlobalStoreModel extends StoreModel {
   historic: StoreModel[];
 }

 export const INIT_GLOBAL_STORE: GlobalStoreModel = {
   action: appActions.NONE,
   first: '',
   last: '',
   role: 'None',
   path1Count: 0,
   path3Count: 0,
   historic: []
 }
