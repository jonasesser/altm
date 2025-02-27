export { log, logWarning, logError, logDebug, setTimeout, setInterval, nextTick, clearTimeout, clearInterval, clearNextTick, hash, version, branch, sdkVersion, debug, File, RGBA, Vector3, Vector2 } from 'alt-client';
export declare function getSharedArrayBuffer(id: number): SharedArrayBuffer;
export declare function emit(eventName: string, ...args: any[]): void;
export declare function on(eventName: string, listener: (...args: any[]) => void): void;
export declare function once(eventName: string, listener: (...args: any[]) => void): void;
export declare function off(eventName: string, listener: (...args: any[]) => void): void;
declare const _default: {
    emit: typeof emit;
    on: typeof on;
    once: typeof once;
    off: typeof off;
    getSharedArrayBuffer: typeof getSharedArrayBuffer;
};
export default _default;
