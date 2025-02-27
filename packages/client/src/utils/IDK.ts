/**
 * Gets the Base64 encoded string of the headshot with the specified ID.
 *
 * @remarks The headshot ID is returned by the `registerPedheadshot3`, `registerPedheadshotTransparent` or `registerPedheadshot` native.
 *
 * @param id ID of the headshot.
 * @returns The Base64 string of the headshot image.
 */
export function getHeadshotBase64(id: number): string {
    // TODO Implement
    return '';
}

/**
 * Sets the specified dlc clothing component to a ped.
 *
 * @param scriptID ScriptID of the Ped.
 * @param dlc Dlc hash of the clothing.
 * @param component Component id of the clothing.
 * @param drawable Drawable id of the clothing.
 * @param texture Texture id of the clothing.
 * @param palette Palette of the clothing.
 */
export function setPedDlcClothes(scriptID: number, dlc: number, component: number, drawable: number, texture: number, palette: number): void {
    // TODO Implement
}

/**
 * Sets the specified dlc prop component to a ped.
 *
 * @param scriptID ScriptID of the Ped.
 * @param dlc Dlc hash of the prop.
 * @param component Component id of the prop.
 * @param drawable Drawable id of the prop.
 * @param texture Texture id of the prop.
 */
export function setPedDlcProp(scriptID: number, dlc: number, component: number, drawable: number, texture: number): void {
    // TODO Implement
}

/**
 * Removes a specified prop component from a ped.
 *
 * @param scriptID ScriptID of the Ped.
 * @param component Component id of the prop.
 */
export function clearPedProp(scriptID: number, component: number): void {
    // TODO Implement
}

/**
 * Represents the current client ping.
 */
export function getPing(): number {
    // TODO Implement
    return 0;
}

/**
 * Represents the current client fps.
 */
export function getFps(): number {
    // TODO Implement
    return 0;
}

export function getTotalPacketsSent(): number {
    // TODO Implement
    return 0;
}

export function getTotalPacketsLost(): number {
    // TODO Implement
    return 0;
}

/**
 * Gets the ip adress of the server where you are connected to.
 *
 * @returns The server ip.
 */
export function getServerIp(): string {
    // TODO Implement
    return '';
}

/**
 * Gets the port of the server where you are connected to.
 *
 * @returns The server port.
 */
export function getServerPort(): number {
    // TODO Implement
    return 0;
}

/**
 * Combination of `native.registerPedheadshot` and {@link getHeadshotBase64 alt.getHeadshotBase64}
 */
export function registerPedHeadshotBase64(ped: number | Player): Promise<string> {
    // TODO Implement
    return null;
}

/**
 * Combination of `native.registerPedheadshot3` and {@link getHeadshotBase64 alt.getHeadshotBase64}
 */
export function registerPedHeadshot3Base64(ped: number | Player): Promise<string> {
    // TODO Implement
    return null;
}

/**
 * Combination of `native.registerPedheadshotTransparentBase64` and {@link getHeadshotBase64 alt.getHeadshotBase64}
 */
export function registerPedHeadshotTransparentBase64(ped: number | Player): Promise<string> {
    // TODO Implement
    return null;
}