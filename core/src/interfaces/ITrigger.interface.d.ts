/**
 * Created by Christophe on 14/02/2017.
 */
export interface ITrigger {
    enable(): any;
    bind(callback: Function): any;
    unbind(): any;
}
