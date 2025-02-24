// Stub für index.d.ts

declare const enum AltPermission {
  NONE,
  SCREEN_CAPTURE,
  WEBRTC,
  CLIPBOARD_ACCESS,
  EXTENDED_VOICE_API,
  All,
}
export interface Alt {
  emit(eventName: string, args: any[]): void;
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

declare var alt: Alt;


