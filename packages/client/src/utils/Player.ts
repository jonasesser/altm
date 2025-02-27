import type { StatName } from '../types';

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

export function setStat(statName: StatName, value: number): void {
    // TODO Implement
}

export function getStat(statName: StatName): number;
export function getStat(statName: `${StatName}`): number;
export function getStat(statName: 'stamina' | 'strength' | 'lung_capacity' | 'wheelie_ability' | 'flying_ability' | 'shooting_ability' | 'stealth_ability'): number {
    // TODO Implement
    return 0;
}

export function resetStat(statName: StatName): void;
export function resetStat(statName: `${StatName}`): void;
export function resetStat(statName: 'stamina' | 'strength' | 'lung_capacity' | 'wheelie_ability' | 'flying_ability' | 'shooting_ability' | 'stealth_ability'): void {
    // TODO Implement

    SetPlayerStamina(PlayerId(), 100);
}