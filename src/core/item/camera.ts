/// <reference path="../../../defs/es6-promise.d.ts" />

import {applyMixins} from '../../internal/util/mixin';
import {Item as iItem} from '../../internal/item';
import {App as iApp} from '../../internal/app';
import {ItemLayout, IItemLayout} from './ilayout';
import {ItemColor, IItemColor} from './icolor';
import {ItemChroma, IItemChroma, KeyingType, ChromaPrimaryColors,
  ChromaAntiAliasLevel} from './ichroma';
import {ItemTransition, IItemTransition} from './itransition';
import {Item} from './item';
import {Scene} from '../scene';
import {Transition} from '../transition';
import {Rectangle} from '../../util/rectangle';
import {Color} from '../../util/color';

/**
 * The CameraItem Class provides methods specifically used for camera items and
 * also methods that are shared between Item Classes. The
 * {@link #core/Scene Scene Class'} getItems would automatically return a
 * CameraItem object if there's a camera item on the specified scene.
 *
 * ### Basic Usage
 *
 * ```javascript
 * var XJS = require('xjs');
 *
 * XJS.Scene.getActiveScene().then(function(scene) {
 *   scene.getItems().then(function(items) {
 *     for (var i in items) {
 *       if (items[i] instanceof XJS.CameraItem) {
 *         // Manipulate your camera item here
 *         items[i].getDeviceId().then(function(id) {
 *           // Do something with the id
 *         });
 *       }
 *     }
 *   });
 * });
 * ```
 */
export class CameraItem extends Item implements IItemLayout, IItemColor, IItemChroma, IItemTransition {
  /**
   * return: Promise<string>
   */
  getDeviceId(): Promise<string> {
    return new Promise(resolve => {
      let slot = iItem.attach(this._id);

      iItem.get('prop:item', slot).then(val => {
        resolve(val);
      });
    });
  }

  // ItemLayout

  /**
   * return: Promise<boolean>
   *
   * Check if Aspect Ratio is set to ON or OFF
   */
  isKeepAspectRatio:        () => Promise<boolean>;

  /**
   * return: Promise<boolean>
   *
   * Check if Position Locked is set to ON or OFF
   */
  isPositionLocked:         () => Promise<boolean>;

  /**
   * return: Promise<boolean>
   *
   * Check if Enhance Resize is Enabled or Disabled
   */
  isEnhancedResizeEnabled:   () => Promise<boolean>;

  /**
   * return: Promise<Rectangle>
   *
   * Get the position of the item
   */
  getPosition:              () => Promise<Rectangle>;

  /**
   * param: value<boolean>
   *
   * Set Aspect Ratio to ON or OFF
   */
  setKeepAspectRatio:       (value: boolean) => void;

  /**
   * param: value<boolean>
   *
   * Set Position Lock to ON or OFF
   */
  setPositionLocked:        (value: boolean) => void;

  /**
   * param: value<boolean>
   *
   * Set Enhance Resize to ON or OFF
   */
  setEnhancedResizeEnabled:  (value: boolean) => void;

  /**
   * param: value<Rectangle>
   *
   * Set Item position
   */
  setPosition:              (value: Rectangle) => void;

  // ItemColor

  /**
   * return: Promise<number>
   *
   * Get Item Transparency value
   */
  getTransparency: () => Promise<number>;

  /**
   * return: Promise<number>
   *
   * Get Item Brightness value
   */
  getBrightness:   () => Promise<number>;

  /**
   * return: Promise<number>
   *
   * Get Item Contrast value
   */
  getContrast:     () => Promise<number>;

  /**
   * return: Promise<number>
   *
   * Get Item Hue value
   */
  getHue:          () => Promise<number>;

  /**
   * return: Promise<number>
   *
   * Get Item Saturation value
   */
  getSaturation:   () => Promise<number>;

  /**
   * return: Promise<Color>
   *
   * Get Border Color
   */
  getBorderColor:  () => Promise<Color>;

  /**
   * param: value<number>
   *
   * Set Item Transparency
   */
  setTransparency: (value: number) => void;

  /**
   * param: value<number>
   *
   * Set Item Brightness
   */
  setBrightness:   (value: number) => void;

  /**
   * param: value<number>
   *
   * Set Item Contrast
   */
  setContrast:     (value: number) => void;

  /**
   * param: value<number>
   *
   * Set Item Hue
   */
  setHue:          (value: number) => void;

  /**
   * param: value<number>
   *
   * Set Item Saturation
   */
  setSaturation:   (value: number) => void;

  /**
   * param: value<Color>
   *
   * Set Border Color
   */
  setBorderColor:  (value: Color) => void;

  // special color options pinning

  /**
   * param: value<boolean>
   *
   * Set this to true to share color settings across all instances of this
   * camera device on the stage.
   */
  setColorOptionsPinned(value: boolean) {
    let slot = iItem.attach(this._id);

    iItem.set('prop:cc_pin', value ? '1' : '0', slot);
  }

  /**
   * return: Promise<boolean>
   *
   * Checks whether color settings are shared across all instances of
   * this camera device on the stage.
   */
  getColorOptionsPinned(): Promise<boolean> {
    return new Promise(resolve => {
      let slot = iItem.attach(this._id);

      iItem.get('prop:cc_pin', slot).then(val => {
        resolve(val === '1' ? true : false);
      });
    });
  }

  // ItemChroma
  /**
   * return: Promise<boolean>
   */
  isChromaEnabled: () => Promise<boolean>;
  /**
   * param: value<boolean>
   */
  setChromaEnabled: (value: boolean) => void;
  /**
   * return: Promise<KeyingType>
   */
  getKeyingType: () => Promise<KeyingType>;
  /**
   * param: value<KeyingType>
   */
  setKeyingType: (value: KeyingType) => void;

  // BOTH CHROMA LEGACY AND CHROMA RGB
  /**
   * return: Promise<ChromaAntiAliasLevel>
   */
  getChromaAntiAliasLevel: () => Promise<ChromaAntiAliasLevel>;
  /**
   * param: value<ChromaAntiAliasLevel>
   */
  setChromaAntiAliasLevel: (value: ChromaAntiAliasLevel) => void;

  // CHROMA LEGACY MODE
  /**
   * return: Promise<number>
   */
  getChromaLegacyBrightness: () => Promise<number>;
  /**
   * param: value<number>
   */
  setChromaLegacyBrightness: (value: number) => void;
  /**
   * return: Promise<number>
   */
  getChromaLegacySaturation: () => Promise<number>;
  /**
   * param: value<number>
   */
  setChromaLegacySaturation: (value: number) => void;
  /**
   * return: Promise<number>
   */
  getChromaLegacyHue: () => Promise<number>;
  /**
   * param: value<number>
   */
  setChromaLegacyHue: (value: number) => void;
  /**
   * return: Promise<number>
   */
  getChromaLegacyThreshold: () => Promise<number>;
  /**
   * param: value<number>
   */
  setChromaLegacyThreshold: (value: number) => void;
  /**
   * return: Promise<number>
   */
  getChromaLegacyAlphaSmoothing: () => Promise<number>;
  /**
   * param: value<number>
   */
  setChromaLegacyAlphaSmoothing: (value: number) => void;

  // CHROMA KEY RGB MODE
  /**
   * return: Promise<ChromaPrimaryColors>
   */
  getChromaRGBKeyPrimaryColor: () => Promise<ChromaPrimaryColors>;
  /**
   * param: value<ChromaPrimaryColors>
   */
  setChromaRGBKeyPrimaryColor: (value: ChromaPrimaryColors) => void;
  /**
   * return: Promise<number>
   */
  getChromaRGBKeyThreshold: () => Promise<number>;
  /**
   * param: value<number>
   */
  setChromaRGBKeyThreshold: (value: number) => void;
  /**
   * return: Promise<number>
   */
  getChromaRGBKeyExposure: () => Promise<number>;
  /**
   * param: value<number>
   */
  setChromaRGBKeyExposure: (value: number) => void;

  // COLOR KEY MODE
  /**
   * return: Promise<number>
   */
  getChromaColorKeyThreshold: () => Promise<number>;
  /**
   * param: value<number>
   */
  setChromaColorKeyThreshold: (value: number) => void;
  /**
   * return: Promise<number>
   */
  getChromaColorKeyExposure: () => Promise<number>;
  /**
   * param: value<number>
   */
  setChromaColorKeyExposure: (value: number) => void;
  /**
   * return: Promise<Color>
   */
  getChromaColorKeyColor: () => Promise<Color>;
  /**
   * param: value<Color>
   */
  setChromaColorKeyColor: (value: Color) => void;

  // special chroma options pinning

  /**
   * param: value<boolean>
   *
   * Set this to true to share chroma keying settings across all instances of
   * this camera device on the stage.
   */
  setKeyingOptionsPinned(value: boolean) {
    let slot = iItem.attach(this._id);

    iItem.set('prop:key_pin', value ? '1' : '0', slot);
  }

  /**
   * return: value<boolean>
   *
   * Checks whether chroma keying settings are shared across all instances of
   * this camera device on the stage.
   */
  getKeyingOptionsPinned(): Promise<boolean> {
    return new Promise(resolve => {
      let slot = iItem.attach(this._id);

      iItem.get('prop:key_pin', slot).then(val => {
        resolve(val === '1' ? true : false);
      });
    });
  }

  // ItemTransition

  /**
   * return: Promise<boolean>
   *
   * Check if item is visible on stage
   */
  isVisible:         () => Promise<boolean>;

  /**
   * param: value<boolean>
   *
   * Set item to visible or hidden
   */
  setVisible:        (value: boolean) => void;

  /**
   * return: Promise<boolean>
   *
   * Get item's transition type for when visibility is toggled
   */
  getTransition:     () => Promise<Transition>;

  /**
   * param: value<Transition>
   *
   * Set item's transition type for when visibility is toggled
   */
  setTransition:     (value: Transition) => void;

  /**
   * return: Promise<number>
   *
   * Get item's transition time in milliseconds
   */
  getTransitionTime: () => Promise<number>;

  /**
   * param: value<number>
   *
   * Set item's transition time in milliseconds
   */
  setTransitionTime: (value: number) => void;
}

applyMixins(CameraItem, [ItemLayout, ItemColor, ItemChroma, ItemTransition]);