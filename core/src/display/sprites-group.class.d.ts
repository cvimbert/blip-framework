/**
 * Created by Christophe on 01/02/2017.
 */
import { Sprite } from "./sprite.class";
export declare class SpritesGroup {
    sprites: Sprite[];
    constructor(sprites: Sprite[]);
    show(): void;
    hide(): void;
    toggle(): void;
}
