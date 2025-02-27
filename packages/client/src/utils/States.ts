import type { Permission } from '@altm/shared';

/**
 * Returns state of console window.
 *
 * @returns True when console window is opened.
 */
export function isConsoleOpen(): boolean {
    // TODO Implement - no possible at moment
    return false;
}


/**
 * Returns state of game window.
 *
 * @returns True when game window is focused.
 */
export function isGameFocused(): boolean {
    // TODO Implement - no possible at moment
    return false;
}

/**
 * Returns if alt:V is in streamer mode.
 *
 * @returns True when alt:V client is launched in streamer mode.
 */
export function isInStreamerMode(): boolean {
    // TODO Implement - no possible at moment
    return false;
}

export function getPermissionState(permId: Permission): boolean;
export function getPermissionState<T extends number>(permId: T): boolean;
export function getPermissionState<T extends number>(permId: T): boolean {
    // TODO Implement
    return false;
}

