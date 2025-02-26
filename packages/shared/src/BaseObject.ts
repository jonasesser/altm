import { BaseObjectType } from './types/BaseObject';
import { ExtractStringKeys, InterfaceValueByKey } from './types/Generel';
import { ICustomBaseObjectMeta, MetaValues } from './types/Meta';

export class BaseObject {
    protected constructor() {
        // TODO: Implement constructor
    }
    /**
     * Type of the object.
     */
    public readonly type: BaseObjectType;
    /**
     * Object usability.
     *
     * @returns False if object is no longer usable.
     */
    public readonly valid: boolean;
    public readonly id: number;
    /**
     * Returns the ref count of the entity.
     *
     * @remarks It's only available in debug-mode.
     */
    public readonly refCount: number;
    /**
     * Removes the object from the world.
     */

    public destroy(): void {
        // TODO implement
    }
    /**
     * Removes the specified key and the data connected to that specific key.
     *
     * @param key The key of the value to remove.
     */
    public deleteMeta(key: string): void;

    public deleteMeta<K extends ExtractStringKeys<ICustomBaseObjectMeta>>(key: string | K): void {
        // TODO implement
    }
    /**
     * Gets a value using the specified key.
     *
     * @param key The key of the value to get.
     * @returns Dynamic value associated with the specified key or undefined if no data is present.
     */
    public getMeta<K extends string>(key: Exclude<K, never>): unknown;
    public getMeta<K extends ExtractStringKeys<ICustomBaseObjectMeta>>(key: K): ICustomBaseObjectMeta[K];
    /** @deprecated See {@link ICustomBaseObjectMeta} */

    public getMeta<K extends string>(key: K): K extends keyof ICustomBaseObjectMeta ? ICustomBaseObjectMeta[K] : unknown {
        // TODO implement
        return null as any;
    }

    /**
     * Determines whether contains the specified key.
     *
     * @param key The key of the value to locate.
     * @returns True when element associated with the specified key is stored.
     */
    public hasMeta(key: string): boolean;

    public hasMeta<K extends ExtractStringKeys<ICustomBaseObjectMeta>>(key: string | K): boolean {
        // TODO implement
        return false;
    }

    public getMetaDataKeys(): readonly string[] {
        // TODO implement
        return [];
    }
    /**
     * Stores the given value with the specified key.
     *
     * @remarks The given value will be shared locally.
     *
     * @param key The key of the value to store.
     * @param value The value to store.
     */
    public setMeta<K extends string>(key: K, value: InterfaceValueByKey<ICustomBaseObjectMeta, K, unknown, void>): void;
    public setMeta<K extends ExtractStringKeys<ICustomBaseObjectMeta>>(key: K, value: ICustomBaseObjectMeta[K]): void;
    /** @deprecated See {@link ICustomBaseObjectMeta} */
    public setMeta<V extends any, K extends string = string>(key: K, value: InterfaceValueByKey<ICustomBaseObjectMeta, K, V, void>): void;
    public setMeta<K extends string, V>(
        key: K | MetaValues<ICustomBaseObjectMeta>,
        value: K extends ExtractStringKeys<ICustomBaseObjectMeta> ? ICustomBaseObjectMeta[K] | InterfaceValueByKey<ICustomBaseObjectMeta, K, V, void> : InterfaceValueByKey<ICustomBaseObjectMeta, K, unknown, void>,
    ): void {
        // TODO Implementieren
    }
}