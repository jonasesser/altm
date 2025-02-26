export type MetaValues<TInterface> = Partial<TInterface> & Record<string, unknown>;

/**
 * Extend it by interface merging for use in global meta {@link getMeta alt.getMeta}, {@link setMeta alt.setMeta}, etc.
 *
 * @example
 * ```
 * declare module "alt-shared" {
 *   // extending interface by interface merging
 *   export interface ICustomGlobalMeta {
 *     numberExample: number
 *     stringExample: string
 *   }
 * }
 *
 * const value = alt.getMeta("numberExample") // return value: number | undefined
 * alt.setMeta("stringExample", "value") // key: "stringExample", value: string
 * ```
 */
export interface ICustomGlobalMeta {}

/**
 * Extend it by interface merging for use in baseobject meta {@link BaseObject#getMeta}, {@link BaseObject#setMeta}, etc.
 *
 * @remarks See {@link "alt-shared".ICustomGlobalMeta} for an example of use.
 */
export interface ICustomBaseObjectMeta {}

/**
 * Extend it by interface merging for use in entity stream synced meta (class `Entity` on client & server, e.g. `entity.getStreamSyncedMeta`)
 *
 * @remarks See {@link ICustomGlobalMeta} for an example of use
 */
export interface ICustomEntityStreamSyncedMeta {}

/**
 * Extend it by interface merging for use in player stream synced meta (class `Player` on client & server, e.g. `player.getStreamSyncedMeta`)
 *
 * @remarks See {@link ICustomGlobalMeta} for an example of use
 */
export interface ICustomPlayerStreamSyncedMeta extends ICustomEntityStreamSyncedMeta {}

/**
 * Extend it by interface merging for use in player local meta (class `Player` on client & server, e.g. `player.getLocalMeta`)
 *
 * @remarks See {@link ICustomGlobalMeta} for an example of use
 */
export interface ICustomPlayerLocalMeta {}

/**
 * Extend it by interface merging for use in vehicle stream synced meta (class `Vehicle` on client & server, e.g. `vehicle.getStreamSyncedMeta`)
 *
 * @remarks See {@link ICustomGlobalMeta} for an example of use
 */
export interface ICustomVehicleStreamSyncedMeta extends ICustomEntityStreamSyncedMeta {}

/**
 * Extend it by interface merging for use in virtual entity stream synced meta (class `VirtualEntity` on client & server, e.g. `entity.getStreamSyncedMeta`)
 *
 * @remarks See {@link ICustomGlobalMeta} for an example of use
 */
export interface ICustomVirtualEntityStreamSyncedMeta {}

/**
 * Extend it by interface merging for use in ped stream synced meta (class `Ped` on client & server, e.g. `ped.getStreamSyncedMeta`)
 *
 * @remarks See {@link ICustomGlobalMeta} for an example of use
 */
export interface ICustomPedStreamSyncedMeta extends ICustomEntityStreamSyncedMeta {}

/**
 * Extend it by interface merging for use in checkpoint stream synced meta (class `Checkpoint` on client & server, e.g. `checkpoint.getStreamSyncedMeta`)
 *
 * @remarks See {@link ICustomGlobalMeta} for an example of use
 */
export interface ICustomCheckpointStreamSyncedMeta {}