export class RGBA {
    /** r component of RGBA */
    public r: number;
    /** g component of RGBA */
    public g: number;
    /** b component of RGBA */
    public b: number;
    /** a component of RGBA */
    public a: number;

    /** (255, 0, 0, 255) red color */
    public static readonly red: RGBA = new RGBA({ r: 255, g: 0, b: 0, a: 255 });
    /** (0, 255, 0, 255) green color */
    public static readonly green: RGBA = new RGBA({ r: 0, g: 255, b: 0, a: 255 });
    /** (0, 0, 255, 255) blue color */
    public static readonly blue: RGBA = new RGBA({ r: 0, g: 0, b: 255, a: 255 });
    /** (0, 0, 0, 255) black color */
    public static readonly black: RGBA = new RGBA({ r: 0, g: 0, b: 0, a: 255 });
    /** (255, 255, 255, 255) white color */
    public static readonly white: RGBA = new RGBA({ r: 255, g: 255, b: 255, a: 255 });
    /** (0, 0, 0, 0) clear color */
    public static readonly clear: RGBA = new RGBA({ r: 0, g: 0, b: 0, a: 0 });

    public constructor(rgba: { r: number; g: number; b: number; a?: number }) {
        this.r = this.clamp(rgba.r, 0, 255);
        this.g = this.clamp(rgba.g, 0, 255);
        this.b = this.clamp(rgba.b, 0, 255);
        this.a = this.clamp(rgba.a ?? 255, 0, 255);
    }

    private clamp(value: number, min: number, max: number): number {
        return Math.max(min, Math.min(max, value));
    }

    public toArray(): [number, number, number, number] {
        return [this.r, this.g, this.b, this.a];
    }

    public toBGRA(): RGBA {
        return new RGBA({ r: this.b, g: this.g, b: this.r, a: this.a });
    }

    public toARGB(): RGBA {
        return new RGBA({ r: this.a, g: this.r, b: this.g, a: this.b });
    }

    public toInt(): number {
        return (this.a << 24) | (this.r << 16) | (this.g << 8) | this.b;
    }

    public toString(): string {
        return `RGBA{ r: ${this.r}, g: ${this.g}, b: ${this.b}, a: ${this.a} }`;
    }
}
