import type { ICustomBaseObjectMeta as SharedICustomBaseObjectMeta } from "@altm/shared";

/**
 * Extend it by interface merging for use in baseobject meta {@link "alt-client".BaseObject getMeta method}, {@link "alt-client".BaseObject setMeta method}, etc.
 *
 * @remarks See {@link "alt-shared".ICustomGlobalMeta} for an example of use.
 */
export interface ICustomBaseObjectMeta extends SharedICustomBaseObjectMeta {}
/**
 * Extend it by interface merging for use in blip meta {@link "alt-client".Blip getMeta method}, {@link "alt-client".Blip setMeta method}, etc.
 *
 * @remarks See {@link "alt-shared".ICustomGlobalMeta} for an example of use.
 */
export interface ICustomBlipMeta extends ICustomBaseObjectMeta {}
/**
 * Extend it by merging interfaces for use in checkpoint meta {@link "alt-client".Checkpoint getMeta method}, {@link "alt-client".Checkpoint setMeta method}, etc.
 *
 * @remarks See {@link "alt-shared".ICustomGlobalMeta} for an example of use.
 */
export interface ICustomCheckpointMeta extends ICustomBaseObjectMeta {}
/**
 * Extend it by interface merging for use in colshape meta {@link "alt-server".Colshape getMeta method}, {@link "alt-server".Colshape setMeta method}, etc.
 *
 * @remarks See {@link "alt-shared".ICustomGlobalMeta} for an example of use.
 */
export interface ICustomColshapeMeta extends ICustomBaseObjectMeta {}
/**
 * Extend it by merging interfaces for use in webview meta {@link "alt-client".WebView getMeta method}, {@link "alt-client".WebView setMeta method}, etc.
 *
 * @remarks See {@link "alt-shared".ICustomGlobalMeta} for an example of use.
 */
export interface ICustomWebViewMeta extends ICustomBaseObjectMeta {}
/**
 * Extend it by merging interfaces for use in audio meta {@link "alt-client".Audio getMeta method}, {@link "alt-client".Audio setMeta method}, etc.
 *
 * @remarks See {@link "alt-shared".ICustomGlobalMeta} for an example of use.
 */
export interface ICustomAudioMeta extends ICustomBaseObjectMeta {}
/**
 * Extend it by interface merging for use in entity meta {@link "alt-client".Entity getMeta method}, {@link "alt-client".Entity setMeta method}, etc.
 *
 * @remarks See {@link "alt-shared".ICustomGlobalMeta} for an example of use.
 */
export interface ICustomEntityMeta extends ICustomBaseObjectMeta {}
/**
 * Extend it by merging interfaces for use in player meta {@link "alt-client".Player getMeta method}, {@link "alt-client".Player setMeta method}, etc.
 *
 * @remarks See {@link "alt-shared".ICustomGlobalMeta} for an example of use.
 */
export interface ICustomPlayerMeta extends ICustomEntityMeta {}
/**
 * Extend it by merging interfaces for use in local player meta {@link "alt-client".LocalPlayer getMeta method}, {@link "alt-client".LocalPlayer setMeta method}, etc.
 *
 * @remarks See {@link "alt-shared".ICustomGlobalMeta} for an example of use.
 */
export interface ICustomLocalPlayerMeta extends ICustomPlayerMeta {}
/**
 * Extend it by merging interfaces for use in vehicle meta {@link "alt-client".Vehicle getMeta method}, {@link "alt-client".Vehicle setMeta method}, etc.
 *
 * @remarks See {@link "alt-shared".ICustomGlobalMeta} for an example of use.
 */
export interface ICustomVehicleMeta extends ICustomEntityMeta {}
/**
 * Extend it by merging interfaces for use in vehicle meta {@link "alt-client".Ped getMeta method}, {@link "alt-client".Ped setMeta method}, etc.
 *
 * @remarks See {@link "alt-shared".ICustomGlobalMeta} for an example of use.
 */
export interface ICustomPedMeta extends ICustomEntityMeta {}