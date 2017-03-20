/**
 * Created by Christophe on 22/02/2017.
 */
import { DisplayElement } from "../../core/display/display-element.class";
import { Variable } from "../../core/gamelogic/variable.class";
export declare class Seg7Displayer extends DisplayElement {
    variable: Variable;
    txtDiv: HTMLElement;
    private _currentValue;
    constructor(x: number, y: number, scale?: number, variable?: Variable);
    getDOMElement(): HTMLElement;
    bindVariable(variable: Variable): void;
    value: number;
    clear(): void;
}
