/**
 * Created by Christophe on 24/02/2017.
 */
import { Variable } from "../../core/gamelogic/variable.class";
import { DisplayElement } from "../../core/display/display-element.class";
export declare class LcdDisplayer extends DisplayElement {
    digitNumber: number;
    stepWidth: number;
    variable: Variable;
    private _backgroundDigits;
    private _digits;
    private _xPosition;
    private _value;
    constructor(x: number, y: number, digitNumber?: number, stepWidth?: number, scale?: number, variable?: Variable);
    value: number;
    getDOMElement(): HTMLElement;
}
