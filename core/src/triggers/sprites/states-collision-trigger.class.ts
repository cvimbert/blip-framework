/**
 * Created by Christophe on 08/03/2017.
 */
import {BaseTrigger} from "../base-trigger.class";
import {ITrigger} from "../../interfaces/ITrigger.interface";
import {Sprite} from "../../display/sprite.class";
import {Events} from "../../common/events.class";
import {EventListener} from "../../common/event-listener.class";
import {IState} from "../../interfaces/IState.interface";
import {IDisplayable} from "core/src/interfaces/IDisplayable.interface";

export class StatesCollisionTrigger extends BaseTrigger implements ITrigger {

    private baseSpriteSubscription:EventListener;
    private targetSpriteSubscription:EventListener;
    
    private ON:string = "on";
    private OFF:string = "off";
    
    private baseSpriteStatus:string;
    private targetSpriteStatus:string;

    constructor(
        public baseSprite:IDisplayable,
        public targetSprite:IDisplayable,
        public onEvent:string = Events.DISPLAYED,
        public offEvent:string = Events.HIDDEN
    ) {
        super();
    }

    enable() {
        if (!this._enabled) {

            this.baseSpriteSubscription = this.baseSprite.listen(Events.DISPLAYED, () => {

            });

            this.targetSpriteSubscription = this.targetSprite.listen(Events.DISPLAYED, () => {

            });

            //this.baseSpriteSubscription = this.baseSprite

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
        if (this.baseSpriteSubscription) this.baseSpriteSubscription.stoplisten();
        if (this.targetSpriteSubscription) this.targetSpriteSubscription.stoplisten();

        super.disable();
    }
}