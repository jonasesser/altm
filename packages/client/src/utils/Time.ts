/**
 * Gets the current milliseconds per game minute.
 *
 * @remarks This is set with the {@link setMsPerGameMinute} function.
 */
export function getMsPerGameMinute(): number {
    return GetMillisecondsPerGameMinute();
}

/**
 * Gets current server time since epoch in milliseconds.
 */
export function getServerTime(): number {
    return GetNetworkTime();
}

/**
 * Sets the amount of real milliseconds that have to pass every game minute.
 */
export function setMsPerGameMinute(ms: number): void {
    SetMillisecondsPerGameMinute(ms);
}