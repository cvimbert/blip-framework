/**
 * Created by Christophe on 21/02/2017.
 */
import { StatusDispatcher } from "../common/status-dispatcher.class";
export declare class DisplayElement extends StatusDispatcher {
    x: number;
    y: number;
    scale: number;
    protected _DOMElement: HTMLElement;
    constructor(x: number, y: number, scale?: number);
    getDOMElement(): HTMLElement;
    displayInDOMElement(container: HTMLElement): HTMLElement;
}
