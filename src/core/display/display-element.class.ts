/**
 * Created by Christophe on 21/02/2017.
 */
import {File} from "../files/file.class";

export class DisplayElement {

    protected _DOMElement:HTMLElement;
    
    constructor(
        public x:number,
        public y:number,
        public scale:number = 1
    ) {}

    getDOMElement():HTMLElement {
        var div:HTMLElement = document.createElement("div");
        div.className = "game-element";
        div.style.left = this.x + "px";
        div.style.top = this.y + "px";
        div.style.transform = "scale(" + this.scale + ")";
        return div;
    }

    displayInDOMElement(container:HTMLElement) {
        this._DOMElement = this.getDOMElement();
        container.appendChild(this._DOMElement);
    }
}