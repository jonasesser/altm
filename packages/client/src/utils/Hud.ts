import {Vector2} from '@altm/shared';

export function setMinimapComponentPosition(name: string, alignX: string, alignY: string, pos: Vector2, size: Vector2): void;
export function setMinimapComponentPosition(name: string, alignX: string, alignY: string, posX: number, posY: number, sizeX: number, sizeY: number): void;
/**
 * Modify minimap component position.
 *
 * @param name Name of the minimap component.
 * @param alignX Same as alignX field in fontend.xml.
 * @param alignY Same as alignY field in fontend.xml.
 * @param posOrPosX
 * @param sizeOrPosY
 * @param sizeX Same as sizeX field in fontend.xml.
 * @param sizeY Same as sizeY field in fontend.xml.
 */
export function setMinimapComponentPosition(name: string, alignX: string, alignY: string, posOrPosX: Vector2 | number, sizeOrPosY: Vector2 | number, sizeX?: number, sizeY?: number): void {
    if (typeof posOrPosX === 'number') {
        // Numerische Variante:
        const posX = posOrPosX;
        const posY = sizeOrPosY as number;
        // Hier können sizeX und sizeY als Zahlen verwendet werden.
        // TODO: Numerische Variante implementieren
    } else {
        // Vektor-Variante:
        const pos = posOrPosX as Vector2;
        const size = sizeOrPosY as Vector2;
        // TODO: Vektor-Variante implementieren
    }
}

/**
 * Reset minimap default component position.
 *
 * @param name Name of the minimap component.
 */
export function resetMinimapComponentPosition(name: string): void {
    // TODO Implement
}

/**
 * Defines if the minimap is a rectangle to change the blip clipping.
 *
 * @param state False will clip the blips rounded to the minimap.
 */
export function setMinimapIsRectangle(state: boolean): void {
    // TODO Implement
}