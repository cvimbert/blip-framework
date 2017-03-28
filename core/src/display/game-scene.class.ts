/**
 * Created by Christophe on 28/03/2017.
 */
import {Sprite} from "./sprite.class";

export class GameScene {
    
    private _spritesDictionary:{[key:string]:Sprite} = {};

    constructor(
        sprites:Object = {},
        groups:Object = {},
        states:Object = {}
    ) {
        //this.loadSprites(sprites);
    }
    
    loadSprites(sprites:Object):Sprite[] {

        var loadedSprites:Sprite[] = [];

        for (var id in sprites) {
            if (sprites.hasOwnProperty(id)) {
                var sprite:Sprite = Sprite.fromData(sprites[id]);
                this._spritesDictionary[id] = sprite;
                loadedSprites.push(sprite);
            }
        }

        return loadedSprites;
    }
    
}