/**
 * Created by Christophe on 21/02/2017.
 */
import {StatusDispatcher} from "../common/status-dispatcher.class";

export class DisplayElement extends StatusDispatcher {

    protected _DOMElement:HTMLElement;
    
    constructor(
        public x:number,
        public y:number,
        public scale:number = 1
    ) {
        super();
    }

    
    getDOMElement():HTMLElement {
        if (this._DOMElement) {
            return this._DOMElement;
        }
        else {
            var div:HTMLElement = document.createElement("div");
            div.className = "game-element";
            div.style.left = this.x + "px";
            div.style.top = this.y + "px";
            div.style.transform = "scale(" + this.scale + ")";
            this._DOMElement = div;
            return div;
        }
    }

    displayInDOMElement(container:HTMLElement):HTMLElement {
        this._DOMElement = this.getDOMElement();
        container.appendChild(this._DOMElement);
        return this._DOMElement;
    }
}