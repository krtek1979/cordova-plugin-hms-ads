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
exports.Native = exports.NativeAlreadyDefinedError = void 0;
const utils_1 = require("./utils");
const nativeViews = new Map();
class NativeAlreadyDefinedError extends Error {
    NativeAlreadyDefinedError() {
        this.name = "NativeAlreadyDefinedError";
        this.message = "Native object with the id specified already defined";
    }
}
exports.NativeAlreadyDefinedError = NativeAlreadyDefinedError;
class Native extends utils_1.Ads {
    constructor() {
        super(Native.name.toLowerCase());
        this.props = {};
    }
    on(eventName, handler) {
        super.on(eventName, handler);
    }
    beforeCreateHook(options) {
        const elementId = options.div;
        if (nativeViews.has(elementId))
            throw new NativeAlreadyDefinedError();
        this.element = document.getElementById(elementId);
        this.props = this.refreshProps();
        console.log(`Props: ${JSON.stringify(this.props)}`);
        const mutationObserver = new MutationObserver(this.handleMutation);
        mutationObserver.observe(this.element, { attributes: true });
        nativeViews.set(elementId, this);
    }
    create(options) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.id != null)
                return this;
            this.beforeCreateHook(options);
            const result = yield utils_1.asyncExec('HMSAds', 'createAd', [this.objectName, options]);
            this.id = result.id;
            return this;
        });
    }
    refreshProps() {
        const elementRect = this.element.getBoundingClientRect();
        const elementStyle = window.getComputedStyle(this.element, null);
        this.props.x = elementRect.x;
        this.props.y = elementRect.y;
        this.props.width = elementRect.width;
        this.props.height = elementRect.height;
        this.props.paddingLeft = parseInt(elementStyle.getPropertyValue("padding-left"));
        this.props.paddingTop = parseInt(elementStyle.getPropertyValue("padding-top"));
        this.props.borderLeft = parseInt(elementStyle.getPropertyValue("border-left-width"));
        this.props.borderTop = parseInt(elementStyle.getPropertyValue("border-top-width"));
        return this.props;
    }
    handleMutation() {
        this.setProps(this.refreshProps());
    }
    // Call this function, from ionic application for scroll events
    scroll() {
        const nativeRect = this.element.getBoundingClientRect();
        if (this.props.x === nativeRect.x && this.props.y === nativeRect.y)
            return;
        return this.setProps(this.refreshProps());
    }
    loadAd(params) {
        return this.call('loadAd', params);
    }
    isLoaded() {
        return this.call('isLoaded');
    }
    isLoading() {
        return this.call('isLoading');
    }
    show() {
        return this.call('show', this.refreshProps());
    }
    destroy() {
        nativeViews.delete(this.element.id);
        return this.call('destroy');
    }
    setProps(props) {
        return this.call('setProps', props);
    }
}
exports.Native = Native;
function handleDisplacement(event) {
    for (let [objId, nativeAd] of nativeViews) {
        const nativeRect = nativeAd.element.getBoundingClientRect();
        if (nativeAd.props.x === nativeRect.x && nativeAd.props.y === nativeRect.y)
            continue;
        nativeAd.props.x = nativeRect.x;
        nativeAd.props.y = nativeRect.y;
        nativeAd.setProps(nativeAd.props);
    }
}
const mutationObserver = new MutationObserver(handleDisplacement);
mutationObserver.observe(document.body, { attributes: true, childList: true, subtree: true });
window.addEventListener('scroll', handleDisplacement);
//# sourceMappingURL=native.js.map