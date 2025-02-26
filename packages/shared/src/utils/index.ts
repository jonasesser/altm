import { EntityType } from '../../../client/stubs/index.stub';
import { Vector3, Vector2 } from '../math';
import { RGBA } from '../RGBA';

export { LiteEvent } from './LiteEvent';
export { clamp, getRandomInt } from './Math';



export namespace Utils {
    export class BaseUtility {
        #destroyed: boolean = false;

        _tryDestroy() {
            if (this.#destroyed) return false;
            this.#destroyed = true;
            return true;
        }
    }

    export class AssertionError extends Error {}
    export function assert(assertion: unknown, message?: string): asserts assertion {
        if(!assertion) throw new AssertionError(message ?? "Assertion failed");
    }

    export function wait(timeout: number): Promise<void> {
        assert(typeof timeout === "number", "Expected a number as first argument");

        return new Promise(resolve => {
            new Timeout(resolve, timeout);
        });
    }

    export function waitFor(callback: () => boolean, timeout: number = 2000): Promise<void> {
        assert(typeof callback === "function", "Expected a function as first argument");
        assert(typeof timeout === "number", "Expected a number as second argument");

        const checkUntil = Date.now() + timeout;

        return new Promise((resolve, reject) => {
            const tick = new EveryTick(() => {
                let result;
                try {
                    result = callback();
                } catch (e) {
                    const promiseError = new Error(`Failed to wait for callback, error: ${e.message}`);
                    promiseError.stack = e.stack;
                    reject(promiseError);
                    tick.destroy();
                    return;
                }

                if (result) {
                    tick.destroy();
                    resolve();
                } else if (Date.now() > checkUntil) {
                    tick.destroy();
                    reject(new Error(`Failed to wait for callback: ${callback}`));
                }
            });
        });
    }

    export class Timer extends BaseUtility {
        #id: CitizenTimer = null;

        constructor(callback, ms, once) {
            super();

            const handler = () => {
                if (once) {
                    super._tryDestroy();
                    this.#clearId();
                }

                callback();
            };

            if (once)
                this.#id = setTimeout(handler, ms);
            else
                this.#id = setInterval(handler, ms);
        }

        get id() {
            return this.#id;
        }

        #clearId() {
            this.#id = null;
        }

        destroy() {
            assert(super._tryDestroy(), "Timer already destroyed");
            //TODO: implement "clearTimer(this.#id);"
            this.#clearId();
        }
    }

    export class Timeout extends Timer {
        constructor(callback, ms) {
            super(callback, ms, true);
        }
    }

    export class NextTick extends Timer {
        constructor(callback) {
            super(callback, 0, true);
        }
    }

    export class Interval extends Timer {
        constructor(callback, ms) {
            super(callback, ms, false);
        }
    }

    export class EveryTick extends Timer {
        constructor(callback) {
            super(callback, 0, false);
        }
    }

    export class ConsoleCommand extends BaseUtility {
        static #handlers: Map<string, Set<(...args: string[]) => void>> = null;

        static #init() {
            if (ConsoleCommand.#handlers) return;
            ConsoleCommand.#handlers = new Map();

            on("consoleCommand", (name, ...args) => {
                ConsoleCommand.#handlers
                    .get(name)
                    ?.forEach(h => h(...args));
            });
        }

        static #addHandler(instance) {
            const handlers = ConsoleCommand.#handlers.get(instance.#name) ?? new Set();
            handlers.add(instance.#handler);
            ConsoleCommand.#handlers.set(instance.#name, handlers);
        }

        static #removeHandler(instance) {
            ConsoleCommand.#handlers
                .get(instance.#name)
                ?.delete(instance.#handler);
        }

        #name = "";
        #handler = () => {};

        constructor(name, handler) {
            assert(typeof name === "string", "Expected a string as first argument");
            assert(typeof handler === "function", "Expected a function as second argument");

            super();

            this.#name = name;
            this.#handler = handler;

            ConsoleCommand.#init();
            ConsoleCommand.#addHandler(this);
        }

        destroy() {
            assert(super._tryDestroy(), `ConsoleCommand '${this.#name}' already destroyed`);

            ConsoleCommand.#removeHandler(this);
        }
    }

    export function assertRGBA(val: RGBA, message = "Expected RGBA"): asserts val {
        return assert(
            val && typeof val.r === "number" && typeof val.g === "number" && typeof val.b === "number" && typeof val.a === "number",
            message
        );
    }

    export function assertVector3(val: Vector3, message = "Expected Vector3"): asserts val {
        return assert(
            val && typeof val.x === "number" && typeof val.y === "number" && typeof val.z === "number",
            message
        );
    }

    export function assertVector2(val: Vector2, message = "Expected Vector2"): asserts val {
        return assert(
            val && typeof val.x === "number" && typeof val.y === "number",
            message
        );
    }

    export function assertDrawTextArgs(text: string, font: number, scale: number, color: RGBA, outline: boolean, dropShadow: boolean, textAlign: number)  {
        assert(typeof text === "string", "Expected a string as first argument");
        assert(typeof font === "number", "Expected a number as third argument");
        assert(typeof scale === "number", "Expected a number as fourth argument");
        assertRGBA(color, "Expected RGBA as fifth argument");
        assert(typeof outline === "boolean", "Expected boolean as sixth argument");
        assert(typeof dropShadow === "boolean", "Expected boolean as seventh argument");
        assert(typeof textAlign === "number", "Expected number as eighth argument");
    }

    export function assertNotNaN(val: number, message = "Expected number"): asserts val {
        assert(!isNaN(val), message)
    }

    export function getClosestEntityFromPool(poolName: EntityType, options: { pos: Vector3, alive: boolean, range?: number }): number {
        const { pos, alive, range = Infinity } = options;
        assertVector3(pos, "Expected Vector3 as pos option");
        assertNotNaN(range, "Expected a number as range option");

        let closestEntity = null;
        let closestDistance = Infinity;
        const entities: number[] = GetGamePool(poolName);
        for (const entity of entities) {
            const distance = pos.distanceTo(new Vector3(GetEntityCoords(entity, alive)));
            if (distance > range || distance > closestDistance) continue;

            closestEntity = entity;
            closestDistance = distance;
        }

        return closestEntity;
    }
}
