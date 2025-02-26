import { IVector2 } from '../types';

export class Vector2 {
    public readonly x: number;
    public readonly y: number;

    public static readonly zero: Vector2 = new Vector2(0, 0);
    public static readonly one: Vector2 = new Vector2(1, 1);
    public static readonly up: Vector2 = new Vector2(0, 1);
    public static readonly down: Vector2 = new Vector2(0, -1);
    public static readonly left: Vector2 = new Vector2(-1, 0);
    public static readonly right: Vector2 = new Vector2(1, 0);
    public static readonly negativeInfinity: Vector2 = new Vector2(-Infinity, -Infinity);
    public static readonly positiveInfinity: Vector2 = new Vector2(Infinity, Infinity);

    public constructor(x?: number | number[] | [number, number] | IVector2, y?: number) {
        if (Array.isArray(x)) {
            this.x = x[0];
            this.y = x[1];
        } else if (typeof x === 'object') {
            this.x = x.x;
            this.y = x.y;
        } else {
            this.x = x ?? 0;
            this.y = y ?? 0;
        }
    }

    public toArray(): [number, number] {
        return [this.x, this.y];
    }

    public toFixed(precision: number): Vector2 {
        const factor = Math.pow(10, precision);
        return new Vector2(
            Math.round(this.x * factor) / factor,
            Math.round(this.y * factor) / factor,
        );
    }

    public toString(): string {
        return `Vector2(${this.x}, ${this.y})`;
    }

    public add(x: number | [number, number] | IVector2, y?: number): Vector2 {
        if (Array.isArray(x)) {
            return new Vector2(this.x + x[0], this.y + x[1]);
        } else if (typeof x === 'object') {
            return new Vector2(this.x + x.x, this.y + x.y);
        } else {
            return new Vector2(this.x + x, this.y + (y ?? 0));
        }
    }

    public sub(x: number | [number, number] | IVector2, y?: number): Vector2 {
        if (Array.isArray(x)) {
            return new Vector2(this.x - x[0], this.y - x[1]);
        } else if (typeof x === 'object') {
            return new Vector2(this.x - x.x, this.y - x.y);
        } else {
            return new Vector2(this.x - x, this.y - (y ?? 0));
        }
    }

    public div(x: number | [number, number] | IVector2, y?: number): Vector2 {
        if (Array.isArray(x)) {
            return new Vector2(this.x / x[0], this.y / x[1]);
        } else if (typeof x === 'object') {
            return new Vector2(this.x / x.x, this.y / x.y);
        } else {
            return new Vector2(this.x / x, this.y / (y ?? 1));
        }
    }

    public dot(x: number | [number, number] | IVector2, y?: number): number {
        if (Array.isArray(x)) {
            return this.x * x[0] + this.y * x[1];
        } else if (typeof x === 'object') {
            return this.x * x.x + this.y * x.y;
        } else {
            return this.x * x + this.y * (y ?? 0);
        }
    }

    public mul(x: number | [number, number] | IVector2, y?: number): Vector2 {
        if (Array.isArray(x)) {
            return new Vector2(this.x * x[0], this.y * x[1]);
        } else if (typeof x === 'object') {
            return new Vector2(this.x * x.x, this.y * x.y);
        } else {
            return new Vector2(this.x * x, this.y * (y ?? 1));
        }
    }

    public negative(): Vector2 {
        return new Vector2(-this.x, -this.y);
    }

    public inverse(): Vector2 {
        return new Vector2(1 / this.x, 1 / this.y);
    }

    public normalize(): Vector2 {
        const length = this.length();
        return length > 0 ? new Vector2(this.x / length, this.y / length) : Vector2.zero;
    }

    public distanceTo(vector: IVector2): number {
        return Math.sqrt(this.distanceToSquared(vector));
    }

    public distanceToSquared(vector: IVector2): number {
        return (this.x - vector.x) ** 2 + (this.y - vector.y) ** 2;
    }

    public angleTo(vector: IVector2): number {
        const dotProduct = this.dot(vector);
        const lengths = this.length() * Math.sqrt(vector.x ** 2 + vector.y ** 2);
        return Math.acos(dotProduct / lengths);
    }

    public angleToDegrees(vector: IVector2): number {
        return this.angleTo(vector) * (180 / Math.PI);
    }

    public toRadians(): Vector2 {
        return new Vector2(this.x * (Math.PI / 180), this.y * (Math.PI / 180));
    }

    public toDegrees(): Vector2 {
        return new Vector2(this.x * (180 / Math.PI), this.y * (180 / Math.PI));
    }

    public isInRange(vector: IVector2, range: number): boolean {
        return this.distanceTo(vector) <= range;
    }

    public lerp(vector: IVector2, ratio: number): Vector2 {
        return new Vector2(
            this.x + (vector.x - this.x) * ratio,
            this.y + (vector.y - this.y) * ratio
        );
    }

    private length(): number {
        return Math.sqrt(this.x ** 2 + this.y ** 2);
    }
}
