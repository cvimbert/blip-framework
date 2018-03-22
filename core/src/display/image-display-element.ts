/**
 * Created by Christophe on 22/02/2017.
 */
import {DisplayElement} from "./display-element.class";
import {File} from "../files/file.class";

declare var require:any;
/*const Draggable = require("draggable");
const TweenLite = require("TweenLite");*/
    
export class ImageDisplayElement extends DisplayElement {

    private positionDisplayer:HTMLElement;
    
    constructor(
        public file:File,
        x:number,
        y:number,
        scale:number = 1
    ) {
        super(x, y, scale);
    }

    getDOMElement():HTMLElement {
        let div:HTMLElement = super.getDOMElement();
        let image:HTMLElement = document.createElement("img");
        image["src"] = this.file.path;
        div.appendChild(image);

        let positionDisplayer:HTMLElement = document.createElement("div");
        positionDisplayer.classList.add("position-displayer");
        div.appendChild(positionDisplayer);

        this.positionDisplayer = positionDisplayer;

        /*let draggable:any = Draggable.createBasicSprite(div, {
            onDrag: function () {
                positionDisplayer.innerHTML = "(" + this.x + "," + this.y + ")";
            }
        });*/

        return div;
    }
}