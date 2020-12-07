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
import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
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
    Banner = __decorate([], Banner);
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
    Interstitial = __decorate([], Interstitial);
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
    Reward = __decorate([], Reward);
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
    Splash = __decorate([], Splash);
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
    Native = __decorate([], Native);
    return Native;
}());
export { Native };
var HmsAds = /** @class */ (function (_super) {
    __extends(HmsAds, _super);
    function HmsAds() {
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
    HmsAds.prototype.isInit = function () { return cordova(this, "isInit", { "otherPromise": true }, arguments); };
    HmsAds.prototype.init = function (options) { return cordova(this, "init", { "otherPromise": true }, arguments); };
    HmsAds.prototype.disconnectFromReferrerClient = function () { return cordova(this, "disconnectFromReferrerClient", { "otherPromise": true }, arguments); };
    HmsAds.prototype.getOaidResult = function () { return cordova(this, "getOaidResult", { "otherPromise": true }, arguments); };
    HmsAds.prototype.getReferrerDetails = function (isTest) { return cordova(this, "getReferrerDetails", { "otherPromise": true }, arguments); };
    HmsAds.prototype.verifyAdId = function (adId, isLimitAdTracking) { return cordova(this, "verifyAdId", { "otherPromise": true }, arguments); };
    HmsAds.prototype.setRequestOptions = function (options) { return cordova(this, "setRequestOptions", { "otherPromise": true }, arguments); };
    HmsAds.prototype.getSDKVersion = function () { return cordova(this, "getSDKVersion", { "otherPromise": true }, arguments); };
    HmsAds.prototype.setVideoMuted = function (muted) { return cordova(this, "setVideoMuted", { "otherPromise": true }, arguments); };
    HmsAds.prototype.setVideoVolume = function (volume) { return cordova(this, "setVideoVolume", { "otherPromise": true }, arguments); };
    HmsAds.prototype.addTestDeviceId = function (id) { return cordova(this, "addTestDeviceId", { "otherPromise": true }, arguments); };
    HmsAds.prototype.getTestDeviceId = function () { return cordova(this, "getTestDeviceId", { "otherPromise": true }, arguments); };
    HmsAds.prototype.setUnderAgeOfPromise = function (b) { return cordova(this, "setUnderAgeOfPromise", { "otherPromise": true }, arguments); };
    HmsAds.prototype.setConsentStatus = function (status) { return cordova(this, "setConsentStatus", { "otherPromise": true }, arguments); };
    HmsAds.prototype.setDebugNeedConsent = function (need) { return cordova(this, "setDebugNeedConsent", { "otherPromise": true }, arguments); };
    HmsAds.prototype.requestConsentUpdate = function () { return cordova(this, "requestConsentUpdate", { "otherPromise": true }, arguments); };
    Object.defineProperty(HmsAds.prototype, "Interstitial", {
        get: function () { return cordovaPropertyGet(this, "Interstitial"); },
        set: function (value) { cordovaPropertySet(this, "Interstitial", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HmsAds.prototype, "Banner", {
        get: function () { return cordovaPropertyGet(this, "Banner"); },
        set: function (value) { cordovaPropertySet(this, "Banner", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HmsAds.prototype, "Splash", {
        get: function () { return cordovaPropertyGet(this, "Splash"); },
        set: function (value) { cordovaPropertySet(this, "Splash", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HmsAds.prototype, "Reward", {
        get: function () { return cordovaPropertyGet(this, "Reward"); },
        set: function (value) { cordovaPropertySet(this, "Reward", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HmsAds.prototype, "Native", {
        get: function () { return cordovaPropertyGet(this, "Native"); },
        set: function (value) { cordovaPropertySet(this, "Native", value); },
        enumerable: true,
        configurable: true
    });
    HmsAds.pluginName = "HmsAds";
    HmsAds.plugin = "cordova-plugin-hms-ads";
    HmsAds.pluginRef = "HMSAds";
    HmsAds.repo = "";
    HmsAds.install = "";
    HmsAds.installVariables = [];
    HmsAds.platforms = ["Android"];
    HmsAds = __decorate([
        Injectable()
    ], HmsAds);
    return HmsAds;
}(IonicNativePlugin));
export { HmsAds };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2htcy1hZHMvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7OztHQWNHOztBQUVILE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxzRUFBdUQsTUFBTSxvQkFBb0IsQ0FBQztBQWlKekYsd0NBQXdDO0FBQ3hDLFNBQVM7QUFFVCxNQUFNLENBQU4sSUFBWSxjQU9YO0FBUEQsV0FBWSxjQUFjO0lBQ3hCLG1DQUFpQixDQUFBO0lBQ2pCLG1DQUFpQixDQUFBO0lBQ2pCLG1DQUFpQixDQUFBO0lBQ2pCLHFDQUFtQixDQUFBO0lBQ25CLGlDQUFlLENBQUE7SUFDZixtQ0FBaUIsQ0FBQTtBQUNuQixDQUFDLEVBUFcsY0FBYyxLQUFkLGNBQWMsUUFPekI7QUFFRCxNQUFNLENBQU4sSUFBWSxjQU1YO0FBTkQsV0FBWSxjQUFjO0lBQ3hCLG1DQUFpQixDQUFBO0lBQ2pCLDRDQUEwQixDQUFBO0lBQzFCLHlDQUF1QixDQUFBO0lBQ3ZCLG1DQUFpQixDQUFBO0lBQ2pCLGlDQUFlLENBQUE7QUFDakIsQ0FBQyxFQU5XLGNBQWMsS0FBZCxjQUFjLFFBTXpCO0FBRUQsTUFBTSxDQUFOLElBQVksY0FPWDtBQVBELFdBQVksY0FBYztJQUN4QixtQ0FBaUIsQ0FBQTtJQUNqQiw0Q0FBMEIsQ0FBQTtJQUMxQixtQ0FBaUIsQ0FBQTtJQUNqQiw0Q0FBMEIsQ0FBQTtJQUMxQixtQ0FBaUIsQ0FBQTtJQUNqQix1Q0FBcUIsQ0FBQTtBQUN2QixDQUFDLEVBUFcsY0FBYyxLQUFkLGNBQWMsUUFPekI7QUFFRCxNQUFNLENBQU4sSUFBWSxvQkFPWDtBQVBELFdBQVksb0JBQW9CO0lBQzlCLHlDQUFpQixDQUFBO0lBQ2pCLGtEQUEwQixDQUFBO0lBQzFCLCtDQUF1QixDQUFB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IjpbIi8qKlxyXG4gKiBDb3B5cmlnaHQgMjAyMCBIdWF3ZWkgVGVjaG5vbG9naWVzIENvLiwgTHRkLlxyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQbHVnaW4sIENvcmRvdmEsIENvcmRvdmFQcm9wZXJ0eSwgSW9uaWNOYXRpdmVQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xyXG5cclxuXHJcbi8vLyBJTlRFUkZBQ0VTIFxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBZFBhcmFtIHtcclxuICBnZW5kZXI/OiBHZW5kZXIsXHJcbiAgYWRDb250ZW50Q2xhc3NpZmljYXRpb24/OiBBZENvbnRlbnRDbGFzc2lmaWNhdGlvbixcclxuICB0YWdGb3JVbmRlckFnZU9mUHJvbWlzZT86IFVuZGVyQWdlT2ZQcm9taXNlLFxyXG4gIHRhZ0ZvckNoaWxkUHJvdGVjdGlvbj86IENoaWxkUHJvdGVjdGlvbixcclxuICBub25QZXJzb25hbGl6ZWRBZD86IE5vblBlcnNvbmFsaXplZEFkXHJcbiAgYXBwQ291bnRyeT86IHN0cmluZyxcclxuICBhcHBMYW5nPzogc3RyaW5nLFxyXG4gIGNvdW50cnlDb2RlPzogc3RyaW5nXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQmFubmVyQWRPcHRpb25zIHtcclxuICBhZElkPzogc3RyaW5nLFxyXG4gIGJhbm5lckFkU2l6ZT86IEJhbm5lckFkU2l6ZSxcclxuICBiZ0NvbG9yPzogQ29sb3IsXHJcbiAgYW5jaG9yPzogJ3RvcCcgfCAnYm90dG9tJyxcclxuICBiYW5uZXJSZWZyZXNoPzogbnVtYmVyIC8vIGxvbmdcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTcGxhc2hBZExvZ29PcHRpb25zIHtcclxuICBoaWRkZW4/OiBib29sZWFuLFxyXG4gIGFuY2hvcj86ICd0b3AnIHwgJ2JvdHRvbScsXHJcbiAgb3duZXI/OiBzdHJpbmcsXHJcbiAgY29weXJpZ2h0Pzogc3RyaW5nLFxyXG4gIGJnPzogQ29sb3JcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTcGxhc2hBZE9wdGlvbnMge1xyXG4gIHByZWxvYWQ/OiBib29sZWFuLFxyXG4gIG9yaWVudGF0aW9uPzogU2NyZWVuT3JpZW50YXRpb24sXHJcbiAgYWRJZD86IHN0cmluZyxcclxuICBhZD86IEFkUGFyYW0sXHJcbiAgc2xvZ2FuUmVzSWQ/OiBzdHJpbmcsXHJcbiAgd2lkZVNsb2dhblJlc0lkPzogc3RyaW5nLFxyXG4gIGF1ZGlvRm9jdXNUeXBlPzogQXVkaW9Gb2N1c1R5cGUsXHJcbiAgbG9nbz86IFNwbGFzaEFkTG9nb09wdGlvbnNcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTcGxhc2hBZExvYWRPcHRpb25zIHtcclxuICBvcmllbnRhdGlvbj86IFNjcmVlbk9yaWVudGF0aW9uLFxyXG4gIGFkSWQ/OiBzdHJpbmcsXHJcbiAgYWQ/OiBBZFBhcmFtXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUmV3YXJkVmVyaWZ5Q29uZmlnIHtcclxuICBkYXRhPzogc3RyaW5nLFxyXG4gIHVzZXJJZD86IHN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFJld2FyZEFkT3B0aW9ucyB7XHJcbiAgYWRJZD86IHN0cmluZyxcclxuICB1c2VySWQ/OiBzdHJpbmcsXHJcbiAgZGF0YT86IHN0cmluZyxcclxuICBpbW1lcnNpdmU/OiBib29sZWFuLFxyXG4gIHJld2FyZFZlcmlmeUNvbmZpZz86IFJld2FyZFZlcmlmeUNvbmZpZ1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEludGVyc3RpdGlhbEFkT3B0aW9ucyB7XHJcbiAgYWRJZD86IHN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE5hdGl2ZUFkT3B0aW9ucyB7XHJcbiAgZGl2Pzogc3RyaW5nLFxyXG4gIHRlbXBsYXRlPzogXCJzbWFsbFwiIHwgXCJmdWxsXCIgfCBcImJhbm5lclwiIHwgXCJ2aWRlb1wiXHJcbiAgYmc/OiBDb2xvclxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEFkU2l6ZSB7XHJcbiAgd2lkdGg/OiBudW1iZXIsXHJcbiAgaGVpZ2h0PzogbnVtYmVyXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVmlkZW9Db25maWd1cmF0aW9uIHtcclxuICBhdWRpb0ZvY3VzVHlwZT86IEF1ZGlvRm9jdXNUeXBlLFxyXG4gIGNsaWNrVG9GdWxsU2NyZWVuUmVxdWVzdD86IGJvb2xlYW4sXHJcbiAgc3RhcnRNdXRlZD86IGJvb2xlYW5cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBOYXRpdmVBZENvbmZpZ3VyYXRpb24ge1xyXG4gIGFkU2l6ZT86IEFkU2l6ZSxcclxuICBjaG9pY2VzUG9zaXRpb24/OiBDaG9pY2VzUG9zaXRpb24sXHJcbiAgbWVkaWFBc3BlY3Q/OiBNZWRpYUFzcGVjdCxcclxuICBtZWRpYURpcmVjdGlvbj86IE1lZGlhRGlyZWN0aW9uLFxyXG4gIHJldHVyblVybHNGb3JJbWFnZXM/OiBib29sZWFuLFxyXG4gIHJlcXVlc3RDdXN0b21EaXNsaWtlVGhpc0FkPzogYm9vbGVhbixcclxuICByZXF1ZXN0TXVsdGlJbWFnZXM/OiBib29sZWFuLFxyXG4gIHZpZGVvQ29uZmlndXJhdGlvbj86IFZpZGVvQ29uZmlndXJhdGlvblxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE5hdGl2ZUFkTG9hZE9wdGlvbnMge1xyXG4gIGFkSWQ/OiBzdHJpbmcsXHJcbiAgYWQ/OiBBZFBhcmFtLFxyXG4gIG5hdGl2ZUFkT3B0aW9ucz86IE5hdGl2ZUFkQ29uZmlndXJhdGlvblxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE5hdGl2ZUFkUHJvcHMge1xyXG4gIHdpZHRoPzogbnVtYmVyLFxyXG4gIGhlaWdodD86IG51bWJlcixcclxuICBwYWRkaW5nTGVmdD86IG51bWJlcixcclxuICBwYWRkaW5nVG9wPzogbnVtYmVyLFxyXG4gIGJvcmRlckxlZnQ/OiBudW1iZXIsXHJcbiAgYm9yZGVyVG9wPzogbnVtYmVyLFxyXG4gIHg/OiBudW1iZXIsXHJcbiAgeT86IG51bWJlclxyXG59XHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJbml0T3B0aW9ucyB7XHJcbiAgYXBwQ29kZT86IHN0cmluZyxcclxuICBiYW5uZXJGbG9hdD86IGJvb2xlYW5cclxufVxyXG5cclxuXHJcbi8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gUkVTVUxUU1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJc0xvYWRpbmdSZXN1bHQge1xyXG4gIGlzTG9hZGluZz86IGJvb2xlYW5cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJc0xvYWRlZFJlc3VsdCB7XHJcbiAgaXNMb2FkZWQ/OiBib29sZWFuXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgT2FpZFJlc3VsdCB7XHJcbiAgaWQ/OiBzdHJpbmcsXHJcbiAgaXNMaW1pdEFkVHJhY2luZ0VuYWJsZWQ/OiBib29sZWFuXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUmVmZXJyZXJEZXRhaWxzIHtcclxuICByZXNwb25zZUNvZGU/OiBudW1iZXIsXHJcbiAgaW5zdGFsbFJlZmVycmVyPzogc3RyaW5nLFxyXG4gIHJlZmVycmVyQ2xpY2tUaW1lc3RhbXA/OiBudW1iZXIsXHJcbiAgaW5zdGFsbEJlZ2luVGltZXN0YW1wPzogbnVtYmVyXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVmVyaWZ5UmVzdWx0IHtcclxuICByZXN1bHQ/OiBib29sZWFuXHJcbn1cclxuXHJcbi8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gRVZFTlRTXHJcblxyXG5leHBvcnQgZW51bSBCYW5uZXJBZEV2ZW50cyB7XHJcbiAgTE9BREVEID0gJ2xvYWRlZCcsXHJcbiAgRkFJTEVEID0gJ2ZhaWxlZCcsXHJcbiAgT1BFTkVEID0gJ29wZW5lZCcsXHJcbiAgQ0xJQ0tFRCA9ICdjbGlja2VkJyxcclxuICBMRUFWRSA9ICdsZWF2ZScsXHJcbiAgQ0xPU0VEID0gJ2Nsb3NlZCdcclxufVxyXG5cclxuZXhwb3J0IGVudW0gU3BsYXNoQWRFdmVudHMge1xyXG4gIExPQURFRCA9ICdsb2FkZWQnLFxyXG4gIExPQURfRkFJTEVEID0gJ2xvYWRGYWlsZWQnLFxyXG4gIERJU01JU1NFRCA9ICdkaXNtaXNzZWQnLFxyXG4gIFNIT1dFRCA9ICdzaG93ZWQnLFxyXG4gIENMSUNLID0gJ2NsaWNrJ1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBSZXdhcmRBZEV2ZW50cyB7XHJcbiAgTE9BREVEID0gJ2xvYWRlZCcsXHJcbiAgTE9BRF9GQUlMRUQgPSAnbG9hZEZhaWxlZCcsXHJcbiAgT1BFTkVEID0gJ29wZW5lZCcsXHJcbiAgU0hPV19GQUlMRUQgPSAnc2hvd0ZhaWxlZCcsXHJcbiAgQ0xPU0VEID0gJ2Nsb3NlZCcsXHJcbiAgUkVXQVJERUQgPSAncmV3YXJkZWQnXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEludGVyc3RpdGlhbEFkRXZlbnRzIHtcclxuICBMT0FERUQgPSAnbG9hZGVkJyxcclxuICBMT0FEX0ZBSUxFRCA9ICdsb2FkRmFpbGVkJyxcclxuICBESVNNSVNTRUQgPSAnZGlzbWlzc2VkJyxcclxuICBTSE9XRUQgPSAnc2hvd2VkJyxcclxuICBDTElDSyA9ICdjbGljaycsXHJcbiAgTUVUQURBVEFfQ0hBTkdFRCA9ICdtZXRhZGFDaGFuZ2VkJ1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBOYXRpdmVBZEV2ZW50cyB7XHJcbiAgTkFUSVZFX0FEX0xPQURFRCA9ICduYXRpdmVBZExvYWRlZCcsXHJcbiAgRElTTElLRUQgPSAnZGlzbGlrZWQnLFxyXG4gIFZJREVPX1NUQVJUID0gJ3ZpZGVvU3RhcnQnLFxyXG4gIFZJREVPX1BMQVkgPSAndmlkZW9QbGF5JyxcclxuICBWSURFT19QQVVTRSA9ICd2aWRlb1BhdXNlJyxcclxuICBWSURFT19FTkQgPSAndmlkZW9FbmQnLFxyXG4gIFZJREVPX01VVEUgPSAndmlkZW9NdXRlJyxcclxuICBMT0FERUQgPSAnbG9hZGVkJyxcclxuICBGQUlMRUQgPSAnZmFpbGVkJyxcclxuICBPUEVORUQgPSAnb3BlbmVkJyxcclxuICBDTElDS0VEID0gJ2NsaWNrZWQnLFxyXG4gIExFQVZFID0gJ2xlYXZlJyxcclxuICBDTE9TRUQgPSAnY2xvc2VkJ1xyXG59XHJcblxyXG4vLyAqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyBDT05TVEFOVFNcclxuZXhwb3J0IGVudW0gRXJyb3JDb2RlcyB7XHJcbiAgSU5ORVIgPSAwLFxyXG4gIElOVkFMSURfUkVRVUVTVCA9IDEsXHJcbiAgTkVUV09SS19FUlJPUiA9IDIsXHJcbiAgTk9fQUQgPSAzLFxyXG4gIEFEX0xPQURJTkcgPSA0LFxyXG4gIExPV19BUEkgPSA1LFxyXG4gIEJBTk5FUl9BRF9FWFBJUkUgPSA2LFxyXG4gIEJBTk5FUl9BRF9DQU5DRUwgPSA3LFxyXG59XHJcblxyXG5cclxuZXhwb3J0IGVudW0gSW5zdGFsbFJlZmVycmVyUmVzcG9uc2VzIHtcclxuICBTRVJWSUNFX0RJU0NPTk5FQ1RFRCA9IC0xLFxyXG4gIERFVkVMT1BFUl9FUlJPUiA9IDMsXHJcbiAgU0VSVklDRV9VTkFWQUlMQUJMRSA9IDEsXHJcbiAgT0sgPSAwLFxyXG4gIEZFQVRVUkVfTk9UX1NVUFBPUlRFRCA9IDJcclxufVxyXG5cclxuZXhwb3J0IGVudW0gU2NyZWVuT3JpZW50YXRpb24ge1xyXG4gIFNDUkVFTl9PUklFTlRBVElPTl9MQU5EU0NBUEUgPSAwLFxyXG4gIFNDUkVFTl9PUklFTlRBVElPTl9VTlNQRUNJRklFRCA9IC0xLFxyXG4gIFNDUkVFTl9PUklFTlRBVElPTl9QT1JUUkFJVCA9IDEsXHJcbiAgU0NSRUVOX09SSUVOVEFUSU9OX1VTRVIgPSAyLFxyXG4gIFNDUkVFTl9PUklFTlRBVElPTl9CRUhJTkQgPSAzLFxyXG4gIFNDUkVFTl9PUklFTlRBVElPTl9TRU5TT1IgPSA0LFxyXG4gIFNDUkVFTl9PUklFTlRBVElPTl9OT1NFTlNPUiA9IDUsXHJcbiAgU0NSRUVOX09SSUVOVEFUSU9OX1NFTlNPUl9MQU5EU0NBUEUgPSA2LFxyXG4gIFNDUkVFTl9PUklFTlRBVElPTl9TRU5TT1JfUE9SVFJBSVQgPSA3LFxyXG4gIFNDUkVFTl9PUklFTlRBVElPTl9SRVZFUlNFX0xBTkRTQ0FQRSA9IDgsXHJcbiAgU0NSRUVOX09SSUVOVEFUSU9OX1JFVkVSU0VfUE9SVFJBSVQgPSA5LFxyXG4gIFNDUkVFTl9PUklFTlRBVElPTl9GVUxMX1NFTlNPUiA9IDEwLFxyXG4gIFNDUkVFTl9PUklFTlRBVElPTl9VU0VSX0xBTkRTQ0FQRSA9IDExLFxyXG4gIFNDUkVFTl9PUklFTlRBVElPTl9VU0VSX1BPUlRSQUlUID0gMTIsXHJcbiAgU0NSRUVOX09SSUVOVEFUSU9OX0ZVTExfVVNFUiA9IDEzLFxyXG4gIFNDUkVFTl9PUklFTlRBVElPTl9MT0NLRUQgPSAxNCxcclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgZW51bSBOb25QZXJzb25hbGl6ZWRBZCB7XHJcbiAgQUxMT1dfQUxMID0gMCxcclxuICBBTExPV19OT05fUEVSU09OQUxJWkVEID0gMSxcclxufVxyXG5cclxuZXhwb3J0IGVudW0gQ2hpbGRQcm90ZWN0aW9uIHtcclxuICBUQUdfRk9SX0NISUxEX1BST1RFQ1RJT05fVU5TUEVDSUZJRUQgPSAtMSxcclxuICBUQUdfRk9SX0NISUxEX1BST1RFQ1RJT05fRkFMU0UgPSAwLFxyXG4gIFRBR19GT1JfQ0hJTERfUFJPVEVDVElPTl9UUlVFID0gMSxcclxufVxyXG5cclxuZXhwb3J0IGVudW0gVW5kZXJBZ2VPZlByb21pc2Uge1xyXG4gIFBST01JU0VfVU5TUEVDSUZJRUQgPSAtMSxcclxuICBQUk9NSVNFX0ZBTFNFID0gMCxcclxuICBQUk9NSVNFX1RSVUUgPSAxXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIENvbnNlbnREZWJ1ZyB7XHJcbiAgQ09OU0VOVF9ERUJVR19ESVNBQkxFRCA9IDAsXHJcbiAgQ09OU0VOVF9ERUJVR19ORUVEX0NPTlNFTlQgPSAxLFxyXG4gIENPTlNFTlRfREVCVUdfTk9UX05FRURfQ09OU0VOVCA9IDJcclxufVxyXG5cclxuZXhwb3J0IGVudW0gQW5jaG9yIHtcclxuICBUT1AgPSBcInRvcFwiLFxyXG4gIEJPVFRPTSA9IFwiYm90dG9tXCJcclxufVxyXG5cclxuZXhwb3J0IGVudW0gQ29uc2VudCB7XHJcbiAgQ09OU0VOVF9QRVJTT05BTElaRUQgPSAwLFxyXG4gIENPTlNFTlRfTk9OX1BFUlNPTkFMSVpFRCA9IDEsXHJcbiAgQ09OU0VOVF9VTktOT1dOID0gMlxyXG59XHJcblxyXG5leHBvcnQgZW51bSBBdWRpb0ZvY3VzVHlwZSB7XHJcbiAgR0FJTl9BVURJT19GT0NVU19BTEwgPSAwLFxyXG4gIE5PVF9HQUlOX0FVRElPX0ZPQ1VTX1dIRU5fTVVURSA9IDEsXHJcbiAgTk9UX0dBSU5fQVVESU9fRk9DVVNfQUxMID0gMlxyXG59XHJcbmV4cG9ydCBlbnVtIEFkQ29udGVudENsYXNzaWZpY2F0aW9uIHtcclxuICBBRF9DT05URU5UX0NMQVNTSUZJQ0FUSU9OX0EgPSBcIkFcIixcclxuICBBRF9DT05URU5UX0NMQVNTSUZJQ0FUSU9OX1BJID0gXCJQSVwiLFxyXG4gIEFEX0NPTlRFTlRfQ0xBU1NJRklDQVRJT05fVU5LT1dOID0gXCJcIixcclxuICBBRF9DT05URU5UX0NMQVNTSUZJQ0FUSU9OX0ogPSBcIkpcIixcclxuICBBRF9DT05URU5UX0NMQVNTSUZJQ0FUSU9OX1cgPSBcIldcIixcclxufVxyXG5cclxuZXhwb3J0IGVudW0gQ29sb3Ige1xyXG4gIFJFRCA9IFwiUkVEXCIsXHJcbiAgREtHUkFZID0gXCJES0dSQVlcIixcclxuICBHUkFZID0gXCJHUkFZXCIsXHJcbiAgV0hJVEUgPSBcIldISVRFXCIsXHJcbiAgQkxVRSA9IFwiQkxVRVwiLFxyXG4gIEJMQUNLID0gXCJCTEFDS1wiLFxyXG4gIExUR1JBWSA9IFwiTFRHUkFZXCIsXHJcbiAgTUFHRU5UQSA9IFwiTUFHRU5UQVwiLFxyXG4gIFlFTExPVyA9IFwiWUVMTE9XXCIsXHJcbiAgQ1lBTiA9IFwiQ1lBTlwiLFxyXG4gIEdSRUVOID0gXCJHUkVFTlwiLFxyXG4gIFRSQU5TUEFSRU5UID0gXCJUUkFOU1BBUkVOVFwiXHJcbn1cclxuZXhwb3J0IGVudW0gQmFubmVyQWRTaXplIHtcclxuICBCQU5ORVJfU0laRV8zNjBfNTcgPSBcIkJBTk5FUl9TSVpFXzM2MF81N1wiLFxyXG4gIEJBTk5FUl9TSVpFXzM2MF8xNDQgPSBcIkJBTk5FUl9TSVpFXzM2MF8xNDRcIixcclxuICBCQU5ORVJfU0laRV8xNjBfNjAwID0gXCJCQU5ORVJfU0laRV8xNjBfNjAwXCIsXHJcbiAgQkFOTkVSX1NJWkVfMzAwXzI1MCA9IFwiQkFOTkVSX1NJWkVfMzAwXzI1MFwiLFxyXG4gIEJBTk5FUl9TSVpFXzMyMF8xMDAgPSBcIkJBTk5FUl9TSVpFXzMyMF8xMDBcIixcclxuICBCQU5ORVJfU0laRV8zMjBfNTAgPSBcIkJBTk5FUl9TSVpFXzMyMF81MFwiLFxyXG4gIEJBTk5FUl9TSVpFXzQ2OF82MCA9IFwiQkFOTkVSX1NJWkVfNDY4XzYwXCIsXHJcbiAgQkFOTkVSX1NJWkVfNzI4XzkwID0gXCJCQU5ORVJfU0laRV83MjhfOTBcIixcclxuICBCQU5ORVJfU0laRV9EWU5BTUlDID0gXCJCQU5ORVJfU0laRV9EWU5BTUlDXCIsXHJcbiAgQkFOTkVSX1NJWkVfSU5WQUxJRCA9IFwiQkFOTkVSX1NJWkVfSU5WQUxJRFwiLFxyXG4gIEJBTk5FUl9TSVpFX1NNQVJUID0gXCJCQU5ORVJfU0laRV9TTUFSVFwiXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIE1lZGlhQXNwZWN0IHtcclxuICBBU1BFQ1RfQU5ZID0gMSxcclxuICBBU1BFQ1RfQ1VTVE9NX1NJWkUgPSAtMSxcclxuICBBU1BFQ1RfTEFORFNDQVBFID0gMixcclxuICBBU1BFQ1RfUE9SVFJBSVQgPSAzLFxyXG4gIEFTUEVDVF9TUVVBUkUgPSA0LFxyXG4gIEFTUEVDVF9VTktOT1dOID0gMFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBDaG9pY2VzUG9zaXRpb24ge1xyXG4gIEJPVFRPTV9MRUZUID0gMyxcclxuICBCT1RUT01fUklHSFQgPSAyLFxyXG4gIElOVklTSUJMRSA9IDQsXHJcbiAgVE9QX0xFRlQgPSAwLFxyXG4gIFRPUF9SSUdIVCA9IDFcclxufVxyXG5cclxuZXhwb3J0IGVudW0gTWVkaWFEaXJlY3Rpb24ge1xyXG4gIEFOWSA9IDAsXHJcbiAgTEFORFNDQVBFID0gMixcclxuICBQT1JUUkFJVCA9IDFcclxufVxyXG5cclxuZXhwb3J0IGVudW0gR2VuZGVyIHtcclxuICBGRU1BTEUgPSAyLFxyXG4gIE1BTEUgPSAxLFxyXG4gIFVOS05PV04gPSAwXHJcbn1cclxuXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdIbXNBZHMnLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWhtcy1hZHMnLFxyXG4gIHBsdWdpblJlZjogJ0hNU0Fkcy5CYW5uZXInLFxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJ11cclxufSlcclxuY2xhc3MgQmFubmVyIHtcclxuXHJcbiAgQENvcmRvdmEoKVxyXG4gIG9uKGV2ZW50TmFtZTogQmFubmVyQWRFdmVudHMsIGhhbmRsZXI6ICgpID0+IHZvaWQpOiB2b2lkIHtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgYXN5bmMgY3JlYXRlKG9wdGlvbnM6IEJhbm5lckFkT3B0aW9ucyk6IFByb21pc2U8QmFubmVyPiB7XHJcbiAgICByZXR1cm5cclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgbG9hZEFkKGFkUGFyYW06IEFkUGFyYW0pOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVyblxyXG4gIH1cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIHBhdXNlKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuXHJcbiAgfVxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgcmVzdW1lKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuXHJcbiAgfVxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgZGVzdHJveSgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVyblxyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnSG1zQWRzJyxcclxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1obXMtYWRzJyxcclxuICBwbHVnaW5SZWY6ICdITVNBZHMuSW50ZXJzdGl0aWFsJyxcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJbnRlcnN0aXRpYWwge1xyXG5cclxuXHJcbiAgQENvcmRvdmEoKVxyXG4gIG9uKGV2ZW50TmFtZTogSW50ZXJzdGl0aWFsQWRFdmVudHMsIGhhbmRsZXI6ICgpID0+IHZvaWQpOiB2b2lkIHtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgYXN5bmMgY3JlYXRlKG9wdGlvbnM6IEludGVyc3RpdGlhbEFkT3B0aW9ucyk6IFByb21pc2U8SW50ZXJzdGl0aWFsPiB7XHJcbiAgICByZXR1cm5cclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgbG9hZEFkKGFkUGFyYW06IEFkUGFyYW0pOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVyblxyXG4gIH1cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIHNob3coKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm5cclxuICB9XHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBkZXN0cm95KCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuXHJcbiAgfVxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgaXNMb2FkZWQoKTogUHJvbWlzZTxJc0xvYWRlZFJlc3VsdD4ge1xyXG4gICAgcmV0dXJuXHJcbiAgfVxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgaXNMb2FkaW5nKCk6IFByb21pc2U8SXNMb2FkaW5nUmVzdWx0PiB7XHJcbiAgICByZXR1cm5cclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ0htc0FkcycsXHJcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4taG1zLWFkcycsXHJcbiAgcGx1Z2luUmVmOiAnSE1TQWRzLlJld2FyZCcsXHJcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUmV3YXJkIHtcclxuXHJcblxyXG4gIEBDb3Jkb3ZhKClcclxuICBvbihldmVudE5hbWU6IFJld2FyZEFkRXZlbnRzLCBoYW5kbGVyOiAoKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgfVxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgYXN5bmMgY3JlYXRlKG9wdGlvbnM6IFJld2FyZEFkT3B0aW9ucyk6IFByb21pc2U8UmV3YXJkPiB7XHJcbiAgICByZXR1cm5cclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgbG9hZEFkKGFkUGFyYW06IEFkUGFyYW0pOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVyblxyXG4gIH1cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIHNob3coKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm5cclxuICB9XHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBwYXVzZSgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVyblxyXG4gIH1cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIHJlc3VtZSgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVyblxyXG4gIH1cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIGRlc3Ryb3koKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm5cclxuICB9XHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBpc0xvYWRlZCgpOiBQcm9taXNlPElzTG9hZGVkUmVzdWx0PiB7XHJcbiAgICByZXR1cm5cclxuICB9XHJcbn1cclxuXHJcblxyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnSG1zQWRzJyxcclxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1obXMtYWRzJyxcclxuICBwbHVnaW5SZWY6ICdITVNBZHMuU3BsYXNoJyxcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddXHJcbn0pXHJcbmNsYXNzIFNwbGFzaCB7XHJcblxyXG4gIEBDb3Jkb3ZhKClcclxuICBvbihldmVudE5hbWU6IFNwbGFzaEFkRXZlbnRzLCBoYW5kbGVyOiAoKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgfVxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgYXN5bmMgY3JlYXRlKG9wdGlvbnM6IFNwbGFzaEFkT3B0aW9ucyk6IFByb21pc2U8U3BsYXNoPiB7XHJcbiAgICByZXR1cm5cclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgbG9hZChvcHRpb25zOiBTcGxhc2hBZExvYWRPcHRpb25zKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm5cclxuICB9XHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBzaG93KCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuXHJcbiAgfVxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgZGVzdHJveSgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVyblxyXG4gIH1cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIGNhbmNlbCgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVyblxyXG4gIH1cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIHBhdXNlKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIHJlc3VtZSgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVyblxyXG4gIH1cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIGlzTG9hZGVkKCk6IFByb21pc2U8SXNMb2FkZWRSZXN1bHQ+IHtcclxuICAgIHJldHVyblxyXG4gIH1cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIGlzTG9hZGluZygpOiBQcm9taXNlPElzTG9hZGluZ1Jlc3VsdD4ge1xyXG4gICAgcmV0dXJuXHJcbiAgfVxyXG59XHJcblxyXG5cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ0htc0FkcycsXHJcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4taG1zLWFkcycsXHJcbiAgcGx1Z2luUmVmOiAnSE1TQWRzLk5hdGl2ZScsXHJcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXVxyXG59KVxyXG5jbGFzcyBOYXRpdmUge1xyXG5cclxuXHJcbiAgQENvcmRvdmEoKVxyXG4gIG9uKGV2ZW50TmFtZTogTmF0aXZlQWRFdmVudHMsIGhhbmRsZXI6ICgpID0+IHZvaWQpOiB2b2lkIHtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlfSlcclxuICBzY3JvbGwoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm5cclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgYXN5bmMgY3JlYXRlKG9wdGlvbnM6IE5hdGl2ZUFkT3B0aW9ucyk6IFByb21pc2U8TmF0aXZlPiB7XHJcbiAgICByZXR1cm5cclxuICB9XHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBsb2FkQWQocGFyYW1zOiBOYXRpdmVBZExvYWRPcHRpb25zKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm5cclxuICB9XHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBpc0xvYWRlZCgpOiBQcm9taXNlPElzTG9hZGVkUmVzdWx0PiB7XHJcbiAgICByZXR1cm5cclxuICB9XHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBpc0xvYWRpbmcoKTogUHJvbWlzZTxJc0xvYWRpbmdSZXN1bHQ+IHtcclxuICAgIHJldHVyblxyXG4gIH1cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIHNob3coKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm5cclxuICB9XHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBkZXN0cm95KCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuXHJcbiAgfVxyXG59XHJcblxyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnSG1zQWRzJyxcclxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1obXMtYWRzJywgLy8gbnBtIHBhY2thZ2UgbmFtZSwgZXhhbXBsZTogY29yZG92YS1wbHVnaW4tY2FtZXJhXHJcbiAgcGx1Z2luUmVmOiAnSE1TQWRzJywgLy8gdGhlIHZhcmlhYmxlIHJlZmVyZW5jZSB0byBjYWxsIHRoZSBwbHVnaW4sIGV4YW1wbGU6IG5hdmlnYXRvci5nZW9sb2NhdGlvblxyXG4gIHJlcG86ICcnLCAvLyB0aGUgZ2l0aHViIHJlcG9zaXRvcnkgVVJMIGZvciB0aGUgcGx1Z2luXHJcbiAgaW5zdGFsbDogJycsIC8vIE9QVElPTkFMIGluc3RhbGwgY29tbWFuZCwgaW4gY2FzZSB0aGUgcGx1Z2luIHJlcXVpcmVzIHZhcmlhYmxlc1xyXG4gIGluc3RhbGxWYXJpYWJsZXM6IFtdLCAvLyBPUFRJT05BTCB0aGUgcGx1Z2luIHJlcXVpcmVzIHZhcmlhYmxlc1xyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJ10gLy8gQXJyYXkgb2YgcGxhdGZvcm1zIHN1cHBvcnRlZCwgZXhhbXBsZTogWydBbmRyb2lkJywgJ2lPUyddXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEhtc0FkcyBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcclxuXHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEludGVyc3RpdGlhbCA9IEludGVyc3RpdGlhbDtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgQmFubmVyID0gQmFubmVyO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBTcGxhc2ggPSBTcGxhc2g7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFJld2FyZCA9IFJld2FyZDtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgTmF0aXZlID0gTmF0aXZlO1xyXG5cclxuXHJcbiAgcHVibGljIENvbG9yID0gQ29sb3JcclxuICBwdWJsaWMgQWRDb250ZW50Q2xhc3NpZmljYXRpb24gPSBBZENvbnRlbnRDbGFzc2lmaWNhdGlvblxyXG4gIHB1YmxpYyBBdWRpb0ZvY3VzVHlwZSA9IEF1ZGlvRm9jdXNUeXBlXHJcbiAgcHVibGljIENvbnNlbnQgPSBDb25zZW50XHJcbiAgcHVibGljIENvbnNlbnREZWJ1ZyA9IENvbnNlbnREZWJ1Z1xyXG4gIHB1YmxpYyBVbmRlckFnZU9mUHJvbWlzZSA9IFVuZGVyQWdlT2ZQcm9taXNlXHJcbiAgcHVibGljIENoaWxkUHJvdGVjdGlvbiA9IENoaWxkUHJvdGVjdGlvblxyXG4gIHB1YmxpYyBOb25QZXJzb25hbGl6ZWRBZCA9IE5vblBlcnNvbmFsaXplZEFkXHJcbiAgcHVibGljIE9yaWVudGF0aW9uID0gU2NyZWVuT3JpZW50YXRpb25cclxuICBwdWJsaWMgRXJyb3JDb2RlcyA9IEVycm9yQ29kZXNcclxuICBwdWJsaWMgR2VuZGVyID0gR2VuZGVyXHJcbiAgcHVibGljIE5hdGl2ZUFkRXZlbnRzID0gTmF0aXZlQWRFdmVudHNcclxuICBwdWJsaWMgTWVkaWFBc3BlY3QgPSBNZWRpYUFzcGVjdFxyXG4gIHB1YmxpYyBDaG9pY2VzUG9zaXRpb24gPSBDaG9pY2VzUG9zaXRpb25cclxuICBwdWJsaWMgTWVkaWFEaXJlY3Rpb24gPSBNZWRpYURpcmVjdGlvblxyXG4gIHB1YmxpYyBTcGxhc2hBZEV2ZW50cyA9IFNwbGFzaEFkRXZlbnRzXHJcbiAgcHVibGljIFJld2FyZEFkRXZlbnRzID0gUmV3YXJkQWRFdmVudHNcclxuICBwdWJsaWMgSW50ZXJzdGl0aWFsQWRFdmVudHMgPSBJbnRlcnN0aXRpYWxBZEV2ZW50c1xyXG4gIHB1YmxpYyBCYW5uZXJBZEV2ZW50cyA9IEJhbm5lckFkRXZlbnRzXHJcbiAgcHVibGljIEJhbm5lckFkU2l6ZSA9IEJhbm5lckFkU2l6ZVxyXG4gIHB1YmxpYyBBbmNob3IgPSBBbmNob3JcclxuXHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgYXN5bmMgaXNJbml0KCk6IFByb21pc2U8Ym9vbGVhbj57XHJcbiAgICByZXR1cm5cclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgaW5pdChvcHRpb25zOiBJbml0T3B0aW9ucyk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuXHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIGRpc2Nvbm5lY3RGcm9tUmVmZXJyZXJDbGllbnQoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm5cclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgZ2V0T2FpZFJlc3VsdCgpOiBQcm9taXNlPE9haWRSZXN1bHQ+IHtcclxuICAgIHJldHVyblxyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBnZXRSZWZlcnJlckRldGFpbHMoaXNUZXN0OiBib29sZWFuKTogUHJvbWlzZTxSZWZlcnJlckRldGFpbHM+IHtcclxuICAgIHJldHVyblxyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICB2ZXJpZnlBZElkKGFkSWQ6IHN0cmluZywgaXNMaW1pdEFkVHJhY2tpbmc6IGJvb2xlYW4pOiBQcm9taXNlPFZlcmlmeVJlc3VsdD4ge1xyXG4gICAgcmV0dXJuXHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIHNldFJlcXVlc3RPcHRpb25zKG9wdGlvbnM6IEFkUGFyYW0pOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVyblxyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBnZXRTREtWZXJzaW9uKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuXHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIHNldFZpZGVvTXV0ZWQobXV0ZWQ6IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVyblxyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBzZXRWaWRlb1ZvbHVtZSh2b2x1bWU6IG51bWJlcik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuXHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIGFkZFRlc3REZXZpY2VJZChpZDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm5cclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgZ2V0VGVzdERldmljZUlkKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuXHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIHNldFVuZGVyQWdlT2ZQcm9taXNlKGI6IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVyblxyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBzZXRDb25zZW50U3RhdHVzKHN0YXR1czogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm5cclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgc2V0RGVidWdOZWVkQ29uc2VudChuZWVkOiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVyblxyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICByZXF1ZXN0Q29uc2VudFVwZGF0ZSgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVyblxyXG4gIH1cclxuXHJcblxyXG59XHJcblxyXG5cclxuXHJcbiJdfQ==