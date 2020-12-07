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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gender = exports.MediaDirection = exports.ChoicesPosition = exports.MediaAspect = exports.BannerAdSize = exports.Color = exports.AdContentClassification = exports.AudioFocusType = exports.Consent = exports.ConsentDebug = exports.UnderAgeOfPromise = exports.ChildProtection = exports.NonPersonalizedAd = exports.ScreenOrientation = exports.InstallReferrerResponses = exports.Anchor = exports.ErrorCodes = exports.NativeAdEvents = exports.InterstitialAdEvents = exports.RewardAdEvents = exports.SplashAdEvents = exports.BannerAdEvents = void 0;
// *************************************
// EVENT ENUMS
var BannerAdEvents;
(function (BannerAdEvents) {
    BannerAdEvents["LOADED"] = "loaded";
    BannerAdEvents["FAILED"] = "failed";
    BannerAdEvents["OPENED"] = "opened";
    BannerAdEvents["CLICKED"] = "clicked";
    BannerAdEvents["LEAVE"] = "leave";
    BannerAdEvents["CLOSED"] = "closed";
})(BannerAdEvents = exports.BannerAdEvents || (exports.BannerAdEvents = {}));
var SplashAdEvents;
(function (SplashAdEvents) {
    SplashAdEvents["LOADED"] = "loaded";
    SplashAdEvents["LOAD_FAILED"] = "loadFailed";
    SplashAdEvents["DISMISSED"] = "dismissed";
    SplashAdEvents["SHOWED"] = "showed";
    SplashAdEvents["CLICK"] = "click";
})(SplashAdEvents = exports.SplashAdEvents || (exports.SplashAdEvents = {}));
var RewardAdEvents;
(function (RewardAdEvents) {
    RewardAdEvents["LOADED"] = "loaded";
    RewardAdEvents["LOAD_FAILED"] = "loadFailed";
    RewardAdEvents["OPENED"] = "opened";
    RewardAdEvents["SHOW_FAILED"] = "showFailed";
    RewardAdEvents["CLOSED"] = "closed";
    RewardAdEvents["REWARDED"] = "rewarded";
})(RewardAdEvents = exports.RewardAdEvents || (exports.RewardAdEvents = {}));
var InterstitialAdEvents;
(function (InterstitialAdEvents) {
    InterstitialAdEvents["LOADED"] = "loaded";
    InterstitialAdEvents["LOAD_FAILED"] = "loadFailed";
    InterstitialAdEvents["DISMISSED"] = "dismissed";
    InterstitialAdEvents["SHOWED"] = "showed";
    InterstitialAdEvents["CLICK"] = "click";
    InterstitialAdEvents["METADATA_CHANGED"] = "metadaChanged";
})(InterstitialAdEvents = exports.InterstitialAdEvents || (exports.InterstitialAdEvents = {}));
var NativeAdEvents;
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
})(NativeAdEvents = exports.NativeAdEvents || (exports.NativeAdEvents = {}));
// **************************
// CONSTANTS
var ErrorCodes;
(function (ErrorCodes) {
    ErrorCodes[ErrorCodes["INNER"] = 0] = "INNER";
    ErrorCodes[ErrorCodes["INVALID_REQUEST"] = 1] = "INVALID_REQUEST";
    ErrorCodes[ErrorCodes["NETWORK_ERROR"] = 2] = "NETWORK_ERROR";
    ErrorCodes[ErrorCodes["NO_AD"] = 3] = "NO_AD";
    ErrorCodes[ErrorCodes["AD_LOADING"] = 4] = "AD_LOADING";
    ErrorCodes[ErrorCodes["LOW_API"] = 5] = "LOW_API";
    ErrorCodes[ErrorCodes["BANNER_AD_EXPIRE"] = 6] = "BANNER_AD_EXPIRE";
    ErrorCodes[ErrorCodes["BANNER_AD_CANCEL"] = 7] = "BANNER_AD_CANCEL";
})(ErrorCodes = exports.ErrorCodes || (exports.ErrorCodes = {}));
var Anchor;
(function (Anchor) {
    Anchor["TOP"] = "top";
    Anchor["BOTTOM"] = "bottom";
})(Anchor = exports.Anchor || (exports.Anchor = {}));
var InstallReferrerResponses;
(function (InstallReferrerResponses) {
    InstallReferrerResponses[InstallReferrerResponses["SERVICE_DISCONNECTED"] = -1] = "SERVICE_DISCONNECTED";
    InstallReferrerResponses[InstallReferrerResponses["DEVELOPER_ERROR"] = 3] = "DEVELOPER_ERROR";
    InstallReferrerResponses[InstallReferrerResponses["SERVICE_UNAVAILABLE"] = 1] = "SERVICE_UNAVAILABLE";
    InstallReferrerResponses[InstallReferrerResponses["OK"] = 0] = "OK";
    InstallReferrerResponses[InstallReferrerResponses["FEATURE_NOT_SUPPORTED"] = 2] = "FEATURE_NOT_SUPPORTED";
})(InstallReferrerResponses = exports.InstallReferrerResponses || (exports.InstallReferrerResponses = {}));
var ScreenOrientation;
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
})(ScreenOrientation = exports.ScreenOrientation || (exports.ScreenOrientation = {}));
var NonPersonalizedAd;
(function (NonPersonalizedAd) {
    NonPersonalizedAd[NonPersonalizedAd["ALLOW_ALL"] = 0] = "ALLOW_ALL";
    NonPersonalizedAd[NonPersonalizedAd["ALLOW_NON_PERSONALIZED"] = 1] = "ALLOW_NON_PERSONALIZED";
})(NonPersonalizedAd = exports.NonPersonalizedAd || (exports.NonPersonalizedAd = {}));
var ChildProtection;
(function (ChildProtection) {
    ChildProtection[ChildProtection["TAG_FOR_CHILD_PROTECTION_UNSPECIFIED"] = -1] = "TAG_FOR_CHILD_PROTECTION_UNSPECIFIED";
    ChildProtection[ChildProtection["TAG_FOR_CHILD_PROTECTION_FALSE"] = 0] = "TAG_FOR_CHILD_PROTECTION_FALSE";
    ChildProtection[ChildProtection["TAG_FOR_CHILD_PROTECTION_TRUE"] = 1] = "TAG_FOR_CHILD_PROTECTION_TRUE";
})(ChildProtection = exports.ChildProtection || (exports.ChildProtection = {}));
var UnderAgeOfPromise;
(function (UnderAgeOfPromise) {
    UnderAgeOfPromise[UnderAgeOfPromise["PROMISE_UNSPECIFIED"] = -1] = "PROMISE_UNSPECIFIED";
    UnderAgeOfPromise[UnderAgeOfPromise["PROMISE_FALSE"] = 0] = "PROMISE_FALSE";
    UnderAgeOfPromise[UnderAgeOfPromise["PROMISE_TRUE"] = 1] = "PROMISE_TRUE";
})(UnderAgeOfPromise = exports.UnderAgeOfPromise || (exports.UnderAgeOfPromise = {}));
var ConsentDebug;
(function (ConsentDebug) {
    ConsentDebug[ConsentDebug["CONSENT_DEBUG_DISABLED"] = 0] = "CONSENT_DEBUG_DISABLED";
    ConsentDebug[ConsentDebug["CONSENT_DEBUG_NEED_CONSENT"] = 1] = "CONSENT_DEBUG_NEED_CONSENT";
    ConsentDebug[ConsentDebug["CONSENT_DEBUG_NOT_NEED_CONSENT"] = 2] = "CONSENT_DEBUG_NOT_NEED_CONSENT";
})(ConsentDebug = exports.ConsentDebug || (exports.ConsentDebug = {}));
var Consent;
(function (Consent) {
    Consent[Consent["CONSENT_PERSONALIZED"] = 0] = "CONSENT_PERSONALIZED";
    Consent[Consent["CONSENT_NON_PERSONALIZED"] = 1] = "CONSENT_NON_PERSONALIZED";
    Consent[Consent["CONSENT_UNKNOWN"] = 2] = "CONSENT_UNKNOWN";
})(Consent = exports.Consent || (exports.Consent = {}));
var AudioFocusType;
(function (AudioFocusType) {
    AudioFocusType[AudioFocusType["GAIN_AUDIO_FOCUS_ALL"] = 0] = "GAIN_AUDIO_FOCUS_ALL";
    AudioFocusType[AudioFocusType["NOT_GAIN_AUDIO_FOCUS_WHEN_MUTE"] = 1] = "NOT_GAIN_AUDIO_FOCUS_WHEN_MUTE";
    AudioFocusType[AudioFocusType["NOT_GAIN_AUDIO_FOCUS_ALL"] = 2] = "NOT_GAIN_AUDIO_FOCUS_ALL";
})(AudioFocusType = exports.AudioFocusType || (exports.AudioFocusType = {}));
var AdContentClassification;
(function (AdContentClassification) {
    AdContentClassification["AD_CONTENT_CLASSIFICATION_A"] = "A";
    AdContentClassification["AD_CONTENT_CLASSIFICATION_PI"] = "PI";
    AdContentClassification["AD_CONTENT_CLASSIFICATION_UNKOWN"] = "";
    AdContentClassification["AD_CONTENT_CLASSIFICATION_J"] = "J";
    AdContentClassification["AD_CONTENT_CLASSIFICATION_W"] = "W";
})(AdContentClassification = exports.AdContentClassification || (exports.AdContentClassification = {}));
var Color;
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
})(Color = exports.Color || (exports.Color = {}));
var BannerAdSize;
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
})(BannerAdSize = exports.BannerAdSize || (exports.BannerAdSize = {}));
var MediaAspect;
(function (MediaAspect) {
    MediaAspect[MediaAspect["ASPECT_ANY"] = 1] = "ASPECT_ANY";
    MediaAspect[MediaAspect["ASPECT_CUSTOM_SIZE"] = -1] = "ASPECT_CUSTOM_SIZE";
    MediaAspect[MediaAspect["ASPECT_LANDSCAPE"] = 2] = "ASPECT_LANDSCAPE";
    MediaAspect[MediaAspect["ASPECT_PORTRAIT"] = 3] = "ASPECT_PORTRAIT";
    MediaAspect[MediaAspect["ASPECT_SQUARE"] = 4] = "ASPECT_SQUARE";
    MediaAspect[MediaAspect["ASPECT_UNKNOWN"] = 0] = "ASPECT_UNKNOWN";
})(MediaAspect = exports.MediaAspect || (exports.MediaAspect = {}));
var ChoicesPosition;
(function (ChoicesPosition) {
    ChoicesPosition[ChoicesPosition["BOTTOM_LEFT"] = 3] = "BOTTOM_LEFT";
    ChoicesPosition[ChoicesPosition["BOTTOM_RIGHT"] = 2] = "BOTTOM_RIGHT";
    ChoicesPosition[ChoicesPosition["INVISIBLE"] = 4] = "INVISIBLE";
    ChoicesPosition[ChoicesPosition["TOP_LEFT"] = 0] = "TOP_LEFT";
    ChoicesPosition[ChoicesPosition["TOP_RIGHT"] = 1] = "TOP_RIGHT";
})(ChoicesPosition = exports.ChoicesPosition || (exports.ChoicesPosition = {}));
var MediaDirection;
(function (MediaDirection) {
    MediaDirection[MediaDirection["ANY"] = 0] = "ANY";
    MediaDirection[MediaDirection["LANDSCAPE"] = 2] = "LANDSCAPE";
    MediaDirection[MediaDirection["PORTRAIT"] = 1] = "PORTRAIT";
})(MediaDirection = exports.MediaDirection || (exports.MediaDirection = {}));
var Gender;
(function (Gender) {
    Gender[Gender["FEMALE"] = 2] = "FEMALE";
    Gender[Gender["MALE"] = 1] = "MALE";
    Gender[Gender["UNKNOWN"] = 0] = "UNKNOWN";
})(Gender = exports.Gender || (exports.Gender = {}));
//# sourceMappingURL=interfaces.js.map