import type { ConfigFlag } from '../types';

export function setConfigFlag(flag: ConfigFlag, state: boolean): void {
    // TODO Implement
    // SetWeaponsNoAutoswap(state);
    // DisableIdleCamera(state);
    // ForceSnowPass(state);
    // SetBlackout(state);
    //
    // SetVehicleKeepEngineOnWhenAbandoned(0, state);
    // SetVehicleTyresCanBurst()
}

export function getConfigFlag(flag: ConfigFlag): boolean {
    // TODO Implement
    return false;
}

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
