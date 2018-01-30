/**
 * Created by Christophe on 08/03/2017.
 */
import {BaseTrigger} from "../base-trigger.class";
import {ITrigger} from "../../interfaces/ITrigger.interface";
import {Sprite} from "../../display/sprite.class";
import {Events} from "../../common/events.class";
import {EventListener} from "../../common/event-listener.class";
import {IState} from "../../interfaces/IState.interface";

export class StatesCollisionTrigger extends BaseTrigger implements ITrigger {

    private baseSpriteSubscription1:EventListener;
    private targetSpriteSubscription1:EventListener;

    private baseSpriteSubscription2:EventListener;
    private targetSpriteSubscription2:EventListener;
    
    private ON:string = "on";
    private OFF:string = "off";
    
    private baseSpriteStatus:string;
    private targetSpriteStatus:string;

    constructor(
        public baseSprite:IState,
        public targetSprite:IState,
        public onEvent:string = Events.DISPLAYED,
        public offEvent:string = Events.HIDDEN

    ) {
        super();
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
        if (this.baseSpriteSubscription1) this.baseSpriteSubscription1.stoplisten();
        if (this.targetSpriteSubscription1) this.targetSpriteSubscription1.stoplisten();

        if (this.baseSpriteSubscription2) this.baseSpriteSubscription2.stoplisten();
        if (this.targetSpriteSubscription2) this.targetSpriteSubscription2.stoplisten();

        super.disable();
    }
}