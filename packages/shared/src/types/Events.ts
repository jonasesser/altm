export type EventParameters<TAltInterface extends Record<any, any>, TCustomInterface extends Record<any, any>, TEventName extends keyof TAltInterface | keyof TCustomInterface> = Parameters<
    TEventName extends keyof TAltInterface ? TAltInterface[TEventName] : TEventName extends keyof TCustomInterface ? TCustomInterface[TEventName] : never
>;

/**
 * Extend `alt.emitServer` and `alt.onServer` auto-completion by merging interfaces.
 *
 * @example
 * ```ts
 * declare module 'alt-client' {
 *    interface ICustomServerClientEvent {
 *        myEvent: (arg1: string, arg2: { key: string, value: number })
 *    }
 * }
 * ```
 *
 * @export
 * @interface ICustomServerClientEvent
 */
export interface ICustomServerClientEvent {}
/**
 * Extend `alt.onClient` and `alt.emitServer` auto-completion by merging interfaces.
 *
 * @example
 * ```ts
 * declare module 'alt-client' {
 *    interface ICustomClientServerEvent {
 *        myEvent: (arg1: string, arg2: { key: string, value: number })
 *    }
 * }
 * ```
 *
 * @export
 * @interface ICustomClientServerEvent
 */
export interface ICustomClientServerEvent {}
/**
 * Extend `player.emitRpc` and `alt.onRpc` auto-completion by merging interfaces.
 *
 * @example
 * ```ts
 * declare module 'alt-client' {
 *    interface ICustomServerClientRpc {
 *        myRpc: (arg1: string, arg2: { key: string, value: number }): Promise<boolean>
 *    }
 * }
 * ```
 *
 * @export
 * @interface ICustomServerClientRpc
 */
export interface ICustomServerClientRpc {}
/**
 * Extend `alt.onRpc` and `alt.emitRpc` auto-completion by merging interfaces.
 *
 * @example
 * ```ts
 * declare module 'alt-client' {
 *    interface ICustomClientServerRpc {
 *        myRpc: (arg1: string, arg2: { key: string, value: number }): Promise<boolean>
 *    }
 * }
 * ```
 *
 * @export
 * @interface ICustomClientServerRpc
 */
export interface ICustomClientServerRpc {}