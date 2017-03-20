/**
 * Created by Christophe on 14/02/2017.
 */
import { EventDispatcher } from "../common/event-dispatcher.class";
import { IDisplayable } from "../interfaces/IDisplayable.interface";
import { GraphLink } from "./graph-link.class";
export declare class GraphNode extends EventDispatcher {
    state: IDisplayable;
    links: GraphLink[];
    constructor(state: IDisplayable, links?: GraphLink[]);
    addLink(link: GraphLink): void;
    display(): void;
    hide(): void;
    enable(callback: Function): void;
    disable(): void;
}
