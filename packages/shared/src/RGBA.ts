export class RGBA {
    public constructor(rgba: { r: number; g: number; b: number; a?: number }) {
        // TODO: Implement constructor
    }
    public static readonly red: RGBA;
    public static readonly green: RGBA;
    public static readonly blue: RGBA;
    public static readonly black: RGBA;
    public static readonly white: RGBA;
    public static readonly clear: RGBA;
    /** r component of RGBA */
    public r: number;
    /** g component of RGBA */
    public g: number;
    /** b component of RGBA */
    public b: number;
    /** a component of RGBA */
    public a: number;

    public toArray(): [r: number, g: number, b: number, a: number] {
        // TODO implement
        return null;
    }

    public toBGRA(): RGBA {
        // TODO implement
        return null;
    }

    public toARGB(): RGBA {
        // TODO implement
        return null;
    }

    public toInt(): number {
        // TODO implement
        return 0;
    }

    public toString(): string {
        // TODO implement
        return '';
    }
}