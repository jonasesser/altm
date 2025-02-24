// Stub für index.d.ts

import * as shared from 'alt-shared';

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
export enum WatermarkPosition {
    BottomRight = 0,
    TopRight = 1,
    TopLeft = 2,
    TopCenter = 3,
    BottomCenter = 4,
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

// /**
//  * Create a attached blip to a ped.
//  *
//  * @param ped Index of the player in alt.Player.all.
//  */
// export class PedBlip extends Blip {
//   constructor(ped: number);
// }
// /**
//  * Create a attached blip to a vehicle.
//  *
//  * @param vehicle Index of the vehicle in alt.Vehicle.all.
//  */
// export class VehicleBlip extends Blip {
//   constructor(vehicle: number);
// }
// Do not add anything here, add to the Utils namespace instead!
// (this class is here only for extending shared Utils class & namespace)
export * from 'alt-shared';

export function addGxtText(key: string | number, value: string): void;
/**
 * Adds a new GXT entry with the specified value.
 *
 * @remarks The GXT entry FE_THDR_GTAO is locked and cannot be changed.
 *
 * @param key GXT entry name or hash.
 * @param value GXT entry value.
 */
export function addGxtText(key: string | number, value: string): void {
    // TODO Implement
}

export function beginScaleformMovieMethodMinimap(methodName: string): boolean;
/**
 * Executes the specified scaleform method on the minimap.
 */
export function beginScaleformMovieMethodMinimap(methodName: string): boolean {
    // TODO Implement
    return false;
}

export function emit<K extends keyof ICustomEmitEvent>(eventName: K, ...args: Parameters<ICustomEmitEvent[K]>): void;
export function emit<K extends string>(eventName: Exclude<K, keyof IClientEvent | keyof ICustomEmitEvent>, ...args: any[]): void;
export function emit<K extends string>(eventName: Exclude<K, keyof IClientEvent>, args: any[]): void {
    // TODO Implement
}

export function emitRaw<K extends keyof ICustomEmitEvent>(eventName: K, ...args: Parameters<ICustomEmitEvent[K]>): void;
export function emitRaw<K extends string>(eventName: Exclude<K, keyof IClientEvent | keyof ICustomEmitEvent>, ...args: any[]): void;
export function emitRaw<K extends string>(eventName: Exclude<K, keyof IClientEvent>, args: any[]): void {
    // TODO Implement
}

export function emitServer<K extends keyof shared.ICustomClientServerEvent>(eventName: K, ...args: Parameters<shared.ICustomClientServerEvent[K]>): void;
export function emitServer<K extends string>(eventName: Exclude<K, keyof shared.ICustomClientServerEvent>, ...args: any[]): void;
export function emitServer<K extends string>(eventName: Exclude<K, never>, args: any[]): void {
    // TODO Implement
}

export function emitServerRaw<K extends keyof shared.ICustomClientServerEvent>(eventName: K, ...args: Parameters<shared.ICustomClientServerEvent[K]>): void;
export function emitServerRaw<K extends string>(eventName: Exclude<K, keyof shared.ICustomClientServerEvent>, ...args: any[]): void;
export function emitServerRaw<K extends string>(eventName: Exclude<K, never>, args: any[]): void {
    // TODO Implement
}

export function emitServerUnreliable<K extends keyof shared.ICustomClientServerEvent>(eventName: K, ...args: Parameters<shared.ICustomClientServerEvent[K]>): void;
export function emitServerUnreliable<K extends string>(eventName: Exclude<K, keyof shared.ICustomClientServerEvent>, ...args: any[]): void;
export function emitServerUnreliable<K extends string>(eventName: Exclude<K, never>, args: any[]): void {
    // TODO Implement
}

export function emitRpc<K extends keyof shared.ICustomClientServerRpc>(rpcName: K, ...args: Parameters<shared.ICustomClientServerRpc[K]>): Promise<ReturnType<shared.ICustomClientServerRpc[K]>>;
export function emitRpc<K extends string>(rpcName: Exclude<K, keyof shared.ICustomClientServerRpc>, ...args: any[]): Promise<any>;
export function emitRpc<K extends string>(rpcName: Exclude<K, never>, args: any[]): Promise<any> {
    // TODO Implement
    return null;
}

export function onRpc<K extends keyof shared.ICustomServerClientRpc>(
    rpcName: K,
    listener: (...args: Parameters<shared.ICustomServerClientRpc[K]>) => Promise<ReturnType<shared.ICustomServerClientRpc[K]>> | ReturnType<shared.ICustomServerClientRpc[K]>,
): void;
export function onRpc<K extends string>(rpcName: Exclude<K, keyof shared.ICustomServerClientRpc>, listener: (...args: any[]) => Promise<any> | any): void;
export function onRpc<K extends string>(rpcName: Exclude<K, never>, listener: (...args: any[]) => any): void {
    // TODO Implement
}

export function offRpc<K extends keyof shared.ICustomServerClientRpc>(
    rpcName: K,
    listener?: (...args: Parameters<shared.ICustomServerClientRpc[K]>) => Promise<ReturnType<shared.ICustomServerClientRpc[K]>> | ReturnType<shared.ICustomServerClientRpc[K]>,
): void;
export function offRpc<K extends string>(rpcName: Exclude<K, keyof shared.ICustomServerClientRpc>, listener?: (...args: any[]) => Promise<any> | any): void;
export function offRpc<K extends string>(rpcName: Exclude<K, never>, listener: (...args: any[]) => any): void {
    // TODO Implement
}

export function gameControlsEnabled(): boolean;
/**
 * Returns whether the game controls are currently enabled.
 */
export function gameControlsEnabled(): boolean {
    // TODO Implement
    return false;
}

export function getCursorPos(normalized?: boolean): shared.Vector2;
/**
 * Gets the current position of the cursor.
 *
 * @param normalized If true returns coordinates that are in the range 0 to 1. Defaults to false.
 */
export function getCursorPos(normalized: boolean): shared.Vector2 {
    // TODO Implement
    return null;
}

export function getGxtText(key: string | number): string | null;
/**
 * Gets the value of the specified GXT entry.
 *
 * @param key GXT entry name.
 */
export function getGxtText(key: string | number): string {
    // TODO Implement
    return '';
}

export function getLicenseHash(): string;
export function getLicenseHash(): string {
    // TODO Implement
    return '';
}

export function getLocale(): Locale;
export function getLocale(): `${Locale}`;
export function getLocale():
    | 'ar'
    | 'by'
    | 'cz'
    | 'de'
    | 'en'
    | 'es'
    | 'fa'
    | 'fr'
    | 'he'
    | 'hu'
    | 'id'
    | 'in_hd'
    | 'in_ml'
    | 'in_tl'
    | 'in_tm'
    | 'it'
    | 'lt'
    | 'lv'
    | 'nb_no'
    | 'nn_no'
    | 'pl'
    | 'pt'
    | 'pt_br'
    | 'ro'
    | 'rs'
    | 'ru'
    | 'sk'
    | 'th'
    | 'tr'
    | 'ua'
    | 'zh_cn'
    | 'zh_tw' {
    // TODO Implement
    return null;
}

export function getMsPerGameMinute(): number;
/**
 * Gets the current milliseconds per game minute.
 *
 * @remarks This is set with the {@link setMsPerGameMinute} function.
 */
export function getMsPerGameMinute(): number {
    // TODO Implement
    return 0;
}

export function getServerTime(): number;
/**
 * Gets current server time since epoch in milliseconds.
 */
export function getServerTime(): number {
    // TODO Implement
    return 0;
}

export function getPermissionState(permId: shared.Permission): boolean;
export function getPermissionState<T extends number>(permId: T): boolean;
export function getPermissionState<T extends number>(permId: T): boolean {
    // TODO Implement
    return false;
}

export function getStat(statName: StatName): number;
export function getStat(statName: `${StatName}`): number;
export function getStat(statName: 'stamina' | 'strength' | 'lung_capacity' | 'wheelie_ability' | 'flying_ability' | 'shooting_ability' | 'stealth_ability'): number {
    // TODO Implement
    return 0;
}

export function isConsoleOpen(): boolean;
/**
 * Returns state of console window.
 *
 * @returns True when console window is opened.
 */
export function isConsoleOpen(): boolean {
    // TODO Implement
    return false;
}

export function isGameFocused(): boolean;
/**
 * Returns state of game window.
 *
 * @returns True when game window is focused.
 */
export function isGameFocused(): boolean {
    // TODO Implement
    return false;
}

export function isInStreamerMode(): boolean;
/**
 * Returns if alt:V is in streamer mode.
 *
 * @returns True when alt:V client is launched in streamer mode.
 */
export function isInStreamerMode(): boolean {
    // TODO Implement
    return false;
}

export function isKeyToggled(key: shared.KeyCode): boolean;
/**
 * Returns whether the specified key is toggled.
 *
 * @param key Keycode.
 */
export function isKeyToggled(key: shared.KeyCode): boolean {
    // TODO Implement
    return false;
}

export function isKeyDown(key: shared.KeyCode): boolean;
/**
 * Determines whether the specified key is pressed.
 *
 * @param Keycode of the key.
 */
export function isKeyDown(key: shared.KeyCode): boolean {
    // TODO Implement
    return false;
}

export function isMenuOpen(): boolean;
/**
 * Returns state of user interface and console window.
 *
 * @returns True when user interface or console window is opened.
 */
export function isMenuOpen(): boolean {
    // TODO Implement
    return false;
}

export function isTextureExistInArchetype(modelHash: number, targetTextureName: string): boolean;
export function isTextureExistInArchetype(modelHash: number, targetTextureName: string): boolean {
    // TODO Implement
    return false;
}

export function loadModel(modelHash: number): void;
/**
 * Loads a model into memory synchronously.
 *
 * @remarks Use this method only if you *really* need it, because this method is unsafe and can lead to game crashes.
 * For normal model loading it is recommended to use {@link "alt-client".Utils.requestModel alt.Utils.requestModel} instead.
 *
 * @param modelHash Hash of the model.
 */
export function loadModel(modelHash: number): void {
    // TODO Implement
}

export function loadModelAsync(modelHash: number): void;
/**
 * Loads a model into memory asynchronously.
 *
 * @remarks Use this method only if you *really* need it, because this method is unsafe and can lead to game crashes.
 * For normal model loading it is recommended to use {@link "alt-client".Utils.requestModel alt.Utils.requestModel} instead.
 *
 * @remarks If you want to know when a model is loaded use {@link https://natives.altv.mp/#/0x98A4EB5D89A0C952 hasModelLoaded}
 * in pair with {@link "alt-client".Utils.waitFor alt.Utils.waitFor}.
 *
 * @param modelHash Hash of the model.
 */
export function loadModelAsync(modelHash: number): void {
    // TODO Implement
}

export function offServer<K extends keyof shared.ICustomServerClientEvent>(eventName: K, listener: (...args: Parameters<shared.ICustomServerClientEvent[K]>) => void): void;
export function offServer<K extends string>(eventName: Exclude<K, keyof shared.ICustomServerClientEvent>, listener: (...args: any[]) => void): void;
export function offServer(eventName: string, listener: (...args: any[]) => void): void;
export function offServer(listener: (eventName: string, ...args: any[]) => void): void;
/**
 * Unsubscribes from all user-created server events with the specified listener.
 *
 * @remarks Listener should be of the same reference as when event was subscribed to.
 *
 * @param listener Listener that should be removed.
 */
export function offServer(eventNameOrListener: string | ((eventName: string, ...args: any[]) => void), listener?: (...args: any[]) => void): void {
    if (typeof eventNameOrListener === 'function') {
        // Fall: Listener-Variante (alle Events abbestellen)
        const listenerFn = eventNameOrListener;
        // TODO: Alle Events mit listenerFn abbestellen
    } else {
        // Fall: eventName + listener Variante
        const eventName = eventNameOrListener;
        // listener ist hier definiert
        // TODO: Event eventName mit listener abbestellen
    }
}

export function on<K extends keyof IClientEvent | keyof ICustomEmitEvent>(eventName: K, listener: (...args: shared.EventParameters<IClientEvent, ICustomEmitEvent, K>) => void): void;
export function on<K extends string>(eventName: Exclude<K, keyof IClientEvent | keyof ICustomEmitEvent>, listener: (...args: any[]) => void): void;
export function on<K extends string>(eventName: Exclude<K, keyof IClientEvent>, listener: (...args: any[]) => void): void {
    // TODO Implement
}

export function once<K extends keyof IClientEvent | keyof ICustomEmitEvent>(eventName: K, listener: (...args: shared.EventParameters<IClientEvent, ICustomEmitEvent, K>) => void): void;
export function once<K extends string>(eventName: Exclude<K, keyof IClientEvent | keyof ICustomEmitEvent>, listener: (...args: any[]) => void): void;
export function once<K extends string>(eventName: Exclude<K, keyof IClientEvent>, listener: (...args: any[]) => void): void {
    // TODO Implement
}

export function off<K extends keyof IClientEvent | keyof ICustomEmitEvent>(eventName: K, listener: (...args: shared.EventParameters<IClientEvent, ICustomEmitEvent, K>) => void): void;
export function off<K extends string>(eventName: Exclude<K, keyof IClientEvent | keyof ICustomEmitEvent>, listener: (...args: any[]) => void): void;
export function off<K extends string>(eventName: Exclude<K, keyof IClientEvent>, listener: (...args: any[]) => void): void {
    // TODO Implement
}

export function onServer<K extends keyof shared.ICustomServerClientEvent>(eventName: K, listener: (...args: Parameters<shared.ICustomServerClientEvent[K]>) => void): void;
export function onServer<K extends string>(eventName: Exclude<K, keyof shared.ICustomServerClientEvent>, listener: (...args: any[]) => void): void;
export function onServer(listener: (eventName: string, ...args: any[]) => void): void;
export function onServer(listener: (eventName: string, ...args: any[]) => void): void {
    // TODO Implement
}

export function onceServer<K extends keyof shared.ICustomServerClientEvent>(eventName: K, listener: (...args: Parameters<shared.ICustomServerClientEvent[K]>) => void): void;
export function onceServer<K extends string>(eventName: Exclude<K, keyof shared.ICustomServerClientEvent>, listener: (...args: any[]) => void): void;
export function onceServer(listener: (eventName: string, ...args: any[]) => void): void;
/**
 * Subscribes to all server events with the specified listener, which only triggers once.
 *
 * @remarks Listener will be only called for user-created events.
 *
 * @param eventName Name of the event.
 * @param listener Listener that should be added.
 */
export function onceServer(listener: (eventName: string, ...args: any[]) => void): void {
    // TODO Implement
}

export function removeGxtText(key: string): void;
/**
 * Removes the specified GXT entry.
 *
 * @param key GXT entry name.
 */
export function removeGxtText(key: string): void {
    // TODO Implement
}

export function removeIpl(iplName: string): void;
/**
 * Unloads the specified ipl.
 *
 * @param iplName Name of the ipl.
 */
export function removeIpl(iplName: string): void {
    // TODO Implement
}

export function requestIpl(iplName: string): void;
/**
 * Loads the specified ipl.
 *
 * @param iplName Name of the ipl.
 */
export function requestIpl(iplName: string): void {
    // TODO Implement
}

export function takeScreenshot(): Promise<string>;
/**
 * The output is returned as a base64 string.
 *
 * @remarks This function requires [Screen Capture](https://docs.altv.mp/articles/permissions.html) permission from the user.
 *
 * @returns Return is dependent on the success of the operation.
 */
export function takeScreenshot(): Promise<string> {
    // TODO Implement
    return null;
}

export function takeScreenshotGameOnly(): Promise<string>;
/**
 * The output is returned as a base64 string.
 *
 * @remarks This only takes a screenshot of the raw GTA:V window. WebViews, game overlays etc. won't be captured.
 * This function requires [Screen Capture](https://docs.altv.mp/articles/permissions.html) permission from the user.
 *
 * @returns Return is dependent on the success of the operation.
 */
export function takeScreenshotGameOnly(): Promise<string> {
    // TODO Implement
    return null;
}

export function resetStat(statName: StatName): void;
export function resetStat(statName: `${StatName}`): void;
export function resetStat(statName: 'stamina' | 'strength' | 'lung_capacity' | 'wheelie_ability' | 'flying_ability' | 'shooting_ability' | 'stealth_ability'): void {
    // TODO Implement
}

export function setCamFrozen(state: boolean): void;
/**
 * Freezes the camera in place so it doesn't change position or rotation.
 *
 * @remarks You can still move your character even if your camera is frozen.
 *
 * @param state True to freeze the camera, false to unfreeze the camera.
 */
export function setCamFrozen(state: boolean): void {
    // TODO Implement
}

export function isCamFrozen(): boolean;
export function isCamFrozen(): boolean {
    // TODO Implement
    return false;
}

export function setConfigFlag(flag: ConfigFlag, state: boolean): void;
export function setConfigFlag(flag: `${ConfigFlag}`, state: boolean): void;
export function setConfigFlag(
    flag:
        | 'DISABLE_AUTO_WEAPON_SWAP'
        | 'DISABLE_PED_PROP_KNOCK_OFF'
        | 'DISABLE_IDLE_CAMERA'
        | 'DISABLE_VEHICLE_ENGINE_SHUTDOWN_ON_LEAVE'
        | 'DISABLE_SP_ENTER_VEHICLE_CLIPSET'
        | 'FORCE_RENDER_SNOW'
        | 'FORCE_HIDE_NIGHT_PROPS'
        | 'FORCE_SHOW_NIGHT_PROPS'
        | 'DISABLE_EMISSIVE_LIGHTS_RENDERING'
        | 'FORCE_VEHICLE_TYRE_BURST'
        | 'SWAP_ALLOW_HEAD_PROP_IN_VEHICLE_FLAG',
    state: boolean,
): void {
    // TODO Implement
}

export function getConfigFlag(flag: ConfigFlag): boolean;
export function getConfigFlag(flag: `${ConfigFlag}`): boolean;
export function getConfigFlag(
    flag:
        | 'DISABLE_AUTO_WEAPON_SWAP'
        | 'DISABLE_PED_PROP_KNOCK_OFF'
        | 'DISABLE_IDLE_CAMERA'
        | 'DISABLE_VEHICLE_ENGINE_SHUTDOWN_ON_LEAVE'
        | 'DISABLE_SP_ENTER_VEHICLE_CLIPSET'
        | 'FORCE_RENDER_SNOW'
        | 'FORCE_HIDE_NIGHT_PROPS'
        | 'FORCE_SHOW_NIGHT_PROPS'
        | 'DISABLE_EMISSIVE_LIGHTS_RENDERING'
        | 'FORCE_VEHICLE_TYRE_BURST'
        | 'SWAP_ALLOW_HEAD_PROP_IN_VEHICLE_FLAG',
): boolean {
    // TODO Implement
    return false;
}

export function doesConfigFlagExist(flag: string): boolean;
/**
 * Returns whether the specified config flag exists.
 *
 * @param flag Config flag name.
 * @returns True when the config flag exists.
 */
export function doesConfigFlagExist(flag: string): boolean {
    // TODO Implement
    return false;
}

export function setCursorPos(pos: shared.IVector2, normalized?: boolean): void;
/**
 * Sets the current position of the cursor.
 *
 * @remarks The cursor has to be visible for this to take effect.
 */
export function setCursorPos(pos: shared.IVector2, normalized: boolean): void {
    // TODO Implement
}

export function setMsPerGameMinute(milliseconds: number): void;
/**
 * Sets the amount of real milliseconds that have to pass every game minute.
 */
export function setMsPerGameMinute(milliseconds: number): void {
    // TODO Implement
}

export function setRotationVelocity(scriptID: number, x: number, y: number, z: number): void;
/**
 * Sets the rotation velocity for the specified entity.
 *
 * @param scriptID The script id of the entity.
 * @param x The rotation velocity on the X axis.
 * @param y The rotation velocity on the Y axis.
 * @param z The rotation velocity on the Z axis.
 */
export function setRotationVelocity(scriptID: number, x: number, y: number, z: number): void {
    // TODO Implement
}

export function setStat(statName: StatName, value: number): void;
export function setStat(statName: `${StatName}`, value: number): void;
export function setStat(statName: 'stamina' | 'strength' | 'lung_capacity' | 'wheelie_ability' | 'flying_ability' | 'shooting_ability' | 'stealth_ability', value: number): void {
    // TODO Implement
}

export function setWeatherCycle(weathers: number[], multipliers: number[]): void;
/**
 * Sets the current weather cycle.
 *
 * @remarks This has to be activated after using it by using the {@link setWeatherSyncActive} function.
 * The weathers and multipliers array has to be of the same length.
 *
 * @param weathers An array containing the weather ids for the weather cycle.
 * @param multipliers An array containing the multipliers for the weather cycle.
 */
export function setWeatherCycle(weathers: number[], multipliers: number[]): void {
    // TODO Implement
}

export function setWeatherSyncActive(isActive: boolean): void;
/**
 * Sets whether the weather sync is active.
 *
 * @remarks The weather sync has to be set by using the {@link setWeatherCycle} function.
 *
 * @param isActive Whether the weather sync should be active.
 */
export function setWeatherSyncActive(isActive: boolean): void {
    // TODO Implement
}

export function showCursor(state: boolean): void;
/**
 * Changes the visibility of cursor.
 *
 * @remarks This is handled by resource scoped internal integer, which gets increased/decreased by every function call. When you show your cursor 5 times, to hide it you have to do that 5 times accordingly.
 *
 * @param state A boolean indicating whenever cursor should be visible or not.
 */
export function showCursor(state: boolean): void {
    // TODO Implement
}

export function isCursorVisible(): boolean;
export function isCursorVisible(): boolean {
    // TODO Implement
    return false;
}

export function toggleGameControls(state: boolean): void;
/**
 * Toggles the game controls.
 *
 * @remarks When this is set to false, all controls are disabled, so you can't move your character or the camera.
 *
 * @param state True to enable controls, false to disable controls.
 */
export function toggleGameControls(state: boolean): void {
    // TODO Implement
}

export function toggleVoiceControls(state: boolean): void;
export function toggleVoiceControls(state: boolean): void {
    // TODO Implement
}

export function isFullScreen(): boolean;
export function isFullScreen(): boolean {
    // TODO Implement
    return false;
}

export function getPoolSize(poolName: string): number;
export function getPoolSize(poolName: string): number {
    // TODO Implement
    return 0;
}

export function getPoolCount(poolName: string): number;
export function getPoolCount(poolName: string): number {
    // TODO Implement
    return 0;
}

export function getPoolEntities(poolName: string): number[];
export function getPoolEntities(poolName: string): number[] {
    // TODO Implement
    return [];
}

export function getVoicePlayers(): number[];
// Voice related functions
export function getVoicePlayers(): number[] {
    // TODO Implement
    return [];
}

export function removeVoicePlayer(player: number): void;
export function removeVoicePlayer(player: number): void {
    // TODO Implement
}

export function getVoiceSpatialVolume(player: number): number;
export function getVoiceSpatialVolume(player: number): number {
    // TODO Implement
    return 0;
}

export function setVoiceSpatialVolume(player: number, volume: number): void;
export function setVoiceSpatialVolume(player: number, volume: number): void {
    // TODO Implement
}

export function getVoiceNonSpatialVolume(player: number): number;
export function getVoiceNonSpatialVolume(player: number): number {
    // TODO Implement
    return 0;
}

export function setVoiceNonSpatialVolume(player: number, volume: number): void;
export function setVoiceNonSpatialVolume(player: number, volume: number): void {
    // TODO Implement
}

export function addVoiceFilter(player: number, filter: AudioFilter): void;
export function addVoiceFilter(player: number, filter: AudioFilter): void {
    // TODO Implement
}

export function removeVoiceFilter(player: number): void;
export function removeVoiceFilter(player: number): void {
    // TODO Implement
}

export function getVoiceFilter(player: number): AudioFilter;
export function getVoiceFilter(player: number): AudioFilter {
    // TODO Implement
    return null;
}

export function updateClipContext(context: Record<string, string>): void;
export function updateClipContext(context: Record<string, string>): void {
    // TODO Implement
}

export function loadYtyp(path: string): boolean;
/**
 * Load a specific ytyp file.
 *
 * @example
 * ```js
 * alt.loadYtyp("x64u.rpf/levels/gta5/_hills/country_06/country_06_metadata.rpf/cs6_08_interior_cs6_08_mine_int.ytyp")
 * ```
 *
 * @param path Relative path to the game folder.
 */
export function loadYtyp(path: string): boolean {
    // TODO Implement
    return false;
}

export function unloadYtyp(path: string): boolean;
/**
 * Unload a specific ytyp file.
 *
 * @example
 * ```js
 * alt.unloadYtyp("x64u.rpf/levels/gta5/_hills/country_06/country_06_metadata.rpf/cs6_08_interior_cs6_08_mine_int.ytyp")
 * ```
 *
 * @param path Relative path to the game folder.
 */
export function unloadYtyp(path: string): boolean {
    // TODO Implement
    return false;
}

export function evalModule(code: string): Record<string, any>;
/**
 * Evaluates and executes the given JavaScript code.
 *
 * @remarks The code is evaluated in its own context, so it cannot access variables, functions etc. from the calling file.
 *
 * @param code The JavaScript code.
 * @returns The exports of the evaluated module.
 */
export function evalModule(code: string): Record<string, any> {
    // TODO Implement
    return null;
}

export function getRemoteEventListeners(eventName: string | null): readonly ((...args: any[]) => void)[];
/**
 * Gets all the listeners that have been subscribed using {@link onServer} for the specified remote event.
 *
 * @param eventName Name of the event or null for generic event.
 * @returns Array of listener functions for that event.
 */
export function getRemoteEventListeners(eventName: string): readonly ((...args: any[]) => void)[] {
    // TODO Implement
    return [];
}

export function getHeadshotBase64(id: number): string;
/**
 * Gets the Base64 encoded string of the headshot with the specified ID.
 *
 * @remarks The headshot ID is returned by the `registerPedheadshot3`, `registerPedheadshotTransparent` or `registerPedheadshot` native.
 *
 * @param id ID of the headshot.
 * @returns The Base64 string of the headshot image.
 */
export function getHeadshotBase64(id: number): string {
    // TODO Implement
    return '';
}

export function setPedDlcClothes(scriptID: number, dlc: number, component: number, drawable: number, texture: number, palette?: number): void;
/**
 * Sets the specified dlc clothing component to a ped.
 *
 * @param scriptID ScriptID of the Ped.
 * @param dlc Dlc hash of the clothing.
 * @param component Component id of the clothing.
 * @param drawable Drawable id of the clothing.
 * @param texture Texture id of the clothing.
 * @param palette Palette of the clothing.
 */
export function setPedDlcClothes(scriptID: number, dlc: number, component: number, drawable: number, texture: number, palette: number): void {
    // TODO Implement
}

export function setPedDlcProp(scriptID: number, dlc: number, component: number, drawable: number, texture: number): void;
/**
 * Sets the specified dlc prop component to a ped.
 *
 * @param scriptID ScriptID of the Ped.
 * @param dlc Dlc hash of the prop.
 * @param component Component id of the prop.
 * @param drawable Drawable id of the prop.
 * @param texture Texture id of the prop.
 */
export function setPedDlcProp(scriptID: number, dlc: number, component: number, drawable: number, texture: number): void {
    // TODO Implement
}

export function clearPedProp(scriptID: number, component: number): void;
/**
 * Removes a specified prop component from a ped.
 *
 * @param scriptID ScriptID of the Ped.
 * @param component Component id of the prop.
 */
export function clearPedProp(scriptID: number, component: number): void {
    // TODO Implement
}

export function setWatermarkPosition(position: WatermarkPosition): void;
export function setWatermarkPosition<T extends number>(position: T): void;
/** @deprecated This method will be removed in the next major release. (v17)  */
export function setWatermarkPosition<T extends number>(position: T): void {
    // TODO Implement
}

export function getPing(): number;
/**
 * Represents the current client ping.
 */
export function getPing(): number {
    // TODO Implement
    return 0;
}

export function getFps(): number;
/**
 * Represents the current client fps.
 */
export function getFps(): number {
    // TODO Implement
    return 0;
}

export function getTotalPacketsSent(): bigint;
export function getTotalPacketsSent(): bigint {
    // TODO Implement
    return 0n;
}

export function getTotalPacketsLost(): bigint;
export function getTotalPacketsLost(): bigint {
    // TODO Implement
    return 0n;
}

export function getServerIp(): string;
/**
 * Gets the ip adress of the server where you are connected to.
 *
 * @returns The server ip.
 */
export function getServerIp(): string {
    // TODO Implement
    return '';
}

export function getServerPort(): number;
/**
 * Gets the port of the server where you are connected to.
 *
 * @returns The server port.
 */
export function getServerPort(): number {
    // TODO Implement
    return 0;
}

export function copyToClipboard(val: string): void;
/**
 * Copy content into users clipboard.
 *
 * @remarks This function requires [Clipboard Access](https://docs.altv.mp/articles/permissions.html) permission from the user.
 */
export function copyToClipboard(val: string): void {
    // TODO Implement
}

export function toggleRmlControls(state: boolean): void;
export function toggleRmlControls(state: boolean): void {
    // TODO Implement
}

export function rmlControlsEnabled(): boolean;
export function rmlControlsEnabled(): boolean {
    // TODO Implement
    return false;
}

export function loadRmlFont(path: string, name: string, italic?: boolean, bold?: boolean): void;
export function loadRmlFont(path: string, name: string, italic: boolean, bold: boolean): void {
    // TODO Implement
}

export function worldToScreen(x: number, y: number, z: number): shared.Vector3;
export function worldToScreen(value: shared.IVector3): shared.Vector3;
export function worldToScreen(xOrValue: number | shared.IVector3, y?: number, z?: number): shared.Vector3 {
    if (typeof xOrValue === 'number') {
        // Fall: Drei separate Zahlen wurden übergeben
        // Hier kannst du die Umrechnung der Weltkoordinaten zu Bildschirmkoordinaten implementieren.
        return { x: xOrValue, y: y as number, z: z as number } as shared.Vector3;
    } else {
        // Fall: Ein einzelnes Objekt vom Typ shared.IVector3 wurde übergeben.
        return { x: xOrValue.x, y: xOrValue.y, z: xOrValue.z } as shared.Vector3;
    }
}

export function screenToWorld(x: number, y: number): shared.Vector3;
export function screenToWorld(value: shared.IVector2): shared.Vector3;
export function screenToWorld(xOrValue: number | shared.IVector2, y?: number): shared.Vector3 {
    // TODO Implement
    return null;
}

export function getCamPos(): shared.Vector3;
export function getCamPos(): shared.Vector3 {
    // TODO Implement
    return null;
}

export function getScreenResolution(): shared.Vector2;
export function getScreenResolution(): shared.Vector2 {
    // TODO Implement
    return null;
}

export function requestModel(model: string | number, timeout?: number): Promise<void>;
/**
 * Loads a model into memory asynchronously, like {@link loadModelAsync} but more safely.
 *
 * @remarks If you can't load a specific model with this method, use {@link loadModelAsync} instead.
 */
export function requestModel(model: string | number, timeout: number): Promise<void> {
    // TODO Implement
    return null;
}

export function requestAnimDict(animDict: string, timeout?: number): Promise<void>;
export function requestAnimDict(animDict: string, timeout: number): Promise<void> {
    // TODO Implement
    return null;
}

export function requestAnimSet(animSet: string, timeout?: number): Promise<void>;
export function requestAnimSet(animSet: string, timeout: number): Promise<void> {
    // TODO Implement
    return null;
}

export function requestClipSet(clipSet: string, timeout?: number): Promise<void>;
export function requestClipSet(clipSet: string, timeout: number): Promise<void> {
    // TODO Implement
    return null;
}

export function requestCutscene(cutsceneName: string, flags: string | number, timeout?: number): Promise<void>;
export function requestCutscene(cutsceneName: string, flags: string | number, timeout: number): Promise<void> {
    // TODO Implement
    return null;
}

export function drawText2dThisFrame(text: string, pos2d?: shared.IVector2, font?: GameFont, scale?: number, color?: shared.RGBA, outline?: boolean, dropShadow?: boolean, textAlign?: TextAlign): void;
export function drawText2dThisFrame(text: string, pos2d: shared.IVector2, font: GameFont, scale: number, color: shared.RGBA, outline: boolean, dropShadow: boolean, textAlign: TextAlign): void {
    // TODO Implement
}

export function drawText2d(text: string, pos2d?: shared.IVector2, font?: GameFont, scale?: number, color?: shared.RGBA, outline?: boolean, dropShadow?: boolean, textAlign?: TextAlign): shared.Utils.EveryTick;
export function drawText2d(text: string, pos2d: shared.IVector2, font: GameFont, scale: number, color: shared.RGBA, outline: boolean, dropShadow: boolean, textAlign: TextAlign): shared.Utils.EveryTick {
    // TODO Implement
    return null;
}

export function drawText3dThisFrame(text: string, pos3d: shared.IVector3, font?: GameFont, scale?: number, color?: shared.RGBA, outline?: boolean, dropShadow?: boolean, textAlign?: TextAlign): void;
export function drawText3dThisFrame(text: string, pos3d: shared.IVector3, font: GameFont, scale: number, color: shared.RGBA, outline: boolean, dropShadow: boolean, textAlign: TextAlign): void {
    // TODO Implement
}

export function drawText3d(text: string, pos3d: shared.IVector3, font?: GameFont, scale?: number, color?: shared.RGBA, outline?: boolean, dropShadow?: boolean, textAlign?: TextAlign): shared.Utils.EveryTick;
export function drawText3d(text: string, pos3d: shared.IVector3, font: GameFont, scale: number, color: shared.RGBA, outline: boolean, dropShadow: boolean, textAlign: TextAlign): shared.Utils.EveryTick {
    // TODO Implement
    return null;
}

export function loadMapArea(pos: shared.IVector3, radius?: number, timeout?: number): Promise<void>;
/**
 * Loads the map area at a certain position
 * and waits asynchronously until all parts in view area have been loaded.
 *
 * @remarks Uses {@link FocusData} and {@link https://natives.altv.mp/#/0xACCFB4ACF53551B0 newLoadSceneStartSphere}.
 *
 * @param pos Coords of the map area.
 * @param radius Radius of sphere to load. Defaults to 50.0.
 * @param timeout The maximum milliseconds to wait, otherwise promise will be rejected. Defaults to 5000.
 */
export function loadMapArea(pos: shared.IVector3, radius: number, timeout: number): Promise<void> {
    // TODO Implement
    return null;
}

export function registerPedheadshotBase64(ped: Player | number): Promise<string>;
/**
 * Combination of `native.registerPedheadshot` and {@link getHeadshotBase64 alt.getHeadshotBase64}
 */
export function registerPedheadshotBase64(ped: number | Player): Promise<string> {
    // TODO Implement
    return null;
}

export function registerPedheadshot3Base64(ped: Player | number): Promise<string>;
/**
 * Combination of `native.registerPedheadshot3` and {@link getHeadshotBase64 alt.getHeadshotBase64}
 */
export function registerPedheadshot3Base64(ped: number | Player): Promise<string> {
    // TODO Implement
    return null;
}

export function registerPedheadshotTransparentBase64(ped: Player | number): Promise<string>;
/**
 * Combination of `native.registerPedheadshotTransparentBase64` and {@link getHeadshotBase64 alt.getHeadshotBase64}
 */
export function registerPedheadshotTransparentBase64(ped: number | Player): Promise<string> {
    // TODO Implement
    return null;
}

export function getClosestPlayer(options?: { pos?: shared.IVector3; range?: number }): Player | null;
/**
 * Finds the closest player (if any) from {@link Player.streamedIn alt.Player.streamedIn}.
 *
 * `pos` - From which position to look for the nearest player. Defaults to local player position.
 *
 * `range` - In which range to search for the nearest player. Defaults to `Infinity`.
 */
export function getClosestPlayer(options: { pos?: shared.IVector3; range?: number }): Player {
    // TODO Implement
    return null;
}

export function getClosestVehicle(options?: { pos?: shared.IVector3; range?: number }): Vehicle | null;
/**
 * Finds the closest vehicle (if any) from {@link Vehicle.streamedIn alt.Vehicle.streamedIn}.
 *
 * `pos` - From which position to look for the nearest vehicle. Defaults to local player position.
 *
 * `range` - In which range to search for the nearest vehicle. Defaults to `Infinity`.
 */
export function getClosestVehicle(options: { pos?: shared.IVector3; range?: number }): Vehicle {
    // TODO Implement
    return null;
}

export function getClosestObject(options?: { pos?: shared.IVector3; range?: number }): Object | null;
/**
 * Finds the closest object (if any) from {@link Object.all alt.Object.all}.
 *
 * `pos` - From which position to look for the nearest object. Defaults to local player position.
 *
 * `range` - In which range to search for the nearest object. Defaults to `Infinity`.
 */
export function getClosestObject(options: { pos?: shared.IVector3; range?: number }): Object {
    // TODO Implement
    return null;
}

export function getClosestWorldObject(options?: { pos?: shared.IVector3; range?: number }): Object | null;
/**
 * Finds the closest world object (if any) from {@link Object.allWorld alt.Object.allWorld}.
 *
 * `pos` - From which position to look for the nearest world object. Defaults to local player position.
 *
 * `range` - In which range to search for the nearest world object. Defaults to `Infinity`.
 */
export function getClosestWorldObject(options: { pos?: shared.IVector3; range?: number }): Object {
    // TODO Implement
    return null;
}

export function getClosestVirtualEntity(options?: { pos?: shared.IVector3; range?: number }): VirtualEntity | null;
/**
 * Finds the closest virtualEntity (if any) from {@link VirtualEntity.streamedIn alt.VirtualEntity.streamedIn}.
 *
 * `pos` - From which position to look for the nearest virtualEntity. Defaults to local player position.
 *
 * `range` - In which range to search for the nearest virtualEntity. Defaults to `Infinity`.
 *
 */
export function getClosestVirtualEntity(options: { pos?: shared.IVector3; range?: number }): VirtualEntity {
    // TODO Implement
    return null;
}

export function getLocalMeta<K extends string>(key: Exclude<K, keyof shared.ICustomPlayerLocalMeta>): unknown;
export function getLocalMeta<K extends shared.ExtractStringKeys<shared.ICustomPlayerLocalMeta>>(key: K): shared.ICustomPlayerLocalMeta[K] | undefined;
export function getLocalMeta<V extends any>(key: string): V | undefined;
/** @deprecated See {@link "alt-shared".ICustomPlayerLocalMeta} */
export function getLocalMeta<V extends any>(key: string): V {
    // TODO Implement
    return null;
}

export function hasLocalMeta(key: string): boolean;
export function hasLocalMeta<K extends shared.ExtractStringKeys<shared.ICustomPlayerLocalMeta>>(key: K): boolean;
export function hasLocalMeta<K extends shared.ExtractStringKeys<shared.ICustomPlayerLocalMeta>>(key: K): boolean {
    // TODO Implement
    return false;
}

export function setMinimapComponentPosition(name: string, alignX: string, alignY: string, pos: shared.IVector2, size: shared.IVector2): void;
export function setMinimapComponentPosition(name: string, alignX: string, alignY: string, posX: number, posY: number, sizeX: number, sizeY: number): void;
/**
 * Modify minimap component position.
 *
 * @param name Name of the minimap component.
 * @param alignX Same as alignX field in fontend.xml.
 * @param alignY Same as alignY field in fontend.xml.
 * @param posX Same as posX field in fontend.xml.
 * @param posY Same as posY field in fontend.xml.
 * @param sizeX Same as sizeX field in fontend.xml.
 * @param sizeY Same as sizeY field in fontend.xml.
 */
export function setMinimapComponentPosition(name: string, alignX: string, alignY: string, posOrPosX: shared.IVector2 | number, sizeOrPosY: shared.IVector2 | number, sizeX?: number, sizeY?: number): void {
    if (typeof posOrPosX === 'number') {
        // Numerische Variante:
        const posX = posOrPosX;
        const posY = sizeOrPosY as number;
        // Hier können sizeX und sizeY als Zahlen verwendet werden.
        // TODO: Numerische Variante implementieren
    } else {
        // Vektor-Variante:
        const pos = posOrPosX as shared.IVector2;
        const size = sizeOrPosY as shared.IVector2;
        // TODO: Vektor-Variante implementieren
    }
}

export function resetMinimapComponentPosition(name: string): void;
/**
 * Reset minimap default component position.
 *
 * @param name Name of the minimap component.
 */
export function resetMinimapComponentPosition(name: string): void {
    // TODO Implement
}

export function setMinimapIsRectangle(state: boolean): void;
/**
 * Defines if the minimap is a rectangle to change the blip clipping.
 *
 * @param state False will clip the blips rounded to the minimap.
 */
export function setMinimapIsRectangle(state: boolean): void {
    // TODO Implement
}

export function loadDefaultIpls(): void;
export function loadDefaultIpls(): void {
    // TODO Implement
}

export function isPointOnScreen(x: number, y: number, z: number): boolean;
export function isPointOnScreen(value: shared.IVector3): boolean;
export function isPointOnScreen(xOrValue: number | shared.IVector3, y?: number, z?: number): boolean {
    if (typeof xOrValue === 'number') {
        // Fall: Es wurden drei Zahlen übergeben.
        // y und z sind hier definiert.
        return false; // TODO: Logik für numerische Variante implementieren.
    } else {
        // Fall: Es wurde ein shared.IVector3 übergeben.
        // Zugriff auf xOrValue.x, xOrValue.y, xOrValue.z.
        return false; // TODO: Logik für Vektor-Variante implementieren.
    }
}

export function getPedBonePos(ped: number, boneId: number): shared.Vector3;
export function getPedBonePos(ped: number, boneId: number): shared.Vector3 {
    // TODO Implement
    return null;
}

export class BaseObject extends shared.BaseObject {
    /**
     * Whether this entity was created clientside or serverside. (Clientside = false, Serverside = true).
     *
     */
    public readonly isRemote: boolean;
    /**
     * The serverside id of this entity.
     * */
    public readonly remoteID: number;
    /**
     * Gets the base object with the given type and local id
     */

    public static getByID(type: shared.BaseObjectType, id: number): BaseObject {
        // TODO implement
        return null;
    }

    public static getByRemoteID(type: shared.BaseObjectType, id: number): BaseObject {
        // TODO implement
        return null;
    }
    public deleteMeta(key: string): void;

    public deleteMeta<K extends shared.ExtractStringKeys<ICustomBaseObjectMeta>>(key: string | K): void {
        // TODO implement
    }
    public hasMeta(key: string): boolean;

    public hasMeta<K extends shared.ExtractStringKeys<ICustomBaseObjectMeta>>(key: string | K): boolean {
        // TODO implement
        return false;
    }
    public getMeta<K extends string>(key: Exclude<K, never>): unknown;
    public getMeta<K extends shared.ExtractStringKeys<ICustomBaseObjectMeta>>(key: K): ICustomBaseObjectMeta[K];
    /** @deprecated See {@link ICustomBaseObjectMeta} */
    public getMeta<K extends string>(key: K): K extends shared.ExtractStringKeys<ICustomBaseObjectMeta> ? ICustomBaseObjectMeta[K] : unknown {
        // TODO implementieren
        return null as any;
    }

    public setMeta<K extends string>(key: K, value: shared.InterfaceValueByKey<ICustomBaseObjectMeta, K, unknown, void>): void;
    public setMeta<K extends shared.ExtractStringKeys<ICustomBaseObjectMeta>>(key: K, value: ICustomBaseObjectMeta[K]): void;
    /** @deprecated See {@link ICustomBaseObjectMeta} */
    public setMeta<V extends any, K extends string = string>(key: K, value: shared.InterfaceValueByKey<ICustomBaseObjectMeta, K, V, void>): void;

    public setMeta<K extends string, V>(
        key: K | shared.MetaValues<ICustomBaseObjectMeta>,
        value: K extends shared.ExtractStringKeys<ICustomBaseObjectMeta>
            ? ICustomBaseObjectMeta[K] | shared.InterfaceValueByKey<ICustomBaseObjectMeta, K, V, void>
            : shared.InterfaceValueByKey<ICustomBaseObjectMeta, K, unknown, void>,
    ): void {
        // TODO implement
    }
}

export class VirtualEntityGroup extends BaseObject {
    public constructor(maxEntitiesInStream: number) {
        super();
        // TODO: Implement constructor
    }
    /** Returns all Virtual Entity Group instances */
    public static readonly all: readonly VirtualEntityGroup[];
    /**
     * Max number of entities per player stream.
     * [More info](https://docs.altv.mp/articles/virtualentity.html#what-is-max-number-of-entities-per-player-stream).
     */
    public readonly maxEntitiesInStream: number;
}

export class WorldObject extends BaseObject {
    /**
     * Object position
     */
    public pos: shared.Vector3;
    /**
     * Object dimension.
     *
     * @remarks Check https://docs.altv.mp/articles/dimensions.html to understand how it works.
     *
     */
    public dimension: number;
}

export class VirtualEntity extends WorldObject {
    public constructor(group: VirtualEntityGroup, position: shared.Vector3, streamingDistance: number, data: Record<string, any>) {
        super();
        // TODO: Implement constructor
    }
    /** Returns all Virtual Entity instances */
    public static readonly all: readonly VirtualEntity[];
    public static readonly streamedIn: readonly VirtualEntity[];
    /** Virtual Entity Group this entity belongs to */
    public readonly group: VirtualEntityGroup;
    public readonly isStreamedIn: boolean;
    public visible: boolean;
    /**
     * Gets a value using the specified key.
     * Only available for server-side created Virtual Entities.
     *
     * @param key The key of the value to get.
     * @returns Dynamic value associated with the specified key or undefined if no data is present.
     */
    public getStreamSyncedMeta<K extends string>(key: Exclude<K, never>): unknown;
    public getStreamSyncedMeta<K extends shared.ExtractStringKeys<shared.ICustomVirtualEntityStreamSyncedMeta>>(key: K): shared.ICustomVirtualEntityStreamSyncedMeta[K];
    /** @deprecated See {@link "alt-shared".ICustomVirtualEntityStreamSyncedMeta} */

    public getStreamSyncedMeta<K extends string, V>(
        key: K | shared.MetaValues<shared.ICustomVirtualEntityStreamSyncedMeta>,
    ): K extends shared.ExtractStringKeys<shared.ICustomVirtualEntityStreamSyncedMeta> ? shared.ICustomVirtualEntityStreamSyncedMeta[K] | V : unknown {
        // TODO Implementieren
        return null as any;
    }

    /**
     * Determines whether contains the specified key.
     * Only available for server-side created Virtual Entities.
     *
     * @param key The key of the value to locate.
     * @returns True if the meta table contains any data at the specified key or False if not
     */
    public hasStreamSyncedMeta(key: string): boolean;

    public hasStreamSyncedMeta<K extends shared.ExtractStringKeys<shared.ICustomVirtualEntityStreamSyncedMeta>>(key: string | K): boolean {
        // TODO implement
        return false;
    }
    /**
     * Returns all set meta keys of the Virtual Entity.
     * Only available for server-side created Virtual Entities.
     */

    public getStreamSyncedMetaKeys(): readonly string[] {
        // TODO implement
        return [];
    }
}

export class Audio extends BaseObject {
    public constructor(source: string, volume: number, radio: boolean, clearCache: boolean) {
        super();
        // TODO: Implement constructor
    }
    public static readonly all: readonly Audio[];
    public static readonly count: number;
    public source: string;
    public looped: boolean;
    public volume: number;
    public readonly currentTime: number;
    public readonly maxTime: number;
    public readonly playing: boolean;
    /**
     * Retrieves the audio from the pool.
     *
     * @param id The id of the audio.
     * @returns Entity if it was found, otherwise null.
     */

    public static getByID(id: number): Audio {
        // TODO implement
        return null;
    }
    /**
     * @remarks This method has no effect if the {@link frontendPlay} property returns true.
     */

    public addOutput(output: AudioOutput): void {
        // TODO implement
    }
    /**
     * @remarks This method has no effect if the {@link frontendPlay} property returns true.
     */

    public removeOutput(output: AudioOutput): void {
        // TODO implement
    }
    /**
     * @remarks This method has no effect if the {@link frontendPlay} property returns true.
     */

    public getOutputs(): readonly (number | AudioOutput)[] {
        // TODO implement
        return [];
    }

    public play(): void {
        // TODO implement
    }

    public pause(): void {
        // TODO implement
    }

    public reset(): void {
        // TODO implement
    }

    public seek(time: number): void {
        // TODO implement
    }
    public on(event: 'inited', callback: () => void): void;
    public on(event: 'streamStarted', callback: () => void): void;
    public on(event: 'streamEnded', callback: () => void): void;
    public on(event: 'streamPaused', callback: () => void): void;
    public on(event: 'streamReset', callback: () => void): void;
    public on(event: 'streamSeek', callback: (time: number) => void): void;
    public on(event: 'volumeChange', callback: (vol: number) => void): void;

    public on(
        event: 'inited' | 'streamStarted' | 'streamEnded' | 'streamPaused' | 'streamReset' | 'streamSeek' | 'volumeChange' | 'error',
        callback: (() => void) | ((time: number) => void) | ((vol: number) => void) | ((code: number, message: string) => void),
    ): void {
        // TODO implement
    }
    public deleteMeta(key: string): void;

    public deleteMeta<K extends shared.ExtractStringKeys<ICustomAudioMeta>>(key: string | K): void {
        // TODO implement
    }
    public hasMeta(key: string): boolean;

    public hasMeta<K extends shared.ExtractStringKeys<ICustomAudioMeta>>(key: string | K): boolean {
        // TODO implement
        return false;
    }
    public getMeta<K extends string>(key: Exclude<K, never>): unknown;
    public getMeta<K extends shared.ExtractStringKeys<ICustomAudioMeta>>(key: K): ICustomAudioMeta[K];
    /** @deprecated See {@link ICustomAudioMeta} */

    public getMeta<K extends string, V>(key: K | shared.MetaValues<ICustomAudioMeta>): K extends shared.ExtractStringKeys<ICustomAudioMeta> ? ICustomAudioMeta[K] | V : unknown {
        // TODO implementieren
        return null as any;
    }

    public setMeta<K extends string>(key: K, value: shared.InterfaceValueByKey<ICustomAudioMeta, K, unknown, void>): void;
    public setMeta<K extends shared.ExtractStringKeys<ICustomAudioMeta>>(key: K, value: ICustomAudioMeta[K]): void;
    /** @deprecated See {@link ICustomAudioMeta} */
    public setMeta<V extends any, K extends string = string>(key: K, value: shared.InterfaceValueByKey<ICustomAudioMeta, K, V, void>): void;

    public setMeta<K extends string, V>(
        key: K | shared.MetaValues<ICustomAudioMeta>,
        value: K extends shared.ExtractStringKeys<ICustomAudioMeta> ? ICustomAudioMeta[K] | shared.InterfaceValueByKey<ICustomAudioMeta, K, V, void> : shared.InterfaceValueByKey<ICustomAudioMeta, K, unknown, void>,
    ): void {
        // TODO implementieren
    }
}

export class AudioOutput extends BaseObject {
    protected constructor() {
        super();
        // TODO: Implement constructor
    }
    public static readonly all: readonly AudioOutput[];
    public static readonly count: number;
    public muted: boolean;
    public volume: number;
    public category: number;
    public filter: AudioFilter;
    /**
     * Retrieves the audiooutput from the pool.
     *
     * @param id The id of the audiooutput.
     * @returns Entity if it was found, otherwise null.
     */

    public static getByID(id: number): AudioOutput {
        // TODO implement
        return null;
    }
}

export class AudioOutputFrontend extends AudioOutput {
    public constructor(categoryHash: number) {
        super();
        // TODO: Implement constructor
    }
}

export class AudioOutputWorld extends AudioOutput {
    public constructor(pos: shared.IVector3, categoryHash: number) {
        super();
        // TODO: Implement constructor
    }
    public pos: shared.Vector3;
}

export class AudioOutputAttached extends AudioOutput {
    public constructor(entity: WorldObject, categoryHash: number) {
        super();
        // TODO: Implement constructor
    }
    public entity: WorldObject;
}

export class Checkpoint extends WorldObject {
    public constructor(type: shared.CheckpointType, pos: shared.IVector3, nextPos: shared.IVector3, radius: number, height: number, rgbColor: shared.RGBA, iconColor: shared.RGBA, streamingDistance: number) {
        super();
        // TODO: Implement constructor
    }
    public checkpointType: shared.CheckpointType;
    public nextPos: shared.Vector3;
    public radius: number;
    public height: number;
    public color: shared.RGBA;
    public iconColor: shared.RGBA;
    /**
     * Streaming range for the checkpoint
     */
    public readonly streamingDistance: number;
    public static readonly all: readonly Checkpoint[];
    public static readonly count: number;
    public readonly isStreamedIn: boolean;
    public visible: boolean;
    public readonly scriptID: number;
    /**
     * Retrieves the checkpoint from the pool.
     *
     * @param id The id of the checkpoint.
     * @returns Entity if it was found, otherwise null.
     *
     */

    public static getByID(id: number): Checkpoint {
        // TODO implement
        return null;
    }

    public static getByScriptID(scriptID: number): Checkpoint {
        // TODO implement
        return null;
    }

    public isEntityIn(entity: Entity): boolean {
        // TODO implement
        return false;
    }

    public isPointIn(pos: shared.IVector3): boolean {
        // TODO implement
        return false;
    }
    public deleteMeta(key: string): void;

    public deleteMeta<K extends shared.ExtractStringKeys<ICustomCheckpointMeta>>(key: string | K): void {
        // TODO implement
    }
    public hasMeta(key: string): boolean;

    public hasMeta<K extends shared.ExtractStringKeys<ICustomCheckpointMeta>>(key: string | K): boolean {
        // TODO implement
        return false;
    }
    public getMeta<K extends string>(key: Exclude<K, never>): unknown;
    public getMeta<K extends shared.ExtractStringKeys<ICustomCheckpointMeta>>(key: K): ICustomCheckpointMeta[K];
    /** @deprecated See {@link ICustomCheckpointMeta} */

    public getMeta<K extends string, V>(key: K | shared.MetaValues<ICustomCheckpointMeta>): K extends shared.ExtractStringKeys<ICustomCheckpointMeta> ? ICustomCheckpointMeta[K] | V : unknown {
        // TODO implementieren
        return null as any;
    }

    public setMeta<K extends string>(key: K, value: shared.InterfaceValueByKey<ICustomCheckpointMeta, K, unknown, void>): void;
    public setMeta<K extends shared.ExtractStringKeys<ICustomCheckpointMeta>>(key: K, value: ICustomCheckpointMeta[K]): void;
    /** @deprecated See {@link ICustomCheckpointMeta} */
    public setMeta<V extends any, K extends string = string>(key: K, value: shared.InterfaceValueByKey<ICustomCheckpointMeta, K, V, void>): void;

    public setMeta<K extends string, V>(
        key: K | shared.MetaValues<ICustomCheckpointMeta>,
        value: K extends shared.ExtractStringKeys<ICustomCheckpointMeta>
            ? ICustomCheckpointMeta[K] | shared.InterfaceValueByKey<ICustomCheckpointMeta, K, V, void>
            : shared.InterfaceValueByKey<ICustomCheckpointMeta, K, unknown, void>,
    ): void {
        // TODO implementieren
    }
}

export class Entity extends WorldObject {
    /**
     * Array with all entities.
     *
     * @remarks This creates a clone of the array everytime it is called.
     * It is advised to call this once and store the result in a variable, before iterating over it.
     * @example
     * ```js
     * const entities = alt.Entity.all; // Store it in a variable, so it doesn't create a copy of the array on each iteration
     * for(let i = 0; i < entities.length; i++)
     * {
     *   alt.log(`${entities[i].id}`); // Logs the id of every entity
     * }
     * ```
     */
    public static readonly all: readonly Entity[];
    /** Internal game id that can be used in native calls */
    public readonly scriptID: number;
    /**
     * Network owner of the entity.
     *
     * @remarks Network owner is responsible for syncing entity with the server.
     * It changes when actual network owner passes the migration range,
     * then the new one is determined based on distance from the entity
     * (if entity is a vehicle, then the driver will take priority for becoming network owner).
     * Disabling migration range will stop this process from happening until turned on again.
     */
    public readonly netOwner: Player;
    /**
     * Returns whether the entity is spawned in the game world.
     *
     * @remarks This does the same thing as checking if the {@link scriptID} is 0.
     */
    public readonly isSpawned: boolean;
    /** Hash of entity model */
    public static get model(): number {
        // TODO Implement
        return 0;
    }
    /**
     * Object position.
     * @remarks Setting this throws an error if the client is not the network owner of an entity
     */
    declare public pos: shared.Vector3;
    /**
     * Entity rotation in radians
     * @remarks Setting this throws an error if the client is not the network owner of an entity
     */
    public rot: shared.Vector3;
    public readonly visible: boolean;
    public frozen: boolean;
    /**
     * Retrieves the entity from the pool.
     *
     * @param scriptID The script id of the entity.
     * @returns Entity if it was found, otherwise null.
     */

    public static getByScriptID(scriptID: number): Entity {
        // TODO implement
        return null;
    }
    public setMeta<K extends string>(key: K, value: shared.InterfaceValueByKey<ICustomEntityMeta, K, unknown, void>): void;
    public setMeta<K extends shared.ExtractStringKeys<ICustomEntityMeta>>(key: K, value: ICustomEntityMeta[K]): void;
    /** @deprecated See {@link ICustomEntityMeta} */
    public setMeta<V extends any, K extends string = string>(key: K, value: shared.InterfaceValueByKey<ICustomEntityMeta, K, V, void>): void;

    public setMeta<K extends string, V>(
        key: K | shared.MetaValues<ICustomEntityMeta>,
        value: K extends shared.ExtractStringKeys<ICustomEntityMeta> ? ICustomEntityMeta[K] | shared.InterfaceValueByKey<ICustomEntityMeta, K, V, void> : shared.InterfaceValueByKey<ICustomEntityMeta, K, unknown, void>,
    ): void {
        // TODO implementieren
    }

    public deleteMeta(key: string): void;

    public deleteMeta<K extends shared.ExtractStringKeys<ICustomEntityMeta>>(key: string | K): void {
        // TODO implement
    }
    public getMeta<K extends string>(key: Exclude<K, never>): unknown;
    public getMeta<K extends shared.ExtractStringKeys<ICustomEntityMeta>>(key: K): ICustomEntityMeta[K];
    /** @deprecated See {@link ICustomEntityMeta} */

    public getMeta<K extends string, V>(key: K | shared.MetaValues<ICustomEntityMeta>): K extends shared.ExtractStringKeys<ICustomEntityMeta> ? ICustomEntityMeta[K] | V : unknown {
        // TODO implementieren
        return null as any;
    }

    public hasMeta(key: string): boolean;

    public hasMeta<K extends shared.ExtractStringKeys<ICustomEntityMeta>>(key: string | K): boolean {
        // TODO implement
        return false;
    }
    /**
     * Gets a value using the specified key.
     *
     * @param key The key of the value to get.
     * @returns Dynamic value associated with the specified key or undefined if no data is present.
     */
    public getSyncedMeta<K extends string>(key: Exclude<K, never>): unknown;
    public getSyncedMeta<K extends shared.ExtractStringKeys<shared.ICustomEntitySyncedMeta>>(key: K): shared.ICustomEntitySyncedMeta[K];
    /** @deprecated See {@link "alt-shared".ICustomEntitySyncedMeta} */

    public getSyncedMeta<K extends string, V>(
        key: K | shared.MetaValues<shared.ICustomEntitySyncedMeta>,
    ): K extends shared.ExtractStringKeys<shared.ICustomEntitySyncedMeta> ? shared.ICustomEntitySyncedMeta[K] | V : unknown {
        // TODO implementieren
        return null as any;
    }

    /**
     * Determines whether contains the specified key.
     *
     * @param key The key of the value to locate.
     * @returns True if the meta table contains any data at the specified key or False if not
     */
    public hasSyncedMeta(key: string): boolean;

    public hasSyncedMeta<K extends shared.ExtractStringKeys<shared.ICustomEntitySyncedMeta>>(key: string | K): boolean {
        // TODO implement
        return false;
    }

    public getSyncedMetaKeys(): readonly string[] {
        // TODO implement
        return [];
    }
    /**
     * Gets a value using the specified key.
     *
     * @param key The key of the value to get.
     * @returns Dynamic value associated with the specified key or undefined if no data is present.
     */
    public getStreamSyncedMeta<K extends string>(key: Exclude<K, never>): unknown;
    public getStreamSyncedMeta<K extends shared.ExtractStringKeys<shared.ICustomEntityStreamSyncedMeta>>(key: K): shared.ICustomEntityStreamSyncedMeta[K];
    /** @deprecated See {@link "alt-shared".ICustomEntityStreamSyncedMeta} */

    public getStreamSyncedMeta<K extends string, V>(
        key: K | shared.MetaValues<shared.ICustomEntityStreamSyncedMeta>,
    ): K extends shared.ExtractStringKeys<shared.ICustomEntityStreamSyncedMeta> ? shared.ICustomEntityStreamSyncedMeta[K] | V : unknown {
        // TODO implementieren
        return null as any;
    }

    /**
     * Determines whether contains the specified key.
     *
     * @param key The key of the value to locate.
     * @returns True if the meta table contains any data at the specified key or False if not
     */
    public hasStreamSyncedMeta(key: string): boolean;

    public hasStreamSyncedMeta<K extends shared.ExtractStringKeys<shared.ICustomEntityStreamSyncedMeta>>(key: string | K): boolean {
        // TODO implement
        return false;
    }

    public getStreamSyncedMetaKeys(): readonly string[] {
        // TODO implement
        return [];
    }

    public getSyncInfo(): ISyncInfo {
        // TODO implement
        return null;
    }
}

export class Player extends Entity {
    /**
     * Array with all players.
     *
     * @remarks This creates a clone of the array everytime it is called.
     * It is advised to call this once and store the result in a variable, before iterating over it.
     * @example
     * ```js
     * const players = alt.Player.all; // Store it in a variable, so it doesn't create a copy of the array on each iteration
     * for(let i = 0; i < players.length; i++)
     * {
     *   alt.log(`${players[i].name}`); // Logs the name of every player
     * }
     * ```
     */
    declare public static readonly all: readonly Player[];
    public static readonly count: number;
    /**
     * Array with all streamed in players.
     */
    public static readonly streamedIn: readonly Player[];
    /**
     * The local player instance.
     */
    public static readonly local: LocalPlayer;
    /** Player talking state */
    public readonly isTalking: boolean;
    /** Player talking volume */
    public readonly micLevel: number;
    /** Player name */
    public readonly name: string;
    /** Player's vehicle, null if player is not in any vehicle */
    public readonly vehicle: Vehicle | LocalVehicle;
    public readonly isDead: boolean;
    /**
     * Current weapon components.
     */
    public readonly currentWeaponComponents: readonly number[];
    /**
     * Tint index for currently equipped weapon.
     */
    public readonly currentWeaponTintIndex: number;
    /**
     * Currently equipped weapon.
     */
    public readonly currentWeapon: number;
    /**
     * Is the player currently jumping.
     */
    //public readonly isJumping: boolean;
    /**
     * Is the player currently in ragdoll.
     */
    public readonly isInRagdoll: boolean;
    /**
     * Is the player currently aiming.
     *
     * @remarks
     * Returns ``true`` _ONLY_ if:
     *  - you are in first person with a gun equipped and you are not sprinting
     *  - you are in third person and aiming/shooting
     */
    public readonly isAiming: boolean;
    /**
     * Is the player currently shooting with a weapon.
     */
    //public readonly isShooting: boolean;
    /**
     * Is the player currently reloading their weapon.
     */
    public readonly isReloading: boolean;
    public readonly isEnteringVehicle: boolean;
    public readonly isLeavingVehicle: boolean;
    public readonly isOnLadder: boolean;
    public readonly isInMelee: boolean;
    public readonly isInCover: boolean;
    public readonly isParachuting: boolean;
    /**
     * Current armour.
     */
    public readonly armour: number;
    /**
     * Max available armour value.
     */
    public readonly maxArmour: number;
    /**
     * Current player movement speed.
     */
    public readonly moveSpeed: number;
    /**
     * Position the player is currently aiming at.
     */
    public readonly aimPos: shared.Vector3;
    /**
     * Rotation of the head of the player.
     */
    public readonly headRot: shared.Vector3;
    /**
     * Curent seat the player is sitting in.
     * If player is not in any vehicle it is equal to `0`.
     *
     * @remarks The seat indexes start with 1 (driver seat).
     *
     */
    public readonly seat: number;
    /**
     * The entity the player is aiming at.
     */
    public readonly entityAimingAt: Entity;
    /**
     * The current aim offset of the player.
     */
    public readonly entityAimOffset: shared.Vector3;
    /**
     * Is the flashlight of the player activated.
     */
    public readonly flashlightActive: boolean;
    /**
     * Current health of the player.
     */
    public readonly health: number;
    /**
     * Current max health of the player.
     */
    public readonly maxHealth: number;
    /**
     * Set & get the volume for 3D Voice.
     *
     * @remarks Value needs to be between 0-1.
     */
    public spatialVolume: number;
    /**
     * Set & get the volume for 2D Voice.
     *
     * @remarks Value needs to be between 0-1.
     */
    public nonSpatialVolume: number;
    /**
     * Has the player superjump enabled.
     */
    //public readonly isSuperJumpEnabled: boolean;
    /**
     * Is the player currently crouching.
     */
    public readonly isCrouching: boolean;
    /**
     * Is the player currently stealthy.
     */
    public readonly isStealthy: boolean;
    /**
     * Forward speed of the player.
     */
    public readonly forwardSpeed: number;
    /**
     * Strafe speed of the player.
     */
    public readonly strafeSpeed: number;
    public filter: AudioFilter;
    public readonly taskData: string;

    public hasWeaponComponent(weaponModel: string | number, component: string | number): boolean {
        // TODO implement
        return false;
    }

    public getWeaponTintIndex(weaponModel: string | number): number {
        // TODO implement
        return 0;
    }
    /**
     * Retrieves the player from the pool.
     *
     * @param id The id of the player.
     * @returns Entity if it was found, otherwise null.
     */

    public static getByID(id: number): Player {
        // TODO implement
        return null;
    }
    /**
     * Retrieves the player from the pool.
     *
     * @param scriptID The script id of the player.
     * @returns Entity if it was found, otherwise null.
     */

    public static getByScriptID(scriptID: number): Player {
        // TODO implement
        return null;
    }
    /**
     * Gets the player with the given remote id
     */

    public static getByRemoteID(id: number): Player {
        // TODO implement
        return null;
    }
    // normal meta
    public setMeta<K extends string>(key: K, value: shared.InterfaceValueByKey<ICustomPlayerMeta, K, unknown, void>): void;
    public setMeta<K extends shared.ExtractStringKeys<ICustomPlayerMeta>>(key: K, value: ICustomPlayerMeta[K]): void;
    /** @deprecated See {@link ICustomPlayerMeta} */
    public setMeta<V extends any, K extends string = string>(key: K, value: shared.InterfaceValueByKey<ICustomPlayerMeta, K, V, void>): void;

    public setMeta<K extends string, V>(
        key: K | shared.MetaValues<ICustomPlayerMeta>,
        value: K extends shared.ExtractStringKeys<ICustomPlayerMeta> ? ICustomPlayerMeta[K] | shared.InterfaceValueByKey<ICustomPlayerMeta, K, V, void> : shared.InterfaceValueByKey<ICustomPlayerMeta, K, unknown, void>,
    ): void {
        // TODO implementieren
    }

    public deleteMeta(key: string): void;

    public deleteMeta<K extends shared.ExtractStringKeys<ICustomPlayerMeta>>(key: string | K): void {
        // TODO implement
    }
    public getMeta<K extends string>(key: Exclude<K, never>): unknown;
    public getMeta<K extends shared.ExtractStringKeys<ICustomPlayerMeta>>(key: K): ICustomPlayerMeta[K];
    /** @deprecated See {@link ICustomPlayerMeta} */

    public getMeta<K extends string, V>(key: K | shared.MetaValues<ICustomPlayerMeta>): K extends shared.ExtractStringKeys<ICustomPlayerMeta> ? ICustomPlayerMeta[K] | V : unknown {
        // TODO implementieren
        return null as any;
    }

    public hasMeta(key: string): boolean;

    public hasMeta<K extends shared.ExtractStringKeys<ICustomPlayerMeta>>(key: string | K): boolean {
        // TODO implement
        return false;
    }
    // synced meta
    public getSyncedMeta<K extends string>(key: Exclude<K, never>): unknown;
    public getSyncedMeta<K extends shared.ExtractStringKeys<shared.ICustomPlayerSyncedMeta>>(key: K): shared.ICustomPlayerSyncedMeta[K];
    /** @deprecated See {@link "alt-shared".ICustomPlayerSyncedMeta} */

    public getSyncedMeta<K extends string, V>(
        key: K | shared.MetaValues<shared.ICustomPlayerSyncedMeta>,
    ): K extends shared.ExtractStringKeys<shared.ICustomPlayerSyncedMeta> ? shared.ICustomPlayerSyncedMeta[K] | V : unknown {
        // TODO implementieren
        return null as any;
    }

    public hasSyncedMeta(key: string): boolean;

    public hasSyncedMeta<K extends shared.ExtractStringKeys<shared.ICustomPlayerSyncedMeta>>(key: string | K): boolean {
        // TODO implement
        return false;
    }
    // stream synced meta
    public getStreamSyncedMeta<K extends string>(key: Exclude<K, never>): unknown;
    public getStreamSyncedMeta<K extends shared.ExtractStringKeys<shared.ICustomPlayerStreamSyncedMeta>>(key: K): shared.ICustomPlayerStreamSyncedMeta[K];
    /** @deprecated See {@link "alt-shared".ICustomPlayerStreamSyncedMeta} */

    public getStreamSyncedMeta<K extends string, V>(
        key: K | shared.MetaValues<shared.ICustomPlayerStreamSyncedMeta>,
    ): K extends shared.ExtractStringKeys<shared.ICustomPlayerStreamSyncedMeta> ? shared.ICustomPlayerStreamSyncedMeta[K] | V : unknown {
        // TODO implementieren
        return null as any;
    }

    public hasStreamSyncedMeta(key: string): boolean;

    public hasStreamSyncedMeta<K extends shared.ExtractStringKeys<shared.ICustomPlayerStreamSyncedMeta>>(key: string | K): boolean {
        // TODO implement
        return false;
    }
}

export class LocalPlayer extends Player {
    declare public readonly dimension: number;
    declare public pos: shared.Vector3;
    declare public rot: shared.Vector3;
    /**
     * Ammo of the currently held weapon.
     *
     * @returns Total ammo of the currently held weapon. 0 if no weapon is equipped.
     */
    public readonly currentAmmo: number;
    public readonly weapons: readonly shared.IWeapon[];
    public readonly currentWeaponData: WeaponData;
    public stamina: number;
    public maxStamina: number;
    public getWeaponAmmo(hash: number): number;

    public getWeaponAmmo(hash: number | string): number {
        // TODO implement
        return 0;
    }
    public getWeaponComponents(hash: number): readonly number[];

    public getWeaponComponents(hash: number | string): readonly number[] {
        // TODO implement
        return [];
    }
    public hasWeapon(hash: number): boolean;

    public hasWeapon(hash: number | string): boolean {
        // TODO implement
        return false;
    }
    public deleteMeta(key: string): void;

    public deleteMeta<K extends shared.ExtractStringKeys<ICustomLocalPlayerMeta>>(key: string | K): void {
        // TODO implement
    }
    public hasMeta(key: string): boolean;

    public hasMeta<K extends shared.ExtractStringKeys<ICustomLocalPlayerMeta>>(key: string | K): boolean {
        // TODO implement
        return false;
    }
    public getMeta<K extends string>(key: Exclude<K, never>): unknown;
    public getMeta<K extends shared.ExtractStringKeys<ICustomLocalPlayerMeta>>(key: K): ICustomLocalPlayerMeta[K];
    /** @deprecated See {@link ICustomLocalPlayerMeta} */

    public getMeta<K extends string, V>(key: K | shared.MetaValues<ICustomLocalPlayerMeta>): K extends shared.ExtractStringKeys<ICustomLocalPlayerMeta> ? ICustomLocalPlayerMeta[K] | V : unknown {
        // TODO implementieren
        return null as any;
    }

    public setMeta<K extends string>(key: K, value: shared.InterfaceValueByKey<ICustomLocalPlayerMeta, K, unknown, void>): void;
    public setMeta<K extends shared.ExtractStringKeys<ICustomLocalPlayerMeta>>(key: K, value: ICustomLocalPlayerMeta[K]): void;
    /** @deprecated See {@link ICustomLocalPlayerMeta} */
    public setMeta<V extends any, K extends string = string>(key: K, value: shared.InterfaceValueByKey<ICustomLocalPlayerMeta, K, V, void>): void;

    public setMeta<K extends string, V>(
        key: K | shared.MetaValues<ICustomLocalPlayerMeta>,
        value: K extends shared.ExtractStringKeys<ICustomLocalPlayerMeta>
            ? ICustomLocalPlayerMeta[K] | shared.InterfaceValueByKey<ICustomLocalPlayerMeta, K, V, void>
            : shared.InterfaceValueByKey<ICustomLocalPlayerMeta, K, unknown, void>,
    ): void {
        // TODO implementieren
    }
}

export class Vehicle extends Entity {
    /**
     * Array with all vehicles.
     *
     * @remarks This creates a clone of the array everytime it is called.
     * It is advised to call this once and store the result in a variable, before iterating over it.
     * @example
     * ```js
     * const vehicles = alt.Vehicle.all; // Store it in a variable, so it doesn't create a copy of the array on each iteration
     * for(let i = 0; i < vehicles.length; i++)
     * {
     *   alt.log(`${vehicles[i].model}`); // Logs the model of every vehicle
     * }
     * ```
     */
    declare public static readonly all: readonly Vehicle[];
    public static readonly count: number;
    /**
     * Array with all streamed in vehicles.
     */
    public static readonly streamedIn: readonly Vehicle[];
    /**
     * Vehicle gear.
     *
     * @returns A number indicating actual gear.
     */
    public gear: number;
    /**
     * Vehicle max gear.
     */
    public readonly maxGear: number;
    /**
     * Vehicle handling, which affects how vehicle responds and reacts to the inputs of a driver.
     */
    public handling: IVehicleHandling;
    /**
     * Vehicle indicator lights.
     */
    public indicatorLights: VehicleIndicatorLights;
    /**
     * Vehicle RPM.
     *
     * @returns Normalised value on a scale of [0, 1].
     */
    public rpm: number;
    /**
     * Vehicle wheels speed.
     */
    public readonly speed: number;
    /**
     * Vehicle speed vector.
     */
    public readonly speedVector: shared.Vector3;
    /**
     * Vehicle seat count.
     */
    public readonly seatCount: number;
    /**
     * Vehicle velocity vector.
     */
    //public readonly velocity: shared.Vector3;
    /**
     * Vehicle wheels count.
     */
    public readonly wheelsCount: number;
    /**
     * Is the vehicle destroyed.
     */
    //public readonly isDestroyed: boolean;
    /**
     * Available modkits for the vehicle.
     */
    //public readonly modKitsCount: number;
    /**
     * Current vehicle modkit.
     */
    //public readonly modKit: number;
    /**
     * Vehicle primary color.
     */
    //public readonly primaryColor: number;
    /**
     * Custom (RGB) vehicle primary color.
     */
    //public readonly customPrimaryColor: shared.RGBA;
    /**
     * Vehicle secondary color.
     */
    //public readonly secondaryColor: number;
    /**
     * Custom (RGB) vehicle secondary color.
     */
    //public readonly customSecondaryColor: shared.RGBA;
    /**
     * Vehicle pearl color.
     */
    //public readonly pearlColor: number;
    /**
     * Vehicle wheel color.
     */
    //public readonly wheelColor: number;
    /**
     * Vehicle interior color.
     */
    //public readonly interiorColor: number;
    /**
     * Vehicle dashboard color.
     */
    //public readonly dashboardColor: number;
    /**
     * Vehicle tire smoke color.
     */
    //public readonly tireSmokeColor: number;
    /**
     * Vehicle wheel type.
     */
    //public readonly wheelType: number;
    /**
     * Vehicle front wheels variation.
     */
    //public readonly frontWheels: number;
    /**
     * Vehicle rear wheels variation.
     */
    //public readonly rearWheels: number;
    /**
     * Are custom tires active.
     */
    //public readonly customTires: boolean;
    /**
     * Vehicle darkness.
     */
    //public readonly darkness: number;
    /**
     * Vehicle number plate type index.
     */
    //public readonly numberPlateIndex: number;
    /**
     * Vehicle number plate text.
     */
    //public readonly numberPlateText: string;
    /**
     * Vehicle window tint.
     */
    //public readonly windowTint: number;
    /**
     * Vehicle dirt level.
     */
    //public readonly dirtLevel: number;
    /**
     * Vehicle neon.
     */
    //public readonly neon: IVehicleNeon;
    /**
     * Vehicle neon color.
     */
    //public readonly neonColor: shared.RGBA;
    /**
     * Vehicle livery.
     */
    //public readonly livery: number;
    /**
     * Vehicle roof livery.
     */
    //public readonly roofLivery: number;
    /**
     * Vehicle engine state.
     */
    public readonly engineOn: boolean;
    /**
     * Vehicle handbrake state.
     */
    //public readonly handbrakeActive: boolean;
    /**
     * Vehicle headlight color.
     */
    //public readonly headlightColor: number;
    /**
     * Vehicle active radio station.
     */
    //public readonly activeRadioStation: number;
    /**
     * Vehicle siren state.
     */
    //public readonly sirenActive: boolean;
    /**
     * Vehicle lock state.
     */
    public readonly lockState: shared.VehicleLockState;
    /**
     * Vehicle daylight state.
     */
    //public readonly daylightOn: boolean;
    /**
     * Vehicle nightlight state.
     */
    //public readonly nightlightOn: boolean;
    /**
     * Vehicle roof state.
     */
    //public readonly roofState: number;
    /**
     * Vehicle flamethrower state.
     */
    //public readonly flamethrowerActive: boolean;
    /**
     * Vehicle lights multiplier.
     */
    //public readonly lightsMultiplier: number;
    /**
     * The vehicle's engine health.
     */
    //public readonly engineHealth: number;
    /**
     * The vehicle's petrol tank health.
     */
    public readonly petrolTankHealth: number;
    /**
     * Vehicle repairs count.
     */
    //public readonly repairsCount: number;
    /**
     * The vehicle's body health.
     */
    //public readonly bodyHealth: number;
    /**
     * The vehicle's additional body health.
     */
    //public readonly bodyAdditionalHealth: number;
    /**
     * Does the vehicle currently have the bulletproof windows?
     */
    //public readonly hasArmoredWindows: boolean;
    /**
     * Determines whether the vehicle's engine should be turned on/off automatically.
     */
    //public readonly manualEngineControl: boolean;
    /**
     * The vehicle's engine temperature.
     */
    public engineTemperature: number;
    /**
     * The vehicle's fuel level.
     */
    public fuelLevel: number;
    /**
     * The vehicle's oil level.
     */
    public oilLevel: number;
    /**
     * Changes the engine lamp of the vehicle dashboard.
     */
    public engineLight: boolean;
    /**
     * Changes the abs lamp of the vehicle dashboard.
     */
    public absLight: boolean;
    /**
     * Changes the petrol lamp of the vehicle dashboard.
     */
    public petrolLight: boolean;
    /**
     * Changes the oil lamp of the vehicle dashboard.
     */
    public oilLight: boolean;
    /**
     * Changes the battery lamp of the vehicle dashboard.
     */
    public batteryLight: boolean;
    /**
     * @remarks Setter needs to be called in everytick and engine must be off.
     */
    public steeringAngle: number;

    public getWheelSurfaceMaterial(wheel: number): number {
        // TODO implement
        return 0;
    }
    /**
     * Gets the camber angle of the specified wheel.
     *
     * @param wheelIndex The index of the wheel.
     */

    public getWheelCamber(wheelIndex: number): number {
        // TODO implement
        return 0;
    }
    /**
     * Sets the camber angle of the specified wheel.
     *
     * @remarks A positive camber angle means that the top of the wheel is farther out than the bottom. A negative camber angle means that the bottom of the wheel is farther out than the top.
     *
     * @param wheelIndex The index of the wheel.
     * @param camber The value the of camber angle.
     */

    public setWheelCamber(wheelIndex: number, camber: number): void {
        // TODO implement
    }
    /**
     * Gets the track width of the specified wheel.
     *
     * @param wheelIndex The index of the wheel.
     */

    public getWheelTrackWidth(wheelIndex: number): number {
        // TODO implement
        return 0;
    }
    /**
     * Sets the track width of the specified wheel.
     *
     * @param wheelIndex The index of the wheel.
     * @param width The value of the track width.
     */

    public setWheelTrackWidth(wheelIndex: number, width: number): void {
        // TODO implement
    }
    /**
     * Gets the height of the specified wheel.
     *
     * @param wheelIndex The index of the wheel.
     */

    public getWheelHeight(wheelIndex: number): number {
        // TODO implement
        return 0;
    }
    /**
     * Sets the height of the specified wheel.
     *
     * @param wheelIndex The index of the wheel.
     * @param height The value of the wheel height.
     */

    public setWheelHeight(wheelIndex: number, height: number): void {
        // TODO implement
    }
    /**
     * Gets the tyre radius of the specified wheel.
     *
     * @param wheelIndex The index of the wheel.
     */

    public getWheelTyreRadius(wheelIndex: number): number {
        // TODO implement
        return 0;
    }
    /**
     * @remarks Applies only physical effects to the wheel.
     *
     * @param wheelIndex The index of the wheel.
     * @param radius The value of the tyre radius.
     */

    public setWheelTyreRadius(wheelIndex: number, radius: number): void {
        // TODO implement
    }
    /**
     * Gets the rim radius of the specified wheel.
     *
     * @param wheelIndex The index of the wheel.
     */

    public getWheelRimRadius(wheelIndex: number): number {
        // TODO implement
        return 0;
    }
    /**
     * @remarks Does not show any visible effect.
     *
     * @param wheelIndex The index of the wheel.
     * @param radius The index of the rim radius.
     */

    public setWheelRimRadius(wheelIndex: number, radius: number): void {
        // TODO implement
    }
    /**
     * Gets the tyre width the specified wheel.
     *
     * @param wheelIndex The index of the wheel.
     */

    public getWheelTyreWidth(wheelIndex: number): number {
        // TODO implement
        return 0;
    }
    /**
     * @remarks Does not show any visible effect.
     *
     * @param wheelIndex The index of the wheel.
     * @param width The value of the tyre width.
     */

    public setWheelTyreWidth(wheelIndex: number, width: number): void {
        // TODO implement
    }

    public getWheelDynamicFlag(wheelIndex: number, flag: number): boolean {
        // TODO implement
        return false;
    }

    public setWheelDynamicFlag(wheelIndex: number, flag: number, value: boolean): void {
        // TODO implement
    }

    public getWheelConfigFlag(wheelIndex: number, flag: number): boolean {
        // TODO implement
        return false;
    }

    public setWheelConfigFlag(wheelIndex: number, flag: number, value: boolean): void {
        // TODO implement
    }

    public setupTransmission(): void {
        // TODO implement
    }
    /**
     * Resets the dashboard lights to default values.
     */

    public resetDashboardLights(): void {
        // TODO implement
    }
    // normal meta
    public setMeta<K extends string>(key: K, value: shared.InterfaceValueByKey<ICustomVehicleMeta, K, unknown, void>): void;
    public setMeta<K extends shared.ExtractStringKeys<ICustomVehicleMeta>>(key: K, value: ICustomVehicleMeta[K]): void;
    /** @deprecated See {@link ICustomVehicleMeta} */
    public setMeta<V extends any, K extends string = string>(key: K, value: shared.InterfaceValueByKey<ICustomVehicleMeta, K, V, void>): void;

    public setMeta<K extends string, V>(
        key: K | shared.MetaValues<ICustomVehicleMeta>,
        value: K extends shared.ExtractStringKeys<ICustomVehicleMeta>
            ? ICustomVehicleMeta[K] | shared.InterfaceValueByKey<ICustomVehicleMeta, K, V, void>
            : shared.InterfaceValueByKey<ICustomVehicleMeta, K, unknown, void>,
    ): void {
        // TODO implementieren
    }

    public deleteMeta(key: string): void;

    public deleteMeta<K extends shared.ExtractStringKeys<ICustomVehicleMeta>>(key: string | K): void {
        // TODO implement
    }
    public getMeta<K extends string>(key: Exclude<K, never>): unknown;
    public getMeta<K extends shared.ExtractStringKeys<ICustomVehicleMeta>>(key: K): ICustomVehicleMeta[K];
    /** @deprecated See {@link ICustomVehicleMeta} */

    public getMeta<K extends string, V>(key: K | shared.MetaValues<ICustomVehicleMeta>): K extends shared.ExtractStringKeys<ICustomVehicleMeta> ? ICustomVehicleMeta[K] | V : unknown {
        // TODO implementieren
        return null as any;
    }

    public hasMeta(key: string): boolean;

    public hasMeta<K extends shared.ExtractStringKeys<ICustomVehicleMeta>>(key: string | K): boolean {
        // TODO implement
        return false;
    }
    // synced meta
    public getSyncedMeta<K extends string>(key: Exclude<K, never>): unknown;
    public getSyncedMeta<K extends shared.ExtractStringKeys<shared.ICustomVehicleSyncedMeta>>(key: K): shared.ICustomVehicleSyncedMeta[K];
    /** @deprecated See {@link "alt-shared".ICustomVehicleSyncedMeta} */

    public getSyncedMeta<K extends string, V>(
        key: K | shared.MetaValues<shared.ICustomVehicleSyncedMeta>,
    ): K extends shared.ExtractStringKeys<shared.ICustomVehicleSyncedMeta> ? shared.ICustomVehicleSyncedMeta[K] | V : unknown {
        // TODO implementieren
        return null as any;
    }

    public hasSyncedMeta(key: string): boolean;

    public hasSyncedMeta<K extends shared.ExtractStringKeys<shared.ICustomVehicleSyncedMeta>>(key: string | K): boolean {
        // TODO implement
        return false;
    }
    // stream synced meta
    public getStreamSyncedMeta<K extends string>(key: Exclude<K, never>): unknown;
    public getStreamSyncedMeta<K extends shared.ExtractStringKeys<shared.ICustomVehicleStreamSyncedMeta>>(key: K): shared.ICustomVehicleStreamSyncedMeta[K];
    /** @deprecated See {@link "alt-shared".ICustomVehicleStreamSyncedMeta} */

    public getStreamSyncedMeta<K extends string, V>(
        key: K | shared.MetaValues<shared.ICustomVehicleStreamSyncedMeta>,
    ): K extends shared.ExtractStringKeys<shared.ICustomVehicleStreamSyncedMeta> ? shared.ICustomVehicleStreamSyncedMeta[K] | V : unknown {
        // TODO implementieren
        return null as any;
    }

    public hasStreamSyncedMeta(key: string): boolean;

    public hasStreamSyncedMeta<K extends shared.ExtractStringKeys<shared.ICustomVehicleStreamSyncedMeta>>(key: string | K): boolean {
        // TODO implement
        return false;
    }
    /**
     * Retrieves the vehicle from the pool.
     *
     * @param id The id of the vehicle.
     * @returns Entity if it was found, otherwise null.
     */

    public static getByID(id: number): Vehicle {
        // TODO implement
        return null;
    }
    /**
     * Retrieves the vehicle from the pool.
     *
     * @param scriptID The script id of the vehicle.
     * @returns Entity if it was found, otherwise null.
     *
     */

    public static getByScriptID(scriptID: number): Vehicle {
        // TODO implement
        return null;
    }
    /**
     * Gets the vehicle with the given remote id
     */

    public static getByRemoteID(id: number): Vehicle {
        // TODO implement
        return null;
    }
}

export class WebView extends BaseObject {
    public constructor(params: IWebViewParams) {
        super();
        // TODO: Implement constructor
    }
    /** View visibility state */
    public isVisible: boolean;
    /** View URL */
    public url: string;
    public static readonly all: readonly WebView[];
    public static readonly count: number;
    public static readonly gpuAccelerationActive: boolean;
    /**
     * Is the webview a overlay.
     */
    public readonly isOverlay: boolean;
    /**
     * Is the webview ready.
     */
    public readonly isReady: boolean;
    /**
     * Is the webview focused.
     */
    public focused: boolean;
    /**
     * Set and get the webview size.
     */
    public size: shared.Vector2;
    /**
     * Set and get the webview position.
     */
    public readonly pos: shared.Vector2;
    /**
     * Retrieves the webview from the pool.
     *
     * @param id The id of the webview.
     * @returns Entity if it was found, otherwise null.
     *
     */

    public static getByID(id: number): WebView {
        // TODO implement
        return null;
    }
    /**
     * Emits specified event across particular WebView.
     *
     * @param eventName Name of the event.
     * @param args Rest parameters for emit to send.
     */

    public emit(eventName: string, args: any[]): void {
        // TODO implement
    }
    /**
     * Unsubscribes from WebView event handler with specified listener.
     *
     * @remarks Listener should be of the same reference as when event was subscribed.
     *
     * @param eventName Name of the event.
     * @param listener Listener that should be removed.
     */

    public off(eventName: string, listener: (...args: any[]) => void): void {
        // TODO implement
    }
    /**
     * Subscribes to WebView event handler with specified listener.
     *
     * @param eventName Name of the event.
     * @param listener Listener that should be added.
     */
    public on(eventName: string, listener: (...args: any[]) => void): void;
    /**
     * Subscribes to WebView event handler with specified listener.
     *
     * @param eventName Name of the event.
     * @param listener Listener that should be added.
     */

    public on(eventName: string | 'load', listener: ((...args: any[]) => void) | (() => void)): void {
        // TODO implement
    }
    /**
     * Subscribes to WebView event with specified listener, which only triggers once.
     *
     * @param eventName Name of the event.
     * @param listener Listener that should be added.
     */

    public once(eventName: string, listener: (...args: any[]) => void): void {
        // TODO implement
    }
    /**
     * Focuses the webview so it can be interacted with.
     */

    public focus(): void {
        // TODO implement
    }
    /**
     * Unfocuses the webview so it ignores user input.
     */

    public unfocus(): void {
        // TODO implement
    }
    /**
     * Gets all the listeners for the specified webview event.
     *
     * @param eventName Name of the event.
     * @returns Array of listener functions for that event.
     */

    public getEventListeners(eventName: string): readonly ((...args: any[]) => void)[] {
        // TODO implement
        return [];
    }
    /**
     * Sets the specified header to the specified value.
     *
     * @param header Header name.
     * @param value Header value.
     */

    public setExtraHeader(header: string, value: string): void {
        // TODO implement
    }
    /**
     * Sets the zoom level for webview.
     *
     * @param value Zoom level value.
     */

    public setZoomLevel(value: number): void {
        // TODO implement
    }

    public addOutput(output: AudioOutput): void {
        // TODO implement
    }

    public removeOutput(output: AudioOutput): void {
        // TODO implement
    }

    public getOutputs(): readonly (number | AudioOutput)[] {
        // TODO implement
        return [];
    }

    public reload(ignoreCache: boolean): void {
        // TODO implement
    }

    public setCookie(cookie: ICookie): void {
        // TODO implement
    }
    public deleteMeta(key: string): void;

    public deleteMeta<K extends shared.ExtractStringKeys<ICustomWebViewMeta>>(key: string | K): void {
        // TODO implement
    }
    public hasMeta(key: string): boolean;

    public hasMeta<K extends shared.ExtractStringKeys<ICustomWebViewMeta>>(key: string | K): boolean {
        // TODO implement
        return false;
    }
    public getMeta<K extends string>(key: Exclude<K, never>): unknown;
    public getMeta<K extends shared.ExtractStringKeys<ICustomWebViewMeta>>(key: K): ICustomWebViewMeta[K];
    /** @deprecated See {@link ICustomWebViewMeta} */

    public getMeta<K extends string, V>(key: K | shared.MetaValues<ICustomWebViewMeta>): K extends shared.ExtractStringKeys<ICustomWebViewMeta> ? ICustomWebViewMeta[K] | V : unknown {
        // TODO implementieren
        return null as any;
    }

    public setMeta<K extends string>(key: K, value: shared.InterfaceValueByKey<ICustomWebViewMeta, K, unknown, void>): void;
    public setMeta<K extends shared.ExtractStringKeys<ICustomWebViewMeta>>(key: K, value: ICustomWebViewMeta[K]): void;
    /** @deprecated See {@link ICustomWebViewMeta} */
    public setMeta<V extends any, K extends string = string>(key: K, value: shared.InterfaceValueByKey<ICustomWebViewMeta, K, V, void>): void;

    public setMeta<K extends string, V>(
        key: K | shared.MetaValues<ICustomWebViewMeta>,
        value: K extends shared.ExtractStringKeys<ICustomWebViewMeta>
            ? ICustomWebViewMeta[K] | shared.InterfaceValueByKey<ICustomWebViewMeta, K, V, void>
            : shared.InterfaceValueByKey<ICustomWebViewMeta, K, unknown, void>,
    ): void {
        // TODO implementieren
    }
}

export class Worker {
    public constructor(filePath: string) {
        // TODO: Implement constructor
    }
    /**
     * Maximum available workers per resource.
     */
    public static readonly maxWorkers: number;
    /**
     * Whether this worker is still valid. See {@link destroy}.
     */
    public readonly valid: boolean;
    /**
     * The file path that was used to create this worker.
     */
    public readonly filePath: string;
    /**
     * Whether the worker is currently paused. See {@link pause} and {@link resume}.
     */
    public readonly isPaused: boolean;
    /**
     * Adds a shared array buffer to the workers array buffer pool.
     *
     * @remarks Make sure to remove the array buffer once you are done with it by calling {@link removeSharedArrayBuffer},
     * otherwise you are creating a memory leak.
     *
     * @param buffer The shared array buffer to make available in workers.
     * @returns The id of the shared array buffer that can be used in workers to retrieve it.
     */

    public static addSharedArrayBuffer(buffer: SharedArrayBuffer): number {
        // TODO implement
        return 0;
    }
    /**
     * Removes the shared array buffer from the workers array buffer pool.
     *
     * @param id The id of the shared array buffer to remove.
     */

    public static removeSharedArrayBuffer(id: number): void {
        // TODO implement
    }
    /**
     * Starts the worker script.
     */

    public start(): void {
        // TODO implement
    }
    /**
     * Destroys the worker and stops it.
     *
     * @remarks This permanently sets {@link valid} to false.
     */

    public destroy(): void {
        // TODO implement
    }
    /**
     * Emits the specified event to the worker.
     *
     * @remarks This can be called before the worker is started.
     */

    public emit(eventName: string, args: any[]): void {
        // TODO implement
    }
    /**
     * Listens to an event emitted by the worker.
     *
     * @remarks The event handlers should be registered before starting the worker.
     *
     * @param eventName The event to listen for.
     * @param callback The callback to call when the event is received.
     */

    public on(eventName: string, callback: (...args: any[]) => void): void {
        // TODO implement
    }
    /**
     * Listens to an event emitted by the worker once.
     *
     * @remarks See {@link on}.
     *
     * @param eventName The event to listen for.
     * @param callback The callback to call when the event is received.
     */

    public once(eventName: string, callback: (...args: any[]) => void): void {
        // TODO implement
    }
    /**
     * Pauses execution of the worker.
     *
     * @remarks This completely stops the JavaScript event loop of the worker
     * but events can still be received (and will be handled once the worker is resumed).
     */

    public pause(): void {
        // TODO implement
    }
    /**
     * Resumes execution of the worker.
     *
     * @remarks See {@link pause}.
     */

    public resume(): void {
        // TODO implement
    }
    /**
     * Unsubscribes from Worker event handler with specified listener.
     *
     * @remarks Listener should be of the same reference as when event was subscribed.
     *
     * @param eventName Name of the event.
     * @param listener Listener that should be removed.
     */

    public off(eventName: string, listener: (...args: any[]) => void): void {
        // TODO implement
    }
}

export class Blip extends WorldObject {
    /**
     * Array with all blips.
     *
     * @remarks This creates a clone of the array everytime it is called.
     * It is advised to call this once and store the result in a variable, before iterating over it.
     * @example
     * ```js
     * const blips = alt.Blip.all; // Store it in a variable, so it doesn't create a copy of the array on each iteration
     * for(let i = 0; i < blips.length; i++)
     * {
     *   alt.log(`${blips[i].scriptID}`); // Logs the scriptID of every blip
     * }
     * ```
     */
    public static readonly all: readonly Blip[];
    public static readonly count: number;
    public readonly scriptID: number;
    public routeColor: shared.RGBA;
    public alpha: number;
    public asMissionCreator: boolean;
    public bright: boolean;
    public category: number;
    public color:
        | number
        | shared.BlipColor.White
        | shared.BlipColor.Red
        | shared.BlipColor.Green
        | shared.BlipColor.Blue
        | shared.BlipColor.LightRed
        | shared.BlipColor.Violet
        | shared.BlipColor.Pink
        | shared.BlipColor.LightOrange
        | shared.BlipColor.LightBrown
        | shared.BlipColor.LightGreen
        | shared.BlipColor.LightBlue
        | shared.BlipColor.LightPurple
        | shared.BlipColor.DarkPurple
        | shared.BlipColor.Cyan
        | shared.BlipColor.LightYellow
        | shared.BlipColor.Organe
        | shared.BlipColor.GraniteGreen
        | shared.BlipColor.DarkBrown
        | shared.BlipColor.LightGray
        | shared.BlipColor.LightPink
        | shared.BlipColor.LemonGreen
        | shared.BlipColor.ForestGreen
        | shared.BlipColor.ElectricBlue
        | shared.BlipColor.BrightPurple
        | shared.BlipColor.DarkYellow
        | shared.BlipColor.PinkRed
        | shared.BlipColor.Orange
        | shared.BlipColor.BrilliantRose
        | shared.BlipColor.Salmon
        | shared.BlipColor.DarkGreen
        | shared.BlipColor.BlizzardBlue
        | shared.BlipColor.OracleBlue
        | shared.BlipColor.Silver
        | shared.BlipColor.MulberryPink
        | shared.BlipColor.AltoGray
        | shared.BlipColor.JellyBeanBlue
        | shared.BlipColor.DarkOrange
        | shared.BlipColor.Mamba
        | shared.BlipColor.White
        | shared.BlipColor.Red
        | shared.BlipColor.Green
        | shared.BlipColor.Blue
        | shared.BlipColor.LightRed
        | shared.BlipColor.Violet
        | shared.BlipColor.Pink
        | shared.BlipColor.LightOrange
        | shared.BlipColor.LightBrown
        | shared.BlipColor.LightGreen
        | shared.BlipColor.LightBlue
        | shared.BlipColor.LightPurple
        | shared.BlipColor.DarkPurple
        | shared.BlipColor.Cyan
        | shared.BlipColor.LightYellow
        | shared.BlipColor.Organe
        | shared.BlipColor.GraniteGreen
        | shared.BlipColor.DarkBrown
        | shared.BlipColor.LightGray
        | shared.BlipColor.LightPink
        | shared.BlipColor.LemonGreen
        | shared.BlipColor.ForestGreen
        | shared.BlipColor.ElectricBlue
        | shared.BlipColor.BrightPurple
        | shared.BlipColor.DarkYellow
        | shared.BlipColor.PinkRed
        | shared.BlipColor.Orange
        | shared.BlipColor.BrilliantRose
        | shared.BlipColor.Salmon
        | shared.BlipColor.DarkGreen
        | shared.BlipColor.BlizzardBlue
        | shared.BlipColor.OracleBlue
        | shared.BlipColor.Silver
        | shared.BlipColor.MulberryPink
        | shared.BlipColor.AltoGray
        | shared.BlipColor.JellyBeanBlue
        | shared.BlipColor.DarkOrange
        | shared.BlipColor.Mamba;
    public crewIndicatorVisible: boolean;
    public display: number;
    public flashes: boolean;
    public flashesAlternate: boolean;
    public flashInterval: number;
    public flashTimer: number;
    public friendIndicatorVisible: boolean;
    public gxtName: string;
    public heading: number;
    public headingIndicatorVisible: boolean;
    public highDetail: boolean;
    public name: string;
    public number: number;
    public outlineIndicatorVisible: boolean;
    public priority: number;
    public pulse: boolean;
    public route: boolean;
    public scale: number;
    public secondaryColor: number | shared.RGBA;
    public shortRange: boolean;
    public showCone: boolean;
    public shrinked: boolean;
    public size: shared.Vector2;
    public sprite: shared.BlipSprite;
    public tickVisible: boolean;
    public visible: boolean;
    public blipType: shared.BlipType;
    public isFriendly: boolean;
    public isHiddenOnLegend: boolean;
    public isMinimalOnEdge: boolean;
    public useHeightIndicatorOnEdge: boolean;
    public isShortHeightThreshold: boolean;
    public readonly isStreamedIn: boolean;
    public readonly isAttached: boolean;
    public readonly isGlobal: boolean;
    /**
     * Retrieves the blip from the pool.
     *
     * @param id The id of the blip.
     * @returns Entity if it was found, otherwise null.
     *
     */

    public static getByID(id: number): Blip {
        // TODO implement
        return null;
    }
    /**
     * Retrieves the blip from the pool.
     *
     * @param scriptID The script id of the blip.
     * @returns Entity if it was found, otherwise null.
     *
     */

    public static getByScriptID(scriptID: number): Blip {
        // TODO implement
        return null;
    }
    /**
     * Gets the blip with the given remote id
     */

    public static getByRemoteID(id: number): Blip {
        // TODO implement
        return null;
    }

    public fade(opacity: number, duration: number): void {
        // TODO implement
    }
    public deleteMeta(key: string): void;

    public deleteMeta<K extends shared.ExtractStringKeys<ICustomBlipMeta>>(key: string | K): void {
        // TODO implement
    }
    public hasMeta(key: string): boolean;

    public hasMeta<K extends shared.ExtractStringKeys<ICustomBlipMeta>>(key: string | K): boolean {
        // TODO implement
        return false;
    }
    public getMeta<K extends string>(key: Exclude<K, never>): unknown;
    public getMeta<K extends shared.ExtractStringKeys<ICustomBlipMeta>>(key: K): ICustomBlipMeta[K];
    /** @deprecated See {@link ICustomBlipMeta} */

    public getMeta<K extends string, V>(key: K | shared.MetaValues<ICustomBlipMeta>): K extends shared.ExtractStringKeys<ICustomBlipMeta> ? ICustomBlipMeta[K] | V : unknown {
        // TODO implementieren
        return null as any;
    }

    public setMeta<K extends string>(key: K, value: shared.InterfaceValueByKey<ICustomBlipMeta, K, unknown, void>): void;
    public setMeta<K extends shared.ExtractStringKeys<ICustomBlipMeta>>(key: K, value: ICustomBlipMeta[K]): void;
    /** @deprecated See {@link ICustomBlipMeta} */
    public setMeta<V extends any, K extends string = string>(key: K, value: shared.InterfaceValueByKey<ICustomBlipMeta, K, V, void>): void;

    public setMeta<K extends string, V>(
        key: K | shared.MetaValues<ICustomBlipMeta>,
        value: K extends shared.ExtractStringKeys<ICustomBlipMeta> ? ICustomBlipMeta[K] | shared.InterfaceValueByKey<ICustomBlipMeta, K, V, void> : shared.InterfaceValueByKey<ICustomBlipMeta, K, unknown, void>,
    ): void {
        // TODO implementieren
    }
}

export class AreaBlip extends Blip {
    public constructor(x: number, y: number, z: number, width: number, height: number) {
        super();
        // TODO: Implement constructor
    }
}

export class RadiusBlip extends Blip {
    public constructor(x: number, y: number, z: number, radius: number) {
        super();
        // TODO: Implement constructor
    }
}

export class PointBlip extends Blip {
    public constructor(x: number, y: number, z: number) {
        super();
        // TODO: Implement constructor
    }
}

export class HandlingData {
    protected constructor() {
        // TODO: Implement constructor
    }
    public readonly handlingNameHash: number;
    public acceleration: number;
    public antiRollBarBiasFront: number;
    public antiRollBarBiasRear: number;
    public antiRollBarForce: number;
    public brakeBiasFront: number;
    public brakeBiasRear: number;
    public brakeForce: number;
    public camberStiffnesss: number;
    public centreOfMassOffset: shared.Vector3;
    public clutchChangeRateScaleDownShift: number;
    public clutchChangeRateScaleUpShift: number;
    public collisionDamageMult: number;
    public damageFlags: number;
    public deformationDamageMult: number;
    public downforceModifier: number;
    public driveBiasFront: number;
    public driveBiasRear: number;
    public driveInertia: number;
    public driveMaxFlatVel: number;
    public engineDamageMult: number;
    public handBrakeForce: number;
    public handlingFlags: number;
    public inertiaMultiplier: shared.Vector3;
    public initialDragCoeff: number;
    public initialDriveForce: number;
    public initialDriveGears: number;
    public initialDriveMaxFlatVel: number;
    public lowSpeedTractionLossMult: number;
    public mass: number;
    public modelFlags: number;
    public monetaryValue: number;
    public oilVolume: number;
    public percentSubmerged: number;
    public percentSubmergedRatio: number;
    public petrolTankVolume: number;
    public rollCentreHeightFront: number;
    public rollCentreHeightRear: number;
    public seatOffsetDistX: number;
    public seatOffsetDistY: number;
    public seatOffsetDistZ: number;
    public steeringLock: number;
    public steeringLockRatio: number;
    public suspensionBiasFront: number;
    public suspensionBiasRear: number;
    public suspensionCompDamp: number;
    public suspensionForce: number;
    public suspensionLowerLimit: number;
    public suspensionRaise: number;
    public suspensionReboundDamp: number;
    public suspensionUpperLimit: number;
    public tractionBiasFront: number;
    public tractionBiasRear: number;
    public tractionCurveLateral: number;
    public tractionCurveLateralRatio: number;
    public tractionCurveMax: number;
    public tractionCurveMaxRatio: number;
    public tractionCurveMin: number;
    public tractionCurveMinRatio: number;
    public tractionLossMult: number;
    public tractionSpringDeltaMax: number;
    public tractionSpringDeltaMaxRatio: number;
    public unkFloat1: number;
    public unkFloat2: number;
    public unkFloat4: number;
    public unkFloat5: number;
    public weaponDamageMult: number;
    /**
     * Initializes a new instance of the {@link HandlingData} class that can modify handling properties for the specified handling name.
     *
     * @remarks The `handlingHash` parameter is vehicle **handling name hash**, not a model hash.
     * Can be retrieved from any vehicle instance: `vehicle.handling.handlingNameHash` {@link IVehicleHandling#handlingNameHash}
     *
     * @param handlingHash hash of the vehicle **handling name**
     */

    public static getForHandlingName(handlingHash: number): HandlingData {
        // TODO implement
        return null;
    }

    public static reloadVehiclePhysics(modelHash: number): boolean {
        // TODO implement
        return false;
    }
}

export class MapZoomData {
    public constructor(zoomDataId: number) {
        // TODO: Implement constructor
    }
    public fZoomScale: number;
    public fZoomSpeed: number;
    public fScrollSpeed: number;
    public vTilesX: number;
    public vTilesY: number;

    public static get(zoomData: string): MapZoomData {
        // TODO implement
        return null;
    }

    public static resetAll(): void {
        // TODO implement
    }

    public reset(): void {
        // TODO implement
    }
}

export class LocalStorage {
    protected constructor() {
        // TODO: Implement constructor
    }
    /**
     * Gets the value from the specified key in the local storage.
     */

    public static get(key: string): any {
        // TODO implement
        return null;
    }

    public static has(key: string): boolean {
        // TODO implement
        return false;
    }
    /**
     * Deletes the specified key from the local storage.
     */

    public static delete(key: string): void {
        // TODO implement
    }
    /**
     * Deletes all keys from the local storage.
     */

    public static deleteAll(): void {
        // TODO implement
    }
    /**
     * Alias for {@link deleteAll}.
     */

    public static clear(): void {
        // TODO implement
    }
    /**
     * Saves the changes to the disk.
     */

    public static save(): void {
        // TODO implement
    }
    /**
     * Sets the specified key to the specified value in the local storage.
     */

    public static set(key: string, value: any): void {
        // TODO implement
    }
}

export class MemoryBuffer {
    public constructor(size: number) {
        // TODO: Implement constructor
    }
    public readonly size: number;
    public readonly address: bigint;

    public byte(offset: number): number {
        // TODO implement
        return 0;
    }

    public double(offset: number): number {
        // TODO implement
        return 0;
    }

    public float(offset: number): number {
        // TODO implement
        return 0;
    }

    public int(offset: number): number {
        // TODO implement
        return 0;
    }

    public long(offset: number): bigint {
        // TODO implement
        return 0n;
    }

    public short(offset: number): number {
        // TODO implement
        return 0;
    }

    public string(offset: number, length: number): string {
        // TODO implement
        return '';
    }

    public ubyte(offset: number): number {
        // TODO implement
        return 0;
    }

    public uint(offset: number): number {
        // TODO implement
        return 0;
    }

    public ulong(offset: number): bigint {
        // TODO implement
        return 0n;
    }

    public ushort(offset: number): number {
        // TODO implement
        return 0;
    }

    public free(): boolean {
        // TODO implement
        return false;
    }
}

export class Discord {
    protected constructor() {
        // TODO: Implement constructor
    }
    public static readonly currentUser: IDiscordUser;

    public static requestOAuth2Token(appId: string): Promise<string> {
        // TODO implement
        return null;
    }
}

export class Voice {
    protected constructor() {
        // TODO: Implement constructor
    }
    /**
     * Determines whether the microphone input is currently disabled.
     */
    public static muteInput: boolean;
    /**
     * @remarks This property requires [Extended Voice API](https://docs.altv.mp/articles/permissions.html) permission from the user.
     */
    public static activationLevel: number;
    /**
     * @remarks This property requires [Extended Voice API](https://docs.altv.mp/articles/permissions.html) permission from the user.
     */
    public static noiseSuppressionEnabled: boolean;
    /**
     * @remarks This property requires [Extended Voice API](https://docs.altv.mp/articles/permissions.html) permission from the user.
     */
    public static inputDevice: string;
    /**
     * Determines if the voice activation is enabled.
     */
    public static get activityInputEnabled(): boolean {
        // TODO Implement
        return false;
    }
    /**
     * Returns the keycode of the voice activation key.
     */
    public static readonly activationKey: shared.KeyCode;
    public static readonly voiceControlsEnabled: boolean;
    /**
     * @remarks This function requires [Extended Voice API](https://docs.altv.mp/articles/permissions.html) permission from the user.
     */

    public static toggleInput(enabled: boolean): void {
        // TODO implement
    }
    /**
     * @remarks This function requires [Extended Voice API](https://docs.altv.mp/articles/permissions.html) permission from the user.
     */

    public static getAvailableInputDevices(): readonly IInputDevice[] {
        // TODO implement
        return [];
    }
}

export class WebSocketClient extends BaseObject {
    public constructor(url: string) {
        super();
        // TODO: Implement constructor
    }
    public autoReconnect: boolean;
    public perMessageDeflate: boolean;
    /**
     * Optional heartbeat, sent every x seconds when there isn't any traffic.
     *
     * @Remarks This makes sure, that load balancers do not kill an idle connection.
     */
    public pingInterval: number;
    public url: string;
    public readonly readyState: WebSocketReadyState;
    /**
     * Retrieves the websocketclient from the pool.
     *
     * @param id The id of the websocketclient.
     * @returns Entity if it was found, otherwise null.
     *
     */

    public static getByID(id: number): WebSocketClient {
        // TODO implement
        return null;
    }
    public on(eventName: 'open', listener: () => void): void;
    public on(eventName: 'close', listener: (code: number, reason: string) => void): void;
    public on(eventName: 'message', listener: (message: string) => void): void;

    public on(eventName: 'open' | 'close' | 'message' | 'error', listener: (() => void) | ((code: number, reason: string) => void) | ((message: string) => void) | ((error: string) => void)): void {
        // TODO implement
    }

    public off(eventName: string, listener: (...args: any[]) => void): void {
        // TODO implement
    }
    /**
     * Starts the websocket connection.
     */

    public start(): void {
        // TODO implement
    }
    /**
     * Stops the websocket connection.
     */

    public stop(): void {
        // TODO implement
    }
    /**
     * Sends the specified message to the websocket server.
     *
     * @param message The message to send.
     * @returns Whether sending the message was successful.
     */

    public send(message: string | ArrayBuffer | ArrayBufferView<ArrayBufferLike>): boolean {
        // TODO implement
        return false;
    }
    /**
     * Adds a sub protocol to the websocket.
     *
     * @param protocol Name of the protocol.
     */

    public addSubProtocol(protocol: string): void {
        // TODO implement
    }
    /**
     * Gets all added sub protocols.
     */

    public getSubProtocols(): readonly string[] {
        // TODO implement
        return [];
    }
    /**
     * Sets the specified header to the specified value.
     *
     * @param header Header name.
     * @param value Header value.
     */

    public setExtraHeader(header: string, value: string): void {
        // TODO implement
    }
    /**
     * Gets all the listeners for the specified websocket event.
     *
     * @param eventName Name of the event.
     * @returns Array of listener functions for that event.
     */

    public getEventListeners(eventName: string): readonly ((...args: any[]) => void)[] {
        // TODO implement
        return [];
    }
}

export class HttpClient extends BaseObject {
    public constructor() {
        super();
        // TODO: Implement constructor
    }
    /**
     * Retrieves the httpclient from the pool.
     *
     * @param id The id of the httpclient.
     * @returns Entity if it was found, otherwise null.
     *
     */

    public static getByID(id: number): HttpClient {
        // TODO implement
        return null;
    }

    public setExtraHeader(header: string, value: string): void {
        // TODO implement
    }

    public getExtraHeaders(): Record<string, string> {
        // TODO implement
        return null;
    }

    public get(url: string): Promise<IHttpResponse> {
        // TODO implement
        return null;
    }

    public head(url: string): Promise<IHttpResponse> {
        // TODO implement
        return null;
    }

    public post(url: string, body: string): Promise<IHttpResponse> {
        // TODO implement
        return null;
    }

    public put(url: string, body: string): Promise<IHttpResponse> {
        // TODO implement
        return null;
    }

    public delete(url: string, body: string): Promise<IHttpResponse> {
        // TODO implement
        return null;
    }

    public connect(url: string, body: string): Promise<IHttpResponse> {
        // TODO implement
        return null;
    }

    public options(url: string, body: string): Promise<IHttpResponse> {
        // TODO implement
        return null;
    }

    public trace(url: string, body: string): Promise<IHttpResponse> {
        // TODO implement
        return null;
    }

    public patch(url: string, body: string): Promise<IHttpResponse> {
        // TODO implement
        return null;
    }
}

export class Profiler {
    protected constructor() {
        // TODO: Implement constructor
    }
    public static readonly heapStats: IHeapStats;
    /** Sampling interval in microseconds. Defaults to 100. */
    public static samplingInterval: number;
    public static readonly profilesRunning: number;
    /**
     * Starts a new profile with the specified name.
     *
     * @remarks This can throw an error if starting the profile fails.
     *
     * @param profileName Name to be used in {@link stopProfiling}. Defaults to empty string.
     */

    public static startProfiling(profileName: string): void {
        // TODO implement
    }
    /**
     * Stops the profile with the specified name.
     *
     * @param profileName Name of the profile specified in {@link startProfiling}. Defaults to empty string.
     */

    public static stopProfiling(profileName: string): IProfile {
        // TODO implement
        return null;
    }

    public static getMemoryProfile(): void {
        // TODO implement
    }
    /**
     * Takes a heap snapshot.
     * For more information see https://nodejs.org/en/docs/guides/diagnostics/memory/using-heap-snapshot/
     *
     * @remarks The return value is a promise that once resolved contains the JSON string of the serialized heap.
     */

    public static takeHeapSnapshot(): Promise<string> {
        // TODO implement
        return null;
    }
}

export class RmlElement extends BaseObject {
    public readonly relativeOffset: shared.Vector2;
    public readonly absoluteOffset: shared.Vector2;
    public readonly baseline: number;
    public readonly zIndex: number;
    public readonly containingBlock: shared.Vector2;
    public readonly focusedElement: RmlElement;
    public readonly tagName: string;
    public rmlId: string;
    public readonly isOwned: boolean;
    public readonly absoluteLeft: number;
    public readonly absoluteTop: number;
    public readonly clientLeft: number;
    public readonly clientTop: number;
    public readonly clientWidth: number;
    public readonly clientHeight: number;
    public readonly offsetLeft: number;
    public readonly offsetTop: number;
    public readonly offsetWidth: number;
    public readonly offsetHeight: number;
    public scrollLeft: number;
    public scrollTop: number;
    public readonly scrollWidth: number;
    public readonly scrollHeight: number;
    public readonly isVisible: boolean;
    public readonly parent: RmlElement;
    public readonly nextSibling: RmlElement;
    public readonly previousSibling: RmlElement;
    public readonly firstChild: RmlElement;
    public readonly lastChild: RmlElement;
    public readonly childCount: number;
    public readonly hasChildren: boolean;
    public innerRML: string;
    public readonly ownerDocument: RmlDocument;
    public readonly childNodes: readonly RmlElement[];
    public style: Record<string, string>;

    public on(eventName: string, func: (senderElement: RmlElement, ...args: any[]) => void): void {
        // TODO implement
    }

    public off(eventName: string, func: (...args: any[]) => void): void {
        // TODO implement
    }

    public getEventListeners(eventName: string): readonly ((senderElement: RmlElement, ...args: any[]) => void)[] {
        // TODO implement
        return [];
    }

    public appendChild(child: RmlElement): void {
        // TODO implement
    }

    public insertBefore(child: RmlElement, adjacent: RmlElement): void {
        // TODO implement
    }

    public replaceChild(newElem: RmlElement, oldElem: RmlElement): void {
        // TODO implement
    }

    public removeChild(child: RmlElement): void {
        // TODO implement
    }

    public addClass(name: string): boolean {
        // TODO implement
        return false;
    }

    public removeClass(name: string): boolean {
        // TODO implement
        return false;
    }

    public hasClass(name: string): boolean {
        // TODO implement
        return false;
    }

    public getClassList(): readonly string[] {
        // TODO implement
        return [];
    }

    public addPseudoClass(name: string): boolean {
        // TODO implement
        return false;
    }

    public removePseudoClass(name: string): boolean {
        // TODO implement
        return false;
    }

    public hasPseudoClass(name: string): boolean {
        // TODO implement
        return false;
    }

    public getPseudoClassList(): readonly string[] {
        // TODO implement
        return [];
    }

    public setOffset(element: RmlElement, offset: shared.IVector2, fixed: boolean): void {
        // TODO implement
    }

    public isPointWithinElement(point: shared.IVector2): boolean {
        // TODO implement
        return false;
    }

    public setProperty(name: string, value: string): boolean {
        // TODO implement
        return false;
    }

    public removeProperty(name: string): boolean {
        // TODO implement
        return false;
    }

    public hasProperty(name: string): boolean {
        // TODO implement
        return false;
    }

    public hasLocalProperty(name: string): boolean {
        // TODO implement
        return false;
    }

    public getProperty(name: string): string {
        // TODO implement
        return '';
    }

    public getLocalProperty(name: string): string {
        // TODO implement
        return '';
    }

    public getPropertyAbsoluteValue(name: string): number {
        // TODO implement
        return 0;
    }

    public setAttribute(name: string, value: string): void {
        // TODO implement
    }

    public removeAttribute(name: string): boolean {
        // TODO implement
        return false;
    }

    public hasAttribute(name: string): boolean {
        // TODO implement
        return false;
    }

    public getAttribute(name: string): string {
        // TODO implement
        return '';
    }

    public getAttributes(): Record<string, string> {
        // TODO implement
        return null;
    }

    public closest(selectors: string): RmlElement {
        // TODO implement
        return null;
    }

    public getElementByID(id: string): RmlElement {
        // TODO implement
        return null;
    }

    public getElementsByTagName(tag: string): readonly RmlElement[] {
        // TODO implement
        return [];
    }

    public getElementsByClassName(className: string): readonly RmlElement[] {
        // TODO implement
        return [];
    }

    public querySelector(selector: string): RmlElement {
        // TODO implement
        return null;
    }

    public querySelectorAll(selector: string): readonly RmlElement[] {
        // TODO implement
        return [];
    }

    public focus(): boolean {
        // TODO implement
        return false;
    }

    public blur(): void {
        // TODO implement
    }

    public click(): void {
        // TODO implement
    }

    public scrollIntoView(alignToTop: boolean): void {
        // TODO implement
    }
}

export class RmlDocument extends RmlElement {
    public constructor(url: string) {
        super();
        // TODO: Implement constructor
    }
    public title: string;
    public readonly sourceUrl: string;
    declare public readonly isVisible: boolean;
    public readonly isModal: boolean;
    public readonly body: RmlElement;
    /**
     * Retrieves the rmldocument from the pool.
     *
     * @param id The id of the rmldocument.
     * @returns Entity if it was found, otherwise null.
     *
     */

    public static getByID(id: number): RmlDocument {
        // TODO implement
        return null;
    }

    public show(isModal: boolean, focused: boolean): void {
        // TODO implement
    }

    public hide(): void {
        // TODO implement
    }

    public update(): void {
        // TODO implement
    }

    public createElement(tag: string): RmlElement {
        // TODO implement
        return null;
    }

    public createTextNode(text: string): RmlElement {
        // TODO implement
        return null;
    }
}

export class Utils extends shared.Utils {
    protected constructor() {
        super();
        // TODO: Implement constructor
    }
}

export class FocusData {
    protected constructor() {
        // TODO: Implement constructor
    }
    public static readonly isFocusOverriden: boolean;
    public static readonly focusOverridePos: shared.Vector3;
    public static readonly focusOverrideOffset: shared.Vector3;
    public static readonly focusOverrideEntity: Entity;
    public static overrideFocus(pos: shared.Vector3, offset: shared.Vector3): void;

    public static overrideFocus(pos: shared.Vector3 | Entity, offset: shared.Vector3): void {
        // TODO implement
    }

    public static clearFocus(): void {
        // TODO implement
    }
}

export class WeaponData {
    protected constructor() {
        // TODO: Implement constructor
    }
    public readonly modelHash: number;
    public readonly nameHash: number;
    public recoilShakeAmplitude: number;
    public recoilAccuracyMax: number;
    public recoilAccuracyToAllowHeadshotPlayer: number;
    public recoilRecoveryRate: number;
    public animReloadRate: number;
    public vehicleReloadTime: number;
    public lockOnRange: number;
    public accuracySpread: number;
    public range: number;
    public damage: number;
    public readonly clipSize: number;
    public readonly timeBetweenShots: number;
    public headshotDamageModifier: number;
    public playerDamageModifier: number;
    public static allHashes: readonly WeaponData[];
    /**
     * Initializes a new instance of the {@link WeaponData}.
     */

    public static getForHash(weaponHash: number): WeaponData {
        // TODO implement
        return null;
    }
}

export class LocalObject extends Object {
    public constructor(model: string | number, pos: shared.Vector3, rot: shared.Vector3, noOffset: boolean, dynamic: boolean, useStreaming: boolean, streamingDistance: number) {
        super();
        // TODO: Implement constructor
    }
    declare public static readonly all: readonly LocalObject[];
    /**
     * All objects created by the game. For example, a weapon item in the player's hand or a bag of rubbish in the street.
     *
     * @example
     * ```ts
     * const object = alt.LocalObject.allWorld[0];
     * alt.Utils.assert(object != null);
     *
     * // Wait for the object to be deleted by the game.
     * await alt.Utils.waitFor(() => !object.valid);
     * ```
     */
    public static readonly allWorld: readonly LocalObject[];
    declare public static readonly count: number;
    declare public pos: shared.Vector3;
    declare public rot: shared.Vector3;
    public static get model(): number {
        // TODO Implement
        return 0;
    }
    /** Object transparency, values are between 0 and 255. (0 being fully transparent) */
    declare public alpha: number;
    public readonly dynamic: boolean;
    /** The distance at which the LOD model of the object starts being applied. */
    declare public lodDistance: number;
    /** Whether the object is affected by gravity. */
    public hasGravity: boolean;
    public readonly isStreamedIn: boolean;
    public readonly useStreaming: boolean;
    public readonly streamingDistance: number;
    declare public visible: boolean;
    public readonly isCollisionEnabled: boolean;
    /** Freeze the object on the position */
    public positionFrozen: boolean;
    declare public textureVariation: number;
    public readonly isWorldObject: boolean;
    /**
     * Retrieves the ped from the pool.
     *
     * @param id The id of the ped.
     * @returns Entity if it was found, otherwise null.
     */

    public static getByID(id: number): LocalObject {
        // TODO implement
        return null;
    }

    public resetAlpha(): void {
        // TODO implement
    }
    /**
     * Attaches the object to another entity.
     *
     * @param entity Entity or scriptID of the entity the object should be attached to.
     * @param boneIndex Bone index of the entity to attach to. (-1 for entity center).
     * @param offset Offset of the object.
     * @param rot Rotation of the object in radians.
     * @param useSoftPinning Whether the object should be able to detach when not fixed.
     * @param collision Whether the object and the entity should collide with each other.
     * @param fixedRot Whether the rotation of the object is fixed or follows that of the entity.
     */
    public attachToEntity(entity: Entity, boneIndex: number, offset: shared.Vector3, rot: shared.Vector3, useSoftPinning: boolean, collision: boolean, fixedRot: boolean): void;

    public attachToEntity(entity: Entity | number, boneIndex: number, offset: shared.Vector3, rot: shared.Vector3, useSoftPinning: boolean, collision: boolean, fixedRot: boolean): void {
        // TODO implement
    }
    /**
     * Detaches the object from the current attached entity.
     *
     * @param dynamic Set to true to keep velocity after dettaching. Default value is false.
     */

    public detach(dynamic: boolean): void {
        // TODO implement
    }

    public toggleCollision(toggle: boolean, keepPhysics: boolean): void {
        // TODO implement
    }
    /** Places the object properly on the ground. */

    public placeOnGroundProperly(): void {
        // TODO implement
    }

    public activatePhysics(): void {
        // TODO implement
    }
    /** Waits asynchronously until the object spawns. */

    public waitForSpawn(timeout: number): Promise<void> {
        // TODO implement
        return null;
    }
}

export class WeaponObject extends LocalObject {
    public constructor(
        weaponHash: string | number,
        pos: shared.Vector3,
        rot: shared.Vector3,
        modelHash: string | number,
        numAmmo: number,
        createDefaultComponents: boolean,
        scale: number,
        useStreaming: boolean,
        streamingDistance: number,
    ) {
        let noOffset = false;
        let model = 0;
        let dynamic = false;
        super(model, pos, rot, noOffset, dynamic, useStreaming, streamingDistance);
        // TODO: Implement constructor
    }
    declare public static readonly all: readonly WeaponObject[];
    declare public static readonly count: number;
    public readonly isWeaponObject: boolean;
    public tintIndex: number;

    public setComponentTintIndex(componentId: number, tintIndex: number): void {
        // TODO implement
    }

    public getComponentTintIndex(componentId: number): number {
        // TODO implement
        return 0;
    }

    public giveComponent(componentType: number): void {
        // TODO implement
    }

    public removeComponent(componentType: number): void {
        // TODO implement
    }
}

export class ServerObject extends Entity {
    declare public static readonly all: readonly ServerObject[];
    public static readonly count: number;
    public static readonly streamedIn: readonly ServerObject[];
    public readonly alpha: number;
    public readonly textureVariation: number;
    /** The distance at which the LOD model of the object starts being applied. */
    public readonly lodDistance: number;

    public static getByID(id: number): ServerObject {
        // TODO implement
        return null;
    }
    /**
     * Gets the object with the given remote id
     */

    public static getByRemoteID(id: number): ServerObject {
        // TODO implement
        return null;
    }
}

export class Ped extends Entity {
    declare public static readonly all: readonly Ped[];
    public static readonly streamedIn: readonly Ped[];
    public static readonly count: number;
    /**
     * Currently equipped weapon.
     */
    public readonly currentWeapon: number;
    /**
     * Current health of the ped.
     */
    public readonly health: number;
    /**
     * Current max health of the ped.
     */
    public readonly maxHealth: number;
    /**
     * Current armour.
     */
    public readonly armour: number;
    /**
     * Retrieves the ped from the pool.
     *
     * @param id The id of the ped.
     * @returns Entity if it was found, otherwise null.
     */

    public static getByID(id: number): Ped {
        // TODO implement
        return null;
    }
    /**
     * Retrieves the ped from the pool.
     *
     * @param scriptID The script id of the entity.
     * @returns Entity if it was found, otherwise null.
     */

    public static getByScriptID(scriptID: number): Ped {
        // TODO implement
        return null;
    }
    /**
     * Gets the ped with the given remote id
     */

    public static getByRemoteID(id: number): Ped {
        // TODO implement
        return null;
    }
    // normal meta
    public setMeta<K extends string>(key: K, value: shared.InterfaceValueByKey<ICustomPedMeta, K, unknown, void>): void;
    public setMeta<K extends shared.ExtractStringKeys<ICustomPedMeta>>(key: K, value: ICustomPedMeta[K]): void;

    public setMeta<K extends string, V>(
        key: K | shared.MetaValues<ICustomPedMeta>,
        value: K extends shared.ExtractStringKeys<ICustomPedMeta> ? ICustomPedMeta[K] | shared.InterfaceValueByKey<ICustomPedMeta, K, V, void> : shared.InterfaceValueByKey<ICustomPedMeta, K, unknown, void>,
    ): void {
        // TODO implementieren
    }

    public deleteMeta(key: string): void;

    public deleteMeta<K extends shared.ExtractStringKeys<ICustomPedMeta>>(key: string | K): void {
        // TODO implement
    }
    public getMeta<K extends string>(key: Exclude<K, never>): unknown;

    public getMeta<K extends string, V>(key: K | shared.MetaValues<ICustomPedMeta>): K extends shared.ExtractStringKeys<ICustomPedMeta> ? ICustomPedMeta[K] | V : unknown {
        return null as any;
    }

    public hasMeta(key: string): boolean;

    public hasMeta<K extends shared.ExtractStringKeys<ICustomPedMeta>>(key: string | K): boolean {
        // TODO implement
        return false;
    }
    // synced meta
    public getSyncedMeta<K extends string>(key: Exclude<K, never>): unknown;

    public getSyncedMeta<K extends string, V>(key: K | shared.MetaValues<shared.ICustomPedSyncedMeta>): K extends shared.ExtractStringKeys<shared.ICustomPedSyncedMeta> ? shared.ICustomPedSyncedMeta[K] | V : unknown {
        // TODO implementieren
        return null as any;
    }

    public hasSyncedMeta(key: string): boolean;

    public hasSyncedMeta<K extends shared.ExtractStringKeys<shared.ICustomPedSyncedMeta>>(key: string | K): boolean {
        // TODO implement
        return false;
    }
    // stream synced meta
    public getStreamSyncedMeta<K extends string>(key: Exclude<K, never>): unknown;

    public getStreamSyncedMeta<K extends string, V>(
        key: K | shared.MetaValues<shared.ICustomPedStreamSyncedMeta>,
    ): K extends shared.ExtractStringKeys<shared.ICustomPedStreamSyncedMeta> ? shared.ICustomPedStreamSyncedMeta[K] | V : unknown {
        // TODO implementieren
        return null as any;
    }

    public hasStreamSyncedMeta(key: string): boolean;

    public hasStreamSyncedMeta<K extends shared.ExtractStringKeys<shared.ICustomPedStreamSyncedMeta>>(key: string | K): boolean {
        // TODO implement
        return false;
    }
}

export class AudioFilter extends BaseObject {
    public constructor(filterName: string) {
        super();
        // TODO: Implement constructor
    }
    public static get audioCategory(): number {
        // TODO Implement
        return 0;
    }
    public readonly hash: number;

    public addRotateEffect(fRate: number, priority: number): number {
        // TODO implement
        return 0;
    }

    public addVolumeEffect(fVolume: number, priority: number, channel: number): number {
        // TODO implement
        return 0;
    }

    public addPeakeqEffect(lBand: number, fBandwidth: number, fQ: number, fCenter: number, fGain: number, priority: number): number {
        // TODO implement
        return 0;
    }

    public addDampEffect(fTarget: number, fQuiet: number, fRate: number, fGain: number, fDelay: number, priority: number): number {
        // TODO implement
        return 0;
    }

    public addAutowahEffect(fDryMix: number, fWetMix: number, fFeedback: number, fRate: number, fRange: number, fFreq: number, priority: number): number {
        // TODO implement
        return 0;
    }

    public addPhaserEffect(fDryMix: number, fWetMix: number, fFeedback: number, fRate: number, fRange: number, fFreq: number, priority: number): number {
        // TODO implement
        return 0;
    }

    public addChorusEffect(fDryMix: number, fWetMix: number, fFeedback: number, fMinSweep: number, fMaxSweep: number, fRate: number, priority: number): number {
        // TODO implement
        return 0;
    }

    public addDistortionEffect(fDrive: number, fDryMix: number, fWetMix: number, fFeedback: number, fVolume: number, priority: number): number {
        // TODO implement
        return 0;
    }

    public addCompressor2Effect(fGain: number, fThreshold: number, fRatio: number, fAttack: number, fRelease: number, priority: number): number {
        // TODO implement
        return 0;
    }

    public addBqfEffect(lFilter: number, fCenter: number, fGain: number, fBandwidth: number, fQ: number, fS: number, priority: number): number {
        // TODO implement
        return 0;
    }

    public addEcho4Effect(fDryMix: number, fWetMix: number, fFeedback: number, fDelay: number, priority: number): number {
        // TODO implement
        return 0;
    }

    public addPitchshiftEffect(fPitchShift: number, fSemitones: number, lFFTsize: number, lOsamp: number, priority: number): number {
        // TODO implement
        return 0;
    }

    public addFreeverbEffect(fDryMix: number, fWetMix: number, fRoomSize: number, fDamp: number, fWidth: number, lMode: number, priority: number): number {
        // TODO implement
        return 0;
    }

    public removeEffect(hfxHandler: number): boolean {
        // TODO implement
        return false;
    }
}

export class AudioCategory {
    protected constructor() {
        // TODO: Implement constructor
    }
    public readonly name: string;
    public volume: number;
    public distanceRolloffScale: number;
    public plateauRolloffScale: number;
    public occlusionDamping: number;
    public environmentalFilterDamping: number;
    public sourceReverbDamping: number;
    public distanceReverbDamping: number;
    public interiorReverbDamping: number;
    public environmentalLoudness: number;
    public underwaterWetLevel: number;
    public stonedWetLevel: number;
    public pitch: number;
    public lowPassFilterCutoff: number;
    public highPassFilterCutoff: number;
    /**
     * Initializes a new instance of the {@link AudioCategory}.
     */

    public static getForName(categoryName: string): AudioCategory {
        // TODO implement
        return null;
    }
}

export class Marker extends WorldObject {
    public constructor(type: shared.MarkerType, position: shared.Vector3, color: shared.RGBA, useStreaming: true, streamingDistance: number) {
        super();
        // TODO: Implement constructor
    }
    public static readonly all: readonly Marker[];
    public visible: boolean;
    public markerType: shared.MarkerType;
    public color: shared.RGBA;
    public scale: shared.Vector3;
    public rot: shared.Vector3;
    public dir: shared.Vector3;
    public readonly isGlobal: boolean;
    public readonly target: Player;
    public readonly streamingDistance: number;
    public readonly isStreamedIn: boolean;
    public faceCamera: boolean;
    public rotate: boolean;
    public bobUpAndDown: boolean;
    /**
     * Retrieves the marker from the pool.
     *
     * @param id The id of the marker.
     * @returns Entity if it was found, otherwise null.
     */

    public static getByID(id: number): Marker {
        // TODO implement
        return null;
    }
}

export class Colshape extends WorldObject {
    public static readonly all: readonly Colshape[];
    public readonly colshapeType: shared.ColShapeType;
    /**
     * Whether this colshape should only trigger its enter/leave events for players or all entities.
     */
    public playersOnly: boolean;
    public readonly radius: number;
    public readonly height: number;
    public readonly min: shared.Vector2 | shared.Vector3;
    public readonly max: shared.Vector2 | shared.Vector3;
    public readonly minZ: number;
    public readonly maxZ: number;
    public readonly points: readonly shared.Vector2[];
    /**
     * Retrieves the colshape from the pool.
     *
     * @param id The id of the colshape.
     * @returns Entity if it was found, otherwise null.
     */

    public static getByID(id: number): Colshape {
        // TODO implement
        return null;
    }
    public isEntityIn(entity: Entity): boolean;

    public isEntityIn(entity: Entity | number): boolean {
        // TODO implement
        return false;
    }

    public isPointIn(position: shared.IVector3): boolean {
        // TODO implement
        return false;
    }
    public deleteMeta(key: string): void;

    public deleteMeta<K extends shared.ExtractStringKeys<ICustomColshapeMeta>>(key: string | K): void {
        // TODO implement
    }
    public hasMeta(key: string): boolean;

    public hasMeta<K extends shared.ExtractStringKeys<ICustomColshapeMeta>>(key: string | K): boolean {
        // TODO implement
        return false;
    }
    public getMeta<K extends string>(key: Exclude<K, never>): unknown;
    public getMeta<K extends shared.ExtractStringKeys<ICustomColshapeMeta>>(key: K): ICustomColshapeMeta[K];
    /** @deprecated See {@link ICustomColshapeMeta} */

    public getMeta<K extends string, V>(key: K | shared.MetaValues<ICustomColshapeMeta>): K extends shared.ExtractStringKeys<ICustomColshapeMeta> ? ICustomColshapeMeta[K] | V : unknown {
        // TODO implementieren
        return null as any;
    }

    public setMeta<K extends string>(key: K, value: shared.InterfaceValueByKey<ICustomColshapeMeta, K, unknown, void>): void;
    public setMeta<K extends shared.ExtractStringKeys<ICustomColshapeMeta>>(key: K, value: ICustomColshapeMeta[K]): void;
    /** @deprecated See {@link ICustomColshapeMeta} */
    public setMeta<V extends any, K extends string = string>(key: K, value: shared.InterfaceValueByKey<ICustomColshapeMeta, K, V, void>): void;

    public setMeta<K extends string, V>(
        key: K | shared.MetaValues<ICustomColshapeMeta>,
        value: K extends shared.ExtractStringKeys<ICustomColshapeMeta>
            ? ICustomColshapeMeta[K] | shared.InterfaceValueByKey<ICustomColshapeMeta, K, V, void>
            : shared.InterfaceValueByKey<ICustomColshapeMeta, K, unknown, void>,
    ): void {
        // TODO implementieren
    }
}

export class ColshapeCylinder extends Colshape {
    public constructor(x: number, y: number, z: number, radius: number, height: number) {
        super();
        // TODO: Implement constructor
    }
}

export class ColshapeSphere extends Colshape {
    public constructor(x: number, y: number, z: number, radius: number) {
        super();
        // TODO: Implement constructor
    }
}

export class ColshapeCircle extends Colshape {
    public constructor(x: number, y: number, radius: number) {
        super();
        // TODO: Implement constructor
    }
}

export class ColshapeCuboid extends Colshape {
    public constructor(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number) {
        super();
        // TODO: Implement constructor
    }
}

export class ColshapeRectangle extends Colshape {
    public constructor(x1: number, y1: number, x2: number, y2: number) {
        super();
        // TODO: Implement constructor
    }
}

export class ColshapePolygon extends Colshape {
    public constructor(minZ: number, maxZ: number, points: shared.IVector2[]) {
        super();
        // TODO: Implement constructor
    }
}

export class TextLabel extends WorldObject {
    public constructor(
        text: string,
        fontName: string,
        fontSize: number,
        scale: number,
        pos: shared.IVector3,
        rot: shared.IVector3,
        color: shared.RGBA,
        outlineWidth: number,
        outlineColor: shared.RGBA,
        useStreaming: boolean,
        streamingDistance: number,
    ) {
        super();
        // TODO: Implement constructor
    }
    public static readonly all: readonly TextLabel[];
    public visible: boolean;
    public color: shared.RGBA;
    public outlineColor: shared.RGBA;
    public outlineWidth: number;
    public font: string;
    public fontSize: number;
    public scale: number;
    public align: TextLabelAlignment;
    public text: string;
    public rot: shared.Vector3;
    public readonly isGlobal: boolean;
    public readonly target: Player;
    public readonly isStreamedIn: boolean;
    public readonly streamingDistance: number;
    public faceCamera: boolean;
    /**
     * Retrieves the marker from the pool.
     *
     * @param id The id of the marker.
     * @returns Entity if it was found, otherwise null.
     */

    public static getByID(id: number): TextLabel {
        // TODO implement
        return null;
    }
}

export class LocalVehicle extends Vehicle {
    public constructor(model: string | number, dimension: number, pos: shared.IVector3, rot: shared.IVector3, useStreaming: true, streamingDistance: number) {
        super();
        // TODO: Implement constructor
    }
    public static get model(): number {
        // TODO Implement
        return 0;
    }
    declare public rot: shared.Vector3;
    public readonly streamingDistance: number;
    declare public visible: boolean;
    declare public readonly scriptID: number;
    public readonly isStreamedIn: boolean;
    /**
     * Vehicle wheels speed.
     */
    declare public readonly speed: number;
    /**
     * Vehicle gear.
     *
     * @returns A number indicating actual gear.
     */
    declare public gear: number;
    /**
     * Vehicle max gear.
     */
    declare public readonly maxGear: number;
    /**
     * Vehicle RPM.
     *
     * @returns Normalised value on a scale of [0, 1].
     */
    declare public rpm: number;
    /**
     * Vehicle wheels count.
     */
    declare public readonly wheelsCount: number;
    /**
     * Vehicle speed vector.
     */
    declare public readonly speedVector: shared.Vector3;
    /**
     * Vehicle engine state.
     */
    declare public readonly engineOn: boolean;
    /**
     * Vehicle lock state.
     */
    declare public readonly lockState: shared.VehicleLockState;
    /**
     * The vehicle's petrol tank health.
     */
    declare public readonly petrolTankHealth: number;
    /**
     * Vehicle indicator lights.
     */
    declare public indicatorLights: VehicleIndicatorLights;
    /**
     * Vehicle seat count.
     */
    declare public readonly seatCount: number;
    /**
     * The vehicle's engine temperature.
     */
    declare public engineTemperature: number;
    /**
     * The vehicle's fuel level.
     */
    declare public fuelLevel: number;
    /**
     * The vehicle's oil level.
     */
    declare public oilLevel: number;
    public suspensionHeight: number;
    /**
     * Retrieves the localvehicle from the pool.
     *
     * @param id The id of the entity.
     * @returns Entity if it was found, otherwise null.
     */

    public static getByID(id: number): LocalVehicle {
        // TODO implement
        return null;
    }
    /**
     * Retrieves the localvehicle from the pool.
     *
     * @param scriptID The script id of the entity.
     * @returns Entity if it was found, otherwise null.
     */

    public static getByScriptID(scriptID: number): LocalVehicle {
        // TODO implement
        return null;
    }
    /** Waits asynchronously until the vehicle spawns. */

    public waitForSpawn(timeout: number): Promise<void> {
        // TODO implement
        return null;
    }
    /**
     * Gets the camber angle of the specified wheel.
     *
     * @param wheelIndex The index of the wheel.
     */

    public getWheelCamber(wheelIndex: number): number {
        // TODO implement
        return 0;
    }
    /**
     * Sets the camber angle of the specified wheel.
     *
     * @remarks A positive camber angle means that the top of the wheel is farther out than the bottom. A negative camber angle means that the bottom of the wheel is farther out than the top.
     *
     * @param wheelIndex The index of the wheel.
     * @param camber The value the of camber angle.
     */

    public setWheelCamber(wheelIndex: number, camber: number): void {
        // TODO implement
    }
    /**
     * Gets the track width of the specified wheel.
     *
     * @param wheelIndex The index of the wheel.
     */

    public getWheelTrackWidth(wheelIndex: number): number {
        // TODO implement
        return 0;
    }
    /**
     * Sets the track width of the specified wheel.
     *
     * @param wheelIndex The index of the wheel.
     * @param width The value of the track width.
     */

    public setWheelTrackWidth(wheelIndex: number, width: number): void {
        // TODO implement
    }
    /**
     * Gets the height of the specified wheel.
     *
     * @param wheelIndex The index of the wheel.
     */

    public getWheelHeight(wheelIndex: number): number {
        // TODO implement
        return 0;
    }
    /**
     * Sets the height of the specified wheel.
     *
     * @param wheelIndex The index of the wheel.
     * @param height The value of the wheel height.
     */

    public setWheelHeight(wheelIndex: number, height: number): void {
        // TODO implement
    }
    /**
     * Gets the tyre radius of the specified wheel.
     *
     * @param wheelIndex The index of the wheel.
     */

    public getWheelTyreRadius(wheelIndex: number): number {
        // TODO implement
        return 0;
    }
    /**
     * @remarks Applies only physical effects to the wheel.
     *
     * @param wheelIndex The index of the wheel.
     * @param radius The value of the tyre radius.
     */

    public setWheelTyreRadius(wheelIndex: number, radius: number): void {
        // TODO implement
    }
    /**
     * Gets the rim radius of the specified wheel.
     *
     * @param wheelIndex The index of the wheel.
     */

    public getWheelRimRadius(wheelIndex: number): number {
        // TODO implement
        return 0;
    }
    /**
     * @remarks Does not show any visible effect.
     *
     * @param wheelIndex The index of the wheel.
     * @param radius The index of the rim radius.
     */

    public setWheelRimRadius(wheelIndex: number, radius: number): void {
        // TODO implement
    }
    /**
     * Gets the tyre width the specified wheel.
     *
     * @param wheelIndex The index of the wheel.
     */

    public getWheelTyreWidth(wheelIndex: number): number {
        // TODO implement
        return 0;
    }
    /**
     * @remarks Does not show any visible effect.
     *
     * @param wheelIndex The index of the wheel.
     * @param width The value of the tyre width.
     */

    public setWheelTyreWidth(wheelIndex: number, width: number): void {
        // TODO implement
    }

    public getWheelSurfaceMaterial(wheel: number): number {
        // TODO implement
        return 0;
    }
}

export class LocalPed extends Ped {
    public constructor(model: string | number, dimension: number, pos: shared.IVector3, rot: shared.IVector3, useStreaming: true, streamingDistance: number) {
        super();
        // TODO: Implement constructor
    }
    public static get model(): number {
        // TODO Implement
        return 0;
    }
    declare public rot: shared.Vector3;
    public readonly streamingDistance: number;
    declare public visible: boolean;
    declare public readonly scriptID: number;
    public readonly isStreamedIn: boolean;
    /**
     * Retrieves the localPed from the pool.
     *
     * @param id The id of the entity.
     * @returns Entity if it was found, otherwise null.
     */

    public static getByID(id: number): LocalPed {
        // TODO implement
        return null;
    }
    /**
     * Retrieves the localPed from the pool.
     *
     * @param scriptID The script id of the entity.
     * @returns Entity if it was found, otherwise null.
     */

    public static getByScriptID(scriptID: number): LocalPed {
        // TODO implement
        return null;
    }
    /** Waits asynchronously until the ped spawns. */

    public waitForSpawn(timeout: number): Promise<void> {
        // TODO implement
        return null;
    }
}

export class Font extends BaseObject {
    protected constructor() {
        super();
        // TODO: Implement constructor
    }

    public static register(path: string): Font {
        // TODO implement
        return null;
    }
}

export class Interior {
    protected constructor() {
        // TODO: Implement constructor
    }
    public readonly id: number;
    public readonly pos: shared.Vector3;
    public readonly rot: shared.Vector3;
    public readonly roomCount: number;
    public readonly portalCount: number;
    public readonly entitiesExtents: IAABB;
    /**
     * Create interior instance by id. Throws if id is invalid (for example, when it's 0).
     *
     * @example
     * ```js
     * // Get the interior where our local player is currently in
     * const interiorId = natives.getInteriorFromEntity(alt.Player.local);
     * if (interiorId !== 0) {
     *   const interior = alt.Interior.getForInteriorID(interiorId);
     *
     *   // Output room count of it
     *   alt.log({
     *     roomCount: interior.roomCount
     *   });
     * } else {
     *   alt.logError("Interior id is 0, seems like player is outside");
     * }
     * ```
     */

    public static getForInteriorID(id: number): Interior {
        // TODO implement
        return null;
    }
    /**
     * Get room by it's hash. Throws if room hash is invalid.
     */

    public getRoomByHash(hash: number): InteriorRoom {
        // TODO implement
        return null;
    }
    /**
     * Get room by it's index: from 0 to {@link roomCount}, for example if `roomCount = 2`, room indexes will be 0 and 1.
     * Throws if room index is invalid.
     */

    public getRoomByIndex(index: number): InteriorRoom {
        // TODO implement
        return null;
    }
    /**
     * Get portal by it's index: from 0 to {@link portalCount}, for example if `portalCount = 2`, portal indexes will be 0 and 1.
     * Throws if portal index is invalid.
     */

    public getPortalByIndex(index: number): InteriorPortal {
        // TODO implement
        return null;
    }
}

export class InteriorRoom {
    protected constructor() {
        // TODO: Implement constructor
    }
    public readonly index: number;
    public readonly name: string;
    public readonly nameHash: number;
    public flag: number;
    public timecycle: number;
    public extents: IAABB;
}

export class InteriorPortal {
    protected constructor() {
        // TODO: Implement constructor
    }
    public readonly index: number;
    public readonly cornerCount: number;
    public readonly entityCount: number;
    public roomFrom: number;
    public roomTo: number;
    public flag: number;

    public getCornerPos(cornerIndex: number): shared.Vector3 {
        // TODO implement
        return null;
    }

    public setCornerPos(cornerIndex: number, value: shared.Vector3): void {
        // TODO implement
    }

    public getEntityArchetype(entityIndex: number): number {
        // TODO implement
        return 0;
    }

    public getEntityFlag(entityIndex: number): number {
        // TODO implement
        return 0;
    }

    public setEntityFlag(entityIndex: number, flag: number): void {
        // TODO implement
    }

    public getEntityPos(entityIndex: number): shared.Vector3 {
        // TODO implement
        return null;
    }

    public getEntityRot(entityIndex: number): shared.Vector3 {
        // TODO implement
        return null;
    }
}

export namespace Utils {
    export class Keybind {
        public constructor(keyCode: shared.KeyCode[], callback: () => void, eventType: 'keyup' | 'keydown') {
            // TODO: Implement constructor
        }

        public destroy(): void {
            // TODO implement
        }
    }
    /**
     * A marker class whose instances do not need to be created in every tick.
     *
     * @example
     * ```js
     * // Creates marker at local player pos with default options
     * const defaultMarker = new alt.Utils.Marker(alt.Player.local.pos);
     *
     * // Creates default marker at 0, 0, 72 with red color
     * const redMarker = new alt.Utils.Marker(new alt.Vector3(0, 0, 72), { color: alt.RGBA.red });
     *
     * // Later you can change the color, scale, etc.
     * redMarker.scale = new alt.Vector3(3.0); // Makes marker bigger
     * ```
     */
    export class Marker {
        public constructor(pos: shared.IVector3, options: IMarkerOptions) {
            // TODO: Implement constructor
        }
        public type: number;
        public pos: shared.IVector3;
        public dir: shared.IVector3;
        public rot: shared.IVector3;
        public scale: shared.IVector3;
        public color: shared.RGBA;
        public bobUpAndDown: boolean;
        public faceCamera: boolean;
        public p19: number;
        public rotate: boolean;
        public textureDict: string;
        public textureName: string;
        public drawOnEnts: boolean;

        public destroy(): void {
            // TODO implement
        }
    }
}
