/**
 * Created by Christophe on 14/02/2017.
 */
import {Dispatcher} from "../common/dispatcher.class";
import {IDisplayable} from "../interfaces/IDisplayable.interface";
import {GraphLink} from "./graph-link.class";
import {Gettable} from "../interfaces/gettable.interface";

export class GraphNode extends Dispatcher implements Gettable {

    id: string;

    constructor(
        public state:IDisplayable,
        public links:GraphLink[] = []
    ) {
        super();
    }

    addLink(link:GraphLink) {
        this.links.push(link);
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

    getProperty(propertyName: string): any {
        switch (propertyName) {
            case "state":
                return this.state;
        }
    }
}