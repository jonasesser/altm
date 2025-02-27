import { EntityType, Vector3 } from '@altm/shared';

export function GetAllEntitiesFromType(type: EntityType): number[] {
    return GetGamePool(type);
}

export function GetEntitiesFromRange(type: EntityType, range: number = 10) {
    const playerCoords = GetEntityCoords(GetPlayerPed(-1), true);
    const pool: number[] = GetGamePool(type);
    let entities: number[] = [];
    for (const entity of entities) {
        const pos = GetEntityCoords(entity, true);

    }
}

/**
 * Finds the closest player (if any) from {@link Player.streamedIn alt.Player.streamedIn}.
 *
 * `pos` - From which position to look for the nearest player. Defaults to local player position.
 *
 * `range` - In which range to search for the nearest player. Defaults to `Infinity`.
 */
export function getClosestPlayer(options: { pos?: Vector3; range?: number }): Player {
    // TODO Implement
    return null;
}

/**
 * Finds the closest vehicle (if any) from {@link Vehicle.streamedIn alt.Vehicle.streamedIn}.
 *
 * `pos` - From which position to look for the nearest vehicle. Defaults to local player position.
 *
 * `range` - In which range to search for the nearest vehicle. Defaults to `Infinity`.
 */
export function getClosestVehicle(options: { pos?: Vector3; range?: number }): Vehicle {
    // TODO Implement

    return null;
}

/**
 * Finds the closest object (if any) from {@link Object.all alt.Object.all}.
 *
 * `pos` - From which position to look for the nearest object. Defaults to local player position.
 *
 * `range` - In which range to search for the nearest object. Defaults to `Infinity`.
 */
export function getClosestObject(options: { pos?: Vector3; range?: number }): Object {
    // TODO Implement
    return null;
}

/**
 * Finds the closest world object (if any) from {@link Object.allWorld alt.Object.allWorld}.
 *
 * `pos` - From which position to look for the nearest world object. Defaults to local player position.
 *
 * `range` - In which range to search for the nearest world object. Defaults to `Infinity`.
 */
export function getClosestWorldObject(options: { pos?: Vector3; range?: number }): Object {
    // TODO Implement
    return null;
}

/**
 * Finds the closest virtualEntity (if any) from {@link VirtualEntity.streamedIn alt.VirtualEntity.streamedIn}.
 *
 * `pos` - From which position to look for the nearest virtualEntity. Defaults to local player position.
 *
 * `range` - In which range to search for the nearest virtualEntity. Defaults to `Infinity`.
 *
 */
export function getClosestVirtualEntity(options: { pos?: Vector3; range?: number }): VirtualEntity {
    // TODO Implement
    return null;
}

export function getPedBonePos(ped: number, boneId: number): Vector3 {
    // TODO Implement
    return null;
}