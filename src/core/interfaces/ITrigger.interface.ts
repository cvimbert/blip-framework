/**
 * Created by Christophe on 14/02/2017.
 */
export interface ITrigger {

    enable();

    // TODO: temporary parameters
    bind(callback:Function);

    // TODO: temporary parameters
    unbind();
}