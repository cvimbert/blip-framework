/**
 * Created by Christophe on 03/02/2017.
 */
import {Sequence} from "./sequence.class";
import {Dispatcher} from "../common/dispatcher.class";
import {Events} from "../common/events.class";
import {Clock} from "../gamelogic/clock.class";
import {EventListener} from "../common/event-listener.class";
import {GameObject} from "../display/game-object.class";
import {Utils} from "../common/utils.class";
import {AnimationData} from "./animation-data.interface";
import {Playable} from "../interfaces/playable.interface";
import {Actionable} from "../script/interfaces/actionable.interface";

export class Animation extends Dispatcher implements Playable, Actionable {

    isPlaying:boolean = false;
    
    private animationInterval:any;
    private clockListener:EventListener;

    private occurencesCounter: number;


    constructor(
        public sequence: Sequence,
        public iterations: number = 1,
        public period: number | Clock,
        public interruptable: boolean = false
    ) {
        super();
    }

    // no more useful
    static fromData(data:AnimationData, groupId:string, scene:GameObject):Animation {

        let defaults:AnimationData = {
            sequence: "",
            period: 1,
            iterations: 1,
            interruptable: false
        };

        let param:AnimationData = Utils.verifyAndExtends(data, defaults);

        let period:number|Clock;
        
        if (typeof param.period === "number") {
            period = <number>param.period;
        } else {
            period = scene.getClock(<string>param.period);
        }

        let sequence:Sequence = scene.getSequence(groupId, param.sequence);

        return new Animation(sequence, param.iterations, period, param.interruptable);
    }

    play() {
        //let occurencesCounter;

        if (this.clockListener) {
            this.clockListener.stoplisten();
        }

        if (this.interruptable === false && this.isPlaying) {
            this.occurencesCounter = 0;
            return;
        }

        this.sequence.reset();
        this.sequence.displayNext(true);

        this.occurencesCounter = 0;

        this.isPlaying = true;

        if (this.period instanceof Clock) {
            this.clockListener = (this.period as Clock).listen(Events.CLOCK_PERIOD, () => {
                this.animationAction();
            });
        } else {
            this.animationInterval = setInterval(() => {
                this.animationAction();
            }, this.period * 1000);
        }

    }

    animationAction() {
        if (this.isPlaying === false) return;

        if (!this.sequence.displayNext(this.occurencesCounter < this.iterations - 1)) {
            this.dispatchEvent(Events.ANIMATION_ITERATION_END, this.occurencesCounter);
            this.occurencesCounter++;

            if (this.iterations && this.occurencesCounter >= this.iterations) {

                clearInterval(this.animationInterval);

                this.dispatchEvent(Events.ANIMATION_END);
                this.dispatchEvent(Events.END_PLAYING);
                this.isPlaying = false;
            }
            else {
                // on repart à zéro
                this.sequence.resetIndex();
                this.sequence.displayNext(true);
            }
        }
    }

    stop() {
        if (this.period instanceof Clock) {
            (this.period as Clock).deleteListener(this.clockListener);
        } else {
            clearInterval(this.animationInterval);
        }

        this.isPlaying = false;
    }

    reset() {
        this.sequence.reset();

        if (this.animationInterval !== undefined) {
            clearInterval(this.animationInterval);
            this.animationInterval = undefined;
        }

        if (this.clockListener) {
            this.clockListener.stoplisten();
            this.clockListener = null;
        }

        this.isPlaying = false;
    }

    executeAction(actionName: string, args: string[]) {
        switch (actionName) {
            case "play":
                // this.interruptable = false;
                this.play();
                break;

            case "stop":
                this.stop();
                break;
        }
    }
}