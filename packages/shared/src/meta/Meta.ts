import { ExtractStringKeys, InterfaceValueByKey } from '../types/Generel';
import { ICustomGlobalMeta } from '../types/Meta';

export function deleteMeta(key: string): void;
export function deleteMeta<K extends ExtractStringKeys<ICustomGlobalMeta>>(key: K): void;
export function deleteMeta<K extends ExtractStringKeys<ICustomGlobalMeta>>(key: K): void {
    // TODO Implement
}

export function getMeta<K extends string>(key: Exclude<K, keyof ICustomGlobalMeta>): unknown;
export function getMeta<K extends ExtractStringKeys<ICustomGlobalMeta>>(key: K): ICustomGlobalMeta[K] | undefined;
export function getMeta<V extends any>(key: string): V | undefined;
/** @deprecated See {@link ICustomGlobalMeta} */
export function getMeta<V extends any>(key: string): V {
    // TODO Implement
    return null;
}

export function getMetaKeys(): readonly string[];
/**
 * Returns all meta keys which have been set
 */
export function getMetaKeys(): readonly string[] {
    // TODO Implement
    return [];
}

export function hasMeta(key: string): boolean;
export function hasMeta<K extends ExtractStringKeys<ICustomGlobalMeta>>(key: K): boolean;
export function hasMeta<K extends ExtractStringKeys<ICustomGlobalMeta>>(key: K): boolean {
    // TODO Implement
    return false;
}

export function setMeta<K extends string>(key: K, value: InterfaceValueByKey<ICustomGlobalMeta, K>): void;
export function setMeta<K extends ExtractStringKeys<ICustomGlobalMeta>>(key: K, value: ICustomGlobalMeta[K]): void;
export function setMeta<V extends any, K extends string = string>(key: K, value: InterfaceValueByKey<ICustomGlobalMeta, K, V>): void;
/** @deprecated See {@link ICustomGlobalMeta} */
export function setMeta<V extends any, K extends string = string>(key: K, value: InterfaceValueByKey<ICustomGlobalMeta, K, V, void>): void {
    // TODO Implement
}