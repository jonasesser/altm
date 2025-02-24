// Stub für index.d.ts

import { Vector3, BodyPart, VoiceConnectionState, ModelType, ICustomBaseObjectMeta as ICustomBaseObjectMeta_1, IVector3, InterfaceValueByKey, ICustomGlobalSyncedMeta, ExtractStringKeys, ICustomServerClientEvent, ICustomClientServerRpc, ICustomClientServerEvent, EventParameters, BaseObject as BaseObject_1, BaseObjectType, MetaValues, ICustomBaseObjectSyncedMeta, ICustomVirtualEntityStreamSyncedMeta, ICustomEntitySyncedMeta, ICustomEntityStreamSyncedMeta, IWeapon, ICustomServerClientRpc, RGBA, ICustomPlayerLocalMeta, ICustomPlayerSyncedMeta, ICustomPlayerStreamSyncedMeta, VehicleLockState, Quaternion, ICustomVehicleSyncedMeta, ICustomVehicleStreamSyncedMeta, BlipSprite, Vector2, BlipColor, BlipType, ColShapeType, IVector2, CheckpointType, ICustomCheckpointStreamSyncedMeta, Resource as Resource_1, Utils as Utils_1, MarkerType } from "alt-shared";
export type DateTimeHour = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23;
export type DateTimeMinute = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 | 54 | 55 | 56 | 57 | 58 | 59;
export type DateTimeSecond = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 | 54 | 55 | 56 | 57 | 58 | 59;
export type DateTimeDay = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30;
export type DateTimeMonth = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
export enum ExplosionType {
    Grenade,
    GrenadeLauncher,
    StickyBomb,
    Molotov,
    Rocket,
    TankShell,
    HiOctane,
    Car,
    Plane,
    PetrolPump,
    Bike,
    DirSteam,
    DirFlame,
    DirWaterHydrant,
    DirGasCanister,
    Boat,
    ShipDestroy,
    Truck,
    Bullet,
    SmokeGrenadeLauncher,
    SmokeGrenade,
    BzGas,
    Flare,
    GasCanister,
    Extinguisher,
    ProgrammableAr,
    Train,
    Barrel,
    Propane,
    Blimp,
    DirFlameExplode,
    Tanker,
    PlaneRocket,
    VehicleBullet,
    GasTank,
    Firework,
    Snowball,
    ProxMine,
    ValkyrieCannon,
    Unknown = -1,
  }
export enum RadioStation {
    LosSantosRockRadio,
    NonStopPopFm,
    RadioLosSantos,
    ChannelX,
    WestCoastTalkRadio,
    RebelRadio,
    SoulwaxFm,
    EastLosFm,
    WestCoastClassics,
    BlaineCountyRadio,
    TheBlueArk,
    WorldWideFm,
    FlyloFm,
    TheLowdown,
    RadioMirrorPark,
    Space,
    VinewoodBoulevardRadio,
    SelfRadio,
    TheLab,
    RadioOff = 255,
  }
export enum NumberPlateStyle {
    BlueWhite,
    YellowBlack,
    YellowBlue,
    BlueWhite2,
    BlueWhite3,
    Yankton,
  }
export enum VehicleBumper {
    Front,
    Rear,
  }
export enum VehicleBumperDamage {
    NotDamaged,
    Damaged,
    None,
  }
export enum VehicleDoor {
    DriverFront,
    PassengerFront,
    DriverRear,
    PassengerRear,
    Hood,
    Trunk,
  }
export enum VehicleDoorState {
    Closed,
    OpenedLevel1,
    OpenedLevel2,
    OpenedLevel3,
    OpenedLevel4,
    OpenedLevel5,
    OpenedLevel6,
    OpenedLevel7,
    Unknown = 255,
  }
export enum VehicleModType {
    Spoiler,
    FrontBumper,
    RearBumper,
    SideSkirt,
    Exhaust,
    Frame,
    Grille,
    Hood,
    Fender,
    RightFender,
    Roof,
    Engine,
    Brakes,
    Transmission,
    Horn,
    Suspension,
    Armor,
    Unk1,
    Turbo,
    Unk2,
    TireSmoke,
    Unk3,
    XenonLights,
    FrontWheels,
    BackWheels,
    Plateholder,
    VanityPlates,
    TrimDesign,
    Ornaments,
    Dashboard,
    Dial,
    DoorSpeaker,
    Seats,
    SteeringWheel,
    ColumnShifterLeavers,
    Plaques,
    Speakers,
    Trunk,
    Hydraulics,
    EngineBlock,
    AirFilter,
    Struts,
    ArchCover,
    Aerials,
    Trim,
    Tank,
    Windows,
    Unk4,
    Livery,
  }
export enum VehiclePart {
    FrontLeft,
    FrontRight,
    MiddleLeft,
    MiddleRight,
    RearLeft,
    RearRight,
  }
export enum VehiclePartDamage {
    NotDamaged,
    DamagedLevel1,
    DamagedLevel2,
    DamagedLevel3,
  }
export enum WeatherType {
    ExtraSunny,
    Clear,
    Clouds,
    Smog,
    Foggy,
    Overcast,
    Rain,
    Thunder,
    Clearing,
    Neutral,
    Snow,
    Blizzard,
    Snowlight,
    Xmas,
    Halloween,
  }
export enum WindowTint {
    None,
    PureBlack,
    DarkSmoke,
    LightSmoke,
    Stock,
    Limo,
    Green,
  }
export enum BaseObjectFilterType {
    Player = 1,
    Vehicle = 2,
    Ped = 4,
    Object = 8,
  }
export enum Benefit {
    None,
    CloudAuth,
  }
export enum CloudAuthResult {
    Success,
    NoBenefit,
    VerifyFailed,
  }
export interface VehicleBadgePosition {
  active: boolean;
  alpha: number;
  size: number;
  boneIndex: number;
  offset: Vector3;
  direction: Vector3;
  side: Vector3;
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

export enum ConnectDeniedReason {
    WRONG_VERSION,
    WRONG_BRANCH,
    DEBUG_NOT_ALLOWED,
    WRONG_PASSWORD,
    WRONG_CDN_URL,
  }
export interface IServerEvent {
  anyResourceError: (resourceName: string) => void;
  anyResourceStart: (resourceName: string) => void;
  anyResourceStop: (resourceName: string) => void;
  consoleCommand: (name: string, ...args: string[]) => void;
  entityEnterColshape: (colshape: Colshape, entity: Entity) => void;
  entityLeaveColshape: (colshape: Colshape, entity: Entity) => void;
  explosion: (source: Player, type: ExplosionType, pos: Vector3, fx: number, target: Entity) => boolean | void;
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
  weaponDamage: (source: Player, target: Entity, weaponHash: number, damage: number, offset: Vector3, bodyPart: BodyPart, sourceEntity: Entity) => number | boolean | void;
  startFire: (player: Player, fires: IFireInfo[]) => boolean | void;
  startProjectile: (player: Player, pos: Vector3, dir: Vector3, ammoHash: number, weaponHash: number) => boolean | void;
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
  voiceConnection: (state: VoiceConnectionState) => void;
    /**
     * @remarks You need to return true, otherwise the scene will not be synced.
     */
  requestSyncedScene: (source: Player, sceneID: number) => boolean | void;
    /**
     * @remarks You need to return true, otherwise the scene will not be synced.
     */
  startSyncedScene: (source: Player, sceneID: number, startPos: Vector3, startRot: Vector3, animDictHash: number, entityAnimPairs: { entity: BaseObject; animHash: number; }[]) => boolean | void;
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
  clientRequestObject: (player: Player, model: number, position: Vector3) => boolean | void;
  playerHeal: (player: Player, oldHealth: number, newHealth: number, oldArmour: number, newArmour: number) => void;
  givePedScriptedTask: (source: Player, target: Ped, task: number) => boolean | void;
  pedDamage: (ped: Ped, attacker: Entity, healthDamage: number, armourDamage: number, weapon: number) => boolean | void;
  pedDeath: (ped: Ped, killer: Entity, weaponHash: number) => boolean | void;
  pedHeal: (ped: Ped, oldHealth: number, newHealth: number, oldArmour: number, newArmour: number) => boolean | void;
}
export interface IVehiclePassenger {
}
export interface IFireInfo {
  pos: Vector3;
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
  type: ModelType;
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
export enum AmmoSpecialType {
    None,
    ArmorPiercing,
    Explosive,
    FullMetalJacket,
    HollowPoint,
    Incendiary,
    Tracer,
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
export interface ICustomBaseObjectMeta extends ICustomBaseObjectMeta_1 {
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
  voice: { readonly bitrate?: number; readonly externalSecret?: string; readonly externalHost?: string; readonly externalPort?: number; readonly externalPublicHost?: string; readonly externalPublicPort?: number; };
  worldProfiler: { readonly port?: number; readonly host?: string; };
  "js-module": { readonly "source-maps"?: boolean; readonly "heap-profiler"?: boolean; readonly profiler?: boolean; readonly "global-fetch"?: boolean; readonly "global-webcrypto"?: boolean; readonly "network-imports"?: boolean; readonly "extra-cli-args"?: readonly string[]; };
  "csharp-module": { readonly disableDependencyDownload?: true; };
}
export const rootDir: string;
// Do not add anything here, add to the Utils namespace instead!
// (this class is here only for extending shared Utils class & namespace)
export * from "alt-shared";

export function getClosestPlayer(options: { pos: IVector3; range?: number }): Player | null;
    /**
     * Finds the closest player (if any) from {@link Player.all alt.Player.all}.
     *
     * `pos` - From which position to look for the nearest player.
     *
     * `range` - In which range to search for the nearest vehicle. Defaults to `Infinity`.
     */
export function getClosestPlayer(options: { pos: IVector3; range?: number; }): Player {
  // TODO Implement
  return null;
}

export function getClosestVehicle(options: { pos: IVector3; range?: number }): Vehicle | null;
    /**
     * Finds the closest vehicle (if any) from {@link Vehicle.all alt.Vehicle.all}.
     *
     * `pos` - From which position to look for the nearest vehicle.
     *
     * `range` - In which range to search for the nearest vehicle. Defaults to `Infinity`.
     */
export function getClosestVehicle(options: { pos: IVector3; range?: number; }): Vehicle {
  // TODO Implement
  return null;
}

export function setSyncedMeta<K extends string>(key: K, value: InterfaceValueByKey<ICustomGlobalSyncedMeta, K>): void;
export function setSyncedMeta<K extends ExtractStringKeys<ICustomGlobalSyncedMeta>>(key: K, value: ICustomGlobalSyncedMeta[K]): void;
export function setSyncedMeta<V extends any, K extends string = string>(key: K, value: InterfaceValueByKey<ICustomGlobalSyncedMeta, K, V>): void;
    /** @deprecated See {@link "alt-shared".ICustomGlobalSyncedMeta} */
export function setSyncedMeta<V extends any, K extends string = string>(key: K, value: InterfaceValueByKey<ICustomGlobalSyncedMeta, K, V, void>): void {
  // TODO Implement

}

export function deleteSyncedMeta(key: string): void;
export function deleteSyncedMeta<K extends ExtractStringKeys<ICustomGlobalSyncedMeta>>(key: K): void;
export function deleteSyncedMeta<K extends ExtractStringKeys<ICustomGlobalSyncedMeta>>(key: K): void {
  // TODO Implement

}

export function emit<K extends keyof ICustomEmitEvent>(eventName: K, ...args: Parameters<ICustomEmitEvent[K]>): void;
export function emit<K extends string>(eventName: Exclude<K, keyof IServerEvent | keyof ICustomEmitEvent>, ...args: any[]): void;
export function emit<K extends string>(eventName: Exclude<K, keyof IServerEvent>, args: any[]): void {
  // TODO Implement

}

export function emitRaw<K extends keyof ICustomEmitEvent>(eventName: K, ...args: Parameters<ICustomEmitEvent[K]>): void;
export function emitRaw<K extends string>(eventName: Exclude<K, keyof IServerEvent | keyof ICustomEmitEvent>, ...args: any[]): void;
export function emitRaw<K extends string>(eventName: Exclude<K, keyof IServerEvent>, args: any[]): void {
  // TODO Implement

}

export function emitClient<K extends keyof ICustomServerClientEvent>(player: Player | Player[], eventName: K, ...args: Parameters<ICustomServerClientEvent[K]>): void;
export function emitClient<K extends string>(player: Player | Player[], eventName: Exclude<K, keyof ICustomServerClientEvent>, ...args: any[]): void;
export function emitClient<K extends string>(player: Player | Player[], eventName: Exclude<K, never>, args: any[]): void {
  // TODO Implement

}

export function emitClientRaw<K extends keyof ICustomServerClientEvent>(player: Player | Player[], eventName: K, ...args: Parameters<ICustomServerClientEvent[K]>): void;
export function emitClientRaw<K extends string>(player: Player | Player[], eventName: Exclude<K, keyof ICustomServerClientEvent>, ...args: any[]): void;
export function emitClientRaw<K extends string>(player: Player | Player[], eventName: Exclude<K, never>, args: any[]): void {
  // TODO Implement

}

export function emitClientUnreliable<K extends keyof ICustomServerClientEvent>(player: Player | Player[], eventName: K, ...args: Parameters<ICustomServerClientEvent[K]>): void;
export function emitClientUnreliable<K extends string>(player: Player | Player[], eventName: Exclude<K, keyof ICustomServerClientEvent>, ...args: any[]): void;
export function emitClientUnreliable<K extends string>(player: Player | Player[], eventName: Exclude<K, never>, args: any[]): void {
  // TODO Implement

}

export function emitAllClients<K extends keyof ICustomServerClientEvent>(eventName: K, ...args: Parameters<ICustomServerClientEvent[K]>): void;
export function emitAllClients<K extends string>(eventName: Exclude<K, keyof ICustomServerClientEvent>, ...args: any[]): void;
export function emitAllClients<K extends string>(eventName: Exclude<K, never>, args: any[]): void {
  // TODO Implement

}

export function emitAllClientsRaw<K extends keyof ICustomServerClientEvent>(eventName: K, ...args: Parameters<ICustomServerClientEvent[K]>): void;
export function emitAllClientsRaw<K extends string>(eventName: Exclude<K, keyof ICustomServerClientEvent>, ...args: any[]): void;
export function emitAllClientsRaw<K extends string>(eventName: Exclude<K, never>, args: any[]): void {
  // TODO Implement

}

export function emitAllClientsUnreliable<K extends keyof ICustomServerClientEvent>(eventName: K, ...args: Parameters<ICustomServerClientEvent[K]>): void;
export function emitAllClientsUnreliable<K extends string>(eventName: Exclude<K, keyof ICustomServerClientEvent>, ...args: any[]): void;
export function emitAllClientsUnreliable<K extends string>(eventName: Exclude<K, never>, args: any[]): void {
  // TODO Implement

}

export function onRpc<K extends keyof ICustomClientServerRpc>(rpcName: K, listener: (player: Player, ...args: Parameters<ICustomClientServerRpc[K]>) => Promise<ReturnType<ICustomClientServerRpc[K]>> | ReturnType<ICustomClientServerRpc[K]>): void;
export function onRpc<K extends string>(rpcName: Exclude<K, keyof ICustomClientServerRpc>, listener: (player: Player, ...args: any[]) => Promise<any> | any): void;
export function onRpc<K extends string>(rpcName: Exclude<K, never>, listener: (player: Player, ...args: any[]) => any): void {
  // TODO Implement

}

export function offRpc<K extends keyof ICustomClientServerRpc>(rpcName: string, listener: (player: Player, ...args: Parameters<ICustomClientServerRpc[K]>) => Promise<ReturnType<ICustomClientServerRpc[K]>> | ReturnType<ICustomClientServerRpc[K]>): void;
export function offRpc<K extends string>(rpcName: Exclude<K, keyof ICustomClientServerRpc>, listener?: (player: Player, ...args: any[]) => Promise<any> | any): void;
export function offRpc<K extends string>(rpcName: Exclude<K, never>, listener: (player: Player, ...args: any[]) => any): void {
  // TODO Implement

}

export function setPassword(password: string): void;
    /**
   * Change the server password at runtime.
   *
   * @param password The new server password.
   */
export function setPassword(password: string): void {
  // TODO Implement

}

export function hashServerPassword(password: string): bigint;
    /**
   * Hash a string with alt:V algorithm.
   *
   * @param password The string you want to hash.
   */
export function hashServerPassword(password: string): bigint {
  // TODO Implement
  return 0n;
}

export function stopServer(): void;
export function stopServer(): void {
  // TODO Implement

}

export function offClient<K extends keyof ICustomClientServerEvent>(eventName: K, listener: (player: Player, ...args: Parameters<ICustomClientServerEvent[K]>) => void): void;
export function offClient<K extends string>(eventName: Exclude<K, keyof ICustomClientServerEvent>, listener: (player: Player, ...args: any[]) => void): void;
export function offClient(eventName: string, listener: (player: Player, ...args: any[]) => void): void;
export function offClient(listener: (eventName: string, ...args: any[]) => void): void;
    /**
   * Unsubscribes from all user-created client events with the specified listener.
   *
   * @remarks Listener should be of the same reference as when event was subscribed to.
   *
   * @param listener Listener that should be removed.
   */
export function offClient(listener: (eventName: string, ...args: any[]) => void): void {
  // TODO Implement

}

export function on<K extends keyof IServerEvent | keyof ICustomEmitEvent>(eventName: K, listener: (...args: EventParameters<IServerEvent, ICustomEmitEvent, K>) => void): void;
export function on<K extends string>(eventName: Exclude<K, keyof IServerEvent | keyof ICustomEmitEvent>, listener: (...args: any[]) => void): void;
export function on<K extends string>(eventName: Exclude<K, keyof IServerEvent>, listener: (...args: any[]) => void): void {
  // TODO Implement

}

export function once<K extends keyof IServerEvent | keyof ICustomEmitEvent>(eventName: K, listener: (...args: EventParameters<IServerEvent, ICustomEmitEvent, K>) => void): void;
export function once<K extends string>(eventName: Exclude<K, keyof IServerEvent | keyof ICustomEmitEvent>, listener: (...args: any[]) => void): void;
export function once<K extends string>(eventName: Exclude<K, keyof IServerEvent>, listener: (...args: any[]) => void): void {
  // TODO Implement

}

export function off<K extends keyof IServerEvent | keyof ICustomEmitEvent>(eventName: K, listener: (...args: EventParameters<IServerEvent, ICustomEmitEvent, K>) => void): void;
export function off<K extends string>(eventName: Exclude<K, keyof IServerEvent | keyof ICustomEmitEvent>, listener: (...args: any[]) => void): void;
export function off<K extends string>(eventName: Exclude<K, keyof IServerEvent>, listener: (...args: any[]) => void): void {
  // TODO Implement

}

export function onClient<K extends keyof ICustomClientServerEvent>(eventName: K, listener: (player: Player, ...args: Parameters<ICustomClientServerEvent[K]>) => void): void;
export function onClient<K extends string>(eventName: Exclude<K, keyof ICustomClientServerEvent>, listener: (player: Player, ...args: any[]) => void): void;
export function onClient(listener: (eventName: string, player: Player, ...args: any[]) => void): void;
    /**
   * Subscribes to all client events with the specified listener.
   *
   * @remarks Listener will be only called for user-created events.
   *
   * @param listener Listener that should be added.
   */
export function onClient(listener: (eventName: string, player: Player, ...args: any[]) => void): void {
  // TODO Implement

}

export function onceClient<K extends keyof ICustomClientServerEvent>(eventName: K, listener: (player: Player, ...args: Parameters<ICustomClientServerEvent[K]>) => void): void;
export function onceClient<K extends string>(eventName: Exclude<K, keyof ICustomClientServerEvent>, listener: (player: Player, ...args: any[]) => void): void;
export function onceClient(listener: (eventName: string, player: Player, ...args: any[]) => void): void;
    /**
   * Subscribes to all client events with the specified listener, which only triggers once.
   *
   * @remarks Listener will be only called for user-created events.
   *
   * @param listener Listener that should be added.
   */
export function onceClient(listener: (eventName: string, player: Player, ...args: any[]) => void): void {
  // TODO Implement

}

export function startResource(name: string): void;
    /**
   * Starts the specified resource.
   *
   * @param name Name of the resource.
   */
export function startResource(name: string): void {
  // TODO Implement

}

export function restartResource(name: string): void;
    /**
   * Restarts the specified resource.
   *
   * @param name Name of the resource.
   */
export function restartResource(name: string): void {
  // TODO Implement

}

export function addClientConfigKey(key: string): void;
    /**
   * Adds an extra config key that will be passed from resource.toml to client
   *
   * @param key the key to be added
   *
   */
export function addClientConfigKey(key: string): void {
  // TODO Implement

}

export function hasBenefit(benefit: Benefit): boolean;
    /**
   * Checks wheter or not the server has a specific benefit.
   *
   * @param benefit benefit to check
   *
   */
export function hasBenefit(benefit: Benefit): boolean {
  // TODO Implement
  return false;
}

export function stopResource(name: string): void;
    /**
   * Stops the specified resource.
   *
   * @param name Name of the resource.
   */
export function stopResource(name: string): void {
  // TODO Implement

}

export function getRemoteEventListeners(eventName: string | null): readonly ((...args: any[]) => void)[];
    /**
   * Gets all the listeners that have been subscribed using {@link onClient} for the specified remote event.
   *
   * @param eventName Name of the event or null for generic event.
   * @returns Array of listener functions for that event.
   */
export function getRemoteEventListeners(eventName: string): readonly ((...args: any[]) => void)[] {
  // TODO Implement
  return [];
}

export function getVehicleModelInfoByHash(vehicleHash: number): IVehicleModel;
export function getVehicleModelInfoByHash(vehicleHash: number): IVehicleModel {
  // TODO Implement
  return null;
}

export function getLoadedVehicleModels(): number[];
export function getLoadedVehicleModels(): number[] {
  // TODO Implement
  return [];
}

export function getPedModelInfoByHash(pedModelHash: number): IPedModel;
export function getPedModelInfoByHash(pedModelHash: number): IPedModel {
  // TODO Implement
  return null;
}

export function getWeaponModelInfoByHash(weaponModelHash: number): IWeaponModel;
export function getWeaponModelInfoByHash(weaponModelHash: number): IWeaponModel {
  // TODO Implement
  return null;
}

export function getAmmoHashForWeaponHash(weaponModelHash: number): number;
export function getAmmoHashForWeaponHash(weaponModelHash: number): number {
  // TODO Implement
  return 0;
}

export function getServerConfig(): IServerConfig;
export function getServerConfig(): IServerConfig {
  // TODO Implement
  return null;
}

export function toggleWorldProfiler(state: boolean): void;
export function toggleWorldProfiler(state: boolean): void {
  // TODO Implement

}

export function getEntitiesInDimension(dimension: number, allowedTypes: BaseObjectFilterType): readonly Entity[];
    /**
   * Returns all entities of the specified type (or types) in the specified dimension.
   *
   * @example
   * ```ts
   * // Returns all players and vehicles in zero dimension
   * const playersAndVehicles = alt.getEntitiesInDimension(
   *   0, // dimension
   *   alt.BaseObjectFilterType.Player | alt.BaseObjectFilterType.Vehicle,
   * );
   *
   * // Returns only players in zero dimension
   * const players = alt.getEntitiesInDimension(
   *   0, // dimension
   *   alt.BaseObjectFilterType.Player,
   * );
   * ```
   *
   * @param dimension
   * @param allowedTypes
   *
   */
export function getEntitiesInDimension(dimension: number, allowedTypes: BaseObjectFilterType): readonly Entity[] {
  // TODO Implement
  return [];
}

export function getEntitiesInRange(position: IVector3, range: number, dimension: number, allowedTypes: BaseObjectFilterType): readonly Entity[];
    /**
   * Returns all entities of the specified type (or types) at the specified position, in the given range and dimension.
   *
   * @example
   * ```ts
   * // Returns all players and vehicles in a range equal to 3 and dimension equal to 0
   * const playersAndVehicles = alt.getEntitiesInRange(
   *   alt.Vector3.zero, // position
   *   3.0, // range
   *   0, // dimension
   *   alt.BaseObjectFilterType.Player | alt.BaseObjectFilterType.Vehicle,
   * );
   *
   * // Returns players in a range equal to 3 and dimension equal to 0
   * const players = alt.getEntitiesInRange(
   *   alt.Vector3.zero, // position
   *   3.0, // range
   *   0, // dimension
   *   alt.BaseObjectFilterType.Player,
   * );
   * ```
   * @param position
   * @param range
   * @param dimension
   * @param allowedTypes
   *
   */
export function getEntitiesInRange(position: IVector3, range: number, dimension: number, allowedTypes: BaseObjectFilterType): readonly Entity[] {
  // TODO Implement
  return [];
}

export function getClosestEntities(position: IVector3, range: number, dimension: number, limit: number, allowedTypes: BaseObjectFilterType): readonly Entity[];
    /**
   * Returns only the closest entities of the specified type (or types) at the specified position, in the given range, dimension and limit.
   *
   * @example
   * ```ts
   * // Returns closest players and vehicles (from 0 to 2 entities inclusive, because limit is 2)
   * // in a range equal to 3 and dimension equal to 0
   * const playersAndVehicles = alt.getClosestEntities(
   *   alt.Vector3.zero, // position
   *   3.0, // range
   *   0, // dimension
   *   2, // limit
   *   alt.BaseObjectFilterType.Player | alt.BaseObjectFilterType.Vehicle,
   * );
   *
   * // Same but only players
   * const players = alt.getClosestEntities(
   *   alt.Vector3.zero, // position
   *   3.0, // range
   *   0, // dimension
   *   2, // limit
   *   alt.BaseObjectFilterType.Player,
   * );
   * ```
   *
   * @param position
   * @param range Can be set to `0` to get entities in any range.
   * @param dimension Can be set to {@link "alt-shared".globalDimension} to get entities in  any dimension.
   * @param limit How many entities to return if there are more entities in the specified range, dimension. (`-1` to disable).
   * @param allowedTypes
   *
   * @remarks If two entities are closer than 1 unit to a position, it is not determined which one will be included.
   * For example, if there is a vehicle at 0, 1.5, 0 and player at 0, 1.0, 0,
   * then if we pass `position` as `new alt.Vector3(0, 0, 0)` and `limit` as `1` vehicle may be returned but the player will not.
   *
   */
export function getClosestEntities(position: IVector3, range: number, dimension: number, limit: number, allowedTypes: BaseObjectFilterType): readonly Entity[] {
  // TODO Implement
  return [];
}

export function setVoiceExternalPublic(host: string, port: number): void;
export function setVoiceExternalPublic(host: string, port: number): void {
  // TODO Implement

}

export function setVoiceExternal(phost: string, port: number): void;
export function setVoiceExternal(phost: string, port: number): void {
  // TODO Implement

}

export function getMaxStreamingPeds(): number;
export function getMaxStreamingPeds(): number {
  // TODO Implement
  return 0;
}

export function setMaxStreamingPeds(limit: number): void;
export function setMaxStreamingPeds(limit: number): void {
  // TODO Implement

}

export function getMaxStreamingObjects(): number;
export function getMaxStreamingObjects(): number {
  // TODO Implement
  return 0;
}

export function setMaxStreamingObjects(limit: number): void;
export function setMaxStreamingObjects(limit: number): void {
  // TODO Implement

}

export function getMaxStreamingVehicles(): number;
export function getMaxStreamingVehicles(): number {
  // TODO Implement
  return 0;
}

export function setMaxStreamingVehicles(limit: number): void;
export function setMaxStreamingVehicles(limit: number): void {
  // TODO Implement

}

export function getStreamerThreadCount(): number;
export function getStreamerThreadCount(): number {
  // TODO Implement
  return 0;
}

export function setStreamerThreadCount(count: number): void;
export function setStreamerThreadCount(count: number): void {
  // TODO Implement

}

export function getStreamingTickRate(): number;
export function getStreamingTickRate(): number {
  // TODO Implement
  return 0;
}

export function setStreamingTickRate(count: number): void;
export function setStreamingTickRate(count: number): void {
  // TODO Implement

}

export function getStreamingDistance(): number;
export function getStreamingDistance(): number {
  // TODO Implement
  return 0;
}

export function setStreamingDistance(distance: number): void;
export function setStreamingDistance(distance: number): void {
  // TODO Implement

}

export function getMigrationThreadCount(): number;
export function getMigrationThreadCount(): number {
  // TODO Implement
  return 0;
}

export function setMigrationThreadCount(count: number): void;
export function setMigrationThreadCount(count: number): void {
  // TODO Implement

}

export function getSyncSendThreadCount(): number;
export function getSyncSendThreadCount(): number {
  // TODO Implement
  return 0;
}

export function setSyncSendThreadCount(count: number): void;
export function setSyncSendThreadCount(count: number): void {
  // TODO Implement

}

export function getSyncReceiveThreadCount(): number;
export function getSyncReceiveThreadCount(): number {
  // TODO Implement
  return 0;
}

export function setSyncReceiveThreadCount(count: number): void;
export function setSyncReceiveThreadCount(count: number): void {
  // TODO Implement

}

export function getMigrationTickRate(): number;
export function getMigrationTickRate(): number {
  // TODO Implement
  return 0;
}

export function setMigrationTickRate(count: number): void;
export function setMigrationTickRate(count: number): void {
  // TODO Implement

}

export function getColShapeTickRate(): number;
export function getColShapeTickRate(): number {
  // TODO Implement
  return 0;
}

export function setColShapeTickRate(count: number): void;
export function setColShapeTickRate(count: number): void {
  // TODO Implement

}

export function getMigrationDistance(): number;
export function getMigrationDistance(): number {
  // TODO Implement
  return 0;
}

export function setMigrationDistance(count: number): void;
export function setMigrationDistance(count: number): void {
  // TODO Implement

}

export class ConnectionInfo {
  public static readonly all: readonly IConnectionInfo[];
  
  public static getByID(id: number): IConnectionInfo {
    // TODO implement
    return null;
  }
}

export class BaseObject extends BaseObject_1 {
    /**
     * Gets the base object with the given type and id
     */
  
  public static getByID(type: BaseObjectType, id: number): BaseObject {
    // TODO implement
    return null;
  }
  public deleteMeta(key: string): void;
  
  public deleteMeta<K extends ExtractStringKeys<ICustomBaseObjectMeta>>(key: string | K): void {
    // TODO implement

  }
  public hasMeta(key: string): boolean;
  
  public hasMeta<K extends ExtractStringKeys<ICustomBaseObjectMeta>>(key: string | K): boolean {
    // TODO implement
    return false;
  }
  public getMeta<K extends string>(key: Exclude<K, never>): unknown;
  public getMeta<K extends ExtractStringKeys<ICustomBaseObjectMeta>>(key: K): ICustomBaseObjectMeta[K];
    /** @deprecated See {@link ICustomBaseObjectMeta} */
  
  public getMeta<K extends string | ExtractStringKeys<ICustomBaseObjectMeta>, V extends any>(key: Exclude<K, never> | string): unknown | ICustomBaseObjectMeta[K] | V {
    // TODO implement
    return null;
  }
  public setMeta<K extends string>(key: K, value: InterfaceValueByKey<ICustomBaseObjectMeta, K, unknown, void>): void;
  public setMeta<K extends ExtractStringKeys<ICustomBaseObjectMeta>>(key: K, value: ICustomBaseObjectMeta[K]): void;
    /** @deprecated See {@link ICustomBaseObjectMeta} */
  public setMeta<V extends any, K extends string = string>(key: K, value: InterfaceValueByKey<ICustomBaseObjectMeta, K, V, void>): void;
  
  public setMeta<K extends string | ExtractStringKeys<ICustomBaseObjectMeta>, V extends any>(key: K | MetaValues<ICustomBaseObjectMeta>, value: InterfaceValueByKey<ICustomBaseObjectMeta, K, unknown, void> | ICustomBaseObjectMeta[K] | InterfaceValueByKey<ICustomBaseObjectMeta, K, V, void>): void {
    // TODO implement

  }
    /**
     * Removes the specified key and the data connected to that specific key.
     *
     * @param key The key of the value to remove.
     */
  public deleteSyncedMeta(key: string): void;
  
  public deleteSyncedMeta<K extends ExtractStringKeys<ICustomBaseObjectSyncedMeta>>(key: string | K): void {
    // TODO implement

  }
    /**
     * Stores the given value with the specified key.
     *
     * @remarks The given value will be shared with all clients.
     *
     * @param key The key of the value to store.
     * @param value The value to store.
     */
  public setSyncedMeta<K extends string>(key: K, value: InterfaceValueByKey<ICustomBaseObjectSyncedMeta, K, unknown, void>): void;
  public setSyncedMeta<K extends ExtractStringKeys<ICustomBaseObjectSyncedMeta>>(key: K, value: ICustomBaseObjectSyncedMeta[K]): void;
    /** @deprecated See {@link "alt-shared".ICustomBaseObjectSyncedMeta} */
  public setSyncedMeta<V extends any, K extends string = string>(key: K, value: InterfaceValueByKey<ICustomBaseObjectSyncedMeta, K, V, void>): void;
  
  public setSyncedMeta<K extends string | ExtractStringKeys<ICustomBaseObjectSyncedMeta>, V extends any>(key: K | MetaValues<ICustomBaseObjectSyncedMeta>, value: InterfaceValueByKey<ICustomBaseObjectSyncedMeta, K, unknown, void> | ICustomBaseObjectSyncedMeta[K] | InterfaceValueByKey<ICustomBaseObjectSyncedMeta, K, V, void>): void {
    // TODO implement

  }
}

export class WorldObject extends BaseObject {
    /**
     * Object dimension.
     *
     * @remarks Check https://docs.altv.mp/articles/dimensions.html to understand how it works.
     */
  public dimension: number;
    /**
     * Object position.
     */
  public pos: Vector3;
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

export class VirtualEntity extends WorldObject {
  public constructor(group: VirtualEntityGroup, position: Vector3, streamingDistance: number, data: Record<string, any>) {
    super();
    // TODO: Implement constructor
  }
    /** Returns all Virtual Entity instances */
  public static readonly all: readonly VirtualEntity[];
    /** Virtual Entity Group this entity belongs to */
  public readonly group: VirtualEntityGroup;
    /** Streaming range for the virtual entity */
  public readonly streamingDistance: number;
  public visible: boolean;
    /**
     * Gets a value using the specified key.
     *
     * @param key The key of the value to get.
     * @returns Dynamic value associated with the specified key or undefined if no data is present.
     */
  public getStreamSyncedMeta<K extends string>(key: Exclude<K, never>): unknown;
  public getStreamSyncedMeta<K extends ExtractStringKeys<ICustomVirtualEntityStreamSyncedMeta>>(key: K): ICustomVirtualEntityStreamSyncedMeta[K];
    /** @deprecated See {@link "alt-shared".ICustomVirtualEntityStreamSyncedMeta} */
  
  public getStreamSyncedMeta<K extends string | ExtractStringKeys<ICustomVirtualEntityStreamSyncedMeta>, V extends any>(key: Exclude<K, never> | string): unknown | ICustomVirtualEntityStreamSyncedMeta[K] | V {
    // TODO implement
    return null;
  }
    /**
     * Determines whether contains the specified key.
     *
     * @param key The key of the value to locate.
     * @returns True if the meta table contains any data at the specified key or False if not
     */
  public hasStreamSyncedMeta(key: string): boolean;
  
  public hasStreamSyncedMeta<K extends ExtractStringKeys<ICustomVirtualEntityStreamSyncedMeta>>(key: string | K): boolean {
    // TODO implement
    return false;
  }
  
  public getStreamSyncedMetaKeys(): readonly string[] {
    // TODO implement
    return [];
  }
    /**
     * Stores the given value with the specified key.
     *
     * @remarks The given value will be shared with all clients in streaming range.
     *
     * @param key The key of the value to store.
     * @param value The value to store.
     */
  public setStreamSyncedMeta<K extends string>(key: K, value: InterfaceValueByKey<ICustomVirtualEntityStreamSyncedMeta, K, unknown, void>): void;
  public setStreamSyncedMeta<K extends ExtractStringKeys<ICustomVirtualEntityStreamSyncedMeta>>(key: K, value: ICustomVirtualEntityStreamSyncedMeta[K]): void;
    /** @deprecated See {@link "alt-shared".ICustomVirtualEntityStreamSyncedMeta} */
  public setStreamSyncedMeta<V extends any, K extends string = string>(key: K, value: InterfaceValueByKey<ICustomVirtualEntityStreamSyncedMeta, K, V, void>): void;
  
  public setStreamSyncedMeta<K extends string | ExtractStringKeys<ICustomVirtualEntityStreamSyncedMeta>, V extends any>(key: K | MetaValues<ICustomVirtualEntityStreamSyncedMeta>, value: InterfaceValueByKey<ICustomVirtualEntityStreamSyncedMeta, K, unknown, void> | ICustomVirtualEntityStreamSyncedMeta[K] | InterfaceValueByKey<ICustomVirtualEntityStreamSyncedMeta, K, V, void>): void {
    // TODO implement

  }
    /**
     * Removes the specified key and the data connected to that specific key.
     *
     * @param key The key of the value to remove.
     */
  public deleteStreamSyncedMeta(key: string): void;
  
  public deleteStreamSyncedMeta<K extends ExtractStringKeys<ICustomVirtualEntityStreamSyncedMeta>>(key: string | K): void {
    // TODO implement

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
     * Entity model hash.
     */
  public static get model(): number {
        // TODO Implement
            return 0;;
      }
    /**
     * Entity rotation.
     *
     * @remarks Values are provided in radians.
     */
  public rot: Vector3;
    /**
     * Whether the entity is visible.
     */
  public visible: boolean;
    /**
     * Whether the entity should be streamed for other entities.
     */
  public streamed: boolean;
  public frozen: boolean;
  public collision: boolean;
  public streamingDistance: number;
  public readonly timestamp: number;
  public setMeta<K extends string>(key: K, value: InterfaceValueByKey<ICustomEntityMeta, K, unknown, void>): void;
  public setMeta<K extends ExtractStringKeys<ICustomEntityMeta>>(key: K, value: ICustomEntityMeta[K]): void;
    /** @deprecated See {@link ICustomEntityMeta} */
  public setMeta<V extends any, K extends string = string>(key: K, value: InterfaceValueByKey<ICustomEntityMeta, K, V, void>): void;
  
  public setMeta<K extends string | ExtractStringKeys<ICustomEntityMeta>, V extends any>(key: K | MetaValues<ICustomEntityMeta>, value: InterfaceValueByKey<ICustomEntityMeta, K, unknown, void> | ICustomEntityMeta[K] | InterfaceValueByKey<ICustomEntityMeta, K, V, void>): void {
    // TODO implement

  }
  public deleteMeta(key: string): void;
  
  public deleteMeta<K extends ExtractStringKeys<ICustomEntityMeta>>(key: string | K): void {
    // TODO implement

  }
  public getMeta<K extends string>(key: Exclude<K, never>): unknown;
  public getMeta<K extends ExtractStringKeys<ICustomEntityMeta>>(key: K): ICustomEntityMeta[K];
    /** @deprecated See {@link ICustomEntityMeta} */
  
  public getMeta<K extends ExtractStringKeys<ICustomEntityMeta>>(key: K): ICustomEntityMeta[K] | unknown {
    // TODO implement
    return null;
  }
  public hasMeta(key: string): boolean;
  
  public hasMeta<K extends ExtractStringKeys<ICustomEntityMeta>>(key: string | K): boolean {
    // TODO implement
    return false;
  }
    /**
     * Removes the specified key and the data connected to that specific key.
     *
     * @param key The key of the value to remove.
     */
  public deleteSyncedMeta(key: string): void;
  
  public deleteSyncedMeta<K extends ExtractStringKeys<ICustomEntitySyncedMeta>>(key: string | K): void {
    // TODO implement

  }
    /**
     * Gets a value using the specified key.
     *
     * @param key The key of the value to get.
     * @returns Dynamic value associated with the specified key or undefined if no data is present.
     */
  public getSyncedMeta<K extends string>(key: Exclude<K, never>): unknown;
  public getSyncedMeta<K extends ExtractStringKeys<ICustomEntitySyncedMeta>>(key: K): ICustomEntitySyncedMeta[K];
    /** @deprecated See {@link "alt-shared".ICustomEntitySyncedMeta} */
  
  public getSyncedMeta<K extends string | ExtractStringKeys<ICustomEntitySyncedMeta>, V extends any>(key: Exclude<K, never> | string): unknown | ICustomEntitySyncedMeta[K] | V {
    // TODO implement
    return null;
  }
    /**
     * Determines whether contains the specified key.
     *
     * @param key The key of the value to locate.
     * @returns True if the meta table contains any data at the specified key or False if not
     */
  public hasSyncedMeta(key: string): boolean;
  
  public hasSyncedMeta<K extends ExtractStringKeys<ICustomEntitySyncedMeta>>(key: string | K): boolean {
    // TODO implement
    return false;
  }
  
  public getSyncedMetaKeys(): readonly string[] {
    // TODO implement
    return [];
  }
    /**
     * Stores the given value with the specified key.
     *
     * @remarks The given value will be shared with all clients.
     *
     * @param key The key of the value to store.
     * @param value The value to store.
     */
  public setSyncedMeta<K extends string>(key: K, value: InterfaceValueByKey<ICustomEntitySyncedMeta, K, unknown, void>): void;
  public setSyncedMeta<K extends ExtractStringKeys<ICustomEntitySyncedMeta>>(key: K, value: ICustomEntitySyncedMeta[K]): void;
    /** @deprecated See {@link "alt-shared".ICustomEntitySyncedMeta} */
  public setSyncedMeta<V extends any, K extends string = string>(key: K, value: InterfaceValueByKey<ICustomEntitySyncedMeta, K, V, void>): void;
  
  public setSyncedMeta<K extends string | ExtractStringKeys<ICustomEntitySyncedMeta>, V extends any>(key: K | MetaValues<ICustomEntitySyncedMeta>, value: InterfaceValueByKey<ICustomEntitySyncedMeta, K, unknown, void> | ICustomEntitySyncedMeta[K] | InterfaceValueByKey<ICustomEntitySyncedMeta, K, V, void>): void {
    // TODO implement

  }
    /**
     * Removes the specified key and the data connected to that specific key.
     *
     * @param key The key of the value to remove.
     */
  public deleteStreamSyncedMeta(key: string): void;
  
  public deleteStreamSyncedMeta<K extends ExtractStringKeys<ICustomEntityStreamSyncedMeta>>(key: string | K): void {
    // TODO implement

  }
    /**
     * Gets a value using the specified key.
     *
     * @param key The key of the value to get.
     * @returns Dynamic value associated with the specified key or undefined if no data is present.
     */
  public getStreamSyncedMeta<K extends string>(key: Exclude<K, never>): unknown;
  public getStreamSyncedMeta<K extends ExtractStringKeys<ICustomEntityStreamSyncedMeta>>(key: K): ICustomEntityStreamSyncedMeta[K];
    /** @deprecated See {@link "alt-shared".ICustomEntityStreamSyncedMeta} */
  
  public getStreamSyncedMeta<K extends string | ExtractStringKeys<ICustomEntityStreamSyncedMeta>, V extends any>(key: Exclude<K, never> | string): unknown | ICustomEntityStreamSyncedMeta[K] | V {
    // TODO implement
    return null;
  }
    /**
     * Determines whether contains the specified key.
     *
     * @param key The key of the value to locate.
     * @returns True if the meta table contains any data at the specified key or False if not
     */
  public hasStreamSyncedMeta(key: string): boolean;
  
  public hasStreamSyncedMeta<K extends ExtractStringKeys<ICustomEntityStreamSyncedMeta>>(key: string | K): boolean {
    // TODO implement
    return false;
  }
  
  public getStreamSyncedMetaKeys(): readonly string[] {
    // TODO implement
    return [];
  }
    /**
     * Stores the given value with the specified key.
     *
     * @remarks The given value will be shared with all clients in streaming range.
     *
     * @param key The key of the value to store.
     * @param value The value to store.
     */
  public setStreamSyncedMeta<K extends string>(key: K, value: InterfaceValueByKey<ICustomEntityStreamSyncedMeta, K, unknown, void>): void;
  public setStreamSyncedMeta<K extends ExtractStringKeys<ICustomEntityStreamSyncedMeta>>(key: K, value: ICustomEntityStreamSyncedMeta[K]): void;
    /** @deprecated See {@link "alt-shared".ICustomEntityStreamSyncedMeta} */
  public setStreamSyncedMeta<V extends any, K extends string = string>(key: K, value: InterfaceValueByKey<ICustomEntityStreamSyncedMeta, K, V, void>): void;
  
  public setStreamSyncedMeta<K extends string | ExtractStringKeys<ICustomEntityStreamSyncedMeta>, V extends any>(key: K | MetaValues<ICustomEntityStreamSyncedMeta>, value: InterfaceValueByKey<ICustomEntityStreamSyncedMeta, K, unknown, void> | ICustomEntityStreamSyncedMeta[K] | InterfaceValueByKey<ICustomEntityStreamSyncedMeta, K, V, void>): void {
    // TODO implement

  }
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
  
  public setNetOwner(player: Player, disableMigration: boolean): void {
    // TODO implement

  }
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
  
  public resetNetOwner(disableMigration: boolean): void {
    // TODO implement

  }
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
  
  public attachTo(entity: Entity, entityBone: string | number, ownBone: string | number, pos: IVector3, rot: IVector3, enableCollisions: boolean, noFixedRotation: boolean): void {
    // TODO implement

  }
    /**
     * Detaches this entity if attached to another entity.
     */
  
  public detach(): void {
    // TODO implement

  }
}

export class Player extends Entity {
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
  declare public static readonly all: readonly Player[];
  public readonly streamedEntities: readonly { entity: Entity; distance: number; }[];
  public static readonly count: number;
  public armour: number;
  public currentWeapon: number;
  public readonly weapons: readonly IWeapon[];
  public readonly currentWeaponComponents: readonly number[];
  public readonly currentWeaponTintIndex: number;
  public readonly entityAimOffset: Vector3;
  public readonly entityAimingAt: Entity;
  public readonly flashlightActive: boolean;
  public readonly moveSpeed: number;
  public readonly isInRagdoll: boolean;
  public readonly isAiming: boolean;
  public readonly isDead: boolean;
    //public readonly isShooting: boolean;
//public readonly isJumping: boolean;
/**
     * The player's state of weapon reloading.
     */
  public readonly isReloading: boolean;
  public readonly isEnteringVehicle: boolean;
  public readonly isLeavingVehicle: boolean;
  public readonly isOnLadder: boolean;
  public readonly isInMelee: boolean;
  public readonly isInCover: boolean;
  public readonly isParachuting: boolean;
  public readonly isOnVehicle: boolean;
  public readonly isInWater: boolean;
    /**
     * Position the player is currently aiming at.
     *
     * @remarks Will return {@link Vector3.zero} if the player is aiming against a entity.
     */
  public readonly aimPos: Vector3;
  public readonly headRot: Vector3;
  public health: number;
  public readonly ip: string;
  public maxArmour: number;
  public maxHealth: number;
  public readonly name: string;
  public readonly ping: number;
  public readonly cloudID: string;
  public readonly cloudAuthResult: CloudAuthResult;
    /**
     * Curent seat the player is sitting in.
     * If player is not in any vehicle it is equal to `0`.
     *
     * @remarks The seat indexes start with 1 (driver seat).
     */
  public readonly seat: number;
  public readonly vehicle: Vehicle;
  public invincible: boolean;
  public readonly isSuperJumpEnabled: boolean;
  public readonly isCrouching: boolean;
  public readonly isStealthy: boolean;
  public readonly isSpawned: boolean;
  public readonly socialID: string;
  public readonly socialClubName: string;
  public readonly hwid3: string;
  public readonly hwidHash: string;
  public readonly hwidExHash: string;
  public readonly authToken: string;
  public readonly discordID: string;
  public readonly currentAnimationDict: number;
  public readonly currentAnimationName: number;
  public readonly forwardSpeed: number;
  public readonly strafeSpeed: number;
  public readonly currentInterior: number;
  public lastDamagedBodyPart: number;
    /**
     * Send names of all players on server to this player if they are not already sent (value is not set to `true`).
     */
  public sendNames: boolean;
  public netOwnershipDisabled: boolean;
    /**
     * Retrieves the player from the pool.
     *
     * @param id The id of the player.
     * @returns Player if it was found, otherwise null.
     */
  
  public static getByID(id: number): Player {
    // TODO implement
    return null;
  }
    /**
     * Emits specified event to client.
     *
     * @param eventName Name of the event.
     * @param args Rest parameters for emit to send.
     */
  public emit<K extends keyof ICustomServerClientEvent>(eventName: K, args: Parameters<ICustomServerClientEvent[K]>): void;
  
  public emit<K extends keyof ICustomServerClientEvent | string>(eventName: K | Exclude<K, never>, args: Parameters<ICustomServerClientEvent[K]> | any[]): void {
    // TODO implement

  }
    /**
     * Emits specified event to client, but faster as {@link Player.emit}.
     *
     * @param eventName Name of the event.
     * @param args Rest parameters for emit to send.
     */
  public emitRaw<K extends keyof ICustomServerClientEvent>(eventName: K, args: Parameters<ICustomServerClientEvent[K]>): void;
  
  public emitRaw<K extends keyof ICustomServerClientEvent | string>(eventName: K | Exclude<K, never>, args: Parameters<ICustomServerClientEvent[K]> | any[]): void {
    // TODO implement

  }
    /**
     * Calls a client sided RPC with the specified arguments.
     *
     * @param rpcName Name of the RPC
     * @param ...args Arguments to pass to the RPC
     *
     */
  public emitRpc<K extends keyof ICustomServerClientRpc>(rpcName: K, args: Parameters<ICustomServerClientRpc[K]>): Promise<ReturnType<ICustomServerClientRpc[K]>>;
  
  public emitRpc<K extends keyof ICustomServerClientRpc | string>(rpcName: K | Exclude<K, never>, args: Parameters<ICustomServerClientRpc[K]> | any[]): Promise<ReturnType<ICustomServerClientRpc[K]>> | Promise<any> {
    // TODO implement
    return null;
  }
  
  public addWeaponComponent(weaponHash: number, component: number): void {
    // TODO implement

  }
  
  public hasWeaponComponent(weaponModel: string | number, component: string | number): boolean {
    // TODO implement
    return false;
  }
    /**
     * Removes the visible blood on the player body.
     */
  
  public clearBloodDamage(): void {
    // TODO implement

  }
  
  public getBloodDamageBase64(): string {
    // TODO implement
    return "";
  }
  
  public setBloodDamageBase64(base64: string): void {
    // TODO implement

  }
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
  
  public giveWeapon(weaponModel: string | number, ammo: number, equipNow: boolean): void {
    // TODO implement

  }
  
  public hasWeapon(weaponModel: string | number): boolean {
    // TODO implement
    return false;
  }
    /**
     * Forcefully disconnects the player with a reason message.
     *
     * @param reason The reason that will display to the player on the disconnect screen. If not specified, it defaults to "KICKED_OUT".
     */
  
  public kick(reason: string): void {
    // TODO implement

  }
    /**
     * Removes every weapon from the player.
     */
  
  public removeAllWeapons(removeAllAmmo: boolean): void {
    // TODO implement

  }
    /**
     * Removes the specified weapon from the player.
     *
     * @param weaponHash Hash of the weapon.
     */
  
  public removeWeapon(weaponHash: number): void {
    // TODO implement

  }
    /**
     * Removes the specified weapon component from the specified weapon.
     *
     * @param weaponHash Hash of the weapon.
     * @param component Hash of the weapon component.
     */
  
  public removeWeaponComponent(weaponHash: number, component: number): void {
    // TODO implement

  }
  
  public setDateTime(day: DateTimeDay, month: DateTimeMonth, year: number, hour: DateTimeHour, minute: DateTimeMinute, second: DateTimeSecond): void {
    // TODO implement

  }
  
  public setWeaponTintIndex(weaponHash: number, tintIndex: number): void {
    // TODO implement

  }
  public setWeather(weatherType: WeatherType): void;
  
  public setWeather<T extends number>(weatherType: WeatherType): void {
    // TODO implement

  }
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
  public spawn(x: number, y: number, z: number, delay: number): void;
    /**
     * Spawns the player in the world.
     *
     * @remarks The player has to have a model set before being spawned.
     *
     * @param pos The position where the player gets spawned.
     * @param delay The delay at which the player gets spawned after calling this function. Defaults to 0.
     */
  public spawn(pos: IVector3, delay: number): void;
    /**
     * Sets the model and spawns the player in the world.
     *
     * @param model The model to be set to the player before spawning.
     * @param pos The position where the player gets spawned.
     */
  
  public spawn(x: number | IVector3 | string | number, y: number | IVector3, z: number, delay: number): void {
    // TODO implement

  }
  
  public despawn(): void {
    // TODO implement

  }
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
  
  public getClothes(component: number): ICloth {
    // TODO implement
    return null;
  }
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
  
  public getDlcClothes(component: number): IDlcCloth {
    // TODO implement
    return null;
  }
  
  public clearClothes(component: number): void {
    // TODO implement

  }
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
  
  public setClothes(component: number, drawable: number, texture: number, palette: number): boolean {
    // TODO implement
    return false;
  }
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
  
  public setDlcClothes(dlc: number, component: number, drawable: number, texture: number, palette: number): boolean {
    // TODO implement
    return false;
  }
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
  
  public getProp(component: number): IProp {
    // TODO implement
    return null;
  }
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
  
  public getDlcProp(component: number): IDlcProp {
    // TODO implement
    return null;
  }
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
  
  public setProp(component: number, drawable: number, texture: number): boolean {
    // TODO implement
    return false;
  }
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
  
  public setDlcProp(dlc: number, component: number, drawable: number, texture: number): boolean {
    // TODO implement
    return false;
  }
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
  
  public clearProp(component: number): void {
    // TODO implement

  }
    /**
     * Checks whether the given entity is in the stream range of the player.
     *
     * @example
     * ```js
     * if(player.vehicle) alt.log(player.isEntityInStreamRange(player.vehicle)); // This always logs true, because their own vehicle is always in stream range of the player
     * ```
     */
  
  public isEntityInStreamRange(entity: Entity): boolean {
    // TODO implement
    return false;
  }
    /**
     * Set the player into a vehicle on specific seat.
     *
     * @remarks The seat indexes start with 1 (driver seat).
     */
  
  public setIntoVehicle(vehicle: Vehicle, seat: number): void {
    // TODO implement

  }
    /**
     * Plays ambient speech.
     *
     * @Remarks See https://github.com/DurtyFree/gta-v-data-dumps/blob/master/speeches.json for a full list of speeches.
     *
     * @param speechName Name of the speach.
     * @param speechParam Param of the speach.
     * @param speechDictHash Hash of the speach dict.
     */
  
  public playAmbientSpeech(speechName: string, speechParam: string, speechDictHash: number): void {
    // TODO implement

  }
  
  public setHeadOverlay(overlayID: number, index: number, opacity: number): boolean {
    // TODO implement
    return false;
  }
  
  public removeHeadOverlay(overlayID: number): boolean {
    // TODO implement
    return false;
  }
  
  public setHeadOverlayColor(overlayID: number, colorType: number, colorIndex: number, secondColorIndex: number): boolean {
    // TODO implement
    return false;
  }
  
  public getHeadOverlay(overlayID: number): IHeadOverlay {
    // TODO implement
    return null;
  }
  
  public setFaceFeature(index: number, scale: number): boolean {
    // TODO implement
    return false;
  }
  
  public getFaceFeatureScale(index: number): number {
    // TODO implement
    return 0;
  }
  
  public removeFaceFeature(index: number): boolean {
    // TODO implement
    return false;
  }
  
  public setHeadBlendPaletteColor(id: number, red: number, green: number, blue: number): boolean {
    // TODO implement
    return false;
  }
  
  public getHeadBlendPaletteColor(id: number): RGBA {
    // TODO implement
    return null;
  }
  
  public removeHeadBlendPaletteColor(): void {
    // TODO implement

  }
  
  public setHeadBlendData(shapeFirstID: number, shapeSecondID: number, shapeThirdID: number, skinFirstID: number, skinSecondID: number, skinThirdID: number, shapeMix: number, skinMix: number, thirdMix: number): void {
    // TODO implement

  }
  
  public removeHeadBlendData(): void {
    // TODO implement

  }
  
  public getHeadBlendData(): IHeadBlendData {
    // TODO implement
    return null;
  }
  
  public setEyeColor(eyeColor: number): boolean {
    // TODO implement
    return false;
  }
  
  public getEyeColor(): number {
    // TODO implement
    return 0;
  }
  
  public setHairColor(hairColor: number): void {
    // TODO implement

  }
  
  public getHairColor(): number {
    // TODO implement
    return 0;
  }
  
  public setHairHighlightColor(hairHighlightColor: number): void {
    // TODO implement

  }
  
  public getHairHighlightColor(): number {
    // TODO implement
    return 0;
  }
  
  public addDecoration(collection: string | number, overlay: string | number, count: number): void {
    // TODO implement

  }
  
  public removeDecoration(collection: string | number, overlay: string | number): void {
    // TODO implement

  }
  
  public clearDecorations(): void {
    // TODO implement

  }
  
  public getDecorations(): readonly IDecoration[] {
    // TODO implement
    return [];
  }
  
  public playAnimation(animDict: string, animName: string, blendInSpeed: number, blendOutSpeed: number, duration: number, flags: number, playbackRate: number, lockX: boolean, lockY: boolean, lockZ: boolean): void {
    // TODO implement

  }
  
  public clearTasks(): void {
    // TODO implement

  }
  
  public playScenario(name: string): void {
    // TODO implement

  }
  
  public getAmmo(ammoHash: string | number): number {
    // TODO implement
    return 0;
  }
  
  public setAmmo(ammoHash: string | number, ammo: number): void {
    // TODO implement

  }
  
  public getWeaponAmmo(weaponHash: string | number): number {
    // TODO implement
    return 0;
  }
  
  public setWeaponAmmo(weaponHash: string | number, ammo: number): void {
    // TODO implement

  }
  
  public getAmmoSpecialType(ammoHash: string | number): AmmoSpecialType {
    // TODO implement
    return null;
  }
  
  public setAmmoSpecialType(ammoHash: string | number, ammoSpecialType: AmmoSpecialType): void {
    // TODO implement

  }
  
  public getAmmoFlags(ammoHash: string | number): IAmmoFlags {
    // TODO implement
    return null;
  }
  
  public setAmmoFlags(ammoHash: string | number, infiniteAmmo: boolean, addSmokeOnExplosion: boolean, fuse: boolean, fixedAfterExplosion: boolean): void {
    // TODO implement

  }
  
  public getAmmoMax(ammoHash: string | number): number {
    // TODO implement
    return 0;
  }
  
  public setAmmoMax(ammoHash: string | number, ammoMax: number): void {
    // TODO implement

  }
  
  public getAmmoMax50(ammoHash: string | number): number {
    // TODO implement
    return 0;
  }
  
  public setAmmoMax50(ammoHash: string | number, ammoMax: number): void {
    // TODO implement

  }
  
  public getAmmoMax100(ammoHash: string | number): number {
    // TODO implement
    return 0;
  }
  
  public setAmmoMax100(ammoHash: string | number, ammoMax: number): void {
    // TODO implement

  }
    // local meta
/**
     * Stores the given value with the specified key.
     *
     * @param key The key of the value to store.
     * @param value The value to store.
     */
  public setLocalMeta<K extends string>(key: K, value: InterfaceValueByKey<ICustomPlayerLocalMeta, K, unknown, void>): void;
  public setLocalMeta<K extends ExtractStringKeys<ICustomPlayerLocalMeta>>(key: K, value: ICustomPlayerLocalMeta[K]): void;
    /** @deprecated See {@link "alt-shared".ICustomPlayerLocalMeta} */
  public setLocalMeta<V extends any, K extends string = string>(key: K, value: InterfaceValueByKey<ICustomPlayerLocalMeta, K, V, void>): void;
  
  public setLocalMeta<K extends string | ExtractStringKeys<ICustomPlayerLocalMeta>, V extends any>(key: K | MetaValues<ICustomPlayerLocalMeta>, value: InterfaceValueByKey<ICustomPlayerLocalMeta, K, unknown, void> | ICustomPlayerLocalMeta[K] | InterfaceValueByKey<ICustomPlayerLocalMeta, K, V, void>): void {
    // TODO implement

  }
  public deleteLocalMeta(key: string): void;
  
  public deleteLocalMeta<K extends ExtractStringKeys<ICustomPlayerLocalMeta>>(key: string | K): void {
    // TODO implement

  }
    /**
     * Gets a value using the specified key.
     *
     * @param key The key of the value to get.
     * @returns Dynamic value associated with the specified key or undefined if no data is present.
     */
  public getLocalMeta<K extends string>(key: Exclude<K, never>): unknown;
  public getLocalMeta<K extends ExtractStringKeys<ICustomPlayerLocalMeta>>(key: K): ICustomPlayerLocalMeta[K];
    /** @deprecated See {@link "alt-shared".ICustomPlayerLocalMeta} */
  
  public getLocalMeta<K extends string | ExtractStringKeys<ICustomPlayerLocalMeta>, V extends any>(key: Exclude<K, never> | string): unknown | ICustomPlayerLocalMeta[K] | V {
    // TODO implement
    return null;
  }
  public hasLocalMeta(key: string): boolean;
  
  public hasLocalMeta<K extends ExtractStringKeys<ICustomPlayerLocalMeta>>(key: string | K): boolean {
    // TODO implement
    return false;
  }
  
  public getLocalMetaKeys(): readonly string[] {
    // TODO implement
    return [];
  }
    // normal meta
  public setMeta<K extends string>(key: K, value: InterfaceValueByKey<ICustomPlayerMeta, K, unknown, void>): void;
  public setMeta<K extends ExtractStringKeys<ICustomPlayerMeta>>(key: K, value: ICustomPlayerMeta[K]): void;
    /** @deprecated See {@link ICustomPlayerMeta} */
  public setMeta<V extends any, K extends string = string>(key: K, value: InterfaceValueByKey<ICustomPlayerMeta, K, V, void>): void;
  
  public setMeta<K extends string | ExtractStringKeys<ICustomPlayerMeta>, V extends any>(key: K | MetaValues<ICustomPlayerMeta>, value: InterfaceValueByKey<ICustomPlayerMeta, K, unknown, void> | ICustomPlayerMeta[K] | InterfaceValueByKey<ICustomPlayerMeta, K, V, void>): void {
    // TODO implement

  }
  public deleteMeta(key: string): void;
  
  public deleteMeta<K extends ExtractStringKeys<ICustomPlayerMeta>>(key: string | K): void {
    // TODO implement

  }
  public getMeta<K extends string>(key: Exclude<K, never>): unknown;
  public getMeta<K extends ExtractStringKeys<ICustomPlayerMeta>>(key: K): ICustomPlayerMeta[K];
    /** @deprecated See {@link ICustomPlayerMeta} */
  
  public getMeta<K extends string | ExtractStringKeys<ICustomPlayerMeta>, V extends any>(key: Exclude<K, never> | string): unknown | ICustomPlayerMeta[K] | V {
    // TODO implement
    return null;
  }
  public hasMeta(key: string): boolean;
  
  public hasMeta<K extends ExtractStringKeys<ICustomPlayerMeta>>(key: string | K): boolean {
    // TODO implement
    return false;
  }
    // synced meta
  public setSyncedMeta<K extends string>(key: K, value: InterfaceValueByKey<ICustomPlayerSyncedMeta, K, unknown, void>): void;
  public setSyncedMeta<K extends ExtractStringKeys<ICustomPlayerSyncedMeta>>(key: K, value: ICustomPlayerSyncedMeta[K]): void;
    /** @deprecated See {@link "alt-shared".ICustomPlayerSyncedMeta} */
  public setSyncedMeta<V extends any, K extends string = string>(key: K, value: InterfaceValueByKey<ICustomPlayerSyncedMeta, K, V, void>): void;
  
  public setSyncedMeta<K extends string | ExtractStringKeys<ICustomPlayerSyncedMeta>, V extends any>(key: K | MetaValues<ICustomPlayerSyncedMeta>, value: InterfaceValueByKey<ICustomPlayerSyncedMeta, K, unknown, void> | ICustomPlayerSyncedMeta[K] | InterfaceValueByKey<ICustomPlayerSyncedMeta, K, V, void>): void {
    // TODO implement

  }
  public deleteSyncedMeta(key: string): void;
  
  public deleteSyncedMeta<K extends ExtractStringKeys<ICustomPlayerSyncedMeta>>(key: string | K): void {
    // TODO implement

  }
  public getSyncedMeta<K extends string>(key: Exclude<K, never>): unknown;
  public getSyncedMeta<K extends ExtractStringKeys<ICustomPlayerSyncedMeta>>(key: K): ICustomPlayerSyncedMeta[K];
    /** @deprecated See {@link "alt-shared".ICustomPlayerSyncedMeta} */
  
  public getSyncedMeta<K extends string | ExtractStringKeys<ICustomPlayerSyncedMeta>, V extends any>(key: Exclude<K, never> | string): unknown | ICustomPlayerSyncedMeta[K] | V {
    // TODO implement
    return null;
  }
  public hasSyncedMeta(key: string): boolean;
  
  public hasSyncedMeta<K extends ExtractStringKeys<ICustomPlayerSyncedMeta>>(key: string | K): boolean {
    // TODO implement
    return false;
  }
    // stream synced meta
  public setStreamSyncedMeta<K extends string>(key: K, value: InterfaceValueByKey<ICustomPlayerStreamSyncedMeta, K, unknown, void>): void;
  public setStreamSyncedMeta<K extends ExtractStringKeys<ICustomPlayerStreamSyncedMeta>>(key: K, value: ICustomPlayerStreamSyncedMeta[K]): void;
    /** @deprecated See {@link "alt-shared".ICustomPlayerStreamSyncedMeta} */
  public setStreamSyncedMeta<V extends any, K extends string = string>(key: K, value: InterfaceValueByKey<ICustomPlayerStreamSyncedMeta, K, V, void>): void;
  
  public setStreamSyncedMeta<K extends string | ExtractStringKeys<ICustomPlayerStreamSyncedMeta>, V extends any>(key: K | MetaValues<ICustomPlayerStreamSyncedMeta>, value: InterfaceValueByKey<ICustomPlayerStreamSyncedMeta, K, unknown, void> | ICustomPlayerStreamSyncedMeta[K] | InterfaceValueByKey<ICustomPlayerStreamSyncedMeta, K, V, void>): void {
    // TODO implement

  }
  public deleteStreamSyncedMeta(key: string): void;
  
  public deleteStreamSyncedMeta<K extends ExtractStringKeys<ICustomPlayerStreamSyncedMeta>>(key: string | K): void {
    // TODO implement

  }
  public getStreamSyncedMeta<K extends string>(key: Exclude<K, never>): unknown;
  public getStreamSyncedMeta<K extends ExtractStringKeys<ICustomPlayerStreamSyncedMeta>>(key: K): ICustomPlayerStreamSyncedMeta[K];
    /** @deprecated See {@link "alt-shared".ICustomPlayerStreamSyncedMeta} */
  
  public getStreamSyncedMeta<K extends string | ExtractStringKeys<ICustomPlayerStreamSyncedMeta>, V extends any>(key: Exclude<K, never> | string): unknown | ICustomPlayerStreamSyncedMeta[K] | V {
    // TODO implement
    return null;
  }
  public hasStreamSyncedMeta(key: string): boolean;
  
  public hasStreamSyncedMeta<K extends ExtractStringKeys<ICustomPlayerStreamSyncedMeta>>(key: string | K): boolean {
    // TODO implement
    return false;
  }
}

export class Vehicle extends Entity {
  public constructor(model: string | number, pos: IVector3, rot: IVector3, streamingDistance: number) {
    super();
    // TODO: Implement constructor
  }
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
  public static get model(): number {
        // TODO Implement
            return 0;;
      }
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
  public activeRadioStation: RadioStation;
    /**
     * Gets or sets the additional body health.
     */
  public bodyAdditionalHealth: number;
    /**
     * Gets or sets the body health.
     */
  public bodyHealth: number;
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
  public customPrimaryColor: RGBA;
    /**
     * Gets or sets the custom secondary color as a RGBA type.
     * @example
     * ```js
     * const someVehicle = new alt.Vehicle('elegy', 0, 0, 0, 0, 0, 0);
     * someVehicle.customSecondaryColor = new alt.RGBA(255, 0, 0);
     * console.log(`Vehicle custom secondary color was set to red`);
     * ```
     */
  public customSecondaryColor: RGBA;
    /**
     * Gets or sets if the vehicle instance has custom tires.
     */
  public customTires: boolean;
    /**
     * Applies some decoration effects to the vehicle (e.g.: It makes the hydra looking rusty or applies snow to the front bumper of `policeold1`). Does not work on every vehicle model.
     *
     * @example
     * ```js
     * const someVehicle = new alt.Vehicle('elegy', 0, 0, 0, 0, 0, 0);
     * someVehicle.darkness = 500;
     * ```
     */
  public darkness: number;
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
  public dashboardColor: number;
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
  public readonly daylightOn: boolean;
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
  public readonly destroyed: boolean;
    /**
     * Gets or sets the dirt level of the vehicle.
     */
  public dirtLevel: number;
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
  public readonly driver: Player;
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
  public readonly passengers: IVehiclePassenger;
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
  public engineHealth: number;
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
  public engineOn: boolean;
    /**
     * Gets if a flamethrower of a vehicle is active on vehicle models like `cerberus`.
     */
  public readonly flamethrowerActive: boolean;
    /**
     * Gets if the handbrake of a car is active.
     */
  public readonly handbrakeActive: boolean;
    /**
     * Gets if the car has armored windows.
     */
  public readonly hasArmoredWindows: boolean;
    /**
     * Gets or sets the headlight color of a vehicle.
     */
  public headlightColor: number;
    /**
     * Gets or sets the interior color of a vehicle.
     */
  public interiorColor: number;
    /**
     * Gets or sets the lights intensity and distance of a vehicle.
     */
  public lightsMultiplier: number;
    /**
     * Gets or sets the livery of a vehicle.
     */
  public livery: number;
    /**
     * Gets or sets the lock state of a vehicle.
     */
  public lockState: VehicleLockState;
    /**
     * Enables or disables the manual engine control.
     */
  public manualEngineControl: boolean;
    /**
     * Gets or sets the current mod kit of a vehicle.
     */
  public modKit: number;
    /**
     * Gets the maximum amount of vehicle mod kits available.
     */
  public readonly modKitsCount: number;
    /**
     * Enables or disables a neon light on a specific position.
     */
  public neon: IVehicleNeon;
    /**
     * Gets or sets the color of the neon lights.
     */
  public neonColor: RGBA;
    /**
     * Gets the current state of the nightlights.
     */
  public readonly nightlightOn: boolean;
    /**
     * Gets or sets the current number plate style.
     */
  public numberPlateIndex: NumberPlateStyle;
    /**
     * Gets or sets the current text displayed on the number plate.
     */
  public numberPlateText: string;
    /**
     * Gets or sets the pearl color of a vehicle.
     */
  public pearlColor: number;
    /**
     * Gets or sets the current health amount of the petrol tank.
     */
  public petrolTankHealth: number;
    /**
     * Gets or sets the current primary color of a vehicle.
     */
  public primaryColor: number;
    /**
     * Gets how often a vehicle got repaired.
     */
  public readonly repairsCount: number;
    /**
     * Gets or sets the roof livery of a vehicle.
     */
  public roofLivery: number;
    /**
     * Gets or sets the roof state of a vehicle (closed or open).
     *
     * @deprecated Use {@link roofClosed} instead.
     */
  public roofState: boolean;
    /**
     * Opens or closes the vehicle roof (if vehicle has this feature, otherwise it is always `true`).
     *
     * @example
     * ```js
     * const surano = new alt.Vehicle('surano', 0, 0, 72, 0, 0, 0);
     * surano.roofClosed = false; // Hides the roof of the car
     * ```
     */
  public roofClosed: boolean;
    /**
     * Gets or sets the current secondary color.
     */
  public secondaryColor: number;
    /**
     * Gets or sets the siren state of a vehicle.
     */
  public sirenActive: boolean;
    /**
     * Gets or sets the color of the tire smoke.
     */
  public tireSmokeColor: RGBA;
    /**
     * Gets or sets the wheel color.
     */
  public wheelColor: number;
    /**
     * Gets the amount of wheels of a vehicle.
     */
  public readonly wheelsCount: number;
    /**
     * Gets the wheel type.
     */
  public readonly wheelType: number;
    /**
     * Gets the type of the front wheels.
     */
  public readonly frontWheels: number;
    /**
     * Gets the type of the rear wheels.
     */
  public readonly rearWheels: number;
    /**
     * Gets or sets the window tint of a vehicle.
     */
  public windowTint: WindowTint;
    /**
     * Gets a vehicle that is attached to the vehicle instance.
     */
  public readonly attached: Vehicle;
    /**
     * Gets a vehicle where the vehicle is attached to.
     */
  public readonly attachedTo: Vehicle;
    /**
     * Gets the velocity vector of a vehicle.
     */
  public readonly velocity: Vector3;
    /**
     * Gets or sets the drift mode state of the vehicle.
     */
  public driftModeEnabled: boolean;
    /**
     * Gets or sets the vehicles rotation with a quaternion.
     */
  public quaternion: Quaternion;
    /**
     * Gets or sets if the created train is a mission train.
     */
  public isMissionTrain: boolean;
    /**
     * Gets or sets the track id of the train.
     *
     * @remarks Valid track ids are between 0 and 11.
     */
  public trainTrackId: number;
    /**
     * Gets the engine of the train.
     */
  public readonly trainEngineId: Vehicle;
    /**
     * Gets or sets the trains config index.
     *
     * @remarks You can find a list of all possible config indices in the trains.xml. Valid indices are between 1 and 25.
     */
  public trainConfigIndex: number;
    /**
     * Gets or sets the distance of the trains to the engine.
     */
  public trainDistanceFromEngine: number;
    /**
     * Gets or sets if the train is the engine of the train.
     */
  public isTrainEngine: boolean;
    /**
     * Gets or sets if the train is a caboose.
     */
  public isTrainCaboose: boolean;
    /**
     * Gets or sets if the train is a passenger carriage.
     */
  public trainPassengerCarriages: boolean;
    /**
     * Gets or sets the direction of the train.
     */
  public trainDirection: boolean;
    /**
     * Gets or sets if the trains is rendered derailed.
     */
  public trainRenderDerailed: boolean;
    /**
     * Gets or sets if the doors of the trains should be forced open.
     */
  public trainForceDoorsOpen: boolean;
    /**
     * Gets or sets the cruise speed of the train.
     */
  public trainCruiseSpeed: number;
    /**
     * Gets or sets the config index of the train's carriage.
     */
  public trainCarriageConfigIndex: number;
    /**
     * Gets another train that is linked to the back of the train. Returns null if there is no linked train.
     */
  public readonly trainLinkedToBackwardId: Vehicle;
    /**
     * Gets another train that is linked to the back of the train. Returns null if there is no linked train in front.
     */
  public readonly trainLinkedToForwardId: Vehicle;
  public trainUnk1: boolean;
  public trainUnk2: boolean;
  public trainUnk3: boolean;
    /**
     * Gets or sets the status of the boat anchor.
     */
  public boatAnchorActive: boolean;
  public lightState: number;
  public hornActive: boolean;
  public readonly timedExplosionTime: number;
  public readonly timedExplosionCulprit: Player;
  public readonly hasTimedExplosion: boolean;
  public rocketRefuelSpeed: number;
  public counterMeasureCount: number;
    /**
     * @remarks Value is in meters per second.
     */
  public scriptMaxSpeed: number;
  public hybridExtraActive: boolean;
  public hybridExtraState: number;
  public readonly steeringAngle: number;
  public readonly accelerationLevel: number;
  public readonly brakeLevel: number;
    /**
     * Retrieves the vehicle from the pool.
     *
     * @param id The id of the vehicle.
     * @returns Vehicle if it was found, otherwise null.
     */
  
  public static getByID(id: number): Vehicle {
    // TODO implement
    return null;
  }
    /**
     * Returns if a specific wheel has a tire.
     *
     * @param wheelId The specific wheel based on the id
     * @returns True when the wheel has a tire, otherwise false.
     */
  
  public doesWheelHasTire(wheelId: number): boolean {
    // TODO implement
    return false;
  }
    /**
     * Returns the appearance of a vehicle as a base64 string.
     *
     * @returns A base64 string.
     */
  
  public getAppearanceDataBase64(): string {
    // TODO implement
    return "";
  }
    /**
     * Returns the health of a specific armored window.
     *
     * @param windowId The window id.
     * @returns The amount of health.
     */
  
  public getArmoredWindowHealth(windowId: number): number {
    // TODO implement
    return 0;
  }
    /**
     * Returns the amount of shoots that a specific armoured window received.
     *
     * @param windowId The window id.
     * @returns The amount of shoots that a window received.
     */
  
  public getArmoredWindowShootCount(windowId: number): number {
    // TODO implement
    return 0;
  }
    /**
     * Returns the damage level of a specific bumper.
     *
     * @param bumperId The id of a bumper.
     * @returns The damage level of a bumper.
     */
  public getBumperDamageLevel(bumperId: VehicleBumper): VehicleBumperDamage;
  
  public getBumperDamageLevel<T extends number, V extends number>(bumperId: VehicleBumper | T): VehicleBumperDamage | V {
    // TODO implement
    return null;
  }
    /**
     * Returns the damage status of a vehicle as a base64 string.
     *
     * @returns A base64 string of the damage status.
     */
  
  public getDamageStatusBase64(): string {
    // TODO implement
    return "";
  }
    /**
     * Returns the state of a specific door.
     *
     * @param doorId The id of the door.
     * @returns The state of the door.
     */
  public getDoorState(doorId: VehicleDoor): VehicleDoorState;
  
  public getDoorState<T extends number, V extends number>(doorId: VehicleDoor | T): VehicleDoorState | V {
    // TODO implement
    return null;
  }
    /**
     * Returns the state of a specific extra of a vehicle.
     *
     * @remarks Extras are not available on every vehicle model.
     *
     * @param extraId The id of the extra.
     * @returns True when the extra is enabled, otherwise false.
     */
  
  public getExtra(extraId: number): boolean {
    // TODO implement
    return false;
  }
    /**
     * Returns the game state data of a vehicle as a base64 string.
     *
     * @returns A base64 string of the game state data.
     */
  
  public getGamestateDataBase64(): string {
    // TODO implement
    return "";
  }
    /**
     * Returns the health data of a vehicle as a base64 string.
     *
     * @returns A base64 string of the health data.
     */
  
  public getHealthDataBase64(): string {
    // TODO implement
    return "";
  }
    /**
     * Returns the mod value for a specific mod type.
     *
     * @param modType The id of the mod type.
     * @returns The value of the mod type.
     */
  public getMod(modType: VehicleModType): number;
  
  public getMod<T extends number>(modType: VehicleModType): number {
    // TODO implement
    return 0;
  }
    /**
     * Returns the amount of possible mod values for a specific mod type.
     *
     * @param modType The id of the mod type.
     * @returns The amount of possible mod values of a mod type.
     */
  public getModsCount(modType: VehicleModType): number;
  
  public getModsCount<T extends number>(modType: VehicleModType): number {
    // TODO implement
    return 0;
  }
    /**
     * Returns the amount of bullet holes of a vehicle part.
     *
     * @param partId The id of a vehicle part.
     * @returns The amount of bullet holes of a vehicle part.
     */
  public getPartBulletHoles(partId: VehiclePart): number;
  
  public getPartBulletHoles<T extends number>(partId: VehiclePart | T): number {
    // TODO implement
    return 0;
  }
    /**
     * Returns the damage level of a vehicle part.
     *
     * @param partId The id of a vehicle part.
     * @returns The damage level of a vehicle part.
     */
  public getPartDamageLevel(partId: VehiclePart): VehiclePartDamage;
  
  public getPartDamageLevel<T extends number, V extends number>(partId: VehiclePart | T): VehiclePartDamage | V {
    // TODO implement
    return null;
  }
    /**
     * Returns the script data of a vehicle as a base64 string.
     *
     * @returns A base64 string of the script data.
     */
  
  public getScriptDataBase64(): string {
    // TODO implement
    return "";
  }
    /**
     * Returns the health of a specific wheel.
     *
     * @param wheelId The id of the wheel.
     * @returns The amount of health of a specific wheel.
     */
  
  public getWheelHealth(wheelId: number): number {
    // TODO implement
    return 0;
  }
    /**
     * Returns if a specific light is damaged.
     *
     * @param lightId The id of the light.
     * @returns True if the light is damaged, otherwise false.
     */
  
  public isLightDamaged(lightId: number): boolean {
    // TODO implement
    return false;
  }
    /**
     * Returns if a specific special light is damaged.
     *
     * @param specialLightId The id of the special light.
     * @returns True if the special light is damaged, otherwise false.
     */
  
  public isSpecialLightDamaged(specialLightId: number): boolean {
    // TODO implement
    return false;
  }
    /**
     * Returns if a specific wheel is burst.
     *
     * @param wheelId The id of the wheel.
     * @returns True if the wheel is burst, otherwise false.
     */
  
  public isWheelBurst(wheelId: number): boolean {
    // TODO implement
    return false;
  }
    /**
     * Returns if a specific wheel is detached.
     *
     * @param wheelId The id of the wheel.
     * @returns True if the wheel is detached, otherwise false.
     */
  
  public isWheelDetached(wheelId: number): boolean {
    // TODO implement
    return false;
  }
    /**
     * Returns if a specific wheel is on fire.
     *
     * @param wheelId The id of the wheel.
     * @returns True if the wheel is on fire, otherwise false.
     */
  
  public isWheelOnFire(wheelId: number): boolean {
    // TODO implement
    return false;
  }
    /**
     * Returns if a specific window is damaged.
     *
     * @param windowId The id of the window.
     * @returns True if the window is damaged, otherwise false.
     */
  
  public isWindowDamaged(windowId: number): boolean {
    // TODO implement
    return false;
  }
    /**
     * Returns if a specific window is open.
     *
     * @param windowId The id of the window.
     * @returns True if the window is open, otherwise false.
     */
  
  public isWindowOpened(windowId: number): boolean {
    // TODO implement
    return false;
  }
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
  
  public repair(): void {
    // TODO implement

  }
    /**
     * Sets the appearance of a vehicle with a base64 string.
     *
     * @param data The base64 string of the appearance data.
     */
  
  public setAppearanceDataBase64(data: string): void {
    // TODO implement

  }
    /**
     * Sets the health of a specific armored window.
     *
     * @param windowId The id of the window.
     * @param health The amount of health.
     */
  
  public setArmoredWindowHealth(windowId: number, health: number): void {
    // TODO implement

  }
    /**
     * Sets the shoot count of a specific armoured window.
     *
     * @param windowId The id of the window.
     * @param count The amount of shoots.
     */
  
  public setArmoredWindowShootCount(windowId: number, count: number): void {
    // TODO implement

  }
    /**
     * Sets the damage level of a specific bumper.
     *
     * @param bumperId The id of the bumper.
     * @param level The damage level.
     */
  public setBumperDamageLevel(bumperId: VehicleBumper, level: VehicleBumperDamage): void;
  
  public setBumperDamageLevel<T extends number, V extends number>(bumperId: VehicleBumper | T, level: VehicleBumperDamage): void {
    // TODO implement

  }
    /**
     * Sets the damage status of a vehicle based on a base64 string.
     *
     * @param data A base64 string that represents the damage status.
     */
  
  public setDamageStatusBase64(data: string): void {
    // TODO implement

  }
    /**
     * Sets the state of a specific door
     *
     * @param doorId The id of the door.
     * @param state The state of the door.
     */
  public setDoorState(doorId: VehicleDoor, state: VehicleDoorState): void;
  
  public setDoorState<T extends number, V extends number>(doorId: VehicleDoor | T, state: VehicleDoorState): void {
    // TODO implement

  }
    /**
     * Sets the state of an extra of a vehicle.
     *
     * @remarks Setting extras on vehicle does not work for every vehicle model. For example you can change the light bar of a police car with this method.
     *
     * @param extraId The id of the extra.
     * @param state The state of the extra.
     */
  
  public setExtra(extraId: number, state: boolean): void {
    // TODO implement

  }
    /**
     * Sets the game state data of a vehicle with a given base64 string.
     *
     * @param data A base64 string that represents the game state data.
     */
  
  public setGamestateDataBase64(data: string): void {
    // TODO implement

  }
    /**
     * Sets the health data of a vehicle with a given base64 string.
     *
     * @param data A base64 string that represents the health data.
     */
  
  public setHealthDataBase64(data: string): void {
    // TODO implement

  }
    /**
     * Sets a specific light of the vehicle either damaged or not.
     *
     * @param lightId The id of the light.
     * @param isDamaged True to damage the specific light, otherwise false.
     */
  
  public setLightDamaged(lightId: number, isDamaged: boolean): void {
    // TODO implement

  }
    /**
     * Applies a specific mod of a given mod type.
     *
     * @param modType The type of the mod.
     * @param modId The id of the mod.
     */
  public setMod(modType: VehicleModType, modId: number): void;
  
  public setMod<T extends number>(modType: VehicleModType, modId: number): void {
    // TODO implement

  }
    /**
     * Applies bullet holes to a specific vehicle part.
     *
     * @param partId The id of the part.
     * @param count The amount of bullet holes.
     */
  public setPartBulletHoles(partId: VehiclePart, count: number): void;
  
  public setPartBulletHoles<T extends number>(partId: VehiclePart | T, count: number): void {
    // TODO implement

  }
    /**
     * Sets the damage level of a vehicle part.
     *
     * @param partId The id of the part.
     * @param level The damage level.
     */
  public setPartDamageLevel(partId: VehiclePart, level: VehiclePartDamage): void;
  
  public setPartDamageLevel<T extends number, V extends number>(partId: VehiclePart | T, level: VehiclePartDamage): void {
    // TODO implement

  }
    /**
     * Sets type of the rear wheels.
     *
     * @param wheelId The id of the rear wheel type.
     */
  
  public setRearWheels(wheelId: number): void {
    // TODO implement

  }
    /**
     * Sets the script data of a vehicle based on a base64 string.
     *
     * @param data A base64 string that represents the script data.
     */
  
  public setScriptDataBase64(data: string): void {
    // TODO implement

  }
    /**
     * Sets if a special light is damaged.
     *
     * @param specialLightId The id of the special light.
     * @param isDamaged True to damage the specific special light, otherwise false.
     */
  
  public setSpecialLightDamaged(specialLightId: number, isDamaged: boolean): void {
    // TODO implement

  }
    /**
     * Sets if a specific wheel is burst.
     *
     * @param wheelId The id of the wheel.
     * @param state True to burst the wheel, otherwise false.
     */
  
  public setWheelBurst(wheelId: number, state: boolean): void {
    // TODO implement

  }
    /**
     * Sets a wheel either detached or attached.
     *
     * @param wheelId The id of the wheel.
     * @param state True to detach the wheel, otherwise false.
     */
  
  public setWheelDetached(wheelId: number, state: boolean): void {
    // TODO implement

  }
    /**
     * Sets if a specific wheel has a tire.
     *
     * @param wheelId The id of the wheel.
     * @param state True to apply a tire to a wheel, otherwise false.
     */
  
  public setWheelHasTire(wheelId: number, state: boolean): void {
    // TODO implement

  }
    /**
     * Sets the health of a specific wheel.
     *
     * @param wheelId The id of the wheel.
     * @param health The health of the wheel.
     */
  
  public setWheelHealth(wheelId: number, health: number): void {
    // TODO implement

  }
    /**
     * Sets a wheel either on fire or not
     *
     * @param wheelId The id of the wheel.
     * @param state True to set the wheel on fire, otherwise false.
     */
  
  public setWheelOnFire(wheelId: number, state: boolean): void {
    // TODO implement

  }
    /**
     * Applies a wheel style based on the type and variation.
     *
     * @param wheelType The type of the wheel.
     * @param wheelId The variation id of the wheel.
     */
  
  public setWheels(wheelType: number, wheelId: number): void {
    // TODO implement

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
    /**
     * Sets if a specific window is damaged.
     *
     * @param windowId The id of the window.
     * @param isDamaged True to damage the specific window, otherwise false.
     */
  
  public setWindowDamaged(windowId: number, isDamaged: boolean): void {
    // TODO implement

  }
    /**
     * Sets if a specific window is open.
     *
     * @param windowId The id of the window.
     * @param state True to open the window, otherwise false.
     */
  
  public setWindowOpened(windowId: number, state: boolean): void {
    // TODO implement

  }
    /**
     * Repairs a specific wheel.
     *
     * @param wheelId The id of the wheel.
     */
  
  public setWheelFixed(wheelId: number): void {
    // TODO implement

  }
    /**
     * Set a train as an engine of a train.
     *
     * @param vehicle The vehicle to set as an engine.
     */
  
  public setTrainEngineId(vehicle: Vehicle): void {
    // TODO implement

  }
    /**
     * Links another train to the back of the train.
     *
     * @param vehicle The vehicle to set as linked to the back of the train.
     */
  
  public setTrainLinkedToBackwardId(vehicle: Vehicle): void {
    // TODO implement

  }
    /**
     * Links another train to the front of the train.
     *
     * @param vehicle The vehicle to set as linked to the front of the train.
     */
  
  public setTrainLinkedToForwardId(vehicle: Vehicle): void {
    // TODO implement

  }
    /**
     * Activates the searchlight and follows the target.
     *
     * @remarks Entity parameter isn't working for now and this can only be used for helicopter searchlights.
     */
  
  public setSearchLightTo(entity: Entity, state: boolean): void {
    // TODO implement

  }
  
  public setTimedExplosion(state: boolean, culprit: Player, time: number): void {
    // TODO implement

  }
  
  public getWeaponCapacity(weaponIndex: number): number {
    // TODO implement
    return 0;
  }
  
  public setWeaponCapacity(weaponIndex: number, capacity: number): void {
    // TODO implement

  }
  
  public setBadge(textureDictionary: number, texture: number, pos: VehicleBadgePosition, pos2: VehicleBadgePosition, pos3: VehicleBadgePosition, pos4: VehicleBadgePosition): void {
    // TODO implement

  }
    // normal meta
  public setMeta<K extends string>(key: K, value: InterfaceValueByKey<ICustomVehicleMeta, K, unknown, void>): void;
  public setMeta<K extends ExtractStringKeys<ICustomVehicleMeta>>(key: K, value: ICustomVehicleMeta[K]): void;
    /** @deprecated See {@link ICustomVehicleMeta} */
  public setMeta<V extends any, K extends string = string>(key: K, value: InterfaceValueByKey<ICustomVehicleMeta, K, V, void>): void;
  
  public setMeta<K extends string | ExtractStringKeys<ICustomVehicleMeta>, V extends any>(key: K | MetaValues<ICustomVehicleMeta>, value: InterfaceValueByKey<ICustomVehicleMeta, K, unknown, void> | ICustomVehicleMeta[K] | InterfaceValueByKey<ICustomVehicleMeta, K, V, void>): void {
    // TODO implement

  }
  public deleteMeta(key: string): void;
  
  public deleteMeta<K extends ExtractStringKeys<ICustomVehicleMeta>>(key: string | K): void {
    // TODO implement

  }
  public getMeta<K extends string>(key: Exclude<K, never>): unknown;
  public getMeta<K extends ExtractStringKeys<ICustomVehicleMeta>>(key: K): ICustomVehicleMeta[K];
    /** @deprecated See {@link ICustomVehicleMeta} */
  
  public getMeta<K extends string | ExtractStringKeys<ICustomVehicleMeta>, V extends any>(key: Exclude<K, never> | string): unknown | ICustomVehicleMeta[K] | V {
    // TODO implement
    return null;
  }
  public hasMeta(key: string): boolean;
  
  public hasMeta<K extends ExtractStringKeys<ICustomVehicleMeta>>(key: string | K): boolean {
    // TODO implement
    return false;
  }
    // synced meta
  public setSyncedMeta<K extends string>(key: K, value: InterfaceValueByKey<ICustomVehicleSyncedMeta, K, unknown, void>): void;
  public setSyncedMeta<K extends ExtractStringKeys<ICustomVehicleSyncedMeta>>(key: K, value: ICustomVehicleSyncedMeta[K]): void;
    /** @deprecated See {@link "alt-shared".ICustomVehicleSyncedMeta} */
  public setSyncedMeta<V extends any, K extends string = string>(key: K, value: InterfaceValueByKey<ICustomVehicleSyncedMeta, K, V, void>): void;
  
  public setSyncedMeta<K extends string | ExtractStringKeys<ICustomVehicleSyncedMeta>, V extends any>(key: K | MetaValues<ICustomVehicleSyncedMeta>, value: InterfaceValueByKey<ICustomVehicleSyncedMeta, K, unknown, void> | ICustomVehicleSyncedMeta[K] | InterfaceValueByKey<ICustomVehicleSyncedMeta, K, V, void>): void {
    // TODO implement

  }
  public deleteSyncedMeta(key: string): void;
  
  public deleteSyncedMeta<K extends ExtractStringKeys<ICustomVehicleSyncedMeta>>(key: string | K): void {
    // TODO implement

  }
  public getSyncedMeta<K extends string>(key: Exclude<K, never>): unknown;
  public getSyncedMeta<K extends ExtractStringKeys<ICustomVehicleSyncedMeta>>(key: K): ICustomVehicleSyncedMeta[K];
    /** @deprecated See {@link "alt-shared".ICustomVehicleSyncedMeta} */
  
  public getSyncedMeta<K extends string | ExtractStringKeys<ICustomVehicleSyncedMeta>, V extends any>(key: Exclude<K, never> | string): unknown | ICustomVehicleSyncedMeta[K] | V {
    // TODO implement
    return null;
  }
  public hasSyncedMeta(key: string): boolean;
  
  public hasSyncedMeta<K extends ExtractStringKeys<ICustomVehicleSyncedMeta>>(key: string | K): boolean {
    // TODO implement
    return false;
  }
    // stream synced meta
  public setStreamSyncedMeta<K extends string>(key: K, value: InterfaceValueByKey<ICustomVehicleStreamSyncedMeta, K, unknown, void>): void;
  public setStreamSyncedMeta<K extends ExtractStringKeys<ICustomVehicleStreamSyncedMeta>>(key: K, value: ICustomVehicleStreamSyncedMeta[K]): void;
    /** @deprecated See {@link "alt-shared".ICustomVehicleStreamSyncedMeta} */
  public setStreamSyncedMeta<V extends any, K extends string = string>(key: K, value: InterfaceValueByKey<ICustomVehicleStreamSyncedMeta, K, V, void>): void;
  
  public setStreamSyncedMeta<K extends string | ExtractStringKeys<ICustomVehicleStreamSyncedMeta>, V extends any>(key: K | MetaValues<ICustomVehicleStreamSyncedMeta>, value: InterfaceValueByKey<ICustomVehicleStreamSyncedMeta, K, unknown, void> | ICustomVehicleStreamSyncedMeta[K] | InterfaceValueByKey<ICustomVehicleStreamSyncedMeta, K, V, void>): void {
    // TODO implement

  }
  public deleteStreamSyncedMeta(key: string): void;
  
  public deleteStreamSyncedMeta<K extends ExtractStringKeys<ICustomVehicleStreamSyncedMeta>>(key: string | K): void {
    // TODO implement

  }
  public getStreamSyncedMeta<K extends string>(key: Exclude<K, never>): unknown;
  public getStreamSyncedMeta<K extends ExtractStringKeys<ICustomVehicleStreamSyncedMeta>>(key: K): ICustomVehicleStreamSyncedMeta[K];
    /** @deprecated See {@link "alt-shared".ICustomVehicleStreamSyncedMeta} */
  
  public getStreamSyncedMeta<K extends string | ExtractStringKeys<ICustomVehicleStreamSyncedMeta>, V extends any>(key: Exclude<K, never> | string): unknown | ICustomVehicleStreamSyncedMeta[K] | V {
    // TODO implement
    return null;
  }
  public hasStreamSyncedMeta(key: string): boolean;
  
  public hasStreamSyncedMeta<K extends ExtractStringKeys<ICustomVehicleStreamSyncedMeta>>(key: string | K): boolean {
    // TODO implement
    return false;
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
  public routeColor: RGBA;
  public sprite: BlipSprite;
    /**
     * @remarks Does't properly work for areablips currently.
     */
  public size: Vector2;
  public scale: number;
  public color: number | BlipColor.White | BlipColor.Red | BlipColor.Green | BlipColor.Blue | BlipColor.LightRed | BlipColor.Violet | BlipColor.Pink | BlipColor.LightOrange | BlipColor.LightBrown | BlipColor.LightGreen | BlipColor.LightBlue | BlipColor.LightPurple | BlipColor.DarkPurple | BlipColor.Cyan | BlipColor.LightYellow | BlipColor.Organe | BlipColor.GraniteGreen | BlipColor.DarkBrown | BlipColor.LightGray | BlipColor.LightPink | BlipColor.LemonGreen | BlipColor.ForestGreen | BlipColor.ElectricBlue | BlipColor.BrightPurple | BlipColor.DarkYellow | BlipColor.PinkRed | BlipColor.Orange | BlipColor.BrilliantRose | BlipColor.Salmon | BlipColor.DarkGreen | BlipColor.BlizzardBlue | BlipColor.OracleBlue | BlipColor.Silver | BlipColor.MulberryPink | BlipColor.AltoGray | BlipColor.JellyBeanBlue | BlipColor.DarkOrange | BlipColor.Mamba | BlipColor.White | BlipColor.Red | BlipColor.Green | BlipColor.Blue | BlipColor.LightRed | BlipColor.Violet | BlipColor.Pink | BlipColor.LightOrange | BlipColor.LightBrown | BlipColor.LightGreen | BlipColor.LightBlue | BlipColor.LightPurple | BlipColor.DarkPurple | BlipColor.Cyan | BlipColor.LightYellow | BlipColor.Organe | BlipColor.GraniteGreen | BlipColor.DarkBrown | BlipColor.LightGray | BlipColor.LightPink | BlipColor.LemonGreen | BlipColor.ForestGreen | BlipColor.ElectricBlue | BlipColor.BrightPurple | BlipColor.DarkYellow | BlipColor.PinkRed | BlipColor.Orange | BlipColor.BrilliantRose | BlipColor.Salmon | BlipColor.DarkGreen | BlipColor.BlizzardBlue | BlipColor.OracleBlue | BlipColor.Silver | BlipColor.MulberryPink | BlipColor.AltoGray | BlipColor.JellyBeanBlue | BlipColor.DarkOrange | BlipColor.Mamba;
  public secondaryColor: number | RGBA;
  public alpha: number;
  public flashTimer: number;
  public flashInterval: number;
  public route: boolean;
  public bright: boolean;
  public number: number;
  public display: number;
  public showCone: boolean;
  public flashes: boolean;
  public flashesAlternate: boolean;
  public shortRange: boolean;
  public priority: number;
  public heading: number;
  public gxtName: string;
  public name: string;
  public pulse: boolean;
  public asMissionCreator: boolean;
  public tickVisible: boolean;
  public headingIndicatorVisible: boolean;
  public outlineIndicatorVisible: boolean;
  public friendIndicatorVisible: boolean;
  public crewIndicatorVisible: boolean;
  public category: number;
  public highDetail: boolean;
  public shrinked: boolean;
  public attachedTo: Entity;
  public visible: boolean;
  public blipType: BlipType;
  public isFriendly: boolean;
  public readonly isAttached: boolean;
  public isGlobal: boolean;
  public readonly targets: readonly Player[];
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
  
  public fade(opacity: number, duration: number): void {
    // TODO implement

  }
  
  public addTarget(player: Player): void {
    // TODO implement

  }
  
  public removeTarget(player: Player): void {
    // TODO implement

  }
  public deleteMeta(key: string): void;
  
  public deleteMeta<K extends ExtractStringKeys<ICustomBlipMeta>>(key: string | K): void {
    // TODO implement

  }
  public hasMeta(key: string): boolean;
  
  public hasMeta<K extends ExtractStringKeys<ICustomBlipMeta>>(key: string | K): boolean {
    // TODO implement
    return false;
  }
  public getMeta<K extends string>(key: Exclude<K, never>): unknown;
  public getMeta<K extends ExtractStringKeys<ICustomBlipMeta>>(key: K): ICustomBlipMeta[K];
    /** @deprecated See {@link ICustomBlipMeta} */
  
  public getMeta<K extends string | ExtractStringKeys<ICustomBlipMeta>, V extends any>(key: Exclude<K, never> | string): unknown | ICustomBlipMeta[K] | V {
    // TODO implement
    return null;
  }
  public setMeta<K extends string>(key: K, value: InterfaceValueByKey<ICustomBlipMeta, K, unknown, void>): void;
  public setMeta<K extends ExtractStringKeys<ICustomBlipMeta>>(key: K, value: ICustomBlipMeta[K]): void;
    /** @deprecated See {@link ICustomBlipMeta} */
  public setMeta<V extends any, K extends string = string>(key: K, value: InterfaceValueByKey<ICustomBlipMeta, K, V, void>): void;
  
  public setMeta<K extends string | ExtractStringKeys<ICustomBlipMeta>, V extends any>(key: K | MetaValues<ICustomBlipMeta>, value: InterfaceValueByKey<ICustomBlipMeta, K, unknown, void> | ICustomBlipMeta[K] | InterfaceValueByKey<ICustomBlipMeta, K, V, void>): void {
    // TODO implement

  }
}

export class AreaBlip extends Blip {
  public constructor(x: number, y: number, z: number, width: number, height: number, global: boolean) {
    super();
    // TODO: Implement constructor
  }
}

export class RadiusBlip extends Blip {
  public constructor(x: number, y: number, z: number, radius: number, global: boolean) {
    super();
    // TODO: Implement constructor
  }
}

export class PointBlip extends Blip {
  public constructor(entity: Entity, global: boolean) {
    super();
    // TODO: Implement constructor
  }
}

export class Colshape extends WorldObject {
  public static readonly all: readonly Colshape[];
  public readonly colshapeType: ColShapeType;
    /**
     * Whether this colshape should only trigger its enter/leave events for players or all entities.
     */
  public playersOnly: boolean;
  public readonly radius: number;
  public readonly height: number;
  public readonly min: Vector2 | Vector3;
  public readonly max: Vector2 | Vector3;
  public readonly minZ: number;
  public readonly maxZ: number;
  public readonly points: readonly Vector2[];
    /**
     * Retrieves the colshape from the pool.
     *
     * @param id The id of the colshape.
     * @returns Entity if it was found, otherwise null.
     *
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
  
  public isPointIn(position: IVector3): boolean {
    // TODO implement
    return false;
  }
  public deleteMeta(key: string): void;
  
  public deleteMeta<K extends ExtractStringKeys<ICustomColshapeMeta>>(key: string | K): void {
    // TODO implement

  }
  public hasMeta(key: string): boolean;
  
  public hasMeta<K extends ExtractStringKeys<ICustomColshapeMeta>>(key: string | K): boolean {
    // TODO implement
    return false;
  }
  public getMeta<K extends string>(key: Exclude<K, never>): unknown;
  public getMeta<K extends ExtractStringKeys<ICustomColshapeMeta>>(key: K): ICustomColshapeMeta[K];
    /** @deprecated See {@link ICustomColshapeMeta} */
  
  public getMeta<K extends string | ExtractStringKeys<ICustomColshapeMeta>, V extends any>(key: Exclude<K, never> | string): unknown | ICustomColshapeMeta[K] | V {
    // TODO implement
    return null;
  }
  public setMeta<K extends string>(key: K, value: InterfaceValueByKey<ICustomColshapeMeta, K, unknown, void>): void;
  public setMeta<K extends ExtractStringKeys<ICustomColshapeMeta>>(key: K, value: ICustomColshapeMeta[K]): void;
    /** @deprecated See {@link ICustomColshapeMeta} */
  public setMeta<V extends any, K extends string = string>(key: K, value: InterfaceValueByKey<ICustomColshapeMeta, K, V, void>): void;
  
  public setMeta<K extends string | ExtractStringKeys<ICustomColshapeMeta>, V extends any>(key: K | MetaValues<ICustomColshapeMeta>, value: InterfaceValueByKey<ICustomColshapeMeta, K, unknown, void> | ICustomColshapeMeta[K] | InterfaceValueByKey<ICustomColshapeMeta, K, V, void>): void {
    // TODO implement

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
  public constructor(minZ: number, maxZ: number, points: IVector2[]) {
    super();
    // TODO: Implement constructor
  }
}

export class Checkpoint extends Colshape {
  public constructor(type: CheckpointType, pos: IVector3, radius: number, height: number, color: RGBA, streamingDistance: number) {
    super();
    // TODO: Implement constructor
  }
    /**
     * Streaming range for the checkpoint
     */
  public readonly streamingDistance: number;
  declare public static readonly all: readonly Checkpoint[];
  public static readonly count: number;
  public visible: boolean;
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
  public deleteMeta(key: string): void;
  
  public deleteMeta<K extends ExtractStringKeys<ICustomCheckpointMeta>>(key: string | K): void {
    // TODO implement

  }
  public hasMeta(key: string): boolean;
  
  public hasMeta<K extends ExtractStringKeys<ICustomCheckpointMeta>>(key: string | K): boolean {
    // TODO implement
    return false;
  }
  public getMeta<K extends string>(key: Exclude<K, never>): unknown;
  
  public getMeta<K extends string | ExtractStringKeys<ICustomCheckpointMeta>>(key: Exclude<K, never>): unknown | ICustomCheckpointMeta[K] {
    // TODO implement
    return null;
  }
  public setMeta<K extends string>(key: K, value: InterfaceValueByKey<ICustomCheckpointMeta, K, unknown, void>): void;
  public setMeta<K extends ExtractStringKeys<ICustomCheckpointMeta>>(key: K, value: ICustomCheckpointMeta[K]): void;
  
  public setMeta<K extends string | ExtractStringKeys<ICustomCheckpointMeta>>(key: K | MetaValues<ICustomCheckpointMeta>, value: InterfaceValueByKey<ICustomCheckpointMeta, K, unknown, void> | ICustomCheckpointMeta[K]): void {
    // TODO implement

  }
  public setStreamSyncedMeta<K extends string>(key: K, value: InterfaceValueByKey<ICustomCheckpointStreamSyncedMeta, K, unknown, void>): void;
  public setStreamSyncedMeta<K extends ExtractStringKeys<ICustomCheckpointStreamSyncedMeta>>(key: K, value: ICustomCheckpointStreamSyncedMeta[K]): void;
  
  public setStreamSyncedMeta<K extends string | ExtractStringKeys<ICustomCheckpointStreamSyncedMeta>>(key: K | MetaValues<ICustomCheckpointStreamSyncedMeta>, value: InterfaceValueByKey<ICustomCheckpointStreamSyncedMeta, K, unknown, void> | ICustomCheckpointStreamSyncedMeta[K]): void {
    // TODO implement

  }
  public deleteStreamSyncedMeta(key: string): void;
  
  public deleteStreamSyncedMeta<K extends ExtractStringKeys<ICustomCheckpointStreamSyncedMeta>>(key: string | K): void {
    // TODO implement

  }
  public getStreamSyncedMeta<K extends string>(key: Exclude<K, never>): unknown;
  
  public getStreamSyncedMeta<K extends string | ExtractStringKeys<ICustomCheckpointStreamSyncedMeta>>(key: Exclude<K, never>): unknown | ICustomCheckpointStreamSyncedMeta[K] {
    // TODO implement
    return null;
  }
  public hasStreamSyncedMeta(key: string): boolean;
  
  public hasStreamSyncedMeta<K extends ExtractStringKeys<ICustomCheckpointStreamSyncedMeta>>(key: string | K): boolean {
    // TODO implement
    return false;
  }
  
  public getStreamSyncedMetaKeys(): readonly string[] {
    // TODO implement
    return [];
  }
}
export namespace Utils {

}

export class VoiceChannel extends BaseObject {
  public constructor(isSpatial: boolean, maxDistance: number) {
    super();
    // TODO: Implement constructor
  }
  public readonly maxDistance: number;
  public readonly isSpatial: boolean;
    /**
     * Priority of voice channel.
     * If a player is in two channels and both can be heard by another player, only one should play the voice.
     * Value is of type integer, can be negative.
     */
  public priority: number;
    /**
     * Hash of the filter name (should also be created on clientside).
     * See docs: [Audio filters](https://docs.altv.mp/articles/audio_filters.html), [Voice](https://docs.altv.mp/articles/voice.html).
     */
  public filter: number;
  public readonly players: readonly Player[];
  public readonly playerCount: number;
  
  public addPlayer(player: Player): void {
    // TODO implement

  }
  
  public isPlayerInChannel(player: Player): boolean {
    // TODO implement
    return false;
  }
  
  public isPlayerMuted(player: Player): boolean {
    // TODO implement
    return false;
  }
  
  public mutePlayer(player: Player): void {
    // TODO implement

  }
  
  public removePlayer(player: Player): void {
    // TODO implement

  }
  
  public unmutePlayer(player: Player): void {
    // TODO implement

  }
  public deleteMeta(key: string): void;
  
  public deleteMeta<K extends ExtractStringKeys<ICustomVoiceChannelMeta>>(key: string | K): void {
    // TODO implement

  }
  public hasMeta(key: string): boolean;
  
  public hasMeta<K extends ExtractStringKeys<ICustomVoiceChannelMeta>>(key: string | K): boolean {
    // TODO implement
    return false;
  }
  public getMeta<K extends string>(key: Exclude<K, never>): unknown;
  public getMeta<K extends ExtractStringKeys<ICustomVoiceChannelMeta>>(key: K): ICustomVoiceChannelMeta[K];
    /** @deprecated See {@link ICustomVoiceChannelMeta} */
  
  public getMeta<K extends string | ExtractStringKeys<ICustomVoiceChannelMeta>, V extends any>(key: Exclude<K, never> | string): unknown | ICustomVoiceChannelMeta[K] | V {
    // TODO implement
    return null;
  }
  public setMeta<K extends string>(key: K, value: InterfaceValueByKey<ICustomVoiceChannelMeta, K, unknown, void>): void;
  public setMeta<K extends ExtractStringKeys<ICustomVoiceChannelMeta>>(key: K, value: ICustomVoiceChannelMeta[K]): void;
    /** @deprecated See {@link ICustomVoiceChannelMeta} */
  public setMeta<V extends any, K extends string = string>(key: K, value: InterfaceValueByKey<ICustomVoiceChannelMeta, K, V, void>): void;
  
  public setMeta<K extends string | ExtractStringKeys<ICustomVoiceChannelMeta>, V extends any>(key: K | MetaValues<ICustomVoiceChannelMeta>, value: InterfaceValueByKey<ICustomVoiceChannelMeta, K, unknown, void> | ICustomVoiceChannelMeta[K] | InterfaceValueByKey<ICustomVoiceChannelMeta, K, V, void>): void {
    // TODO implement

  }
}

export class Resource extends Resource_1 {
  public readonly path: string;
  declare public static readonly all: readonly Resource[];
  declare public static readonly current: Resource;
  
  public static getByName(name: string): Resource {
    // TODO implement
    return null;
  }
}

export class Utils extends Utils_1 {
  protected constructor() {
    super();
    // TODO: Implement constructor
  }
}

export class Ped extends Entity {
  public constructor(model: string | number, position: IVector3, rotation: IVector3, streamingDistance: number) {
    super();
    // TODO: Implement constructor
  }
  declare public static readonly all: readonly Ped[];
  public static readonly count: number;
  public currentWeapon: number;
  public health: number;
  public maxHealth: number;
  public armour: number;
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
}

export class ServerObject extends Entity {
  public constructor(model: string | number, position: IVector3, rotation: IVector3, alpha: number, textureVariation: number, lodDistance: number, streamingDistance: number) {
    super();
    // TODO: Implement constructor
  }
  declare public static readonly all: readonly Object[];
  public static readonly count: number;
    /** Object transparency, values are between 0 and 255. (0 being fully transparent) */
  public alpha: number;
  public textureVariation: number;
    /** The distance at which the LOD model of the object starts being applied. */
  public lodDistance: number;
  
  public activatePhysics(): void {
    // TODO implement

  }
    /** Places the object properly on the ground. */
  
  public placeOnGroundProperly(): void {
    // TODO implement

  }
  
  public static getByID(id: number): Object {
    // TODO implement
    return null;
  }
}

export class Marker extends WorldObject {
  public constructor(type: MarkerType, position: Vector3, color: RGBA) {
    super();
    // TODO: Implement constructor
  }
  public static readonly all: readonly Marker[];
  public visible: boolean;
  public markerType: MarkerType;
  public color: RGBA;
  public scale: Vector3;
  public rot: Vector3;
  public dir: Vector3;
  public readonly isGlobal: boolean;
  public readonly target: Player;
  public faceCamera: boolean;
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

