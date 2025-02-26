import { EntityType } from '../../client/stubs/index.stub';
import * as shared from 'alt-shared';

export namespace Utils {
    export function getClosestVehicle() {
        return getClosestEntity(EntityType.Vehicle);
    }

    export function getClosestPed() {
        return getClosestEntity(EntityType.Ped);
    }
}

const getClosestEntity = (poolName: EntityType) => (options: { pos?: shared.IVector3 }) => {
    return getClosestEntityFromPool(poolName, {
        pos: options.pos ?? GetEntityCoords(PlayerPedId(), true),
        ...options,
    });
};