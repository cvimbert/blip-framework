/**
 * Created by Christophe on 21/02/2017.
 */
import { ControlSprite } from "../display/control-sprite.class";
import { EventDispatcher } from "../common/event-dispatcher.class";
export declare class ControlZone {
    x: number;
    y: number;
    width: number;
    height: number;
    constructor(x: number, y: number, width: number, height: number);
}
export declare class Control extends EventDispatcher {
    sprite: ControlSprite;
    zone: ControlZone;
    upHandler: any;
    downHandler: any;
    constructor(sprite: ControlSprite, zone?: ControlZone);
    setZone(x: number, y: number, width: number, height: number): void;
    checkZoneEvent(eventName: string, event: MouseEvent): void;
    private _onMouseDown(evt);
    private _onMouseUp(evt);
    enable(): void;
    disable(): void;
}
