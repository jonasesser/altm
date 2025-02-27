import * as shared from "alt-shared";
export type DateTimeHour = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23;
export type DateTimeMinute = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 | 54 | 55 | 56 | 57 | 58 | 59;
export type DateTimeSecond = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 | 54 | 55 | 56 | 57 | 58 | 59;
export type DateTimeDay = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30;
export type DateTimeMonth = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
export declare enum ExplosionType {
    Grenade = 0,
    GrenadeLauncher = 1,
    StickyBomb = 2,
    Molotov = 3,
    Rocket = 4,
    TankShell = 5,
    HiOctane = 6,
    Car = 7,
    Plane = 8,
    PetrolPump = 9,
    Bike = 10,
    DirSteam = 11,
    DirFlame = 12,
    DirWaterHydrant = 13,
    DirGasCanister = 14,
    Boat = 15,
    ShipDestroy = 16,
    Truck = 17,
    Bullet = 18,
    SmokeGrenadeLauncher = 19,
    SmokeGrenade = 20,
    BzGas = 21,
    Flare = 22,
    GasCanister = 23,
    Extinguisher = 24,
    ProgrammableAr = 25,
    Train = 26,
    Barrel = 27,
    Propane = 28,
    Blimp = 29,
    DirFlameExplode = 30,
    Tanker = 31,
    PlaneRocket = 32,
    VehicleBullet = 33,
    GasTank = 34,
    Firework = 35,
    Snowball = 36,
    ProxMine = 37,
    ValkyrieCannon = 38,
    Unknown = -1
}
export declare enum RadioStation {
    LosSantosRockRadio = 0,
    NonStopPopFm = 1,
    RadioLosSantos = 2,
    ChannelX = 3,
    WestCoastTalkRadio = 4,
    RebelRadio = 5,
    SoulwaxFm = 6,
    EastLosFm = 7,
    WestCoastClassics = 8,
    BlaineCountyRadio = 9,
    TheBlueArk = 10,
    WorldWideFm = 11,
    FlyloFm = 12,
    TheLowdown = 13,
    RadioMirrorPark = 14,
    Space = 15,
    VinewoodBoulevardRadio = 16,
    SelfRadio = 17,
    TheLab = 18,
    RadioOff = 255
}
export declare enum NumberPlateStyle {
    BlueWhite = 0,
    YellowBlack = 1,
    YellowBlue = 2,
    BlueWhite2 = 3,
    BlueWhite3 = 4,
    Yankton = 5
}
export declare enum VehicleBumper {
    Front = 0,
    Rear = 1
}
export declare enum VehicleBumperDamage {
    NotDamaged = 0,
    Damaged = 1,
    None = 2
}
export declare enum VehicleDoor {
    DriverFront = 0,
    PassengerFront = 1,
    DriverRear = 2,
    PassengerRear = 3,
    Hood = 4,
    Trunk = 5
}
export declare enum VehicleDoorState {
    Closed = 0,
    OpenedLevel1 = 1,
    OpenedLevel2 = 2,
    OpenedLevel3 = 3,
    OpenedLevel4 = 4,
    OpenedLevel5 = 5,
    OpenedLevel6 = 6,
    OpenedLevel7 = 7,
    Unknown = 255
}
export declare enum VehicleModType {
    Spoiler = 0,
    FrontBumper = 1,
    RearBumper = 2,
    SideSkirt = 3,
    Exhaust = 4,
    Frame = 5,
    Grille = 6,
    Hood = 7,
    Fender = 8,
    RightFender = 9,
    Roof = 10,
    Engine = 11,
    Brakes = 12,
    Transmission = 13,
    Horn = 14,
    Suspension = 15,
    Armor = 16,
    Unk1 = 17,
    Turbo = 18,
    Unk2 = 19,
    TireSmoke = 20,
    Unk3 = 21,
    XenonLights = 22,
    FrontWheels = 23,
    BackWheels = 24,
    Plateholder = 25,
    VanityPlates = 26,
    TrimDesign = 27,
    Ornaments = 28,
    Dashboard = 29,
    Dial = 30,
    DoorSpeaker = 31,
    Seats = 32,
    SteeringWheel = 33,
    ColumnShifterLeavers = 34,
    Plaques = 35,
    Speakers = 36,
    Trunk = 37,
    Hydraulics = 38,
    EngineBlock = 39,
    AirFilter = 40,
    Struts = 41,
    ArchCover = 42,
    Aerials = 43,
    Trim = 44,
    Tank = 45,
    Windows = 46,
    Unk4 = 47,
    Livery = 48
}
export declare enum VehiclePart {
    FrontLeft = 0,
    FrontRight = 1,
    MiddleLeft = 2,
    MiddleRight = 3,
    RearLeft = 4,
    RearRight = 5
}
export declare enum VehiclePartDamage {
    NotDamaged = 0,
    DamagedLevel1 = 1,
    DamagedLevel2 = 2,
    DamagedLevel3 = 3
}
export declare enum WeatherType {
    ExtraSunny = 0,
    Clear = 1,
    Clouds = 2,
    Smog = 3,
    Foggy = 4,
    Overcast = 5,
    Rain = 6,
    Thunder = 7,
    Clearing = 8,
    Neutral = 9,
    Snow = 10,
    Blizzard = 11,
    Snowlight = 12,
    Xmas = 13,
    Halloween = 14
}
export declare enum WindowTint {
    None = 0,
    PureBlack = 1,
    DarkSmoke = 2,
    LightSmoke = 3,
    Stock = 4,
    Limo = 5,
    Green = 6
}
export declare enum BaseObjectFilterType {
    Player = 1,
    Vehicle = 2,
    Ped = 4,
    Object = 8
}
export declare enum Benefit {
    None = 0,
    CloudAuth = 1
}
export declare enum CloudAuthResult {
    Success = 0,
    NoBenefit = 1,
    VerifyFailed = 2
}
export interface VehicleBadgePosition {
    active: boolean;
    alpha: number;
    size: number;
    boneIndex: number;
    offset: shared.Vector3;
    direction: shared.Vector3;
    side: shared.Vector3;
}
export interface IConnectionInfo {
    name: string;
    socialID: string;
    hwidHash: string;
    hwidExHash: string;
    authToken: string;
    isDebug: boolean;
    branch: string;
    build: number;
    cdnUrl: string;
    passwordHash: string;
    ip: string;
    discordUserID: string;
    socialClubName: string;
    cloudID: string;
    cloudAuthResult: CloudAuthResult;
    id: number;
    isAccepted: boolean;
    hwid3: string;
    /**
     * Set text for (potential) player in queue.
     *
     * @example
     * ```js
     * alt.on("connectionQueueAdd", (connection) => {
     *   connection.text = "Your position in queue: 3";
     * })
     * ```
     */
    text: string;
    /**
     * Accepts client connection.
     *
     * @param sendNames Send names of all players on server to this client. Defaults to `true`.
     */
    accept: (sendNames?: boolean) => void;
    decline: (reason: string) => void;
}
export declare enum ConnectDeniedReason {
    WRONG_VERSION = 0,
    WRONG_BRANCH = 1,
    DEBUG_NOT_ALLOWED = 2,
    WRONG_PASSWORD = 3,
    WRONG_CDN_URL = 4
}
export interface IServerEvent {
    anyResourceError: (resourceName: string) => void;
    anyResourceStart: (resourceName: string) => void;
    anyResourceStop: (resourceName: string) => void;
    consoleCommand: (name: string, ...args: string[]) => void;
    entityEnterColshape: (colshape: Colshape, entity: Entity) => void;
    entityLeaveColshape: (colshape: Colshape, entity: Entity) => void;
    explosion: (source: Player, type: ExplosionType, pos: shared.Vector3, fx: number, target: Entity) => boolean | void;
    netOwnerChange: (entity: Entity, owner: Player, oldOwner: Player) => void;
    /**
     * @remarks The seat indexes start with 1 (driver seat).
     */
    playerChangedVehicleSeat: (player: Player, vehicle: Vehicle, oldSeat: number, seat: number) => void;
    playerConnect: (player: Player) => void;
    playerConnectDenied: (reason: ConnectDeniedReason, name: string, ip: string, passwordHash: number, isDebug: boolean, branch: string, version: number, cdnURL: string, discordId: number) => void;
    playerDamage: (victim: Player, attacker: Entity, healthDamage: number, armourDamage: number, weaponHash: number) => void;
    playerDeath: (victim: Player, killer: Entity, weaponHash: number) => void;
    playerDisconnect: (player: Player, reason: string) => void;
    /**
     * @remarks The seat indexes start with 1 (driver seat).
     */
    playerEnteredVehicle: (player: Player, vehicle: Vehicle, seat: number) => void;
    /**
     * @remarks The seat indexes start with 1 (driver seat).
     */
    playerEnteringVehicle: (player: Player, vehicle: Vehicle, seat: number) => void;
    /**
     * @remarks The seat indexes start with 1 (driver seat).
     */
    playerLeftVehicle: (player: Player, vehicle: Vehicle, seat: number) => void;
    removeEntity: (object: Entity) => void;
    resourceStart: (errored: boolean) => void;
    resourceStop: () => void;
    resourceError: (error: Error, file: string, line: number, stackTrace: string) => void;
    syncedMetaChange: (entity: Entity, key: string, value: any, oldValue: any) => void;
    streamSyncedMetaChange: (object: BaseObject, key: string, value: any, oldValue: any) => void;
    globalMetaChange: (key: string, value: any, oldValue: any) => void;
    globalSyncedMetaChange: (key: string, value: any, oldValue: any) => void;
    vehicleAttach: (vehicle: Vehicle, attachedVehicle: Vehicle) => void;
    vehicleDestroy: (vehicle: Vehicle) => void;
    vehicleDetach: (vehicle: Vehicle, detachedVehicle: Vehicle) => void;
    weaponDamage: (source: Player, target: Entity, weaponHash: number, damage: number, offset: shared.Vector3, bodyPart: shared.BodyPart, sourceEntity: Entity) => number | boolean | void;
    startFire: (player: Player, fires: IFireInfo[]) => boolean | void;
    startProjectile: (player: Player, pos: shared.Vector3, dir: shared.Vector3, ammoHash: number, weaponHash: number) => boolean | void;
    playerWeaponChange: (player: Player, oldWeapon: number, weapon: number) => void;
    vehicleDamage: (vehicle: Vehicle, attacker: Entity, bodyHealthDamage: number, additionalBodyHealthDamage: number, engineHealthDamage: number, petrolTankDamage: number, weapon: number) => void;
    localMetaChange: (player: Player, key: string, newValue: any, oldValue: any) => void;
    connectionQueueAdd: (connectionInfo: IConnectionInfo) => void;
    connectionQueueRemove: (connectionInfo: IConnectionInfo) => void;
    serverStarted: () => void;
    playerRequestControl: (player: Player, target: Entity) => boolean | void;
    playerAnimationChange: (target: Player, oldAnimDict: number, newAnimDict: number, oldAnimName: number, newAnimName: number) => void;
    playerInteriorChange: (player: Player, oldInterior: number, newInterior: number) => void;
    playerDimensionChange: (player: Player, oldDimension: number, newDimension: number) => void;
    vehicleHorn: (vehicle: Vehicle, player: Player, state: boolean) => boolean | void;
    vehicleSiren: (vehicle: Vehicle, state: boolean) => void;
    playerSpawn: (player: Player) => void;
    baseObjectCreate: (baseObject: BaseObject) => void;
    baseObjectRemove: (baseObject: BaseObject) => void;
    metaChange: (target: BaseObject, key: string, value: any, oldValue: any) => void;
    voiceConnection: (state: shared.VoiceConnectionState) => void;
    /**
     * @remarks You need to return true, otherwise the scene will not be synced.
     */
    requestSyncedScene: (source: Player, sceneID: number) => boolean | void;
    /**
     * @remarks You need to return true, otherwise the scene will not be synced.
     */
    startSyncedScene: (source: Player, sceneID: number, startPos: shared.Vector3, startRot: shared.Vector3, animDictHash: number, entityAnimPairs: {
        entity: BaseObject;
        animHash: number;
    }[]) => boolean | void;
    /**
     * @remarks You need to return true, otherwise the scene will not be synced.
     */
    stopSyncedScene: (source: Player, sceneID: number) => boolean | void;
    /**
     * @remarks You need to return true, otherwise the scene will not be synced.
     */
    updateSyncedScene: (source: Player, startRate: number, sceneID: number) => boolean | void;
    /**
     * @remarks Triggers if player deletes a object of task.
     */
    clientDeleteObject: (player: Player) => boolean | void;
    /**
     * @remarks Triggers if player request creation of a object, e.g for a task which is synced.
     */
    clientRequestObject: (player: Player, model: number, position: shared.Vector3) => boolean | void;
    playerHeal: (player: Player, oldHealth: number, newHealth: number, oldArmour: number, newArmour: number) => void;
    givePedScriptedTask: (source: Player, target: Ped, task: number) => boolean | void;
    pedDamage: (ped: Ped, attacker: Entity, healthDamage: number, armourDamage: number, weapon: number) => boolean | void;
    pedDeath: (ped: Ped, killer: Entity, weaponHash: number) => boolean | void;
    pedHeal: (ped: Ped, oldHealth: number, newHealth: number, oldArmour: number, newArmour: number) => boolean | void;
}
export interface IVehiclePassenger {
}
export interface IFireInfo {
    pos: shared.Vector3;
    weapon: number;
}
export interface IVehicleNeon {
    left: boolean;
    right: boolean;
    front: boolean;
    back: boolean;
}
export interface ICloth {
    drawable: number;
    texture: number;
    palette: number;
}
export interface IDlcCloth {
    drawable: number;
    texture: number;
    palette: number;
    dlc: number;
}
export interface IProp {
    drawable: number;
    texture: number;
}
export interface IDlcProp {
    drawable: number;
    texture: number;
    dlc: number;
}
export interface IHeadOverlay {
    index: number;
    opacity: number;
    colorType: number;
    colorIndex: number;
    secondColorIndex: number;
}
export interface IHeadBlendData {
    shapeFirstID: number;
    shapeSecondID: number;
    shapeThirdID: number;
    skinFirstID: number;
    skinSecondID: number;
    skinThirdID: number;
    shapeMix: number;
    skinMix: number;
    thirdMix: number;
}
export interface IBoneInfo {
    id: number;
    index: number;
    name: string;
}
export interface IVehicleModel {
    modelHash: number;
    title: string;
    type: shared.ModelType;
    wheelsCount: number;
    hasArmoredWindows: boolean;
    primaryColor: number;
    secondaryColor: number;
    pearlColor: number;
    wheelsColor: number;
    interiorColor: number;
    dashboardColor: number;
    hasAutoAttachTrailer: boolean;
    availableModkits: readonly boolean[];
    hasExtra(extraId: number): boolean;
    hasDefaultExtra(extraId: number): boolean;
    bones: readonly IBoneInfo[];
    canAttachCars: boolean;
    handlingNameHash: number;
}
export interface IPedModel {
    hash: number;
    name: string;
    type: string;
    dlcName: string;
    defaultUnarmedWeapon: string;
    movementClipSet: string;
    bones: readonly IBoneInfo[];
}
export interface IWeaponModel {
    hash: number;
    name: string;
    modelName: string;
    modelHash: number;
    ammoTypeHash: number;
    ammoType: string;
    ammoModelName: string;
    ammoModelHash: number;
    defaultMaxAmmoMp: number;
    skillAbove50MaxAmmoMp: number;
    maxSkillMaxAmmoMp: number;
    bonusMaxAmmoMp: number;
    damageType: string;
}
export interface IAmmoFlags {
    infiniteAmmo: boolean;
    addSmokeOnExplosion: boolean;
    fuse: boolean;
    fixedAfterExplosion: boolean;
}
export declare enum AmmoSpecialType {
    None = 0,
    ArmorPiercing = 1,
    Explosive = 2,
    FullMetalJacket = 3,
    HollowPoint = 4,
    Incendiary = 5,
    Tracer = 6
}
export interface IDecoration {
    collection: number;
    overlay: number;
    count: number;
}
/**
   * Extend it by interface merging for use in baseobject meta {@link "alt-server".BaseObject getMeta method}, {@link "alt-server".BaseObject setMeta method}, etc.
   *
   * @remarks See {@link "alt-shared".ICustomGlobalMeta} for an example of use.
   */
export interface ICustomBaseObjectMeta extends shared.ICustomBaseObjectMeta {
}
/**
   * Extend it by interface merging for use in blip meta {@link "alt-server".Blip getMeta method}, {@link "alt-server".Blip setMeta method}, etc.
   *
   * @remarks See {@link "alt-shared".ICustomGlobalMeta} for an example of use.
   */
export interface ICustomBlipMeta extends ICustomBaseObjectMeta {
}
/**
   * Extend it by interface merging for use in colshape meta {@link "alt-server".Colshape getMeta method}, {@link "alt-server".Colshape setMeta method}, etc.
   *
   * @remarks See {@link "alt-shared".ICustomGlobalMeta} for an example of use.
   */
export interface ICustomColshapeMeta extends ICustomBaseObjectMeta {
}
/**
   * Extend it by interface merging for use in checkpoint meta {@link "alt-server".Checkpoint getMeta method}, {@link "alt-server".Checkpoint setMeta method}, etc.
   *
   * @remarks See {@link "alt-shared".ICustomGlobalMeta} for an example of use.
   */
export interface ICustomCheckpointMeta extends ICustomColshapeMeta {
}
/**
   * Extend it by interface merging for use in voice channel meta {@link "alt-server".VoiceChannel getMeta method}, {@link "alt-server".VoiceChannel setMeta method}, etc.
   *
   * @remarks See {@link "alt-shared".ICustomGlobalMeta} for an example of use.
   */
export interface ICustomVoiceChannelMeta extends ICustomBaseObjectMeta {
}
/**
   * Extend it by interface merging for use in entity meta {@link "alt-server".Entity getMeta method}, {@link "alt-server".Entity setMeta method}, etc.
   *
   * @remarks See {@link "alt-shared".ICustomGlobalMeta} for an example of use.
   */
export interface ICustomEntityMeta extends ICustomBaseObjectMeta {
}
/**
   * Extend it by merging interfaces for use in player meta {@link "alt-server".Player getMeta method}, {@link "alt-server".Player setMeta method}, etc.
   *
   * @remarks See {@link "alt-shared".ICustomGlobalMeta} for an example of use.
   */
export interface ICustomPlayerMeta extends ICustomEntityMeta {
}
/**
   * Extend it by merging interfaces for use in vehicle meta {@link "alt-server".Vehicle getMeta method}, {@link "alt-server".Vehicle setMeta method}, etc.
   *
   * @remarks See {@link "alt-shared".ICustomGlobalMeta} for an example of use.
   */
export interface ICustomVehicleMeta extends ICustomEntityMeta {
}
/**
   * Extend `alt.emit` auto-completion by merging interfaces for use with `alt.emit`.
   *
   * @example
   * ```ts
   * declare module 'alt-server' {
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
/**
   * Documentation: https://docs.altv.mp/articles/configs/server.html
   */
export interface IServerConfig {
    resources: readonly string[];
    modules: readonly string[];
    name: string;
    host: string;
    port: number;
    players: number;
    password: string;
    announce: boolean;
    token: string;
    gamemode: string;
    website: string;
    language: string;
    description: string;
    debug: boolean;
    streamingDistance: number;
    migrationDistance: number;
    timeout: number;
    announceRetryErrorDelay: number;
    announceRetryErrorAttempts: number;
    duplicatePlayers: number;
    tags: readonly string[];
    useEarlyAuth: boolean;
    earlyAuthUrl: string;
    useCdn: boolean;
    cdnUrl: string;
    sendNames: boolean;
    mapBoundsMinX: number;
    mapBoundsMinY: number;
    mapBoundsMaxX: number;
    mapBoundsMaxY: number;
    mapCellAreaSize: number;
    colShapeTickRate: number;
    logStream: readonly string[];
    entityWorkerCount: number;
    connectionQueue: boolean;
    voice: {
        readonly bitrate?: number;
        readonly externalSecret?: string;
        readonly externalHost?: string;
        readonly externalPort?: number;
        readonly externalPublicHost?: string;
        readonly externalPublicPort?: number;
    };
    worldProfiler: {
        readonly port?: number;
        readonly host?: string;
    };
    "js-module": {
        readonly "source-maps"?: boolean;
        readonly "heap-profiler"?: boolean;
        readonly profiler?: boolean;
        readonly "global-fetch"?: boolean;
        readonly "global-webcrypto"?: boolean;
        readonly "network-imports"?: boolean;
        readonly "extra-cli-args"?: readonly string[];
    };
    "csharp-module": {
        readonly disableDependencyDownload?: true;
    };
}
export declare const rootDir: string;
export * from "alt-shared";
export declare function getClosestPlayer(options: {
    pos: shared.IVector3;
    range?: number;
}): Player | null;
export declare function getClosestVehicle(options: {
    pos: shared.IVector3;
    range?: number;
}): Vehicle | null;
export declare function setSyncedMeta<K extends string>(key: K, value: shared.InterfaceValueByKey<shared.ICustomGlobalSyncedMeta, K>): void;
export declare function setSyncedMeta<K extends shared.ExtractStringKeys<shared.ICustomGlobalSyncedMeta>>(key: K, value: shared.ICustomGlobalSyncedMeta[K]): void;
export declare function setSyncedMeta<V extends any, K extends string = string>(key: K, value: shared.InterfaceValueByKey<shared.ICustomGlobalSyncedMeta, K, V>): void;
export declare function deleteSyncedMeta(key: string): void;
export declare function deleteSyncedMeta<K extends shared.ExtractStringKeys<shared.ICustomGlobalSyncedMeta>>(key: K): void;
export declare function emit<K extends keyof ICustomEmitEvent>(eventName: K, ...args: Parameters<ICustomEmitEvent[K]>): void;
export declare function emit<K extends string>(eventName: Exclude<K, keyof IServerEvent | keyof ICustomEmitEvent>, ...args: any[]): void;
export declare function emitRaw<K extends keyof ICustomEmitEvent>(eventName: K, ...args: Parameters<ICustomEmitEvent[K]>): void;
export declare function emitRaw<K extends string>(eventName: Exclude<K, keyof IServerEvent | keyof ICustomEmitEvent>, ...args: any[]): void;
export declare function emitClient<K extends keyof shared.ICustomServerClientEvent>(player: Player | Player[], eventName: K, ...args: Parameters<shared.ICustomServerClientEvent[K]>): void;
export declare function emitClient<K extends string>(player: Player | Player[], eventName: Exclude<K, keyof shared.ICustomServerClientEvent>, ...args: any[]): void;
export declare function emitClientRaw<K extends keyof shared.ICustomServerClientEvent>(player: Player | Player[], eventName: K, ...args: Parameters<shared.ICustomServerClientEvent[K]>): void;
export declare function emitClientRaw<K extends string>(player: Player | Player[], eventName: Exclude<K, keyof shared.ICustomServerClientEvent>, ...args: any[]): void;
export declare function emitClientUnreliable<K extends keyof shared.ICustomServerClientEvent>(player: Player | Player[], eventName: K, ...args: Parameters<shared.ICustomServerClientEvent[K]>): void;
export declare function emitClientUnreliable<K extends string>(player: Player | Player[], eventName: Exclude<K, keyof shared.ICustomServerClientEvent>, ...args: any[]): void;
export declare function emitAllClients<K extends keyof shared.ICustomServerClientEvent>(eventName: K, ...args: Parameters<shared.ICustomServerClientEvent[K]>): void;
export declare function emitAllClients<K extends string>(eventName: Exclude<K, keyof shared.ICustomServerClientEvent>, ...args: any[]): void;
export declare function emitAllClientsRaw<K extends keyof shared.ICustomServerClientEvent>(eventName: K, ...args: Parameters<shared.ICustomServerClientEvent[K]>): void;
export declare function emitAllClientsRaw<K extends string>(eventName: Exclude<K, keyof shared.ICustomServerClientEvent>, ...args: any[]): void;
export declare function emitAllClientsUnreliable<K extends keyof shared.ICustomServerClientEvent>(eventName: K, ...args: Parameters<shared.ICustomServerClientEvent[K]>): void;
export declare function emitAllClientsUnreliable<K extends string>(eventName: Exclude<K, keyof shared.ICustomServerClientEvent>, ...args: any[]): void;
export declare function onRpc<K extends keyof shared.ICustomClientServerRpc>(rpcName: K, listener: (player: Player, ...args: Parameters<shared.ICustomClientServerRpc[K]>) => Promise<ReturnType<shared.ICustomClientServerRpc[K]>> | ReturnType<shared.ICustomClientServerRpc[K]>): void;
export declare function onRpc<K extends string>(rpcName: Exclude<K, keyof shared.ICustomClientServerRpc>, listener: (player: Player, ...args: any[]) => Promise<any> | any): void;
export declare function offRpc<K extends keyof shared.ICustomClientServerRpc>(rpcName: string, listener: (player: Player, ...args: Parameters<shared.ICustomClientServerRpc[K]>) => Promise<ReturnType<shared.ICustomClientServerRpc[K]>> | ReturnType<shared.ICustomClientServerRpc[K]>): void;
export declare function offRpc<K extends string>(rpcName: Exclude<K, keyof shared.ICustomClientServerRpc>, listener?: (player: Player, ...args: any[]) => Promise<any> | any): void;
export declare function setPassword(password: string): void;
export declare function hashServerPassword(password: string): bigint;
export declare function stopServer(): void;
export declare function offClient<K extends keyof shared.ICustomClientServerEvent>(eventName: K, listener: (player: Player, ...args: Parameters<shared.ICustomClientServerEvent[K]>) => void): void;
export declare function offClient<K extends string>(eventName: Exclude<K, keyof shared.ICustomClientServerEvent>, listener: (player: Player, ...args: any[]) => void): void;
export declare function offClient(eventName: string, listener: (player: Player, ...args: any[]) => void): void;
export declare function offClient(listener: (eventName: string, ...args: any[]) => void): void;
export declare function on<K extends keyof IServerEvent | keyof ICustomEmitEvent>(eventName: K, listener: (...args: shared.EventParameters<IServerEvent, ICustomEmitEvent, K>) => void): void;
export declare function on<K extends string>(eventName: Exclude<K, keyof IServerEvent | keyof ICustomEmitEvent>, listener: (...args: any[]) => void): void;
export declare function once<K extends keyof IServerEvent | keyof ICustomEmitEvent>(eventName: K, listener: (...args: shared.EventParameters<IServerEvent, ICustomEmitEvent, K>) => void): void;
export declare function once<K extends string>(eventName: Exclude<K, keyof IServerEvent | keyof ICustomEmitEvent>, listener: (...args: any[]) => void): void;
export declare function off<K extends keyof IServerEvent | keyof ICustomEmitEvent>(eventName: K, listener: (...args: shared.EventParameters<IServerEvent, ICustomEmitEvent, K>) => void): void;
export declare function off<K extends string>(eventName: Exclude<K, keyof IServerEvent | keyof ICustomEmitEvent>, listener: (...args: any[]) => void): void;
export declare function onClient<K extends keyof shared.ICustomClientServerEvent>(eventName: K, listener: (player: Player, ...args: Parameters<shared.ICustomClientServerEvent[K]>) => void): void;
export declare function onClient<K extends string>(eventName: Exclude<K, keyof shared.ICustomClientServerEvent>, listener: (player: Player, ...args: any[]) => void): void;
export declare function onClient(listener: (eventName: string, player: Player, ...args: any[]) => void): void;
export declare function onceClient<K extends keyof shared.ICustomClientServerEvent>(eventName: K, listener: (player: Player, ...args: Parameters<shared.ICustomClientServerEvent[K]>) => void): void;
export declare function onceClient<K extends string>(eventName: Exclude<K, keyof shared.ICustomClientServerEvent>, listener: (player: Player, ...args: any[]) => void): void;
export declare function onceClient(listener: (eventName: string, player: Player, ...args: any[]) => void): void;
export declare function startResource(name: string): void;
export declare function restartResource(name: string): void;
export declare function addClientConfigKey(key: string): void;
export declare function hasBenefit(benefit: Benefit): boolean;
export declare function stopResource(name: string): void;
export declare function getRemoteEventListeners(eventName: string | null): readonly ((...args: any[]) => void)[];
export declare function getVehicleModelInfoByHash(vehicleHash: number): IVehicleModel;
export declare function getLoadedVehicleModels(): number[];
export declare function getPedModelInfoByHash(pedModelHash: number): IPedModel;
export declare function getWeaponModelInfoByHash(weaponModelHash: number): IWeaponModel;
export declare function getAmmoHashForWeaponHash(weaponModelHash: number): number;
export declare function getServerConfig(): IServerConfig;
export declare function toggleWorldProfiler(state: boolean): void;
export declare function getEntitiesInDimension(dimension: number, allowedTypes: BaseObjectFilterType): readonly Entity[];
export declare function getEntitiesInRange(position: shared.IVector3, range: number, dimension: number, allowedTypes: BaseObjectFilterType): readonly Entity[];
export declare function getClosestEntities(position: shared.IVector3, range: number, dimension: number, limit: number, allowedTypes: BaseObjectFilterType): readonly Entity[];
export declare function setVoiceExternalPublic(host: string, port: number): void;
export declare function setVoiceExternal(phost: string, port: number): void;
export declare function getMaxStreamingPeds(): number;
export declare function setMaxStreamingPeds(limit: number): void;
export declare function getMaxStreamingObjects(): number;
export declare function setMaxStreamingObjects(limit: number): void;
export declare function getMaxStreamingVehicles(): number;
export declare function setMaxStreamingVehicles(limit: number): void;
export declare function getStreamerThreadCount(): number;
export declare function setStreamerThreadCount(count: number): void;
export declare function getStreamingTickRate(): number;
export declare function setStreamingTickRate(count: number): void;
export declare function getStreamingDistance(): number;
export declare function setStreamingDistance(distance: number): void;
export declare function getMigrationThreadCount(): number;
export declare function setMigrationThreadCount(count: number): void;
export declare function getSyncSendThreadCount(): number;
export declare function setSyncSendThreadCount(count: number): void;
export declare function getSyncReceiveThreadCount(): number;
export declare function setSyncReceiveThreadCount(count: number): void;
export declare function getMigrationTickRate(): number;
export declare function setMigrationTickRate(count: number): void;
export declare function getColShapeTickRate(): number;
export declare function setColShapeTickRate(count: number): void;
export declare function getMigrationDistance(): number;
export declare function setMigrationDistance(count: number): void;
export declare class ConnectionInfo {
    static readonly all: readonly IConnectionInfo[];
    static getByID(id: number): IConnectionInfo;
}
export declare class BaseObject extends shared.BaseObject {
    /**
     * Gets the base object with the given type and id
     */
    static getByID(type: shared.BaseObjectType, id: number): BaseObject;
    deleteMeta(key: string): void;
    hasMeta(key: string): boolean;
    getMeta<K extends string>(key: Exclude<K, never>): unknown;
    getMeta<K extends shared.ExtractStringKeys<ICustomBaseObjectMeta>>(key: K): ICustomBaseObjectMeta[K];
    setMeta<K extends string>(key: K, value: shared.InterfaceValueByKey<ICustomBaseObjectMeta, K, unknown, void>): void;
    setMeta<K extends shared.ExtractStringKeys<ICustomBaseObjectMeta>>(key: K, value: ICustomBaseObjectMeta[K]): void;
    /** @deprecated See {@link ICustomBaseObjectMeta} */
    setMeta<V extends any, K extends string = string>(key: K, value: shared.InterfaceValueByKey<ICustomBaseObjectMeta, K, V, void>): void;
    /**
     * Removes the specified key and the data connected to that specific key.
     *
     * @param key The key of the value to remove.
     */
    deleteSyncedMeta(key: string): void;
    /**
     * Stores the given value with the specified key.
     *
     * @remarks The given value will be shared with all clients.
     *
     * @param key The key of the value to store.
     * @param value The value to store.
     */
    setSyncedMeta<K extends string>(key: K, value: shared.InterfaceValueByKey<shared.ICustomBaseObjectSyncedMeta, K, unknown, void>): void;
    setSyncedMeta<K extends shared.ExtractStringKeys<shared.ICustomBaseObjectSyncedMeta>>(key: K, value: shared.ICustomBaseObjectSyncedMeta[K]): void;
    /** @deprecated See {@link "alt-shared".ICustomBaseObjectSyncedMeta} */
    setSyncedMeta<V extends any, K extends string = string>(key: K, value: shared.InterfaceValueByKey<shared.ICustomBaseObjectSyncedMeta, K, V, void>): void;
}
export declare class WorldObject extends BaseObject {
    /**
     * Object dimension.
     *
     * @remarks Check https://docs.altv.mp/articles/dimensions.html to understand how it works.
     */
    dimension: number;
    /**
     * Object position.
     */
    pos: shared.Vector3;
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
export declare class VirtualEntity extends WorldObject {
    constructor(group: VirtualEntityGroup, position: shared.Vector3, streamingDistance: number, data: Record<string, any>);
    /** Returns all Virtual Entity instances */
    static readonly all: readonly VirtualEntity[];
    /** Virtual Entity Group this entity belongs to */
    readonly group: VirtualEntityGroup;
    /** Streaming range for the virtual entity */
    readonly streamingDistance: number;
    visible: boolean;
    /**
     * Gets a value using the specified key.
     *
     * @param key The key of the value to get.
     * @returns Dynamic value associated with the specified key or undefined if no data is present.
     */
    getStreamSyncedMeta<K extends string>(key: Exclude<K, never>): unknown;
    getStreamSyncedMeta<K extends shared.ExtractStringKeys<shared.ICustomVirtualEntityStreamSyncedMeta>>(key: K): shared.ICustomVirtualEntityStreamSyncedMeta[K];
    /**
     * Determines whether contains the specified key.
     *
     * @param key The key of the value to locate.
     * @returns True if the meta table contains any data at the specified key or False if not
     */
    hasStreamSyncedMeta(key: string): boolean;
    getStreamSyncedMetaKeys(): readonly string[];
    /**
     * Stores the given value with the specified key.
     *
     * @remarks The given value will be shared with all clients in streaming range.
     *
     * @param key The key of the value to store.
     * @param value The value to store.
     */
    setStreamSyncedMeta<K extends string>(key: K, value: shared.InterfaceValueByKey<shared.ICustomVirtualEntityStreamSyncedMeta, K, unknown, void>): void;
    setStreamSyncedMeta<K extends shared.ExtractStringKeys<shared.ICustomVirtualEntityStreamSyncedMeta>>(key: K, value: shared.ICustomVirtualEntityStreamSyncedMeta[K]): void;
    /** @deprecated See {@link "alt-shared".ICustomVirtualEntityStreamSyncedMeta} */
    setStreamSyncedMeta<V extends any, K extends string = string>(key: K, value: shared.InterfaceValueByKey<shared.ICustomVirtualEntityStreamSyncedMeta, K, V, void>): void;
    /**
     * Removes the specified key and the data connected to that specific key.
     *
     * @param key The key of the value to remove.
     */
    deleteStreamSyncedMeta(key: string): void;
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
     * Entity model hash.
     */
    get model(): number;
    set model(value: string | number);
    /**
     * Entity rotation.
     *
     * @remarks Values are provided in radians.
     */
    rot: shared.Vector3;
    /**
     * Whether the entity is visible.
     */
    visible: boolean;
    /**
     * Whether the entity should be streamed for other entities.
     */
    streamed: boolean;
    frozen: boolean;
    collision: boolean;
    streamingDistance: number;
    readonly timestamp: number;
    setMeta<K extends string>(key: K, value: shared.InterfaceValueByKey<ICustomEntityMeta, K, unknown, void>): void;
    setMeta<K extends shared.ExtractStringKeys<ICustomEntityMeta>>(key: K, value: ICustomEntityMeta[K]): void;
    /** @deprecated See {@link ICustomEntityMeta} */
    setMeta<V extends any, K extends string = string>(key: K, value: shared.InterfaceValueByKey<ICustomEntityMeta, K, V, void>): void;
    deleteMeta(key: string): void;
    getMeta<K extends string>(key: Exclude<K, never>): unknown;
    getMeta<K extends shared.ExtractStringKeys<ICustomEntityMeta>>(key: K): ICustomEntityMeta[K];
    hasMeta(key: string): boolean;
    /**
     * Removes the specified key and the data connected to that specific key.
     *
     * @param key The key of the value to remove.
     */
    deleteSyncedMeta(key: string): void;
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
     * Stores the given value with the specified key.
     *
     * @remarks The given value will be shared with all clients.
     *
     * @param key The key of the value to store.
     * @param value The value to store.
     */
    setSyncedMeta<K extends string>(key: K, value: shared.InterfaceValueByKey<shared.ICustomEntitySyncedMeta, K, unknown, void>): void;
    setSyncedMeta<K extends shared.ExtractStringKeys<shared.ICustomEntitySyncedMeta>>(key: K, value: shared.ICustomEntitySyncedMeta[K]): void;
    /** @deprecated See {@link "alt-shared".ICustomEntitySyncedMeta} */
    setSyncedMeta<V extends any, K extends string = string>(key: K, value: shared.InterfaceValueByKey<shared.ICustomEntitySyncedMeta, K, V, void>): void;
    /**
     * Removes the specified key and the data connected to that specific key.
     *
     * @param key The key of the value to remove.
     */
    deleteStreamSyncedMeta(key: string): void;
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
    /**
     * Stores the given value with the specified key.
     *
     * @remarks The given value will be shared with all clients in streaming range.
     *
     * @param key The key of the value to store.
     * @param value The value to store.
     */
    setStreamSyncedMeta<K extends string>(key: K, value: shared.InterfaceValueByKey<shared.ICustomEntityStreamSyncedMeta, K, unknown, void>): void;
    setStreamSyncedMeta<K extends shared.ExtractStringKeys<shared.ICustomEntityStreamSyncedMeta>>(key: K, value: shared.ICustomEntityStreamSyncedMeta[K]): void;
    /** @deprecated See {@link "alt-shared".ICustomEntityStreamSyncedMeta} */
    setStreamSyncedMeta<V extends any, K extends string = string>(key: K, value: shared.InterfaceValueByKey<shared.ICustomEntityStreamSyncedMeta, K, V, void>): void;
    /**
     * Changes network owner to the specified player.
     *
     * @remarks See {@link Entity~netOwner} to understand how network owner works.
     * <p><b>
     * Keep in mind that disabling migration can lead to unexpected behaviour when
     * the network owner gets out of the streaming range.
     * </b></p>
     *
     * @param player The given player that will be set as new network owner.
     * @param disableMigration Pass true to disable migration, false to keep it enabled. If not specified, it defaults to "false".
     */
    setNetOwner(player: Player, disableMigration: boolean): void;
    /**
     * Resets overwritten network owner.
     *
     * @remarks See {@link Entity~netOwner} to understand how network owner works.
     * <p><b>
     * Keep in mind that disabling migration can lead to unexpected behaviour when
     * the network owner gets out of the streaming range.
     * </b></p>
     *
     * @param disableMigration Pass true to disable migration, false to keep it enabled. If not specified, it defaults to "false".
     */
    resetNetOwner(disableMigration: boolean): void;
    /**
     * Attaches this entity to another entity.
     *
     * @param entity Target entity.
     * @param entityBone Target bone id or name.
     * @param ownBone Origin bone id or name.
     * @param pos Position offset.
     * @param rot Rotation - needs to be in radians.
     * @param enableCollisions If true the attached entity has a collision.
     * @param noFixedRotation If false the entity is attached with a fixed rotation (no bouncing). That means if the value in native was true, you have to use false in the serverside method
     */
    attachTo(entity: Entity, entityBone: string | number, ownBone: string | number, pos: shared.IVector3, rot: shared.IVector3, enableCollisions: boolean, noFixedRotation: boolean): void;
    /**
     * Detaches this entity if attached to another entity.
     */
    detach(): void;
}
export declare class Player extends Entity {
    /**
     * Array with all players connected to the server.
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
    readonly streamedEntities: readonly {
        entity: Entity;
        distance: number;
    }[];
    static readonly count: number;
    armour: number;
    currentWeapon: number;
    readonly weapons: readonly shared.IWeapon[];
    readonly currentWeaponComponents: readonly number[];
    readonly currentWeaponTintIndex: number;
    readonly entityAimOffset: shared.Vector3;
    readonly entityAimingAt: Entity;
    readonly flashlightActive: boolean;
    readonly moveSpeed: number;
    readonly isInRagdoll: boolean;
    readonly isAiming: boolean;
    readonly isDead: boolean;
    /**
         * The player's state of weapon reloading.
         */
    readonly isReloading: boolean;
    readonly isEnteringVehicle: boolean;
    readonly isLeavingVehicle: boolean;
    readonly isOnLadder: boolean;
    readonly isInMelee: boolean;
    readonly isInCover: boolean;
    readonly isParachuting: boolean;
    readonly isOnVehicle: boolean;
    readonly isInWater: boolean;
    /**
     * Position the player is currently aiming at.
     *
     * @remarks Will return {@link Vector3.zero} if the player is aiming against a entity.
     */
    readonly aimPos: shared.Vector3;
    readonly headRot: shared.Vector3;
    health: number;
    readonly ip: string;
    maxArmour: number;
    maxHealth: number;
    readonly name: string;
    readonly ping: number;
    readonly cloudID: string;
    readonly cloudAuthResult: CloudAuthResult;
    /**
     * Curent seat the player is sitting in.
     * If player is not in any vehicle it is equal to `0`.
     *
     * @remarks The seat indexes start with 1 (driver seat).
     */
    readonly seat: number;
    readonly vehicle: Vehicle;
    invincible: boolean;
    readonly isSuperJumpEnabled: boolean;
    readonly isCrouching: boolean;
    readonly isStealthy: boolean;
    readonly isSpawned: boolean;
    readonly socialID: string;
    readonly socialClubName: string;
    readonly hwid3: string;
    readonly hwidHash: string;
    readonly hwidExHash: string;
    readonly authToken: string;
    readonly discordID: string;
    readonly currentAnimationDict: number;
    readonly currentAnimationName: number;
    readonly forwardSpeed: number;
    readonly strafeSpeed: number;
    readonly currentInterior: number;
    lastDamagedBodyPart: number;
    /**
     * Send names of all players on server to this player if they are not already sent (value is not set to `true`).
     */
    sendNames: boolean;
    netOwnershipDisabled: boolean;
    /**
     * Retrieves the player from the pool.
     *
     * @param id The id of the player.
     * @returns Player if it was found, otherwise null.
     */
    static getByID(id: number): Player;
    /**
     * Emits specified event to client.
     *
     * @param eventName Name of the event.
     * @param args Rest parameters for emit to send.
     */
    emit<K extends keyof shared.ICustomServerClientEvent>(eventName: K, ...args: Parameters<shared.ICustomServerClientEvent[K]>): void;
    /**
     * Emits specified event to client, but faster as {@link Player.emit}.
     *
     * @param eventName Name of the event.
     * @param args Rest parameters for emit to send.
     */
    emitRaw<K extends keyof shared.ICustomServerClientEvent>(eventName: K, ...args: Parameters<shared.ICustomServerClientEvent[K]>): void;
    /**
     * Calls a client sided RPC with the specified arguments.
     *
     * @param rpcName Name of the RPC
     * @param ...args Arguments to pass to the RPC
     *
     */
    emitRpc<K extends keyof shared.ICustomServerClientRpc>(rpcName: K, ...args: Parameters<shared.ICustomServerClientRpc[K]>): Promise<ReturnType<shared.ICustomServerClientRpc[K]>>;
    addWeaponComponent(weaponHash: number, component: number): void;
    hasWeaponComponent(weaponModel: string | number, component: string | number): boolean;
    /**
     * Removes the visible blood on the player body.
     */
    clearBloodDamage(): void;
    getBloodDamageBase64(): string;
    setBloodDamageBase64(base64: string): void;
    /**
     * Gives the specified weapon to the player.
     *
     * @remarks Amount of given ammo is shared between all weapons
     * with the same [ammo type](https://gist.github.com/root-cause/faf41f59f7a6d818b7db0b839bd147c1).
     * For example pistols: `weapon_pistol` and `weapon_combatpistol` have same ammo pool.
     *
     * See https://gist.github.com/root-cause/faf41f59f7a6d818b7db0b839bd147c1 for a list of ammo types.
     *
     * Some more notes about weapon ammo:
     * - Zero ammo value doesnt remove ammo of that weapon.
     * - Negative ammo value enables infinite ammo for this ammo type.
     * - Amount of ammo will be added if player already have weapon with same ammo type.
     *
     * @example
     * ```js
     * player.giveWeapon(alt.hash('weapon_pistol'), 10, true); // sets amount ammo of type "AMMO_PISTOL" to 10
     * player.giveWeapon(alt.hash('weapon_combatpistol'), 0, true); // also 10 amount of ammo, as this has the same type of ammo
     * player.giveWeapon(alt.hash('weapon_pistol'), 10, true); // adds amount ammo of type "AMMO_PISTOL", so 20 pistol ammo in result
     * ```
     *
     * @param weaponModel The model of the weapon.
     * @param ammo Amount of ammo to spawn the weapon with. See remarks for more information.
     * @param equipNow Should the weapon be equipped immediately.
     */
    giveWeapon(weaponModel: string | number, ammo: number, equipNow: boolean): void;
    hasWeapon(weaponModel: string | number): boolean;
    /**
     * Forcefully disconnects the player with a reason message.
     *
     * @param reason The reason that will display to the player on the disconnect screen. If not specified, it defaults to "KICKED_OUT".
     */
    kick(reason: string): void;
    /**
     * Removes every weapon from the player.
     */
    removeAllWeapons(removeAllAmmo: boolean): void;
    /**
     * Removes the specified weapon from the player.
     *
     * @param weaponHash Hash of the weapon.
     */
    removeWeapon(weaponHash: number): void;
    /**
     * Removes the specified weapon component from the specified weapon.
     *
     * @param weaponHash Hash of the weapon.
     * @param component Hash of the weapon component.
     */
    removeWeaponComponent(weaponHash: number, component: number): void;
    setDateTime(day: DateTimeDay, month: DateTimeMonth, year: number, hour: DateTimeHour, minute: DateTimeMinute, second: DateTimeSecond): void;
    setWeaponTintIndex(weaponHash: number, tintIndex: number): void;
    setWeather(weatherType: WeatherType): void;
    /**
     * Spawns the player in the world.
     *
     * @remarks The player has to have a model set before being spawned.
     *
     * @param x The x position where the player gets spawned.
     * @param y The y position where the player gets spawned.
     * @param z The z position where the player gets spawned.
     * @param delay The delay at which the player gets spawned after calling this function. Defaults to 0.
     */
    spawn(x: number, y: number, z: number, delay?: number): void;
    /**
     * Spawns the player in the world.
     *
     * @remarks The player has to have a model set before being spawned.
     *
     * @param pos The position where the player gets spawned.
     * @param delay The delay at which the player gets spawned after calling this function. Defaults to 0.
     */
    spawn(pos: shared.IVector3, delay?: number): void;
    despawn(): void;
    /**
     * Gets the specified clothing component.
     *
     * @example
     * ```js
     * let cloth = player.getClothes(1); // Gets the currently equipped mask
     * alt.log(cloth.drawable); // Logs the drawable of the currently equipped mask
     * ```
     *
     * @param component Component id of the clothing.
     */
    getClothes(component: number): ICloth;
    /**
     * Gets the specified dlc clothing component.
     *
     * @example
     * ```js
     * let cloth = player.getDlcClothes(1); // Gets the currently equipped mask
     * alt.log(cloth.drawable); // Logs the drawable of the currently equipped mask
     * ```
     *
     * @param component Component id of the clothing.
     */
    getDlcClothes(component: number): IDlcCloth;
    clearClothes(component: number): void;
    /**
     * Sets the specified clothing component.
     *
     * @remarks The dlc hash is only required when setting dlc clothing.
     * @example
     * ```js
     * player.setClothes(1, 14, 0); // Sets the players mask to a blue hockey mask
     * ```
     *
     * @param component Component id of the clothing.
     * @param drawable Drawable id of the clothing.
     * @param texture Texture id of the clothing.
     * @param palette Palette of the clothing.
     */
    setClothes(component: number, drawable: number, texture: number, palette: number): boolean;
    /**
     * Sets the specified dlc clothing component.
     *
     * @remarks The dlc hash is only required when setting dlc clothing.
     * @example
     * ```js
     * player.setDlcClothes(alt.hash('dlcname'), 1, 14, 0);
     * ```
     *
     * @param dlc Dlc hash of the clothing.
     * @param component Component id of the clothing.
     * @param drawable Drawable id of the clothing.
     * @param texture Texture id of the clothing.
     * @param palette Palette of the clothing.
     */
    setDlcClothes(dlc: number, component: number, drawable: number, texture: number, palette: number): boolean;
    /**
     * Gets the specified prop component.
     *
     * @example
     * ```js
     * let prop = player.getProp(0); // Gets the hat prop of the player
     * alt.log(prop.drawable); // Logs the drawable id of the current hat prop of the player
     * ```
     *
     * @param component Component id of the prop.
     */
    getProp(component: number): IProp;
    /**
     * Gets the specified dlc prop component.
     *
     * @example
     * ```js
     * let prop = player.getDlcProp(0); // Gets the hat prop of the player
     * alt.log(prop.drawable); // Logs the drawable id of the current hat prop of the player
     * ```
     *
     * @param component Component id of the prop.
     */
    getDlcProp(component: number): IDlcProp;
    /**
     * Sets the specified prop component.
     *
     * @example
     * ```js
     * player.setProp(0, 13, 0); // sets the players hat prop to a blue cowboy hat
     * ```
     *
     * @param component Component id of the prop.
     * @param drawable Drawable id of the prop.
     * @param texture Texture id of the prop.
     */
    setProp(component: number, drawable: number, texture: number): boolean;
    /**
     * Sets the specified dlc prop component.
     *
     * @example
     * ```js
     * player.setDlcProp(alt.hash('dlcname'), 0, 13, 0);
     * ```
     *
     * @param dlc Dlc hash of the prop.
     * @param component Component id of the prop.
     * @param drawable Drawable id of the prop.
     * @param texture Texture id of the prop.
     */
    setDlcProp(dlc: number, component: number, drawable: number, texture: number): boolean;
    /**
     * Removes a specified prop component.
     *
     * @example
     * ```js
     * player.clearProp(0); // removes the player hat prop
     * ```
     *
     * @param component Component id of the prop.
     */
    clearProp(component: number): void;
    /**
     * Checks whether the given entity is in the stream range of the player.
     *
     * @example
     * ```js
     * if(player.vehicle) alt.log(player.isEntityInStreamRange(player.vehicle)); // This always logs true, because their own vehicle is always in stream range of the player
     * ```
     */
    isEntityInStreamRange(entity: Entity): boolean;
    /**
     * Set the player into a vehicle on specific seat.
     *
     * @remarks The seat indexes start with 1 (driver seat).
     */
    setIntoVehicle(vehicle: Vehicle, seat: number): void;
    /**
     * Plays ambient speech.
     *
     * @Remarks See https://github.com/DurtyFree/gta-v-data-dumps/blob/master/speeches.json for a full list of speeches.
     *
     * @param speechName Name of the speach.
     * @param speechParam Param of the speach.
     * @param speechDictHash Hash of the speach dict.
     */
    playAmbientSpeech(speechName: string, speechParam: string, speechDictHash: number): void;
    setHeadOverlay(overlayID: number, index: number, opacity: number): boolean;
    removeHeadOverlay(overlayID: number): boolean;
    setHeadOverlayColor(overlayID: number, colorType: number, colorIndex: number, secondColorIndex: number): boolean;
    getHeadOverlay(overlayID: number): IHeadOverlay;
    setFaceFeature(index: number, scale: number): boolean;
    getFaceFeatureScale(index: number): number;
    removeFaceFeature(index: number): boolean;
    setHeadBlendPaletteColor(id: number, red: number, green: number, blue: number): boolean;
    getHeadBlendPaletteColor(id: number): shared.RGBA;
    removeHeadBlendPaletteColor(): void;
    setHeadBlendData(shapeFirstID: number, shapeSecondID: number, shapeThirdID: number, skinFirstID: number, skinSecondID: number, skinThirdID: number, shapeMix: number, skinMix: number, thirdMix: number): void;
    removeHeadBlendData(): void;
    getHeadBlendData(): IHeadBlendData;
    setEyeColor(eyeColor: number): boolean;
    getEyeColor(): number;
    setHairColor(hairColor: number): void;
    getHairColor(): number;
    setHairHighlightColor(hairHighlightColor: number): void;
    getHairHighlightColor(): number;
    addDecoration(collection: string | number, overlay: string | number, count: number): void;
    removeDecoration(collection: string | number, overlay: string | number): void;
    clearDecorations(): void;
    getDecorations(): readonly IDecoration[];
    playAnimation(animDict: string, animName: string, blendInSpeed: number, blendOutSpeed: number, duration: number, flags: number, playbackRate: number, lockX: boolean, lockY: boolean, lockZ: boolean): void;
    clearTasks(): void;
    playScenario(name: string): void;
    getAmmo(ammoHash: string | number): number;
    setAmmo(ammoHash: string | number, ammo: number): void;
    getWeaponAmmo(weaponHash: string | number): number;
    setWeaponAmmo(weaponHash: string | number, ammo: number): void;
    getAmmoSpecialType(ammoHash: string | number): AmmoSpecialType;
    setAmmoSpecialType(ammoHash: string | number, ammoSpecialType: AmmoSpecialType): void;
    getAmmoFlags(ammoHash: string | number): IAmmoFlags;
    setAmmoFlags(ammoHash: string | number, infiniteAmmo: boolean, addSmokeOnExplosion: boolean, fuse: boolean, fixedAfterExplosion: boolean): void;
    getAmmoMax(ammoHash: string | number): number;
    setAmmoMax(ammoHash: string | number, ammoMax: number): void;
    getAmmoMax50(ammoHash: string | number): number;
    setAmmoMax50(ammoHash: string | number, ammoMax: number): void;
    getAmmoMax100(ammoHash: string | number): number;
    setAmmoMax100(ammoHash: string | number, ammoMax: number): void;
    /**
         * Stores the given value with the specified key.
         *
         * @param key The key of the value to store.
         * @param value The value to store.
         */
    setLocalMeta<K extends string>(key: K, value: shared.InterfaceValueByKey<shared.ICustomPlayerLocalMeta, K, unknown, void>): void;
    setLocalMeta<K extends shared.ExtractStringKeys<shared.ICustomPlayerLocalMeta>>(key: K, value: shared.ICustomPlayerLocalMeta[K]): void;
    /** @deprecated See {@link "alt-shared".ICustomPlayerLocalMeta} */
    setLocalMeta<V extends any, K extends string = string>(key: K, value: shared.InterfaceValueByKey<shared.ICustomPlayerLocalMeta, K, V, void>): void;
    deleteLocalMeta(key: string): void;
    /**
     * Gets a value using the specified key.
     *
     * @param key The key of the value to get.
     * @returns Dynamic value associated with the specified key or undefined if no data is present.
     */
    getLocalMeta<K extends string>(key: Exclude<K, never>): unknown;
    getLocalMeta<K extends shared.ExtractStringKeys<shared.ICustomPlayerLocalMeta>>(key: K): shared.ICustomPlayerLocalMeta[K];
    hasLocalMeta(key: string): boolean;
    getLocalMetaKeys(): readonly string[];
    setMeta<K extends string>(key: K, value: shared.InterfaceValueByKey<ICustomPlayerMeta, K, unknown, void>): void;
    setMeta<K extends shared.ExtractStringKeys<ICustomPlayerMeta>>(key: K, value: ICustomPlayerMeta[K]): void;
    /** @deprecated See {@link ICustomPlayerMeta} */
    setMeta<V extends any, K extends string = string>(key: K, value: shared.InterfaceValueByKey<ICustomPlayerMeta, K, V, void>): void;
    deleteMeta(key: string): void;
    getMeta<K extends string>(key: Exclude<K, never>): unknown;
    getMeta<K extends shared.ExtractStringKeys<ICustomPlayerMeta>>(key: K): ICustomPlayerMeta[K];
    hasMeta(key: string): boolean;
    setSyncedMeta<K extends string>(key: K, value: shared.InterfaceValueByKey<shared.ICustomPlayerSyncedMeta, K, unknown, void>): void;
    setSyncedMeta<K extends shared.ExtractStringKeys<shared.ICustomPlayerSyncedMeta>>(key: K, value: shared.ICustomPlayerSyncedMeta[K]): void;
    /** @deprecated See {@link "alt-shared".ICustomPlayerSyncedMeta} */
    setSyncedMeta<V extends any, K extends string = string>(key: K, value: shared.InterfaceValueByKey<shared.ICustomPlayerSyncedMeta, K, V, void>): void;
    deleteSyncedMeta(key: string): void;
    getSyncedMeta<K extends string>(key: Exclude<K, never>): unknown;
    getSyncedMeta<K extends shared.ExtractStringKeys<shared.ICustomPlayerSyncedMeta>>(key: K): shared.ICustomPlayerSyncedMeta[K];
    hasSyncedMeta(key: string): boolean;
    setStreamSyncedMeta<K extends string>(key: K, value: shared.InterfaceValueByKey<shared.ICustomPlayerStreamSyncedMeta, K, unknown, void>): void;
    setStreamSyncedMeta<K extends shared.ExtractStringKeys<shared.ICustomPlayerStreamSyncedMeta>>(key: K, value: shared.ICustomPlayerStreamSyncedMeta[K]): void;
    /** @deprecated See {@link "alt-shared".ICustomPlayerStreamSyncedMeta} */
    setStreamSyncedMeta<V extends any, K extends string = string>(key: K, value: shared.InterfaceValueByKey<shared.ICustomPlayerStreamSyncedMeta, K, V, void>): void;
    deleteStreamSyncedMeta(key: string): void;
    getStreamSyncedMeta<K extends string>(key: Exclude<K, never>): unknown;
    getStreamSyncedMeta<K extends shared.ExtractStringKeys<shared.ICustomPlayerStreamSyncedMeta>>(key: K): shared.ICustomPlayerStreamSyncedMeta[K];
    hasStreamSyncedMeta(key: string): boolean;
}
export declare class Vehicle extends Entity {
    constructor(model: string | number, x: number, y: number, z: number, rx: number, ry: number, rz: number, streamingDistance: number);
    constructor(model: string | number, pos: shared.IVector3, rot: shared.IVector3, streamingDistance: number);
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
     * Get the entity model hash.
     *
     * @example
     * ```js
     * const comparisonHash = alt.hash('infernus');
     * if (comparisonHash === someVehicle.model) {
     *     console.log('This vehicle is an infernus.');
     * } else {
     *     console.log('This vehicle is not an infernus.');
     * }
     * ```
     * @remarks Vehicle doesn't provide a setter.
     */
    get model(): number;
    /**
     * Gets or sets the active radio station.
     *
     * @example
     * ```js
     * const someVehicle = alt.Vehicle.all[0];
     * const stationNumber = someVehicle.activeRadioStation;
     * console.log(`Current Station: ${stationNumber}`);
     *
     * someVehicle.activeRadioStation = 255;
     * console.log(`Vehicle radio station was turned off.`);
     * ```
     */
    activeRadioStation: RadioStation;
    /**
     * Gets or sets the additional body health.
     */
    bodyAdditionalHealth: number;
    /**
     * Gets or sets the body health.
     */
    bodyHealth: number;
    /**
     * Gets or sets the custom primary color as a RGBA type.
     *
     * @example
     * ```js
     * const someVehicle = new alt.Vehicle('elegy', 0, 0, 0, 0, 0, 0);
     * someVehicle.customPrimaryColor = new alt.RGBA(255, 0, 0);
     * console.log(`Vehicle custom primary color was set to red`);
     * ```
     */
    customPrimaryColor: shared.RGBA;
    /**
     * Gets or sets the custom secondary color as a RGBA type.
     * @example
     * ```js
     * const someVehicle = new alt.Vehicle('elegy', 0, 0, 0, 0, 0, 0);
     * someVehicle.customSecondaryColor = new alt.RGBA(255, 0, 0);
     * console.log(`Vehicle custom secondary color was set to red`);
     * ```
     */
    customSecondaryColor: shared.RGBA;
    /**
     * Gets or sets if the vehicle instance has custom tires.
     */
    customTires: boolean;
    /**
     * Applies some decoration effects to the vehicle (e.g.: It makes the hydra looking rusty or applies snow to the front bumper of `policeold1`). Does not work on every vehicle model.
     *
     * @example
     * ```js
     * const someVehicle = new alt.Vehicle('elegy', 0, 0, 0, 0, 0, 0);
     * someVehicle.darkness = 500;
     * ```
     */
    darkness: number;
    /**
     * Gets or sets the dashboard color of the vehicle.
     *
     * Dash board colors range from 0 to 159.
     *
     * @example
     * ```js
     * const someVehicle = new alt.Vehicle('elegy', 0, 0, 0, 0, 0, 0);
     * someVehicle.dashboardColor = 139;
     * ```
     */
    dashboardColor: number;
    /**
     * Gets the current state of the daylights.
     *
     * @example
     * ```js
     * const someVehicle = new alt.Vehicle('elegy', 0, 0, 0, 0, 0, 0);
     * if (someVehicle.daylightOn) {
     *     console.log('Vehicle daylights are on');
     * } else {
     *     console.log('Vehicle daylights are off');
     * }
     * ```
     */
    readonly daylightOn: boolean;
    /**
     * Gets if a vehicle is destroyed.
     *
     * Destroyed is set to true when specific game activities cause the engine to stop.
     * Explosions, being underwater, crashing too much, etc.
     *
     * @example
     * ```js
     * const someVehicle = new alt.Vehicle('elegy', 0, 0, 0, 0, 0, 0);
     *
     * if (someVehicle.destroyed) {
     *    console.log(`The elegy has been destroyed.`);
     * }
     * ```
     *
     */
    readonly destroyed: boolean;
    /**
     * Gets or sets the dirt level of the vehicle.
     */
    dirtLevel: number;
    /**
     * Gets the current driver of the vehicle. It returns null, if there is no driver.
     *
     * @example
     * ```js
     * const someVehicle = new alt.Vehicle('elegy', 0, 0, 0, 0, 0, 0);
     * const driver = someVehicle.driver;
     *
     * if (driver) {
     *     console.log(`There is currently a player driving this car. ${driver.name}`);
     * }
     * ```
     *
     */
    readonly driver: Player;
    /**
     * Gets all passengers of the vehicle including the driver itself.
     *
     * @example
     * ```js
     * const someVehicle = new alt.Vehicle('elegy', 0, 0, 0, 0, 0, 0);
     * const passengers = someVehicle.passengers;
     *
     * for (const [seat, player] of Object.entries(passengers)) {
     *    alt.log(`Seat: ${seat} - Player: ${player.name}`);
     * }
     * ```
     *
     */
    readonly passengers: IVehiclePassenger;
    /**
     * Gets or sets the current engine health.
     *
     * Default maximum engine health is 1000.
     * The `vehicle.repair()` function should be used to repair a vehicle if the engine health is less than or equal to zero.
     *
     * This example demonstrates that when you drive through a ColShape it will repair the vehicle.
     *
     * @example
     * ```js
     * const someColShape = new alt.ColshapeCircle(-1295.9208984375, 86.0835189819336, 2);
     * someColShape.repairVehicles = true;
     *
     * alt.on('entityEnterColshape', (colshape, entity) => {
     *       // Check if the entity is a vehicle or not.
     *     if (!(entity instanceof alt.Vehicle)) {
     *        return;
     *     }
     *
     *     // Check if it's the right colshape to do this.
     *     if (!colshape.repairVehicles) {
     *        return;
     *     }
     *
     *     if (entity.destroyed) {
     *         entity.repair();
     *         console.log('Repaired Destroyed Vehicle');
     *         return;
     *     }
     *
     *     entity.engineHealth = 1000;
     *     console.log('Repaired Vehicle')
     * });
     * ```
     *
     */
    engineHealth: number;
    /**
     * Gets or sets the engine state of the vehicle.
     *
     * The functionality of the vehicle engine can be triggered on either client-side or server-side. If you want to trigger the engine on client-side use native.setVehicleEngineOn.
     *
     * @example
     * ```js
     * const vehicle = new alt.Vehicle('elegy', 0, 0, 0, 0, 0, 0);
     * vehicle.engineOn = true;
     * ```
     */
    engineOn: boolean;
    /**
     * Gets if a flamethrower of a vehicle is active on vehicle models like `cerberus`.
     */
    readonly flamethrowerActive: boolean;
    /**
     * Gets if the handbrake of a car is active.
     */
    readonly handbrakeActive: boolean;
    /**
     * Gets if the car has armored windows.
     */
    readonly hasArmoredWindows: boolean;
    /**
     * Gets or sets the headlight color of a vehicle.
     */
    headlightColor: number;
    /**
     * Gets or sets the interior color of a vehicle.
     */
    interiorColor: number;
    /**
     * Gets or sets the lights intensity and distance of a vehicle.
     */
    lightsMultiplier: number;
    /**
     * Gets or sets the livery of a vehicle.
     */
    livery: number;
    /**
     * Gets or sets the lock state of a vehicle.
     */
    lockState: shared.VehicleLockState;
    /**
     * Enables or disables the manual engine control.
     */
    manualEngineControl: boolean;
    /**
     * Gets or sets the current mod kit of a vehicle.
     */
    modKit: number;
    /**
     * Gets the maximum amount of vehicle mod kits available.
     */
    readonly modKitsCount: number;
    /**
     * Enables or disables a neon light on a specific position.
     */
    neon: IVehicleNeon;
    /**
     * Gets or sets the color of the neon lights.
     */
    neonColor: shared.RGBA;
    /**
     * Gets the current state of the nightlights.
     */
    readonly nightlightOn: boolean;
    /**
     * Gets or sets the current number plate style.
     */
    numberPlateIndex: NumberPlateStyle;
    /**
     * Gets or sets the current text displayed on the number plate.
     */
    numberPlateText: string;
    /**
     * Gets or sets the pearl color of a vehicle.
     */
    pearlColor: number;
    /**
     * Gets or sets the current health amount of the petrol tank.
     */
    petrolTankHealth: number;
    /**
     * Gets or sets the current primary color of a vehicle.
     */
    primaryColor: number;
    /**
     * Gets how often a vehicle got repaired.
     */
    readonly repairsCount: number;
    /**
     * Gets or sets the roof livery of a vehicle.
     */
    roofLivery: number;
    /**
     * Gets or sets the roof state of a vehicle (closed or open).
     *
     * @deprecated Use {@link roofClosed} instead.
     */
    roofState: boolean;
    /**
     * Opens or closes the vehicle roof (if vehicle has this feature, otherwise it is always `true`).
     *
     * @example
     * ```js
     * const surano = new alt.Vehicle('surano', 0, 0, 72, 0, 0, 0);
     * surano.roofClosed = false; // Hides the roof of the car
     * ```
     */
    roofClosed: boolean;
    /**
     * Gets or sets the current secondary color.
     */
    secondaryColor: number;
    /**
     * Gets or sets the siren state of a vehicle.
     */
    sirenActive: boolean;
    /**
     * Gets or sets the color of the tire smoke.
     */
    tireSmokeColor: shared.RGBA;
    /**
     * Gets or sets the wheel color.
     */
    wheelColor: number;
    /**
     * Gets the amount of wheels of a vehicle.
     */
    readonly wheelsCount: number;
    /**
     * Gets the wheel type.
     */
    readonly wheelType: number;
    /**
     * Gets the type of the front wheels.
     */
    readonly frontWheels: number;
    /**
     * Gets the type of the rear wheels.
     */
    readonly rearWheels: number;
    /**
     * Gets or sets the window tint of a vehicle.
     */
    windowTint: WindowTint;
    /**
     * Gets a vehicle that is attached to the vehicle instance.
     */
    readonly attached: Vehicle;
    /**
     * Gets a vehicle where the vehicle is attached to.
     */
    readonly attachedTo: Vehicle;
    /**
     * Gets the velocity vector of a vehicle.
     */
    readonly velocity: shared.Vector3;
    /**
     * Gets or sets the drift mode state of the vehicle.
     */
    driftModeEnabled: boolean;
    /**
     * Gets or sets the vehicles rotation with a quaternion.
     */
    quaternion: shared.Quaternion;
    /**
     * Gets or sets if the created train is a mission train.
     */
    isMissionTrain: boolean;
    /**
     * Gets or sets the track id of the train.
     *
     * @remarks Valid track ids are between 0 and 11.
     */
    trainTrackId: number;
    /**
     * Gets the engine of the train.
     */
    readonly trainEngineId: Vehicle;
    /**
     * Gets or sets the trains config index.
     *
     * @remarks You can find a list of all possible config indices in the trains.xml. Valid indices are between 1 and 25.
     */
    trainConfigIndex: number;
    /**
     * Gets or sets the distance of the trains to the engine.
     */
    trainDistanceFromEngine: number;
    /**
     * Gets or sets if the train is the engine of the train.
     */
    isTrainEngine: boolean;
    /**
     * Gets or sets if the train is a caboose.
     */
    isTrainCaboose: boolean;
    /**
     * Gets or sets if the train is a passenger carriage.
     */
    trainPassengerCarriages: boolean;
    /**
     * Gets or sets the direction of the train.
     */
    trainDirection: boolean;
    /**
     * Gets or sets if the trains is rendered derailed.
     */
    trainRenderDerailed: boolean;
    /**
     * Gets or sets if the doors of the trains should be forced open.
     */
    trainForceDoorsOpen: boolean;
    /**
     * Gets or sets the cruise speed of the train.
     */
    trainCruiseSpeed: number;
    /**
     * Gets or sets the config index of the train's carriage.
     */
    trainCarriageConfigIndex: number;
    /**
     * Gets another train that is linked to the back of the train. Returns null if there is no linked train.
     */
    readonly trainLinkedToBackwardId: Vehicle;
    /**
     * Gets another train that is linked to the back of the train. Returns null if there is no linked train in front.
     */
    readonly trainLinkedToForwardId: Vehicle;
    trainUnk1: boolean;
    trainUnk2: boolean;
    trainUnk3: boolean;
    /**
     * Gets or sets the status of the boat anchor.
     */
    boatAnchorActive: boolean;
    lightState: number;
    hornActive: boolean;
    readonly timedExplosionTime: number;
    readonly timedExplosionCulprit: Player;
    readonly hasTimedExplosion: boolean;
    rocketRefuelSpeed: number;
    counterMeasureCount: number;
    /**
     * @remarks Value is in meters per second.
     */
    scriptMaxSpeed: number;
    hybridExtraActive: boolean;
    hybridExtraState: number;
    readonly steeringAngle: number;
    readonly accelerationLevel: number;
    readonly brakeLevel: number;
    /**
     * Retrieves the vehicle from the pool.
     *
     * @param id The id of the vehicle.
     * @returns Vehicle if it was found, otherwise null.
     */
    static getByID(id: number): Vehicle;
    /**
     * Returns if a specific wheel has a tire.
     *
     * @param wheelId The specific wheel based on the id
     * @returns True when the wheel has a tire, otherwise false.
     */
    doesWheelHasTire(wheelId: number): boolean;
    /**
     * Returns the appearance of a vehicle as a base64 string.
     *
     * @returns A base64 string.
     */
    getAppearanceDataBase64(): string;
    /**
     * Returns the health of a specific armored window.
     *
     * @param windowId The window id.
     * @returns The amount of health.
     */
    getArmoredWindowHealth(windowId: number): number;
    /**
     * Returns the amount of shoots that a specific armoured window received.
     *
     * @param windowId The window id.
     * @returns The amount of shoots that a window received.
     */
    getArmoredWindowShootCount(windowId: number): number;
    /**
     * Returns the damage level of a specific bumper.
     *
     * @param bumperId The id of a bumper.
     * @returns The damage level of a bumper.
     */
    getBumperDamageLevel(bumperId: VehicleBumper): VehicleBumperDamage;
    /**
     * Returns the damage status of a vehicle as a base64 string.
     *
     * @returns A base64 string of the damage status.
     */
    getDamageStatusBase64(): string;
    /**
     * Returns the state of a specific door.
     *
     * @param doorId The id of the door.
     * @returns The state of the door.
     */
    getDoorState(doorId: VehicleDoor): VehicleDoorState;
    /**
     * Returns the state of a specific extra of a vehicle.
     *
     * @remarks Extras are not available on every vehicle model.
     *
     * @param extraId The id of the extra.
     * @returns True when the extra is enabled, otherwise false.
     */
    getExtra(extraId: number): boolean;
    /**
     * Returns the game state data of a vehicle as a base64 string.
     *
     * @returns A base64 string of the game state data.
     */
    getGamestateDataBase64(): string;
    /**
     * Returns the health data of a vehicle as a base64 string.
     *
     * @returns A base64 string of the health data.
     */
    getHealthDataBase64(): string;
    /**
     * Returns the mod value for a specific mod type.
     *
     * @param modType The id of the mod type.
     * @returns The value of the mod type.
     */
    getMod(modType: VehicleModType): number;
    /**
     * Returns the amount of possible mod values for a specific mod type.
     *
     * @param modType The id of the mod type.
     * @returns The amount of possible mod values of a mod type.
     */
    getModsCount(modType: VehicleModType): number;
    /**
     * Returns the amount of bullet holes of a vehicle part.
     *
     * @param partId The id of a vehicle part.
     * @returns The amount of bullet holes of a vehicle part.
     */
    getPartBulletHoles(partId: VehiclePart): number;
    /**
     * Returns the damage level of a vehicle part.
     *
     * @param partId The id of a vehicle part.
     * @returns The damage level of a vehicle part.
     */
    getPartDamageLevel(partId: VehiclePart): VehiclePartDamage;
    /**
     * Returns the script data of a vehicle as a base64 string.
     *
     * @returns A base64 string of the script data.
     */
    getScriptDataBase64(): string;
    /**
     * Returns the health of a specific wheel.
     *
     * @param wheelId The id of the wheel.
     * @returns The amount of health of a specific wheel.
     */
    getWheelHealth(wheelId: number): number;
    /**
     * Returns if a specific light is damaged.
     *
     * @param lightId The id of the light.
     * @returns True if the light is damaged, otherwise false.
     */
    isLightDamaged(lightId: number): boolean;
    /**
     * Returns if a specific special light is damaged.
     *
     * @param specialLightId The id of the special light.
     * @returns True if the special light is damaged, otherwise false.
     */
    isSpecialLightDamaged(specialLightId: number): boolean;
    /**
     * Returns if a specific wheel is burst.
     *
     * @param wheelId The id of the wheel.
     * @returns True if the wheel is burst, otherwise false.
     */
    isWheelBurst(wheelId: number): boolean;
    /**
     * Returns if a specific wheel is detached.
     *
     * @param wheelId The id of the wheel.
     * @returns True if the wheel is detached, otherwise false.
     */
    isWheelDetached(wheelId: number): boolean;
    /**
     * Returns if a specific wheel is on fire.
     *
     * @param wheelId The id of the wheel.
     * @returns True if the wheel is on fire, otherwise false.
     */
    isWheelOnFire(wheelId: number): boolean;
    /**
     * Returns if a specific window is damaged.
     *
     * @param windowId The id of the window.
     * @returns True if the window is damaged, otherwise false.
     */
    isWindowDamaged(windowId: number): boolean;
    /**
     * Returns if a specific window is open.
     *
     * @param windowId The id of the window.
     * @returns True if the window is open, otherwise false.
     */
    isWindowOpened(windowId: number): boolean;
    /**
     * Repairs the vehicle.
     *
     * @remarks At present this function is **unstable**,
     * consider recreating the vehicle instead.
     * * https://github.com/altmp/altv-issues/issues/1748
     * * https://github.com/altmp/altv-issues/issues/1184
     * * https://github.com/altmp/altv-issues/issues/1445
     * * https://github.com/altmp/altv-issues/issues/1426
     */
    repair(): void;
    /**
     * Sets the appearance of a vehicle with a base64 string.
     *
     * @param data The base64 string of the appearance data.
     */
    setAppearanceDataBase64(data: string): void;
    /**
     * Sets the health of a specific armored window.
     *
     * @param windowId The id of the window.
     * @param health The amount of health.
     */
    setArmoredWindowHealth(windowId: number, health: number): void;
    /**
     * Sets the shoot count of a specific armoured window.
     *
     * @param windowId The id of the window.
     * @param count The amount of shoots.
     */
    setArmoredWindowShootCount(windowId: number, count: number): void;
    /**
     * Sets the damage level of a specific bumper.
     *
     * @param bumperId The id of the bumper.
     * @param level The damage level.
     */
    setBumperDamageLevel(bumperId: VehicleBumper, level: VehicleBumperDamage): void;
    /**
     * Sets the damage status of a vehicle based on a base64 string.
     *
     * @param data A base64 string that represents the damage status.
     */
    setDamageStatusBase64(data: string): void;
    /**
     * Sets the state of a specific door
     *
     * @param doorId The id of the door.
     * @param state The state of the door.
     */
    setDoorState(doorId: VehicleDoor, state: VehicleDoorState): void;
    /**
     * Sets the state of an extra of a vehicle.
     *
     * @remarks Setting extras on vehicle does not work for every vehicle model. For example you can change the light bar of a police car with this method.
     *
     * @param extraId The id of the extra.
     * @param state The state of the extra.
     */
    setExtra(extraId: number, state: boolean): void;
    /**
     * Sets the game state data of a vehicle with a given base64 string.
     *
     * @param data A base64 string that represents the game state data.
     */
    setGamestateDataBase64(data: string): void;
    /**
     * Sets the health data of a vehicle with a given base64 string.
     *
     * @param data A base64 string that represents the health data.
     */
    setHealthDataBase64(data: string): void;
    /**
     * Sets a specific light of the vehicle either damaged or not.
     *
     * @param lightId The id of the light.
     * @param isDamaged True to damage the specific light, otherwise false.
     */
    setLightDamaged(lightId: number, isDamaged: boolean): void;
    /**
     * Applies a specific mod of a given mod type.
     *
     * @param modType The type of the mod.
     * @param modId The id of the mod.
     */
    setMod(modType: VehicleModType, modId: number): void;
    /**
     * Applies bullet holes to a specific vehicle part.
     *
     * @param partId The id of the part.
     * @param count The amount of bullet holes.
     */
    setPartBulletHoles(partId: VehiclePart, count: number): void;
    /**
     * Sets the damage level of a vehicle part.
     *
     * @param partId The id of the part.
     * @param level The damage level.
     */
    setPartDamageLevel(partId: VehiclePart, level: VehiclePartDamage): void;
    /**
     * Sets type of the rear wheels.
     *
     * @param wheelId The id of the rear wheel type.
     */
    setRearWheels(wheelId: number): void;
    /**
     * Sets the script data of a vehicle based on a base64 string.
     *
     * @param data A base64 string that represents the script data.
     */
    setScriptDataBase64(data: string): void;
    /**
     * Sets if a special light is damaged.
     *
     * @param specialLightId The id of the special light.
     * @param isDamaged True to damage the specific special light, otherwise false.
     */
    setSpecialLightDamaged(specialLightId: number, isDamaged: boolean): void;
    /**
     * Sets if a specific wheel is burst.
     *
     * @param wheelId The id of the wheel.
     * @param state True to burst the wheel, otherwise false.
     */
    setWheelBurst(wheelId: number, state: boolean): void;
    /**
     * Sets a wheel either detached or attached.
     *
     * @param wheelId The id of the wheel.
     * @param state True to detach the wheel, otherwise false.
     */
    setWheelDetached(wheelId: number, state: boolean): void;
    /**
     * Sets if a specific wheel has a tire.
     *
     * @param wheelId The id of the wheel.
     * @param state True to apply a tire to a wheel, otherwise false.
     */
    setWheelHasTire(wheelId: number, state: boolean): void;
    /**
     * Sets the health of a specific wheel.
     *
     * @param wheelId The id of the wheel.
     * @param health The health of the wheel.
     */
    setWheelHealth(wheelId: number, health: number): void;
    /**
     * Sets a wheel either on fire or not
     *
     * @param wheelId The id of the wheel.
     * @param state True to set the wheel on fire, otherwise false.
     */
    setWheelOnFire(wheelId: number, state: boolean): void;
    /**
     * Applies a wheel style based on the type and variation.
     *
     * @param wheelType The type of the wheel.
     * @param wheelId The variation id of the wheel.
     */
    setWheels(wheelType: number, wheelId: number): void;
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
    /**
     * Sets if a specific window is damaged.
     *
     * @param windowId The id of the window.
     * @param isDamaged True to damage the specific window, otherwise false.
     */
    setWindowDamaged(windowId: number, isDamaged: boolean): void;
    /**
     * Sets if a specific window is open.
     *
     * @param windowId The id of the window.
     * @param state True to open the window, otherwise false.
     */
    setWindowOpened(windowId: number, state: boolean): void;
    /**
     * Repairs a specific wheel.
     *
     * @param wheelId The id of the wheel.
     */
    setWheelFixed(wheelId: number): void;
    /**
     * Set a train as an engine of a train.
     *
     * @param vehicle The vehicle to set as an engine.
     */
    setTrainEngineId(vehicle: Vehicle): void;
    /**
     * Links another train to the back of the train.
     *
     * @param vehicle The vehicle to set as linked to the back of the train.
     */
    setTrainLinkedToBackwardId(vehicle: Vehicle): void;
    /**
     * Links another train to the front of the train.
     *
     * @param vehicle The vehicle to set as linked to the front of the train.
     */
    setTrainLinkedToForwardId(vehicle: Vehicle): void;
    /**
     * Activates the searchlight and follows the target.
     *
     * @remarks Entity parameter isn't working for now and this can only be used for helicopter searchlights.
     */
    setSearchLightTo(entity: Entity, state: boolean): void;
    setTimedExplosion(state: boolean, culprit: Player, time: number): void;
    getWeaponCapacity(weaponIndex: number): number;
    setWeaponCapacity(weaponIndex: number, capacity: number): void;
    setBadge(textureDictionary: number, texture: number, pos: VehicleBadgePosition, pos2: VehicleBadgePosition, pos3: VehicleBadgePosition, pos4: VehicleBadgePosition): void;
    setMeta<K extends string>(key: K, value: shared.InterfaceValueByKey<ICustomVehicleMeta, K, unknown, void>): void;
    setMeta<K extends shared.ExtractStringKeys<ICustomVehicleMeta>>(key: K, value: ICustomVehicleMeta[K]): void;
    /** @deprecated See {@link ICustomVehicleMeta} */
    setMeta<V extends any, K extends string = string>(key: K, value: shared.InterfaceValueByKey<ICustomVehicleMeta, K, V, void>): void;
    deleteMeta(key: string): void;
    getMeta<K extends string>(key: Exclude<K, never>): unknown;
    getMeta<K extends shared.ExtractStringKeys<ICustomVehicleMeta>>(key: K): ICustomVehicleMeta[K];
    hasMeta(key: string): boolean;
    setSyncedMeta<K extends string>(key: K, value: shared.InterfaceValueByKey<shared.ICustomVehicleSyncedMeta, K, unknown, void>): void;
    setSyncedMeta<K extends shared.ExtractStringKeys<shared.ICustomVehicleSyncedMeta>>(key: K, value: shared.ICustomVehicleSyncedMeta[K]): void;
    /** @deprecated See {@link "alt-shared".ICustomVehicleSyncedMeta} */
    setSyncedMeta<V extends any, K extends string = string>(key: K, value: shared.InterfaceValueByKey<shared.ICustomVehicleSyncedMeta, K, V, void>): void;
    deleteSyncedMeta(key: string): void;
    getSyncedMeta<K extends string>(key: Exclude<K, never>): unknown;
    getSyncedMeta<K extends shared.ExtractStringKeys<shared.ICustomVehicleSyncedMeta>>(key: K): shared.ICustomVehicleSyncedMeta[K];
    hasSyncedMeta(key: string): boolean;
    setStreamSyncedMeta<K extends string>(key: K, value: shared.InterfaceValueByKey<shared.ICustomVehicleStreamSyncedMeta, K, unknown, void>): void;
    setStreamSyncedMeta<K extends shared.ExtractStringKeys<shared.ICustomVehicleStreamSyncedMeta>>(key: K, value: shared.ICustomVehicleStreamSyncedMeta[K]): void;
    /** @deprecated See {@link "alt-shared".ICustomVehicleStreamSyncedMeta} */
    setStreamSyncedMeta<V extends any, K extends string = string>(key: K, value: shared.InterfaceValueByKey<shared.ICustomVehicleStreamSyncedMeta, K, V, void>): void;
    deleteStreamSyncedMeta(key: string): void;
    getStreamSyncedMeta<K extends string>(key: Exclude<K, never>): unknown;
    getStreamSyncedMeta<K extends shared.ExtractStringKeys<shared.ICustomVehicleStreamSyncedMeta>>(key: K): shared.ICustomVehicleStreamSyncedMeta[K];
    hasStreamSyncedMeta(key: string): boolean;
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
    routeColor: shared.RGBA;
    sprite: shared.BlipSprite;
    /**
     * @remarks Does't properly work for areablips currently.
     */
    size: shared.Vector2;
    scale: number;
    color: number | shared.BlipColor.White | shared.BlipColor.Red | shared.BlipColor.Green | shared.BlipColor.Blue | shared.BlipColor.LightRed | shared.BlipColor.Violet | shared.BlipColor.Pink | shared.BlipColor.LightOrange | shared.BlipColor.LightBrown | shared.BlipColor.LightGreen | shared.BlipColor.LightBlue | shared.BlipColor.LightPurple | shared.BlipColor.DarkPurple | shared.BlipColor.Cyan | shared.BlipColor.LightYellow | shared.BlipColor.Organe | shared.BlipColor.GraniteGreen | shared.BlipColor.DarkBrown | shared.BlipColor.LightGray | shared.BlipColor.LightPink | shared.BlipColor.LemonGreen | shared.BlipColor.ForestGreen | shared.BlipColor.ElectricBlue | shared.BlipColor.BrightPurple | shared.BlipColor.DarkYellow | shared.BlipColor.PinkRed | shared.BlipColor.Orange | shared.BlipColor.BrilliantRose | shared.BlipColor.Salmon | shared.BlipColor.DarkGreen | shared.BlipColor.BlizzardBlue | shared.BlipColor.OracleBlue | shared.BlipColor.Silver | shared.BlipColor.MulberryPink | shared.BlipColor.AltoGray | shared.BlipColor.JellyBeanBlue | shared.BlipColor.DarkOrange | shared.BlipColor.Mamba;
    secondaryColor: number | shared.RGBA;
    alpha: number;
    flashTimer: number;
    flashInterval: number;
    route: boolean;
    bright: boolean;
    number: number;
    display: number;
    showCone: boolean;
    flashes: boolean;
    flashesAlternate: boolean;
    shortRange: boolean;
    priority: number;
    heading: number;
    gxtName: string;
    name: string;
    pulse: boolean;
    asMissionCreator: boolean;
    tickVisible: boolean;
    headingIndicatorVisible: boolean;
    outlineIndicatorVisible: boolean;
    friendIndicatorVisible: boolean;
    crewIndicatorVisible: boolean;
    category: number;
    highDetail: boolean;
    shrinked: boolean;
    attachedTo: Entity;
    visible: boolean;
    blipType: shared.BlipType;
    isFriendly: boolean;
    readonly isAttached: boolean;
    isGlobal: boolean;
    readonly targets: readonly Player[];
    /**
     * Retrieves the blip from the pool.
     *
     * @param id The id of the blip.
     * @returns Entity if it was found, otherwise null.
     *
     */
    static getByID(id: number): Blip;
    fade(opacity: number, duration: number): void;
    addTarget(player: Player): void;
    removeTarget(player: Player): void;
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
    constructor(x: number, y: number, z: number, width: number, height: number, global: boolean);
}
export declare class RadiusBlip extends Blip {
    constructor(x: number, y: number, z: number, radius: number, global: boolean);
}
export declare class PointBlip extends Blip {
    constructor(x: number, y: number, z: number, global: boolean);
    constructor(pos: shared.Vector3, global: boolean);
    constructor(entity: Entity, global: boolean);
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
     *
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
export declare class Checkpoint extends Colshape {
    constructor(type: shared.CheckpointType, x: number, y: number, z: number, radius: number, height: number, r: number, g: number, b: number, a: number, streamingDistance: number);
    constructor(type: shared.CheckpointType, pos: shared.IVector3, radius: number, height: number, color: shared.RGBA, streamingDistance: number);
    /**
     * Streaming range for the checkpoint
     */
    readonly streamingDistance: number;
    static readonly all: readonly Checkpoint[];
    static readonly count: number;
    visible: boolean;
    /**
     * Retrieves the checkpoint from the pool.
     *
     * @param id The id of the checkpoint.
     * @returns Entity if it was found, otherwise null.
     *
     */
    static getByID(id: number): Checkpoint;
    deleteMeta(key: string): void;
    hasMeta(key: string): boolean;
    getMeta<K extends string>(key: Exclude<K, never>): unknown;
    setMeta<K extends string>(key: K, value: shared.InterfaceValueByKey<ICustomCheckpointMeta, K, unknown, void>): void;
    setMeta<K extends shared.ExtractStringKeys<ICustomCheckpointMeta>>(key: K, value: ICustomCheckpointMeta[K]): void;
    setStreamSyncedMeta<K extends string>(key: K, value: shared.InterfaceValueByKey<shared.ICustomCheckpointStreamSyncedMeta, K, unknown, void>): void;
    setStreamSyncedMeta<K extends shared.ExtractStringKeys<shared.ICustomCheckpointStreamSyncedMeta>>(key: K, value: shared.ICustomCheckpointStreamSyncedMeta[K]): void;
    deleteStreamSyncedMeta(key: string): void;
    getStreamSyncedMeta<K extends string>(key: Exclude<K, never>): unknown;
    hasStreamSyncedMeta(key: string): boolean;
    getStreamSyncedMetaKeys(): readonly string[];
}
export declare namespace Utils {
    function getClosestPlayer(options: {
        pos: import("alt-shared").IVector3;
        range?: number;
    }): import("alt-server").Player;
    function getClosestVehicle(options: {
        pos: import("alt-shared").IVector3;
        range?: number;
    }): import("alt-server").Vehicle;
}
export declare class VoiceChannel extends BaseObject {
    constructor(isSpatial: boolean, maxDistance: number);
    readonly maxDistance: number;
    readonly isSpatial: boolean;
    /**
     * Priority of voice channel.
     * If a player is in two channels and both can be heard by another player, only one should play the voice.
     * Value is of type integer, can be negative.
     */
    priority: number;
    /**
     * Hash of the filter name (should also be created on clientside).
     * See docs: [Audio filters](https://docs.altv.mp/articles/audio_filters.html), [Voice](https://docs.altv.mp/articles/voice.html).
     */
    filter: number;
    readonly players: readonly Player[];
    readonly playerCount: number;
    addPlayer(player: Player): void;
    isPlayerInChannel(player: Player): boolean;
    isPlayerMuted(player: Player): boolean;
    mutePlayer(player: Player): void;
    removePlayer(player: Player): void;
    unmutePlayer(player: Player): void;
    deleteMeta(key: string): void;
    hasMeta(key: string): boolean;
    getMeta<K extends string>(key: Exclude<K, never>): unknown;
    getMeta<K extends shared.ExtractStringKeys<ICustomVoiceChannelMeta>>(key: K): ICustomVoiceChannelMeta[K];
    setMeta<K extends string>(key: K, value: shared.InterfaceValueByKey<ICustomVoiceChannelMeta, K, unknown, void>): void;
    setMeta<K extends shared.ExtractStringKeys<ICustomVoiceChannelMeta>>(key: K, value: ICustomVoiceChannelMeta[K]): void;
    /** @deprecated See {@link ICustomVoiceChannelMeta} */
    setMeta<V extends any, K extends string = string>(key: K, value: shared.InterfaceValueByKey<ICustomVoiceChannelMeta, K, V, void>): void;
}
export declare class Resource extends shared.Resource {
    readonly path: string;
    static readonly all: readonly Resource[];
    static readonly current: Resource;
    static getByName(name: string): Resource;
}
export declare class Utils extends shared.Utils {
    constructor();
}
export declare class Ped extends Entity {
    constructor(model: string | number, position: shared.IVector3, rotation: shared.IVector3, streamingDistance: number);
    static readonly all: readonly Ped[];
    static readonly count: number;
    currentWeapon: number;
    health: number;
    maxHealth: number;
    armour: number;
    /**
     * Retrieves the ped from the pool.
     *
     * @param id The id of the ped.
     * @returns Entity if it was found, otherwise null.
     */
    static getByID(id: number): Ped;
}
export declare class Object extends Entity {
    constructor(model: string | number, position: shared.IVector3, rotation: shared.IVector3, alpha: number, textureVariation: number, lodDistance: number, streamingDistance: number);
    static readonly all: readonly Object[];
    static readonly count: number;
    /** Object transparency, values are between 0 and 255. (0 being fully transparent) */
    alpha: number;
    textureVariation: number;
    /** The distance at which the LOD model of the object starts being applied. */
    lodDistance: number;
    activatePhysics(): void;
    /** Places the object properly on the ground. */
    placeOnGroundProperly(): void;
    static getByID(id: number): Object;
}
export declare class Marker extends WorldObject {
    constructor(type: shared.MarkerType, position: shared.Vector3, color: shared.RGBA);
    static readonly all: readonly Marker[];
    visible: boolean;
    markerType: shared.MarkerType;
    color: shared.RGBA;
    scale: shared.Vector3;
    rot: shared.Vector3;
    dir: shared.Vector3;
    readonly isGlobal: boolean;
    readonly target: Player;
    faceCamera: boolean;
    /**
     * Retrieves the marker from the pool.
     *
     * @param id The id of the marker.
     * @returns Entity if it was found, otherwise null.
     */
    static getByID(id: number): Marker;
}
export * from "alt-shared";
