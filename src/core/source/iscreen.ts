/// <reference path="../../../defs/es6-promise.d.ts" />

import {Item as iItem} from '../../internal/item';
import {XML} from '../../internal/util/xml';
import {JSON as JXON} from '../../internal/util/json';
import {Rectangle} from '../../util/rectangle';
import {iSource, ISource} from './isource';

export interface ISourceScreen {
  /**
   * return: Promise<boolean>
   *
   * Checks if the Screen Capture Item captures a window based on
   * the window's title.
   */
  isStickToTitle(): Promise<boolean>

  /**
   * param: Promise<boolean>
   * ```
   * return: Promise<ISourceScreen>
   * ```
   *
   * Set the Screen Capture to capture the window based on the window title.
   * Useful when capturing programs with multiple tabs, for you to only
   * capture a particular tab.
   */
  setStickToTitle(value: boolean): Promise<ISourceScreen>

  /**
   * return Promise<boolean>
   *
   * Checks if the Screen Capture layered window is selected.
   */
  getCaptureLayered(): Promise<boolean>

  /**
   * param: (value: boolean)
   * ```
   * return Promise<ISourceScreen>
   * ```
   *
   * Sets the Screen Capture Layered window
   */
  setCaptureLayered(value: boolean): Promise<ISourceScreen>

  /**
   * return Promise<boolean>
   *
   * Checks if the Exclusive Window capture is selected.
   */
  getOptimizedCapture(): Promise<boolean>

  /**
   * param: (value: boolean)
   * ```
   * return Promise<ISourceScreen>
   * ```
   *
   * Sets the Exclusive Window capture.
   */
  setOptimizedCapture(value: boolean): Promise<ISourceScreen>

  /**
   * return Promise<boolean>
   *
   * Checks if the Show mouse clicks is selected.
   *
   */
  getShowMouseClicks(): Promise<boolean>


  /**
   * param: (value: boolean)
   * ```
   * return Promise<ISourceScreen>
   * ```
   *
   * Sets the Show mouse clicks.
   */
  setShowMouseClicks(value: boolean): Promise<ISourceScreen>

  /**
   * return Promise<boolean>
   *
   * Checks if the Show mouse is selected.
   *
   */
  getShowMouse(): Promise<boolean>

  /**
   * param: (value: boolean)
   * ```
   * return Promise<ISourceScreen>
   * ```
   *
   * Sets the Show Mouse.
   */
  setShowMouse(value: boolean): Promise<ISourceScreen>

  /**
   * return: Promise<Rectangle>
   *
   * Gets the Capture Area of the Screen Capture Item. Returns a Rectangle
   * object.
   *
   * See also: {@link #util/Rectangle Util/Rectangle}
   */
   getCaptureArea(): Promise<Rectangle>

  /**
   * param: Promise<Rectangle>
   * ```
   * return: Promise<ISourceScreen>
   * ```
   *
   * Sets the Window Capture Area of the Screen Capture Item.
   *
   * *Chainable.*
   *
   * See also: {@link #util/Rectangle Util/Rectangle}
   */
  setCaptureArea(dimension: Rectangle): Promise<ISourceScreen>

  /**
   * return: Promise<boolean>
   *
   * Checks if the Screen Capture Item only captures the
   * Client area (does not capture the title bar, menu bar, window border, etc.)
   */
  isClientArea(): Promise<boolean>

  /**
   * param: Promise<boolean>
   * ```
   * return: Promise<ISourceScreen>
   * ```
   *
   * Set the Screen Capture to capture the Client area only or include
   * the titlebar, menu bar, window border, etc.
   */
  setClientArea(value: boolean): Promise<ISourceScreen>
}

export class iSourceScreen implements ISourceScreen {
  private _id: string;
  private _value: any;

  /**
   * return: Promise<boolean>
   *
   * Checks if the Screen Capture Item captures a window based on
   * the window's title.
   */
  isStickToTitle(): Promise<boolean> {
    return new Promise(resolve => {
      iItem.get('prop:ScrCapTrackWindowTitle', this._id).then(val => {
        resolve(val === '0');
      });
    });
  }

  /**
   * param: Promise<boolean>
   * ```
   * return: Promise<iSourceScreen>
   * ```
   *
   * Set the Screen Capture to capture the window based on the window title.
   * Useful when capturing programs with multiple tabs, for you to only
   * capture a particular tab.
   */
  setStickToTitle(value: boolean): Promise<iSourceScreen> {
    return new Promise(resolve => {
      iItem.set('prop:ScrCapTrackWindowTitle', value ? '0' : '1', this._id)
        .then(() => {
          resolve(this);
        });
    });
  }

  /**
   * return Promise<boolean>
   *
   * Checks if the Screen Capture layered window is selected.
   */
  getCaptureLayered(): Promise<boolean> {
    return new Promise(resolve => {
      iItem.get('prop:ScrCapLayered', this._id).then(val => {
        resolve(val === '1');
      });
    });
  }

  /**
   * param: (value: boolean)
   * ```
   * return Promise<iSourceScreen>
   * ```
   *
   * Sets the Screen Capture Layered window
   */
  setCaptureLayered(value: boolean): Promise<iSourceScreen> {
    return new Promise(resolve => {
      iItem.set('prop:ScrCapLayered', value ? '1' : '0', this._id).then(val => {
        resolve(this);
      });
    });
  }

  /**
   * return Promise<boolean>
   *
   * Checks if the Exclusive Window capture is selected.
   */
  getOptimizedCapture(): Promise<boolean> {
    return new Promise(resolve => {
      iItem.get('prop:ScrCapOptCapture1', this._id).then(val => {
        resolve(val === '1');
      });
    });
  }

  /**
   * param: (value: boolean)
   * ```
   * return Promise<iSourceScreen>
   * ```
   *
   * Sets the Exclusive Window capture.
   */
  setOptimizedCapture(value: boolean): Promise<iSourceScreen> {
    return new Promise(resolve => {
      iItem.set('prop:ScrCapOptCapture1', value ? '1' : '0', this._id).then(val => {
        resolve(this);
      });
    });
  }


  /**
   * return Promise<boolean>
   *
   * Checks if the Show mouse clicks is selected.
   *
   */
  getShowMouseClicks(): Promise<boolean> {
    return new Promise(resolve => {
    iItem.get('prop:ScrCapShowClicks', this._id).then(val => {
        resolve(val === '1');
      });
    });
  }

  /**
   * param: (value: boolean)
   * ```
   * return Promise<iSourceScreen>
   * ```
   *
   * Sets the Show mouse clicks.
   */
  setShowMouseClicks(value: boolean): Promise<iSourceScreen> {
    return new Promise(resolve => {
    iItem.set('prop:ScrCapShowClicks', value ? '1' : '0', this._id).then(val => {
        resolve(this)
      });
    });
  }

  /**
   * return Promise<boolean>
   *
   * Checks if the Show mouse is selected.
   *
   */
  getShowMouse(): Promise<boolean> {
    return new Promise(resolve => {
      iItem.get('prop:ScrCapShowMouse', this._id).then(val => {
        resolve(val === '1');
      });
    });
  }

  /**
   * param: (value: boolean)
   * ```
   * return Promise<iSourceScreen>
   * ```
   *
   * Sets the Show Mouse.
   */
  setShowMouse(value: boolean): Promise<iSourceScreen> {
    return new Promise(resolve => {
      iItem.set('prop:ScrCapShowMouse', value ? '1' : '0', this._id).then(val => {
        if (val === true) {
          iItem.set('prop:ScrCapShowClicks', value ? '1' : '0', this._id);
        }
        resolve(this);
      });
    });
  }

  /**
   * return: Promise<Rectangle>
   *
   * Gets the Capture Area of the Screen Capture Item. Returns a Rectangle
   * object.
   *
   * See also: {@link #util/Rectangle Util/Rectangle}
   */
   getCaptureArea(): Promise<Rectangle> {
    return new Promise(resolve => {
      this.getValue().then(val => {
        if (!(val instanceof XML)) {
          resolve(Rectangle.fromCoordinates(0, 0, 0, 0));
        } else {
          let _value: JXON = JXON.parse(val);
          resolve(Rectangle.fromCoordinates(
            Number(_value['left']),
            Number(_value['top']),
            Number(_value['width']) + Number(_value['left']),
            Number(_value['height']) + Number(_value['top'])
          ));
        }
      });
    });
  }

  /**
   * param: Promise<Rectangle>
   * ```
   * return: Promise<iSourceScreen>
   * ```
   *
   * Sets the Window Capture Area of the Screen Capture Item.
   *
   * *Chainable.*
   *
   * See also: {@link #util/Rectangle Util/Rectangle}
   */
  setCaptureArea(dimension: Rectangle): Promise<iSourceScreen> {
    return new Promise(resolve => {
      this.getValue().then(val => {
        return new Promise(iResolve => {
          iItem.get('screenresolution', this._id).then(res => {
            let _res = res.split(',');
            iResolve({
              value : val,
              res : Rectangle.fromCoordinates(
                Number(_res[0]),
                Number(_res[1]),
                Number(_res[2]),
                Number(_res[3])
              )
            });
          });
        });
      }).then((obj: { value: any, res: Rectangle }) => {
        let _config = new JXON();

        if (!(obj.value instanceof XML)) {
          _config['tag'] = 'screen';
          _config['module'] = '';
          _config['window'] = '';
          _config['hwnd'] = '0';
          _config['wclient'] = '0';
          _config['left'] = '0';
          _config['top'] = '0';
          _config['width'] = '0';
          _config['height'] = '0';
        } else {
          _config = JXON.parse(obj.value);
        }

        _config['left'] = dimension.getLeft() >= obj.res.getLeft() ?
          dimension.getLeft() : Number(_config['left']) >= obj.res.getLeft() ?
            _config['left'] : obj.res.getLeft();
        _config['top'] = dimension.getTop() >= obj.res.getTop() ?
          dimension.getTop() : Number(_config['top']) >= obj.res.getTop() ?
            _config['top'] : obj.res.getTop();
        _config['width'] = dimension.getWidth() <= obj.res.getWidth() ?
          dimension.getWidth() : Number(_config['width']) <=
            obj.res.getWidth() ? _config['width'] : obj.res.getWidth();
        _config['height'] = dimension.getHeight() <= obj.res.getHeight() ?
          dimension.getHeight() : Number(_config['height']) <=
            obj.res.getHeight() ? _config['height'] : obj.res.getHeight();

        this.setValue(XML.parseJSON(_config)).then(() => {
          resolve(this);
        });
      });
    });
  }

  /**
   * return: Promise<boolean>
   *
   * Checks if the Screen Capture Item only captures the
   * Client area (does not capture the title bar, menu bar, window border, etc.)
   */
  isClientArea(): Promise<boolean> {
    return new Promise(resolve => {
      this.getValue().then(val => {
        if (!(val instanceof XML)) {
          resolve(false);
        } else {
          let _value: JXON = JXON.parse(val);
          resolve(_value['wclient'] === '1');
        }
      });
    });
  }

  /**
   * param: Promise<boolean>
   * ```
   * return: Promise<iSourceScreen>
   * ```
   *
   * Set the Screen Capture to capture the Client area only or include
   * the titlebar, menu bar, window border, etc.
   */
  setClientArea(value: boolean): Promise<iSourceScreen> {
    return new Promise(resolve => {
      this.getValue().then(val => {
        let _config = new JXON();

        if (!(val instanceof XML)) {
          _config['tag'] = 'screen';
          _config['module'] = '';
          _config['window'] = '';
          _config['hwnd'] = '0';
          _config['wclient'] = '0';
          _config['left'] = '0';
          _config['top'] = '0';
          _config['width'] = '0';
          _config['height'] = '0';
        } else {
          _config = JXON.parse(val);
        }

        _config['wclient'] = (value ? '1' : '0');

        this.setValue(XML.parseJSON(_config)).then(() => {
          resolve(this);
        })
      });
    });
  }

  getValue: () => Promise<string | XML>

  setValue: (value: string | XML) => Promise<iSourceScreen>

}