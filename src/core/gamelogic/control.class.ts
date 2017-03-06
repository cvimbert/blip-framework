/**
 * Created by Christophe on 21/02/2017.
 */
import {ControlSprite} from "../display/control-sprite.class";
import {EventDispatcher} from "../common/event-dispatcher.class";
import {Events} from "../common/events.class";

export class ControlZone {

    constructor(
        public x:number,
        public y:number,
        public width:number,
        public height:number
    ) {}
}

export class Control extends EventDispatcher {

    constructor(
        public sprite:ControlSprite,
        public zone:ControlZone = null,
        public name:string = ""
    ) {
        super();
    }

    setZone(x:number, y:number, width:number, height:number) {
        this.zone = new ControlZone(x, y, width, height);
    }

    checkZoneEvent(eventName:string, event:MouseEvent) {

        if (this.zone) {
            let x:number = event.offsetX;
            let y:number = event.offsetY;

            if (
                x >= this.zone.x
                &&
                x <= this.zone.x + this.zone.width
                &&
                y >= this.zone.y
                &&
                y <= this.zone.y + this.zone.height
            ) {
                this.dispatchEvent(eventName);
            }

        } else {
            this.dispatchEvent(eventName);
        }
    }

    private _onMouseDown(evt:MouseEvent) {
        this.checkZoneEvent(Events.CONTROL_DOWN, evt);
    }

    private _onMouseUp(evt:MouseEvent) {
        this.checkZoneEvent(Events.CONTROL_UP, evt)
    }

    enable() {
        this.sprite.DOMElement.addEventListener("mousedown", (evt:MouseEvent) => this._onMouseDown(evt));
        this.sprite.DOMElement.addEventListener("mouseup", (evt:MouseEvent) => this._onMouseUp(evt));
    }

    disable() {
        this.sprite.DOMElement.removeEventListener("mousedown", (evt:MouseEvent) => this._onMouseDown(evt));
        this.sprite.DOMElement.removeEventListener("mouseup", (evt:MouseEvent) => this._onMouseUp(evt));
    }
}