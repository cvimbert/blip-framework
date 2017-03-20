/**
 * Created by Christophe on 01/02/2017.
 */
import { Sprite } from "./sprite.class";
import { SpritesGroup } from "./sprites-group.class";
import { IDisplayable } from "../interfaces/IDisplayable.interface";
export declare class SpritesGroupState implements IDisplayable {
    group: SpritesGroup;
    sprites: Sprite[];
    constructor(group: SpritesGroup, sprites?: Sprite[]);
    display(): void;
    hide(): void;
}
