/**
 * Created by Christophe on 29/03/2017.
 */
import {EventListener} from "../common/event-listener.class";

export interface IState {
    display();
    hide();
    listen(eventName:string, callback:Function):EventListener;
    isVisible():boolean;
}