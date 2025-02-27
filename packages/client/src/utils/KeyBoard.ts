import { Vector2, type KeyCode } from "@altm/shared";

/**
 * Returns whether the game controls are currently enabled.
 */
export function gameControlsEnabled(): boolean {
    // TODO Implement
    return false;
}

/**
 * Gets the current position of the cursor.
 *
 * @param normalized If true returns coordinates that are in the range 0 to 1. Defaults to false.
 */
export function getCursorPos(normalized?: boolean): Vector2 {
    // TODO Implement
    return Vector2.zero;
}

/**
 * Returns whether the specified key is toggled.
 *
 * @param key Keycode.
 */
export function isKeyToggled(key: KeyCode): boolean {
    // TODO Implement
    return false;
}

/**
 * Determines whether the specified key is pressed.
 *
 * @param key
 */
export function isKeyDown(key: KeyCode): boolean {
    return IsControlPressed(0, key);
}

/**
 * Sets the current position of the cursor.
 *
 * @remarks The cursor has to be visible for this to take effect.
 */
export function setCursorPos(pos: Vector2, normalized: boolean): void {
    const val = normalized ? new Vector2(pos).normalize() : pos;
    SetCursorLocation(val.x, val.y);
}

/**
 * Changes the visibility of cursor.
 *
 * @remarks This is handled by resource scoped internal integer, which gets increased/decreased by every function call. When you show your cursor 5 times, to hide it you have to do that 5 times accordingly.
 *
 * @param state A boolean indicating whenever cursor should be visible or not.
 */
export function showCursor(state: boolean): void {
    // TODO Implement - check if works
    SetNuiFocus(IsNuiFocused(), state);
}

export function isCursorVisible(): boolean {
    // TODO Implement - looking
    return false;
}

/**
 * Toggles the game controls.
 *
 * @remarks When this is set to false, all controls are disabled, so you can't move your character or the camera.
 *
 * @param state True to enable controls, false to disable controls.
 */
export function toggleGameControls(state: boolean): void {
    // TODO Implement
}
