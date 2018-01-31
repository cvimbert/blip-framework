/**
 * Created by Christophe on 26/01/2018.
 */
import {Dispatcher} from "../common/dispatcher.class";
import {Sequence} from "./sequence.class";
import {ArticulatedAnimationData} from "./interfaces/articulated-animation-data.interface";
import {GameObject} from "../display/game-object.class";
import {Utils} from "../common/utils.class";

export class ArticulatedAnimation extends Dispatcher {

    isPlaying:boolean = false;

    constructor(
        public sequence:Sequence,
        public iterations:number,
        public interruptable:boolean = false
    ) {
        super();
    }

    static fromData(data:ArticulatedAnimationData, groupId:string, scene:GameObject):ArticulatedAnimation {

        let defaults:ArticulatedAnimationData = {
            sequence: "",
            iterations: 1,
            interruptable: false
        };

        let params:ArticulatedAnimationData = Utils.verifyAndExtends(data, defaults);

        let sequence:Sequence = scene.getSequence(groupId, params.sequence);

        return new ArticulatedAnimation(sequence, params.iterations, params.interruptable);
    }
    
    play() {
        
    }
    
    stop() {
        
    }
}