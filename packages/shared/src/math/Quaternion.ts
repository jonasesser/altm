export class Quaternion {
    public constructor(value: number) {
        // TODO: Implement constructor
    }
    public readonly x: number;
    public readonly y: number;
    public readonly z: number;
    public readonly w: number;
    /** (0, 0, 0, 0) quaternion */
    public static readonly zero: Quaternion;
    /** (1, 1, 1, 1) quaternion */
    public static readonly one: Quaternion;
    /**
     * Returns [x, y, z, w] array.
     */

    public toArray(): [number, number, number, number] {
        // TODO implement
        return null;
    }
    /**
     * Returns the Quaternion with trimed decimals
     * @param precision Precision to trim the values. Defaults to 4
     */

    public toFixed(precision: number): Quaternion {
        // TODO implement
        return null;
    }

    public toString(): string {
        // TODO implement
        return '';
    }
}