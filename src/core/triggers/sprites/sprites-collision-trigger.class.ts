/**
 * Created by Christophe on 08/03/2017.
 */
import {BaseTrigger} from "../base-trigger.class";
import {ITrigger} from "../../interfaces/ITrigger.interface";
import {Sprite} from "../../display/sprite.class";
import {Events} from "../../common/events.class";
import {EventSubscription} from "../../common/event-subscription.class";

export class SpritesCollisionTrigger extends BaseTrigger implements ITrigger {

    private _baseSpriteSubscription:EventSubscription;
    private _targetSpriteSubscription:EventSubscription;

    constructor(
        public baseSprite:Sprite,
        public targetSprite:Sprite,
        callback:Function = null,
        public listenedEvent:string = Events.DISPLAYED

    ) {
        super(callback);
    }

    enable() {
        if (!this._enabled) {
            this._baseSpriteSubscription = this.baseSprite.subscribe(this.listenedEvent, () => {
                this._targetSpriteSubscription = this.baseSprite.subscribe(this.listenedEvent, () => this.callback());
            });
        }

        super.enable();
    }

    disable() {
        if (this._baseSpriteSubscription) this._baseSpriteSubscription.unsubscribe();
        if (this._targetSpriteSubscription) this._targetSpriteSubscription.unsubscribe();

        super.disable();
    }
}