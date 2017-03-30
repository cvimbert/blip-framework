/**
 * Created by Christophe on 28/03/2017.
 */
import {Sprite} from "./sprite.class";
import {Utils} from "../common/utils.class";
import {SpritesGroup} from "./sprites-group.class";
import {SpritesGroupState} from "./sprites-group-state.class";
import {Decoration} from "./decoration.class";

export class GameScene {
    
    private _spritesDictionary:{[key:string]:Sprite} = {};
    private _groupsDictionary:{[key:string]:SpritesGroup} = {};
    private _statesDictionary:{[key:string]:SpritesGroupState} = {};

    constructor(
        data:Object = {}
    ) {
        this.loadData(data);
    }

    loadData(data:Object):Object {

        var dataDefaults:Object = {
            sprites: {},
            groups: {},
            backgrounds: [],
            foregrounds: []
        };

        var param:Object = Utils.verifyAndExtends(data, dataDefaults);

        this.loadSprites(param["sprites"]);
        this.loadGroups(param["groups"]);
        
        return param;
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

    getStateId(groupId:string, stateId:string):string {
        return groupId + "_" + stateId;
    }

    loadGroups(groups:Object) {

        var groupDefaults:Object = {
            sprites: [],
            states: []
        };

        for (let groupId in groups) {
            if (groups.hasOwnProperty(groupId)) {
                let param:Object = Utils.verifyAndExtends(groups[groupId], groupDefaults);
                let sprites:Sprite[] = this.getSprites(param["sprites"]);
                let group:SpritesGroup = new SpritesGroup(sprites);
                this._groupsDictionary[groupId] = group;

                for (let stateId in param["states"]) {
                    if (param["states"].hasOwnProperty(stateId)) {
                        let sprites:Sprite[] = this.getFromDictionary(param["states"][stateId], this._spritesDictionary);
                        let state:SpritesGroupState = new SpritesGroupState(group, sprites);
                        let completeStateId:string = this.getStateId(groupId, stateId);
                        this._statesDictionary[completeStateId] = state;
                    }
                }
            }
        }
    }

    getFromDictionary(ids:string[], dictionnary:{[key:string]:any}):any[] {
        var ret:any[] = [];
        ids.forEach((id:string) => ret.push(dictionnary[id]));
        return ret;
    }

    getGroup(groupId:string):SpritesGroup {
        return this._groupsDictionary[groupId];
    }

    getGroups(groupIds:string[]):SpritesGroup[] {
        var groups:SpritesGroup[] = [];
        groupIds.forEach((id:string) => groups.push(this.getGroup(id)));
        return groups;
    }

    getState(groupId:string, stateId:string):SpritesGroupState {
        var completeStateId:string = this.getStateId(groupId, stateId);
        return this._statesDictionary[completeStateId];
    }

    getStates(groupId:string, stateIds:string[]):SpritesGroupState[] {
        var states:SpritesGroupState[] = [];
        stateIds.forEach((id:string) => states.push(this.getState(groupId, id)));
        return states;
    }

    loadDecorations(decorationDatas:Object[]):Decoration[] {
        var decorations:Decoration[] = [];
        decorationDatas.forEach((data:Object) => decorations.push(Decoration.fromData(data)));
        return decorations;
    }
}