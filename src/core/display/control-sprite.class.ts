/**
 * Created by Christophe on 01/02/2017.
 */
import {File} from "../files/file.class";
import {DisplayElement} from "./display-element.class";

export class ControlSprite extends DisplayElement {

    constructor(
        file:File,
        x:number,
        y:number,
        scale:number = 1
    ) {
        super(file, x, y, scale);
    }

    getDOMElement():HTMLElement {
        var div:HTMLElement = super.getDOMElement();
        div.classList.add("control");
        return div;
    }

    get DOMElement():HTMLElement {
        return this._DOMElement;
    }
}