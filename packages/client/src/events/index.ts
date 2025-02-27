/**
 * Gets all the listeners that have been subscribed using {@link onServer} for the specified remote event.
 *
 * @param eventName Name of the event or null for generic event.
 * @returns Array of listener functions for that event.
 */
export function getRemoteEventListeners(eventName: string): readonly ((...args: any[]) => void)[] {
    // TODO Implement
    return [];
}
