/**
 * Created by Christophe on 22/02/2017.
 */
import {DisplayElement} from "../core/display/display-element.class";

export class LcdDisplayer extends DisplayElement {

    txtDiv:HTMLElement;
    
    constructor(
        x:number,
        y:number,
        scale:number = 1
    ) {
        super(x, y, scale);
    }

    getDOMElement():HTMLElement {
        var div:HTMLElement = super.getDOMElement();
        this.txtDiv = document.createElement("div");
        div.appendChild(this.txtDiv);
        div.classList.add("lcd-displayer");
        return div;
    }

    setValue(value:number) {
        this.txtDiv.innerHTML = String(value);
    }

    clear() {
        this.txtDiv.innerHTML = " ";
    }
}