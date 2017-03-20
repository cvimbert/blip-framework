/**
 * Created by Christophe on 02/02/2017.
 */
"use strict";
var Events = (function () {
    function Events() {
    }
    return Events;
}());
Events.SEQUENCE_ENTER_STATE = "event_enterstate";
Events.ANIMATION_ITERATION_END = "animation_iteration_end";
Events.ANIMATION_END = "animation_end";
Events.CLOCK_PERIOD = "clock_period";
Events.CONTROL_UP = "control_up";
Events.CONTROL_DOWN = "control_down";
Events.VARIABLE_CHANGE = "variable_change";
Events.DISPLAYED = "displayed";
Events.HIDDEN = "hidden";
exports.Events = Events;
//# sourceMappingURL=events.class.js.map