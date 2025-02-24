import * as shared from 'alt-shared';
import { BaseObject, Colshape, Entity, Player, Vehicle, WorldObject } from './index.stub';

export enum Locale {
    Arabic = 'ar',
    Belarusian = 'by',
    Czech = 'cz',
    German = 'de',
    English = 'en',
    Spanish = 'es',
    Farsi = 'fa',
    French = 'fr',
    Hebrew = 'he',
    Hungarian = 'hu',
    Indonesian = 'id',
    Hindi = 'in_hd', // Wrong tag (hi_in)
    Malayalam = 'in_ml', // Wrong tag (ml_in)
    Telugu = 'in_tl', // Wrong tag (te_in)
    Tamil = 'in_tm', // Wrong tag (ta_in)
    Italian = 'it',
    Lithuanian = 'lt',
    Latvian = 'lv',
    NorwegianBokmal = 'nb_no',
    NorwegianNynorsk = 'nn_no',
    Polish = 'pl',
    Portugese = 'pt',
    BrazilianPortuguese = 'pt_br',
    Romanian = 'ro',

    Serbian = 'rs', // Wrong tag (sr)
    Russian = 'ru',
    Slovak = 'sk',
    Thai = 'th',
    Turkish = 'tr',
    Ukrainian = 'ua', // Wrong tag (uk)
    ChineseSimplified = 'zh_cn',
    ChineseTraditional = 'zh_tw',
}
export enum StatName {
    Stamina = 'stamina',
    Strength = 'strength',
    LungCapacity = 'lung_capacity',
    Wheelie = 'wheelie_ability',
    Flying = 'flying_ability',
    Shooting = 'shooting_ability',
    Stealth = 'stealth_ability',
}
export enum VehicleIndicatorLights {
    None = 0,
    BlinkLeft = 1,
    BlinkRight = 2,
    BlinkPermBoth = 4,
    StaticBoth = 8,
    Interior = 64,
}
export enum WebSocketReadyState {
    Connecting,
    Open,
    Closing,
    Closed,
}
export enum ConfigFlag {
    DisableAutoWeaponSwap = 'DISABLE_AUTO_WEAPON_SWAP',
    DisablePedPropKnockOff = 'DISABLE_PED_PROP_KNOCK_OFF',
    DisableIdleCamera = 'DISABLE_IDLE_CAMERA',
    DisableVehicleEngineShutdownOnLeave = 'DISABLE_VEHICLE_ENGINE_SHUTDOWN_ON_LEAVE',
    DisableSPEnterVehicleClipset = 'DISABLE_SP_ENTER_VEHICLE_CLIPSET',
    ForceRenderSnow = 'FORCE_RENDER_SNOW',
    ForceHideNightProps = 'FORCE_HIDE_NIGHT_PROPS',
    ForceShowNightProps = 'FORCE_SHOW_NIGHT_PROPS',
    DisableEmissiveLightsRendering = 'DISABLE_EMISSIVE_LIGHTS_RENDERING',
    /**
     * Forces vehicle tyre burst even if 0 damage is applied.
     * Useful when damage in weapon meta is set to 0, and is calculated manually by script in event.
     */
    ForceVehicleTyreBurst = 'FORCE_VEHICLE_TYRE_BURST',
    /**
     * Prevents head props from being hidden when getting into the vehicle.
     * Equivalent to calling `setPedResetFlag` native with flag 337 in every tick.
     */
    SwapAllowHeadPropInVehicleFlag = 'SWAP_ALLOW_HEAD_PROP_IN_VEHICLE_FLAG',
}
export enum GameFont {
    ChaletLondon,
    HouseScript,
    Monospace,
    CharletComprimeColonge = 4,
    Pricedown = 7,
}
export enum TextAlign {
    Center,
    Left,
    Rigth,
}
export enum TextLabelAlignment {
    Left,
    Right,
    Center,
    Justify,
}
export enum CookieSameSite {
    NoRestriction = 'NO_RESTRICTION',
    LaxMode = 'LAX_MODE',
    StrictMode = 'STRICT_MODE',
}
export enum CookiePriority {
    Low = 'LOW',
    Medium = 'MEDIUM',
    High = 'HIGH',
}
export interface IClientEvent {
    anyResourceError: (resourceName: string) => void;
    anyResourceStart: (resourceName: string) => void;
    anyResourceStop: (resourceName: string) => void;
    /**
     * @remarks The seat indexes start with 1 (driver seat).
     */
    changedVehicleSeat: (vehicle: Vehicle, oldSeat: number, seat: number) => void;
    connectionComplete: () => void;
    consoleCommand: (name: string, ...args: string[]) => void;
    disconnect: () => void;
    /**
     * @remarks The seat indexes start with 1 (driver seat).
     */
    enteredVehicle: (vehicle: Vehicle, seat: number) => void;
    gameEntityCreate: (entity: Entity) => void;
    gameEntityDestroy: (entity: Entity) => void;
    keydown: (key: shared.KeyCode) => void;
    keyup: (key: shared.KeyCode) => void;
    /**
     * @remarks The seat indexes start with 1 (driver seat).
     */
    leftVehicle: (vehicle: Vehicle, seat: number) => void;
    /**
     * @remarks The seat indexes start with 1 (driver seat).
     */
    startEnteringVehicle: (vehicle: Vehicle, seat: number, player: Player) => boolean | void;
    /**
     * @remarks The seat indexes start with 1 (driver seat).
     */
    startLeavingVehicle: (vehicle: Vehicle, seat: number, player: Player) => boolean | void;
    removeEntity: (object: Entity) => void;
    resourceStart: (errored: boolean) => void;
    resourceStop: () => void;
    resourceError: (error: Error, file: string, line: number, stackTrace: string) => void;
    syncedMetaChange: (entity: Entity, key: string, value: any, oldValue: any) => void;
    streamSyncedMetaChange: (object: BaseObject, key: string, value: any, oldValue: any) => void;
    globalMetaChange: (key: string, value: any, oldValue: any) => void;
    globalSyncedMetaChange: (key: string, value: any, oldValue: any) => void;
    /**
     * @remarks See https://alloc8or.re/gta5/doc/enums/eTaskTypeIndex.txt for task ids.
     */
    taskChange: (oldTask: number, newTask: number) => boolean | void;
    spawned: () => void;
    localMetaChange: (key: string, newValue: any, oldValue: any) => void;
    /**
     * @remarks Triggers only if the old or new owner is the local player.
     */
    netOwnerChange: (entity: Entity, owner: Player, oldOwner: Player) => void;
    windowFocusChange: (isFocused: boolean) => void;
    windowResolutionChange: (oldResolution: shared.Vector2, newResolution: shared.Vector2) => void;
    playerAnimationChange: (target: Player, oldAnimDict: number, newAnimDict: number, oldAnimName: number, newAnimName: number) => void;
    playerWeaponShoot: (weaponHash: number, totalAmmo: number, ammoInClip: number) => void;
    playerWeaponChange: (oldWeapon: number, newWeapon: number) => void;
    baseObjectCreate: (baseObject: BaseObject) => void;
    baseObjectRemove: (baseObject: BaseObject) => void;
    weaponDamage: (target: Entity, weaponHash: number, damage: number, offset: shared.Vector3, bodyPart: shared.BodyPart, sourceEntity: Entity) => number | boolean | void;
    /**
     * Triggers when an Virtual Entity position is changed
     */
    worldObjectPositionChange: (object: WorldObject, oldPosition: shared.Vector3) => void;
    worldObjectStreamIn: (object: WorldObject) => void;
    worldObjectStreamOut: (object: WorldObject) => void;
    metaChange: (target: BaseObject, key: string, value: any, oldValue: any) => void;
    entityEnterColshape: (colshape: Colshape, entity: Entity) => void;
    entityLeaveColshape: (colshape: Colshape, entity: Entity) => void;
    entityHitEntity: (damager: Entity, target: Entity, weaponHash: number) => void;
    playerBulletHit: (weaponHash: number, victim: Entity, position: shared.Vector3) => void;
    voiceConnection: (state: shared.VoiceConnectionState) => void;
    playerStartTalking: (target: Player) => void;
    playerStopTalking: (target: Player) => void;
    /**
     * @remarks This event is only triggered for local player.
     */
    playerDimensionChange: (player: Player, oldDimension: number, newDimension: number) => void;
    /**
     * @remarks This event is only triggered for local player.
     */
    playerInteriorChange: (player: Player, oldInterior: number, newInterior: number) => void;
}
export interface IDiscordUser {
    id: string;
    name: string;
    discriminator: string;
    avatar: string;
}
/**
 * Vehicle handling, which affects how vehicle responds and reacts to the inputs of a driver.
 * This handling applies to particular vehicle instance, as opposed to the {@link HandlingData}.
 *
 * @remarks Changes will be reflected only on a particular instance of the vehicle. On creation, model handling will be used as a base and changed properties will be added on top of it.
 */
export interface IVehicleHandling {
    handlingNameHash: number;
    acceleration: number;
    antiRollBarBiasFront: number;
    antiRollBarBiasRear: number;
    antiRollBarForce: number;
    brakeBiasFront: number;
    brakeBiasRear: number;
    brakeForce: number;
    camberStiffness: number;
    centreOfMassOffset: shared.Vector3;
    clutchChangeRateScaleDownShift: number;
    clutchChangeRateScaleUpShift: number;
    collisionDamageMult: number;
    damageFlags: number;
    deformationDamageMult: number;
    downforceModifier: number;
    driveBiasFront: number;
    driveBiasRear: number;
    driveInertia: number;
    driveMaxFlatVel: number;
    engineDamageMult: number;
    handBrakeForce: number;
    handlingFlags: number;
    inertiaMultiplier: shared.Vector3;
    initialDragCoeff: number;
    initialDriveForce: number;
    initialDriveGears: number;
    initialDriveMaxFlatVel: number;
    lowSpeedTractionLossMult: number;
    mass: number;
    modelFlags: number;
    monetaryValue: number;
    oilVolume: number;
    percentSubmerged: number;
    percentSubmergedRatio: number;
    petrolTankVolume: number;
    rollCentreHeightFront: number;
    rollCentreHeightRear: number;
    seatOffsetDistX: number;
    seatOffsetDistY: number;
    seatOffsetDistZ: number;
    steeringLock: number;
    steeringLockRatio: number;
    suspensionBiasFront: number;
    suspensionBiasRear: number;
    suspensionCompDamp: number;
    suspensionForce: number;
    suspensionLowerLimit: number;
    suspensionRaise: number;
    suspensionReboundDamp: number;
    suspensionUpperLimit: number;
    tractionBiasFront: number;
    tractionBiasRear: number;
    tractionCurveLateral: number;
    tractionCurveLateralRatio: number;
    tractionCurveMax: number;
    tractionCurveMaxRatio: number;
    tractionCurveMin: number;
    tractionCurveMinRatio: number;
    tractionLossMult: number;
    tractionSpringDeltaMax: number;
    tractionSpringDeltaMaxRatio: number;
    unkFloat1: number;
    unkFloat2: number;
    unkFloat4: number;
    unkFloat5: number;
    weaponDamageMult: number;
    isModified(): boolean;
    reset(): void;
}
export interface IHttpResponse {
    statusCode: number;
    body: string;
    headers: Record<string, string>;
}
export interface IHeapStats {
    heapSizeLimit: number;
    totalHeapSize: number;
    usedHeapSize: number;
    mallocedMemory: number;
    peakMallocedMemory: number;
}
/**
 * Follows Chrome DevTools cpuprofile format.
 * See [Chrome DevTools protocol docs](https://chromedevtools.github.io/devtools-protocol/tot/Profiler/#type-Profile) for more details.
 *
 * In order to analyze resulting Profile - serialize this class as JSON and put to a .cpuprofile file.
 * It will be available to use in DevTools on "Performance" tab, or in Visual Studio Code.
 *
 * @example
 * ```js
 * // server
 * alt.onClient("saveProfile", (player, name, content) => {
 *     fs.writeFileSync("./" + name + ".cpuprofile", content);
 * });
 *
 * // client
 * alt.Profile.startProfiling("test");
 * // do some stuff
 * const profile = alt.Profile.stopProfiling("test");
 * const content = JSON.stringify(profile);
 * alt.emitServer("saveProfile", "test", content);
 * ```
 */
export interface IProfile {
    /**
     * The list of profile nodes. First item is the root node.
     */
    nodes: readonly IProfileNode[];
    /**
     * Profiling start timestamp in microseconds.
     */
    startTime: number;
    /**
     * Profiling end timestamp in microseconds.
     */
    endTime: number;
    /**
     * Ids of samples top nodes.
     */
    samples: readonly number[];
    /**
     * Time intervals between adjacent samples in microseconds. The first delta is relative to the profile startTime.
     */
    timeDeltas: readonly number[];
}
export interface IProfileCallFrame {
    /**
     * JavaScript function name.
     */
    functionName: string;
    /**
     * Unique id of the script.
     */
    scriptId: number;
    /**
     * File path.
     */
    url: string;
    /**
     * JavaScript script line number (0-based).
     */
    lineNumber: number;
    /**
     * JavaScript script column number (0-based).
     */
    columnNumber: number;
}
export interface IProfileNode {
    /**
     * Unique id of the node.
     */
    id: number;
    /**
     * Function location.
     */
    callFrame: IProfileCallFrame;
    /**
     * Number of samples where this node was on top of the call stack.
     */
    hitCount: number;
    /**
     * Child node ids.
     */
    children: readonly number[];
    /**
     * The reason of being not optimized. The function may be deoptimized or marked as don't optimize.
     */
    deoptReason: string;
    /**
     * An array of source position ticks.
     */
    positionTicks: readonly IProfileTickInfo[];
}
export interface IProfileTickInfo {
    /**
     * Source line number (1-based).
     */
    line: number;
    /**
     * Number of samples attributed to the source line.
     */
    ticks: number;
}
/**
 * Extend it by interface merging for use in baseobject meta {@link "alt-client".BaseObject getMeta method}, {@link "alt-client".BaseObject setMeta method}, etc.
 *
 * @remarks See {@link "alt-shared".ICustomGlobalMeta} for an example of use.
 */
export interface ICustomBaseObjectMeta extends shared.ICustomBaseObjectMeta {}
/**
 * Extend it by interface merging for use in blip meta {@link "alt-client".Blip getMeta method}, {@link "alt-client".Blip setMeta method}, etc.
 *
 * @remarks See {@link "alt-shared".ICustomGlobalMeta} for an example of use.
 */
export interface ICustomBlipMeta extends ICustomBaseObjectMeta {}
/**
 * Extend it by merging interfaces for use in checkpoint meta {@link "alt-client".Checkpoint getMeta method}, {@link "alt-client".Checkpoint setMeta method}, etc.
 *
 * @remarks See {@link "alt-shared".ICustomGlobalMeta} for an example of use.
 */
export interface ICustomCheckpointMeta extends ICustomBaseObjectMeta {}
/**
 * Extend it by interface merging for use in colshape meta {@link "alt-server".Colshape getMeta method}, {@link "alt-server".Colshape setMeta method}, etc.
 *
 * @remarks See {@link "alt-shared".ICustomGlobalMeta} for an example of use.
 */
export interface ICustomColshapeMeta extends ICustomBaseObjectMeta {}
/**
 * Extend it by merging interfaces for use in webview meta {@link "alt-client".WebView getMeta method}, {@link "alt-client".WebView setMeta method}, etc.
 *
 * @remarks See {@link "alt-shared".ICustomGlobalMeta} for an example of use.
 */
export interface ICustomWebViewMeta extends ICustomBaseObjectMeta {}
/**
 * Extend it by merging interfaces for use in audio meta {@link "alt-client".Audio getMeta method}, {@link "alt-client".Audio setMeta method}, etc.
 *
 * @remarks See {@link "alt-shared".ICustomGlobalMeta} for an example of use.
 */
export interface ICustomAudioMeta extends ICustomBaseObjectMeta {}
/**
 * Extend it by interface merging for use in entity meta {@link "alt-client".Entity getMeta method}, {@link "alt-client".Entity setMeta method}, etc.
 *
 * @remarks See {@link "alt-shared".ICustomGlobalMeta} for an example of use.
 */
export interface ICustomEntityMeta extends ICustomBaseObjectMeta {}
/**
 * Extend it by merging interfaces for use in player meta {@link "alt-client".Player getMeta method}, {@link "alt-client".Player setMeta method}, etc.
 *
 * @remarks See {@link "alt-shared".ICustomGlobalMeta} for an example of use.
 */
export interface ICustomPlayerMeta extends ICustomEntityMeta {}
/**
 * Extend it by merging interfaces for use in local player meta {@link "alt-client".LocalPlayer getMeta method}, {@link "alt-client".LocalPlayer setMeta method}, etc.
 *
 * @remarks See {@link "alt-shared".ICustomGlobalMeta} for an example of use.
 */
export interface ICustomLocalPlayerMeta extends ICustomPlayerMeta {}
/**
 * Extend it by merging interfaces for use in vehicle meta {@link "alt-client".Vehicle getMeta method}, {@link "alt-client".Vehicle setMeta method}, etc.
 *
 * @remarks See {@link "alt-shared".ICustomGlobalMeta} for an example of use.
 */
export interface ICustomVehicleMeta extends ICustomEntityMeta {}
/**
 * Extend it by merging interfaces for use in vehicle meta {@link "alt-client".Ped getMeta method}, {@link "alt-client".Ped setMeta method}, etc.
 *
 * @remarks See {@link "alt-shared".ICustomGlobalMeta} for an example of use.
 */
export interface ICustomPedMeta extends ICustomEntityMeta {}
/**
 * Extend `alt.emit` auto-completion by merging interfaces for use with `alt.emit`.
 *
 * @example
 * ```ts
 * declare module 'alt-client' {
 *    interface ICustomEmitEvent {
 *        myEvent: (arg1: string, arg2: { key: string, value: number })
 *    }
 * }
 * ```
 *
 * @export
 * @interface ICustomEmitEvent
 */
export interface ICustomEmitEvent {}
export interface IMarkerOptions {
    type: number;
    dir: shared.IVector3;
    rot: shared.IVector3;
    scale: shared.IVector3;
    color: shared.RGBA;
    bobUpAndDown: boolean;
    faceCamera: boolean;
    p19: number;
    rotate: boolean;
    textureDict: string;
    textureName: string;
    drawOnEnts: boolean;
}
export interface IInputDevice {
    name: string;
    uuid: string;
}
export interface ISyncInfo {
    active: boolean;
    receivedTick: number;
    fullyReceivedTick: number;
    sendTick: number;
    ackedSendTick: number;
    propertyCount: number;
    componentCount: number;
    /**
     * 2D array of property update ticks grouped by component
     */
    propertyUpdateTicks: number[][];
}
/**
 * Axis-Aligned Bounding Box.
 */
export interface IAABB {
    min: number;
    max: number;
}
export interface IWebViewParams {
    url: string;
    pos: shared.IVector2;
    size: shared.IVector2;
    isOverlay: boolean;
    drawableHash: number;
    targetTexture: string;
    headers: Record<string, string>;
    cookies: ICookie[];
}
export interface ICookie {
    /**
     * Cookie name must always start with "__altv_"
     */
    name: `__altv_${string}`;
    url: string;
    value: unknown;
    httpOnly: boolean;
    secure: boolean;
    domain: string;
    path: string;
    sameSite: CookieSameSite;
    priority: CookiePriority;
    expires: number;
}