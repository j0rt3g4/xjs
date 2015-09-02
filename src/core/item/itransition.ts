/// <reference path="../../../defs/es6-promise.d.ts" />

import {Item as iItem} from '../../internal/item';
import {Transition} from '../transition';

export interface IItemTransition {
  isVisible(): Promise<boolean>;
  setVisible(value: boolean): Promise<IItemTransition>;
  getTransition(): Promise<Transition>;
  setTransition(value: Transition): Promise<IItemTransition>;
  getTransitionTime(): Promise<number>;
  setTransitionTime(value: number): Promise<IItemTransition>;
}

export class ItemTransition implements IItemTransition {
  private _id: string;

  isVisible(): Promise<boolean> {
    return new Promise(resolve => {
      let slot = iItem.attach(this._id);
      iItem.get('prop:visible', slot).then(val => {
        resolve(val === '1' ? true : false);
      });
    });
  }

  setVisible(value: boolean): Promise<ItemTransition> {
    return new Promise(resolve => {
      let slot = iItem.attach(this._id);
      iItem.set('prop:visible', value ? '1' : '0', slot).then(() => {
        resolve(this);
      });
    });
  }

  getTransition(): Promise<Transition> {
    return new Promise(resolve => {
      let slot = iItem.attach(this._id);
      iItem.get('prop:transitionid', slot).then(val => {
        if (val === '') { // NONE
          resolve(Transition.NONE);
        } else {
          resolve(Transition[val.toUpperCase()]);
        }
      });
    });
  }

  setTransition(value: Transition): Promise<ItemTransition> {
    return new Promise(resolve => {
      let slot = iItem.attach(this._id);
      iItem.set('prop:transitionid', value.toString(), slot).then(() => {
        resolve(this);
      });
    });
  }

  getTransitionTime(): Promise<number> {
    return new Promise(resolve => {
      let slot = iItem.attach(this._id);
      iItem.get('prop:transitiontime', slot).then(val => {
        resolve(Number(val));
      });
    });
  }

  setTransitionTime(value: number): Promise<ItemTransition> {
    return new Promise((resolve, reject) => {
      if (value < 0 || value > 60000) {
        reject(RangeError('Transparency may only be in the range 0 to 60000.'));
      } else {
        let slot = iItem.attach(this._id);
        iItem.set('prop:transitiontime', String(value), slot).then(() => {
          resolve(this);
        });
      }
    });

  }
}
