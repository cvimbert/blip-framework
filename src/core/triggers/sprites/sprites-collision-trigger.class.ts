/**
 * Created by Christophe on 08/03/2017.
 */
import {BaseTrigger} from "../base-trigger.class";
import {ITrigger} from "../../interfaces/ITrigger.interface";
import {Sprite} from "../../display/sprite.class";
import {Events} from "../../common/events.class";
import {EventListener} from "../../common/event-listener.class";

export class SpritesCollisionTrigger extends BaseTrigger implements ITrigger {

    private _baseSpriteSubscription1:EventListener;
    private _targetSpriteSubscription1:EventListener;

    private _baseSpriteSubscription2:EventListener;
    private _targetSpriteSubscription2:EventListener;
    
    private ON:string = "on";
    private OFF:string = "off";
    
    private _baseSpriteStatus:string;
    private _targetSpriteStatus:string;

    constructor(
        public baseSprite:Sprite,
        public targetSprite:Sprite,
        callback:Function = null,
        public onEvent:string = Events.DISPLAYED,
        public offEvent:string = Events.HIDDEN

    ) {
        super(callback);
    }

    enable() {
        if (!this._enabled) {

            // dans un sens
            
            /*this.baseSprite.listen(this.onEvent, () => {
                this._baseSpriteStatus = this.ON;
            });

            this._baseSpriteSubscription1 = this.baseSprite.listen(this.onEvent, () => {
                this._targetSpriteSubscription1 = this.targetSprite.listen(this.onEvent, () => this.callback());
            });*/

            // et dans l'autre

            /*this._targetSpriteSubscription2 = this.targetSprite.listen(this.onEvent, () => {
                this._baseSpriteSubscription2 = this.baseSprite.listen(this.onEvent, () => this.callback());
            });*/


        }

        super.enable();
    }

    disable() {
        if (this._baseSpriteSubscription1) this._baseSpriteSubscription1.stoplisten();
        if (this._targetSpriteSubscription1) this._targetSpriteSubscription1.stoplisten();

        if (this._baseSpriteSubscription2) this._baseSpriteSubscription2.stoplisten();
        if (this._targetSpriteSubscription2) this._targetSpriteSubscription2.stoplisten();

        super.disable();
    }
}