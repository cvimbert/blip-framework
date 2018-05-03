/**
 * Created by Christophe on 01/02/2017.
 */
import {ImageDisplayElement} from "./image-display-element";
import {IDisplayable} from "../interfaces/IDisplayable.interface";
import {Status} from "../common/status.class";
import {Utils} from "../common/utils.class";
import {File} from "../files/file.class";
import {Events} from "../common/events.class";
import {VisibilityStatus} from "../common/statuses/visibility-status.class";
import {Actionable} from "../script/interfaces/actionable.interface";

export class Sprite extends ImageDisplayElement implements IDisplayable, Actionable {

    private visible:boolean;
    private visibilities:number[] = [];

    /**
     * The sprite is the basic display unit in Blip
     * @param file
     * @param x
     * @param y
     * @param scale
     * @param initVisibility
     */
    constructor(
        file:File,
        x:number,
        y:number,
        scale:number = 1,
        initVisibility:boolean = false
    ) {
        super(file, x, y, scale);
        this.visible = initVisibility;

        this.setStatus(VisibilityStatus.VISIBILITY, VisibilityStatus.HIDDEN);
    }


    isVisible():boolean {
        return this.visible;
    }


    /**
     * Create a sprite from raw datas
     * @param data
     * @returns {Sprite}
     */
    static fromData(data:Object):Sprite {

        let defaults:Object = {
            file: "",
            x: 0,
            y: 0,
            scale: 1,
            initVisibility: false
        };

        let param:Object = Utils.verifyAndExtends(data, defaults);
        let file:File = new File(param["file"]);

        return new Sprite(file, param["x"], param["y"], param["scale"], param["initVisibility"]);
    }


    /**
     * Displays the sprite in a DOM element
     * @param container - The DOM element where the sprite will be append
     * @returns {HTMLElement}
     */
    displayInDOMElement(container:HTMLElement):HTMLElement {
        let elem:HTMLElement = super.displayInDOMElement(container);
        this._DOMElement.classList.add("inactive");
        this._setVisibility();
        return elem;
    }


    /**
     * Displays the sprite in a DOM element, selected by id
     * @param id
     */
    displayInDocumentById(id:string) {
        super.displayInDocumentById(id);
        this._setVisibility();
    }


    /**
     * Show or hide the sprite, according to the visibility boolean variable
     * @private
     */
    private _setVisibility() {
        if (this.visible) {
            this.show();
        } else {
            this.hide();
        }
    }


    /**
     * Displays the sprite and sets its status to visible
     */
    show(instanceNumber:number = 0) {

        if (this.visibilities.length === 0) {
            this.setStatus(VisibilityStatus.VISIBILITY, VisibilityStatus.VISIBLE);
            this.dispatchEvent(Events.DISPLAYED);

            this._DOMElement.classList.remove("inactive");
            this._DOMElement.classList.add("active");

            this.visible = true;
        }

        if (this.visibilities.indexOf(instanceNumber) === -1) {
            this.visibilities.push(instanceNumber);
        }
    }


    /**
     * Alias to Show()
     */
    display(instanceNumber:number = 0) {
        this.show();
    }


    /**
     * Hides the sprites, and sets its status to hidden
     */
    hide(instanceNumber:number = 0) {

        if (this.visibilities.length === 1) {
            this.setStatus(VisibilityStatus.VISIBILITY, VisibilityStatus.HIDDEN);

            this._DOMElement.classList.add("inactive");
            this._DOMElement.classList.remove("active");

            this.visible = false;
        }

        let index:number = this.visibilities.indexOf(instanceNumber);

        if (index !== -1) {
            this.visibilities.splice(index, 1);
        }
    }


    /**
     * Toggles the sprite's visibility
     */
    toggle() {
        if (this.visible) {
            this.hide();
        } else {
            this.show();
        }
    }

    executeAction(actionName: string, args: string[]) {
        switch (actionName) {
            case "show":
                this.show();
                break;

            case "hide":
                this.hide();
                break;
        }
    }

    getBoundPoint(): { x: number, y: number } {
        console.log(this._DOMElement);
        return {
            x: this._DOMElement.clientWidth + this.x,
            y: this._DOMElement.clientHeight + this.y
        }
    }
}