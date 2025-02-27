import {Vector3, Vector2} from '@altm/shared';

export function worldToScreen(x: number, y: number, z: number): Vector3;
export function worldToScreen(value: Vector3): Vector3;
export function worldToScreen(xOrValue: number | Vector3, y?: number, z?: number): Vector3 {
    let worldX: number;
    let worldY: number;
    let worldZ: number;

    if (typeof xOrValue === 'object') {
        worldX = xOrValue.x;
        worldY = xOrValue.y;
        worldZ = xOrValue.z;
    } else if (typeof xOrValue === 'number' && typeof y === 'number' && typeof z === 'number') {
        worldX = xOrValue;
        worldY = y;
        worldZ = z!;
    } else {
        throw new Error('Invalid arguments for worldToScreen function');
    }

    const [success, screenX, screenY] = World3dToScreen2d(worldX, worldY, worldZ);

    if (!success) {
        throw new Error('Failed to convert world coordinates to screen coordinates');
    }

    return new Vector3(screenX, screenY, 0); // Z-Koordinate auf 0 setzen, da es sich um 2D-Koordinaten handelt
}

export function screenToWorld(x: number, y: number): Vector3;
export function screenToWorld(value: Vector2): Vector3;
export function screenToWorld(xOrValue: number | Vector2, y?: number): Vector3 {
    let screenX: number;
    let screenY: number;

    if (typeof xOrValue === 'object') {
        screenX = xOrValue.x;
        screenY = xOrValue.y;
    } else if (typeof xOrValue === 'number' && typeof y === 'number') {
        screenX = xOrValue;
        screenY = y!;
    } else {
        throw new Error('Invalid arguments for screenToWorld function');
    }

    // Aufruf der nativen Funktion von FiveM
    const [worldCoord, normalVector] = GetWorldCoordFromScreenCoord(screenX, screenY);

    // Erstellen eines Vector3-Objekts aus den Weltkoordinaten
    return new Vector3(worldCoord[0], worldCoord[1], worldCoord[2]);
}