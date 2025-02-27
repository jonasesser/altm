import type {KeyCode, BodyPart, Vector2, Vector3, VoiceConnectionState} from "@altm/shared";

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
    keydown: (key: KeyCode) => void;
    keyup: (key: KeyCode) => void;
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
    windowResolutionChange: (oldResolution: Vector2, newResolution: Vector2) => void;
    playerAnimationChange: (target: Player, oldAnimDict: number, newAnimDict: number, oldAnimName: number, newAnimName: number) => void;
    playerWeaponShoot: (weaponHash: number, totalAmmo: number, ammoInClip: number) => void;
    playerWeaponChange: (oldWeapon: number, newWeapon: number) => void;
    baseObjectCreate: (baseObject: BaseObject) => void;
    baseObjectRemove: (baseObject: BaseObject) => void;
    weaponDamage: (target: Entity, weaponHash: number, damage: number, offset: Vector3, bodyPart: BodyPart, sourceEntity: Entity) => number | boolean | void;
    /**
     * Triggers when an Virtual Entity position is changed
     */
    worldObjectPositionChange: (object: WorldObject, oldPosition: Vector3) => void;
    worldObjectStreamIn: (object: WorldObject) => void;
    worldObjectStreamOut: (object: WorldObject) => void;
    metaChange: (target: BaseObject, key: string, value: any, oldValue: any) => void;
    entityEnterColshape: (colshape: Colshape, entity: Entity) => void;
    entityLeaveColshape: (colshape: Colshape, entity: Entity) => void;
    entityHitEntity: (damager: Entity, target: Entity, weaponHash: number) => void;
    playerBulletHit: (weaponHash: number, victim: Entity, position: Vector3) => void;
    voiceConnection: (state: VoiceConnectionState) => void;
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