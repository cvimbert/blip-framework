/**
 * Created by Christophe on 01/02/2017.
 */
import {EventListener} from "../common/event-listener.class";

export interface IDisplayable {
    display();
    hide();
    isVisible():boolean;
    listen(event:string, callback:Function):EventListener
}