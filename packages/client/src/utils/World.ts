/**
 * Unloads the specified ipl.
 *
 * @param iplName Name of the ipl.
 */
export function removeIpl(iplName: string): void {
    RemoveIpl(iplName);
}

/**
 * Loads the specified ipl.
 *
 * @param iplName Name of the ipl.
 */
export function requestIpl(iplName: string): void {
    RequestIpl(iplName);
}

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

export function getPoolSize(poolName: string): number {
    // TODO Implement
    return 0;
}

export function getPoolCount(poolName: string): number {
    // TODO Implement
    return 0;
}

export function getPoolEntities(poolName: string): number[] {
    // TODO Implement
    return [];
}

export function updateClipContext(context: Record<string, string>): void {
    // TODO Implement
}

export function loadDefaultIpls(): void {
    // TODO Implement
}


