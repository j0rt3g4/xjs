/// <reference path="../../defs/window.d.ts" />

import {Remote} from './remote'

export var DEBUG: boolean = false;

let _callbacks = {};
let remoteCounter = 0;
let remoteAsyncIdArr = []

/**
* Executes an external function
*/
export function exec(funcName: string, ...args: any[]) {
  let retObj = {}
  let callback: Function = null,
  ret: any = false;

  if (Remote.remoteType === 'proxy') {
      remoteCounter++;
      remoteAsyncIdArr.push(remoteCounter)
  }

  if (args.length > 0) {
    callback = args[args.length - 1];
    if (callback instanceof Function) {
      args.pop();
    } else {
      callback = null;
    }
  }

  if (DEBUG) {
    console.log([
      'internal.exec("', funcName, '") ', JSON.stringify(args)
      ].join(' '));
  }

  if (
    window.external &&
    window.external[funcName] &&
    window.external[funcName] instanceof Function
    ) {
    ret = window.external[funcName].apply(this, args);
  }

  // For Remote
  if (Remote.remoteType === 'remote') {
    let message;
    if (args.length >= 1) {
      message = [
        funcName, String(args)
      ].join(',')
    } else {
      message = funcName
    }

    remoteCounter++;

    console.log('Send this to Proxy::', message)
    remoteAsyncIdArr.push(remoteCounter)
    Remote.sendMessage(encodeURIComponent(message))
  }

  // register callback if present
  if (callback !== null) {
    if (Remote.remoteType === 'remote') {
      _callbacks[remoteCounter] = callback;
    } else {
      _callbacks[ret] = callback;
    }
  }

  // Used by proxy to return Sync calls
  if (Remote.remoteType === 'proxy' && typeof(ret) !== 'number') {
    retObj = {
      'result': ret,
      'asyncId': String(remoteAsyncIdArr[0])
    }
    remoteAsyncIdArr.shift()
    console.log('Sync,Send to Remote::', retObj)
    return Remote.sendMessage(JSON.stringify(retObj));
  }

  return ret;
}

// Only used by remote to use saved callback
export function callCallback(message) {
  let result = JSON.parse(message)

  console.log('Remote Callback got this:: ', result)

  if (_callbacks[remoteAsyncIdArr[0]] !== undefined
    && typeof(result['asyncId']) === 'number') {
    _callbacks[remoteAsyncIdArr[0]].apply(this, [result['result']]);
    remoteAsyncIdArr.shift()
  }

  return result['result'];
}

window.OnAsyncCallback = function(asyncID: number, result: string) {
  // Used by proxy to return Async calls
  if (Remote.remoteType === 'proxy') {
    let retObj = {
      'result': result,
      'asyncId': remoteAsyncIdArr[0],
    }
    remoteAsyncIdArr.shift()
    console.log('Async,Send to Remote::', retObj)
    return Remote.sendMessage(JSON.stringify(retObj));
  } else {
    let callback = _callbacks[asyncID];

    if (callback instanceof Function) {
      callback.call(this, decodeURIComponent(result));
    }
  }
}
