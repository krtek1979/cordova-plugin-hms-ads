# cordova-plugin-hms-ads

## Contents

1. Introduction
2. Installation Guide
3. API Method Definition
4. Configure Description
5. Licensing and Terms

## 1. Introduction

This Cordova SDK code encapsulates the Huawei Ads Kit interface. It provides many APIs for your reference or use.

The package is described as follows:

- **src/main/com/huawei/hms/cordova/ads**: core layer that exposes AdsKit SDK functionality to JS side.
- **www/**: Public interfaces for interacting AdsKit SDK through Cordova.

## 2. Installation Guide

## Cordova

1. Download the Cordova Ads Plugin.

2. Add platform to project.


    ***`cordova platform add android`***


3. You can either install the plugin through npm or by downloading from downloads page, [Cordova Ads Plugin](). <br>

    a. Run the following command in the root directory of your Cordova project to install it through npm. <br> 
        
    ***`cordova plugin add @hmscore/cordova-plugin-hms-ads`*** <br>
        
    b. Run the following command in the root directory of your Cordova project to install it manually after downloading the plugin.<br>

    ***`cordova plugin add <CORDOVA_ADS_PLUGIN_PATH>`***


4. Check whether the Cordova Ads Plugin is successfully added to plugins folder in the root directory of your Cordova project.

5. Add agconnect-services.json and jks file to root directory. You can see how to create jks file in this [link](https://developer.huawei.com/consumer/en/doc/development/HMS-Guides/iap-configuring-appGallery-connect).

6. Add build.json file to your project's root.

7. Add keystore file and build.json file to your project's root.

```json
{
    "android": {
        "debug": {
            "keystore": "<keystore>",
            "storePassword": "<password>",
            "alias": "<alias>",
            "password" : "<password>",
        },
        "release": {
            "keystore": "<keystore>",
            "storePassword": "<password>",
            "alias": "<alias>",
            "password" : "<password>",
        }
    }
}
```
8. Then run the Cordova app.

    ***`cordova run android`***

## Ionic

1. Download the Cordova Ads Plugin through npm or by downloading from downloads page, [Cordova Ads Plugin](). 

   a. Run the following command in the root directory of your Ionic project to install it through npm. <br>

    ***`npm install @hmscore/cordova-plugin-hms-ads`*** <br>

   b. Run the following command in the root directory of your Ionic project to install it manually after downloading the plugin.

    ***`npm install <CORDOVA_ADS_PLUGIN_PATH>`***

2. Check whether the Cordova Ads SDK is successfully added to the node_modules directory.

3. If you want full Ionic support with code completion etc, install"@ionic-native/core" in your project. <br>

    ***`npm install @ionic-native/core --save`***

4. Copy the "ionic/dist/hms-ads" folder from library to "node_modules/@ionic-native" folder under your Ionic project.

5. Compile ionic project.

    a. ***`ionic build`***

    b. ***`npx cap init [appName] [appId]`*** 
    
    > ***NOTE*** <br>
    > where appName is the name of your app, and appId is package_name in your agconnect-services.json file (ex: com.example.app).

6. Add a native platform to your project.

    ***`ionic capacitor add android`***

7. Make sure your project has a build.gradle file with a maven repository address and Ads service dependencies.

8. Add agconnect-services.json and jks file to the app directory in your Android project.

9. To update dependencies, and copy any web assets to your project, add following code.

    ***`npx capacitor sync`***

10. Then run the Ionic app.
        
    ***`ionic capacitor run android`***


***



## 3. Cordova/Ionic SDK API method definitions


### Constants

#### Enum Gender
Gender.

| Field name | Description |
|----|------|
| FEMALE | Female.|
| MALE | Male.|
| UNKNOWN |  Unknown.|

#### Enum Anchor
Anchor.

| Field Name | Description |
|---|---|
| TOP | Top anchor.|
|BOTTOM|Bottom anchor.|

#### Enum AdContentClassification
Ad content ratings.

| Field name |  Description |
|----|-----|
| AD_CONTENT_CLASSIFICATION_A | Content suitable for adults only.|
| AD_CONTENT_CLASSIFICATION_PI | Content suitable for audiences with parental guidance.|
| AD_CONTENT_CLASSIFICATION_UNKOWN | Unknown rating.|
| AD_CONTENT_CLASSIFICATION_J  | Content suitable for junior and older audiences.|
| AD_CONTENT_CLASSIFICATION_W  | Content suitable for widespread audiences.|


#### Enum UnderAgeOfPromise
Setting directed to users under the age of consent.

| Field name |  Description |
|----|-------|
| PROMISE_UNSPECIFIED |  Whether to process ad requests as directed to users under the age of consent is not specified.|
| PROMISE_FALSE |  Does not process ad requests as directed to users under the age of consent.|
| PROMISE_TRUE |  Processes ad requests as directed to users under the age of consent.|

#### Enum ChildProtection
Child-directed setting.

| Field name |  Description |
|----|-------|
| TAG_FOR_CHILD_PROTECTION_UNSPECIFIED | Whether to process ad requests according to the COPPA is not specified.|
| TAG_FOR_CHILD_PROTECTION_FALSE |  Does not process ad requests according to the Children's Online Privacy Protection Act (COPPA).|
| TAG_FOR_CHILD_PROTECTION_TRUE |  Processes ad requests according to the COPPA.|

#### Enum NonPersonalizedAd
Whether to request only non-personalized ads.

| Field name | Description |
|----|------|
| ALLOW_ALL |  Requests both personalized and non-personalized ads (default).|
| ALLOW_NON_PERSONALIZED |  Requests only non-personalized ads.|

#### Enum ConsentDebug
Consent debug.

| Field name | Description |
|----|------|
| CONSENT_DEBUG_NOT_NEED_CONSENT | Not need debug consent.|
| CONSENT_DEBUG_DISABLED |  Consent debug disable.|
| CONSENT_DEBUG_NEED_CONSENT |  Need consent debug.|

#### Enum Consent
The HUAWEI Ads SDK supports personalized and non-personalized ads. The Consent SDK is provided for you to collect consent from users.

| Field name |  Description |
|----|---|------|
| CONSENT_UNKNOWN |  The user neither agrees nor declines to receive personalized or non-personalized ads.|
| CONSENT_PERSONALIZED | The user has agreed to receive personalized and non-personalized ads.|
| CONSENT_NON_PERSONALIZED | The user has agreed to receive only non-personalized ads.|

#### Enum AudioFocusType
Audio focus types during video playback.

| Field name |Description |
|----|-------|
| NOT_GAIN_AUDIO_FOCUS_ALL |  Obtains the audio focus when a video is played, no matter whether the video is muted.|
| GAIN_AUDIO_FOCUS_ALL |  Does not obtain the audio focus when a video is played, no matter whether the video is muted.|
| NOT_GAIN_AUDIO_FOCUS_WHEN_MUTE |  Obtains the audio focus only when a video is played without being muted.|

#### Enum AdParam.ErrorCodes
Ad param error codes.

| Field name | Description |
|----|------|
| INNER |  Internal error. For example, an invalid response is received from the ad server.|
| INVALID_REQUEST |  Invalid ad request. For example, the ad slot ID is not set or the banner ad size is invalid.|
| NETWORK_ERROR |Failed to send the ad request due to a network connection error.|
| NO_AD |  The ad request is sent successfully, but the server does not return the available ad assets.|
| AD_LOADING | The ad is being loaded and cannot be requested again.|
| LOW_API |  The API version is not supported by HUAWEI Ads Kit.|
| BANNER_AD_EXPIRE |  The banner ad has expired.|
| BANNER_AD_CANCEL |  The banner ad task is removed.|

#### Enum InstallReferrerResponses
Install Referrer error responses.

| Field name |  Description |
|----|--------|
| SERVICE_DISCONNECTED |  Failed to connect to the service.|
| DEVELOPER_ERROR |  A call error occurred.|
| SERVICE_UNAVAILABLE |  The service does not exist.|
| OK |  Connected to the service successfully.|
| FEATURE_NOT_SUPPORTED |  The service is not supported.|

#### Enum ScreenOrientation

ScreenOrientation

| Field name |  Description |
|----|-------|
| SCREEN_ORIENTATION_LANDSCAPE |  Landscape.|
| SCREEN_ORIENTATION_UNSPECIFIED|Unspecified.|
| SCREEN_ORIENTATION_PORTRAIT |Portrait.|
| SCREEN_ORIENTATION_USER |User.|
| SCREEN_ORIENTATION_BEHIND |Behind.|
| SCREEN_ORIENTATION_SENSOR |Sensor.|
| SCREEN_ORIENTATION_NOSENSOR |  Nosensor.|
| SCREEN_ORIENTATION_SENSOR_LANDSCAPE |  Sensor landscape.|
| SCREEN_ORIENTATION_SENSOR_PORTRAIT | Sensor portrait.|
| SCREEN_ORIENTATION_REVERSE_LANDSCAPE | Reverse landscape.|
| SCREEN_ORIENTATION_REVERSE_PORTRAIT |  Reverse portrait.|
| SCREEN_ORIENTATION_FULL_SENSOR |  Full sensor.|
| SCREEN_ORIENTATION_USER_LANDSCAPE | User landscape.|
| SCREEN_ORIENTATION_USER_PORTRAIT | User portrait.|
| SCREEN_ORIENTATION_FULL_USER |  Full user.|
| SCREEN_ORIENTATION_LOCKED |  Locked.|


#### Enum Color
Color

| Field name | Description |
|----|-------|
| RED | Red. |
| DKGRAY | Dkgray.|
| GRAY |  Gray.|
| WHITE | White.|
| BLUE |Blue.|
| BLACK | Black.|
| LTGRAY |  Ltgray.|
| MAGENTA |Magenta.|
| YELLOW | Yellow.|
| CYAN |  Cyan.|
| GREEN | Green.|
| TRANSPARENT | Transparent.|

#### Enum MediaAspect

Aspect ratio of an ad image.

| Field name  | Description |
|----|-------|
|ASPECT_ANY |Any aspect.|
|ASPECT_CUSTOM_SIZE |Custom size aspect.|
|ASPECT_LANDSCAPE |Landscape.|
|ASPECT_PORTRAIT |Portrait.|
|ASPECT_SQUARE | Square.|
|ASPECT_UNKNOWN |Unknown|

#### Enum ChoicesPosition
AdChoices icon position constants.

| Field name  | Description |
|----|-------|
| BOTTOM_LEFT|The AdChoices icon is in the bottom left corner.|
|BOTTOM_RIGHT |The AdChoices icon is in the bottom right corner.|
|INVISIBLE | The AdChoices icon is invisible.|
|TOP_LEFT | The AdChoices icon is in the top left corner.|
|TOP_RIGHT |The AdChoices icon is in the top right corner.|

#### Enum  MediaDirection
Orientation constants.

| Field name |  Description |
|----|--------|
| ANY|Any orientation.|
|LANDSCAPE |Landscape.|
|PORTRAIT |Portrait.|

#### Enum BannerAdSize
Banner ad size.

| Field Name| Description |
|----|------|
| BANNER_SIZE_360_57  |Banner ad size: 360 x 57 |
| BANNER_SIZE_360_144 | Banner ad size: 360 x 144|
| BANNER_SIZE_160_600 | Banner ad size: 160 x 600|
| BANNER_SIZE_300_250 |Banner ad size: 300 x 250|
| BANNER_SIZE_320_100 | Banner ad size: 320 x 100|
| BANNER_SIZE_320_50  | Banner ad size: 320 x 50 |
| BANNER_SIZE_468_60  |Banner ad size: 468 x 60 |
| BANNER_SIZE_728_90  |Banner ad size: 728 x 90 |
| BANNER_SIZE_DYNAMIC | Dynamic banner ad size. The width of the parent layout and the height of the ad content are used. |
| BANNER_SIZE_INVALID |Invalid size. No ad can be requested using this size.                                             |
| BANNER_SIZE_SMART   |Dynamic banner ad size. The screen width and an adaptive height are used       

### Events

#### Enum BannerAdEvents

You can subscribe to these events using `.on` function, with event name as described below.

| Event Name |Description|
|---|------|
| LOADED |Called when an ad is loaded successfully. |
| FAILED| Called when an ad request fails.|
| OPENED| Called when an ad is opened.|
| CLICKED| Called when an ad is tapped.|
| LEAVE| Called when an ad leaves an app.|
| CLOSED| Called when an ad is closed.|


#### Enum SplashAdEvents

You can subscribe to these events using `.on` function, with event name as described below.

| Event Name |Description|
|---|-----|
| LOADED | Called when a splash ad is loaded successfully. |
| LOAD_FAILED| Called when a splash ad fails to be loaded.  |
| DISMISSED | Called after a splash ad disappears.   |
| SHOWED | Called when a splash ad is displayed.    |
| CLICK |Called when a splash ad is clicked.  |

#### Enum RewardAdEvents

You can subscribe to these events using `.on` function, with event name as described below.

| Event Name| Description|
|---|----|
| LOADED     | Called when a rewarded ad is successfully loaded.             |
| LOAD_FAILED | Called when a rewarded ad fails to be loaded.                 |
| OPENED     | Called when a rewarded ad is opened.                          |
| SHOW_FAILED | Called when a rewarded ad fails to be displayed.              |
| CLOSED     | Called when a rewarded ad is closed.                          |
| REWARDED   |Called when a rewarded ad is provided based on a rewarded ad. |

#### Enum InterstitialAdEvents

You can subscribe to these events using `.on` function, with event name as described below.

| Event Name|  Description|
|---|------|
| LOADED| Called when a splash ad is loaded successfully. |
| LOAD_FAILED| Called when a splash ad fails to be loaded.     |
| DISMISSED|Called after a splash ad disappears.   |
| SHOWED| Called when a splash ad is displayed.    |
| CLICK| Called when a splash ad is clicked.      |
| METADATA_CHANGED | Called when metadata is changed.    |

#### Enum NativeAdEvents

You can subscribe to these events using `.on` function, with event name as described below.

| Event Name|  Description|
|---|------|
| NATIVE_AD_LOADED | Called when native ad is loaded.          |
| DISLIKED       | Called when ad is disliked.               |
| VIDEO_START     |Called when video started playing.        |
| VIDEO_PLAY     |Called when video is playing.             |
| VIDEO_PAUSE   |Called when video is paused.              |
| VIDEO_END    |Called when video is ended.               |
| VIDEO_MUTE   |Called when video is muted.               |
| LOADED       |Called when an ad is loaded successfully. |
| FAILED     |Called when an ad request fails.          |
| OPENED     |Called when an ad is opened.              |
| CLICKED    |Called when an ad is tapped.              |
| LEAVE      |Called when an ad leaves an app.          |
| CLOSED     |Called when an ad is closed.              |

### Data Types

#### AdParam

Defines an ad request.

| Field name              | Type   | Description                                                                                    |
|-------------------------|--------|------------------------------------------------------------------------------------------------|
| gender                  | Gender   | The gender.                                                                                    |
| adContentClassification | AdContentClassification | Ad content rating.                                                                             |
| tagForUnderAgeOfPromise | UnderAgeOfPromise  | Specifies whether to process ad requests as directed to users under the age of consent.        |
| tagForChildProtection   | ChildProtection  | Specifies whether to process ad requests according to the COPPA.                               |
| nonPersonalizedAd       | NonPersonalizedAd  | Specifies whether to request personalized ads.                                                 |
| appCountry              | String | The country code corresponding to the language in which an ad needs to be returned for an app. |
| appLang                 | String | The language in which an ad needs to be returned for an app.                                   |
| countryCode             | String | The home country code.                                                                         |

#### AdSize

| Field name | Type | Description |
|-------------|-----|--------------|
| width | int | Width dp value. |
| height | int | Height dp value. |

#### BannerAdOptions

Defines required information for a banner ad.

| Field name    | Type   | Description                             |
|---------------|--------|-----------------------------------------|
| adId          | String | An ad slot ID.                          |
| bannerAdSize  | BannerAdSize | Specifies size for banner.              |
| bgColor       | Color | Background color.                       |
| anchor        | Anchor | Banner position, bottom or top gravity. |
| bannerRefresh | long   | Rotation interval.                      |

#### SplashAdOptions

Defines required information for a splash ad.

| Field name      | Type                | Description                                                                                                           |
|-----------------|---------------------|-----------------------------------------------------------------------------------------------------------------------|
| preload         | boolean             | Whether to preload the ad or not.                                                                                     |
| orientation     | ScreenOrientation | Orientation of splash screen. (Required if preload is true.)                                                          |
| adId            | String              | An ad slot id. (Required if preload is true.)                                                                         |
| ad              | AdParam           | AdParam object. (Required if preload is true.)                                                                        |
| sloganResId     | String              | Default app launch image in portrait mode, which is displayed before a splash ad is displayed. (Android resource id)  |
| wideSloganResId | String              | Default app launch image in landscape mode, which is displayed before a splash ad is displayed. (Android resource id) |
| audioFocusType  | AudioFocusType | The audio focus preemption policy for a video splash ad.                                                              |
| logo            | SplashAdLogoOptions| Logo options.                                                                                                         |

#### SplashAdLogoOptions

Defines how splash ad's logo section looks like.

| Field name | Type    | Description                                  |
|------------|---------|----------------------------------------------|
| hidden     | boolean | Visibility state of the logo portion.        |
| anchor     | Anchor | Logo placement, either `"top"` or `"bottom"` |
| owner      | String  | Owner text.                                  |
| copyright  | String  | Copyright text.                              |
| bg         | Color   | Background color of logo portion.            |

#### SplashAdLoadOptions

Defines required information to load splash ad.

| Field name  | Type    | Description                   |
|-------------|---------|-------------------------------|
| orientation | ScreenOrientation | Orientation of splash screen. |
| adId        | String  | An ad slot id.                |
| ad          | AdParam | AdParam object.               |

#### RewardAdOptions

Defines required information for a reward ad.

| Field name         | Type               | Description                          |
|--------------------|--------------------|--------------------------------------|
| userId             | String             | A user ID.                           |
| data               | String             | Custom data.                         |
| immersive          | boolean            | Immersive or not.                    |
| rewardVerifyConfig | RewardVerifyConfig | Server-side verification parameters. |

#### RewardVerifyConfig

Defines verify related configuration for reward ad.

| Field name | Type   | Description  |
|------------|--------|--------------|
| data       | String | Custom data. |
| userId     | String | User ID.     |

#### InterstitialAdOptions

Defines required information for a interstitial ad.

| Field name | Type   | Description |
|------------|--------|-------------|
| adId       | String | Ad slot ID. |

#### NativeAdOptions

Defines required information for a native ad.

| Field name | Type   | Description|
|------------|--------|------------|
| div        | String | Companion HTML div id.|
| template   | "small" or "banner" or "full" or "video"| Native ad view template. Options are: `"small"`, `"full"`, `"banner"`, `"video"` |
| bg | Color | Background color.

#### NativeAdLoadOptions

Defines required information to load native ad.

| Field name      | Type                  | Description              |
|-----------------|-----------------------|--------------------------|
| adId            | String                | Ad slot ID.              |
| ad              | AdParam             | AdParam object.          |
| nativeAdOptions | NativeAdConfiguration| Native ad configuration. |

#### NativeAdConfiguration

Defines extra information for a native ad.

| Field name                 | Type               | Description                                                     |
|----------------------------|--------------------|-----------------------------------------------------------------|
| adSize                     | AdSize             | Requested ad size.                                              |
| choicesPosition            | ChoicesPosition| Position of an ad choice icon.                                  |
| mediaAspect                | MediaAspect| Aspect ratio of an ad image..                                   |
| mediaDirection             |  MediaDirection| Direction of an ad image..                                      |
| returnUrlsForImages        | boolean            | Whether the SDK is allowed to download native ad images or not. |
| requestCustomDislikeThisAd | boolean            | Whether native ad will have custom dislike this button or not.  |
| requestMultiImages         | boolean            | Whether multiple ad images are requested.                       |
| videoConfiguration         | VideoConfiguration| Video configuration used to control video playback.             |

#### AdSize

Defines an ad size.

| Field name | Type | Description       |
|------------|------|-------------------|
| width      | int  | The width in dp.  |
| height     | int  | The height in dp. |

#### VideoConfiguration

Video configuration used to control video playback.

| Field name               | Type    | Description                                                             |
|--------------------------|---------|-------------------------------------------------------------------------|
| audioFocusType           | AudioFocusType     | The video playback scenario where the audio focus needs to be obtained. |
| clickToFullScreenRequest | boolean | Whether click to full screen request exists.                            |
| startMuted               | boolean | Whether a video is initially muted.                                     |

#### InitOptions

Initial configuration options for Ads Kit.

| Field name  | Type    | Description                                              |
|-------------|---------|----------------------------------------------------------|
| appCode     | String  | App code.                                                |
| bannerFloat | boolean | Whether banner ads will float on Cordova webview or not. |

#### IsLoadingResult

Returned when `.isLoading()` function called on an ad.

| Field name | Type    | Description                |
|------------|---------|----------------------------|
| isLoading  | boolean | Whether the ad is loading. |

#### IsLoadedResult

Returned when `.isLoaded()` function called on an ad.

| Field name | Type    | Description                |
|------------|---------|----------------------------|
| isLoaded   | boolean | Whether the ad is loading. |

#### OaidResult

The OAID and setting of **Disable personalized ads**.

| Field name              | Type    | Description                                                  |
|-------------------------|---------|--------------------------------------------------------------|
| id                      | string  | The current OAID.                                            |
| isLimitAdTracingEnabled | boolean | Obtains the current setting of **Disable personalized ads**. |

#### ReferrerDetails

Describes the install referrer information.

| Field name             | Type    | Description                                                                                                                                                                             |
|------------------------|---------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| responseCode           | int | Connection status. The options are as follows: `-1`: Failed to connect. `0`: Connected successfully. `1`: The service does not exist. `2`: The service is not supported. `3`: An error. |
| installReferrer        | string  | Obtains install referrer information.                                                                                                                                                   |
| referrerClickTimestamp | long    | Obtains the ad click timestamp, in milliseconds.                                                                                                                                        |
| installBeginTimestamp  | long    | Obtains the app installation timestamp, in milliseconds.                                                                                                                                |

#### VerifyResult

Returned when `.verifyAdId()` function called on an ad.

| Field name | Type    | Description                |
|------------|---------|----------------------------|
| result   | boolean | Ad Id is verified or not. |


### Banner

#### Public Method Summary

| Method name                         | Return Type         | Description                                                      |
|-------------------------------------|---------------------|------------------------------------------------------------------|
| create(params: BannerAdOptions)     | `Promise<Banner>` | Creates the Banner Ad.                                           |
| on(eventName: BannerAdEvents, cb: Function) | `void`         | Subscribe to given event.                                        |
| loadAd(adParam: AdParam)            | `Promise<void>`         | Load ad with given adParam.                                      |
| pause()                             | `Promise<void>`         | Pauses any additional processing related to an ad view.          |
| resume()                            | `Promise<void>`         | Resumes an ad view after the pause() method is called last time. |
| destroy()                           | `Promise<void>`         | Destroys an ad view.                                             |


### Splash

#### Public Method Summary

| Method name                         | Return Type                | Description                                                      |
|-------------------------------------|----------------------------|------------------------------------------------------------------|
| create(params: SplashAdOptions)     | `Promise<Splash>`        | Creates the Splash Ad.                                           |
| on(eventName: SplashAdEvents, cb: Function) | `void`                | Subscribe to given event.                                        |
| load(options: SplashAdLoadOptions)  | `Promise<void>`                | Loads the splash ad.                                             |
| show()                              | `Promise<void>`                | Show the splash ad.                                              |
| cancel()                            | `Promise<void>`                | Close the splash ad.                                             |
| pause()                             | `Promise<void>`                | Pauses any additional processing related to an ad view.          |
| resume()                            | `Promise<void>`                | Resumes an ad view after the pause() method is called last time. |
| destroy()                           | `Promise<void>`                | Destroys the ad view.                                            |
| isLoaded()                          | `Promise<IsLoadedResult>`  | Checks whether the ad has been loaded or not.                    |
| isLoading()                         | `Promise<IsLoadingResult>` | Checks whether the ad is being loaded or not.                    |

### Reward

#### Public Method Summary

| Method name                         | Return Type               | Description                                                      |
|-------------------------------------|---------------------------|------------------------------------------------------------------|
| create(params: RewardAdOptions)     | `Promise<Reward>`       | Creates the Reward Ad.                                           |
| on(eventName: RewardAdEvents, cb: Function) | `void`               | Subscribe to given event.                                        |
| loadAd(adParam: AdParam)            | `Promise<void>`               | Load the ad with given adParam.                                  |
| show()                              | `Promise<void>`               | Show the splash ad.                                              |
| pause()                             | `Promise<void>`               | Pauses any additional processing related to an ad view.          |
| resume()                            | `Promise<void>`               | Resumes an ad view after the pause() method is called last time. |
| destroy()                           | `Promise<void>`               | Destroys the ad view.                                            |
| isLoaded()                          | `Promise<IsLoadedResult>` | Checks whether the ad has been loaded or not.                    |



### Interstitial

#### Public Method Summary

| Method name                           | Return Type                | Description                                   |
|---------------------------------------|----------------------------|-----------------------------------------------|
| create(params: InterstitialAdOptions) | `Promise<Interstitial>`  | Creates the Interstitial Ad.                  |
| on(eventName: InterstitialAdEvents, cb: Function)   | `void`                | Subscribe to given event.                     |
| loadAd(adParam: AdParam)              | `Promise<void>`                | Load the ad with given adParam.               |
| show()                                | `Promise<void>`                | Show the ad.                                  |
| destroy()                             | `Promise<void>`                | Destroys the ad view.                         |
| isLoaded()                            | `Promise<IsLoadedResult>`  | Checks whether the ad has been loaded or not. |
| isLoading()                           | `Promise<IsLoadingResult>` | Checks whether the ad is being loaded or not. |


### Native

#### Public Method Summary

| Method name | Return Type | Description|
|---|---|---|
| create(params: NativeAdOptions| `Promise<Native>` | Creates the Native Ad. |
| on(eventName: NativeAdEvents, cb: Function) | `void` | Subscribe to given event.|
| loadAd(params: NativeAdLoadOptions) | `Promise<void>` | Load the ad with given parameters. |
| destroy()| `Promise<void>`| Destroys the ad view.|
| show()|`Promise<void>`|Show the ad.|
| isLoading()|`Promise<IsLoadingResult>`|Checks whether the ad has being loaded or not.|
| isLoaded()|`Promise<IsLoadedResult>`|Checks whether the ad has been loaded or not.|



### Other Public Methods

| Name                                                        | Return Type                | Function Description                                                                                                 |
|-------------------------------------------------------------|----------------------------|----------------------------------------------------------------------------------------------------------------------|
| init(opts: InitOptions)| `Promise<void>`| Initialize some necessary values. You need to resolve the returning promise to be able to use Ads kit functionality. |
| getOaidResult()                                      | `Promise<OaidResult>`      | Obtains the current OAID.                                                                                            |
| getReferrerDetails(isTest: boolean)                  | `Promise<ReferrerDetails>` | Starts to connect to the install referrer service and obtains the Install Referrer information                       |
| disconnectFromReferrerClient()| `Promise<void>`| Ends the service connection and releases all occupied resources.                                                     |
| verifyAdId(adId: String, isLimitAdTracking: boolean) | `Promise<VerifyResult>`    | Verifies the OAID and setting of **Disable personalized ads**. 
setRequestOptions(options: AdParam)  | `Promise<void>`| Sets the global ad request configuration.
getSDKVersion() | `Promise<void>`| Obtains the version number of the HMS Core Ads SDK.
setVideoMuted(muted: boolean) | `Promise<void>` | Mute video sound.
setVideoVolume(volume: number) | `Promise<void>`| Set video volume between 0-1.
addTestDeviceId(id: string) | `Promise<void>` | Add testing device id.
getTestDeviceId() | `Promise<void>` | Get test device id.
setUnderAgeOfPromise(b: boolean) | `Promise<void>` | Sets whether to process ad requests as directed to users under the age of consent.
setConsentStatus(status: Consent) | `Promise<void>` | Set constent status.
setDebugNeedConsent(need: ConsentDebug) | `Promise<void>` | Set debug constent status.
requestConsentUpdate() | `Promise<void>` | Request for consent update.


## 4. Configure Description

No.

## 5. Licensing and Terms

Apache 2.0 license.
