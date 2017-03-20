/**
 * Created by Christophe on 01/02/2017.
 */
import { File } from "../files/file.class";
import { ImageDisplayElement } from "./image-display-element";
import { IDisplayable } from "../interfaces/IDisplayable.interface";
export declare class Sprite extends ImageDisplayElement implements IDisplayable {
    private _visible;
    constructor(file: File, x: number, y: number, scale?: number, initVisibility?: boolean);
    displayInDOMElement(container: HTMLElement): HTMLElement;
    show(): void;
    display(): void;
    hide(): void;
    toggle(): void;
}
