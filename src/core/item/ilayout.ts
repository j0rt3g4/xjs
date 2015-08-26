/// <reference path="../../../defs/es6-promise.d.ts" />

import {Item as iItem} from '../../internal/item';
import {Rectangle} from '../../util/rectangle';


export interface IItemLayout {
  isKeepAspectRatio(): Promise<boolean>;
  setKeepAspectRatio(value: boolean);
  isPositionLocked(): Promise<boolean>;
  setPositionLocked(value: boolean);
  isEnhancedResizeEnabled(): Promise<boolean>;
  setEnhancedResizeEnabled(value: boolean);
  getPosition(): Promise<Rectangle>;
  setPosition(value: Rectangle);
}

export class ItemLayout implements IItemLayout {
  private _id: string;
  private position: Rectangle;

  isKeepAspectRatio(): Promise<boolean> {
    return new Promise(resolve => {
      let slot = iItem.attach(this._id);
      iItem.get('prop:keep_ar', slot).then(val => {
        resolve(val === '1');
      });
    });
  }

  setKeepAspectRatio(value: boolean) {
    let slot = iItem.attach(this._id);
    iItem.set('prop:keep_ar', value ? '1' : '0', slot);
  }

  isPositionLocked(): Promise<boolean> {
    return new Promise(resolve => {
      let slot = iItem.attach(this._id);
      iItem.get('prop:lockmove', slot).then(val => {
        resolve(val === '1');
      });
    });
  }

  setPositionLocked(value: boolean) {
    let slot = iItem.attach(this._id);
    iItem.set('prop:lockmove', value ? '1' : '0', slot);
  }

  isEnhancedResizeEnabled(): Promise<boolean> {
    return new Promise(resolve => {
      let slot = iItem.attach(this._id);
      iItem.get('prop:mipmaps', slot).then(val => {
        resolve(val === '1');
      });
    });
  }

  setEnhancedResizeEnabled(value: boolean) {
    let slot = iItem.attach(this._id);
    iItem.set('prop:mipmaps', value ? '1' : '0', slot);
  }

  getPosition():Promise<Rectangle> {
    return new Promise(resolve => {
      let slot = iItem.attach(this._id);
      iItem.get('prop:pos', slot).then(val => {
        var [left, top, right, bottom] = decodeURIComponent(val).split(',');
        this.position = Rectangle.fromCoordinates(Number(top), Number(left),
          Number(right), Number(bottom));
        resolve(this.position);
      });
    });
  }

  setPosition(value: Rectangle) {
    let slot = iItem.attach(this._id);
    this.position = value;
    iItem.set('prop:pos', value.toCoordinateString(), slot);
  }
}
