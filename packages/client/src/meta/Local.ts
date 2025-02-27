import type { ExtractStringKeys, ICustomPlayerLocalMeta } from '@altm/shared';

export function getLocalMeta<K extends string>(key: Exclude<K, keyof ICustomPlayerLocalMeta>): unknown;
export function getLocalMeta<K extends ExtractStringKeys<ICustomPlayerLocalMeta>>(key: K): ICustomPlayerLocalMeta[K] | undefined;
export function getLocalMeta<V extends any>(key: string): V | undefined;
/** @deprecated See {@link "alt-shared".ICustomPlayerLocalMeta} */
export function getLocalMeta<V extends any>(key: string): V | null {
    // TODO Implement
    return null;
}

export function hasLocalMeta(key: string): boolean;
export function hasLocalMeta<K extends ExtractStringKeys<ICustomPlayerLocalMeta>>(key: K): boolean;
export function hasLocalMeta<K extends ExtractStringKeys<ICustomPlayerLocalMeta>>(key: K): boolean {
    // TODO Implement
    return false;
}