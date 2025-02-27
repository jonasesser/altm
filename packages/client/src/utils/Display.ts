import {Vector2, Vector3} from '@altm/shared';

export function isFullScreen(): boolean {
    // TODO Implement
    return false;
}

export function getScreenResolution(): Vector2 {
    return new Vector2(GetScreenResolution());
}

export function isPointOnScreen(x: number, y: number, z: number): boolean;
export function isPointOnScreen(value: Vector3): boolean;
export function isPointOnScreen(xOrValue: number | Vector3, y?: number, z?: number): boolean {
    if (typeof xOrValue === "number") {
        // Fall: Es wurden drei Zahlen übergeben.
        // y und z sind hier definiert.
        return false; // TODO: Logik für numerische Variante implementieren.
    } else {
        // Fall: Es wurde ein shared.IVector3 übergeben.
        // Zugriff auf xOrValue.x, xOrValue.y, xOrValue.z.
        return false; // TODO: Logik für Vektor-Variante implementieren.
    }
}