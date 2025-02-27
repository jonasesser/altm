/**
 * Freezes the camera in place so it doesn't change position or rotation.
 *
 * @remarks You can still move your character even if your camera is frozen.
 *
 * @param state True to freeze the camera, false to unfreeze the camera.
 */
export function setCamFrozen(state: boolean): void {
    // TODO Implement - must be look
}

export function isCamFrozen(): boolean {
    // TODO Implement - must be look
    return false;
}

export function getCamPos(): shared.Vector3 {
    return new shared.Vector3(GetGameplayCamCoord());
}