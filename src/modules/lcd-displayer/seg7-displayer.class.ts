/**
 * Created by Christophe on 22/02/2017.
 */
import {DisplayElement} from "../../core/display/display-element.class";
import {Variable} from "../../core/gamelogic/variable.class";
import {Events} from "../../core/common/events.class";

export class Seg7Displayer extends DisplayElement {

    txtDiv:HTMLElement;
    private _currentValue:number = null;
    
    constructor(
        x:number,
        y:number,
        scale:number = 1,
        public variable:Variable = null
    ) {
        super(x, y, scale);
        if (variable) this.bindVariable(variable);
    }

    getDOMElement():HTMLElement {
        if (this._DOMElement) {
            return this._DOMElement;
        } else {
            var div:HTMLElement = super.getDOMElement();
            this.txtDiv = document.createElement("div");
            div.appendChild(this.txtDiv);
            div.classList.add("seg7-displayer");

            if (this.value) {
                this.value = this._currentValue;
            }

            return div;
        }
    }

    bindVariable(variable:Variable) {
        this.variable = variable;

        if (variable.value !== null) this.value = +variable.value;

        variable.subscribe(Events.VARIABLE_CHANGE, (value:any) => this.value = +value);
    }

    set value(value:number) {
        if (this.txtDiv) this.txtDiv.innerHTML = String(value);
        this._currentValue = value;
    }

    get value():number {
        return this._currentValue;
    }

    clear() {
        this.txtDiv.innerHTML = " ";
        this._currentValue = null;
    }
}