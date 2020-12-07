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
import { NativeAdProps, NativeAdEvents, NativeAdOptions, NativeAdLoadOptions, IsLoadedResult, IsLoadingResult } from './interfaces';
export declare class NativeAlreadyDefinedError extends Error {
    NativeAlreadyDefinedError(): void;
}
export declare class Native extends Ads {
    element: HTMLElement;
    props: NativeAdProps;
    constructor();
    on(eventName: NativeAdEvents, handler: () => void): void;
    private beforeCreateHook;
    create(options: NativeAdOptions): Promise<Native>;
    private refreshProps;
    private handleMutation;
    scroll(): Promise<void>;
    loadAd(params: NativeAdLoadOptions): Promise<void>;
    isLoaded(): Promise<IsLoadedResult>;
    isLoading(): Promise<IsLoadingResult>;
    show(): Promise<void>;
    destroy(): Promise<void>;
    setProps(props?: NativeAdProps): Promise<void>;
}
