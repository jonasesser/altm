import * as shared from 'alt-shared';
import { BaseObject, Colshape, Entity, Player, Vehicle, WorldObject } from '../stubs/index.stub';

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

export enum PedConfigFlags {
    CreatedByFactory = 0,
    CanBeShotInVehicle = 1,
    NoCriticalHits = 2,
    DrownsInWater = 3,
    DrownsInSinkingVehicle = 4,
    DiesInstantlyWhenSwimming = 5,
    HasBulletProofVest = 6,
    UpperBodyDamageAnimsOnly = 7,
    NeverFallOffSkis = 8,
    NeverEverTargetThisPed = 9,
    ThisPedIsATargetPriority = 10,
    TargettableWithNoLos = 11,
    DoesntListenToPlayerGroupCommands = 12,
    NeverLeavesGroup = 13,
    DoesntDropWeaponsWhenDead = 14,
    SetDelayedWeaponAsCurrent = 15,
    KeepTasksAfterCleanUp = 16,
    BlockNonTemporaryEvents = 17,
    HasAScriptBrain = 18,
    WaitingForScriptBrainToLoad = 19,
    AllowMedicsToReviveMe = 20,
    MoneyHasBeenGivenByScript = 21,
    NotAllowedToCrouch = 22,
    DeathPickupsPersist = 23,
    IgnoreSeenMelee = 24,
    ForceDieIfInjured = 25,
    DontDragMeOutCar = 26,
    StayInCarOnJack = 27,
    ForceDieInCar = 28,
    GetOutUndriveableVehicle = 29,
    WillRemainOnBoatAfterMissionEnds = 30,
    DontStoreAsPersistent = 31,
    WillFlyThroughWindscreen = 32,
    DieWhenRagdoll = 33,
    HasHelmet = 34,
    UseHelmet = 35,
    DontTakeOffHelmet = 36,
    HideInCutscene = 37,
    PedIsEnemyToPlayer = 38,
    DisableEvasiveDives = 39,
    PedGeneratesDeadBodyEvents = 40,
    DontAttackPlayerWithoutWantedLevel = 41,
    DontInfluenceWantedLevel = 42,
    DisablePlayerLockon = 43,
    DisableLockonToRandomPeds = 44,
    AllowLockonToFriendlyPlayers = 45,
    _0xDB115BFA = 46,
    PedBeingDeleted = 47,
    BlockWeaponSwitching = 48,
    BlockGroupPedAimedAtResponse = 49,
    WillFollowLeaderAnyMeans = 50,
    BlippedByScript = 51,
    DrawRadarVisualField = 52,
    StopWeaponFiringOnImpact = 53,
    DissableAutoFallOffTests = 54,
    SteerAroundDeadBodies = 55,
    ConstrainToNavMesh = 56,
    SyncingAnimatedProps = 57,
    IsFiring = 58,
    WasFiring = 59,
    IsStanding = 60,
    WasStanding = 61,
    InVehicle = 62,
    OnMount = 63,
    AttachedToVehicle = 64,
    IsSwimming = 65,
    WasSwimming = 66,
    IsSkiing = 67,
    IsSitting = 68,
    KilledByStealth = 69,
    KilledByTakedown = 70,
    Knockedout = 71,
    ClearRadarBlipOnDeath = 72,
    JustGotOffTrain = 73,
    JustGotOnTrain = 74,
    UsingCoverPoint = 75,
    IsInTheAir = 76,
    KnockedUpIntoAir = 77,
    IsAimingGun = 78,
    HasJustLeftCar = 79,
    TargetWhenInjuredAllowed = 80,
    CurrLeftFootCollNM = 81,
    PrevLeftFootCollNM = 82,
    CurrRightFootCollNM = 83,
    PrevRightFootCollNM = 84,
    HasBeenBumpedInCar = 85,
    InWaterTaskQuitToClimbLadder = 86,
    NMTwoHandedWeaponBothHandsConstrained = 87,
    CreatedBloodPoolTimer = 88,
    DontActivateRagdollFromAnyPedImpact = 89,
    GroupPedFailedToEnterCover = 90,
    AlreadyChattedOnPhone = 91,
    AlreadyReactedToPedOnRoof = 92,
    ForcePedLoadCover = 93,
    BlockCoweringInCover = 94,
    BlockPeekingInCover = 95,
    JustLeftCarNotCheckedForDoors = 96,
    VaultFromCover = 97,
    AutoConversationLookAts = 98,
    UsingCrouchedPedCapsule = 99,
    HasDeadPedBeenReported = 100,
    ForcedAim = 101,
    SteersAroundPeds = 102,
    SteersAroundObjects = 103,
    OpenDoorArmIK = 104,
    ForceReload = 105,
    DontActivateRagdollFromVehicleImpact = 106,
    DontActivateRagdollFromBulletImpact = 107,
    DontActivateRagdollFromExplosions = 108,
    DontActivateRagdollFromFire = 109,
    DontActivateRagdollFromElectrocution = 110,
    IsBeingDraggedToSafety = 111,
    HasBeenDraggedToSafety = 112,
    KeepWeaponHolsteredUnlessFired = 113,
    ForceScriptControlledKnockout = 114,
    FallOutOfVehicleWhenKilled = 115,
    GetOutBurningVehicle = 116,
    BumpedByPlayer = 117,
    RunFromFiresAndExplosions = 118,
    TreatAsPlayerDuringTargeting = 119,
    IsHandCuffed = 120,
    IsAnkleCuffed = 121,
    DisableMelee = 122,
    DisableUnarmedDrivebys = 123,
    JustGetsPulledOutWhenElectrocuted = 124,
    UNUSED_REPLACE_ME = 125,
    WillNotHotwireLawEnforcementVehicle = 126,
    WillCommandeerRatherThanJack = 127,
    CanBeAgitated = 128,
    ForcePedToFaceLeftInCover = 129,
    ForcePedToFaceRightInCover = 130,
    BlockPedFromTurningInCover = 131,
    KeepRelationshipGroupAfterCleanUp = 132,
    ForcePedToBeDragged = 133,
    PreventPedFromReactingToBeingJacked = 134,
    IsScuba = 135,
    WillArrestRatherThanJack = 136,
    RemoveDeadExtraFarAway = 137,
    RidingTrain = 138,
    ArrestResult = 139,
    CanAttackFriendly = 140,
    WillJackAnyPlayer = 141,
    BumpedByPlayerVehicle = 142,
    DodgedPlayerVehicle = 143,
    WillJackWantedPlayersRatherThanStealCar = 144,
    NoCopWantedAggro = 145,
    DisableLadderClimbing = 146,
    StairsDetected = 147,
    SlopeDetected = 148,
    HelmetHasBeenShot = 149,
    CowerInsteadOfFlee = 150,
    CanActivateRagdollWhenVehicleUpsideDown = 151,
    AlwaysRespondToCriesForHelp = 152,
    DisableBloodPoolCreation = 153,
    ShouldFixIfNoCollision = 154,
    CanPerformArrest = 155,
    CanPerformUncuff = 156,
    CanBeArrested = 157,
    MoverConstrictedByOpposingCollisions = 158,
    PlayerPreferFrontSeatMP = 159,
    DontActivateRagdollFromImpactObject = 160,
    DontActivateRagdollFromMelee = 161,
    DontActivateRagdollFromWaterJet = 162,
    DontActivateRagdollFromDrowning = 163,
    DontActivateRagdollFromFalling = 164,
    DontActivateRagdollFromRubberBullet = 165,
    IsInjured = 166,
    DontEnterVehiclesInPlayersGroup = 167,
    SwimmingTasksRunning = 168,
    PreventAllMeleeTaunts = 169,
    ForceDirectEntry = 170,
    AlwaysSeeApproachingVehicles = 171,
    CanDiveAwayFromApproachingVehicles = 172,
    AllowPlayerToInterruptVehicleEntryExit = 173,
    OnlyAttackLawIfPlayerIsWanted = 174,
    PlayerInContactWithKinematicPed = 175,
    PlayerInContactWithSomethingOtherThanKinematicPed = 176,
    PedsJackingMeDontGetIn = 177,
    AdditionalRappellingPed = 178,
    PedIgnoresAnimInterruptEvents = 179,
    IsInCustody = 180,
    ForceStandardBumpReactionThresholds = 181,
    LawWillOnlyAttackIfPlayerIsWanted = 182,
    IsAgitated = 183,
    PreventAutoShuffleToDriversSeat = 184,
    UseKinematicModeWhenStationary = 185,
    EnableWeaponBlocking = 186,
    HasHurtStarted = 187,
    DisableHurt = 188,
    PlayerIsWeird = 189,
    PedHadPhoneConversation = 190,
    BeganCrossingRoad = 191,
    WarpIntoLeadersVehicle = 192,
    DoNothingWhenOnFootByDefault = 193,
    UsingScenario = 194,
    VisibleOnScreen = 195,
    DontCollideWithKinematic = 196,
    ActivateOnSwitchFromLowPhysicsLod = 197,
    DontActivateRagdollOnPedCollisionWhenDead = 198,
    DontActivateRagdollOnVehicleCollisionWhenDead = 199,
    HasBeenInArmedCombat = 200,
    UseDiminishingAmmoRate = 201,
    Avoidance_Ignore_All = 202,
    Avoidance_Ignored_by_All = 203,
    Avoidance_Ignore_Group1 = 204,
    Avoidance_Member_of_Group1 = 205,
    ForcedToUseSpecificGroupSeatIndex = 206,
    LowPhysicsLodMayPlaceOnNavMesh = 207,
    DisableExplosionReactions = 208,
    DodgedPlayer = 209,
    WaitingForPlayerControlInterrupt = 210,
    ForcedToStayInCover = 211,
    GeneratesSoundEvents = 212,
    ListensToSoundEvents = 213,
    AllowToBeTargetedInAVehicle = 214,
    WaitForDirectEntryPointToBeFreeWhenExiting = 215,
    OnlyRequireOnePressToExitVehicle = 216,
    ForceExitToSkyDive = 217,
    SteersAroundVehicles = 218,
    AllowPedInVehiclesOverrideTaskFlags = 219,
    DontEnterLeadersVehicle = 220,
    DisableExitToSkyDive = 221,
    ScriptHasDisabledCollision = 222,
    UseAmbientModelScaling = 223,
    DontWatchFirstOnNextHurryAway = 224,
    DisablePotentialToBeWalkedIntoResponse = 225,
    DisablePedAvoidance = 226,
    ForceRagdollUponDeath = 227,
    CanLosePropsOnDamage = 228,
    DisablePanicInVehicle = 229,
    AllowedToDetachTrailer = 230,
    HasShotBeenReactedToFromFront = 231,
    HasShotBeenReactedToFromBack = 232,
    HasShotBeenReactedToFromLeft = 233,
    HasShotBeenReactedToFromRight = 234,
    AllowBlockDeadPedRagdollActivation = 235,
    IsHoldingProp = 236,
    BlocksPathingWhenDead = 237,
    ForcePlayNormalScenarioExitOnNextScriptCommand = 238,
    ForcePlayImmediateScenarioExitOnNextScriptCommand = 239,
    ForceSkinCharacterCloth = 240,
    LeaveEngineOnWhenExitingVehicles = 241,
    PhoneDisableTextingAnimations = 242,
    PhoneDisableTalkingAnimations = 243,
    PhoneDisableCameraAnimations = 244,
    DisableBlindFiringInShotReactions = 245,
    AllowNearbyCoverUsage = 246,
    InStrafeTransition = 247,
    CanPlayInCarIdles = 248,
    CanAttackNonWantedPlayerAsLaw = 249,
    WillTakeDamageWhenVehicleCrashes = 250,
    AICanDrivePlayerAsRearPassenger = 251,
    PlayerCanJackFriendlyPlayers = 252,
    OnStairs = 253,
    SimulatingAiming = 254,
    AIDriverAllowFriendlyPassengerSeatEntry = 255,
    ParentCarIsBeingRemoved = 256,
    AllowMissionPedToUseInjuredMovement = 257,
    CanLoseHelmetOnDamage = 258,
    NeverDoScenarioExitProbeChecks = 259,
    SuppressLowLODRagdollSwitchWhenCorpseSettles = 260,
    PreventUsingLowerPrioritySeats = 261,
    JustLeftVehicleNeedsReset = 262,
    TeleportIfCantReachPlayer = 263,
    PedsInVehiclePositionNeedsReset = 264,
    PedsFullyInSeat = 265,
    AllowPlayerLockOnIfFriendly = 266,
    UseCameraHeadingForDesiredDirectionLockOnTest = 267,
    TeleportToLeaderVehicle = 268,
    Avoidance_Ignore_WeirdPedBuffer = 269,
    OnStairSlope = 270,
    HasPlayedNMGetup = 271,
    DontBlipCop = 272,
    SpawnedAtExtendedRangeScenario = 273,
    WalkAlongsideLeaderWhenClose = 274,
    KillWhenTrapped = 275,
    EdgeDetected = 276,
    AlwaysWakeUpPhysicsOfIntersectedPeds = 277,
    EquippedAmbientLoadOutWeapon = 278,
    AvoidTearGas = 279,
    StoppedSpeechUponFreezing = 280,
    DisableGoToWritheWhenInjured = 281,
    OnlyUseForcedSeatWhenEnteringHeliInGroup = 282,
    ThrownFromVehicleDueToExhaustion = 283,
    UpdateEnclosedSearchRegion = 284,
    DisableWeirdPedEvents = 285,
    ShouldChargeNow = 286,
    RagdollingOnBoat = 287,
    HasBrandishedWeapon = 288,
    AllowMinorReactionsAsMissionPed = 289,
    BlockDeadBodyShockingEventsWhenDead = 290,
    PedHasBeenSeen = 291,
    PedIsInReusePool = 292,
    PedWasReused = 293,
    DisableShockingEvents = 294,
    MovedUsingLowLodPhysicsSinceLastActive = 295,
    NeverReactToPedOnRoof = 296,
    ForcePlayFleeScenarioExitOnNextScriptCommand = 297,
    JustBumpedIntoVehicle = 298,
    DisableShockingDrivingOnPavementEvents = 299,
    ShouldThrowSmokeNow = 300,
    DisablePedConstraints = 301,
    ForceInitialPeekInCover = 302,
    CreatedByDispatch = 303,
    PointGunLeftHandSupporting = 304,
    DisableJumpingFromVehiclesAfterLeader = 305,
    DontActivateRagdollFromPlayerPedImpact = 306,
    DontActivateRagdollFromAiRagdollImpact = 307,
    DontActivateRagdollFromPlayerRagdollImpact = 308,
    DisableQuadrupedSpring = 309,
    IsInCluster = 310,
    ShoutToGroupOnPlayerMelee = 311,
    IgnoredByAutoOpenDoors = 312,
    PreferInjuredGetup = 313,
    ForceIgnoreMeleeActiveCombatant = 314,
    CheckLoSForSoundEvents = 315,
    JackedAbandonedCar = 316,
    CanSayFollowedByPlayerAudio = 317,
    ActivateRagdollFromMinorPlayerContact = 318,
    HasPortablePickupAttached = 319,
    ForcePoseCharacterCloth = 320,
    HasClothCollisionBounds = 321,
    HasHighHeels = 322,
    TreatAsAmbientPedForDriverLockOn = 323,
    DontBehaveLikeLaw = 324,
    SpawnedAtScenario = 325,
    DisablePoliceInvestigatingBody = 326,
    DisableWritheShootFromGround = 327,
    LowerPriorityOfWarpSeats = 328,
    DisableTalkTo = 329,
    DontBlip = 330,
    IsSwitchingWeapon = 331,
    IgnoreLegIkRestrictions = 332,
    ScriptForceNoTimesliceIntelligenceUpdate = 333,
    JackedOutOfMyVehicle = 334,
    WentIntoCombatAfterBeingJacked = 335,
    DontActivateRagdollForVehicleGrab = 336,
    ForcePackageCharacterCloth = 337,
    DontRemoveWithValidOrder = 338,
    AllowTaskDoNothingTimeslicing = 339,
    ForcedToStayInCoverDueToPlayerSwitch = 340,
    ForceProneCharacterCloth = 341,
    NotAllowedToJackAnyPlayers = 342,
    InToStrafeTransition = 343,
    KilledByStandardMelee = 344,
    AlwaysLeaveTrainUponArrival = 345,
    ForcePlayDirectedNormalScenarioExitOnNextScriptCommand = 346,
    OnlyWritheFromWeaponDamage = 347,
    UseSloMoBloodVfx = 348,
    EquipJetpack = 349,
    PreventDraggedOutOfCarThreatResponse = 350,
    ScriptHasCompletelyDisabledCollision = 351,
    NeverDoScenarioNavChecks = 352,
    ForceSynchronousScenarioExitChecking = 353,
    ThrowingGrenadeWhileAiming = 354,
    HeadbobToRadioEnabled = 355,
    ForceDeepSurfaceCheck = 356,
    DisableDeepSurfaceAnims = 357,
    DontBlipNotSynced = 358,
    IsDuckingInVehicle = 359,
    PreventAutoShuffleToTurretSeat = 360,
    DisableEventInteriorStatusCheck = 361,
    HasReserveParachute = 362,
    UseReserveParachute = 363,
    TreatDislikeAsHateWhenInCombat = 364,
    OnlyUpdateTargetWantedIfSeen = 365,
    AllowAutoShuffleToDriversSeat = 366,
    DontActivateRagdollFromSmokeGrenade = 367,
    LinkMBRToOwnerOnChain = 368,
    AmbientFriendBumpedByPlayer = 369,
    AmbientFriendBumpedByPlayerVehicle = 370,
    InFPSUnholsterTransition = 371,
    PreventReactingToSilencedCloneBullets = 372,
    DisableInjuredCryForHelpEvents = 373,
    NeverLeaveTrain = 374,
    DontDropJetpackOnDeath = 375,
    UseFPSUnholsterTransitionDuringCombatRoll = 376,
    ExitingFPSCombatRoll = 377,
    ScriptHasControlOfPlayer = 378,
    PlayFPSIdleFidgetsForProjectile = 379,
    DisableAutoEquipHelmetsInBikes = 380,
    DisableAutoEquipHelmetsInAircraft = 381,
    WasPlayingFPSGetup = 382,
    WasPlayingFPSMeleeActionResult = 383,
    PreferNoPriorityRemoval = 384,
    FPSFidgetsAbortedOnFire = 385,
    ForceFPSIKWithUpperBodyAnim = 386,
    SwitchingCharactersInFirstPerson = 387,
    IsClimbingLadder = 388,
    HasBareFeet = 389,
    UNUSED_REPLACE_ME_2 = 390,
    GoOnWithoutVehicleIfItIsUnableToGetBackToRoad = 391,
    BlockDroppingHealthSnacksOnDeath = 392,
    ResetLastVehicleOnVehicleExit = 393,
    ForceThreatResponseToNonFriendToFriendMeleeActions = 394,
    DontRespondToRandomPedsDamage = 395,
    AllowContinuousThreatResponseWantedLevelUpdates = 396,
    KeepTargetLossResponseOnCleanup = 397,
    PlayersDontDragMeOutOfCar = 398,
    BroadcastRepondedToThreatWhenGoingToPointShooting = 399,
    IgnorePedTypeForIsFriendlyWith = 400,
    TreatNonFriendlyAsHateWhenInCombat = 401,
    DontLeaveVehicleIfLeaderNotInVehicle = 402,
    ChangeFromPermanentToAmbientPopTypeOnMigration = 403,
    AllowMeleeReactionIfMeleeProofIsOn = 404,
    UsingLowriderLeans = 405,
    UsingAlternateLowriderLeans = 406,
    UseNormalExplosionDamageWhenBlownUpInVehicle = 407,
    DisableHomingMissileLockForVehiclePedInside = 408,
    DisableTakeOffScubaGear = 409,
    IgnoreMeleeFistWeaponDamageMult = 410,
    LawPedsCanFleeFromNonWantedPlayer = 411,
    ForceBlipSecurityPedsIfPlayerIsWanted = 412,
    IsHolsteringWeapon = 413,
    UseGoToPointForScenarioNavigation = 414,
    DontClearLocalPassengersWantedLevel = 415,
    BlockAutoSwapOnWeaponPickups = 416,
    ThisPedIsATargetPriorityForAI = 417,
    IsSwitchingHelmetVisor = 418,
    ForceHelmetVisorSwitch = 419,
    IsPerformingVehicleMelee = 420,
    UseOverrideFootstepPtFx = 421,
    DisableVehicleCombat = 422,
    TreatAsFriendlyForTargetingAndDamage = 423,
    AllowBikeAlternateAnimations = 424,
    TreatAsFriendlyForTargetingAndDamageNonSynced = 425,
    UseLockpickVehicleEntryAnimations = 426,
    IgnoreInteriorCheckForSprinting = 427,
    SwatHeliSpawnWithinLastSpottedLocation = 428,
    DisableStartEngine = 429,
    IgnoreBeingOnFire = 430,
    DisableTurretOrRearSeatPreference = 431,
    DisableWantedHelicopterSpawning = 432,
    UseTargetPerceptionForCreatingAimedAtEvents = 433,
    DisableHomingMissileLockon = 434,
    ForceIgnoreMaxMeleeActiveSupportCombatants = 435,
    StayInDefensiveAreaWhenInVehicle = 436,
    DontShoutTargetPosition = 437,
    DisableHelmetArmor = 438,
    CreatedByConcealedPlayer = 439,
    PermanentlyDisablePotentialToBeWalkedIntoResponse = 440,
    PreventVehExitDueToInvalidWeapon = 441,
    IgnoreNetSessionFriendlyFireCheckForAllowDamage = 442,
    DontLeaveCombatIfTargetPlayerIsAttackedByPolice = 443,
    CheckLockedBeforeWarp = 444,
    DontShuffleInVehicleToMakeRoom = 445,
    GiveWeaponOnGetup = 446,
    DontHitVehicleWithProjectiles = 447,
    DisableForcedEntryForOpenVehiclesFromTryLockedDoor = 448,
    FiresDummyRockets = 449,
    PedIsArresting = 450,
    IsDecoyPed = 451,
    HasEstablishedDecoy = 452,
    BlockDispatchedHelicoptersFromLanding = 453,
    DontCryForHelpOnStun = 454,
    HitByTranqWeapon = 455,
    CanBeIncapacitated = 456,
    ForcedAimFromArrest = 457,
    DontChangeTargetFromMelee = 458,
    _0x4376ABF2 = 459,
    RagdollFloatsIndefinitely = 460,
    BlockElectricWeaponDamage = 461,
    _0x262A3B8E = 462,
    _0x1AA79A25 = 463,
}