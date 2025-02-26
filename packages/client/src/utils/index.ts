import * as shared from 'alt-shared';
import { GameFont, TextAlign } from '../types';
import { EntityType, worldToScreen } from '../../stubs/index.stub';

export { hash, stringToSHA256 } from './Generel';

export namespace Utils {
    /**
     * Loads a model into memory asynchronously, like {@link loadModelAsync} but more safely.
     *
     * @remarks If you can't load a specific model with this method, use {@link loadModelAsync} instead.
     */
    export async function requestModel(model: string | number, timeout: number): Promise<void> {
        RequestModel(model);

        const startTime = Date.now();
        let isLoaded = false;

        while (!isLoaded && Date.now() - startTime < timeout) {
            isLoaded = HasModelLoaded(model);
            if (!isLoaded) {
                await shared.Utils.wait(100);
            }
        }

        if (!isLoaded) {
            console.error(`Model ${model} could not be loaded within the timeout of ${timeout} ms.`);
        }
    }

    export async function requestAnimDict(animDict: string, timeout: number): Promise<void> {
        RequestAnimDict(animDict);

        const startTime = Date.now();
        let isLoaded = false;

        while (!isLoaded && Date.now() - startTime < timeout) {
            isLoaded = HasAnimDictLoaded(animDict);
            await shared.Utils.wait(100);
        }

        if (!isLoaded) {
            throw new Error(`Animation dictionary ${animDict} could not be loaded within the timeout of ${timeout} ms.`);
        }
    }

    export async function requestAnimSet(animSet: string, timeout: number): Promise<void> {
        RequestAnimSet(animSet);

        const startTime = Date.now();
        let isLoaded = false;

        while (!isLoaded && Date.now() - startTime < timeout) {
            isLoaded = HasAnimSetLoaded(animSet);
            await shared.Utils.wait(100);
        }

        if (!isLoaded) {
            throw new Error(`Animation set ${animSet} could not be loaded within the timeout of ${timeout} ms.`);
        }
    }

    export async function requestClipSet(clipSet: string, timeout: number): Promise<void> {
        RequestClipSet(clipSet);

        const startTime = Date.now();
        let isLoaded = false;

        while (!isLoaded && Date.now() - startTime < timeout) {
            isLoaded = HasClipSetLoaded(clipSet);
            await shared.Utils.wait(100);
        }

        if (!isLoaded) {
            throw new Error(`Clip set ${clipSet} could not be loaded within the timeout of ${timeout} ms.`);
        }
    }

    export async function requestCutscene(cutsceneName: string, flags: string | number, timeout: number): Promise<void> {
        shared.Utils.assert(typeof cutsceneName === 'string', 'Expected a string as first argument');
        shared.Utils.assert(typeof flags === 'number' || typeof flags === 'string', 'Expected a number or string as second argument');
        shared.Utils.assert(typeof timeout === 'number', 'Expected a number as third argument');

        try {
            RequestCutscene(cutsceneName, typeof flags === 'string' ? parseInt(flags) : flags);
            await shared.Utils.waitFor(() => HasThisCutsceneLoaded(cutsceneName), timeout);
        } catch (e) {
            throw new Error(`Failed to request cutscene '${cutsceneName}'`);
        }
    }

    export function drawText2dThisFrame(text: string, pos2d: shared.Vector2, font: GameFont, scale: number, color: shared.RGBA, outline: boolean, dropShadow: boolean, textAlign: TextAlign): void {
        shared.Utils.assertDrawTextArgs(text, font, scale, color, outline, dropShadow, textAlign);
        shared.Utils.assertVector2(pos2d, 'Expected Vector2 as second argument');

        SetTextFont(font);
        SetTextProportional(false);
        SetTextScale(scale, scale);
        SetTextColour(color.r, color.g, color.b, color.a);
        SetTextEdge(2, 0, 0, 0, 150);

        if (outline) {
            SetTextOutline();
        }

        if (dropShadow) {
            SetTextDropshadow(0, 0, 0, 0, 255);
            SetTextDropShadow();
        }

        SetTextJustification(textAlign);
        if (textAlign === TextAlign.Center) {
            SetTextWrap(0, pos2d.x);
        }

        BeginTextCommandDisplayText('CELL_EMAIL_BCON');
        text.match(/.{1,99}/g)?.forEach((textBlock) => {
            AddTextComponentSubstringPlayerName(textBlock);
        });

        EndTextCommandDisplayText(pos2d.x, pos2d.y);
    }

    export function drawText2d(text: string, pos2d: shared.Vector2, font: GameFont, scale: number, color: shared.RGBA, outline: boolean, dropShadow: boolean, textAlign: TextAlign): shared.Utils.EveryTick {
        return new shared.Utils.EveryTick(() => {
            drawText2dThisFrame(text, pos2d, font, scale, color, outline, dropShadow, textAlign);
        });
    }

    export function drawText3dThisFrame(text: string, pos3d: shared.Vector3, font: GameFont, scale: number, color: shared.RGBA, outline: boolean, dropShadow: boolean, textAlign: TextAlign): void {
        shared.Utils.assertDrawTextArgs(text, font, scale, color, outline, dropShadow, textAlign);
        shared.Utils.assertVector3(pos3d, 'Expected Vector3 as second argument');

        const pos2d = worldToScreen(pos3d);

        SetDrawOrigin(pos3d.x, pos3d.y, pos3d.z, 0);
        BeginTextCommandDisplayText('STRING');
        AddTextComponentSubstringPlayerName(text);
        SetTextFont(font);
        SetTextScale(1, scale);

        SetTextJustification(textAlign);
        if (textAlign === 2) {
            SetTextWrap(0.0, pos2d.x);
        } else {
            SetTextWrap(0.0, 1.0);
        }

        SetTextColour(color.r, color.g, color.b, color.a);

        if (outline) {
            SetTextOutline();
        }

        if (dropShadow) {
            SetTextDropshadow(0, 0, 0, 0, 255);
            SetTextDropShadow();
        }

        EndTextCommandDisplayText(pos2d.x, pos2d.y);
        ClearDrawOrigin();
    }

    export function drawText3d(text: string, pos3d: shared.Vector3, font: GameFont, scale: number, color: shared.RGBA, outline: boolean, dropShadow: boolean, textAlign: TextAlign): shared.Utils.EveryTick {
        return new shared.Utils.EveryTick(() => {
            drawText3dThisFrame(text, pos3d, font, scale, color, outline, dropShadow, textAlign);
        });
    }

    /**
     * Loads the map area at a certain position
     * and waits asynchronously until all parts in view area have been loaded.
     *
     * @remarks Uses {@link FocusData} and {@link https://natives.altv.mp/#/0xACCFB4ACF53551B0 newLoadSceneStartSphere}.
     *
     * @param pos Coords of the map area.
     * @param radius Radius of sphere to load. Defaults to 50.0.
     * @param timeout The maximum milliseconds to wait, otherwise promise will be rejected. Defaults to 5000.
     */
    export async function loadMapArea(pos: shared.Vector3, radius: number, timeout: number = 5000): Promise<void> {
        shared.Utils.assertVector3(pos, 'Expected Vector3 as first argument');
        shared.Utils.assert(typeof radius === 'number', 'Expected number as second argument');
        shared.Utils.assert(typeof timeout === 'number', 'Expected number as third argument');

        // TODO: look a FocusData System
        NewLoadSceneStop();
        NewLoadSceneStartSphere(pos.x, pos.y, pos.x, radius, 0);

        try {
            await shared.Utils.waitFor(IsNewLoadSceneLoaded, timeout);
        } catch (e) {
            throw new Error(`Failed to load map area pos: { x: ${pos.x.toFixed(2)}, y: ${pos.y.toFixed(2)}, z: ${pos.z.toFixed(2)} }`);
        } finally {
            //TODO: FocusData.clearFocus();
            NewLoadSceneStop();
        }
    }

    export class Keybind extends shared.Utils.BaseUtility {
        static #keyupHandlers: Map<number, Set<() => void>> = null;
        static #keydownHandlers: Map<number, Set<() => void>> = null;

        static #init(instance: Keybind) {
            switch (instance.#eventType) {
                case 'keyup':
                    if (this.#keyupHandlers) return;
                    this.#keyupHandlers = new Map();

                    //TODO: add Event System
                    // alt.on("keyup", (keyCode) => {
                    //     Keybind.#keyupHandlers
                    //         .get(keyCode)
                    //         ?.forEach(h => h());
                    // });

                    break;

                case 'keydown':
                    if (this.#keydownHandlers) return;
                    this.#keydownHandlers = new Map();

                    //TODO: add Event System
                    // alt.on("keydown", (keyCode) => {
                    //     Keybind.#keydownHandlers
                    //         .get(keyCode)
                    //         ?.forEach(h => h());
                    // });

                    break;

                default:
                    throw new Error(`Unknown eventType: ${instance.#eventType}`);
            }
        }

        static #getHandlers(eventType: 'keyup' | 'keydown', keyCode: number) {
            let allHandlers: Map<number, Set<() => void>> = null;

            switch (eventType) {
                case 'keyup':
                    allHandlers = Keybind.#keyupHandlers;
                    break;

                case 'keydown':
                    allHandlers = Keybind.#keydownHandlers;
                    break;

                default:
                    throw new Error(`Unknown eventType: ${eventType}`);
            }

            const handlers = allHandlers.get(keyCode) ?? new Set();
            allHandlers.set(keyCode, handlers);

            return handlers;
        }

        static #addHandler(instance: Keybind) {
            for (const keyCode of instance.#keyCodes) {
                Keybind.#getHandlers(instance.#eventType, keyCode).add(instance.#handler);
            }
        }

        static #removeHandler(instance: Keybind) {
            for (const keyCode of instance.#keyCodes) {
                Keybind.#getHandlers(instance.#eventType, keyCode).delete(instance.#handler);
            }
        }

        #eventType: 'keyup' | 'keydown' = null;
        #keyCodes: number[] = [];
        #handler = () => {};

        constructor(keyCode: number, handler: () => void, eventType: 'keyup' | 'keydown' = 'keyup') {
            shared.Utils.assert(typeof keyCode === 'number' || Array.isArray(keyCode), 'Expected a number or array as first argument');
            shared.Utils.assert(typeof handler === 'function', 'Expected a function as second argument');
            shared.Utils.assert(typeof eventType === 'string', 'Expected a string as third argument');

            super();

            this.#keyCodes = Array.isArray(keyCode) ? keyCode : [keyCode];
            this.#handler = handler;
            this.#eventType = eventType;

            Keybind.#init(this);
            Keybind.#addHandler(this);
        }

        destroy() {
            shared.Utils.assert(super._tryDestroy(), `Keybind keyCodes: [${this.#keyCodes.join(', ')}] already destroyed`);

            Keybind.#removeHandler(this);
        }
    }

    export class Marker extends shared.Utils.BaseUtility {
        #tick;
        #type: number;
        #pos: shared.Vector3;
        #dir: shared.Vector3;
        #rot: shared.Vector3;
        #scale: shared.Vector3;
        #color: shared.RGBA;
        #bobUpAndDown: boolean;
        #faceCamera: boolean;
        #p19: number;
        #rotate: boolean;
        #textureDict: string | undefined;
        #textureName: string | undefined;
        #drawOnEnts: boolean;

        constructor(
            pos,
            {
                type = 0,
                dir = shared.Vector3.zero,
                rot = shared.Vector3.zero,
                scale = shared.Vector3.one,
                color = new shared.RGBA(255, 255, 255),
                bobUpAndDown = false,
                faceCamera = false,
                p19 = 2,
                rotate = false,
                textureDict = undefined,
                textureName = undefined,
                drawOnEnts = false,
            } = {},
        ) {
            super();

            shared.Utils.assertVector3(pos, 'Expected Vector3 as first argument');
            shared.Utils.assert(typeof type === 'number', 'Expected a number for type option');
            shared.Utils.assertVector3(dir, 'Expected Vector3 for dir option');
            shared.Utils.assertVector3(rot, 'Expected Vector3 for rot option');
            shared.Utils.assertVector3(scale, 'Expected Vector3 for scale option');
            shared.Utils.assertRGBA(color, 'Expected RGBA for color option');
            shared.Utils.assert(typeof bobUpAndDown === 'boolean', 'Expected a boolean for bobUpAndDown option');
            shared.Utils.assert(typeof faceCamera === 'boolean', 'Expected a boolean for faceCamera option');
            shared.Utils.assert(typeof p19 === 'number', 'Expected a number for p19 option');
            shared.Utils.assert(typeof rotate === 'boolean', 'Expected a boolean for rotate option');
            shared.Utils.assert(typeof textureDict === 'undefined' || typeof textureDict === 'string', 'Expected a string or undefined for textureDict option');
            shared.Utils.assert(typeof textureName === 'undefined' || typeof textureName === 'string', 'Expected a string or undefined for textureName option');
            shared.Utils.assert(typeof drawOnEnts === 'boolean', 'Expected a boolean for drawOnEnts option');

            this.#pos = pos;
            this.#type = type;
            this.#dir = dir;
            this.#rot = rot;
            this.#scale = scale;
            this.#color = color;
            this.#bobUpAndDown = bobUpAndDown;
            this.#faceCamera = faceCamera;
            this.#p19 = p19;
            this.#rotate = rotate;
            this.#textureDict = textureDict;
            this.#textureName = textureName;
            this.#drawOnEnts = drawOnEnts;

            this.#tick = new shared.Utils.EveryTick(() => {
                DrawMarker(
                    this.#type,
                    this.#pos.x,
                    this.#pos.y,
                    this.#pos.z,
                    this.#dir.x,
                    this.#dir.y,
                    this.#dir.z,
                    this.#rot.x,
                    this.#rot.y,
                    this.#rot.z,
                    this.#scale.x,
                    this.#scale.y,
                    this.#scale.z,
                    this.#color.r,
                    this.#color.g,
                    this.#color.b,
                    this.#color.a,
                    this.#bobUpAndDown,
                    this.#faceCamera,
                    this.#p19,
                    this.#rotate,
                    this.#textureDict,
                    this.#textureName,
                    this.#drawOnEnts,
                );
            });
        }

        get pos() {
            return this.#pos;
        }

        set pos(value) {
            shared.Utils.assertVector3(value);

            this.#pos = value;
        }

        get type() {
            return this.#type;
        }

        set type(value) {
            shared.Utils.assert(typeof value === 'number', 'Expected a number');

            this.#type = value;
        }

        get dir() {
            return this.#dir;
        }

        set dir(value) {
            shared.Utils.assertVector3(value);

            this.#dir = value;
        }

        get rot() {
            return this.#rot;
        }

        set rot(value) {
            shared.Utils.assertVector3(value);

            this.#rot = value;
        }

        get scale() {
            return this.#scale;
        }

        set scale(value) {
            shared.Utils.assertVector3(value);

            this.#scale = value;
        }

        get p19() {
            return this.#p19;
        }

        set p19(value) {
            shared.Utils.assert(typeof value === 'number', 'Expected a number');

            this.#p19 = value;
        }

        get color() {
            return this.#color;
        }

        set color(value) {
            shared.Utils.assertRGBA(value);

            this.#color = value;
        }

        get bobUpAndDown() {
            return this.#bobUpAndDown;
        }

        set bobUpAndDown(value) {
            shared.Utils.assert(typeof value === 'boolean', 'Expected a boolean');

            this.#bobUpAndDown = value;
        }

        get faceCamera() {
            return this.#faceCamera;
        }

        set faceCamera(value) {
            shared.Utils.assert(typeof value === 'boolean', 'Expected a boolean');

            this.#faceCamera = value;
        }

        get rotate() {
            return this.#rotate;
        }

        set rotate(value) {
            shared.Utils.assert(typeof value === 'boolean', 'Expected a boolean');

            this.#rotate = value;
        }

        get drawOnEnts() {
            return this.#drawOnEnts;
        }

        set drawOnEnts(value) {
            shared.Utils.assert(typeof value === 'boolean', 'Expected a boolean');

            this.#drawOnEnts = value;
        }

        get textureDict() {
            return this.#textureDict;
        }

        set textureDict(value) {
            shared.Utils.assert(typeof value === 'undefined' || typeof value === 'string', 'Expected a string or undefined');

            this.#textureDict = value;
        }

        get textureName() {
            return this.#textureName;
        }

        set textureName(value) {
            shared.Utils.assert(typeof value === 'undefined' || typeof value === 'string', 'Expected a string or undefined');

            this.#textureName = value;
        }

        destroy() {
            shared.Utils.assert(super._tryDestroy(), 'Marker already destroyed');

            this.#tick.destroy();
        }
    }

    export function registerPedheadshotBase64(ped: number) {
        return getRegisterPedheadshotBase64.bind(null, RegisterPedheadshot);
    }

    export function registerPedheadshot3Base64(ped: number) {
        return getRegisterPedheadshotBase64.bind(null, RegisterPedheadshot_3);
    }

    export function registerPedheadshotTransparentBase64(ped: number) {
        return getRegisterPedheadshotBase64.bind(null, RegisterPedheadshotTransparent);
    }

    export function getClosestVehicle() {
        return getClosestEntity(EntityType.Vehicle);
    }

    export function getClosestPed() {
        return getClosestEntity(EntityType.Ped);
    }

    export function getClosestObject() {
        return getClosestEntity(EntityType.Object);
    }

    export function getClosestNetObject() {
        return getClosestEntity(EntityType.NetObject);
    }
}

async function getRegisterPedheadshotBase64(headshotNative: any, ped: number) {
    let error = null;
    let headshot = null;

    try {
        headshot = headshotNative(ped);
        shared.Utils.assert(IsPedheadshotValid(headshot), `Ped or player is invalid: ${ped} (headshot: ${headshot})`);

        await shared.Utils.waitFor(() => IsPedheadshotReady(headshot));
        // @ts-ignore // TODO: how?
        return alt.getHeadshotBase64(headshot);
    } catch (cause) {
        error = new Error(`Failed to get ped headshot base64: ${headshot}`, { cause });
    } finally {
        UnregisterPedheadshot(headshot);
    }

    throw error;
}

const getClosestEntity = (poolName: EntityType) => (options: { pos?: shared.Vector3, alive?: boolean }) => {
    return shared.Utils.getClosestEntityFromPool(poolName, {
        pos: options.pos ?? new shared.Vector3(GetEntityCoords(PlayerPedId(), true)),
        alive: options.alive ?? true,
        ...options,
    });
};