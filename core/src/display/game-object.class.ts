/**
 * Created by Christophe on 28/03/2017.
 */
import {Sprite} from "./sprite.class";
import {Utils} from "../common/utils.class";
import {SpritesGroup} from "./sprites-group.class";
import {SpritesGroupState} from "./sprites-group-state.class";
import {Decoration} from "./decoration.class";
import {Control} from "../gamelogic/control.class";
import {IDisplayable} from "../interfaces/IDisplayable.interface";
import {Sequence} from "../spriteslogic/sequence.class";
import {ControlSprite} from "./control-sprite.class";
import {Clock} from "../gamelogic/clock.class";
import {Animation} from "../spriteslogic/animation.class";

export class GameObject {
    
    private _spritesDictionary:{[key:string]:Sprite} = {};
    private _groupsDictionary:{[key:string]:SpritesGroup} = {};
    private _statesDictionary:{[key:string]:SpritesGroupState} = {};
    private _controlsDictionary:{[key:string]:Control} = {};
    private _sequencesDictionary:{[key:string]:Sequence} = {};
    private _clocksDictionary:{[key:string]:Clock} = {};
    private _animationsDictionary:{[key:string]:Animation} = {};

    protected _params:Object;

    constructor(
        data:Object = {}
    ) {
        this.loadData(data);
    }

    loadData(data:Object):Object {

        var dataDefaults:Object = {
            gameContainerScale: 1,
            sprites: {},
            groups: {},
            backgrounds: [],
            foregrounds: [],
            controls: {},
            clocks: {}
        };

        var param:Object = Utils.verifyAndExtends(data, dataDefaults);
        this._params = param;

        this.loadClocks(param["clocks"]);
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

    getIdWithGroupPrefix(groupId:string, id:string):string {
        return groupId + "_" + id;
    }

    loadClocks(clocks:Object) {
        for (let clockId in clocks) {
            if (clocks.hasOwnProperty(clockId)) {
                var period:number = clocks[clockId]["period"];
                this._clocksDictionary[clockId] = new Clock(period);
            }
        }
    }

    loadGroups(groups:Object) {

        var groupDefaults:Object = {
            sprites: [],
            states: [],
            offset: {x: 0, y: 0},
            sequences: {},
            animations: {}
        };

        for (let groupId in groups) {
            if (groups.hasOwnProperty(groupId)) {
                let param:Object = Utils.verifyAndExtends(groups[groupId], groupDefaults);

                let xOffset:number = param["offset"]["x"];
                let yOffset:number = param["offset"]["y"];

                let sprites:Sprite[] = this.getSprites(param["sprites"]);

                sprites.forEach((sprite:Sprite) => {
                    sprite.x += xOffset;
                    sprite.y += yOffset;
                    sprite.updateTransforms();
                });

                let group:SpritesGroup = new SpritesGroup(sprites);
                this._groupsDictionary[groupId] = group;

                for (let stateId in param["states"]) {
                    if (param["states"].hasOwnProperty(stateId)) {
                        let sprites:Sprite[] = this.getFromDictionary(param["states"][stateId], this._spritesDictionary);
                        /*let state:SpritesGroupState = new SpritesGroupState(group, sprites);
                        let completeStateId:string = this.getIdWithGroupPrefix(groupId, stateId);
                        this._statesDictionary[completeStateId] = state;*/
                    }
                }

                for (let sequenceId in param["sequences"]) {
                    if (param["sequences"].hasOwnProperty(sequenceId)) {

                        let displayables:IDisplayable[] = [];

                        param["sequences"][sequenceId]["states"].forEach((data:Object) => {
                            if (data["type"] === "sprite") {
                                displayables.push(this.getSprite(data["ref"]));
                            } else if (data["type"] === "state") {
                                displayables.push(this.getState(groupId, data["ref"]));
                            }
                        });
                        
                        var loop:string = param["sequences"][sequenceId]["loop"];

                        let sequence:Sequence = new Sequence(group, displayables, loop ? loop : "");
                        let id:string = this.getIdWithGroupPrefix(groupId, sequenceId);
                        this._sequencesDictionary[id] = sequence;
                    }
                }

                for (let animationId in param["animations"]) {
                    if (param["animations"].hasOwnProperty(animationId)) {
                        let id:string = this.getIdWithGroupPrefix(groupId, animationId);
                        this._animationsDictionary[id] = Animation.fromData(param["animations"][animationId], groupId, this);
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

    getControl(controlId:string, zoneId:string = null):Control {
        var controlName:string = zoneId ? controlId + "_" + zoneId : controlId;
        return this._controlsDictionary[controlName];
    }

    getGroups(groupIds:string[]):SpritesGroup[] {
        var groups:SpritesGroup[] = [];
        groupIds.forEach((id:string) => groups.push(this.getGroup(id)));
        return groups;
    }

    getState(groupId:string, stateId:string):SpritesGroupState {
        var completeStateId:string = this.getIdWithGroupPrefix(groupId, stateId);
        return this._statesDictionary[completeStateId];
    }

    getAnimation(groupId:string, animationId:string):Animation {
        var id:string = this.getIdWithGroupPrefix(groupId, animationId);
        return this._animationsDictionary[id];
    }

    getSequence(groupId:string, sequenceId:string):Sequence {
        var completeId:string = this.getIdWithGroupPrefix(groupId, sequenceId);
        return this._sequencesDictionary[completeId];
    }

    getStates(groupId:string, stateIds:string[]):SpritesGroupState[] {
        var states:SpritesGroupState[] = [];
        stateIds.forEach((id:string) => states.push(this.getState(groupId, id)));
        return states;
    }

    getClock(clockId:string):Clock {
        return this._clocksDictionary[clockId];
    }

    loadDecorations(decorationDatas:Object[]):Decoration[] {
        var decorations:Decoration[] = [];
        decorationDatas.forEach((data:Object) => decorations.push(Decoration.fromData(data)));
        return decorations;
    }
    
    loadControls(controlData:Object[]):ControlSprite[] {
        var sprites:ControlSprite[] = [];

        for (let id in controlData) {
            if (controlData.hasOwnProperty(id)) {
                let controls:Control|{[key:string]:Control} = Control.fromData(controlData[id]);

                if (controls instanceof Control) {
                    sprites.push(controls.sprite);
                    this._controlsDictionary[id] = controls;
                } else {

                    let sprite:ControlSprite;

                    for (let zoneId in controls) {
                        if (controls.hasOwnProperty(zoneId)) {
                            let completeId:string = id + "_" + zoneId;

                            if (!sprite) {
                                sprite = controls[zoneId].sprite;
                            }

                            this._controlsDictionary[completeId] = controls[zoneId];
                        }
                    }

                    sprites.push(sprite);
                }
            }
        }

        return sprites;
    }
}