import type {Vector3, RGBA} from "@altm/shared";

export interface IMarkerOptions {
    type: number;
    dir: Vector3;
    rot: Vector3;
    scale: Vector3;
    color: RGBA;
    bobUpAndDown: boolean;
    faceCamera: boolean;
    p19: number;
    rotate: boolean;
    textureDict: string;
    textureName: string;
    drawOnEnts: boolean;
}