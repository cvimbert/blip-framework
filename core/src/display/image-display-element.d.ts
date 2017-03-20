/**
 * Created by Christophe on 22/02/2017.
 */
import { DisplayElement } from "./display-element.class";
import { File } from "../files/file.class";
export declare class ImageDisplayElement extends DisplayElement {
    file: File;
    constructor(file: File, x: number, y: number, scale?: number);
    getDOMElement(): HTMLElement;
}
