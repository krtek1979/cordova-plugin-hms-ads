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
import { RewardAdEvents, RewardAdOptions, AdParam, IsLoadedResult } from './interfaces';

export class Reward extends Ads {

  constructor() {
    super(Reward.name.toLowerCase())
  }

  on(eventName: RewardAdEvents, handler: () => void): void {
    super.on(eventName, handler);
  }
  async create(options: RewardAdOptions): Promise<Reward> {
    return <Promise<Reward>>super.create(options);
  }


  loadAd(adParam: AdParam): Promise<void> {
    return this.call('loadAd', adParam)
  }
  show(): Promise<void> {
    return this.call('show')
  }
  pause(): Promise<void> {
    return this.call('pause')
  }
  resume(): Promise<void> {
    return this.call('resume')
  }
  destroy(): Promise<void> {
    return this.call('destroy')
  }
  isLoaded(): Promise<IsLoadedResult> {
    return this.call('isLoaded')
  }
}

