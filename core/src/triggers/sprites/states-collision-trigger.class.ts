/**
 * Created by Christophe on 08/03/2017.
 */
import {BaseTrigger} from "../base-trigger.class";
import {ITrigger} from "../../interfaces/ITrigger.interface";
import {IDisplayable} from "../../interfaces/IDisplayable.interface";
import {StatusSubscription} from "../../common/status-subscription.class";
import {VisibilityStatus} from "../../common/statuses/visibility-status.class";

export class StatesCollisionTrigger extends BaseTrigger implements ITrigger {

    private baseSpriteSubscription:StatusSubscription;
    private targetSpriteSubscription:StatusSubscription;

    constructor(
        public baseSprite:IDisplayable,
        public targetSprite:IDisplayable,
    ) {
        super();
    }

    enable() {
        if (!this._enabled) {

            this.baseSpriteSubscription = this.baseSprite.subscribe(VisibilityStatus.VISIBILITY, (status:string) => {
                if (status === VisibilityStatus.VISIBLE && this.targetSprite.getStatus(VisibilityStatus.VISIBILITY) === VisibilityStatus.VISIBLE) {
                    this.action();
                }
            });

            this.targetSpriteSubscription = this.targetSprite.subscribe(VisibilityStatus.VISIBILITY, (status:string) => {
                if (status === VisibilityStatus.VISIBLE && this.baseSprite.getStatus(VisibilityStatus.VISIBILITY) === VisibilityStatus.VISIBLE) {
                    this.action();
                }
            });
        }

        super.enable();
    }

    disable() {
        if (this.baseSpriteSubscription) this.baseSpriteSubscription.unsubscribe();
        if (this.targetSpriteSubscription) this.targetSpriteSubscription.unsubscribe();

        super.disable();
    }
}