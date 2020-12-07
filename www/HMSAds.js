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
exports.requestConsentUpdate = exports.setDebugNeedConsent = exports.setConsentStatus = exports.setUnderAgeOfPromise = exports.getTestDeviceId = exports.addTestDeviceId = exports.setVideoVolume = exports.setVideoMuted = exports.getSDKVersion = exports.setRequestOptions = exports.verifyAdId = exports.getReferrerDetails = exports.getOaidResult = exports.disconnectFromReferrerClient = exports.init = exports.isInit = void 0;
const utils_1 = require("./utils");
var interfaces_1 = require("./interfaces");
Object.defineProperty(exports, "BannerAdSize", { enumerable: true, get: function () { return interfaces_1.BannerAdSize; } });
Object.defineProperty(exports, "MediaAspect", { enumerable: true, get: function () { return interfaces_1.MediaAspect; } });
Object.defineProperty(exports, "ChoicesPosition", { enumerable: true, get: function () { return interfaces_1.ChoicesPosition; } });
Object.defineProperty(exports, "MediaDirection", { enumerable: true, get: function () { return interfaces_1.MediaDirection; } });
Object.defineProperty(exports, "Gender", { enumerable: true, get: function () { return interfaces_1.Gender; } });
Object.defineProperty(exports, "Color", { enumerable: true, get: function () { return interfaces_1.Color; } });
Object.defineProperty(exports, "AdContentClassification", { enumerable: true, get: function () { return interfaces_1.AdContentClassification; } });
Object.defineProperty(exports, "NonPersonalizedAd", { enumerable: true, get: function () { return interfaces_1.NonPersonalizedAd; } });
Object.defineProperty(exports, "ScreenOrientation", { enumerable: true, get: function () { return interfaces_1.ScreenOrientation; } });
Object.defineProperty(exports, "NativeAdEvents", { enumerable: true, get: function () { return interfaces_1.NativeAdEvents; } });
Object.defineProperty(exports, "InterstitialAdEvents", { enumerable: true, get: function () { return interfaces_1.InterstitialAdEvents; } });
Object.defineProperty(exports, "RewardAdEvents", { enumerable: true, get: function () { return interfaces_1.RewardAdEvents; } });
Object.defineProperty(exports, "SplashAdEvents", { enumerable: true, get: function () { return interfaces_1.SplashAdEvents; } });
Object.defineProperty(exports, "BannerAdEvents", { enumerable: true, get: function () { return interfaces_1.BannerAdEvents; } });
Object.defineProperty(exports, "Anchor", { enumerable: true, get: function () { return interfaces_1.Anchor; } });
var banner_1 = require("./banner");
Object.defineProperty(exports, "Banner", { enumerable: true, get: function () { return banner_1.Banner; } });
var interstitial_1 = require("./interstitial");
Object.defineProperty(exports, "Interstitial", { enumerable: true, get: function () { return interstitial_1.Interstitial; } });
var splash_1 = require("./splash");
Object.defineProperty(exports, "Splash", { enumerable: true, get: function () { return splash_1.Splash; } });
var reward_1 = require("./reward");
Object.defineProperty(exports, "Reward", { enumerable: true, get: function () { return reward_1.Reward; } });
var native_1 = require("./native");
Object.defineProperty(exports, "Native", { enumerable: true, get: function () { return native_1.Native; } });
function isInit() {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield utils_1.asyncExec('HMSAds', 'isInit', []);
        return result.isInit;
    });
}
exports.isInit = isInit;
function init(options) {
    return utils_1.asyncExec('HMSAds', 'init', [options]);
}
exports.init = init;
function disconnectFromReferrerClient() {
    return utils_1.asyncExec('HMSAds', 'disconnectFromReferrerClient', []);
}
exports.disconnectFromReferrerClient = disconnectFromReferrerClient;
function getOaidResult() {
    return utils_1.asyncExec('HMSAds', 'getOaidResult', []);
}
exports.getOaidResult = getOaidResult;
function getReferrerDetails(isTest) {
    return utils_1.asyncExec('HMSAds', 'getReferrerDetails', [isTest]);
}
exports.getReferrerDetails = getReferrerDetails;
function verifyAdId(adId, isLimitAdTracking) {
    return utils_1.asyncExec('HMSAds', 'verifyAdId', [adId, isLimitAdTracking]);
}
exports.verifyAdId = verifyAdId;
function setRequestOptions(options) {
    return utils_1.asyncExec('HMSAds', 'setRequestOptions', [options]);
}
exports.setRequestOptions = setRequestOptions;
function getSDKVersion() {
    return utils_1.asyncExec('HMSAds', 'getSDKVersion', []);
}
exports.getSDKVersion = getSDKVersion;
function setVideoMuted(muted) {
    return utils_1.asyncExec('HMSAds', 'setVideoMuted', [muted]);
}
exports.setVideoMuted = setVideoMuted;
function setVideoVolume(volume) {
    return utils_1.asyncExec('HMSAds', 'setVideoVolume', [volume]);
}
exports.setVideoVolume = setVideoVolume;
function addTestDeviceId(id) {
    return utils_1.asyncExec('HMSAds', 'addTestDeviceId', [id]);
}
exports.addTestDeviceId = addTestDeviceId;
function getTestDeviceId() {
    return utils_1.asyncExec('HMSAds', 'getTestDeviceId', []);
}
exports.getTestDeviceId = getTestDeviceId;
function setUnderAgeOfPromise(b) {
    return utils_1.asyncExec('HMSAds', 'setUnderAgeOfPromise', [b]);
}
exports.setUnderAgeOfPromise = setUnderAgeOfPromise;
function setConsentStatus(status) {
    return utils_1.asyncExec('HMSAds', 'setConsentStatus', [status]);
}
exports.setConsentStatus = setConsentStatus;
function setDebugNeedConsent(need) {
    return utils_1.asyncExec('HMSAds', 'setDebugNeedConsent', [need]);
}
exports.setDebugNeedConsent = setDebugNeedConsent;
function requestConsentUpdate() {
    return utils_1.asyncExec('HMSAds', 'requestConsentUpdate', []);
}
exports.requestConsentUpdate = requestConsentUpdate;
//# sourceMappingURL=HMSAds.js.map