/**
 * Created by Christophe on 01/02/2017.
 */
import {EventListener} from "../common/event-listener.class";

export interface IDisplayable {
    display();
    hide();
    listen(event:string, callback:Function):EventListener;
    getStatus(statusName:string);
    subscribe(statusName:string, callback:Function);
}