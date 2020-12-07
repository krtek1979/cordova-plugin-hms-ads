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

import { asyncExec } from './utils';
import { InitOptions, OaidResult, ReferrerDetails, VerifyResult, AdParam, Consent, ConsentDebug, IsInitResult } from './interfaces';

export { BannerAdSize, MediaAspect, ChoicesPosition, MediaDirection, Gender, Color, AdContentClassification, NonPersonalizedAd,
 ScreenOrientation,  NativeAdEvents, InterstitialAdEvents, RewardAdEvents, SplashAdEvents, BannerAdEvents, Anchor } from './interfaces';

export { Banner } from "./banner";
export { Interstitial } from './interstitial';
export { Splash } from './splash';
export { Reward } from './reward';
export { Native } from './native';



export async function isInit(): Promise<boolean>{
  const result = await asyncExec('HMSAds', 'isInit', []);
  return result.isInit;
}
export function init(options: InitOptions): Promise<void> {
  return asyncExec('HMSAds', 'init', [options])
}

export function disconnectFromReferrerClient(): Promise<void> {
  return asyncExec('HMSAds', 'disconnectFromReferrerClient', [])
}

export function getOaidResult(): Promise<OaidResult> {
  return asyncExec('HMSAds', 'getOaidResult', [])
}

export function getReferrerDetails(isTest: boolean): Promise<ReferrerDetails> {
  return asyncExec('HMSAds', 'getReferrerDetails', [isTest])
}

export function verifyAdId(adId: string, isLimitAdTracking: boolean): Promise<VerifyResult> {
  return asyncExec('HMSAds', 'verifyAdId', [adId, isLimitAdTracking])
}

export function setRequestOptions(options: AdParam): Promise<void> {
  return asyncExec('HMSAds', 'setRequestOptions', [options])
}

export function getSDKVersion(): Promise<void> {
  return asyncExec('HMSAds', 'getSDKVersion', [])
}

export function setVideoMuted(muted: boolean): Promise<void> {
  return asyncExec('HMSAds', 'setVideoMuted', [muted])
}

export function setVideoVolume(volume: number): Promise<void> {
  return asyncExec('HMSAds', 'setVideoVolume', [volume])
}

export function addTestDeviceId(id: string): Promise<void> {
  return asyncExec('HMSAds', 'addTestDeviceId', [id])
}

export function getTestDeviceId(): Promise<void> {
  return asyncExec('HMSAds', 'getTestDeviceId', [])
}

export function setUnderAgeOfPromise(b: boolean): Promise<void> {
  return asyncExec('HMSAds', 'setUnderAgeOfPromise', [b])
}

export function setConsentStatus(status: Consent): Promise<void> {
  return asyncExec('HMSAds', 'setConsentStatus', [status])
}

export function setDebugNeedConsent(need: ConsentDebug): Promise<void> {
  return asyncExec('HMSAds', 'setDebugNeedConsent', [need])
}

export function requestConsentUpdate(): Promise<void> {
  return asyncExec('HMSAds', 'requestConsentUpdate', [])
}

