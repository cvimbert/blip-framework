/**
 * Created by Christophe on 11/01/2018.
 */

export interface LinkData {
    node:string;
    trigger:string;
}

export interface StateData {
    type?:string;
    ref:string;
}

export interface NodeData {
    state:StateData;
    links:LinkData[];
}

export interface GraphData {
    nodes:{[key:string]:NodeData|string};
}