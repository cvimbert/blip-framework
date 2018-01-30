import {GraphData} from "../../graphs/interfaces/graph-data.interface";
import {AnimationData} from "../../spriteslogic/animation-data.interface";

export interface SpriteDefinitionData {
    file:string;
    x:number;
    y:number;
}

export interface GroupDefinitionData {
    sprites?:string[];
    states?:{[key:string]:string[]};
    sequences?:{[key:string]:SequenceDefinitionData};
    animations?:{[key:string]:AnimationData};
}

export interface SequenceDefinitionData {
    states: {
        type?:"sprite"|"state";
        ref:string;
    }[]|string;
}

export interface ClockDefinitionData {
    period:number;
}

export interface GameObjectDefinitionData {
    sprite?:{[key:string]:SpriteDefinitionData};
    groups?:{[key:string]:GroupDefinitionData};
    clocks?:{[key:string]:ClockDefinitionData};
    graphs?:{[key:string]:GraphData};
}