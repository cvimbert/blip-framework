/**
 * Created by Christophe on 01/02/2017.
 */
import { File } from "../files/file.class";
import { ImageDisplayElement } from "./image-display-element";
export declare class ControlSprite extends ImageDisplayElement {
    constructor(file: File, x: number, y: number, scale?: number);
    getDOMElement(): HTMLElement;
    readonly DOMElement: HTMLElement;
}
