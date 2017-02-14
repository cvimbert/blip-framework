/**
 * Created by Christophe on 14/02/2017.
 */
import {EventDispatcher} from "../common/event-dispatcher.class";
import {IState} from "../interfaces/IState.interface";
import {GraphLink} from "./graph-link.class";

export class GraphNode extends EventDispatcher {

    constructor(
        public state:IState,
        public links:GraphLink[]
    ) {
        super();
    }
    
    display() {
        this.state.display();
    }
    
    hide() {
        this.state.hide();
    }
    
    enable(callback:Function) {
        this.links.forEach(link => link.enableTrigger(callback));
    }

    disable() {
        this.links.forEach(link => link.disableTrigger());
    }
}