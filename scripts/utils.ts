/**
 * Copyright 2020 Huawei Technologies Co., Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { exec } from 'cordova';

const TAG = 'hms-ads-kit'

export function asyncExec(clazz: string, func: string, args: any[] = []): Promise<any> {
  return new Promise((resolve, reject) => {
    exec(resolve, reject, clazz, func, args);
  });
};


type Handler = (data: any) => void

declare global {
  interface Window {
    hmsEventHandlers: {
      [key: string]: Handler[]
    },
    hmsEventHandler: (eventName: string, data: any) => void,
    registerHMSEvent: (eventName: string, handler: Handler) => void,
    unregisterHMSEvent: (eventName: string, handler: Handler) => void,
    hmsSetConstants: (objName: string, constants: any) => void,
    [key: string]: any
  }
}

//ATtypes/cordova
function initHMS() {
  console.log(`${TAG} :: init called`)
  initEventHandler()
  initConstantSetter()
}

function initEventHandler() {
  if (window.hmsEventHandler != null) return

  console.log(`${TAG} :: window.hmsEventHandler`)
  window.hmsEventHandlers = {}

  window.hmsEventHandler = (eventName, data) => {
    console.log('eventReceived: ' + eventName + ' with data: ', data)
    if (window.hmsEventHandlers.hasOwnProperty(eventName)) {
      window.hmsEventHandlers[eventName].forEach((handler: Handler) => {
        handler(data)
      })
    }
  }

  window.registerHMSEvent = (eventName, handler) => {
    if (window.hmsEventHandlers.hasOwnProperty(eventName))
      window.hmsEventHandlers[eventName].push(handler)
    else
      window.hmsEventHandlers[eventName] = [handler]
  }


  // Original JS code initializes it to an empty array if handler is (false)
  window.unregisterHMSEvent = (eventName, handler) => {
    if (window.hmsEventHandlers.hasOwnProperty(eventName)) {
      const idx = window.hmsEventHandlers[eventName].indexOf(handler)
      if (idx > -1)
        window.hmsEventHandlers[eventName].splice(idx, 1)
    }
  }

}


function initConstantSetter() {
  if (window.hmsSetConstants != null) return

  console.log(`${TAG} :: window.hmsSetConstants`)
  window.hmsSetConstants = (objName: string, constants) => {
    console.log(`${TAG} :: initializing constants for`, objName, 'with', constants)

    if (window[objName] == null) {
      console.log(`${TAG} :: uninitialized object`)
      return
    }

    Object.keys(constants).forEach(key => {
      Object.defineProperty(window[objName], key, { value: constants[key] })
    })
  }
}


initHMS()

export abstract class Ads {

  id: number;
  objectName: string;
  constructor(objectName: string = 'ads') {
    this.id = null;
    this.objectName = objectName;
    console.log(`New ads object created, objType=${this.objectName}..`)
  }

  on(eventName: any, handler: () => void): void {
    const instanceEventName = `${eventName}-${this.id}`
    console.log(`${this.objectName} :: ${instanceEventName} -> event registeration started..`)
    window.unregisterHMSEvent(instanceEventName, handler);
    window.registerHMSEvent(instanceEventName, handler);
  }


  async create(options: any): Promise<Ads> {
    console.log(`${this.objectName} ads creation started..`)


    if (this.id != null)
      return this

    const result = await asyncExec('HMSAds', 'createAd', [this.objectName, options])
    this.id = result.id
    console.log(`${this.objectName} ads creation result id=${this.id}`)
    return this
  }


  protected call(funcName: string, opts: any = {}) {
    console.log(`callAdFunction :: ${funcName} -> function called by object=${this.objectName}`)
    return asyncExec('HMSAds', 'callAdFunction', [this.objectName, this.id, funcName, opts])
  }

}