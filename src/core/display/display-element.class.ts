/**
 * Created by Christophe on 21/02/2017.
 */
import {File} from "../files/file.class";

export class DisplayElement {

    protected _DOMElement:HTMLElement;
    
    constructor(
        public file:File,
        public x:number,
        public y:number,
        public scale:number = 1
    ) {}

    getDOMElement():HTMLElement {
        var div:HTMLElement = document.createElement("div");
        var image:HTMLElement = document.createElement("img");
        image["src"] = this.file.path;
        div.appendChild(image);
        div.className = "game-element";
        div.style.left = this.x + "px";
        div.style.top = this.y + "px";
        return div;
    }

    displayInDOMElement(container:HTMLElement) {
        this._DOMElement = this.getDOMElement();
        container.appendChild(this._DOMElement);

        /*if (this._visible) {
            this.show();
        } else {
            this.hide();
        }*/
    }
}