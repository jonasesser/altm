const nextTickHandlers: { [id: number]: (...args: any[]) => void } = {};
let nextTickIdCounter = 0;

const everyTickHandlers: { [id: number]: (...args: any[]) => void } = {};
let everyTickIdCounter = 0;

/**
 * Registers a handler to be called on the next tick.
 * @param handler The function to be called on the next tick.
 * @returns The ID of the registered handler.
 */
export function nextTick(handler: (...args: any[]) => void): number {
    const id = nextTickIdCounter++;
    nextTickHandlers[id] = handler;

    setTick(() => {
        if (nextTickHandlers[id]) {
            nextTickHandlers[id]();
            delete nextTickHandlers[id];
        }
    });

    return id;
}

/**
 * Clears a previously registered next tick handler.
 * @param id The ID of the handler to clear.
 */
export function clearNextTick(id: number): void {
    delete nextTickHandlers[id];
}

/**
 * Registers a handler to be called on every tick.
 * @param handler The function to be called on every tick.
 * @returns The ID of the registered handler.
 */
export function everyTick(handler: (...args: any[]) => void): number {
    const id = everyTickIdCounter++;
    everyTickHandlers[id] = handler;

    const tick = () => {
        if (everyTickHandlers[id]) {
            everyTickHandlers[id]();
            setTick(tick);
        }
    };

    setTick(tick);
    return id;
}

/**
 * Clears a previously registered every tick handler.
 * @param id The ID of the handler to clear.
 */
export function clearEveryTick(id: number): void {
    delete everyTickHandlers[id];
}
