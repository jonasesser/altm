declare const enum AltPermission {
    NONE = 0,
    SCREEN_CAPTURE = 1,
    WEBRTC = 2,
    CLIPBOARD_ACCESS = 3,
    EXTENDED_VOICE_API = 4,
    All = 5
}
export interface Alt {
    emit(eventName: string, ...args: any[]): void;
    off(eventName: string, listener: (...args: any[]) => void): void;
    on(eventName: string, listener: (...args: any[]) => void): void;
    once(eventName: string, listener: (...args: any[]) => void): void;
    getEventListeners(eventName: string): ((...args: any[]) => void)[];
    getVersion(): string;
    getBranch(): string;
    getLocale(): string;
    getPermissionState(permId: AltPermission): boolean;
    getPermissionState(permId: T): boolean;
}
export interface Window {
    alt: Alt;
}
export {};
