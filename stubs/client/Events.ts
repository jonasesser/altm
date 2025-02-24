import { IClientEvent, ICustomEmitEvent } from './types';
import * as shared from 'alt-shared';

export function emit<K extends keyof ICustomEmitEvent>(eventName: K, ...args: Parameters<ICustomEmitEvent[K]>): void;
export function emit<K extends string>(eventName: Exclude<K, keyof IClientEvent | keyof ICustomEmitEvent>, ...args: any[]): void;
export function emit<K extends string>(eventName: Exclude<K, keyof IClientEvent>, args: any[]): void {
    // TODO Implement
}

export function emitRaw<K extends keyof ICustomEmitEvent>(eventName: K, ...args: Parameters<ICustomEmitEvent[K]>): void;
export function emitRaw<K extends string>(eventName: Exclude<K, keyof IClientEvent | keyof ICustomEmitEvent>, ...args: any[]): void;
export function emitRaw<K extends string>(eventName: Exclude<K, keyof IClientEvent>, args: any[]): void {
    // TODO Implement
}

export function emitServer<K extends keyof shared.ICustomClientServerEvent>(eventName: K, ...args: Parameters<shared.ICustomClientServerEvent[K]>): void;
export function emitServer<K extends string>(eventName: Exclude<K, keyof shared.ICustomClientServerEvent>, ...args: any[]): void;
export function emitServer<K extends string>(eventName: Exclude<K, never>, args: any[]): void {
    // TODO Implement
}

export function emitServerRaw<K extends keyof shared.ICustomClientServerEvent>(eventName: K, ...args: Parameters<shared.ICustomClientServerEvent[K]>): void;
export function emitServerRaw<K extends string>(eventName: Exclude<K, keyof shared.ICustomClientServerEvent>, ...args: any[]): void;
export function emitServerRaw<K extends string>(eventName: Exclude<K, never>, args: any[]): void {
    // TODO Implement
}

export function emitServerUnreliable<K extends keyof shared.ICustomClientServerEvent>(eventName: K, ...args: Parameters<shared.ICustomClientServerEvent[K]>): void;
export function emitServerUnreliable<K extends string>(eventName: Exclude<K, keyof shared.ICustomClientServerEvent>, ...args: any[]): void;
export function emitServerUnreliable<K extends string>(eventName: Exclude<K, never>, args: any[]): void {
    // TODO Implement
}

export function emitRpc<K extends keyof shared.ICustomClientServerRpc>(rpcName: K, ...args: Parameters<shared.ICustomClientServerRpc[K]>): Promise<ReturnType<shared.ICustomClientServerRpc[K]>>;
export function emitRpc<K extends string>(rpcName: Exclude<K, keyof shared.ICustomClientServerRpc>, ...args: any[]): Promise<any>;
export function emitRpc<K extends string>(rpcName: Exclude<K, never>, args: any[]): Promise<any> {
    // TODO Implement
    return null;
}

export function onRpc<K extends keyof shared.ICustomServerClientRpc>(
    rpcName: K,
    listener: (...args: Parameters<shared.ICustomServerClientRpc[K]>) => Promise<ReturnType<shared.ICustomServerClientRpc[K]>> | ReturnType<shared.ICustomServerClientRpc[K]>,
): void;
export function onRpc<K extends string>(rpcName: Exclude<K, keyof shared.ICustomServerClientRpc>, listener: (...args: any[]) => Promise<any> | any): void;
export function onRpc<K extends string>(rpcName: Exclude<K, never>, listener: (...args: any[]) => any): void {
    // TODO Implement
}

export function offRpc<K extends keyof shared.ICustomServerClientRpc>(
    rpcName: K,
    listener?: (...args: Parameters<shared.ICustomServerClientRpc[K]>) => Promise<ReturnType<shared.ICustomServerClientRpc[K]>> | ReturnType<shared.ICustomServerClientRpc[K]>,
): void;
export function offRpc<K extends string>(rpcName: Exclude<K, keyof shared.ICustomServerClientRpc>, listener?: (...args: any[]) => Promise<any> | any): void;
export function offRpc<K extends string>(rpcName: Exclude<K, never>, listener: (...args: any[]) => any): void {
    // TODO Implement
}

export function offServer<K extends keyof shared.ICustomServerClientEvent>(eventName: K, listener: (...args: Parameters<shared.ICustomServerClientEvent[K]>) => void): void;
export function offServer<K extends string>(eventName: Exclude<K, keyof shared.ICustomServerClientEvent>, listener: (...args: any[]) => void): void;
export function offServer(eventName: string, listener: (...args: any[]) => void): void;
export function offServer(listener: (eventName: string, ...args: any[]) => void): void;
/**
 * Unsubscribes from all user-created server events with the specified listener.
 *
 * @remarks Listener should be of the same reference as when event was subscribed to.
 *
 * @param listener Listener that should be removed.
 */
export function offServer(eventNameOrListener: string | ((eventName: string, ...args: any[]) => void), listener?: (...args: any[]) => void): void {
    if (typeof eventNameOrListener === 'function') {
        // Fall: Listener-Variante (alle Events abbestellen)
        const listenerFn = eventNameOrListener;
        // TODO: Alle Events mit listenerFn abbestellen
    } else {
        // Fall: eventName + listener Variante
        const eventName = eventNameOrListener;
        // listener ist hier definiert
        // TODO: Event eventName mit listener abbestellen
    }
}

export function on<K extends keyof IClientEvent | keyof ICustomEmitEvent>(eventName: K, listener: (...args: shared.EventParameters<IClientEvent, ICustomEmitEvent, K>) => void): void;
export function on<K extends string>(eventName: Exclude<K, keyof IClientEvent | keyof ICustomEmitEvent>, listener: (...args: any[]) => void): void;
export function on<K extends string>(eventName: Exclude<K, keyof IClientEvent>, listener: (...args: any[]) => void): void {
    // TODO Implement
}

export function once<K extends keyof IClientEvent | keyof ICustomEmitEvent>(eventName: K, listener: (...args: shared.EventParameters<IClientEvent, ICustomEmitEvent, K>) => void): void;
export function once<K extends string>(eventName: Exclude<K, keyof IClientEvent | keyof ICustomEmitEvent>, listener: (...args: any[]) => void): void;
export function once<K extends string>(eventName: Exclude<K, keyof IClientEvent>, listener: (...args: any[]) => void): void {
    // TODO Implement
}

export function off<K extends keyof IClientEvent | keyof ICustomEmitEvent>(eventName: K, listener: (...args: shared.EventParameters<IClientEvent, ICustomEmitEvent, K>) => void): void;
export function off<K extends string>(eventName: Exclude<K, keyof IClientEvent | keyof ICustomEmitEvent>, listener: (...args: any[]) => void): void;
export function off<K extends string>(eventName: Exclude<K, keyof IClientEvent>, listener: (...args: any[]) => void): void {
    // TODO Implement
}

export function onServer<K extends keyof shared.ICustomServerClientEvent>(eventName: K, listener: (...args: Parameters<shared.ICustomServerClientEvent[K]>) => void): void;
export function onServer<K extends string>(eventName: Exclude<K, keyof shared.ICustomServerClientEvent>, listener: (...args: any[]) => void): void;
export function onServer(listener: (eventName: string, ...args: any[]) => void): void;
export function onServer(listener: (eventName: string, ...args: any[]) => void): void {
    // TODO Implement
}

export function onceServer<K extends keyof shared.ICustomServerClientEvent>(eventName: K, listener: (...args: Parameters<shared.ICustomServerClientEvent[K]>) => void): void;
export function onceServer<K extends string>(eventName: Exclude<K, keyof shared.ICustomServerClientEvent>, listener: (...args: any[]) => void): void;
export function onceServer(listener: (eventName: string, ...args: any[]) => void): void;
/**
 * Subscribes to all server events with the specified listener, which only triggers once.
 *
 * @remarks Listener will be only called for user-created events.
 *
 * @param eventName Name of the event.
 * @param listener Listener that should be added.
 */
export function onceServer(listener: (eventName: string, ...args: any[]) => void): void {
    // TODO Implement
}
