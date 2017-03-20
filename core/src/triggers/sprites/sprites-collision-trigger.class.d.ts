/**
 * Created by Christophe on 08/03/2017.
 */
import { BaseTrigger } from "../base-trigger.class";
import { ITrigger } from "../../interfaces/ITrigger.interface";
import { Sprite } from "../../display/sprite.class";
export declare class SpritesCollisionTrigger extends BaseTrigger implements ITrigger {
    baseSprite: Sprite;
    targetSprite: Sprite;
    onEvent: string;
    offEvent: string;
    private _baseSpriteSubscription1;
    private _targetSpriteSubscription1;
    private _baseSpriteSubscription2;
    private _targetSpriteSubscription2;
    private ON;
    private OFF;
    private _baseSpriteStatus;
    private _targetSpriteStatus;
    constructor(baseSprite: Sprite, targetSprite: Sprite, callback?: Function, onEvent?: string, offEvent?: string);
    enable(): void;
    disable(): void;
}
