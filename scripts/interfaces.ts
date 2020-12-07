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

export interface AdParam {
  gender?: Gender,
  adContentClassification?: AdContentClassification,
  tagForUnderAgeOfPromise?: UnderAgeOfPromise,
  tagForChildProtection?: ChildProtection,
  nonPersonalizedAd?: NonPersonalizedAd // Check this
  appCountry?: string,
  appLang?: string,
  countryCode?: string
}

export interface BannerAdOptions {
  adId?: string,
  bannerAdSize?: BannerAdSize,
  bgColor?: Color,
  anchor?: 'top' | 'bottom',
  bannerRefresh?: number // long
}

export interface SplashAdLogoOptions {
  hidden?: boolean,
  anchor?: 'top' | 'bottom',
  owner?: string,
  copyright?: string,
  bg?: Color
}

export interface SplashAdOptions {
  preload?: boolean,
  orientation?: ScreenOrientation,
  adId?: string,
  ad?: AdParam,
  sloganResId?: string,
  wideSloganResId?: string,
  audioFocusType?: AudioFocusType,
  logo?: SplashAdLogoOptions
}

export interface SplashAdLoadOptions {
  orientation?: ScreenOrientation,
  adId?: string,
  ad?: AdParam
}

export interface RewardVerifyConfig {
  data?: string,
  userId?: string
}

export interface RewardAdOptions {
  adId?: string,
  userId?: string,
  data?: string,
  immersive?: boolean,
  rewardVerifyConfig?: RewardVerifyConfig
}

export interface InterstitialAdOptions {
  adId?: string
}

export interface NativeAdOptions {
  div?: string,
  template?: "small" | "full" | "banner" | "video"
  bg?: Color
}

export interface AdSize {
  width?: number,
  height?: number
}

export interface VideoConfiguration {
  audioFocusType?: AudioFocusType,
  clickToFullScreenRequest?: boolean,
  startMuted?: boolean
}

export interface NativeAdConfiguration {
  adSize?: AdSize,
  choicesPosition?: ChoicesPosition,
  mediaAspect?: MediaAspect,
  mediaDirection?: MediaDirection,
  returnUrlsForImages?: boolean,
  requestCustomDislikeThisAd?: boolean,
  requestMultiImages?: boolean,
  videoConfiguration?: VideoConfiguration
}

export interface NativeAdLoadOptions {
  adId?: string,
  ad?: AdParam,
  nativeAdOptions?: NativeAdConfiguration
}

export interface NativeAdProps {
  width?: number,
  height?: number,
  paddingLeft?: number,
  paddingTop?: number,
  borderLeft?: number,
  borderTop?: number,
  x?: number,
  y?: number
}


export interface InitOptions {
  appCode?: string,
  bannerFloat?: boolean
}


// *************************************
// RESULTS

export interface IsLoadingResult {
  isLoading?: boolean
}

export interface IsLoadedResult {
  isLoaded?: boolean
}

export interface OaidResult {
  id?: string,
  isLimitAdTracingEnabled?: boolean
}

export interface IsInitResult {
  isInit: boolean
}

export interface ReferrerDetails {
  responseCode?: number,
  installReferrer?: string,
  referrerClickTimestamp?: number,
  installBeginTimestamp?: number
}

export interface VerifyResult {
  result?: boolean
}

// *************************************
// EVENT ENUMS

export enum BannerAdEvents {
  LOADED = 'loaded',
  FAILED = 'failed',
  OPENED = 'opened',
  CLICKED = 'clicked',
  LEAVE = 'leave',
  CLOSED = 'closed'
}

export enum SplashAdEvents {
  LOADED = 'loaded',
  LOAD_FAILED = 'loadFailed',
  DISMISSED = 'dismissed',
  SHOWED = 'showed',
  CLICK = 'click'
}

export enum RewardAdEvents {
  LOADED = 'loaded',
  LOAD_FAILED = 'loadFailed',
  OPENED = 'opened',
  SHOW_FAILED = 'showFailed',
  CLOSED = 'closed',
  REWARDED = 'rewarded'
}

export enum InterstitialAdEvents {
  LOADED = 'loaded',
  LOAD_FAILED = 'loadFailed',
  DISMISSED = 'dismissed',
  SHOWED = 'showed',
  CLICK = 'click',
  METADATA_CHANGED = 'metadaChanged'
}

export enum NativeAdEvents {
  NATIVE_AD_LOADED = 'nativeAdLoaded',
  DISLIKED = 'disliked',
  VIDEO_START = 'videoStart',
  VIDEO_PLAY = 'videoPlay',
  VIDEO_PAUSE = 'videoPause',
  VIDEO_END = 'videoEnd',
  VIDEO_MUTE = 'videoMute',
  LOADED = 'loaded',
  FAILED = 'failed',
  OPENED = 'opened',
  CLICKED = 'clicked',
  LEAVE = 'leave',
  CLOSED = 'closed'
}

// **************************
// CONSTANTS
export enum ErrorCodes {
  INNER = 0,
  INVALID_REQUEST = 1,
  NETWORK_ERROR = 2,
  NO_AD = 3,
  AD_LOADING = 4,
  LOW_API = 5,
  BANNER_AD_EXPIRE = 6,
  BANNER_AD_CANCEL = 7,
}

export enum Anchor {
	TOP = "top",
	BOTTOM = "bottom"
}

export enum InstallReferrerResponses{
  SERVICE_DISCONNECTED = -1,
  DEVELOPER_ERROR = 3,
  SERVICE_UNAVAILABLE = 1,
  OK = 0,
  FEATURE_NOT_SUPPORTED = 2
}


export enum ScreenOrientation {
  SCREEN_ORIENTATION_LANDSCAPE = 0,
  SCREEN_ORIENTATION_UNSPECIFIED = -1,
  SCREEN_ORIENTATION_PORTRAIT = 1,
  SCREEN_ORIENTATION_USER = 2,
  SCREEN_ORIENTATION_BEHIND = 3,
  SCREEN_ORIENTATION_SENSOR = 4,
  SCREEN_ORIENTATION_NOSENSOR = 5,
  SCREEN_ORIENTATION_SENSOR_LANDSCAPE = 6,
  SCREEN_ORIENTATION_SENSOR_PORTRAIT = 7,
  SCREEN_ORIENTATION_REVERSE_LANDSCAPE = 8,
  SCREEN_ORIENTATION_REVERSE_PORTRAIT = 9,
  SCREEN_ORIENTATION_FULL_SENSOR = 10,
  SCREEN_ORIENTATION_USER_LANDSCAPE = 11,
  SCREEN_ORIENTATION_USER_PORTRAIT = 12,
  SCREEN_ORIENTATION_FULL_USER = 13,
  SCREEN_ORIENTATION_LOCKED = 14,
}

export enum NonPersonalizedAd {
  ALLOW_ALL = 0,
  ALLOW_NON_PERSONALIZED = 1,
}

export enum ChildProtection {
  TAG_FOR_CHILD_PROTECTION_UNSPECIFIED = -1,
  TAG_FOR_CHILD_PROTECTION_FALSE = 0,
  TAG_FOR_CHILD_PROTECTION_TRUE = 1,
}

export enum UnderAgeOfPromise {
  PROMISE_UNSPECIFIED = -1,
  PROMISE_FALSE = 0,
  PROMISE_TRUE = 1
}

export enum ConsentDebug {
  CONSENT_DEBUG_DISABLED = 0,
  CONSENT_DEBUG_NEED_CONSENT = 1,
  CONSENT_DEBUG_NOT_NEED_CONSENT = 2
}

export enum Consent {
  CONSENT_PERSONALIZED = 0,
  CONSENT_NON_PERSONALIZED = 1,
  CONSENT_UNKNOWN = 2
}

export enum AudioFocusType {
  GAIN_AUDIO_FOCUS_ALL = 0,
  NOT_GAIN_AUDIO_FOCUS_WHEN_MUTE = 1,
  NOT_GAIN_AUDIO_FOCUS_ALL = 2
}
export enum AdContentClassification {
  AD_CONTENT_CLASSIFICATION_A = "A",
  AD_CONTENT_CLASSIFICATION_PI = "PI",
  AD_CONTENT_CLASSIFICATION_UNKOWN = "",
  AD_CONTENT_CLASSIFICATION_J = "J",
  AD_CONTENT_CLASSIFICATION_W = "W",
}

export enum Color {
  RED = "RED",
  DKGRAY = "DKGRAY",
  GRAY = "GRAY",
  WHITE = "WHITE",
  BLUE = "BLUE",
  BLACK = "BLACK",
  LTGRAY = "LTGRAY",
  MAGENTA = "MAGENTA",
  YELLOW = "YELLOW",
  CYAN = "CYAN",
  GREEN = "GREEN",
  TRANSPARENT = "TRANSPARENT"
}


export enum BannerAdSize {
  BANNER_SIZE_360_57 = "BANNER_SIZE_360_57",
  BANNER_SIZE_360_144 = "BANNER_SIZE_360_144",
  BANNER_SIZE_160_600 = "BANNER_SIZE_160_600",
  BANNER_SIZE_300_250 = "BANNER_SIZE_300_250",
  BANNER_SIZE_320_100 = "BANNER_SIZE_320_100",
  BANNER_SIZE_320_50 = "BANNER_SIZE_320_50",
  BANNER_SIZE_468_60 = "BANNER_SIZE_468_60",
  BANNER_SIZE_728_90 = "BANNER_SIZE_728_90",
  BANNER_SIZE_DYNAMIC = "BANNER_SIZE_DYNAMIC",
  BANNER_SIZE_INVALID = "BANNER_SIZE_INVALID",
  BANNER_SIZE_SMART = "BANNER_SIZE_SMART"
}

export enum MediaAspect {
  ASPECT_ANY = 1,
  ASPECT_CUSTOM_SIZE = -1,
  ASPECT_LANDSCAPE = 2,
  ASPECT_PORTRAIT = 3,
  ASPECT_SQUARE = 4,
  ASPECT_UNKNOWN = 0
}

export enum ChoicesPosition {
  BOTTOM_LEFT = 3,
  BOTTOM_RIGHT = 2,
  INVISIBLE = 4,
  TOP_LEFT = 0,
  TOP_RIGHT = 1
}

export enum MediaDirection {
  ANY = 0,
  LANDSCAPE = 2,
  PORTRAIT = 1
}

export enum Gender {
  FEMALE = 2,
  MALE = 1,
  UNKNOWN = 0
}
