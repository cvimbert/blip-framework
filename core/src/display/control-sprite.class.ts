/**
 * Created by Christophe on 01/02/2017.
 */
import {File} from "../files/file.class";
import {ImageDisplayElement} from "./image-display-element";

export class ControlSprite extends ImageDisplayElement {

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

    displayInDOMElement(container:HTMLElement):HTMLElement {
        var elem:HTMLElement = super.displayInDOMElement(container);
        return elem;
    }

    get DOMElement():HTMLElement {
        return this._DOMElement;
    }
}