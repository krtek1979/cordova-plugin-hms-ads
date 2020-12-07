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

import { Ads, asyncExec } from './utils';
import { NativeAdProps, NativeAdEvents, NativeAdOptions, NativeAdConfiguration, NativeAdLoadOptions, IsLoadedResult, IsLoadingResult } from './interfaces';

const nativeViews = new Map<string, Native>()
export class NativeAlreadyDefinedError extends Error {
  public NativeAlreadyDefinedError() {
    this.name = "NativeAlreadyDefinedError"
    this.message = "Native object with the id specified already defined"
  }
}

export class Native extends Ads {

  public element: HTMLElement
  public props: NativeAdProps

  constructor() {
    super(Native.name.toLowerCase())
    this.props = {} as NativeAdProps
  }

  on(eventName: NativeAdEvents, handler: () => void): void {
    super.on(eventName, handler);
  }

  private beforeCreateHook(options: NativeAdOptions): void {
    const elementId: string = options.div;

    if (nativeViews.has(elementId))
      throw new NativeAlreadyDefinedError()

    this.element = document.getElementById(elementId)
    this.props = this.refreshProps()
    console.log(`Props: ${JSON.stringify(this.props)}`);

    const mutationObserver = new MutationObserver(this.handleMutation);
    mutationObserver.observe(this.element, { attributes: true })
    nativeViews.set(elementId, this)

  }

  async create(options: NativeAdOptions): Promise<Native> {
    if (this.id != null)
      return this

    this.beforeCreateHook(options);

    const result = await asyncExec('HMSAds', 'createAd', [this.objectName, options])
    this.id = result.id
    return this
  }

  private refreshProps(): NativeAdProps {
    const elementRect = this.element.getBoundingClientRect()
    const elementStyle = window.getComputedStyle(this.element, null)

    this.props.x = elementRect.x;
    this.props.y = elementRect.y;
    this.props.width = elementRect.width;
    this.props.height = elementRect.height;
    this.props.paddingLeft = parseInt(elementStyle.getPropertyValue("padding-left"));
    this.props.paddingTop = parseInt(elementStyle.getPropertyValue("padding-top"));
    this.props.borderLeft = parseInt(elementStyle.getPropertyValue("border-left-width"));
    this.props.borderTop = parseInt(elementStyle.getPropertyValue("border-top-width"));

    return this.props
  }


  private handleMutation() {
    this.setProps(this.refreshProps())
  }

  // Call this function, from ionic application for scroll events
  scroll(): Promise<void>{
    const nativeRect = this.element.getBoundingClientRect()

    if (this.props.x === nativeRect.x && this.props.y === nativeRect.y)
      return;

    return this.setProps(this.refreshProps())
  }


  loadAd(params: NativeAdLoadOptions): Promise<void> {
    return this.call('loadAd', params)
  }
  isLoaded(): Promise<IsLoadedResult> {
    return this.call('isLoaded')
  }
  isLoading(): Promise<IsLoadingResult> {
    return this.call('isLoading')
  }
  show(): Promise<void> {
    return this.call('show', this.refreshProps())
  }
  destroy(): Promise<void> {
    nativeViews.delete(this.element.id)
    return this.call('destroy')
  }
  setProps(props?: NativeAdProps): Promise<void> {
    return this.call('setProps', props)
  }



}


function handleDisplacement(event) {
  for (let [objId, nativeAd] of nativeViews) {
    const nativeRect = nativeAd.element.getBoundingClientRect()

    if (nativeAd.props.x === nativeRect.x && nativeAd.props.y === nativeRect.y)
      continue

    nativeAd.props.x = nativeRect.x
    nativeAd.props.y = nativeRect.y


    nativeAd.setProps(nativeAd.props)
  }
}

const mutationObserver: MutationObserver = new MutationObserver(handleDisplacement)
mutationObserver.observe(document.body, { attributes: true, childList: true, subtree: true })
window.addEventListener('scroll', handleDisplacement)

