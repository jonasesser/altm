import * as shared from 'alt-shared';
export * from 'alt-shared';
export declare enum Locale {
    Arabic = "ar",
    Belarusian = "by",
    Czech = "cz",
    German = "de",
    English = "en",
    Spanish = "es",
    Farsi = "fa",
    French = "fr",
    Hebrew = "he",
    Hungarian = "hu",
    Indonesian = "id",
    Hindi = "in_hd",// Wrong tag (hi_in)
    Malayalam = "in_ml",// Wrong tag (ml_in)
    Telugu = "in_tl",// Wrong tag (te_in)
    Tamil = "in_tm",// Wrong tag (ta_in)
    Italian = "it",
    Lithuanian = "lt",
    Latvian = "lv",
    NorwegianBokmal = "nb_no",
    NorwegianNynorsk = "nn_no",
    Polish = "pl",
    Portugese = "pt",
    BrazilianPortuguese = "pt_br",
    Romanian = "ro",
    Serbian = "rs",// Wrong tag (sr)
    Russian = "ru",
    Slovak = "sk",
    Thai = "th",
    Turkish = "tr",
    Ukrainian = "ua",// Wrong tag (uk)
    ChineseSimplified = "zh_cn",
    ChineseTraditional = "zh_tw"
}
export declare enum StatName {
    Stamina = "stamina",
    Strength = "strength",
    LungCapacity = "lung_capacity",
    Wheelie = "wheelie_ability",
    Flying = "flying_ability",
    Shooting = "shooting_ability",
    Stealth = "stealth_ability"
}
export declare enum VehicleIndicatorLights {
    None = 0,
    BlinkLeft = 1,
    BlinkRight = 2,
    BlinkPermBoth = 4,
    StaticBoth = 8,
    Interior = 64
}
export declare enum WebSocketReadyState {
    Connecting = 0,
    Open = 1,
    Closing = 2,
    Closed = 3
}
export declare enum ConfigFlag {
    DisableAutoWeaponSwap = "DISABLE_AUTO_WEAPON_SWAP",
    DisablePedPropKnockOff = "DISABLE_PED_PROP_KNOCK_OFF",
    DisableIdleCamera = "DISABLE_IDLE_CAMERA",
    DisableVehicleEngineShutdownOnLeave = "DISABLE_VEHICLE_ENGINE_SHUTDOWN_ON_LEAVE",
    DisableSPEnterVehicleClipset = "DISABLE_SP_ENTER_VEHICLE_CLIPSET",
    ForceRenderSnow = "FORCE_RENDER_SNOW",
    ForceHideNightProps = "FORCE_HIDE_NIGHT_PROPS",
    ForceShowNightProps = "FORCE_SHOW_NIGHT_PROPS",
    DisableEmissiveLightsRendering = "DISABLE_EMISSIVE_LIGHTS_RENDERING",
    /**
     * Forces vehicle tyre burst even if 0 damage is applied.
     * Useful when damage in weapon meta is set to 0, and is calculated manually by script in event.
     */
    ForceVehicleTyreBurst = "FORCE_VEHICLE_TYRE_BURST",
    /**
     * Prevents head props from being hidden when getting into the vehicle.
     * Equivalent to calling `setPedResetFlag` native with flag 337 in every tick.
     */
    SwapAllowHeadPropInVehicleFlag = "SWAP_ALLOW_HEAD_PROP_IN_VEHICLE_FLAG"
}
export declare enum WatermarkPosition {
    BottomRight = 0,
    TopRight = 1,
    TopLeft = 2,
    TopCenter = 3,
    BottomCenter = 4
}
export declare enum GameFont {
    ChaletLondon = 0,
    HouseScript = 1,
    Monospace = 2,
    CharletComprimeColonge = 4,
    Pricedown = 7
}
export declare enum TextAlign {
    Center = 0,
    Left = 1,
    Rigth = 2
}
export declare enum TextLabelAlignment {
    Left = 0,
    Right = 1,
    Center = 2,
    Justify = 3
}
export declare enum CookieSameSite {
    NoRestriction = "NO_RESTRICTION",
    LaxMode = "LAX_MODE",
    StrictMode = "STRICT_MODE"
}
export declare enum CookiePriority {
    Low = "LOW",
    Medium = "MEDIUM",
    High = "HIGH"
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
     *
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
export interface ICustomBaseObjectMeta extends shared.ICustomBaseObjectMeta {
}
/**
 * Extend it by interface merging for use in blip meta {@link "alt-client".Blip getMeta method}, {@link "alt-client".Blip setMeta method}, etc.
 *
 * @remarks See {@link "alt-shared".ICustomGlobalMeta} for an example of use.
 */
export interface ICustomBlipMeta extends ICustomBaseObjectMeta {
}
/**
 * Extend it by merging interfaces for use in checkpoint meta {@link "alt-client".Checkpoint getMeta method}, {@link "alt-client".Checkpoint setMeta method}, etc.
 *
 * @remarks See {@link "alt-shared".ICustomGlobalMeta} for an example of use.
 */
export interface ICustomCheckpointMeta extends ICustomBaseObjectMeta {
}
/**
 * Extend it by interface merging for use in colshape meta {@link "alt-server".Colshape getMeta method}, {@link "alt-server".Colshape setMeta method}, etc.
 *
 * @remarks See {@link "alt-shared".ICustomGlobalMeta} for an example of use.
 */
export interface ICustomColshapeMeta extends ICustomBaseObjectMeta {
}
/**
 * Extend it by merging interfaces for use in webview meta {@link "alt-client".WebView getMeta method}, {@link "alt-client".WebView setMeta method}, etc.
 *
 * @remarks See {@link "alt-shared".ICustomGlobalMeta} for an example of use.
 */
export interface ICustomWebViewMeta extends ICustomBaseObjectMeta {
}
/**
 * Extend it by merging interfaces for use in audio meta {@link "alt-client".Audio getMeta method}, {@link "alt-client".Audio setMeta method}, etc.
 *
 * @remarks See {@link "alt-shared".ICustomGlobalMeta} for an example of use.
 */
export interface ICustomAudioMeta extends ICustomBaseObjectMeta {
}
/**
 * Extend it by interface merging for use in entity meta {@link "alt-client".Entity getMeta method}, {@link "alt-client".Entity setMeta method}, etc.
 *
 * @remarks See {@link "alt-shared".ICustomGlobalMeta} for an example of use.
 */
export interface ICustomEntityMeta extends ICustomBaseObjectMeta {
}
/**
 * Extend it by merging interfaces for use in player meta {@link "alt-client".Player getMeta method}, {@link "alt-client".Player setMeta method}, etc.
 *
 * @remarks See {@link "alt-shared".ICustomGlobalMeta} for an example of use.
 */
export interface ICustomPlayerMeta extends ICustomEntityMeta {
}
/**
 * Extend it by merging interfaces for use in local player meta {@link "alt-client".LocalPlayer getMeta method}, {@link "alt-client".LocalPlayer setMeta method}, etc.
 *
 * @remarks See {@link "alt-shared".ICustomGlobalMeta} for an example of use.
 */
export interface ICustomLocalPlayerMeta extends ICustomPlayerMeta {
}
/**
 * Extend it by merging interfaces for use in vehicle meta {@link "alt-client".Vehicle getMeta method}, {@link "alt-client".Vehicle setMeta method}, etc.
 *
 * @remarks See {@link "alt-shared".ICustomGlobalMeta} for an example of use.
 */
export interface ICustomVehicleMeta extends ICustomEntityMeta {
}
/**
 * Extend it by merging interfaces for use in vehicle meta {@link "alt-client".Ped getMeta method}, {@link "alt-client".Ped setMeta method}, etc.
 *
 * @remarks See {@link "alt-shared".ICustomGlobalMeta} for an example of use.
 */
export interface ICustomPedMeta extends ICustomEntityMeta {
}
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
export interface ICustomEmitEvent {
}
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
export declare function addGxtText(key: string | number, value: string): void;
export declare function beginScaleformMovieMethodMinimap(methodName: string): boolean;
export declare function emit<K extends keyof ICustomEmitEvent>(eventName: K, ...args: Parameters<ICustomEmitEvent[K]>): void;
export declare function emit<K extends string>(eventName: Exclude<K, keyof IClientEvent | keyof ICustomEmitEvent>, ...args: any[]): void;
export declare function emitRaw<K extends keyof ICustomEmitEvent>(eventName: K, ...args: Parameters<ICustomEmitEvent[K]>): void;
export declare function emitRaw<K extends string>(eventName: Exclude<K, keyof IClientEvent | keyof ICustomEmitEvent>, ...args: any[]): void;
export declare function emitServer<K extends keyof shared.ICustomClientServerEvent>(eventName: K, ...args: Parameters<shared.ICustomClientServerEvent[K]>): void;
export declare function emitServer<K extends string>(eventName: Exclude<K, keyof shared.ICustomClientServerEvent>, ...args: any[]): void;
export declare function emitServerRaw<K extends keyof shared.ICustomClientServerEvent>(eventName: K, ...args: Parameters<shared.ICustomClientServerEvent[K]>): void;
export declare function emitServerRaw<K extends string>(eventName: Exclude<K, keyof shared.ICustomClientServerEvent>, ...args: any[]): void;
export declare function emitServerUnreliable<K extends keyof shared.ICustomClientServerEvent>(eventName: K, ...args: Parameters<shared.ICustomClientServerEvent[K]>): void;
export declare function emitServerUnreliable<K extends string>(eventName: Exclude<K, keyof shared.ICustomClientServerEvent>, ...args: any[]): void;
export declare function emitRpc<K extends keyof shared.ICustomClientServerRpc>(rpcName: K, ...args: Parameters<shared.ICustomClientServerRpc[K]>): Promise<ReturnType<shared.ICustomClientServerRpc[K]>>;
export declare function emitRpc<K extends string>(rpcName: Exclude<K, keyof shared.ICustomClientServerRpc>, ...args: any[]): Promise<any>;
export declare function onRpc<K extends keyof shared.ICustomServerClientRpc>(rpcName: K, listener: (...args: Parameters<shared.ICustomServerClientRpc[K]>) => Promise<ReturnType<shared.ICustomServerClientRpc[K]>> | ReturnType<shared.ICustomServerClientRpc[K]>): void;
export declare function onRpc<K extends string>(rpcName: Exclude<K, keyof shared.ICustomServerClientRpc>, listener: (...args: any[]) => Promise<any> | any): void;
export declare function offRpc<K extends keyof shared.ICustomServerClientRpc>(rpcName: K, listener?: (...args: Parameters<shared.ICustomServerClientRpc[K]>) => Promise<ReturnType<shared.ICustomServerClientRpc[K]>> | ReturnType<shared.ICustomServerClientRpc[K]>): void;
export declare function offRpc<K extends string>(rpcName: Exclude<K, keyof shared.ICustomServerClientRpc>, listener?: (...args: any[]) => Promise<any> | any): void;
export declare function gameControlsEnabled(): boolean;
export declare function getCursorPos(normalized?: boolean): shared.Vector2;
export declare function getGxtText(key: string | number): string | null;
export declare function getLicenseHash(): string;
export declare function getLocale(): Locale;
export declare function getLocale(): `${Locale}`;
export declare function getMsPerGameMinute(): number;
export declare function getServerTime(): number;
export declare function getPermissionState(permId: shared.Permission): boolean;
export declare function getPermissionState<T extends number>(permId: T): boolean;
export declare function getStat(statName: StatName): number;
export declare function getStat(statName: `${StatName}`): number;
export declare function isConsoleOpen(): boolean;
export declare function isGameFocused(): boolean;
export declare function isInStreamerMode(): boolean;
export declare function isKeyToggled(key: shared.KeyCode): boolean;
export declare function isKeyDown(key: shared.KeyCode): boolean;
export declare function isMenuOpen(): boolean;
export declare function isTextureExistInArchetype(modelHash: number, targetTextureName: string): boolean;
export declare function loadModel(modelHash: number): void;
export declare function loadModelAsync(modelHash: number): void;
export declare function offServer<K extends keyof shared.ICustomServerClientEvent>(eventName: K, listener: (...args: Parameters<shared.ICustomServerClientEvent[K]>) => void): void;
export declare function offServer<K extends string>(eventName: Exclude<K, keyof shared.ICustomServerClientEvent>, listener: (...args: any[]) => void): void;
export declare function offServer(eventName: string, listener: (...args: any[]) => void): void;
export declare function offServer(listener: (eventName: string, ...args: any[]) => void): void;
export declare function on<K extends keyof IClientEvent | keyof ICustomEmitEvent>(eventName: K, listener: (...args: shared.EventParameters<IClientEvent, ICustomEmitEvent, K>) => void): void;
export declare function on<K extends string>(eventName: Exclude<K, keyof IClientEvent | keyof ICustomEmitEvent>, listener: (...args: any[]) => void): void;
export declare function once<K extends keyof IClientEvent | keyof ICustomEmitEvent>(eventName: K, listener: (...args: shared.EventParameters<IClientEvent, ICustomEmitEvent, K>) => void): void;
export declare function once<K extends string>(eventName: Exclude<K, keyof IClientEvent | keyof ICustomEmitEvent>, listener: (...args: any[]) => void): void;
export declare function off<K extends keyof IClientEvent | keyof ICustomEmitEvent>(eventName: K, listener: (...args: shared.EventParameters<IClientEvent, ICustomEmitEvent, K>) => void): void;
export declare function off<K extends string>(eventName: Exclude<K, keyof IClientEvent | keyof ICustomEmitEvent>, listener: (...args: any[]) => void): void;
export declare function onServer<K extends keyof shared.ICustomServerClientEvent>(eventName: K, listener: (...args: Parameters<shared.ICustomServerClientEvent[K]>) => void): void;
export declare function onServer<K extends string>(eventName: Exclude<K, keyof shared.ICustomServerClientEvent>, listener: (...args: any[]) => void): void;
export declare function onServer(listener: (eventName: string, ...args: any[]) => void): void;
export declare function onceServer<K extends keyof shared.ICustomServerClientEvent>(eventName: K, listener: (...args: Parameters<shared.ICustomServerClientEvent[K]>) => void): void;
export declare function onceServer<K extends string>(eventName: Exclude<K, keyof shared.ICustomServerClientEvent>, listener: (...args: any[]) => void): void;
export declare function onceServer(listener: (eventName: string, ...args: any[]) => void): void;
export declare function removeGxtText(key: string): void;
export declare function removeIpl(iplName: string): void;
export declare function requestIpl(iplName: string): void;
export declare function takeScreenshot(): Promise<string>;
export declare function takeScreenshotGameOnly(): Promise<string>;
export declare function resetStat(statName: StatName): void;
export declare function resetStat(statName: `${StatName}`): void;
export declare function setCamFrozen(state: boolean): void;
export declare function isCamFrozen(): boolean;
export declare function setConfigFlag(flag: ConfigFlag, state: boolean): void;
export declare function setConfigFlag(flag: `${ConfigFlag}`, state: boolean): void;
export declare function getConfigFlag(flag: ConfigFlag): boolean;
export declare function getConfigFlag(flag: `${ConfigFlag}`): boolean;
export declare function doesConfigFlagExist(flag: string): boolean;
export declare function setCursorPos(pos: shared.IVector2, normalized?: boolean): void;
export declare function setMsPerGameMinute(milliseconds: number): void;
export declare function setRotationVelocity(scriptID: number, x: number, y: number, z: number): void;
export declare function setStat(statName: StatName, value: number): void;
export declare function setStat(statName: `${StatName}`, value: number): void;
export declare function setWeatherCycle(weathers: number[], multipliers: number[]): void;
export declare function setWeatherSyncActive(isActive: boolean): void;
export declare function showCursor(state: boolean): void;
export declare function isCursorVisible(): boolean;
export declare function toggleGameControls(state: boolean): void;
export declare function toggleVoiceControls(state: boolean): void;
export declare function isFullScreen(): boolean;
export declare function getPoolSize(poolName: string): number;
export declare function getPoolCount(poolName: string): number;
export declare function getPoolEntities(poolName: string): number[];
export declare function getVoicePlayers(): number[];
export declare function removeVoicePlayer(player: number): void;
export declare function getVoiceSpatialVolume(player: number): number;
export declare function setVoiceSpatialVolume(player: number, volume: number): void;
export declare function getVoiceNonSpatialVolume(player: number): number;
export declare function setVoiceNonSpatialVolume(player: number, volume: number): void;
export declare function addVoiceFilter(player: number, filter: AudioFilter): void;
export declare function removeVoiceFilter(player: number): void;
export declare function getVoiceFilter(player: number): AudioFilter;
export declare function updateClipContext(context: Record<string, string>): void;
export declare function loadYtyp(path: string): boolean;
export declare function unloadYtyp(path: string): boolean;
export declare function evalModule(code: string): Record<string, any>;
export declare function getRemoteEventListeners(eventName: string | null): readonly ((...args: any[]) => void)[];
export declare function getHeadshotBase64(id: number): string;
export declare function setPedDlcClothes(scriptID: number, dlc: number, component: number, drawable: number, texture: number, palette?: number): void;
export declare function setPedDlcProp(scriptID: number, dlc: number, component: number, drawable: number, texture: number): void;
export declare function clearPedProp(scriptID: number, component: number): void;
export declare function setWatermarkPosition(position: WatermarkPosition): void;
export declare function setWatermarkPosition<T extends number>(position: T): void;
export declare function getPing(): number;
export declare function getFps(): number;
export declare function getTotalPacketsSent(): bigint;
export declare function getTotalPacketsLost(): bigint;
export declare function getServerIp(): string;
export declare function getServerPort(): number;
export declare function copyToClipboard(val: string): void;
export declare function toggleRmlControls(state: boolean): void;
export declare function rmlControlsEnabled(): boolean;
export declare function loadRmlFont(path: string, name: string, italic?: boolean, bold?: boolean): void;
export declare function worldToScreen(x: number, y: number, z: number): shared.Vector3;
export declare function worldToScreen(value: shared.IVector3): shared.Vector3;
export declare function screenToWorld(x: number, y: number): shared.Vector3;
export declare function screenToWorld(value: shared.IVector2): shared.Vector3;
export declare function getCamPos(): shared.Vector3;
export declare function getScreenResolution(): shared.Vector2;
export declare function requestModel(model: string | number, timeout?: number): Promise<void>;
export declare function requestAnimDict(animDict: string, timeout?: number): Promise<void>;
export declare function requestAnimSet(animSet: string, timeout?: number): Promise<void>;
export declare function requestClipSet(clipSet: string, timeout?: number): Promise<void>;
export declare function requestCutscene(cutsceneName: string, flags: string | number, timeout?: number): Promise<void>;
export declare function drawText2dThisFrame(text: string, pos2d?: shared.IVector2, font?: GameFont, scale?: number, color?: shared.RGBA, outline?: boolean, dropShadow?: boolean, textAlign?: TextAlign): void;
export declare function drawText2d(text: string, pos2d?: shared.IVector2, font?: GameFont, scale?: number, color?: shared.RGBA, outline?: boolean, dropShadow?: boolean, textAlign?: TextAlign): shared.Utils.EveryTick;
export declare function drawText3dThisFrame(text: string, pos3d: shared.IVector3, font?: GameFont, scale?: number, color?: shared.RGBA, outline?: boolean, dropShadow?: boolean, textAlign?: TextAlign): void;
export declare function drawText3d(text: string, pos3d: shared.IVector3, font?: GameFont, scale?: number, color?: shared.RGBA, outline?: boolean, dropShadow?: boolean, textAlign?: TextAlign): shared.Utils.EveryTick;
export declare function loadMapArea(pos: shared.IVector3, radius?: number, timeout?: number): Promise<void>;
export declare function registerPedheadshotBase64(ped: Player | number): Promise<string>;
export declare function registerPedheadshot3Base64(ped: Player | number): Promise<string>;
export declare function registerPedheadshotTransparentBase64(ped: Player | number): Promise<string>;
export declare function getClosestPlayer(options?: {
    pos?: shared.IVector3;
    range?: number;
}): Player | null;
export declare function getClosestVehicle(options?: {
    pos?: shared.IVector3;
    range?: number;
}): Vehicle | null;
export declare function getClosestObject(options?: {
    pos?: shared.IVector3;
    range?: number;
}): Object | null;
export declare function getClosestWorldObject(options?: {
    pos?: shared.IVector3;
    range?: number;
}): Object | null;
export declare function getClosestVirtualEntity(options?: {
    pos?: shared.IVector3;
    range?: number;
}): VirtualEntity | null;
export declare function getLocalMeta<K extends string>(key: Exclude<K, keyof shared.ICustomPlayerLocalMeta>): unknown;
export declare function getLocalMeta<K extends shared.ExtractStringKeys<shared.ICustomPlayerLocalMeta>>(key: K): shared.ICustomPlayerLocalMeta[K] | undefined;
export declare function getLocalMeta<V extends any>(key: string): V | undefined;
export declare function hasLocalMeta(key: string): boolean;
export declare function hasLocalMeta<K extends shared.ExtractStringKeys<shared.ICustomPlayerLocalMeta>>(key: K): boolean;
export declare function setMinimapComponentPosition(name: string, alignX: string, alignY: string, pos: shared.IVector2, size: shared.IVector2): void;
export declare function setMinimapComponentPosition(name: string, alignX: string, alignY: string, posX: number, posY: number, sizeX: number, sizeY: number): void;
export declare function resetMinimapComponentPosition(name: string): void;
export declare function setMinimapIsRectangle(state: boolean): void;
export declare function loadDefaultIpls(): void;
export declare function isPointOnScreen(x: number, y: number, z: number): boolean;
export declare function isPointOnScreen(value: shared.IVector3): boolean;
export declare function getPedBonePos(ped: number, boneId: number): shared.Vector3;
export declare class BaseObject extends shared.BaseObject {
    /**
     * Whether this entity was created clientside or serverside. (Clientside = false, Serverside = true).
     *
     */
    readonly isRemote: boolean;
    /**
     * The serverside id of this entity.
     * */
    readonly remoteID: number;
    /**
     * Gets the base object with the given type and local id
     */
    static getByID(type: shared.BaseObjectType, id: number): BaseObject;
    static getByRemoteID(type: shared.BaseObjectType, id: number): BaseObject;
    deleteMeta(key: string): void;
    hasMeta(key: string): boolean;
    getMeta<K extends string>(key: Exclude<K, never>): unknown;
    getMeta<K extends shared.ExtractStringKeys<ICustomBaseObjectMeta>>(key: K): ICustomBaseObjectMeta[K];
    setMeta<K extends string>(key: K, value: shared.InterfaceValueByKey<ICustomBaseObjectMeta, K, unknown, void>): void;
    setMeta<K extends shared.ExtractStringKeys<ICustomBaseObjectMeta>>(key: K, value: ICustomBaseObjectMeta[K]): void;
    /** @deprecated See {@link ICustomBaseObjectMeta} */
    setMeta<V extends any, K extends string = string>(key: K, value: shared.InterfaceValueByKey<ICustomBaseObjectMeta, K, V, void>): void;
}
export declare class VirtualEntityGroup extends BaseObject {
    constructor(maxEntitiesInStream: number);
    /** Returns all Virtual Entity Group instances */
    static readonly all: readonly VirtualEntityGroup[];
    /**
     * Max number of entities per player stream.
     * [More info](https://docs.altv.mp/articles/virtualentity.html#what-is-max-number-of-entities-per-player-stream).
     */
    readonly maxEntitiesInStream: number;
}
export declare class WorldObject extends BaseObject {
    /**
     * Object position
     */
    pos: shared.Vector3;
    /**
     * Object dimension.
     *
     * @remarks Check https://docs.altv.mp/articles/dimensions.html to understand how it works.
     *
     */
    dimension: number;
}
export declare class VirtualEntity extends WorldObject {
    constructor(group: VirtualEntityGroup, position: shared.Vector3, streamingDistance: number, data: Record<string, any>);
    /** Returns all Virtual Entity instances */
    static readonly all: readonly VirtualEntity[];
    static readonly streamedIn: readonly VirtualEntity[];
    /** Virtual Entity Group this entity belongs to */
    readonly group: VirtualEntityGroup;
    readonly isStreamedIn: boolean;
    visible: boolean;
    /**
     * Gets a value using the specified key.
     * Only available for server-side created Virtual Entities.
     *
     * @param key The key of the value to get.
     * @returns Dynamic value associated with the specified key or undefined if no data is present.
     */
    getStreamSyncedMeta<K extends string>(key: Exclude<K, never>): unknown;
    getStreamSyncedMeta<K extends shared.ExtractStringKeys<shared.ICustomVirtualEntityStreamSyncedMeta>>(key: K): shared.ICustomVirtualEntityStreamSyncedMeta[K];
    /**
     * Determines whether contains the specified key.
     * Only available for server-side created Virtual Entities.
     *
     * @param key The key of the value to locate.
     * @returns True if the meta table contains any data at the specified key or False if not
     */
    hasStreamSyncedMeta(key: string): boolean;
    /**
     * Returns all set meta keys of the Virtual Entity.
     * Only available for server-side created Virtual Entities.
     */
    getStreamSyncedMetaKeys(): readonly string[];
}
export declare class Audio extends BaseObject {
    constructor(source: string, volume: number, radio: boolean, clearCache: boolean);
    static readonly all: readonly Audio[];
    static readonly count: number;
    source: string;
    looped: boolean;
    volume: number;
    readonly currentTime: number;
    readonly maxTime: number;
    readonly playing: boolean;
    /**
     * Retrieves the audio from the pool.
     *
     * @param id The id of the audio.
     * @returns Entity if it was found, otherwise null.
     */
    static getByID(id: number): Audio;
    /**
     * @remarks This method has no effect if the {@link frontendPlay} property returns true.
     */
    addOutput(output: AudioOutput): void;
    /**
     * @remarks This method has no effect if the {@link frontendPlay} property returns true.
     */
    removeOutput(output: AudioOutput): void;
    /**
     * @remarks This method has no effect if the {@link frontendPlay} property returns true.
     */
    getOutputs(): readonly (number | AudioOutput)[];
    play(): void;
    pause(): void;
    reset(): void;
    seek(time: number): void;
    on(event: 'inited', callback: () => void): void;
    on(event: 'streamStarted', callback: () => void): void;
    on(event: 'streamEnded', callback: () => void): void;
    on(event: 'streamPaused', callback: () => void): void;
    on(event: 'streamReset', callback: () => void): void;
    on(event: 'streamSeek', callback: (time: number) => void): void;
    on(event: 'volumeChange', callback: (vol: number) => void): void;
    deleteMeta(key: string): void;
    hasMeta(key: string): boolean;
    getMeta<K extends string>(key: Exclude<K, never>): unknown;
    getMeta<K extends shared.ExtractStringKeys<ICustomAudioMeta>>(key: K): ICustomAudioMeta[K];
    setMeta<K extends string>(key: K, value: shared.InterfaceValueByKey<ICustomAudioMeta, K, unknown, void>): void;
    setMeta<K extends shared.ExtractStringKeys<ICustomAudioMeta>>(key: K, value: ICustomAudioMeta[K]): void;
    /** @deprecated See {@link ICustomAudioMeta} */
    setMeta<V extends any, K extends string = string>(key: K, value: shared.InterfaceValueByKey<ICustomAudioMeta, K, V, void>): void;
}
export declare class AudioOutput extends BaseObject {
    protected constructor();
    static readonly all: readonly AudioOutput[];
    static readonly count: number;
    muted: boolean;
    volume: number;
    category: number;
    filter: AudioFilter;
    /**
     * Retrieves the audiooutput from the pool.
     *
     * @param id The id of the audiooutput.
     * @returns Entity if it was found, otherwise null.
     */
    static getByID(id: number): AudioOutput;
}
export declare class AudioOutputFrontend extends AudioOutput {
    constructor(categoryHash: number);
}
export declare class AudioOutputWorld extends AudioOutput {
    constructor(pos: shared.IVector3, categoryHash: number);
    pos: shared.Vector3;
}
export declare class AudioOutputAttached extends AudioOutput {
    constructor(entity: WorldObject, categoryHash: number);
    entity: WorldObject;
}
export declare class Checkpoint extends WorldObject {
    constructor(type: shared.CheckpointType, pos: shared.IVector3, nextPos: shared.IVector3, radius: number, height: number, rgbColor: shared.RGBA, iconColor: shared.RGBA, streamingDistance: number);
    checkpointType: shared.CheckpointType;
    nextPos: shared.Vector3;
    radius: number;
    height: number;
    color: shared.RGBA;
    iconColor: shared.RGBA;
    /**
     * Streaming range for the checkpoint
     */
    readonly streamingDistance: number;
    static readonly all: readonly Checkpoint[];
    static readonly count: number;
    readonly isStreamedIn: boolean;
    visible: boolean;
    readonly scriptID: number;
    /**
     * Retrieves the checkpoint from the pool.
     *
     * @param id The id of the checkpoint.
     * @returns Entity if it was found, otherwise null.
     *
     */
    static getByID(id: number): Checkpoint;
    static getByScriptID(scriptID: number): Checkpoint;
    isEntityIn(entity: Entity): boolean;
    isPointIn(pos: shared.IVector3): boolean;
    deleteMeta(key: string): void;
    hasMeta(key: string): boolean;
    getMeta<K extends string>(key: Exclude<K, never>): unknown;
    getMeta<K extends shared.ExtractStringKeys<ICustomCheckpointMeta>>(key: K): ICustomCheckpointMeta[K];
    setMeta<K extends string>(key: K, value: shared.InterfaceValueByKey<ICustomCheckpointMeta, K, unknown, void>): void;
    setMeta<K extends shared.ExtractStringKeys<ICustomCheckpointMeta>>(key: K, value: ICustomCheckpointMeta[K]): void;
    /** @deprecated See {@link ICustomCheckpointMeta} */
    setMeta<V extends any, K extends string = string>(key: K, value: shared.InterfaceValueByKey<ICustomCheckpointMeta, K, V, void>): void;
}
export declare class Entity extends WorldObject {
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
    static readonly all: readonly Entity[];
    /** Internal game id that can be used in native calls */
    readonly scriptID: number;
    /**
     * Network owner of the entity.
     *
     * @remarks Network owner is responsible for syncing entity with the server.
     * It changes when actual network owner passes the migration range,
     * then the new one is determined based on distance from the entity
     * (if entity is a vehicle, then the driver will take priority for becoming network owner).
     * Disabling migration range will stop this process from happening until turned on again.
     */
    readonly netOwner: Player;
    /**
     * Returns whether the entity is spawned in the game world.
     *
     * @remarks This does the same thing as checking if the {@link scriptID} is 0.
     */
    readonly isSpawned: boolean;
    /** Hash of entity model */
    get model(): number;
    /**
     * Object position.
     * @remarks Setting this throws an error if the client is not the network owner of an entity
     */
    pos: shared.Vector3;
    /**
     * Entity rotation in radians
     * @remarks Setting this throws an error if the client is not the network owner of an entity
     */
    rot: shared.Vector3;
    readonly visible: boolean;
    frozen: boolean;
    /**
     * Retrieves the entity from the pool.
     *
     * @param scriptID The script id of the entity.
     * @returns Entity if it was found, otherwise null.
     */
    static getByScriptID(scriptID: number): Entity;
    setMeta<K extends string>(key: K, value: shared.InterfaceValueByKey<ICustomEntityMeta, K, unknown, void>): void;
    setMeta<K extends shared.ExtractStringKeys<ICustomEntityMeta>>(key: K, value: ICustomEntityMeta[K]): void;
    /** @deprecated See {@link ICustomEntityMeta} */
    setMeta<V extends any, K extends string = string>(key: K, value: shared.InterfaceValueByKey<ICustomEntityMeta, K, V, void>): void;
    deleteMeta(key: string): void;
    getMeta<K extends string>(key: Exclude<K, never>): unknown;
    getMeta<K extends shared.ExtractStringKeys<ICustomEntityMeta>>(key: K): ICustomEntityMeta[K];
    hasMeta(key: string): boolean;
    /**
     * Gets a value using the specified key.
     *
     * @param key The key of the value to get.
     * @returns Dynamic value associated with the specified key or undefined if no data is present.
     */
    getSyncedMeta<K extends string>(key: Exclude<K, never>): unknown;
    getSyncedMeta<K extends shared.ExtractStringKeys<shared.ICustomEntitySyncedMeta>>(key: K): shared.ICustomEntitySyncedMeta[K];
    /**
     * Determines whether contains the specified key.
     *
     * @param key The key of the value to locate.
     * @returns True if the meta table contains any data at the specified key or False if not
     */
    hasSyncedMeta(key: string): boolean;
    getSyncedMetaKeys(): readonly string[];
    /**
     * Gets a value using the specified key.
     *
     * @param key The key of the value to get.
     * @returns Dynamic value associated with the specified key or undefined if no data is present.
     */
    getStreamSyncedMeta<K extends string>(key: Exclude<K, never>): unknown;
    getStreamSyncedMeta<K extends shared.ExtractStringKeys<shared.ICustomEntityStreamSyncedMeta>>(key: K): shared.ICustomEntityStreamSyncedMeta[K];
    /**
     * Determines whether contains the specified key.
     *
     * @param key The key of the value to locate.
     * @returns True if the meta table contains any data at the specified key or False if not
     */
    hasStreamSyncedMeta(key: string): boolean;
    getStreamSyncedMetaKeys(): readonly string[];
    getSyncInfo(): ISyncInfo;
}
export declare class Player extends Entity {
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
    static readonly all: readonly Player[];
    static readonly count: number;
    /**
     * Array with all streamed in players.
     */
    static readonly streamedIn: readonly Player[];
    /**
     * The local player instance.
     */
    static readonly local: LocalPlayer;
    /** Player talking state */
    readonly isTalking: boolean;
    /** Player talking volume */
    readonly micLevel: number;
    /** Player name */
    readonly name: string;
    /** Player's vehicle, null if player is not in any vehicle */
    readonly vehicle: Vehicle | LocalVehicle;
    readonly isDead: boolean;
    /**
     * Current weapon components.
     */
    readonly currentWeaponComponents: readonly number[];
    /**
     * Tint index for currently equipped weapon.
     */
    readonly currentWeaponTintIndex: number;
    /**
     * Currently equipped weapon.
     */
    readonly currentWeapon: number;
    /**
     * Is the player currently jumping.
     */
    /**
     * Is the player currently in ragdoll.
     */
    readonly isInRagdoll: boolean;
    /**
     * Is the player currently aiming.
     *
     * @remarks
     * Returns ``true`` _ONLY_ if:
     *  - you are in first person with a gun equipped and you are not sprinting
     *  - you are in third person and aiming/shooting
     */
    readonly isAiming: boolean;
    /**
     * Is the player currently shooting with a weapon.
     */
    /**
     * Is the player currently reloading their weapon.
     */
    readonly isReloading: boolean;
    readonly isEnteringVehicle: boolean;
    readonly isLeavingVehicle: boolean;
    readonly isOnLadder: boolean;
    readonly isInMelee: boolean;
    readonly isInCover: boolean;
    readonly isParachuting: boolean;
    /**
     * Current armour.
     */
    readonly armour: number;
    /**
     * Max available armour value.
     */
    readonly maxArmour: number;
    /**
     * Current player movement speed.
     */
    readonly moveSpeed: number;
    /**
     * Position the player is currently aiming at.
     */
    readonly aimPos: shared.Vector3;
    /**
     * Rotation of the head of the player.
     */
    readonly headRot: shared.Vector3;
    /**
     * Curent seat the player is sitting in.
     * If player is not in any vehicle it is equal to `0`.
     *
     * @remarks The seat indexes start with 1 (driver seat).
     *
     */
    readonly seat: number;
    /**
     * The entity the player is aiming at.
     */
    readonly entityAimingAt: Entity;
    /**
     * The current aim offset of the player.
     */
    readonly entityAimOffset: shared.Vector3;
    /**
     * Is the flashlight of the player activated.
     */
    readonly flashlightActive: boolean;
    /**
     * Current health of the player.
     */
    readonly health: number;
    /**
     * Current max health of the player.
     */
    readonly maxHealth: number;
    /**
     * Set & get the volume for 3D Voice.
     *
     * @remarks Value needs to be between 0-1.
     */
    spatialVolume: number;
    /**
     * Set & get the volume for 2D Voice.
     *
     * @remarks Value needs to be between 0-1.
     */
    nonSpatialVolume: number;
    /**
     * Has the player superjump enabled.
     */
    /**
     * Is the player currently crouching.
     */
    readonly isCrouching: boolean;
    /**
     * Is the player currently stealthy.
     */
    readonly isStealthy: boolean;
    /**
     * Forward speed of the player.
     */
    readonly forwardSpeed: number;
    /**
     * Strafe speed of the player.
     */
    readonly strafeSpeed: number;
    filter: AudioFilter;
    readonly taskData: string;
    hasWeaponComponent(weaponModel: string | number, component: string | number): boolean;
    getWeaponTintIndex(weaponModel: string | number): number;
    /**
     * Retrieves the player from the pool.
     *
     * @param id The id of the player.
     * @returns Entity if it was found, otherwise null.
     */
    static getByID(id: number): Player;
    /**
     * Retrieves the player from the pool.
     *
     * @param scriptID The script id of the player.
     * @returns Entity if it was found, otherwise null.
     */
    static getByScriptID(scriptID: number): Player;
    /**
     * Gets the player with the given remote id
     */
    static getByRemoteID(id: number): Player;
    setMeta<K extends string>(key: K, value: shared.InterfaceValueByKey<ICustomPlayerMeta, K, unknown, void>): void;
    setMeta<K extends shared.ExtractStringKeys<ICustomPlayerMeta>>(key: K, value: ICustomPlayerMeta[K]): void;
    /** @deprecated See {@link ICustomPlayerMeta} */
    setMeta<V extends any, K extends string = string>(key: K, value: shared.InterfaceValueByKey<ICustomPlayerMeta, K, V, void>): void;
    deleteMeta(key: string): void;
    getMeta<K extends string>(key: Exclude<K, never>): unknown;
    getMeta<K extends shared.ExtractStringKeys<ICustomPlayerMeta>>(key: K): ICustomPlayerMeta[K];
    hasMeta(key: string): boolean;
    getSyncedMeta<K extends string>(key: Exclude<K, never>): unknown;
    getSyncedMeta<K extends shared.ExtractStringKeys<shared.ICustomPlayerSyncedMeta>>(key: K): shared.ICustomPlayerSyncedMeta[K];
    hasSyncedMeta(key: string): boolean;
    getStreamSyncedMeta<K extends string>(key: Exclude<K, never>): any;
    getStreamSyncedMeta<K extends shared.ExtractStringKeys<shared.ICustomPlayerStreamSyncedMeta>>(key: K): shared.ICustomPlayerStreamSyncedMeta[K];
    hasStreamSyncedMeta(key: string): boolean;
}
export declare class LocalPlayer extends Player {
    readonly dimension: number;
    pos: shared.Vector3;
    rot: shared.Vector3;
    /**
     * Ammo of the currently held weapon.
     *
     * @returns Total ammo of the currently held weapon. 0 if no weapon is equipped.
     */
    readonly currentAmmo: number;
    readonly weapons: readonly shared.IWeapon[];
    readonly currentWeaponData: WeaponData;
    stamina: number;
    maxStamina: number;
    getWeaponAmmo(hash: number): number;
    getWeaponComponents(hash: number): readonly number[];
    hasWeapon(hash: number): boolean;
    deleteMeta(key: string): void;
    hasMeta(key: string): boolean;
    getMeta<K extends string>(key: Exclude<K, never>): unknown;
    getMeta<K extends shared.ExtractStringKeys<ICustomLocalPlayerMeta>>(key: K): ICustomLocalPlayerMeta[K];
    setMeta<K extends string>(key: K, value: shared.InterfaceValueByKey<ICustomLocalPlayerMeta, K, unknown, void>): void;
    setMeta<K extends shared.ExtractStringKeys<ICustomLocalPlayerMeta>>(key: K, value: ICustomLocalPlayerMeta[K]): void;
    /** @deprecated See {@link ICustomLocalPlayerMeta} */
    setMeta<V extends any, K extends string = string>(key: K, value: shared.InterfaceValueByKey<ICustomLocalPlayerMeta, K, V, void>): void;
}
export declare class Vehicle extends Entity {
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
    static readonly all: readonly Vehicle[];
    static readonly count: number;
    /**
     * Array with all streamed in vehicles.
     */
    static readonly streamedIn: readonly Vehicle[];
    /**
     * Vehicle gear.
     *
     * @returns A number indicating actual gear.
     */
    gear: number;
    /**
     * Vehicle max gear.
     */
    readonly maxGear: number;
    /**
     * Vehicle handling, which affects how vehicle responds and reacts to the inputs of a driver.
     */
    handling: IVehicleHandling;
    /**
     * Vehicle indicator lights.
     */
    indicatorLights: VehicleIndicatorLights;
    /**
     * Vehicle RPM.
     *
     * @returns Normalised value on a scale of [0, 1].
     */
    rpm: number;
    /**
     * Vehicle wheels speed.
     */
    readonly speed: number;
    /**
     * Vehicle speed vector.
     */
    readonly speedVector: shared.Vector3;
    /**
     * Vehicle seat count.
     */
    readonly seatCount: number;
    /**
     * Vehicle velocity vector.
     */
    /**
     * Vehicle wheels count.
     */
    readonly wheelsCount: number;
    /**
     * Is the vehicle destroyed.
     */
    /**
     * Available modkits for the vehicle.
     */
    /**
     * Current vehicle modkit.
     */
    /**
     * Vehicle primary color.
     */
    /**
     * Custom (RGB) vehicle primary color.
     */
    /**
     * Vehicle secondary color.
     */
    /**
     * Custom (RGB) vehicle secondary color.
     */
    /**
     * Vehicle pearl color.
     */
    /**
     * Vehicle wheel color.
     */
    /**
     * Vehicle interior color.
     */
    /**
     * Vehicle dashboard color.
     */
    /**
     * Vehicle tire smoke color.
     */
    /**
     * Vehicle wheel type.
     */
    /**
     * Vehicle front wheels variation.
     */
    /**
     * Vehicle rear wheels variation.
     */
    /**
     * Are custom tires active.
     */
    /**
     * Vehicle darkness.
     */
    /**
     * Vehicle number plate type index.
     */
    /**
     * Vehicle number plate text.
     */
    /**
     * Vehicle window tint.
     */
    /**
     * Vehicle dirt level.
     */
    /**
     * Vehicle neon.
     */
    /**
     * Vehicle neon color.
     */
    /**
     * Vehicle livery.
     */
    /**
     * Vehicle roof livery.
     */
    /**
     * Vehicle engine state.
     */
    readonly engineOn: boolean;
    /**
     * Vehicle handbrake state.
     */
    /**
     * Vehicle headlight color.
     */
    /**
     * Vehicle active radio station.
     */
    /**
     * Vehicle siren state.
     */
    /**
     * Vehicle lock state.
     */
    readonly lockState: shared.VehicleLockState;
    /**
     * Vehicle daylight state.
     */
    /**
     * Vehicle nightlight state.
     */
    /**
     * Vehicle roof state.
     */
    /**
     * Vehicle flamethrower state.
     */
    /**
     * Vehicle lights multiplier.
     */
    /**
     * The vehicle's engine health.
     */
    /**
     * The vehicle's petrol tank health.
     */
    readonly petrolTankHealth: number;
    /**
     * Vehicle repairs count.
     */
    /**
     * The vehicle's body health.
     */
    /**
     * The vehicle's additional body health.
     */
    /**
     * Does the vehicle currently have the bulletproof windows?
     */
    /**
     * Determines whether the vehicle's engine should be turned on/off automatically.
     */
    /**
     * The vehicle's engine temperature.
     */
    engineTemperature: number;
    /**
     * The vehicle's fuel level.
     */
    fuelLevel: number;
    /**
     * The vehicle's oil level.
     */
    oilLevel: number;
    /**
     * Changes the engine lamp of the vehicle dashboard.
     */
    engineLight: boolean;
    /**
     * Changes the abs lamp of the vehicle dashboard.
     */
    absLight: boolean;
    /**
     * Changes the petrol lamp of the vehicle dashboard.
     */
    petrolLight: boolean;
    /**
     * Changes the oil lamp of the vehicle dashboard.
     */
    oilLight: boolean;
    /**
     * Changes the battery lamp of the vehicle dashboard.
     */
    batteryLight: boolean;
    /**
     * @remarks Setter needs to be called in everytick and engine must be off.
     */
    steeringAngle: number;
    getWheelSurfaceMaterial(wheel: number): number;
    /**
     * Gets the camber angle of the specified wheel.
     *
     * @param wheelIndex The index of the wheel.
     */
    getWheelCamber(wheelIndex: number): number;
    /**
     * Sets the camber angle of the specified wheel.
     *
     * @remarks A positive camber angle means that the top of the wheel is farther out than the bottom. A negative camber angle means that the bottom of the wheel is farther out than the top.
     *
     * @param wheelIndex The index of the wheel.
     * @param camber The value the of camber angle.
     */
    setWheelCamber(wheelIndex: number, camber: number): void;
    /**
     * Gets the track width of the specified wheel.
     *
     * @param wheelIndex The index of the wheel.
     */
    getWheelTrackWidth(wheelIndex: number): number;
    /**
     * Sets the track width of the specified wheel.
     *
     * @param wheelIndex The index of the wheel.
     * @param width The value of the track width.
     */
    setWheelTrackWidth(wheelIndex: number, width: number): void;
    /**
     * Gets the height of the specified wheel.
     *
     * @param wheelIndex The index of the wheel.
     */
    getWheelHeight(wheelIndex: number): number;
    /**
     * Sets the height of the specified wheel.
     *
     * @param wheelIndex The index of the wheel.
     * @param height The value of the wheel height.
     */
    setWheelHeight(wheelIndex: number, height: number): void;
    /**
     * Gets the tyre radius of the specified wheel.
     *
     * @param wheelIndex The index of the wheel.
     */
    getWheelTyreRadius(wheelIndex: number): number;
    /**
     * @remarks Applies only physical effects to the wheel.
     *
     * @param wheelIndex The index of the wheel.
     * @param radius The value of the tyre radius.
     */
    setWheelTyreRadius(wheelIndex: number, radius: number): void;
    /**
     * Gets the rim radius of the specified wheel.
     *
     * @param wheelIndex The index of the wheel.
     */
    getWheelRimRadius(wheelIndex: number): number;
    /**
     * @remarks Does not show any visible effect.
     *
     * @param wheelIndex The index of the wheel.
     * @param radius The index of the rim radius.
     */
    setWheelRimRadius(wheelIndex: number, radius: number): void;
    /**
     * Gets the tyre width the specified wheel.
     *
     * @param wheelIndex The index of the wheel.
     */
    getWheelTyreWidth(wheelIndex: number): number;
    /**
     * @remarks Does not show any visible effect.
     *
     * @param wheelIndex The index of the wheel.
     * @param width The value of the tyre width.
     */
    setWheelTyreWidth(wheelIndex: number, width: number): void;
    getWheelDynamicFlag(wheelIndex: number, flag: number): boolean;
    setWheelDynamicFlag(wheelIndex: number, flag: number, value: boolean): void;
    getWheelConfigFlag(wheelIndex: number, flag: number): boolean;
    setWheelConfigFlag(wheelIndex: number, flag: number, value: boolean): void;
    setupTransmission(): void;
    /**
     * Resets the dashboard lights to default values.
     */
    resetDashboardLights(): void;
    setMeta<K extends string>(key: K, value: shared.InterfaceValueByKey<ICustomVehicleMeta, K, unknown, void>): void;
    setMeta<K extends shared.ExtractStringKeys<ICustomVehicleMeta>>(key: K, value: ICustomVehicleMeta[K]): void;
    /** @deprecated See {@link ICustomVehicleMeta} */
    setMeta<V extends any, K extends string = string>(key: K, value: shared.InterfaceValueByKey<ICustomVehicleMeta, K, V, void>): void;
    deleteMeta(key: string): void;
    getMeta<K extends string>(key: Exclude<K, never>): unknown;
    getMeta<K extends shared.ExtractStringKeys<ICustomVehicleMeta>>(key: K): ICustomVehicleMeta[K];
    hasMeta(key: string): boolean;
    getSyncedMeta<K extends string>(key: Exclude<K, never>): unknown;
    getSyncedMeta<K extends shared.ExtractStringKeys<shared.ICustomVehicleSyncedMeta>>(key: K): shared.ICustomVehicleSyncedMeta[K];
    hasSyncedMeta(key: string): boolean;
    getStreamSyncedMeta<K extends string>(key: Exclude<K, never>): unknown;
    getStreamSyncedMeta<K extends shared.ExtractStringKeys<shared.ICustomVehicleStreamSyncedMeta>>(key: K): shared.ICustomVehicleStreamSyncedMeta[K];
    hasStreamSyncedMeta(key: string): boolean;
    /**
     * Retrieves the vehicle from the pool.
     *
     * @param id The id of the vehicle.
     * @returns Entity if it was found, otherwise null.
     */
    static getByID(id: number): Vehicle;
    /**
     * Retrieves the vehicle from the pool.
     *
     * @param scriptID The script id of the vehicle.
     * @returns Entity if it was found, otherwise null.
     *
     */
    static getByScriptID(scriptID: number): Vehicle;
    /**
     * Gets the vehicle with the given remote id
     */
    static getByRemoteID(id: number): Vehicle;
}
export declare class WebView extends BaseObject {
    constructor(url: string, isOverlay: boolean);
    constructor(url: string, pos: shared.IVector2);
    constructor(url: string, pos: shared.IVector2, size: shared.IVector2);
    constructor(url: string, isOverlay: boolean, pos: shared.IVector2, size: shared.IVector2);
    constructor(url: string, drawableHash: number, targetTexture: string);
    constructor(params: IWebViewParams);
    /** View visibility state */
    isVisible: boolean;
    /** View URL */
    url: string;
    static readonly all: readonly WebView[];
    static readonly count: number;
    static readonly gpuAccelerationActive: boolean;
    /**
     * Is the webview a overlay.
     */
    readonly isOverlay: boolean;
    /**
     * Is the webview ready.
     */
    readonly isReady: boolean;
    /**
     * Is the webview focused.
     */
    focused: boolean;
    /**
     * Set and get the webview size.
     */
    size: shared.Vector2;
    /**
     * Set and get the webview position.
     */
    readonly pos: shared.Vector2;
    /**
     * Retrieves the webview from the pool.
     *
     * @param id The id of the webview.
     * @returns Entity if it was found, otherwise null.
     *
     */
    static getByID(id: number): WebView;
    /**
     * Emits specified event across particular WebView.
     *
     * @param eventName Name of the event.
     * @param args Rest parameters for emit to send.
     */
    emit(eventName: string, ...args: any[]): void;
    /**
     * Unsubscribes from WebView event handler with specified listener.
     *
     * @remarks Listener should be of the same reference as when event was subscribed.
     *
     * @param eventName Name of the event.
     * @param listener Listener that should be removed.
     */
    off(eventName: string, listener: (...args: any[]) => void): void;
    /**
     * Subscribes to WebView event handler with specified listener.
     *
     * @param eventName Name of the event.
     * @param listener Listener that should be added.
     */
    on(eventName: string, listener: (...args: any[]) => void): void;
    /**
     * Subscribes to WebView event with specified listener, which only triggers once.
     *
     * @param eventName Name of the event.
     * @param listener Listener that should be added.
     */
    once(eventName: string, listener: (...args: any[]) => void): void;
    /**
     * Focuses the webview so it can be interacted with.
     */
    focus(): void;
    /**
     * Unfocuses the webview so it ignores user input.
     */
    unfocus(): void;
    /**
     * Gets all the listeners for the specified webview event.
     *
     * @param eventName Name of the event.
     * @returns Array of listener functions for that event.
     */
    getEventListeners(eventName: string): readonly ((...args: any[]) => void)[];
    /**
     * Sets the specified header to the specified value.
     *
     * @param header Header name.
     * @param value Header value.
     */
    setExtraHeader(header: string, value: string): void;
    /**
     * Sets the zoom level for webview.
     *
     * @param value Zoom level value.
     */
    setZoomLevel(value: number): void;
    addOutput(output: AudioOutput): void;
    removeOutput(output: AudioOutput): void;
    getOutputs(): readonly (number | AudioOutput)[];
    reload(ignoreCache: boolean): void;
    setCookie(cookie: ICookie): void;
    deleteMeta(key: string): void;
    hasMeta(key: string): boolean;
    getMeta<K extends string>(key: Exclude<K, never>): unknown;
    getMeta<K extends shared.ExtractStringKeys<ICustomWebViewMeta>>(key: K): ICustomWebViewMeta[K];
    setMeta<K extends string>(key: K, value: shared.InterfaceValueByKey<ICustomWebViewMeta, K, unknown, void>): void;
    setMeta<K extends shared.ExtractStringKeys<ICustomWebViewMeta>>(key: K, value: ICustomWebViewMeta[K]): void;
    /** @deprecated See {@link ICustomWebViewMeta} */
    setMeta<V extends any, K extends string = string>(key: K, value: shared.InterfaceValueByKey<ICustomWebViewMeta, K, V, void>): void;
}
export declare class Worker {
    constructor(filePath: string);
    /**
     * Maximum available workers per resource.
     */
    static readonly maxWorkers: number;
    /**
     * Whether this worker is still valid. See {@link destroy}.
     */
    readonly valid: boolean;
    /**
     * The file path that was used to create this worker.
     */
    readonly filePath: string;
    /**
     * Whether the worker is currently paused. See {@link pause} and {@link resume}.
     */
    readonly isPaused: boolean;
    /**
     * Adds a shared array buffer to the workers array buffer pool.
     *
     * @remarks Make sure to remove the array buffer once you are done with it by calling {@link removeSharedArrayBuffer},
     * otherwise you are creating a memory leak.
     *
     * @param buffer The shared array buffer to make available in workers.
     * @returns The id of the shared array buffer that can be used in workers to retrieve it.
     */
    static addSharedArrayBuffer(buffer: SharedArrayBuffer): number;
    /**
     * Removes the shared array buffer from the workers array buffer pool.
     *
     * @param id The id of the shared array buffer to remove.
     */
    static removeSharedArrayBuffer(id: number): void;
    /**
     * Starts the worker script.
     */
    start(): void;
    /**
     * Destroys the worker and stops it.
     *
     * @remarks This permanently sets {@link valid} to false.
     */
    destroy(): void;
    /**
     * Emits the specified event to the worker.
     *
     * @remarks This can be called before the worker is started.
     */
    emit(eventName: string, ...args: any[]): void;
    /**
     * Listens to an event emitted by the worker.
     *
     * @remarks The event handlers should be registered before starting the worker.
     *
     * @param eventName The event to listen for.
     * @param callback The callback to call when the event is received.
     */
    on(eventName: string, callback: (...args: any[]) => void): void;
    /**
     * Listens to an event emitted by the worker once.
     *
     * @remarks See {@link on}.
     *
     * @param eventName The event to listen for.
     * @param callback The callback to call when the event is received.
     */
    once(eventName: string, callback: (...args: any[]) => void): void;
    /**
     * Pauses execution of the worker.
     *
     * @remarks This completely stops the JavaScript event loop of the worker
     * but events can still be received (and will be handled once the worker is resumed).
     */
    pause(): void;
    /**
     * Resumes execution of the worker.
     *
     * @remarks See {@link pause}.
     */
    resume(): void;
    /**
     * Unsubscribes from Worker event handler with specified listener.
     *
     * @remarks Listener should be of the same reference as when event was subscribed.
     *
     * @param eventName Name of the event.
     * @param listener Listener that should be removed.
     */
    off(eventName: string, listener: (...args: any[]) => void): void;
}
export declare class Blip extends WorldObject {
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
    static readonly all: readonly Blip[];
    static readonly count: number;
    readonly scriptID: number;
    routeColor: shared.RGBA;
    alpha: number;
    asMissionCreator: boolean;
    bright: boolean;
    category: number;
    color: number | shared.BlipColor.White | shared.BlipColor.Red | shared.BlipColor.Green | shared.BlipColor.Blue | shared.BlipColor.LightRed | shared.BlipColor.Violet | shared.BlipColor.Pink | shared.BlipColor.LightOrange | shared.BlipColor.LightBrown | shared.BlipColor.LightGreen | shared.BlipColor.LightBlue | shared.BlipColor.LightPurple | shared.BlipColor.DarkPurple | shared.BlipColor.Cyan | shared.BlipColor.LightYellow | shared.BlipColor.Organe | shared.BlipColor.GraniteGreen | shared.BlipColor.DarkBrown | shared.BlipColor.LightGray | shared.BlipColor.LightPink | shared.BlipColor.LemonGreen | shared.BlipColor.ForestGreen | shared.BlipColor.ElectricBlue | shared.BlipColor.BrightPurple | shared.BlipColor.DarkYellow | shared.BlipColor.PinkRed | shared.BlipColor.Orange | shared.BlipColor.BrilliantRose | shared.BlipColor.Salmon | shared.BlipColor.DarkGreen | shared.BlipColor.BlizzardBlue | shared.BlipColor.OracleBlue | shared.BlipColor.Silver | shared.BlipColor.MulberryPink | shared.BlipColor.AltoGray | shared.BlipColor.JellyBeanBlue | shared.BlipColor.DarkOrange | shared.BlipColor.Mamba | shared.BlipColor.White | shared.BlipColor.Red | shared.BlipColor.Green | shared.BlipColor.Blue | shared.BlipColor.LightRed | shared.BlipColor.Violet | shared.BlipColor.Pink | shared.BlipColor.LightOrange | shared.BlipColor.LightBrown | shared.BlipColor.LightGreen | shared.BlipColor.LightBlue | shared.BlipColor.LightPurple | shared.BlipColor.DarkPurple | shared.BlipColor.Cyan | shared.BlipColor.LightYellow | shared.BlipColor.Organe | shared.BlipColor.GraniteGreen | shared.BlipColor.DarkBrown | shared.BlipColor.LightGray | shared.BlipColor.LightPink | shared.BlipColor.LemonGreen | shared.BlipColor.ForestGreen | shared.BlipColor.ElectricBlue | shared.BlipColor.BrightPurple | shared.BlipColor.DarkYellow | shared.BlipColor.PinkRed | shared.BlipColor.Orange | shared.BlipColor.BrilliantRose | shared.BlipColor.Salmon | shared.BlipColor.DarkGreen | shared.BlipColor.BlizzardBlue | shared.BlipColor.OracleBlue | shared.BlipColor.Silver | shared.BlipColor.MulberryPink | shared.BlipColor.AltoGray | shared.BlipColor.JellyBeanBlue | shared.BlipColor.DarkOrange | shared.BlipColor.Mamba;
    crewIndicatorVisible: boolean;
    display: number;
    flashes: boolean;
    flashesAlternate: boolean;
    flashInterval: number;
    flashTimer: number;
    friendIndicatorVisible: boolean;
    gxtName: string;
    heading: number;
    headingIndicatorVisible: boolean;
    highDetail: boolean;
    name: string;
    number: number;
    outlineIndicatorVisible: boolean;
    priority: number;
    pulse: boolean;
    route: boolean;
    scale: number;
    secondaryColor: number | shared.RGBA;
    shortRange: boolean;
    showCone: boolean;
    shrinked: boolean;
    size: shared.Vector2;
    sprite: shared.BlipSprite;
    tickVisible: boolean;
    visible: boolean;
    blipType: shared.BlipType;
    isFriendly: boolean;
    isHiddenOnLegend: boolean;
    isMinimalOnEdge: boolean;
    useHeightIndicatorOnEdge: boolean;
    isShortHeightThreshold: boolean;
    readonly isStreamedIn: boolean;
    readonly isAttached: boolean;
    readonly isGlobal: boolean;
    /**
     * Retrieves the blip from the pool.
     *
     * @param id The id of the blip.
     * @returns Entity if it was found, otherwise null.
     *
     */
    static getByID(id: number): Blip;
    /**
     * Retrieves the blip from the pool.
     *
     * @param scriptID The script id of the blip.
     * @returns Entity if it was found, otherwise null.
     *
     */
    static getByScriptID(scriptID: number): Blip;
    /**
     * Gets the blip with the given remote id
     */
    static getByRemoteID(id: number): Blip;
    fade(opacity: number, duration: number): void;
    deleteMeta(key: string): void;
    hasMeta(key: string): boolean;
    getMeta<K extends string>(key: Exclude<K, never>): unknown;
    getMeta<K extends shared.ExtractStringKeys<ICustomBlipMeta>>(key: K): ICustomBlipMeta[K];
    setMeta<K extends string>(key: K, value: shared.InterfaceValueByKey<ICustomBlipMeta, K, unknown, void>): void;
    setMeta<K extends shared.ExtractStringKeys<ICustomBlipMeta>>(key: K, value: ICustomBlipMeta[K]): void;
    /** @deprecated See {@link ICustomBlipMeta} */
    setMeta<V extends any, K extends string = string>(key: K, value: shared.InterfaceValueByKey<ICustomBlipMeta, K, V, void>): void;
}
export declare class AreaBlip extends Blip {
    constructor(x: number, y: number, z: number, width: number, height: number);
}
export declare class RadiusBlip extends Blip {
    constructor(x: number, y: number, z: number, radius: number);
}
export declare class PointBlip extends Blip {
    constructor(x: number, y: number, z: number);
}
export declare class HandlingData {
    protected constructor();
    readonly handlingNameHash: number;
    acceleration: number;
    antiRollBarBiasFront: number;
    antiRollBarBiasRear: number;
    antiRollBarForce: number;
    brakeBiasFront: number;
    brakeBiasRear: number;
    brakeForce: number;
    camberStiffnesss: number;
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
    /**
     * Initializes a new instance of the {@link HandlingData} class that can modify handling properties for the specified handling name.
     *
     * @remarks The `handlingHash` parameter is vehicle **handling name hash**, not a model hash.
     * Can be retrieved from any vehicle instance: `vehicle.handling.handlingNameHash` {@link IVehicleHandling#handlingNameHash}
     *
     * @param handlingHash hash of the vehicle **handling name**
     */
    static getForHandlingName(handlingHash: number): HandlingData;
    static reloadVehiclePhysics(modelHash: number): boolean;
}
export declare class MapZoomData {
    constructor(zoomDataId: number);
    fZoomScale: number;
    fZoomSpeed: number;
    fScrollSpeed: number;
    vTilesX: number;
    vTilesY: number;
    static get(zoomData: string): MapZoomData;
    static resetAll(): void;
    reset(): void;
}
export declare class LocalStorage {
    protected constructor();
    /**
     * Gets the value from the specified key in the local storage.
     */
    static get(key: string): any;
    static has(key: string): boolean;
    /**
     * Deletes the specified key from the local storage.
     */
    static delete(key: string): void;
    /**
     * Deletes all keys from the local storage.
     */
    static deleteAll(): void;
    /**
     * Alias for {@link deleteAll}.
     */
    static clear(): void;
    /**
     * Saves the changes to the disk.
     */
    static save(): void;
    /**
     * Sets the specified key to the specified value in the local storage.
     */
    static set(key: string, value: any): void;
}
export declare class MemoryBuffer {
    constructor(size: number);
    readonly size: number;
    readonly address: bigint;
    byte(offset: number): number;
    double(offset: number): number;
    float(offset: number): number;
    int(offset: number): number;
    long(offset: number): bigint;
    short(offset: number): number;
    string(offset: number, length: number): string;
    ubyte(offset: number): number;
    uint(offset: number): number;
    ulong(offset: number): bigint;
    ushort(offset: number): number;
    free(): boolean;
}
export declare class Discord {
    protected constructor();
    static readonly currentUser: IDiscordUser;
    static requestOAuth2Token(appId: string): Promise<string>;
}
export declare class Voice {
    protected constructor();
    /**
     * Determines whether the microphone input is currently disabled.
     */
    static muteInput: boolean;
    /**
     * @remarks This property requires [Extended Voice API](https://docs.altv.mp/articles/permissions.html) permission from the user.
     */
    static activationLevel: number;
    /**
     * @remarks This property requires [Extended Voice API](https://docs.altv.mp/articles/permissions.html) permission from the user.
     */
    static noiseSuppressionEnabled: boolean;
    /**
     * @remarks This property requires [Extended Voice API](https://docs.altv.mp/articles/permissions.html) permission from the user.
     */
    static inputDevice: string;
    /**
     * Determines if the voice activation is enabled.
     */
    static get activityInputEnabled(): boolean;
    /**
     * Returns the keycode of the voice activation key.
     */
    static readonly activationKey: shared.KeyCode;
    static readonly voiceControlsEnabled: boolean;
    /**
     * @remarks This function requires [Extended Voice API](https://docs.altv.mp/articles/permissions.html) permission from the user.
     */
    static toggleInput(enabled: boolean): void;
    /**
     * @remarks This function requires [Extended Voice API](https://docs.altv.mp/articles/permissions.html) permission from the user.
     */
    static getAvailableInputDevices(): readonly IInputDevice[];
}
export declare class WebSocketClient extends BaseObject {
    constructor(url: string);
    autoReconnect: boolean;
    perMessageDeflate: boolean;
    /**
     * Optional heartbeat, sent every x seconds when there isn't any traffic.
     *
     * @Remarks This makes sure, that load balancers do not kill an idle connection.
     */
    pingInterval: number;
    url: string;
    readonly readyState: WebSocketReadyState;
    /**
     * Retrieves the websocketclient from the pool.
     *
     * @param id The id of the websocketclient.
     * @returns Entity if it was found, otherwise null.
     *
     */
    static getByID(id: number): WebSocketClient;
    on(eventName: 'open', listener: () => void): void;
    on(eventName: 'close', listener: (code: number, reason: string) => void): void;
    on(eventName: 'message', listener: (message: string) => void): void;
    off(eventName: string, listener: (...args: any[]) => void): void;
    /**
     * Starts the websocket connection.
     */
    start(): void;
    /**
     * Stops the websocket connection.
     */
    stop(): void;
    /**
     * Sends the specified message to the websocket server.
     *
     * @param message The message to send.
     * @returns Whether sending the message was successful.
     */
    send(message: string | ArrayBuffer | ArrayBufferView<ArrayBufferLike>): boolean;
    /**
     * Adds a sub protocol to the websocket.
     *
     * @param protocol Name of the protocol.
     */
    addSubProtocol(protocol: string): void;
    /**
     * Gets all added sub protocols.
     */
    getSubProtocols(): readonly string[];
    /**
     * Sets the specified header to the specified value.
     *
     * @param header Header name.
     * @param value Header value.
     */
    setExtraHeader(header: string, value: string): void;
    /**
     * Gets all the listeners for the specified websocket event.
     *
     * @param eventName Name of the event.
     * @returns Array of listener functions for that event.
     */
    getEventListeners(eventName: string): readonly ((...args: any[]) => void)[];
}
export declare class HttpClient extends BaseObject {
    constructor();
    /**
     * Retrieves the httpclient from the pool.
     *
     * @param id The id of the httpclient.
     * @returns Entity if it was found, otherwise null.
     *
     */
    static getByID(id: number): HttpClient;
    setExtraHeader(header: string, value: string): void;
    getExtraHeaders(): Record<string, string>;
    get(url: string): Promise<IHttpResponse>;
    head(url: string): Promise<IHttpResponse>;
    post(url: string, body: string): Promise<IHttpResponse>;
    put(url: string, body: string): Promise<IHttpResponse>;
    delete(url: string, body: string): Promise<IHttpResponse>;
    connect(url: string, body: string): Promise<IHttpResponse>;
    options(url: string, body: string): Promise<IHttpResponse>;
    trace(url: string, body: string): Promise<IHttpResponse>;
    patch(url: string, body: string): Promise<IHttpResponse>;
}
export declare class Profiler {
    protected constructor();
    static readonly heapStats: IHeapStats;
    /** Sampling interval in microseconds. Defaults to 100. */
    static samplingInterval: number;
    static readonly profilesRunning: number;
    /**
     * Starts a new profile with the specified name.
     *
     * @remarks This can throw an error if starting the profile fails.
     *
     * @param profileName Name to be used in {@link stopProfiling}. Defaults to empty string.
     */
    static startProfiling(profileName: string): void;
    /**
     * Stops the profile with the specified name.
     *
     * @param profileName Name of the profile specified in {@link startProfiling}. Defaults to empty string.
     */
    static stopProfiling(profileName: string): IProfile;
    static getMemoryProfile(): void;
    /**
     * Takes a heap snapshot.
     * For more information see https://nodejs.org/en/docs/guides/diagnostics/memory/using-heap-snapshot/
     *
     * @remarks The return value is a promise that once resolved contains the JSON string of the serialized heap.
     */
    static takeHeapSnapshot(): Promise<string>;
}
export declare class RmlElement extends BaseObject {
    readonly relativeOffset: shared.Vector2;
    readonly absoluteOffset: shared.Vector2;
    readonly baseline: number;
    readonly zIndex: number;
    readonly containingBlock: shared.Vector2;
    readonly focusedElement: RmlElement;
    readonly tagName: string;
    rmlId: string;
    readonly isOwned: boolean;
    readonly absoluteLeft: number;
    readonly absoluteTop: number;
    readonly clientLeft: number;
    readonly clientTop: number;
    readonly clientWidth: number;
    readonly clientHeight: number;
    readonly offsetLeft: number;
    readonly offsetTop: number;
    readonly offsetWidth: number;
    readonly offsetHeight: number;
    scrollLeft: number;
    scrollTop: number;
    readonly scrollWidth: number;
    readonly scrollHeight: number;
    readonly isVisible: boolean;
    readonly parent: RmlElement;
    readonly nextSibling: RmlElement;
    readonly previousSibling: RmlElement;
    readonly firstChild: RmlElement;
    readonly lastChild: RmlElement;
    readonly childCount: number;
    readonly hasChildren: boolean;
    innerRML: string;
    readonly ownerDocument: RmlDocument;
    readonly childNodes: readonly RmlElement[];
    style: Record<string, string>;
    on(eventName: string, func: (senderElement: RmlElement, ...args: any[]) => void): void;
    off(eventName: string, func: (...args: any[]) => void): void;
    getEventListeners(eventName: string): readonly ((senderElement: RmlElement, ...args: any[]) => void)[];
    appendChild(child: RmlElement): void;
    insertBefore(child: RmlElement, adjacent: RmlElement): void;
    replaceChild(newElem: RmlElement, oldElem: RmlElement): void;
    removeChild(child: RmlElement): void;
    addClass(name: string): boolean;
    removeClass(name: string): boolean;
    hasClass(name: string): boolean;
    getClassList(): readonly string[];
    addPseudoClass(name: string): boolean;
    removePseudoClass(name: string): boolean;
    hasPseudoClass(name: string): boolean;
    getPseudoClassList(): readonly string[];
    setOffset(element: RmlElement, offset: shared.IVector2, fixed: boolean): void;
    isPointWithinElement(point: shared.IVector2): boolean;
    setProperty(name: string, value: string): boolean;
    removeProperty(name: string): boolean;
    hasProperty(name: string): boolean;
    hasLocalProperty(name: string): boolean;
    getProperty(name: string): string;
    getLocalProperty(name: string): string;
    getPropertyAbsoluteValue(name: string): number;
    setAttribute(name: string, value: string): void;
    removeAttribute(name: string): boolean;
    hasAttribute(name: string): boolean;
    getAttribute(name: string): string;
    getAttributes(): Record<string, string>;
    closest(selectors: string): RmlElement;
    getElementByID(id: string): RmlElement;
    getElementsByTagName(tag: string): readonly RmlElement[];
    getElementsByClassName(className: string): readonly RmlElement[];
    querySelector(selector: string): RmlElement;
    querySelectorAll(selector: string): readonly RmlElement[];
    focus(): boolean;
    blur(): void;
    click(): void;
    scrollIntoView(alignToTop: boolean): void;
}
export declare class RmlDocument extends RmlElement {
    constructor(url: string);
    title: string;
    readonly sourceUrl: string;
    readonly isVisible: boolean;
    readonly isModal: boolean;
    readonly body: RmlElement;
    /**
     * Retrieves the rmldocument from the pool.
     *
     * @param id The id of the rmldocument.
     * @returns Entity if it was found, otherwise null.
     *
     */
    static getByID(id: number): RmlDocument;
    show(isModal?: boolean, focused?: boolean): void;
    hide(): void;
    update(): void;
    createElement(tag: string): RmlElement;
    createTextNode(text: string): RmlElement;
}
export declare class Utils extends shared.Utils {
    protected constructor();
}
export declare class FocusData {
    protected constructor();
    static readonly isFocusOverriden: boolean;
    static readonly focusOverridePos: shared.Vector3;
    static readonly focusOverrideOffset: shared.Vector3;
    static readonly focusOverrideEntity: Entity;
    static overrideFocus(pos: shared.Vector3, offset: shared.Vector3): void;
    static clearFocus(): void;
}
export declare class WeaponData {
    protected constructor();
    readonly modelHash: number;
    readonly nameHash: number;
    recoilShakeAmplitude: number;
    recoilAccuracyMax: number;
    recoilAccuracyToAllowHeadshotPlayer: number;
    recoilRecoveryRate: number;
    animReloadRate: number;
    vehicleReloadTime: number;
    lockOnRange: number;
    accuracySpread: number;
    range: number;
    damage: number;
    readonly clipSize: number;
    readonly timeBetweenShots: number;
    headshotDamageModifier: number;
    playerDamageModifier: number;
    static allHashes: readonly WeaponData[];
    /**
     * Initializes a new instance of the {@link WeaponData}.
     */
    static getForHash(weaponHash: number): WeaponData;
}
export declare class Object extends Entity {
    static readonly all: readonly Object[];
    static readonly count: number;
    static readonly streamedIn: readonly Object[];
    readonly alpha: number;
    readonly textureVariation: number;
    /** The distance at which the LOD model of the object starts being applied. */
    readonly lodDistance: number;
    static getByID(id: number): Object;
    /**
     * Gets the object with the given remote id
     */
    static getByRemoteID(id: number): Object;
}
export declare class LocalObject extends Object {
    constructor(model: string | number, pos: shared.Vector3, rot: shared.Vector3, noOffset: boolean, dynamic: boolean, useStreaming: boolean, streamingDistance: number);
    static readonly all: readonly LocalObject[];
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
    static readonly allWorld: readonly LocalObject[];
    static readonly count: number;
    pos: shared.Vector3;
    rot: shared.Vector3;
    static get model(): number;
    /** Object transparency, values are between 0 and 255. (0 being fully transparent) */
    alpha: number;
    readonly dynamic: boolean;
    /** The distance at which the LOD model of the object starts being applied. */
    lodDistance: number;
    /** Whether the object is affected by gravity. */
    hasGravity: boolean;
    readonly isStreamedIn: boolean;
    readonly useStreaming: boolean;
    readonly streamingDistance: number;
    visible: boolean;
    readonly isCollisionEnabled: boolean;
    /** Freeze the object on the position */
    positionFrozen: boolean;
    textureVariation: number;
    readonly isWorldObject: boolean;
    /**
     * Retrieves the ped from the pool.
     *
     * @param id The id of the ped.
     * @returns Entity if it was found, otherwise null.
     */
    static getByID(id: number): LocalObject;
    resetAlpha(): void;
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
    attachToEntity(entity: Entity, boneIndex: number, offset: shared.Vector3, rot: shared.Vector3, useSoftPinning: boolean, collision: boolean, fixedRot: boolean): void;
    /**
     * Detaches the object from the current attached entity.
     *
     * @param dynamic Set to true to keep velocity after dettaching. Default value is false.
     */
    detach(dynamic: boolean): void;
    toggleCollision(toggle: boolean, keepPhysics: boolean): void;
    /** Places the object properly on the ground. */
    placeOnGroundProperly(): void;
    activatePhysics(): void;
    /** Waits asynchronously until the object spawns. */
    waitForSpawn(timeout?: number): Promise<void>;
}
export declare class WeaponObject extends LocalObject {
    constructor(weaponHash: string | number, pos: shared.Vector3, rot: shared.Vector3, modelHash: string | number, numAmmo: number, createDefaultComponents: boolean, scale: number, useStreaming: boolean, streamingDistance: number);
    static readonly all: readonly WeaponObject[];
    static readonly count: number;
    readonly isWeaponObject: boolean;
    tintIndex: number;
    setComponentTintIndex(componentId: number, tintIndex: number): void;
    getComponentTintIndex(componentId: number): number;
    giveComponent(componentType: number): void;
    removeComponent(componentType: number): void;
}
export declare class Ped extends Entity {
    static readonly all: readonly Ped[];
    static readonly streamedIn: readonly Ped[];
    static readonly count: number;
    /**
     * Currently equipped weapon.
     */
    readonly currentWeapon: number;
    /**
     * Current health of the ped.
     */
    readonly health: number;
    /**
     * Current max health of the ped.
     */
    readonly maxHealth: number;
    /**
     * Current armour.
     */
    readonly armour: number;
    /**
     * Retrieves the ped from the pool.
     *
     * @param id The id of the ped.
     * @returns Entity if it was found, otherwise null.
     */
    static getByID(id: number): Ped;
    /**
     * Retrieves the ped from the pool.
     *
     * @param scriptID The script id of the entity.
     * @returns Entity if it was found, otherwise null.
     */
    static getByScriptID(scriptID: number): Ped;
    /**
     * Gets the ped with the given remote id
     */
    static getByRemoteID(id: number): Ped;
    setMeta<K extends string>(key: K, value: shared.InterfaceValueByKey<ICustomPedMeta, K, unknown, void>): void;
    setMeta<K extends shared.ExtractStringKeys<ICustomPedMeta>>(key: K, value: ICustomPedMeta[K]): void;
    deleteMeta(key: string): void;
    getMeta<K extends string>(key: Exclude<K, never>): unknown;
    hasMeta(key: string): boolean;
    getSyncedMeta<K extends string>(key: Exclude<K, never>): unknown;
    hasSyncedMeta(key: string): boolean;
    getStreamSyncedMeta<K extends string>(key: Exclude<K, never>): unknown;
    hasStreamSyncedMeta(key: string): boolean;
}
export declare class AudioFilter extends BaseObject {
    constructor(filterName: string);
    get audioCategory(): number;
    set audioCategory(value: number);
    readonly hash: number;
    addRotateEffect(fRate: number, priority: number): number;
    addVolumeEffect(fVolume: number, priority: number, channel?: number): number;
    addPeakeqEffect(lBand: number, fBandwidth: number, fQ: number, fCenter: number, fGain: number, priority: number): number;
    addDampEffect(fTarget: number, fQuiet: number, fRate: number, fGain: number, fDelay: number, priority: number): number;
    addAutowahEffect(fDryMix: number, fWetMix: number, fFeedback: number, fRate: number, fRange: number, fFreq: number, priority: number): number;
    addPhaserEffect(fDryMix: number, fWetMix: number, fFeedback: number, fRate: number, fRange: number, fFreq: number, priority: number): number;
    addChorusEffect(fDryMix: number, fWetMix: number, fFeedback: number, fMinSweep: number, fMaxSweep: number, fRate: number, priority: number): number;
    addDistortionEffect(fDrive: number, fDryMix: number, fWetMix: number, fFeedback: number, fVolume: number, priority: number): number;
    addCompressor2Effect(fGain: number, fThreshold: number, fRatio: number, fAttack: number, fRelease: number, priority: number): number;
    addBqfEffect(lFilter: number, fCenter: number, fGain: number, fBandwidth: number, fQ: number, fS: number, priority: number): number;
    addEcho4Effect(fDryMix: number, fWetMix: number, fFeedback: number, fDelay: number, priority: number): number;
    addPitchshiftEffect(fPitchShift: number, fSemitones: number, lFFTsize: number, lOsamp: number, priority: number): number;
    addFreeverbEffect(fDryMix: number, fWetMix: number, fRoomSize: number, fDamp: number, fWidth: number, lMode: number, priority: number): number;
    removeEffect(hfxHandler: number): boolean;
}
export declare class AudioCategory {
    protected constructor();
    readonly name: string;
    volume: number;
    distanceRolloffScale: number;
    plateauRolloffScale: number;
    occlusionDamping: number;
    environmentalFilterDamping: number;
    sourceReverbDamping: number;
    distanceReverbDamping: number;
    interiorReverbDamping: number;
    environmentalLoudness: number;
    underwaterWetLevel: number;
    stonedWetLevel: number;
    pitch: number;
    lowPassFilterCutoff: number;
    highPassFilterCutoff: number;
    /**
     * Initializes a new instance of the {@link AudioCategory}.
     */
    static getForName(categoryName: string): AudioCategory;
}
export declare class Marker extends WorldObject {
    constructor(type: shared.MarkerType, position: shared.Vector3, color: shared.RGBA);
    constructor(type: shared.MarkerType, position: shared.Vector3, color: shared.RGBA, useStreaming: true, streamingDistance: number);
    static readonly all: readonly Marker[];
    visible: boolean;
    markerType: shared.MarkerType;
    color: shared.RGBA;
    scale: shared.Vector3;
    rot: shared.Vector3;
    dir: shared.Vector3;
    readonly isGlobal: boolean;
    readonly target: Player;
    readonly streamingDistance: number;
    readonly isStreamedIn: boolean;
    faceCamera: boolean;
    rotate: boolean;
    bobUpAndDown: boolean;
    /**
     * Retrieves the marker from the pool.
     *
     * @param id The id of the marker.
     * @returns Entity if it was found, otherwise null.
     */
    static getByID(id: number): Marker;
}
export declare class Colshape extends WorldObject {
    static readonly all: readonly Colshape[];
    readonly colshapeType: shared.ColShapeType;
    /**
     * Whether this colshape should only trigger its enter/leave events for players or all entities.
     */
    playersOnly: boolean;
    readonly radius: number;
    readonly height: number;
    readonly min: shared.Vector2 | shared.Vector3;
    readonly max: shared.Vector2 | shared.Vector3;
    readonly minZ: number;
    readonly maxZ: number;
    readonly points: readonly shared.Vector2[];
    /**
     * Retrieves the colshape from the pool.
     *
     * @param id The id of the colshape.
     * @returns Entity if it was found, otherwise null.
     */
    static getByID(id: number): Colshape;
    isEntityIn(entity: Entity): boolean;
    isPointIn(position: shared.IVector3): boolean;
    deleteMeta(key: string): void;
    hasMeta(key: string): boolean;
    getMeta<K extends string>(key: Exclude<K, never>): unknown;
    getMeta<K extends shared.ExtractStringKeys<ICustomColshapeMeta>>(key: K): ICustomColshapeMeta[K];
    setMeta<K extends string>(key: K, value: shared.InterfaceValueByKey<ICustomColshapeMeta, K, unknown, void>): void;
    setMeta<K extends shared.ExtractStringKeys<ICustomColshapeMeta>>(key: K, value: ICustomColshapeMeta[K]): void;
    /** @deprecated See {@link ICustomColshapeMeta} */
    setMeta<V extends any, K extends string = string>(key: K, value: shared.InterfaceValueByKey<ICustomColshapeMeta, K, V, void>): void;
}
export declare class ColshapeCylinder extends Colshape {
    constructor(x: number, y: number, z: number, radius: number, height: number);
}
export declare class ColshapeSphere extends Colshape {
    constructor(x: number, y: number, z: number, radius: number);
}
export declare class ColshapeCircle extends Colshape {
    constructor(x: number, y: number, radius: number);
}
export declare class ColshapeCuboid extends Colshape {
    constructor(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number);
}
export declare class ColshapeRectangle extends Colshape {
    constructor(x1: number, y1: number, x2: number, y2: number);
}
export declare class ColshapePolygon extends Colshape {
    constructor(minZ: number, maxZ: number, points: shared.IVector2[]);
}
export declare class TextLabel extends WorldObject {
    constructor(text: string, fontName: string, fontSize: number, scale: number, pos: shared.IVector3, rot: shared.IVector3, color: shared.RGBA, outlineWidth: number, outlineColor: shared.RGBA, useStreaming: boolean, streamingDistance: number);
    constructor(text: string, fontName: string, fontSize: number, scale: number, pos: shared.IVector3, rot: shared.IVector3, color: shared.RGBA, outlineWidth: number, outlineColor: shared.RGBA, useStreaming: boolean, streamingDistance: number);
    static readonly all: readonly TextLabel[];
    visible: boolean;
    color: shared.RGBA;
    outlineColor: shared.RGBA;
    outlineWidth: number;
    font: string;
    fontSize: number;
    scale: number;
    align: TextLabelAlignment;
    text: string;
    rot: shared.Vector3;
    readonly isGlobal: boolean;
    readonly target: Player;
    readonly isStreamedIn: boolean;
    readonly streamingDistance: number;
    faceCamera: boolean;
    /**
     * Retrieves the marker from the pool.
     *
     * @param id The id of the marker.
     * @returns Entity if it was found, otherwise null.
     */
    static getByID(id: number): TextLabel;
}
export declare class LocalVehicle extends Vehicle {
    constructor(model: string | number, dimension: number, pos: shared.IVector3, rot: shared.IVector3);
    constructor(model: string | number, dimension: number, pos: shared.IVector3, rot: shared.IVector3, useStreaming: true, streamingDistance: number);
    static get model(): number;
    rot: shared.Vector3;
    readonly streamingDistance: number;
    visible: boolean;
    readonly scriptID: number;
    readonly isStreamedIn: boolean;
    /**
     * Vehicle wheels speed.
     */
    readonly speed: number;
    /**
     * Vehicle gear.
     *
     * @returns A number indicating actual gear.
     */
    gear: number;
    /**
     * Vehicle max gear.
     */
    readonly maxGear: number;
    /**
     * Vehicle RPM.
     *
     * @returns Normalised value on a scale of [0, 1].
     */
    rpm: number;
    /**
     * Vehicle wheels count.
     */
    readonly wheelsCount: number;
    /**
     * Vehicle speed vector.
     */
    readonly speedVector: shared.Vector3;
    /**
     * Vehicle engine state.
     */
    readonly engineOn: boolean;
    /**
     * Vehicle lock state.
     */
    readonly lockState: shared.VehicleLockState;
    /**
     * The vehicle's petrol tank health.
     */
    readonly petrolTankHealth: number;
    /**
     * Vehicle indicator lights.
     */
    indicatorLights: VehicleIndicatorLights;
    /**
     * Vehicle seat count.
     */
    readonly seatCount: number;
    /**
     * The vehicle's engine temperature.
     */
    engineTemperature: number;
    /**
     * The vehicle's fuel level.
     */
    fuelLevel: number;
    /**
     * The vehicle's oil level.
     */
    oilLevel: number;
    suspensionHeight: number;
    /**
     * Retrieves the localvehicle from the pool.
     *
     * @param id The id of the entity.
     * @returns Entity if it was found, otherwise null.
     */
    static getByID(id: number): LocalVehicle;
    /**
     * Retrieves the localvehicle from the pool.
     *
     * @param scriptID The script id of the entity.
     * @returns Entity if it was found, otherwise null.
     */
    static getByScriptID(scriptID: number): LocalVehicle;
    /** Waits asynchronously until the vehicle spawns. */
    waitForSpawn(timeout?: number): Promise<void>;
    /**
     * Gets the camber angle of the specified wheel.
     *
     * @param wheelIndex The index of the wheel.
     */
    getWheelCamber(wheelIndex: number): number;
    /**
     * Sets the camber angle of the specified wheel.
     *
     * @remarks A positive camber angle means that the top of the wheel is farther out than the bottom. A negative camber angle means that the bottom of the wheel is farther out than the top.
     *
     * @param wheelIndex The index of the wheel.
     * @param camber The value the of camber angle.
     */
    setWheelCamber(wheelIndex: number, camber: number): void;
    /**
     * Gets the track width of the specified wheel.
     *
     * @param wheelIndex The index of the wheel.
     */
    getWheelTrackWidth(wheelIndex: number): number;
    /**
     * Sets the track width of the specified wheel.
     *
     * @param wheelIndex The index of the wheel.
     * @param width The value of the track width.
     */
    setWheelTrackWidth(wheelIndex: number, width: number): void;
    /**
     * Gets the height of the specified wheel.
     *
     * @param wheelIndex The index of the wheel.
     */
    getWheelHeight(wheelIndex: number): number;
    /**
     * Sets the height of the specified wheel.
     *
     * @param wheelIndex The index of the wheel.
     * @param height The value of the wheel height.
     */
    setWheelHeight(wheelIndex: number, height: number): void;
    /**
     * Gets the tyre radius of the specified wheel.
     *
     * @param wheelIndex The index of the wheel.
     */
    getWheelTyreRadius(wheelIndex: number): number;
    /**
     * @remarks Applies only physical effects to the wheel.
     *
     * @param wheelIndex The index of the wheel.
     * @param radius The value of the tyre radius.
     */
    setWheelTyreRadius(wheelIndex: number, radius: number): void;
    /**
     * Gets the rim radius of the specified wheel.
     *
     * @param wheelIndex The index of the wheel.
     */
    getWheelRimRadius(wheelIndex: number): number;
    /**
     * @remarks Does not show any visible effect.
     *
     * @param wheelIndex The index of the wheel.
     * @param radius The index of the rim radius.
     */
    setWheelRimRadius(wheelIndex: number, radius: number): void;
    /**
     * Gets the tyre width the specified wheel.
     *
     * @param wheelIndex The index of the wheel.
     */
    getWheelTyreWidth(wheelIndex: number): number;
    /**
     * @remarks Does not show any visible effect.
     *
     * @param wheelIndex The index of the wheel.
     * @param width The value of the tyre width.
     */
    setWheelTyreWidth(wheelIndex: number, width: number): void;
    getWheelSurfaceMaterial(wheel: number): number;
}
export declare class LocalPed extends Ped {
    constructor(model: string | number, dimension: number, pos: shared.IVector3, rot: shared.IVector3);
    constructor(model: string | number, dimension: number, pos: shared.IVector3, rot: shared.IVector3, useStreaming: true, streamingDistance: number);
    static get model(): number;
    rot: shared.Vector3;
    readonly streamingDistance: number;
    visible: boolean;
    readonly scriptID: number;
    readonly isStreamedIn: boolean;
    /**
     * Retrieves the localPed from the pool.
     *
     * @param id The id of the entity.
     * @returns Entity if it was found, otherwise null.
     */
    static getByID(id: number): LocalPed;
    /**
     * Retrieves the localPed from the pool.
     *
     * @param scriptID The script id of the entity.
     * @returns Entity if it was found, otherwise null.
     */
    static getByScriptID(scriptID: number): LocalPed;
    /** Waits asynchronously until the ped spawns. */
    waitForSpawn(timeout?: number): Promise<void>;
}
export declare class Font extends BaseObject {
    protected constructor();
    static register(path: string): Font;
}
export declare class Interior {
    protected constructor();
    readonly id: number;
    readonly pos: shared.Vector3;
    readonly rot: shared.Vector3;
    readonly roomCount: number;
    readonly portalCount: number;
    readonly entitiesExtents: IAABB;
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
    static getForInteriorID(id: number): Interior;
    /**
     * Get room by it's hash. Throws if room hash is invalid.
     */
    getRoomByHash(hash: number): InteriorRoom;
    /**
     * Get room by it's index: from 0 to {@link roomCount}, for example if `roomCount = 2`, room indexes will be 0 and 1.
     * Throws if room index is invalid.
     */
    getRoomByIndex(index: number): InteriorRoom;
    /**
     * Get portal by it's index: from 0 to {@link portalCount}, for example if `portalCount = 2`, portal indexes will be 0 and 1.
     * Throws if portal index is invalid.
     */
    getPortalByIndex(index: number): InteriorPortal;
}
export declare class InteriorRoom {
    protected constructor();
    readonly index: number;
    readonly name: string;
    readonly nameHash: number;
    flag: number;
    timecycle: number;
    extents: IAABB;
}
export declare class InteriorPortal {
    protected constructor();
    readonly index: number;
    readonly cornerCount: number;
    readonly entityCount: number;
    roomFrom: number;
    roomTo: number;
    flag: number;
    getCornerPos(cornerIndex: number): shared.Vector3;
    setCornerPos(cornerIndex: number, value: shared.Vector3): void;
    getEntityArchetype(entityIndex: number): number;
    getEntityFlag(entityIndex: number): number;
    setEntityFlag(entityIndex: number, flag: number): void;
    getEntityPos(entityIndex: number): shared.Vector3;
    getEntityRot(entityIndex: number): shared.Vector3;
}
export declare namespace Utils {
    function requestModel(model: string | number, timeout?: number): Promise<void>;
    function requestAnimDict(animDict: string, timeout?: number): Promise<void>;
    function requestAnimSet(animSet: string, timeout?: number): Promise<void>;
    function requestClipSet(clipSet: string, timeout?: number): Promise<void>;
    function requestCutscene(cutsceneName: string, flags: string | number, timeout?: number): Promise<void>;
    function drawText2dThisFrame(text: string, pos2d: shared.IVector2, font: GameFont, scale: number, color: shared.RGBA, outline: boolean, dropShadow: boolean, textAlign: TextAlign): void;
    function drawText2d(text: string, pos2d: shared.IVector2, font: GameFont, scale: number, color: shared.RGBA, outline: boolean, dropShadow: boolean, textAlign: TextAlign): shared.Utils.EveryTick;
    function drawText3dThisFrame(text: string, pos3d: shared.IVector3, font: GameFont, scale: number, color: shared.RGBA, outline: boolean, dropShadow: boolean, textAlign: TextAlign): void;
    function drawText3d(text: string, pos3d: shared.IVector3, font: GameFont, scale: number, color: shared.RGBA, outline: boolean, dropShadow: boolean, textAlign: TextAlign): shared.Utils.EveryTick;
    function loadMapArea(pos: shared.IVector3, radius: number, timeout?: number): Promise<void>;
    function registerPedheadshotBase64(ped: number | Player): Promise<string>;
    function registerPedheadshot3Base64(ped: number | Player): Promise<string>;
    function registerPedheadshotTransparentBase64(ped: number | Player): Promise<string>;
    function getClosestPlayer(options: {
        pos?: shared.IVector3;
        range?: number;
    }): Player;
    function getClosestVehicle(options: {
        pos?: shared.IVector3;
        range?: number;
    }): Vehicle;
    function getClosestObject(options: {
        pos?: shared.IVector3;
        range?: number;
    }): Object;
    function getClosestWorldObject(options: {
        pos?: shared.IVector3;
        range?: number;
    }): Object;
    function getClosestVirtualEntity(options: {
        pos?: shared.IVector3;
        range?: number;
    }): VirtualEntity;
    class Keybind {
        constructor(keyCode: shared.KeyCode | shared.KeyCode[], callback: () => void, eventType: 'keyup' | 'keydown');
        destroy(): void;
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
    class Marker {
        constructor(pos: shared.IVector3, options: IMarkerOptions);
        type: number;
        pos: shared.IVector3;
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
        destroy(): void;
    }
}
declare const _default: {
    WeaponObject: typeof WeaponObject;
    Ped: typeof Ped;
    AudioFilter: typeof AudioFilter;
    AudioCategory: typeof AudioCategory;
    Marker: typeof Marker;
    Colshape: typeof Colshape;
    ColshapeCylinder: typeof ColshapeCylinder;
    ColshapeSphere: typeof ColshapeSphere;
    ColshapeCircle: typeof ColshapeCircle;
    ColshapeCuboid: typeof ColshapeCuboid;
    ColshapeRectangle: typeof ColshapeRectangle;
    ColshapePolygon: typeof ColshapePolygon;
    TextLabel: typeof TextLabel;
    LocalVehicle: typeof LocalVehicle;
    LocalPed: typeof LocalPed;
    Font: typeof Font;
    Interior: typeof Interior;
    InteriorRoom: typeof InteriorRoom;
    InteriorPortal: typeof InteriorPortal;
    Utils: typeof Utils;
};
export default _default;
