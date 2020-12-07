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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { IonicNativePlugin, cordovaPropertyGet, cordovaPropertySet, cordova } from '@ionic-native/core';
// *************************************
// EVENTS
export var BannerAdEvents;
(function (BannerAdEvents) {
    BannerAdEvents["LOADED"] = "loaded";
    BannerAdEvents["FAILED"] = "failed";
    BannerAdEvents["OPENED"] = "opened";
    BannerAdEvents["CLICKED"] = "clicked";
    BannerAdEvents["LEAVE"] = "leave";
    BannerAdEvents["CLOSED"] = "closed";
})(BannerAdEvents || (BannerAdEvents = {}));
export var SplashAdEvents;
(function (SplashAdEvents) {
    SplashAdEvents["LOADED"] = "loaded";
    SplashAdEvents["LOAD_FAILED"] = "loadFailed";
    SplashAdEvents["DISMISSED"] = "dismissed";
    SplashAdEvents["SHOWED"] = "showed";
    SplashAdEvents["CLICK"] = "click";
})(SplashAdEvents || (SplashAdEvents = {}));
export var RewardAdEvents;
(function (RewardAdEvents) {
    RewardAdEvents["LOADED"] = "loaded";
    RewardAdEvents["LOAD_FAILED"] = "loadFailed";
    RewardAdEvents["OPENED"] = "opened";
    RewardAdEvents["SHOW_FAILED"] = "showFailed";
    RewardAdEvents["CLOSED"] = "closed";
    RewardAdEvents["REWARDED"] = "rewarded";
})(RewardAdEvents || (RewardAdEvents = {}));
export var InterstitialAdEvents;
(function (InterstitialAdEvents) {
    InterstitialAdEvents["LOADED"] = "loaded";
    InterstitialAdEvents["LOAD_FAILED"] = "loadFailed";
    InterstitialAdEvents["DISMISSED"] = "dismissed";
    InterstitialAdEvents["SHOWED"] = "showed";
    InterstitialAdEvents["CLICK"] = "click";
    InterstitialAdEvents["METADATA_CHANGED"] = "metadaChanged";
})(InterstitialAdEvents || (InterstitialAdEvents = {}));
export var NativeAdEvents;
(function (NativeAdEvents) {
    NativeAdEvents["NATIVE_AD_LOADED"] = "nativeAdLoaded";
    NativeAdEvents["DISLIKED"] = "disliked";
    NativeAdEvents["VIDEO_START"] = "videoStart";
    NativeAdEvents["VIDEO_PLAY"] = "videoPlay";
    NativeAdEvents["VIDEO_PAUSE"] = "videoPause";
    NativeAdEvents["VIDEO_END"] = "videoEnd";
    NativeAdEvents["VIDEO_MUTE"] = "videoMute";
    NativeAdEvents["LOADED"] = "loaded";
    NativeAdEvents["FAILED"] = "failed";
    NativeAdEvents["OPENED"] = "opened";
    NativeAdEvents["CLICKED"] = "clicked";
    NativeAdEvents["LEAVE"] = "leave";
    NativeAdEvents["CLOSED"] = "closed";
})(NativeAdEvents || (NativeAdEvents = {}));
// **************************
// CONSTANTS
export var ErrorCodes;
(function (ErrorCodes) {
    ErrorCodes[ErrorCodes["INNER"] = 0] = "INNER";
    ErrorCodes[ErrorCodes["INVALID_REQUEST"] = 1] = "INVALID_REQUEST";
    ErrorCodes[ErrorCodes["NETWORK_ERROR"] = 2] = "NETWORK_ERROR";
    ErrorCodes[ErrorCodes["NO_AD"] = 3] = "NO_AD";
    ErrorCodes[ErrorCodes["AD_LOADING"] = 4] = "AD_LOADING";
    ErrorCodes[ErrorCodes["LOW_API"] = 5] = "LOW_API";
    ErrorCodes[ErrorCodes["BANNER_AD_EXPIRE"] = 6] = "BANNER_AD_EXPIRE";
    ErrorCodes[ErrorCodes["BANNER_AD_CANCEL"] = 7] = "BANNER_AD_CANCEL";
})(ErrorCodes || (ErrorCodes = {}));
export var InstallReferrerResponses;
(function (InstallReferrerResponses) {
    InstallReferrerResponses[InstallReferrerResponses["SERVICE_DISCONNECTED"] = -1] = "SERVICE_DISCONNECTED";
    InstallReferrerResponses[InstallReferrerResponses["DEVELOPER_ERROR"] = 3] = "DEVELOPER_ERROR";
    InstallReferrerResponses[InstallReferrerResponses["SERVICE_UNAVAILABLE"] = 1] = "SERVICE_UNAVAILABLE";
    InstallReferrerResponses[InstallReferrerResponses["OK"] = 0] = "OK";
    InstallReferrerResponses[InstallReferrerResponses["FEATURE_NOT_SUPPORTED"] = 2] = "FEATURE_NOT_SUPPORTED";
})(InstallReferrerResponses || (InstallReferrerResponses = {}));
export var ScreenOrientation;
(function (ScreenOrientation) {
    ScreenOrientation[ScreenOrientation["SCREEN_ORIENTATION_LANDSCAPE"] = 0] = "SCREEN_ORIENTATION_LANDSCAPE";
    ScreenOrientation[ScreenOrientation["SCREEN_ORIENTATION_UNSPECIFIED"] = -1] = "SCREEN_ORIENTATION_UNSPECIFIED";
    ScreenOrientation[ScreenOrientation["SCREEN_ORIENTATION_PORTRAIT"] = 1] = "SCREEN_ORIENTATION_PORTRAIT";
    ScreenOrientation[ScreenOrientation["SCREEN_ORIENTATION_USER"] = 2] = "SCREEN_ORIENTATION_USER";
    ScreenOrientation[ScreenOrientation["SCREEN_ORIENTATION_BEHIND"] = 3] = "SCREEN_ORIENTATION_BEHIND";
    ScreenOrientation[ScreenOrientation["SCREEN_ORIENTATION_SENSOR"] = 4] = "SCREEN_ORIENTATION_SENSOR";
    ScreenOrientation[ScreenOrientation["SCREEN_ORIENTATION_NOSENSOR"] = 5] = "SCREEN_ORIENTATION_NOSENSOR";
    ScreenOrientation[ScreenOrientation["SCREEN_ORIENTATION_SENSOR_LANDSCAPE"] = 6] = "SCREEN_ORIENTATION_SENSOR_LANDSCAPE";
    ScreenOrientation[ScreenOrientation["SCREEN_ORIENTATION_SENSOR_PORTRAIT"] = 7] = "SCREEN_ORIENTATION_SENSOR_PORTRAIT";
    ScreenOrientation[ScreenOrientation["SCREEN_ORIENTATION_REVERSE_LANDSCAPE"] = 8] = "SCREEN_ORIENTATION_REVERSE_LANDSCAPE";
    ScreenOrientation[ScreenOrientation["SCREEN_ORIENTATION_REVERSE_PORTRAIT"] = 9] = "SCREEN_ORIENTATION_REVERSE_PORTRAIT";
    ScreenOrientation[ScreenOrientation["SCREEN_ORIENTATION_FULL_SENSOR"] = 10] = "SCREEN_ORIENTATION_FULL_SENSOR";
    ScreenOrientation[ScreenOrientation["SCREEN_ORIENTATION_USER_LANDSCAPE"] = 11] = "SCREEN_ORIENTATION_USER_LANDSCAPE";
    ScreenOrientation[ScreenOrientation["SCREEN_ORIENTATION_USER_PORTRAIT"] = 12] = "SCREEN_ORIENTATION_USER_PORTRAIT";
    ScreenOrientation[ScreenOrientation["SCREEN_ORIENTATION_FULL_USER"] = 13] = "SCREEN_ORIENTATION_FULL_USER";
    ScreenOrientation[ScreenOrientation["SCREEN_ORIENTATION_LOCKED"] = 14] = "SCREEN_ORIENTATION_LOCKED";
})(ScreenOrientation || (ScreenOrientation = {}));
export var NonPersonalizedAd;
(function (NonPersonalizedAd) {
    NonPersonalizedAd[NonPersonalizedAd["ALLOW_ALL"] = 0] = "ALLOW_ALL";
    NonPersonalizedAd[NonPersonalizedAd["ALLOW_NON_PERSONALIZED"] = 1] = "ALLOW_NON_PERSONALIZED";
})(NonPersonalizedAd || (NonPersonalizedAd = {}));
export var ChildProtection;
(function (ChildProtection) {
    ChildProtection[ChildProtection["TAG_FOR_CHILD_PROTECTION_UNSPECIFIED"] = -1] = "TAG_FOR_CHILD_PROTECTION_UNSPECIFIED";
    ChildProtection[ChildProtection["TAG_FOR_CHILD_PROTECTION_FALSE"] = 0] = "TAG_FOR_CHILD_PROTECTION_FALSE";
    ChildProtection[ChildProtection["TAG_FOR_CHILD_PROTECTION_TRUE"] = 1] = "TAG_FOR_CHILD_PROTECTION_TRUE";
})(ChildProtection || (ChildProtection = {}));
export var UnderAgeOfPromise;
(function (UnderAgeOfPromise) {
    UnderAgeOfPromise[UnderAgeOfPromise["PROMISE_UNSPECIFIED"] = -1] = "PROMISE_UNSPECIFIED";
    UnderAgeOfPromise[UnderAgeOfPromise["PROMISE_FALSE"] = 0] = "PROMISE_FALSE";
    UnderAgeOfPromise[UnderAgeOfPromise["PROMISE_TRUE"] = 1] = "PROMISE_TRUE";
})(UnderAgeOfPromise || (UnderAgeOfPromise = {}));
export var ConsentDebug;
(function (ConsentDebug) {
    ConsentDebug[ConsentDebug["CONSENT_DEBUG_DISABLED"] = 0] = "CONSENT_DEBUG_DISABLED";
    ConsentDebug[ConsentDebug["CONSENT_DEBUG_NEED_CONSENT"] = 1] = "CONSENT_DEBUG_NEED_CONSENT";
    ConsentDebug[ConsentDebug["CONSENT_DEBUG_NOT_NEED_CONSENT"] = 2] = "CONSENT_DEBUG_NOT_NEED_CONSENT";
})(ConsentDebug || (ConsentDebug = {}));
export var Anchor;
(function (Anchor) {
    Anchor["TOP"] = "top";
    Anchor["BOTTOM"] = "bottom";
})(Anchor || (Anchor = {}));
export var Consent;
(function (Consent) {
    Consent[Consent["CONSENT_PERSONALIZED"] = 0] = "CONSENT_PERSONALIZED";
    Consent[Consent["CONSENT_NON_PERSONALIZED"] = 1] = "CONSENT_NON_PERSONALIZED";
    Consent[Consent["CONSENT_UNKNOWN"] = 2] = "CONSENT_UNKNOWN";
})(Consent || (Consent = {}));
export var AudioFocusType;
(function (AudioFocusType) {
    AudioFocusType[AudioFocusType["GAIN_AUDIO_FOCUS_ALL"] = 0] = "GAIN_AUDIO_FOCUS_ALL";
    AudioFocusType[AudioFocusType["NOT_GAIN_AUDIO_FOCUS_WHEN_MUTE"] = 1] = "NOT_GAIN_AUDIO_FOCUS_WHEN_MUTE";
    AudioFocusType[AudioFocusType["NOT_GAIN_AUDIO_FOCUS_ALL"] = 2] = "NOT_GAIN_AUDIO_FOCUS_ALL";
})(AudioFocusType || (AudioFocusType = {}));
export var AdContentClassification;
(function (AdContentClassification) {
    AdContentClassification["AD_CONTENT_CLASSIFICATION_A"] = "A";
    AdContentClassification["AD_CONTENT_CLASSIFICATION_PI"] = "PI";
    AdContentClassification["AD_CONTENT_CLASSIFICATION_UNKOWN"] = "";
    AdContentClassification["AD_CONTENT_CLASSIFICATION_J"] = "J";
    AdContentClassification["AD_CONTENT_CLASSIFICATION_W"] = "W";
})(AdContentClassification || (AdContentClassification = {}));
export var Color;
(function (Color) {
    Color["RED"] = "RED";
    Color["DKGRAY"] = "DKGRAY";
    Color["GRAY"] = "GRAY";
    Color["WHITE"] = "WHITE";
    Color["BLUE"] = "BLUE";
    Color["BLACK"] = "BLACK";
    Color["LTGRAY"] = "LTGRAY";
    Color["MAGENTA"] = "MAGENTA";
    Color["YELLOW"] = "YELLOW";
    Color["CYAN"] = "CYAN";
    Color["GREEN"] = "GREEN";
    Color["TRANSPARENT"] = "TRANSPARENT";
})(Color || (Color = {}));
export var BannerAdSize;
(function (BannerAdSize) {
    BannerAdSize["BANNER_SIZE_360_57"] = "BANNER_SIZE_360_57";
    BannerAdSize["BANNER_SIZE_360_144"] = "BANNER_SIZE_360_144";
    BannerAdSize["BANNER_SIZE_160_600"] = "BANNER_SIZE_160_600";
    BannerAdSize["BANNER_SIZE_300_250"] = "BANNER_SIZE_300_250";
    BannerAdSize["BANNER_SIZE_320_100"] = "BANNER_SIZE_320_100";
    BannerAdSize["BANNER_SIZE_320_50"] = "BANNER_SIZE_320_50";
    BannerAdSize["BANNER_SIZE_468_60"] = "BANNER_SIZE_468_60";
    BannerAdSize["BANNER_SIZE_728_90"] = "BANNER_SIZE_728_90";
    BannerAdSize["BANNER_SIZE_DYNAMIC"] = "BANNER_SIZE_DYNAMIC";
    BannerAdSize["BANNER_SIZE_INVALID"] = "BANNER_SIZE_INVALID";
    BannerAdSize["BANNER_SIZE_SMART"] = "BANNER_SIZE_SMART";
})(BannerAdSize || (BannerAdSize = {}));
export var MediaAspect;
(function (MediaAspect) {
    MediaAspect[MediaAspect["ASPECT_ANY"] = 1] = "ASPECT_ANY";
    MediaAspect[MediaAspect["ASPECT_CUSTOM_SIZE"] = -1] = "ASPECT_CUSTOM_SIZE";
    MediaAspect[MediaAspect["ASPECT_LANDSCAPE"] = 2] = "ASPECT_LANDSCAPE";
    MediaAspect[MediaAspect["ASPECT_PORTRAIT"] = 3] = "ASPECT_PORTRAIT";
    MediaAspect[MediaAspect["ASPECT_SQUARE"] = 4] = "ASPECT_SQUARE";
    MediaAspect[MediaAspect["ASPECT_UNKNOWN"] = 0] = "ASPECT_UNKNOWN";
})(MediaAspect || (MediaAspect = {}));
export var ChoicesPosition;
(function (ChoicesPosition) {
    ChoicesPosition[ChoicesPosition["BOTTOM_LEFT"] = 3] = "BOTTOM_LEFT";
    ChoicesPosition[ChoicesPosition["BOTTOM_RIGHT"] = 2] = "BOTTOM_RIGHT";
    ChoicesPosition[ChoicesPosition["INVISIBLE"] = 4] = "INVISIBLE";
    ChoicesPosition[ChoicesPosition["TOP_LEFT"] = 0] = "TOP_LEFT";
    ChoicesPosition[ChoicesPosition["TOP_RIGHT"] = 1] = "TOP_RIGHT";
})(ChoicesPosition || (ChoicesPosition = {}));
export var MediaDirection;
(function (MediaDirection) {
    MediaDirection[MediaDirection["ANY"] = 0] = "ANY";
    MediaDirection[MediaDirection["LANDSCAPE"] = 2] = "LANDSCAPE";
    MediaDirection[MediaDirection["PORTRAIT"] = 1] = "PORTRAIT";
})(MediaDirection || (MediaDirection = {}));
export var Gender;
(function (Gender) {
    Gender[Gender["FEMALE"] = 2] = "FEMALE";
    Gender[Gender["MALE"] = 1] = "MALE";
    Gender[Gender["UNKNOWN"] = 0] = "UNKNOWN";
})(Gender || (Gender = {}));
var Banner = /** @class */ (function () {
    function Banner() {
    }
    Banner.prototype.on = function (eventName, handler) { return cordova(this, "on", {}, arguments); };
    Banner.prototype.create = function (options) { return cordova(this, "create", { "otherPromise": true }, arguments); };
    Banner.prototype.loadAd = function (adParam) { return cordova(this, "loadAd", { "otherPromise": true }, arguments); };
    Banner.prototype.pause = function () { return cordova(this, "pause", { "otherPromise": true }, arguments); };
    Banner.prototype.resume = function () { return cordova(this, "resume", { "otherPromise": true }, arguments); };
    Banner.prototype.destroy = function () { return cordova(this, "destroy", { "otherPromise": true }, arguments); };
    Banner.pluginName = "HmsAds";
    Banner.plugin = "cordova-plugin-hms-ads";
    Banner.pluginRef = "HMSAds.Banner";
    Banner.platforms = ["Android"];
    return Banner;
}());
export { Banner };
var Interstitial = /** @class */ (function () {
    function Interstitial() {
    }
    Interstitial.prototype.on = function (eventName, handler) { return cordova(this, "on", {}, arguments); };
    Interstitial.prototype.create = function (options) { return cordova(this, "create", { "otherPromise": true }, arguments); };
    Interstitial.prototype.loadAd = function (adParam) { return cordova(this, "loadAd", { "otherPromise": true }, arguments); };
    Interstitial.prototype.show = function () { return cordova(this, "show", { "otherPromise": true }, arguments); };
    Interstitial.prototype.destroy = function () { return cordova(this, "destroy", { "otherPromise": true }, arguments); };
    Interstitial.prototype.isLoaded = function () { return cordova(this, "isLoaded", { "otherPromise": true }, arguments); };
    Interstitial.prototype.isLoading = function () { return cordova(this, "isLoading", { "otherPromise": true }, arguments); };
    Interstitial.pluginName = "HmsAds";
    Interstitial.plugin = "cordova-plugin-hms-ads";
    Interstitial.pluginRef = "HMSAds.Interstitial";
    Interstitial.platforms = ["Android"];
    return Interstitial;
}());
export { Interstitial };
var Reward = /** @class */ (function () {
    function Reward() {
    }
    Reward.prototype.on = function (eventName, handler) { return cordova(this, "on", {}, arguments); };
    Reward.prototype.create = function (options) { return cordova(this, "create", { "otherPromise": true }, arguments); };
    Reward.prototype.loadAd = function (adParam) { return cordova(this, "loadAd", { "otherPromise": true }, arguments); };
    Reward.prototype.show = function () { return cordova(this, "show", { "otherPromise": true }, arguments); };
    Reward.prototype.pause = function () { return cordova(this, "pause", { "otherPromise": true }, arguments); };
    Reward.prototype.resume = function () { return cordova(this, "resume", { "otherPromise": true }, arguments); };
    Reward.prototype.destroy = function () { return cordova(this, "destroy", { "otherPromise": true }, arguments); };
    Reward.prototype.isLoaded = function () { return cordova(this, "isLoaded", { "otherPromise": true }, arguments); };
    Reward.pluginName = "HmsAds";
    Reward.plugin = "cordova-plugin-hms-ads";
    Reward.pluginRef = "HMSAds.Reward";
    Reward.platforms = ["Android"];
    return Reward;
}());
export { Reward };
var Splash = /** @class */ (function () {
    function Splash() {
    }
    Splash.prototype.on = function (eventName, handler) { return cordova(this, "on", {}, arguments); };
    Splash.prototype.create = function (options) { return cordova(this, "create", { "otherPromise": true }, arguments); };
    Splash.prototype.load = function (options) { return cordova(this, "load", { "otherPromise": true }, arguments); };
    Splash.prototype.show = function () { return cordova(this, "show", { "otherPromise": true }, arguments); };
    Splash.prototype.destroy = function () { return cordova(this, "destroy", { "otherPromise": true }, arguments); };
    Splash.prototype.cancel = function () { return cordova(this, "cancel", { "otherPromise": true }, arguments); };
    Splash.prototype.pause = function () { return cordova(this, "pause", { "otherPromise": true }, arguments); };
    Splash.prototype.resume = function () { return cordova(this, "resume", { "otherPromise": true }, arguments); };
    Splash.prototype.isLoaded = function () { return cordova(this, "isLoaded", { "otherPromise": true }, arguments); };
    Splash.prototype.isLoading = function () { return cordova(this, "isLoading", { "otherPromise": true }, arguments); };
    Splash.pluginName = "HmsAds";
    Splash.plugin = "cordova-plugin-hms-ads";
    Splash.pluginRef = "HMSAds.Splash";
    Splash.platforms = ["Android"];
    return Splash;
}());
export { Splash };
var Native = /** @class */ (function () {
    function Native() {
    }
    Native.prototype.on = function (eventName, handler) { return cordova(this, "on", {}, arguments); };
    Native.prototype.scroll = function () { return cordova(this, "scroll", { "otherPromise": true }, arguments); };
    Native.prototype.create = function (options) { return cordova(this, "create", { "otherPromise": true }, arguments); };
    Native.prototype.loadAd = function (params) { return cordova(this, "loadAd", { "otherPromise": true }, arguments); };
    Native.prototype.isLoaded = function () { return cordova(this, "isLoaded", { "otherPromise": true }, arguments); };
    Native.prototype.isLoading = function () { return cordova(this, "isLoading", { "otherPromise": true }, arguments); };
    Native.prototype.show = function () { return cordova(this, "show", { "otherPromise": true }, arguments); };
    Native.prototype.destroy = function () { return cordova(this, "destroy", { "otherPromise": true }, arguments); };
    Native.pluginName = "HmsAds";
    Native.plugin = "cordova-plugin-hms-ads";
    Native.pluginRef = "HMSAds.Native";
    Native.platforms = ["Android"];
    return Native;
}());
export { Native };
var HmsAdsOriginal = /** @class */ (function (_super) {
    __extends(HmsAdsOriginal, _super);
    function HmsAdsOriginal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Color = Color;
        _this.AdContentClassification = AdContentClassification;
        _this.AudioFocusType = AudioFocusType;
        _this.Consent = Consent;
        _this.ConsentDebug = ConsentDebug;
        _this.UnderAgeOfPromise = UnderAgeOfPromise;
        _this.ChildProtection = ChildProtection;
        _this.NonPersonalizedAd = NonPersonalizedAd;
        _this.Orientation = ScreenOrientation;
        _this.ErrorCodes = ErrorCodes;
        _this.Gender = Gender;
        _this.NativeAdEvents = NativeAdEvents;
        _this.MediaAspect = MediaAspect;
        _this.ChoicesPosition = ChoicesPosition;
        _this.MediaDirection = MediaDirection;
        _this.SplashAdEvents = SplashAdEvents;
        _this.RewardAdEvents = RewardAdEvents;
        _this.InterstitialAdEvents = InterstitialAdEvents;
        _this.BannerAdEvents = BannerAdEvents;
        _this.BannerAdSize = BannerAdSize;
        _this.Anchor = Anchor;
        return _this;
    }
    HmsAdsOriginal.prototype.isInit = function () { return cordova(this, "isInit", { "otherPromise": true }, arguments); };
    HmsAdsOriginal.prototype.init = function (options) { return cordova(this, "init", { "otherPromise": true }, arguments); };
    HmsAdsOriginal.prototype.disconnectFromReferrerClient = function () { return cordova(this, "disconnectFromReferrerClient", { "otherPromise": true }, arguments); };
    HmsAdsOriginal.prototype.getOaidResult = function () { return cordova(this, "getOaidResult", { "otherPromise": true }, arguments); };
    HmsAdsOriginal.prototype.getReferrerDetails = function (isTest) { return cordova(this, "getReferrerDetails", { "otherPromise": true }, arguments); };
    HmsAdsOriginal.prototype.verifyAdId = function (adId, isLimitAdTracking) { return cordova(this, "verifyAdId", { "otherPromise": true }, arguments); };
    HmsAdsOriginal.prototype.setRequestOptions = function (options) { return cordova(this, "setRequestOptions", { "otherPromise": true }, arguments); };
    HmsAdsOriginal.prototype.getSDKVersion = function () { return cordova(this, "getSDKVersion", { "otherPromise": true }, arguments); };
    HmsAdsOriginal.prototype.setVideoMuted = function (muted) { return cordova(this, "setVideoMuted", { "otherPromise": true }, arguments); };
    HmsAdsOriginal.prototype.setVideoVolume = function (volume) { return cordova(this, "setVideoVolume", { "otherPromise": true }, arguments); };
    HmsAdsOriginal.prototype.addTestDeviceId = function (id) { return cordova(this, "addTestDeviceId", { "otherPromise": true }, arguments); };
    HmsAdsOriginal.prototype.getTestDeviceId = function () { return cordova(this, "getTestDeviceId", { "otherPromise": true }, arguments); };
    HmsAdsOriginal.prototype.setUnderAgeOfPromise = function (b) { return cordova(this, "setUnderAgeOfPromise", { "otherPromise": true }, arguments); };
    HmsAdsOriginal.prototype.setConsentStatus = function (status) { return cordova(this, "setConsentStatus", { "otherPromise": true }, arguments); };
    HmsAdsOriginal.prototype.setDebugNeedConsent = function (need) { return cordova(this, "setDebugNeedConsent", { "otherPromise": true }, arguments); };
    HmsAdsOriginal.prototype.requestConsentUpdate = function () { return cordova(this, "requestConsentUpdate", { "otherPromise": true }, arguments); };
    Object.defineProperty(HmsAdsOriginal.prototype, "Interstitial", {
        get: function () { return cordovaPropertyGet(this, "Interstitial"); },
        set: function (value) { cordovaPropertySet(this, "Interstitial", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HmsAdsOriginal.prototype, "Banner", {
        get: function () { return cordovaPropertyGet(this, "Banner"); },
        set: function (value) { cordovaPropertySet(this, "Banner", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HmsAdsOriginal.prototype, "Splash", {
        get: function () { return cordovaPropertyGet(this, "Splash"); },
        set: function (value) { cordovaPropertySet(this, "Splash", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HmsAdsOriginal.prototype, "Reward", {
        get: function () { return cordovaPropertyGet(this, "Reward"); },
        set: function (value) { cordovaPropertySet(this, "Reward", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HmsAdsOriginal.prototype, "Native", {
        get: function () { return cordovaPropertyGet(this, "Native"); },
        set: function (value) { cordovaPropertySet(this, "Native", value); },
        enumerable: true,
        configurable: true
    });
    HmsAdsOriginal.pluginName = "HmsAds";
    HmsAdsOriginal.plugin = "cordova-plugin-hms-ads";
    HmsAdsOriginal.pluginRef = "HMSAds";
    HmsAdsOriginal.repo = "";
    HmsAdsOriginal.install = "";
    HmsAdsOriginal.installVariables = [];
    HmsAdsOriginal.platforms = ["Android"];
    return HmsAdsOriginal;
}(IonicNativePlugin));
var HmsAds = new HmsAdsOriginal();
export { HmsAds };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2htcy1hZHMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQWlCQSxPQUFPLHNFQUF1RCxNQUFNLG9CQUFvQixDQUFDO0FBaUp6Rix3Q0FBd0M7QUFDeEMsU0FBUztBQUVULE1BQU0sQ0FBTixJQUFZLGNBT1g7QUFQRCxXQUFZLGNBQWM7SUFDeEIsbUNBQWlCLENBQUE7SUFDakIsbUNBQWlCLENBQUE7SUFDakIsbUNBQWlCLENBQUE7SUFDakIscUNBQW1CLENBQUE7SUFDbkIsaUNBQWUsQ0FBQTtJQUNmLG1DQUFpQixDQUFBO0FBQ25CLENBQUMsRUFQVyxjQUFjLEtBQWQsY0FBYyxRQU96QjtBQUVELE1BQU0sQ0FBTixJQUFZLGNBTVg7QUFORCxXQUFZLGNBQWM7SUFDeEIsbUNBQWlCLENBQUE7SUFDakIsNENBQTBCLENBQUE7SUFDMUIseUNBQXVCLENBQUE7SUFDdkIsbUNBQWlCLENBQUE7SUFDakIsaUNBQWUsQ0FBQTtBQUNqQixDQUFDLEVBTlcsY0FBYyxLQUFkLGNBQWMsUUFNekI7QUFFRCxNQUFNLENBQU4sSUFBWSxjQU9YO0FBUEQsV0FBWSxjQUFjO0lBQ3hCLG1DQUFpQixDQUFBO0lBQ2pCLDRDQUEwQixDQUFBO0lBQzFCLG1DQUFpQixDQUFBO0lBQ2pCLDRDQUEwQixDQUFBO0lBQzFCLG1DQUFpQixDQUFBO0lBQ2pCLHVDQUFxQixDQUFBO0FBQ3ZCLENBQUMsRUFQVyxjQUFjLEtBQWQsY0FBYyxRQU96QjtBQUVELE1BQU0sQ0FBTixJQUFZLG9CQU9YO0FBUEQsV0FBWSxvQkFBb0I7SUFDOUIseUNBQWlCLENBQUE7SUFDakIsa0RBQTBCLENBQUE7SUFDMUIsK0NBQXVCLENBQUE7SUFDdkIseUNBQWlCLENBQUE7SUFDakIsdUNBQWUsQ0FBQTtJQUNmLDBEQUFrQyxDQUFBO0FBQ3BD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LGlCQUFXLEdBQUcsV0FBVyxDQUFBO1FBQ3pCLHFCQUFlLEdBQUcsZUFBZSxDQUFBO1FBQ2pDLG9CQUFjLEdBQUcsY0FBYyxDQUFBO1FBQy9CLG9CQUFjLEdBQUcsY0FBYyxDQUFBO1FBQy9CLG9CQUFjLEdBQUcsY0FBYyxDQUFBO1FBQy9CLDBCQUFvQixHQUFHLG9CQUFvQixDQUFBO1FBQzNDLG9CQUFjLEdBQUcsY0FBYyxDQUFBO1FBQy9CLGtCQUFZLEdBQUcsWUFBWSxDQUFBO1FBQzNCLFlBQU0sR0FBRyxNQUFNLENBQUE7OztJQUloQix1QkFBTTtJQUtaLHFCQUFJLGFBQUMsT0FBb0I7SUFLekIsNkNBQTRCO0lBSzVCLDhCQUFhO0lBS2IsbUNBQWtCLGFBQUMsTUFBZTtJQUtsQywyQkFBVSxhQUFDLElBQVksRUFBRSxpQkFBMEI7SUFLbkQsa0NBQWlCLGFBQUMsT0FBZ0I7SUFLbEMsOEJBQWE7SUFLYiw4QkFBYSxhQUFDLEtBQWM7SUFLNUIsK0JBQWMsYUFBQyxNQUFjO0lBSzdCLGdDQUFlLGFBQUMsRUFBVTtJQUsxQixnQ0FBZTtJQUtmLHFDQUFvQixhQUFDLENBQVU7SUFLL0IsaUNBQWdCLGFBQUMsTUFBYztJQUsvQixvQ0FBbUIsYUFBQyxJQUFZO0lBS2hDLHFDQUFvQjswQkExR0QsZ0NBQVk7Ozs7OzswQkFDWiwwQkFBTTs7Ozs7OzBCQUNOLDBCQUFNOzs7Ozs7MEJBQ04sMEJBQU07Ozs7OzswQkFDTiwwQkFBTTs7Ozs7Ozs7Ozs7OztpQkFybEIzQjtFQStrQjRCLGlCQUFpQjtTQUFoQyxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENvcHlyaWdodCAyMDIwIEh1YXdlaSBUZWNobm9sb2dpZXMgQ28uLCBMdGQuXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcblxyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBsdWdpbiwgQ29yZG92YSwgQ29yZG92YVByb3BlcnR5LCBJb25pY05hdGl2ZVBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XHJcblxyXG5cclxuLy8vIElOVEVSRkFDRVMgXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEFkUGFyYW0ge1xyXG4gIGdlbmRlcj86IEdlbmRlcixcclxuICBhZENvbnRlbnRDbGFzc2lmaWNhdGlvbj86IEFkQ29udGVudENsYXNzaWZpY2F0aW9uLFxyXG4gIHRhZ0ZvclVuZGVyQWdlT2ZQcm9taXNlPzogVW5kZXJBZ2VPZlByb21pc2UsXHJcbiAgdGFnRm9yQ2hpbGRQcm90ZWN0aW9uPzogQ2hpbGRQcm90ZWN0aW9uLFxyXG4gIG5vblBlcnNvbmFsaXplZEFkPzogTm9uUGVyc29uYWxpemVkQWRcclxuICBhcHBDb3VudHJ5Pzogc3RyaW5nLFxyXG4gIGFwcExhbmc/OiBzdHJpbmcsXHJcbiAgY291bnRyeUNvZGU/OiBzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBCYW5uZXJBZE9wdGlvbnMge1xyXG4gIGFkSWQ/OiBzdHJpbmcsXHJcbiAgYmFubmVyQWRTaXplPzogQmFubmVyQWRTaXplLFxyXG4gIGJnQ29sb3I/OiBDb2xvcixcclxuICBhbmNob3I/OiAndG9wJyB8ICdib3R0b20nLFxyXG4gIGJhbm5lclJlZnJlc2g/OiBudW1iZXIgLy8gbG9uZ1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNwbGFzaEFkTG9nb09wdGlvbnMge1xyXG4gIGhpZGRlbj86IGJvb2xlYW4sXHJcbiAgYW5jaG9yPzogJ3RvcCcgfCAnYm90dG9tJyxcclxuICBvd25lcj86IHN0cmluZyxcclxuICBjb3B5cmlnaHQ/OiBzdHJpbmcsXHJcbiAgYmc/OiBDb2xvclxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNwbGFzaEFkT3B0aW9ucyB7XHJcbiAgcHJlbG9hZD86IGJvb2xlYW4sXHJcbiAgb3JpZW50YXRpb24/OiBTY3JlZW5PcmllbnRhdGlvbixcclxuICBhZElkPzogc3RyaW5nLFxyXG4gIGFkPzogQWRQYXJhbSxcclxuICBzbG9nYW5SZXNJZD86IHN0cmluZyxcclxuICB3aWRlU2xvZ2FuUmVzSWQ/OiBzdHJpbmcsXHJcbiAgYXVkaW9Gb2N1c1R5cGU/OiBBdWRpb0ZvY3VzVHlwZSxcclxuICBsb2dvPzogU3BsYXNoQWRMb2dvT3B0aW9uc1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNwbGFzaEFkTG9hZE9wdGlvbnMge1xyXG4gIG9yaWVudGF0aW9uPzogU2NyZWVuT3JpZW50YXRpb24sXHJcbiAgYWRJZD86IHN0cmluZyxcclxuICBhZD86IEFkUGFyYW1cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBSZXdhcmRWZXJpZnlDb25maWcge1xyXG4gIGRhdGE/OiBzdHJpbmcsXHJcbiAgdXNlcklkPzogc3RyaW5nXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUmV3YXJkQWRPcHRpb25zIHtcclxuICBhZElkPzogc3RyaW5nLFxyXG4gIHVzZXJJZD86IHN0cmluZyxcclxuICBkYXRhPzogc3RyaW5nLFxyXG4gIGltbWVyc2l2ZT86IGJvb2xlYW4sXHJcbiAgcmV3YXJkVmVyaWZ5Q29uZmlnPzogUmV3YXJkVmVyaWZ5Q29uZmlnXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSW50ZXJzdGl0aWFsQWRPcHRpb25zIHtcclxuICBhZElkPzogc3RyaW5nXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTmF0aXZlQWRPcHRpb25zIHtcclxuICBkaXY/OiBzdHJpbmcsXHJcbiAgdGVtcGxhdGU/OiBcInNtYWxsXCIgfCBcImZ1bGxcIiB8IFwiYmFubmVyXCIgfCBcInZpZGVvXCJcclxuICBiZz86IENvbG9yXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQWRTaXplIHtcclxuICB3aWR0aD86IG51bWJlcixcclxuICBoZWlnaHQ/OiBudW1iZXJcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBWaWRlb0NvbmZpZ3VyYXRpb24ge1xyXG4gIGF1ZGlvRm9jdXNUeXBlPzogQXVkaW9Gb2N1c1R5cGUsXHJcbiAgY2xpY2tUb0Z1bGxTY3JlZW5SZXF1ZXN0PzogYm9vbGVhbixcclxuICBzdGFydE11dGVkPzogYm9vbGVhblxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE5hdGl2ZUFkQ29uZmlndXJhdGlvbiB7XHJcbiAgYWRTaXplPzogQWRTaXplLFxyXG4gIGNob2ljZXNQb3NpdGlvbj86IENob2ljZXNQb3NpdGlvbixcclxuICBtZWRpYUFzcGVjdD86IE1lZGlhQXNwZWN0LFxyXG4gIG1lZGlhRGlyZWN0aW9uPzogTWVkaWFEaXJlY3Rpb24sXHJcbiAgcmV0dXJuVXJsc0ZvckltYWdlcz86IGJvb2xlYW4sXHJcbiAgcmVxdWVzdEN1c3RvbURpc2xpa2VUaGlzQWQ/OiBib29sZWFuLFxyXG4gIHJlcXVlc3RNdWx0aUltYWdlcz86IGJvb2xlYW4sXHJcbiAgdmlkZW9Db25maWd1cmF0aW9uPzogVmlkZW9Db25maWd1cmF0aW9uXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTmF0aXZlQWRMb2FkT3B0aW9ucyB7XHJcbiAgYWRJZD86IHN0cmluZyxcclxuICBhZD86IEFkUGFyYW0sXHJcbiAgbmF0aXZlQWRPcHRpb25zPzogTmF0aXZlQWRDb25maWd1cmF0aW9uXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTmF0aXZlQWRQcm9wcyB7XHJcbiAgd2lkdGg/OiBudW1iZXIsXHJcbiAgaGVpZ2h0PzogbnVtYmVyLFxyXG4gIHBhZGRpbmdMZWZ0PzogbnVtYmVyLFxyXG4gIHBhZGRpbmdUb3A/OiBudW1iZXIsXHJcbiAgYm9yZGVyTGVmdD86IG51bWJlcixcclxuICBib3JkZXJUb3A/OiBudW1iZXIsXHJcbiAgeD86IG51bWJlcixcclxuICB5PzogbnVtYmVyXHJcbn1cclxuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEluaXRPcHRpb25zIHtcclxuICBhcHBDb2RlPzogc3RyaW5nLFxyXG4gIGJhbm5lckZsb2F0PzogYm9vbGVhblxyXG59XHJcblxyXG5cclxuLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyBSRVNVTFRTXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElzTG9hZGluZ1Jlc3VsdCB7XHJcbiAgaXNMb2FkaW5nPzogYm9vbGVhblxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElzTG9hZGVkUmVzdWx0IHtcclxuICBpc0xvYWRlZD86IGJvb2xlYW5cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBPYWlkUmVzdWx0IHtcclxuICBpZD86IHN0cmluZyxcclxuICBpc0xpbWl0QWRUcmFjaW5nRW5hYmxlZD86IGJvb2xlYW5cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBSZWZlcnJlckRldGFpbHMge1xyXG4gIHJlc3BvbnNlQ29kZT86IG51bWJlcixcclxuICBpbnN0YWxsUmVmZXJyZXI/OiBzdHJpbmcsXHJcbiAgcmVmZXJyZXJDbGlja1RpbWVzdGFtcD86IG51bWJlcixcclxuICBpbnN0YWxsQmVnaW5UaW1lc3RhbXA/OiBudW1iZXJcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBWZXJpZnlSZXN1bHQge1xyXG4gIHJlc3VsdD86IGJvb2xlYW5cclxufVxyXG5cclxuLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyBFVkVOVFNcclxuXHJcbmV4cG9ydCBlbnVtIEJhbm5lckFkRXZlbnRzIHtcclxuICBMT0FERUQgPSAnbG9hZGVkJyxcclxuICBGQUlMRUQgPSAnZmFpbGVkJyxcclxuICBPUEVORUQgPSAnb3BlbmVkJyxcclxuICBDTElDS0VEID0gJ2NsaWNrZWQnLFxyXG4gIExFQVZFID0gJ2xlYXZlJyxcclxuICBDTE9TRUQgPSAnY2xvc2VkJ1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBTcGxhc2hBZEV2ZW50cyB7XHJcbiAgTE9BREVEID0gJ2xvYWRlZCcsXHJcbiAgTE9BRF9GQUlMRUQgPSAnbG9hZEZhaWxlZCcsXHJcbiAgRElTTUlTU0VEID0gJ2Rpc21pc3NlZCcsXHJcbiAgU0hPV0VEID0gJ3Nob3dlZCcsXHJcbiAgQ0xJQ0sgPSAnY2xpY2snXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFJld2FyZEFkRXZlbnRzIHtcclxuICBMT0FERUQgPSAnbG9hZGVkJyxcclxuICBMT0FEX0ZBSUxFRCA9ICdsb2FkRmFpbGVkJyxcclxuICBPUEVORUQgPSAnb3BlbmVkJyxcclxuICBTSE9XX0ZBSUxFRCA9ICdzaG93RmFpbGVkJyxcclxuICBDTE9TRUQgPSAnY2xvc2VkJyxcclxuICBSRVdBUkRFRCA9ICdyZXdhcmRlZCdcclxufVxyXG5cclxuZXhwb3J0IGVudW0gSW50ZXJzdGl0aWFsQWRFdmVudHMge1xyXG4gIExPQURFRCA9ICdsb2FkZWQnLFxyXG4gIExPQURfRkFJTEVEID0gJ2xvYWRGYWlsZWQnLFxyXG4gIERJU01JU1NFRCA9ICdkaXNtaXNzZWQnLFxyXG4gIFNIT1dFRCA9ICdzaG93ZWQnLFxyXG4gIENMSUNLID0gJ2NsaWNrJyxcclxuICBNRVRBREFUQV9DSEFOR0VEID0gJ21ldGFkYUNoYW5nZWQnXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIE5hdGl2ZUFkRXZlbnRzIHtcclxuICBOQVRJVkVfQURfTE9BREVEID0gJ25hdGl2ZUFkTG9hZGVkJyxcclxuICBESVNMSUtFRCA9ICdkaXNsaWtlZCcsXHJcbiAgVklERU9fU1RBUlQgPSAndmlkZW9TdGFydCcsXHJcbiAgVklERU9fUExBWSA9ICd2aWRlb1BsYXknLFxyXG4gIFZJREVPX1BBVVNFID0gJ3ZpZGVvUGF1c2UnLFxyXG4gIFZJREVPX0VORCA9ICd2aWRlb0VuZCcsXHJcbiAgVklERU9fTVVURSA9ICd2aWRlb011dGUnLFxyXG4gIExPQURFRCA9ICdsb2FkZWQnLFxyXG4gIEZBSUxFRCA9ICdmYWlsZWQnLFxyXG4gIE9QRU5FRCA9ICdvcGVuZWQnLFxyXG4gIENMSUNLRUQgPSAnY2xpY2tlZCcsXHJcbiAgTEVBVkUgPSAnbGVhdmUnLFxyXG4gIENMT1NFRCA9ICdjbG9zZWQnXHJcbn1cclxuXHJcbi8vICoqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vIENPTlNUQU5UU1xyXG5leHBvcnQgZW51bSBFcnJvckNvZGVzIHtcclxuICBJTk5FUiA9IDAsXHJcbiAgSU5WQUxJRF9SRVFVRVNUID0gMSxcclxuICBORVRXT1JLX0VSUk9SID0gMixcclxuICBOT19BRCA9IDMsXHJcbiAgQURfTE9BRElORyA9IDQsXHJcbiAgTE9XX0FQSSA9IDUsXHJcbiAgQkFOTkVSX0FEX0VYUElSRSA9IDYsXHJcbiAgQkFOTkVSX0FEX0NBTkNFTCA9IDcsXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZW51bSBJbnN0YWxsUmVmZXJyZXJSZXNwb25zZXMge1xyXG4gIFNFUlZJQ0VfRElTQ09OTkVDVEVEID0gLTEsXHJcbiAgREVWRUxPUEVSX0VSUk9SID0gMyxcclxuICBTRVJWSUNFX1VOQVZBSUxBQkxFID0gMSxcclxuICBPSyA9IDAsXHJcbiAgRkVBVFVSRV9OT1RfU1VQUE9SVEVEID0gMlxyXG59XHJcblxyXG5leHBvcnQgZW51bSBTY3JlZW5PcmllbnRhdGlvbiB7XHJcbiAgU0NSRUVOX09SSUVOVEFUSU9OX0xBTkRTQ0FQRSA9IDAsXHJcbiAgU0NSRUVOX09SSUVOVEFUSU9OX1VOU1BFQ0lGSUVEID0gLTEsXHJcbiAgU0NSRUVOX09SSUVOVEFUSU9OX1BPUlRSQUlUID0gMSxcclxuICBTQ1JFRU5fT1JJRU5UQVRJT05fVVNFUiA9IDIsXHJcbiAgU0NSRUVOX09SSUVOVEFUSU9OX0JFSElORCA9IDMsXHJcbiAgU0NSRUVOX09SSUVOVEFUSU9OX1NFTlNPUiA9IDQsXHJcbiAgU0NSRUVOX09SSUVOVEFUSU9OX05PU0VOU09SID0gNSxcclxuICBTQ1JFRU5fT1JJRU5UQVRJT05fU0VOU09SX0xBTkRTQ0FQRSA9IDYsXHJcbiAgU0NSRUVOX09SSUVOVEFUSU9OX1NFTlNPUl9QT1JUUkFJVCA9IDcsXHJcbiAgU0NSRUVOX09SSUVOVEFUSU9OX1JFVkVSU0VfTEFORFNDQVBFID0gOCxcclxuICBTQ1JFRU5fT1JJRU5UQVRJT05fUkVWRVJTRV9QT1JUUkFJVCA9IDksXHJcbiAgU0NSRUVOX09SSUVOVEFUSU9OX0ZVTExfU0VOU09SID0gMTAsXHJcbiAgU0NSRUVOX09SSUVOVEFUSU9OX1VTRVJfTEFORFNDQVBFID0gMTEsXHJcbiAgU0NSRUVOX09SSUVOVEFUSU9OX1VTRVJfUE9SVFJBSVQgPSAxMixcclxuICBTQ1JFRU5fT1JJRU5UQVRJT05fRlVMTF9VU0VSID0gMTMsXHJcbiAgU0NSRUVOX09SSUVOVEFUSU9OX0xPQ0tFRCA9IDE0LFxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBlbnVtIE5vblBlcnNvbmFsaXplZEFkIHtcclxuICBBTExPV19BTEwgPSAwLFxyXG4gIEFMTE9XX05PTl9QRVJTT05BTElaRUQgPSAxLFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBDaGlsZFByb3RlY3Rpb24ge1xyXG4gIFRBR19GT1JfQ0hJTERfUFJPVEVDVElPTl9VTlNQRUNJRklFRCA9IC0xLFxyXG4gIFRBR19GT1JfQ0hJTERfUFJPVEVDVElPTl9GQUxTRSA9IDAsXHJcbiAgVEFHX0ZPUl9DSElMRF9QUk9URUNUSU9OX1RSVUUgPSAxLFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBVbmRlckFnZU9mUHJvbWlzZSB7XHJcbiAgUFJPTUlTRV9VTlNQRUNJRklFRCA9IC0xLFxyXG4gIFBST01JU0VfRkFMU0UgPSAwLFxyXG4gIFBST01JU0VfVFJVRSA9IDFcclxufVxyXG5cclxuZXhwb3J0IGVudW0gQ29uc2VudERlYnVnIHtcclxuICBDT05TRU5UX0RFQlVHX0RJU0FCTEVEID0gMCxcclxuICBDT05TRU5UX0RFQlVHX05FRURfQ09OU0VOVCA9IDEsXHJcbiAgQ09OU0VOVF9ERUJVR19OT1RfTkVFRF9DT05TRU5UID0gMlxyXG59XHJcblxyXG5leHBvcnQgZW51bSBBbmNob3Ige1xyXG4gIFRPUCA9IFwidG9wXCIsXHJcbiAgQk9UVE9NID0gXCJib3R0b21cIlxyXG59XHJcblxyXG5leHBvcnQgZW51bSBDb25zZW50IHtcclxuICBDT05TRU5UX1BFUlNPTkFMSVpFRCA9IDAsXHJcbiAgQ09OU0VOVF9OT05fUEVSU09OQUxJWkVEID0gMSxcclxuICBDT05TRU5UX1VOS05PV04gPSAyXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEF1ZGlvRm9jdXNUeXBlIHtcclxuICBHQUlOX0FVRElPX0ZPQ1VTX0FMTCA9IDAsXHJcbiAgTk9UX0dBSU5fQVVESU9fRk9DVVNfV0hFTl9NVVRFID0gMSxcclxuICBOT1RfR0FJTl9BVURJT19GT0NVU19BTEwgPSAyXHJcbn1cclxuZXhwb3J0IGVudW0gQWRDb250ZW50Q2xhc3NpZmljYXRpb24ge1xyXG4gIEFEX0NPTlRFTlRfQ0xBU1NJRklDQVRJT05fQSA9IFwiQVwiLFxyXG4gIEFEX0NPTlRFTlRfQ0xBU1NJRklDQVRJT05fUEkgPSBcIlBJXCIsXHJcbiAgQURfQ09OVEVOVF9DTEFTU0lGSUNBVElPTl9VTktPV04gPSBcIlwiLFxyXG4gIEFEX0NPTlRFTlRfQ0xBU1NJRklDQVRJT05fSiA9IFwiSlwiLFxyXG4gIEFEX0NPTlRFTlRfQ0xBU1NJRklDQVRJT05fVyA9IFwiV1wiLFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBDb2xvciB7XHJcbiAgUkVEID0gXCJSRURcIixcclxuICBES0dSQVkgPSBcIkRLR1JBWVwiLFxyXG4gIEdSQVkgPSBcIkdSQVlcIixcclxuICBXSElURSA9IFwiV0hJVEVcIixcclxuICBCTFVFID0gXCJCTFVFXCIsXHJcbiAgQkxBQ0sgPSBcIkJMQUNLXCIsXHJcbiAgTFRHUkFZID0gXCJMVEdSQVlcIixcclxuICBNQUdFTlRBID0gXCJNQUdFTlRBXCIsXHJcbiAgWUVMTE9XID0gXCJZRUxMT1dcIixcclxuICBDWUFOID0gXCJDWUFOXCIsXHJcbiAgR1JFRU4gPSBcIkdSRUVOXCIsXHJcbiAgVFJBTlNQQVJFTlQgPSBcIlRSQU5TUEFSRU5UXCJcclxufVxyXG5leHBvcnQgZW51bSBCYW5uZXJBZFNpemUge1xyXG4gIEJBTk5FUl9TSVpFXzM2MF81NyA9IFwiQkFOTkVSX1NJWkVfMzYwXzU3XCIsXHJcbiAgQkFOTkVSX1NJWkVfMzYwXzE0NCA9IFwiQkFOTkVSX1NJWkVfMzYwXzE0NFwiLFxyXG4gIEJBTk5FUl9TSVpFXzE2MF82MDAgPSBcIkJBTk5FUl9TSVpFXzE2MF82MDBcIixcclxuICBCQU5ORVJfU0laRV8zMDBfMjUwID0gXCJCQU5ORVJfU0laRV8zMDBfMjUwXCIsXHJcbiAgQkFOTkVSX1NJWkVfMzIwXzEwMCA9IFwiQkFOTkVSX1NJWkVfMzIwXzEwMFwiLFxyXG4gIEJBTk5FUl9TSVpFXzMyMF81MCA9IFwiQkFOTkVSX1NJWkVfMzIwXzUwXCIsXHJcbiAgQkFOTkVSX1NJWkVfNDY4XzYwID0gXCJCQU5ORVJfU0laRV80NjhfNjBcIixcclxuICBCQU5ORVJfU0laRV83MjhfOTAgPSBcIkJBTk5FUl9TSVpFXzcyOF85MFwiLFxyXG4gIEJBTk5FUl9TSVpFX0RZTkFNSUMgPSBcIkJBTk5FUl9TSVpFX0RZTkFNSUNcIixcclxuICBCQU5ORVJfU0laRV9JTlZBTElEID0gXCJCQU5ORVJfU0laRV9JTlZBTElEXCIsXHJcbiAgQkFOTkVSX1NJWkVfU01BUlQgPSBcIkJBTk5FUl9TSVpFX1NNQVJUXCJcclxufVxyXG5cclxuZXhwb3J0IGVudW0gTWVkaWFBc3BlY3Qge1xyXG4gIEFTUEVDVF9BTlkgPSAxLFxyXG4gIEFTUEVDVF9DVVNUT01fU0laRSA9IC0xLFxyXG4gIEFTUEVDVF9MQU5EU0NBUEUgPSAyLFxyXG4gIEFTUEVDVF9QT1JUUkFJVCA9IDMsXHJcbiAgQVNQRUNUX1NRVUFSRSA9IDQsXHJcbiAgQVNQRUNUX1VOS05PV04gPSAwXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIENob2ljZXNQb3NpdGlvbiB7XHJcbiAgQk9UVE9NX0xFRlQgPSAzLFxyXG4gIEJPVFRPTV9SSUdIVCA9IDIsXHJcbiAgSU5WSVNJQkxFID0gNCxcclxuICBUT1BfTEVGVCA9IDAsXHJcbiAgVE9QX1JJR0hUID0gMVxyXG59XHJcblxyXG5leHBvcnQgZW51bSBNZWRpYURpcmVjdGlvbiB7XHJcbiAgQU5ZID0gMCxcclxuICBMQU5EU0NBUEUgPSAyLFxyXG4gIFBPUlRSQUlUID0gMVxyXG59XHJcblxyXG5leHBvcnQgZW51bSBHZW5kZXIge1xyXG4gIEZFTUFMRSA9IDIsXHJcbiAgTUFMRSA9IDEsXHJcbiAgVU5LTk9XTiA9IDBcclxufVxyXG5cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ0htc0FkcycsXHJcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4taG1zLWFkcycsXHJcbiAgcGx1Z2luUmVmOiAnSE1TQWRzLkJhbm5lcicsXHJcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXVxyXG59KVxyXG5jbGFzcyBCYW5uZXIge1xyXG5cclxuICBAQ29yZG92YSgpXHJcbiAgb24oZXZlbnROYW1lOiBCYW5uZXJBZEV2ZW50cywgaGFuZGxlcjogKCkgPT4gdm9pZCk6IHZvaWQge1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBhc3luYyBjcmVhdGUob3B0aW9uczogQmFubmVyQWRPcHRpb25zKTogUHJvbWlzZTxCYW5uZXI+IHtcclxuICAgIHJldHVyblxyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBsb2FkQWQoYWRQYXJhbTogQWRQYXJhbSk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuXHJcbiAgfVxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgcGF1c2UoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm5cclxuICB9XHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICByZXN1bWUoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm5cclxuICB9XHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBkZXN0cm95KCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuXHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdIbXNBZHMnLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWhtcy1hZHMnLFxyXG4gIHBsdWdpblJlZjogJ0hNU0Fkcy5JbnRlcnN0aXRpYWwnLFxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEludGVyc3RpdGlhbCB7XHJcblxyXG5cclxuICBAQ29yZG92YSgpXHJcbiAgb24oZXZlbnROYW1lOiBJbnRlcnN0aXRpYWxBZEV2ZW50cywgaGFuZGxlcjogKCkgPT4gdm9pZCk6IHZvaWQge1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBhc3luYyBjcmVhdGUob3B0aW9uczogSW50ZXJzdGl0aWFsQWRPcHRpb25zKTogUHJvbWlzZTxJbnRlcnN0aXRpYWw+IHtcclxuICAgIHJldHVyblxyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBsb2FkQWQoYWRQYXJhbTogQWRQYXJhbSk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuXHJcbiAgfVxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgc2hvdygpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVyblxyXG4gIH1cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIGRlc3Ryb3koKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm5cclxuICB9XHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBpc0xvYWRlZCgpOiBQcm9taXNlPElzTG9hZGVkUmVzdWx0PiB7XHJcbiAgICByZXR1cm5cclxuICB9XHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBpc0xvYWRpbmcoKTogUHJvbWlzZTxJc0xvYWRpbmdSZXN1bHQ+IHtcclxuICAgIHJldHVyblxyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnSG1zQWRzJyxcclxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1obXMtYWRzJyxcclxuICBwbHVnaW5SZWY6ICdITVNBZHMuUmV3YXJkJyxcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSZXdhcmQge1xyXG5cclxuXHJcbiAgQENvcmRvdmEoKVxyXG4gIG9uKGV2ZW50TmFtZTogUmV3YXJkQWRFdmVudHMsIGhhbmRsZXI6ICgpID0+IHZvaWQpOiB2b2lkIHtcclxuICB9XHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBhc3luYyBjcmVhdGUob3B0aW9uczogUmV3YXJkQWRPcHRpb25zKTogUHJvbWlzZTxSZXdhcmQ+IHtcclxuICAgIHJldHVyblxyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBsb2FkQWQoYWRQYXJhbTogQWRQYXJhbSk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuXHJcbiAgfVxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgc2hvdygpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVyblxyXG4gIH1cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIHBhdXNlKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuXHJcbiAgfVxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgcmVzdW1lKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuXHJcbiAgfVxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgZGVzdHJveSgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVyblxyXG4gIH1cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIGlzTG9hZGVkKCk6IFByb21pc2U8SXNMb2FkZWRSZXN1bHQ+IHtcclxuICAgIHJldHVyblxyXG4gIH1cclxufVxyXG5cclxuXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdIbXNBZHMnLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWhtcy1hZHMnLFxyXG4gIHBsdWdpblJlZjogJ0hNU0Fkcy5TcGxhc2gnLFxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJ11cclxufSlcclxuY2xhc3MgU3BsYXNoIHtcclxuXHJcbiAgQENvcmRvdmEoKVxyXG4gIG9uKGV2ZW50TmFtZTogU3BsYXNoQWRFdmVudHMsIGhhbmRsZXI6ICgpID0+IHZvaWQpOiB2b2lkIHtcclxuICB9XHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBhc3luYyBjcmVhdGUob3B0aW9uczogU3BsYXNoQWRPcHRpb25zKTogUHJvbWlzZTxTcGxhc2g+IHtcclxuICAgIHJldHVyblxyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBsb2FkKG9wdGlvbnM6IFNwbGFzaEFkTG9hZE9wdGlvbnMpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVyblxyXG4gIH1cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIHNob3coKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm5cclxuICB9XHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBkZXN0cm95KCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuXHJcbiAgfVxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgY2FuY2VsKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuXHJcbiAgfVxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgcGF1c2UoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgcmVzdW1lKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuXHJcbiAgfVxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgaXNMb2FkZWQoKTogUHJvbWlzZTxJc0xvYWRlZFJlc3VsdD4ge1xyXG4gICAgcmV0dXJuXHJcbiAgfVxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgaXNMb2FkaW5nKCk6IFByb21pc2U8SXNMb2FkaW5nUmVzdWx0PiB7XHJcbiAgICByZXR1cm5cclxuICB9XHJcbn1cclxuXHJcblxyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnSG1zQWRzJyxcclxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1obXMtYWRzJyxcclxuICBwbHVnaW5SZWY6ICdITVNBZHMuTmF0aXZlJyxcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddXHJcbn0pXHJcbmNsYXNzIE5hdGl2ZSB7XHJcblxyXG5cclxuICBAQ29yZG92YSgpXHJcbiAgb24oZXZlbnROYW1lOiBOYXRpdmVBZEV2ZW50cywgaGFuZGxlcjogKCkgPT4gdm9pZCk6IHZvaWQge1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWV9KVxyXG4gIHNjcm9sbCgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVyblxyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBhc3luYyBjcmVhdGUob3B0aW9uczogTmF0aXZlQWRPcHRpb25zKTogUHJvbWlzZTxOYXRpdmU+IHtcclxuICAgIHJldHVyblxyXG4gIH1cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIGxvYWRBZChwYXJhbXM6IE5hdGl2ZUFkTG9hZE9wdGlvbnMpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVyblxyXG4gIH1cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIGlzTG9hZGVkKCk6IFByb21pc2U8SXNMb2FkZWRSZXN1bHQ+IHtcclxuICAgIHJldHVyblxyXG4gIH1cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIGlzTG9hZGluZygpOiBQcm9taXNlPElzTG9hZGluZ1Jlc3VsdD4ge1xyXG4gICAgcmV0dXJuXHJcbiAgfVxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgc2hvdygpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVyblxyXG4gIH1cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIGRlc3Ryb3koKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm5cclxuICB9XHJcbn1cclxuXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdIbXNBZHMnLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWhtcy1hZHMnLCAvLyBucG0gcGFja2FnZSBuYW1lLCBleGFtcGxlOiBjb3Jkb3ZhLXBsdWdpbi1jYW1lcmFcclxuICBwbHVnaW5SZWY6ICdITVNBZHMnLCAvLyB0aGUgdmFyaWFibGUgcmVmZXJlbmNlIHRvIGNhbGwgdGhlIHBsdWdpbiwgZXhhbXBsZTogbmF2aWdhdG9yLmdlb2xvY2F0aW9uXHJcbiAgcmVwbzogJycsIC8vIHRoZSBnaXRodWIgcmVwb3NpdG9yeSBVUkwgZm9yIHRoZSBwbHVnaW5cclxuICBpbnN0YWxsOiAnJywgLy8gT1BUSU9OQUwgaW5zdGFsbCBjb21tYW5kLCBpbiBjYXNlIHRoZSBwbHVnaW4gcmVxdWlyZXMgdmFyaWFibGVzXHJcbiAgaW5zdGFsbFZhcmlhYmxlczogW10sIC8vIE9QVElPTkFMIHRoZSBwbHVnaW4gcmVxdWlyZXMgdmFyaWFibGVzXHJcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSAvLyBBcnJheSBvZiBwbGF0Zm9ybXMgc3VwcG9ydGVkLCBleGFtcGxlOiBbJ0FuZHJvaWQnLCAnaU9TJ11cclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgSG1zQWRzIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xyXG5cclxuICBAQ29yZG92YVByb3BlcnR5KCkgSW50ZXJzdGl0aWFsID0gSW50ZXJzdGl0aWFsO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBCYW5uZXIgPSBCYW5uZXI7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFNwbGFzaCA9IFNwbGFzaDtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgUmV3YXJkID0gUmV3YXJkO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBOYXRpdmUgPSBOYXRpdmU7XHJcblxyXG5cclxuICBwdWJsaWMgQ29sb3IgPSBDb2xvclxyXG4gIHB1YmxpYyBBZENvbnRlbnRDbGFzc2lmaWNhdGlvbiA9IEFkQ29udGVudENsYXNzaWZpY2F0aW9uXHJcbiAgcHVibGljIEF1ZGlvRm9jdXNUeXBlID0gQXVkaW9Gb2N1c1R5cGVcclxuICBwdWJsaWMgQ29uc2VudCA9IENvbnNlbnRcclxuICBwdWJsaWMgQ29uc2VudERlYnVnID0gQ29uc2VudERlYnVnXHJcbiAgcHVibGljIFVuZGVyQWdlT2ZQcm9taXNlID0gVW5kZXJBZ2VPZlByb21pc2VcclxuICBwdWJsaWMgQ2hpbGRQcm90ZWN0aW9uID0gQ2hpbGRQcm90ZWN0aW9uXHJcbiAgcHVibGljIE5vblBlcnNvbmFsaXplZEFkID0gTm9uUGVyc29uYWxpemVkQWRcclxuICBwdWJsaWMgT3JpZW50YXRpb24gPSBTY3JlZW5PcmllbnRhdGlvblxyXG4gIHB1YmxpYyBFcnJvckNvZGVzID0gRXJyb3JDb2Rlc1xyXG4gIHB1YmxpYyBHZW5kZXIgPSBHZW5kZXJcclxuICBwdWJsaWMgTmF0aXZlQWRFdmVudHMgPSBOYXRpdmVBZEV2ZW50c1xyXG4gIHB1YmxpYyBNZWRpYUFzcGVjdCA9IE1lZGlhQXNwZWN0XHJcbiAgcHVibGljIENob2ljZXNQb3NpdGlvbiA9IENob2ljZXNQb3NpdGlvblxyXG4gIHB1YmxpYyBNZWRpYURpcmVjdGlvbiA9IE1lZGlhRGlyZWN0aW9uXHJcbiAgcHVibGljIFNwbGFzaEFkRXZlbnRzID0gU3BsYXNoQWRFdmVudHNcclxuICBwdWJsaWMgUmV3YXJkQWRFdmVudHMgPSBSZXdhcmRBZEV2ZW50c1xyXG4gIHB1YmxpYyBJbnRlcnN0aXRpYWxBZEV2ZW50cyA9IEludGVyc3RpdGlhbEFkRXZlbnRzXHJcbiAgcHVibGljIEJhbm5lckFkRXZlbnRzID0gQmFubmVyQWRFdmVudHNcclxuICBwdWJsaWMgQmFubmVyQWRTaXplID0gQmFubmVyQWRTaXplXHJcbiAgcHVibGljIEFuY2hvciA9IEFuY2hvclxyXG5cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBhc3luYyBpc0luaXQoKTogUHJvbWlzZTxib29sZWFuPntcclxuICAgIHJldHVyblxyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBpbml0KG9wdGlvbnM6IEluaXRPcHRpb25zKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm5cclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgZGlzY29ubmVjdEZyb21SZWZlcnJlckNsaWVudCgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVyblxyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBnZXRPYWlkUmVzdWx0KCk6IFByb21pc2U8T2FpZFJlc3VsdD4ge1xyXG4gICAgcmV0dXJuXHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIGdldFJlZmVycmVyRGV0YWlscyhpc1Rlc3Q6IGJvb2xlYW4pOiBQcm9taXNlPFJlZmVycmVyRGV0YWlscz4ge1xyXG4gICAgcmV0dXJuXHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIHZlcmlmeUFkSWQoYWRJZDogc3RyaW5nLCBpc0xpbWl0QWRUcmFja2luZzogYm9vbGVhbik6IFByb21pc2U8VmVyaWZ5UmVzdWx0PiB7XHJcbiAgICByZXR1cm5cclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgc2V0UmVxdWVzdE9wdGlvbnMob3B0aW9uczogQWRQYXJhbSk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuXHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIGdldFNES1ZlcnNpb24oKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm5cclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgc2V0VmlkZW9NdXRlZChtdXRlZDogYm9vbGVhbik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuXHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIHNldFZpZGVvVm9sdW1lKHZvbHVtZTogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm5cclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgYWRkVGVzdERldmljZUlkKGlkOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVyblxyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBnZXRUZXN0RGV2aWNlSWQoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm5cclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgc2V0VW5kZXJBZ2VPZlByb21pc2UoYjogYm9vbGVhbik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuXHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIHNldENvbnNlbnRTdGF0dXMoc3RhdHVzOiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVyblxyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBzZXREZWJ1Z05lZWRDb25zZW50KG5lZWQ6IG51bWJlcik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuXHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIHJlcXVlc3RDb25zZW50VXBkYXRlKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuXHJcbiAgfVxyXG5cclxuXHJcbn1cclxuXHJcblxyXG5cclxuIl19