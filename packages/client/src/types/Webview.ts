import type { Vector2 } from '@altm/shared';

export interface IHttpResponse {
    statusCode: number;
    body: string;
    headers: Record<string, string>;
}
export interface IHeapStats {
    heapSizeLimit: number;
    totalHeapSize: number;
    usedHeapSize: number;
    mallocedMemory: number;
    peakMallocedMemory: number;
}

/**
 * Follows Chrome DevTools cpuprofile format.
 * See [Chrome DevTools protocol docs](https://chromedevtools.github.io/devtools-protocol/tot/Profiler/#type-Profile) for more details.
 *
 * In order to analyze resulting Profile - serialize this class as JSON and put to a .cpuprofile file.
 * It will be available to use in DevTools on "Performance" tab, or in Visual Studio Code.
 *
 * @example
 * ```js
 * // server
 * alt.onClient("saveProfile", (player, name, content) => {
 *     fs.writeFileSync("./" + name + ".cpuprofile", content);
 * });
 *
 * // client
 * alt.Profile.startProfiling("test");
 * // do some stuff
 * const profile = alt.Profile.stopProfiling("test");
 * const content = JSON.stringify(profile);
 * alt.emitServer("saveProfile", "test", content);
 * ```
 */
export interface IProfile {
    /**
     * The list of profile nodes. First item is the root node.
     */
    nodes: readonly IProfileNode[];
    /**
     * Profiling start timestamp in microseconds.
     */
    startTime: number;
    /**
     * Profiling end timestamp in microseconds.
     */
    endTime: number;
    /**
     * Ids of samples top nodes.
     */
    samples: readonly number[];
    /**
     * Time intervals between adjacent samples in microseconds. The first delta is relative to the profile startTime.
     */
    timeDeltas: readonly number[];
}
export interface IProfileCallFrame {
    /**
     * JavaScript function name.
     */
    functionName: string;
    /**
     * Unique id of the script.
     */
    scriptId: number;
    /**
     * File path.
     */
    url: string;
    /**
     * JavaScript script line number (0-based).
     */
    lineNumber: number;
    /**
     * JavaScript script column number (0-based).
     */
    columnNumber: number;
}
export interface IProfileNode {
    /**
     * Unique id of the node.
     */
    id: number;
    /**
     * Function location.
     */
    callFrame: IProfileCallFrame;
    /**
     * Number of samples where this node was on top of the call stack.
     */
    hitCount: number;
    /**
     * Child node ids.
     */
    children: readonly number[];
    /**
     * The reason of being not optimized. The function may be deoptimized or marked as don't optimize.
     */
    deoptReason: string;
    /**
     * An array of source position ticks.
     */
    positionTicks: readonly IProfileTickInfo[];
}
export interface IProfileTickInfo {
    /**
     * Source line number (1-based).
     */
    line: number;
    /**
     * Number of samples attributed to the source line.
     */
    ticks: number;
}

export interface IWebViewParams {
    url: string;
    pos: Vector2;
    size: Vector2;
    isOverlay: boolean;
    drawableHash: number;
    targetTexture: string;
    headers: Record<string, string>;
    cookies: ICookie[];
}
export interface ICookie {
    /**
     * Cookie name must always start with "__altv_"
     */
    name: `__altv_${string}`;
    url: string;
    value: unknown;
    httpOnly: boolean;
    secure: boolean;
    domain: string;
    path: string;
    sameSite: CookieSameSite;
    priority: CookiePriority;
    expires: number;
}

export enum CookieSameSite {
    NoRestriction = 'NO_RESTRICTION',
    LaxMode = 'LAX_MODE',
    StrictMode = 'STRICT_MODE',
}

export enum CookiePriority {
    Low = 'LOW',
    Medium = 'MEDIUM',
    High = 'HIGH',
}
