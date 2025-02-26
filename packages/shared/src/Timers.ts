// Interne Speicherung der Timer-IDs
const nextTickHandlers: { [id: number]: (...args: any[]) => void } = {};
let nextTickIdCounter = 0;

const everyTickHandlers: { [id: number]: (...args: any[]) => void } = {};
let everyTickIdCounter = 0;

export function nextTick(handler: (...args: any[]) => void): number {
    const id = nextTickIdCounter++;
    nextTickHandlers[id] = handler;

    // Füge den Handler zur nächsten Tick-Schleife hinzu
    Promise.resolve().then(() => {
        if (nextTickHandlers[id]) {
            nextTickHandlers[id]();
            delete nextTickHandlers[id]; // Entferne den Handler nach der Ausführung
        }
    });

    return id;
}

export function clearNextTick(id: number): void {
    delete nextTickHandlers[id];
}

export function everyTick(handler: (...args: any[]) => void): number {
    const id = everyTickIdCounter++;
    everyTickHandlers[id] = handler;

    const tick = () => {
        if (everyTickHandlers[id]) {
            everyTickHandlers[id]();
            requestAnimationFrame(tick);
        }
    };

    requestAnimationFrame(tick);
    return id;
}



