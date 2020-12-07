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
import { InitOptions, OaidResult, ReferrerDetails, VerifyResult, AdParam, Consent, ConsentDebug } from './interfaces';
export { BannerAdSize, MediaAspect, ChoicesPosition, MediaDirection, Gender, Color, AdContentClassification, NonPersonalizedAd, ScreenOrientation, NativeAdEvents, InterstitialAdEvents, RewardAdEvents, SplashAdEvents, BannerAdEvents, Anchor } from './interfaces';
export { Banner } from "./banner";
export { Interstitial } from './interstitial';
export { Splash } from './splash';
export { Reward } from './reward';
export { Native } from './native';
export declare function isInit(): Promise<boolean>;
export declare function init(options: InitOptions): Promise<void>;
export declare function disconnectFromReferrerClient(): Promise<void>;
export declare function getOaidResult(): Promise<OaidResult>;
export declare function getReferrerDetails(isTest: boolean): Promise<ReferrerDetails>;
export declare function verifyAdId(adId: string, isLimitAdTracking: boolean): Promise<VerifyResult>;
export declare function setRequestOptions(options: AdParam): Promise<void>;
export declare function getSDKVersion(): Promise<void>;
export declare function setVideoMuted(muted: boolean): Promise<void>;
export declare function setVideoVolume(volume: number): Promise<void>;
export declare function addTestDeviceId(id: string): Promise<void>;
export declare function getTestDeviceId(): Promise<void>;
export declare function setUnderAgeOfPromise(b: boolean): Promise<void>;
export declare function setConsentStatus(status: Consent): Promise<void>;
export declare function setDebugNeedConsent(need: ConsentDebug): Promise<void>;
export declare function requestConsentUpdate(): Promise<void>;
