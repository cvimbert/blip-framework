/**
 * Created by Christophe on 21/02/2017.
 */
import {ControlSprite} from "../display/control-sprite.class";
import {EventDispatcher} from "../common/event-dispatcher.class";
import {Events} from "../common/events.class";
import {Utils} from "../common/utils.class";
import {File} from "../files/file.class";

export class ControlZone {

    constructor(
        public x:number,
        public y:number,
        public width:number,
        public height:number
    ) {}
}

export class Control extends EventDispatcher {

    upHandler;
    downHandler;

    constructor(
        public sprite:ControlSprite,
        public zone:ControlZone = null
    ) {
        super();

        var self = this;

        this.upHandler = (evt:MouseEvent) => {
            self.checkZoneEvent(Events.CONTROL_UP, evt);
        };

        this.downHandler = (evt:MouseEvent) => {
            self.checkZoneEvent(Events.CONTROL_DOWN, evt);
        }
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
        console.log("down");
        this.checkZoneEvent(Events.CONTROL_DOWN, evt);
    }

    private _onMouseUp(evt:MouseEvent) {
        this.checkZoneEvent(Events.CONTROL_UP, evt)
    }
    
    static fromData(data:Object):Control|{[key:string]:Control} {
        
        var defaults:Object = {
            file: "",
            x: 0,
            y: 0,
            scale: 1,
        };
        
        var spriteParams:Object = Utils.verifyAndExtends(data["sprite"], defaults);
        var file:File = new File(spriteParams["file"]);
        var controlSprite:ControlSprite = new ControlSprite(file, spriteParams["x"], spriteParams["y"], spriteParams["scale"]);

        if (!data["zones"] || Object.keys(data["zones"]).length === 0) {
            return new Control(controlSprite)
        } else if (data["zones"]) {

            let multiControls:{[key:string]:Control} = {};

            for (let zoneId in data["zones"]) {
                if (data["zones"].hasOwnProperty(zoneId)) {
                    let zoneDatas:Object = data["zones"][zoneId];
                    let zone:ControlZone = new ControlZone(zoneDatas["x"], zoneDatas["y"], zoneDatas["width"], zoneDatas["height"]);
                    multiControls[zoneId] = new Control(controlSprite, zone);
                }
            }

            return multiControls;
        }
    }

    enable() {
        this.sprite.DOMElement.addEventListener("mousedown", this.downHandler);
        this.sprite.DOMElement.addEventListener("mouseup", this.upHandler);
    }

    disable() {
        this.sprite.DOMElement.removeEventListener("mousedown", this.downHandler);
        this.sprite.DOMElement.removeEventListener("mouseup", this.upHandler);
    }
}