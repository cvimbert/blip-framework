"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Created by Christophe on 03/02/2017.
 */
var condition_class_1 = require("../condition.class");
var condition_types_class_1 = require("./condition-types.class");
var SequenceCondition = (function (_super) {
    __extends(SequenceCondition, _super);
    function SequenceCondition(sequence, operator, sequenceConditionType) {
        var _this = _super.call(this, condition_types_class_1.ConditionTypes.SEQUENCE_CONDITION) || this;
        _this.sequence = sequence;
        _this.operator = operator;
        _this.sequenceConditionType = sequenceConditionType;
        return _this;
    }
    return SequenceCondition;
}(condition_class_1.Condition));
exports.SequenceCondition = SequenceCondition;
//# sourceMappingURL=sequence-condition.class.js.map