/**
 * Created by Christophe on 28/03/2017.
 */
import {Sprite} from "./sprite.class";
import {Utils} from "../common/utils.class";
import {SpritesGroup} from "./sprites-group.class";

export class GameScene {
    
    private _spritesDictionary:{[key:string]:Sprite} = {};
    private _groupsDictionary:{[key:string]:SpritesGroup} = {};

    constructor(
        sprites:Object = {},
        groups:Object = {},
        states:Object = {}
    ) {
        this.loadSprites(sprites);
        this.loadGroups(groups);
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

    getSprite(spriteId:string):Sprite {
        return this._spritesDictionary[spriteId];
    }

    getSprites(spriteIds:string[]):Sprite[] {
        var sprites:Sprite[] = [];
        spriteIds.forEach((id:string) => sprites.push(this.getSprite(id)));
        return sprites;
    }

    loadGroups(groups:Object) {

        var groupDefaults:Object = {
            sprites: []
        };

        for (let id in groups) {
            if (groups.hasOwnProperty(id)) {
                let param:Object = Utils.verifyAndExtend(groups[id], groupDefaults);
                let sprites:Sprite[] = this.getSprites(param["sprites"]);
                this._groupsDictionary[id] = new SpritesGroup(sprites);
            }
        }
    }

    getGroup(groupId:string):SpritesGroup {
        return this._groupsDictionary[groupId];
    }

    getGroups(groupIds:string[]):SpritesGroup[] {
        var groups:SpritesGroup[] = [];
        groupIds.forEach((id:string) => groups.push(this.getGroup(id)));
        return groups;
    }
}