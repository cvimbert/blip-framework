/**
 * Created by Christophe on 01/02/2017.
 */
import {File} from "../files/file.class";
import {BehaviorSubject} from "rxjs/Rx";

export class Sprite {

    public visibility:BehaviorSubject<boolean>;

    constructor(
        public file:File,
        public x:number,
        public y:number,
        public scale:number,
        initVisibility:boolean = false
    ) {
        this.visibility = new BehaviorSubject<boolean>(initVisibility);
    }

    show() {
        this.visibility.next(true);
    }

    hide() {
        this.visibility.next(false);
    }

    toggle() {
        this.visibility.next(!this.visibility.getValue());
    }
}