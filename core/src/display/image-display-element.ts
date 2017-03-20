/**
 * Created by Christophe on 22/02/2017.
 */
import {DisplayElement} from "./display-element.class";
import {File} from "../files/file.class";
    
export class ImageDisplayElement extends DisplayElement {
    
    constructor(
        public file:File,
        x:number,
        y:number,
        scale:number = 1
    ) {
        super(x, y, scale);
    }

    getDOMElement():HTMLElement {
        var div:HTMLElement = super.getDOMElement();
        var image:HTMLElement = document.createElement("img");
        image["src"] = this.file.path;
        div.appendChild(image);
        return div;
    }
}