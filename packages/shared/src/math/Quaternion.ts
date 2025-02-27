export class Quaternion {
    public readonly x: number;
    public readonly y: number;
    public readonly z: number;
    public readonly w: number;

    /** (0, 0, 0, 0) quaternion */
    public static readonly zero: Quaternion = new Quaternion(0, 0, 0, 0);
    /** (1, 1, 1, 1) quaternion */
    public static readonly one: Quaternion = new Quaternion(1, 1, 1, 1);

    public constructor(
        x?: number | number[] | [number, number, number, number] | Quaternion,
        y?: number,
        z?: number,
        w?: number
    ) {
        if (Array.isArray(x) && x.length === 4) {
            this.x = Quaternion.parseValue(x[0]);
            this.y = Quaternion.parseValue(x[1]);
            this.z = Quaternion.parseValue(x[2]);
            this.w = Quaternion.parseValue(x[3]);
        } else if (x instanceof Quaternion) {
            this.x = x.x;
            this.y = x.y;
            this.z = x.z;
            this.w = x.w;
        } else if (typeof x === 'number' && typeof y === 'number' && typeof z === 'number' && typeof w === 'number') {
            this.x = x;
            this.y = y;
            this.z = z;
            this.w = w;
        } else {
            this.x = 0;
            this.y = 0;
            this.z = 0;
            this.w = 0;
        }
    }

    private static parseValue(value: any): number {
        if (typeof value === 'number') {
            return value;
        } else if (typeof value === 'string') {
            const parsed = parseFloat(value);
            if (isNaN(parsed)) {
                throw new Error(`Invalid number: ${value}`);
            }
            return parsed;
        }
        throw new Error(`Expected a number or string, but got: ${typeof value}`);
    }

    private static getXYZW(args: any[]): [number, number, number, number] {
        if (args.length === 1) {
            const firstArg = args[0];
            if (typeof firstArg === "number" || typeof firstArg === "string") {
                const number = this.parseValue(firstArg);
                return [number, number, number, number];
            } else if (Array.isArray(firstArg) && firstArg.length === 4) {
                return [
                    this.parseValue(firstArg[0]),
                    this.parseValue(firstArg[1]),
                    this.parseValue(firstArg[2]),
                    this.parseValue(firstArg[3]),
                ];
            } else if (typeof firstArg === "object") {
                return [
                    this.parseValue(firstArg.x),
                    this.parseValue(firstArg.y),
                    this.parseValue(firstArg.z),
                    this.parseValue(firstArg.w),
                ];
            }
        } else if (args.length === 4) {
            return [
                this.parseValue(args[0]),
                this.parseValue(args[1]),
                this.parseValue(args[2]),
                this.parseValue(args[3]),
            ];
        }
        throw new Error("Invalid arguments");
    }

    public toArray(): [number, number, number, number] {
        return [this.x, this.y, this.z, this.w];
    }

    public toFixed(precision: number): Quaternion {
        const factor = Math.pow(10, precision);
        return new Quaternion(
            Math.round(this.x * factor) / factor,
            Math.round(this.y * factor) / factor,
            Math.round(this.z * factor) / factor,
            Math.round(this.w * factor) / factor,
        );
    }

    public toString(): string {
        return `Quaternion{ x: ${this.x.toFixed(4)}, y: ${this.y.toFixed(4)}, z: ${this.z.toFixed(4)}, w: ${this.w.toFixed(4)} }`;
    }

    public add(...args: any[]): Quaternion {
        const [x, y, z, w] = Quaternion.getXYZW(args);
        return new Quaternion(this.x + x, this.y + y, this.z + z, this.w + w);
    }

    public sub(...args: any[]): Quaternion {
        const [x, y, z, w] = Quaternion.getXYZW(args);
        return new Quaternion(this.x - x, this.y - y, this.z - z, this.w - w);
    }

    public mul(...args: any[]): Quaternion {
        const [x, y, z, w] = Quaternion.getXYZW(args);
        return new Quaternion(
            this.w * x + this.x * w + this.y * z - this.z * y,
            this.w * y - this.x * z + this.y * w + this.z * x,
            this.w * z + this.x * y - this.y * x + this.z * w,
            this.w * w - this.x * x - this.y * y - this.z * z
        );
    }

    public normalize(): Quaternion {
        const length = Math.sqrt(this.x ** 2 + this.y ** 2 + this.z ** 2 + this.w ** 2);
        return length > 0 ? new Quaternion(this.x / length, this.y / length, this.z / length, this.w / length) : Quaternion.zero;
    }

    public inverse(): Quaternion {
        const lengthSquared = this.x ** 2 + this.y ** 2 + this.z ** 2 + this.w ** 2;
        if (lengthSquared === 0) throw new Error("Cannot invert a zero-length quaternion");
        return new Quaternion(-this.x / lengthSquared, -this.y / lengthSquared, -this.z / lengthSquared, this.w / lengthSquared);
    }
}
