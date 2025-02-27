export function emit(eventName: string, ...args: any[]): void;
/**
 * Emits specified event across resources.
 *
 * @param eventName Name of the event.
 * @param args Rest parameters for emit to send.
 */
export function emit(eventName: string, args: any[]): void {
    // TODO Implement
}

export function emitRaw(eventName: string, ...args: any[]): void;
/**
 * Emits specified event across resources.
 *
 * @param eventName Name of the event.
 * @param args Rest parameters for emit to send.
 *
 * @remarks Works only from JS resource to JS resource
 */
export function emitRaw(eventName: string, args: any[]): void {
    // TODO Implement
}

export function on(eventName: string, listener: (...args: any[]) => void): void;
export function on(listener: (eventName: string, ...args: any[]) => void): void;
/**
 * Subscribes to all events with the specified listener.
 *
 * @remarks Listener will be only called for user-created events.
 *
 * @param eventNameOrListener
 * @param listener Listener that should be added.
 */
export function on(eventNameOrListener: string | ((eventName: string, ...args: any[]) => void), listener?: (...args: any[]) => void): void {
    if (typeof eventNameOrListener === 'function') {
        // Fall: Nur Listener wurde übergeben
        const listenerFn = eventNameOrListener;
        // TODO: Implementiere die Logik, um einen globalen Listener zu registrieren, der alle Events empfängt.
    } else {
        // Fall: Eventname und Listener wurden übergeben
        const eventName = eventNameOrListener;
        // listener ist hier definiert.
        // TODO: Implementiere die Logik, um den Listener nur für das spezifische Event zu registrieren.
    }
}

export function once(eventName: string, listener: (...args: any[]) => void): void;
export function once(listener: (eventName: string, ...args: any[]) => void): void;
/**
 * Subscribes to all events with the specified listener, which only triggers once.
 *
 * @remarks Listener will be only called for user-created events.
 *
 * @param eventNameOrListener
 * @param listener Listener that should be added.
 */
export function once(eventNameOrListener: string | ((eventName: string, ...args: any[]) => void), listener?: (...args: any[]) => void): void {
    if (typeof eventNameOrListener === 'function') {
        // Fall: Nur Listener wurde übergeben.
        const listenerFn = eventNameOrListener;
        // TODO: Implementiere die Logik, um einen globalen "once"-Listener zu registrieren.
    } else {
        // Fall: eventName und listener wurden übergeben.
        const eventName = eventNameOrListener;
        // listener ist hier definiert.
        // TODO: Implementiere die Logik, um den "once"-Listener nur für das spezifische Event zu registrieren.
    }
}

export function off(eventName: string, listener: (...args: any[]) => void): void;
export function off(listener: (eventName: string, ...args: any[]) => void): void;
/**
 * Unsubscribes from all user-created events with the specified listener.
 *
 * @remarks Listener should be of the same reference as when event was subscribed to.
 *
 * @param eventNameOrListener
 * @param listener Listener that should be removed.
 */
export function off(eventNameOrListener: string | ((eventName: string, ...args: any[]) => void), listener?: (...args: any[]) => void): void {
    if (typeof eventNameOrListener === 'function') {
        // Fall: Es wurde nur ein Listener übergeben.
        const listenerFn = eventNameOrListener;
        // TODO: Implementiere die Logik, um den globalen Listener zu entfernen.
    } else {
        // Fall: Es wurden Eventname und Listener übergeben.
        const eventName = eventNameOrListener;
        // listener ist hier garantiert definiert.
        // TODO: Implementiere die Logik, um den Listener für das spezifische Event zu entfernen.
    }
}

/**
 * Gets all the listeners for the specified local event.
 *
 * @param eventName Name of the event or null for generic event.
 * @returns Array of listener functions for that event.
 */
export function getEventListeners(eventName: string): readonly ((...args: any[]) => void)[] {
    // TODO Implement
    return [];
}