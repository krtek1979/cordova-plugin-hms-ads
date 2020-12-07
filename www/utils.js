"use strict";
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ads = exports.asyncExec = void 0;
const cordova_1 = require("cordova");
const TAG = 'hms-ads-kit';
function asyncExec(clazz, func, args = []) {
    return new Promise((resolve, reject) => {
        cordova_1.exec(resolve, reject, clazz, func, args);
    });
}
exports.asyncExec = asyncExec;
;
//ATtypes/cordova
function initHMS() {
    console.log(`${TAG} :: init called`);
    initEventHandler();
    initConstantSetter();
}
function initEventHandler() {
    if (window.hmsEventHandler != null)
        return;
    console.log(`${TAG} :: window.hmsEventHandler`);
    window.hmsEventHandlers = {};
    window.hmsEventHandler = (eventName, data) => {
        console.log('eventReceived: ' + eventName + ' with data: ', data);
        if (window.hmsEventHandlers.hasOwnProperty(eventName)) {
            window.hmsEventHandlers[eventName].forEach((handler) => {
                handler(data);
            });
        }
    };
    window.registerHMSEvent = (eventName, handler) => {
        if (window.hmsEventHandlers.hasOwnProperty(eventName))
            window.hmsEventHandlers[eventName].push(handler);
        else
            window.hmsEventHandlers[eventName] = [handler];
    };
    // Original JS code initializes it to an empty array if handler is (false)
    window.unregisterHMSEvent = (eventName, handler) => {
        if (window.hmsEventHandlers.hasOwnProperty(eventName)) {
            const idx = window.hmsEventHandlers[eventName].indexOf(handler);
            if (idx > -1)
                window.hmsEventHandlers[eventName].splice(idx, 1);
        }
    };
}
function initConstantSetter() {
    if (window.hmsSetConstants != null)
        return;
    console.log(`${TAG} :: window.hmsSetConstants`);
    window.hmsSetConstants = (objName, constants) => {
        console.log(`${TAG} :: initializing constants for`, objName, 'with', constants);
        if (window[objName] == null) {
            console.log(`${TAG} :: uninitialized object`);
            return;
        }
        Object.keys(constants).forEach(key => {
            Object.defineProperty(window[objName], key, { value: constants[key] });
        });
    };
}
initHMS();
class Ads {
    constructor(objectName = 'ads') {
        this.id = null;
        this.objectName = objectName;
        console.log(`New ads object created, objType=${this.objectName}..`);
    }
    on(eventName, handler) {
        const instanceEventName = `${eventName}-${this.id}`;
        console.log(`${this.objectName} :: ${instanceEventName} -> event registeration started..`);
        window.unregisterHMSEvent(instanceEventName, handler);
        window.registerHMSEvent(instanceEventName, handler);
    }
    create(options) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(`${this.objectName} ads creation started..`);
            if (this.id != null)
                return this;
            const result = yield asyncExec('HMSAds', 'createAd', [this.objectName, options]);
            this.id = result.id;
            console.log(`${this.objectName} ads creation result id=${this.id}`);
            return this;
        });
    }
    call(funcName, opts = {}) {
        console.log(`callAdFunction :: ${funcName} -> function called by object=${this.objectName}`);
        return asyncExec('HMSAds', 'callAdFunction', [this.objectName, this.id, funcName, opts]);
    }
}
exports.Ads = Ads;
//# sourceMappingURL=utils.js.map