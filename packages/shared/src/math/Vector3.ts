import { IVector3 } from '../types';

export class Vector3 {
    public readonly x: number;
    public readonly y: number;
    public readonly z: number;

    public static readonly zero: Vector3 = new Vector3(0, 0, 0);
    public static readonly one: Vector3 = new Vector3(1, 1, 1);
    public static readonly forward: Vector3 = new Vector3(0, 0, 1);
    public static readonly back: Vector3 = new Vector3(0, 0, -1);
    public static readonly up: Vector3 = new Vector3(0, 1, 0);
    public static readonly down: Vector3 = new Vector3(0, -1, 0);
    public static readonly left: Vector3 = new Vector3(-1, 0, 0);
    public static readonly right: Vector3 = new Vector3(1, 0, 0);
    public static readonly negativeInfinity: Vector3 = new Vector3(-Infinity, -Infinity, -Infinity);
    public static readonly positiveInfinity: Vector3 = new Vector3(Infinity, Infinity, Infinity);

    public constructor(x?: number | number[] | [number, number, number] | IVector3, y?: number, z?: number) {
        if (Array.isArray(x) && x.length === 3) {
            this.x = x[0];
            this.y = x[1];
            this.z = x[2];
        } else if (typeof x === 'object' && !Array.isArray(x)) {
            this.x = x.x;
            this.y = x.y;
            this.z = x.z;
        } else if (typeof x === 'number' && typeof y === 'number' && typeof z === 'number') {
            this.x = x;
            this.y = y;
            this.z = z;
        } else {
            throw new Error('Invalid arguments for Vector3 constructor');
        }
    }

    private static assertNotNaN(value: number, message: string): void {
        if (isNaN(value)) {
            throw new Error(message);
        }
    }

    private static getXYZ(args: any[]): [number, number, number] {
        if (args.length === 1) {
            const firstArg = args[0];
            if (typeof firstArg === "number") {
                return [firstArg, firstArg, firstArg];
            } else if (Array.isArray(firstArg) && firstArg.length === 3) {
                return [firstArg[0], firstArg[1], firstArg[2]];
            } else if (typeof firstArg === "object") {
                return [firstArg.x, firstArg.y, firstArg.z];
            }
        } else if (args.length === 3) {
            return [args[0], args[1], args[2]];
        }
        throw new Error("Invalid arguments");
    }

    public toArray(): [number, number, number] {
        return [this.x, this.y, this.z];
    }

    public toFixed(precision: number): Vector3 {
        const factor = Math.pow(10, precision);
        return new Vector3(
            Math.round(this.x * factor) / factor,
            Math.round(this.y * factor) / factor,
            Math.round(this.z * factor) / factor,
        );
    }

    public toString(): string {
        return `Vector3(${this.x}, ${this.y}, ${this.z})`;
    }

    public add(...args: any[]): Vector3 {
        const [x, y, z] = Vector3.getXYZ(args);
        return new Vector3(this.x + x, this.y + y, this.z + z);
    }

    public sub(...args: any[]): Vector3 {
        const [x, y, z] = Vector3.getXYZ(args);
        return new Vector3(this.x - x, this.y - y, this.z - z);
    }

    public div(...args: any[]): Vector3 {
        const [x, y, z] = Vector3.getXYZ(args);
        Vector3.assertNotNaN(x, "Division by zero");
        Vector3.assertNotNaN(y, "Division by zero");
        Vector3.assertNotNaN(z, "Division by zero");
        return new Vector3(this.x / x, this.y / y, this.z / z);
    }

    public mul(...args: any[]): Vector3 {
        const [x, y, z] = Vector3.getXYZ(args);
        return new Vector3(this.x * x, this.y * y, this.z * z);
    }

    public dot(...args: any[]): number {
        const [x, y, z] = Vector3.getXYZ(args);
        return this.x * x + this.y * y + this.z * z;
    }

    public cross(...args: any[]): Vector3 {
        const [x, y, z] = Vector3.getXYZ(args);
        return new Vector3(
            this.y * z - this.z * y,
            this.z * x - this.x * z,
            this.x * y - this.y * x
        );
    }

    public negative(): Vector3 {
        return new Vector3(-this.x, -this.y, -this.z);
    }

    public inverse(): Vector3 {
        return new Vector3(1 / this.x, 1 / this.y, 1 / this.z);
    }

    public normalize(): Vector3 {
        const length = this.length();
        return length > 0 ? new Vector3(this.x / length, this.y / length, this.z / length) : Vector3.zero;
    }

    public distanceTo(vector: IVector3): number {
        return Math.sqrt(this.distanceToSquared(vector));
    }

    public distanceToSquared(vector: IVector3): number {
        return (this.x - vector.x) ** 2 + (this.y - vector.y) ** 2 + (this.z - vector.z) ** 2;
    }

    public angleTo(vector: IVector3): number {
        const dotProduct = this.dot(vector);
        const lengths = Math.sqrt(this.length() * Math.sqrt(vector.x ** 2 + vector.y ** 2 + vector.z ** 2));
        return Math.acos(dotProduct / lengths);
    }

    public angleToDegrees(vector: IVector3): number {
        return this.angleTo(vector) * (180 / Math.PI);
    }

    public toRadians(): Vector3 {
        return new Vector3(this.x * (Math.PI / 180), this.y * (Math.PI / 180), this.z * (Math.PI / 180));
    }

    public toDegrees(): Vector3 {
        return new Vector3(this.x * (180 / Math.PI), this.y * (180 / Math.PI), this.z * (180 / Math.PI));
    }

    public isInRange(vector: IVector3, range: number): boolean {
        return this.distanceTo(vector) <= range;
    }

    public lerp(vector: IVector3, ratio: number): Vector3 {
        return new Vector3(
            this.x + (vector.x - this.x) * ratio,
            this.y + (vector.y - this.y) * ratio,
            this.z + (vector.z - this.z) * ratio
        );
    }

    private length(): number {
        return Math.sqrt(this.x ** 2 + this.y ** 2 + this.z ** 2);
    }
}
