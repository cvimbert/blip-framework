"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Created by Christophe on 03/02/2017.
 */
var sequence_condition_class_1 = require("../sequence-condition.class");
var OnStateSequenceCondition = (function (_super) {
    __extends(OnStateSequenceCondition, _super);
    function OnStateSequenceCondition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OnStateSequenceCondition.prototype.eval = function () {
        return true;
    };
    return OnStateSequenceCondition;
}(sequence_condition_class_1.SequenceCondition));
exports.OnStateSequenceCondition = OnStateSequenceCondition;
//# sourceMappingURL=onstate-sequence-condition.class.js.map