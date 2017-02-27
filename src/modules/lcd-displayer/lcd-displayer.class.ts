/**
 * Created by Christophe on 24/02/2017.
 */
import {Variable} from "../../core/gamelogic/variable.class";
import {Seg7Displayer} from "./seg7-displayer";
import {DisplayElement} from "../../core/display/display-element.class";

export class LcdDisplayer extends DisplayElement {

    private _backgroundDigits:Seg7Displayer[] = [];
    private _digits:Seg7Displayer[] = [];
    
    private _xPosition:number = 0;
    private _value:number;

    constructor(
        x:number,
        y:number,
        public digitNumber:number = 1,
        public stepWidth:number = 24,
        scale:number = 1,
        public variable:Variable = null
    ) {
        super(x, y, scale);
    }

    set value(value:number) {
        var stringifiedValue:string = String(value);

        for (let index in this._digits) {
            if (this._digits.hasOwnProperty(index)) {
                this._digits[index].value = +stringifiedValue[index];
            }
        }
        
        this._value = value;
    }

    get value() {
        return this._value;
    }

    getDOMElement():HTMLElement {
        if (this._DOMElement) {
            return this._DOMElement;
        } else {
            var displayerDiv:HTMLElement = super.getDOMElement();
            displayerDiv.classList.add("lcd-displayer");

            for (let i:number = 0; i < this.digitNumber; i++) {
                let backgroundDigit:Seg7Displayer = new Seg7Displayer(this._xPosition, 0);
                backgroundDigit.value = 8;
                var backgroundElem:HTMLElement = backgroundDigit.displayInDOMElement(displayerDiv);
                backgroundElem.classList.add("inactive");
                this._backgroundDigits.push(backgroundDigit);

                let foregroundDigit:Seg7Displayer = new Seg7Displayer(this._xPosition, 0);
                foregroundDigit.value = 4;
                foregroundDigit.displayInDOMElement(displayerDiv);
                this._digits.push(foregroundDigit);

                this._xPosition += this.stepWidth;
            }

            return displayerDiv;
        }
    }
}