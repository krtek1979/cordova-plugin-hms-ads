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
import { Ads } from './utils';
import { SplashAdEvents, SplashAdOptions, SplashAdLoadOptions, IsLoadedResult, IsLoadingResult } from './interfaces';
export declare class Splash extends Ads {
    constructor();
    on(eventName: SplashAdEvents, handler: () => void): void;
    create(options: SplashAdOptions): Promise<Splash>;
    load(options: SplashAdLoadOptions): Promise<void>;
    show(): Promise<void>;
    destroy(): Promise<void>;
    cancel(): Promise<void>;
    pause(): Promise<void>;
    resume(): Promise<void>;
    isLoaded(): Promise<IsLoadedResult>;
    isLoading(): Promise<IsLoadingResult>;
}
