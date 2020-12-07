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
import { InterstitialAdEvents, InterstitialAdOptions, AdParam, IsLoadedResult, IsLoadingResult } from './interfaces';

export class Interstitial extends Ads {
  constructor() {
    super(Interstitial.name.toLowerCase())
  }

  on(eventName: InterstitialAdEvents, handler: () => void): void {
    super.on(eventName, handler);
  }

  async create(options: InterstitialAdOptions): Promise<Interstitial> {
    return <Promise<Interstitial>>super.create(options);
  }


  loadAd(adParam: AdParam): Promise<void> {
    return this.call('loadAd', adParam)
  }
  show(): Promise<void> {
    return this.call('show')
  }
  destroy(): Promise<void> {
    return this.call('destroy')
  }
  isLoaded(): Promise<IsLoadedResult> {
    return this.call('isLoaded')
  }
  isLoading(): Promise<IsLoadingResult> {
    return this.call('isLoading')
  }

}

