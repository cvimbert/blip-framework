System.registerDynamic("core/src/modules/lcd-displayer/lcd-displayer.class.js", ["./seg7-displayer.class", "../../display/display-element.class"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    var __extends = exports && exports.__extends || function () {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() {
                this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var seg7_displayer_class_1 = $__require("./seg7-displayer.class");
    var display_element_class_1 = $__require("../../display/display-element.class");
    var LcdDisplayer = function (_super) {
        __extends(LcdDisplayer, _super);
        function LcdDisplayer(x, y, digitNumber, stepWidth, scale, variable) {
            if (digitNumber === void 0) {
                digitNumber = 1;
            }
            if (stepWidth === void 0) {
                stepWidth = 24;
            }
            if (scale === void 0) {
                scale = 1;
            }
            if (variable === void 0) {
                variable = null;
            }
            var _this = _super.call(this, x, y, scale) || this;
            _this.digitNumber = digitNumber;
            _this.stepWidth = stepWidth;
            _this.variable = variable;
            _this._backgroundDigits = [];
            _this._digits = [];
            _this._xPosition = 0;
            return _this;
        }
        Object.defineProperty(LcdDisplayer.prototype, "value", {
            get: function () {
                return this._value;
            },
            set: function (value) {
                var stringifiedValue = String(value);
                for (var index in this._digits) {
                    if (this._digits.hasOwnProperty(index)) {
                        this._digits[index].value = +stringifiedValue[index];
                    }
                }
                this._value = value;
            },
            enumerable: true,
            configurable: true
        });
        LcdDisplayer.prototype.getDOMElement = function () {
            if (this._DOMElement) {
                return this._DOMElement;
            } else {
                var displayerDiv = _super.prototype.getDOMElement.call(this);
                displayerDiv.classList.add("lcd-displayer");
                for (var i = 0; i < this.digitNumber; i++) {
                    var backgroundDigit = new seg7_displayer_class_1.Seg7Displayer(this._xPosition, 0);
                    backgroundDigit.value = 8;
                    var backgroundElem = backgroundDigit.displayInDOMElement(displayerDiv);
                    backgroundElem.classList.add("inactive");
                    this._backgroundDigits.push(backgroundDigit);
                    var foregroundDigit = new seg7_displayer_class_1.Seg7Displayer(this._xPosition, 0);
                    foregroundDigit.value = 4;
                    foregroundDigit.displayInDOMElement(displayerDiv);
                    this._digits.push(foregroundDigit);
                    this._xPosition += this.stepWidth;
                }
                return displayerDiv;
            }
        };
        return LcdDisplayer;
    }(display_element_class_1.DisplayElement);
    exports.LcdDisplayer = LcdDisplayer;

});
System.registerDynamic("core/src/modules/lcd-displayer/seg7-displayer.class.js", ["../../display/display-element.class", "../../common/events.class"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    var __extends = exports && exports.__extends || function () {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() {
                this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Created by Christophe on 22/02/2017.
     */
    var display_element_class_1 = $__require("../../display/display-element.class");
    var events_class_1 = $__require("../../common/events.class");
    var Seg7Displayer = function (_super) {
        __extends(Seg7Displayer, _super);
        function Seg7Displayer(x, y, scale, variable) {
            if (scale === void 0) {
                scale = 1;
            }
            if (variable === void 0) {
                variable = null;
            }
            var _this = _super.call(this, x, y, scale) || this;
            _this.variable = variable;
            _this._currentValue = null;
            if (variable) _this.bindVariable(variable);
            return _this;
        }
        Seg7Displayer.prototype.getDOMElement = function () {
            if (this._DOMElement) {
                return this._DOMElement;
            } else {
                var div = _super.prototype.getDOMElement.call(this);
                this.txtDiv = document.createElement("div");
                div.appendChild(this.txtDiv);
                div.classList.add("seg7-displayer");
                if (this.value) {
                    this.value = this._currentValue;
                }
                return div;
            }
        };
        Seg7Displayer.prototype.bindVariable = function (variable) {
            var _this = this;
            this.variable = variable;
            if (variable.value !== null) this.value = +variable.value;
            variable.listen(events_class_1.Events.VARIABLE_CHANGE, function (value) {
                return _this.value = +value;
            });
        };
        Object.defineProperty(Seg7Displayer.prototype, "value", {
            get: function () {
                return this._currentValue;
            },
            set: function (value) {
                if (this.txtDiv) this.txtDiv.innerHTML = String(value);
                this._currentValue = value;
            },
            enumerable: true,
            configurable: true
        });
        Seg7Displayer.prototype.clear = function () {
            this.txtDiv.innerHTML = " ";
            this._currentValue = null;
        };
        return Seg7Displayer;
    }(display_element_class_1.DisplayElement);
    exports.Seg7Displayer = Seg7Displayer;

});
System.registerDynamic("core/src/gamelogic/clock.class.js", ["../common/event-dispatcher.class", "../common/events.class"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    var __extends = exports && exports.__extends || function () {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() {
                this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Created by Christophe on 03/02/2017.
     */
    var event_dispatcher_class_1 = $__require("../common/event-dispatcher.class");
    var events_class_1 = $__require("../common/events.class");
    var Clock = function (_super) {
        __extends(Clock, _super);
        function Clock(period) {
            var _this = _super.call(this) || this;
            _this.period = period;
            return _this;
        }
        Clock.prototype.start = function () {
            var _this = this;
            this.stop();
            this._interval = setInterval(function () {
                _this.dispatchEvent(events_class_1.Events.CLOCK_PERIOD);
            }, this.period * 1000);
        };
        Clock.prototype.stop = function () {
            if (this._interval) {
                clearInterval(this._interval);
                this._interval = null;
            }
        };
        return Clock;
    }(event_dispatcher_class_1.EventDispatcher);
    exports.Clock = Clock;

});
System.registerDynamic("core/src/files/file.class.js", [], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Created by Christophe on 01/02/2017.
     */
    var File = function () {
        function File(path) {
            this.path = path;
        }
        return File;
    }();
    exports.File = File;

});
System.registerDynamic("core/src/gamelogic/control.class.js", ["../common/event-dispatcher.class", "../common/events.class"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    var __extends = exports && exports.__extends || function () {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() {
                this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var event_dispatcher_class_1 = $__require("../common/event-dispatcher.class");
    var events_class_1 = $__require("../common/events.class");
    var ControlZone = function () {
        function ControlZone(x, y, width, height) {
            this.x = x;
            this.y = y;
            this.width = width;
            this.height = height;
        }
        return ControlZone;
    }();
    exports.ControlZone = ControlZone;
    var Control = function (_super) {
        __extends(Control, _super);
        function Control(sprite, zone) {
            if (zone === void 0) {
                zone = null;
            }
            var _this = _super.call(this) || this;
            _this.sprite = sprite;
            _this.zone = zone;
            var self = _this;
            _this.upHandler = function (evt) {
                self.checkZoneEvent(events_class_1.Events.CONTROL_UP, evt);
            };
            _this.downHandler = function (evt) {
                self.checkZoneEvent(events_class_1.Events.CONTROL_DOWN, evt);
            };
            return _this;
        }
        Control.prototype.setZone = function (x, y, width, height) {
            this.zone = new ControlZone(x, y, width, height);
        };
        Control.prototype.checkZoneEvent = function (eventName, event) {
            if (this.zone) {
                var x = event.offsetX;
                var y = event.offsetY;
                if (x >= this.zone.x && x <= this.zone.x + this.zone.width && y >= this.zone.y && y <= this.zone.y + this.zone.height) {
                    this.dispatchEvent(eventName);
                }
            } else {
                this.dispatchEvent(eventName);
            }
        };
        Control.prototype._onMouseDown = function (evt) {
            this.checkZoneEvent(events_class_1.Events.CONTROL_DOWN, evt);
        };
        Control.prototype._onMouseUp = function (evt) {
            this.checkZoneEvent(events_class_1.Events.CONTROL_UP, evt);
        };
        Control.prototype.enable = function () {
            this.sprite.DOMElement.addEventListener("mousedown", this.downHandler);
            this.sprite.DOMElement.addEventListener("mouseup", this.upHandler);
        };
        Control.prototype.disable = function () {
            this.sprite.DOMElement.removeEventListener("mousedown", this.downHandler);
            this.sprite.DOMElement.removeEventListener("mouseup", this.upHandler);
        };
        return Control;
    }(event_dispatcher_class_1.EventDispatcher);
    exports.Control = Control;

});
System.registerDynamic("core/src/gamelogic/variable.class.js", ["../common/event-dispatcher.class", "../common/events.class"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    var __extends = exports && exports.__extends || function () {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() {
                this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var event_dispatcher_class_1 = $__require("../common/event-dispatcher.class");
    var events_class_1 = $__require("../common/events.class");
    /**
     * Created by Christophe on 03/02/2017.
     */
    var Variable = function (_super) {
        __extends(Variable, _super);
        function Variable(type, initValue) {
            if (initValue === void 0) {
                initValue = null;
            }
            var _this = _super.call(this) || this;
            _this.type = type;
            _this.initValue = initValue;
            _this._currentValue = initValue;
            return _this;
        }
        Object.defineProperty(Variable.prototype, "value", {
            get: function () {
                return this._currentValue;
            },
            set: function (value) {
                this._currentValue = value;
                this.dispatchEvent(events_class_1.Events.VARIABLE_CHANGE, this.value);
            },
            enumerable: true,
            configurable: true
        });
        Variable.prototype.getType = function () {
            return typeof this._currentValue;
        };
        Variable.prototype.increment = function () {
            if (this.type === Variable.NUMBER_TYPE) {
                this.value += 1;
            }
        };
        Variable.prototype.decrement = function () {
            if (this.type === Variable.NUMBER_TYPE) {
                this.value -= 1;
            }
        };
        Variable.prototype.reset = function (newInitValue) {
            if (newInitValue === void 0) {
                newInitValue = null;
            }
            if (newInitValue) {
                this.initValue = newInitValue;
            }
            this.value = this.initValue;
        };
        return Variable;
    }(event_dispatcher_class_1.EventDispatcher);
    Variable.STRING_TYPE = "string";
    Variable.NUMBER_TYPE = "number";
    Variable.BOOLEAN_TYPE = "boolean";
    exports.Variable = Variable;

});
System.registerDynamic("core/src/gamelogic/condition.class.js", [], true, function ($__require, exports, module) {
    /**
     * Created by Christophe on 03/02/2017.
     */
    "use strict";

    var global = this || self,
        GLOBAL = global;
    Object.defineProperty(exports, "__esModule", { value: true });
    var Condition = function () {
        function Condition(type) {
            this.type = type;
        }
        return Condition;
    }();
    exports.Condition = Condition;

});
System.registerDynamic("core/src/gamelogic/conditions/condition-types.class.js", [], true, function ($__require, exports, module) {
    /**
     * Created by Christophe on 03/02/2017.
     */
    "use strict";

    var global = this || self,
        GLOBAL = global;
    Object.defineProperty(exports, "__esModule", { value: true });
    var ConditionTypes = function () {
        function ConditionTypes() {}
        return ConditionTypes;
    }();
    ConditionTypes.SEQUENCE_CONDITION = "sequence_condition";
    ConditionTypes.VARIABLE_CONDITION = "variable_condition";
    exports.ConditionTypes = ConditionTypes;

});
System.registerDynamic("core/src/gamelogic/conditions/sequence-condition.class.js", ["../condition.class", "./condition-types.class"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    var __extends = exports && exports.__extends || function () {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() {
                this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Created by Christophe on 03/02/2017.
     */
    var condition_class_1 = $__require("../condition.class");
    var condition_types_class_1 = $__require("./condition-types.class");
    var SequenceCondition = function (_super) {
        __extends(SequenceCondition, _super);
        function SequenceCondition(sequence, operator, sequenceConditionType) {
            var _this = _super.call(this, condition_types_class_1.ConditionTypes.SEQUENCE_CONDITION) || this;
            _this.sequence = sequence;
            _this.operator = operator;
            _this.sequenceConditionType = sequenceConditionType;
            return _this;
        }
        return SequenceCondition;
    }(condition_class_1.Condition);
    exports.SequenceCondition = SequenceCondition;

});
System.registerDynamic("core/src/gamelogic/conditions/sequence-conditions/onstate-sequence-condition.class.js", ["../sequence-condition.class"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    var __extends = exports && exports.__extends || function () {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() {
                this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Created by Christophe on 03/02/2017.
     */
    var sequence_condition_class_1 = $__require("../sequence-condition.class");
    var OnStateSequenceCondition = function (_super) {
        __extends(OnStateSequenceCondition, _super);
        function OnStateSequenceCondition() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        OnStateSequenceCondition.prototype.eval = function () {
            return true;
        };
        return OnStateSequenceCondition;
    }(sequence_condition_class_1.SequenceCondition);
    exports.OnStateSequenceCondition = OnStateSequenceCondition;

});
System.registerDynamic("core/src/graphs/graph.class.js", ["../common/event-dispatcher.class"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    var __extends = exports && exports.__extends || function () {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() {
                this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Created by Christophe on 14/02/2017.
     */
    var event_dispatcher_class_1 = $__require("../common/event-dispatcher.class");
    var Graph = function (_super) {
        __extends(Graph, _super);
        function Graph(nodes) {
            var _this = _super.call(this) || this;
            _this.nodes = nodes;
            return _this;
        }
        Graph.prototype.hide = function () {
            this.nodes.forEach(function (node) {
                return node.hide();
            });
        };
        Graph.prototype.setCurrentNodeIndex = function (index) {
            if (index === void 0) {
                index = 0;
            }
            this.setNodeAsCurrent(this.nodes[index]);
        };
        Graph.prototype.setNodeAsCurrent = function (node) {
            var _this = this;
            if (this._currentNode) {
                this._currentNode.disable();
            }
            this._currentNode = node;
            this.hide();
            node.display();
            node.enable(function (newNode) {
                // callback de changement de noeud
                _this.setNodeAsCurrent(newNode);
            });
        };
        return Graph;
    }(event_dispatcher_class_1.EventDispatcher);
    exports.Graph = Graph;

});
System.registerDynamic("core/src/graphs/graph-link.class.js", ["../common/event-dispatcher.class"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    var __extends = exports && exports.__extends || function () {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() {
                this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Created by Christophe on 14/02/2017.
     */
    var event_dispatcher_class_1 = $__require("../common/event-dispatcher.class");
    var GraphLink = function (_super) {
        __extends(GraphLink, _super);
        function GraphLink(destNode, trigger) {
            var _this = _super.call(this) || this;
            _this.destNode = destNode;
            _this.trigger = trigger;
            return _this;
        }
        GraphLink.prototype.enableTrigger = function (callback) {
            var _this = this;
            this.trigger.enable();
            this.trigger.bind(function () {
                return callback(_this.destNode);
            });
        };
        GraphLink.prototype.disableTrigger = function () {
            this.trigger.unbind();
        };
        return GraphLink;
    }(event_dispatcher_class_1.EventDispatcher);
    exports.GraphLink = GraphLink;

});
System.registerDynamic("core/src/graphs/graph-node.class.js", ["../common/event-dispatcher.class"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    var __extends = exports && exports.__extends || function () {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() {
                this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Created by Christophe on 14/02/2017.
     */
    var event_dispatcher_class_1 = $__require("../common/event-dispatcher.class");
    var GraphNode = function (_super) {
        __extends(GraphNode, _super);
        function GraphNode(state, links) {
            if (links === void 0) {
                links = [];
            }
            var _this = _super.call(this) || this;
            _this.state = state;
            _this.links = links;
            return _this;
        }
        GraphNode.prototype.addLink = function (link) {
            this.links.push(link);
        };
        GraphNode.prototype.display = function () {
            this.state.display();
        };
        GraphNode.prototype.hide = function () {
            this.state.hide();
        };
        GraphNode.prototype.enable = function (callback) {
            this.links.forEach(function (link) {
                return link.enableTrigger(callback);
            });
        };
        GraphNode.prototype.disable = function () {
            this.links.forEach(function (link) {
                return link.disableTrigger();
            });
        };
        return GraphNode;
    }(event_dispatcher_class_1.EventDispatcher);
    exports.GraphNode = GraphNode;

});
System.registerDynamic("core/src/sound/sound.class.js", [], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    Object.defineProperty(exports, "__esModule", { value: true });
    var context = new AudioContext();
    var Sound = function () {
        function Sound(file) {
            this.file = file;
            this.load();
        }
        Sound.prototype.load = function () {
            var _this = this;
            var request = new XMLHttpRequest();
            request.open('GET', this.file.path, true);
            request.responseType = 'arraybuffer';
            request.onload = function () {
                context.decodeAudioData(request.response, function (buffer) {
                    _this._buffer = buffer;
                }, function () {
                    return console.log("Sound loading failed");
                });
            };
            request.send();
        };
        Sound.prototype.play = function () {
            var source = context.createBufferSource();
            source.buffer = this._buffer;
            source.connect(context.destination);
            source.start(0);
        };
        Sound.prototype.stop = function () {
            // useful ??
        };
        Sound.prototype.pause = function () {
            // useful ??
        };
        return Sound;
    }();
    exports.Sound = Sound;

});
System.registerDynamic("core/src/spriteslogic/animation.class.js", ["../common/event-dispatcher.class", "../common/events.class"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    var __extends = exports && exports.__extends || function () {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() {
                this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var event_dispatcher_class_1 = $__require("../common/event-dispatcher.class");
    var events_class_1 = $__require("../common/events.class");
    var Animation = function (_super) {
        __extends(Animation, _super);
        function Animation(sequence, iterations, period, interruptable) {
            if (interruptable === void 0) {
                interruptable = true;
            }
            var _this = _super.call(this) || this;
            _this.sequence = sequence;
            _this.iterations = iterations;
            _this.period = period;
            _this.interruptable = interruptable;
            _this._isPlaying = false;
            return _this;
        }
        Animation.prototype.play = function () {
            var _this = this;
            if (this.interruptable === false && this._isPlaying) {
                occurencesCounter = 0;
                return;
            }
            this.sequence.reset();
            this.sequence.displayNext(true);
            var occurencesCounter = 0;
            this._isPlaying = true;
            this._animationInterval = setInterval(function () {
                if (_this._isPlaying === false) return;
                if (!_this.sequence.displayNext(occurencesCounter < _this.iterations - 1)) {
                    _this.dispatchEvent(events_class_1.Events.ANIMATION_ITERATION_END, occurencesCounter);
                    occurencesCounter++;
                    if (occurencesCounter >= _this.iterations) {
                        clearInterval(_this._animationInterval);
                        _this.dispatchEvent(events_class_1.Events.ANIMATION_END);
                        _this._isPlaying = false;
                    } else {
                        // on repart à zéro
                        //this.sequence.resetIndex();
                        //this.sequence.displayNext(true);
                        //this.sequence.reverse();
                    }
                }
            }, this.period * 1000);
        };
        Animation.prototype.stop = function () {};
        Animation.prototype.reset = function () {
            this.sequence.reset();
            if (this._animationInterval !== undefined) {
                clearInterval(this._animationInterval);
                this._animationInterval = undefined;
            }
        };
        return Animation;
    }(event_dispatcher_class_1.EventDispatcher);
    exports.Animation = Animation;

});
System.registerDynamic("core/src/spriteslogic/sequence.class.js", ["../common/event-dispatcher.class", "../common/events.class"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    var __extends = exports && exports.__extends || function () {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() {
                this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var event_dispatcher_class_1 = $__require("../common/event-dispatcher.class");
    var events_class_1 = $__require("../common/events.class");
    var Sequence = function (_super) {
        __extends(Sequence, _super);
        function Sequence(group, states, loopType) {
            if (states === void 0) {
                states = [];
            }
            if (loopType === void 0) {
                loopType = "";
            }
            var _this = _super.call(this) || this;
            _this.group = group;
            _this.states = states;
            _this.loopType = loopType;
            _this._direction = 1;
            _this._currentIndex = -1;
            return _this;
        }
        Sequence.prototype._isIndexValid = function (index) {
            return index >= 0 && index < this.states.length;
        };
        Sequence.prototype.hide = function () {
            this.states.forEach(function (state) {
                return state.hide();
            });
        };
        Sequence.prototype.displayAtIndex = function (index, forced) {
            if (forced === void 0) {
                forced = false;
            }
            //if (!this._isIndexValid(index)) return false;
            console.log(index);
            if (!forced && (index <= -1 || index >= this.states.length)) {
                console.log("pas forcé");
                return false;
            }
            if (index <= -1) {
                console.log("min");
                if (this.loopType === Sequence.LOOP_TYPE_CIRCLE) {
                    this.reverse();
                    this.displayAtIndex(1);
                } else if (this.loopType === Sequence.LOOP_TYPE_RESET) {
                    this.displayAtIndex(this.states.length - 1);
                }
                return false;
            } else if (index >= this.states.length) {
                console.log("max");
                if (this.loopType === Sequence.LOOP_TYPE_CIRCLE) {
                    this.reverse();
                    this.displayAtIndex(this.states.length - 2);
                } else if (this.loopType === Sequence.LOOP_TYPE_RESET) {
                    this.displayAtIndex(0);
                }
                return false;
            }
            this.hide();
            this._currentIndex = index;
            this.states[index].display();
            this.dispatchEvent(events_class_1.Events.SEQUENCE_ENTER_STATE, this.states[index]);
            return true;
        };
        Sequence.prototype.reverse = function () {
            this._direction *= -1;
        };
        /*inverse() {
            if (this._currentIndex === -1) {
                this._currentIndex = this.states.length;
            }
        }*/
        Sequence.prototype.hasNext = function () {
            var nextIndex = this._currentIndex + this._direction;
            return !(nextIndex <= -1 || nextIndex >= this.states.length);
        };
        Sequence.prototype.displayNext = function (forced) {
            if (forced === void 0) {
                forced = false;
            }
            var done = this.displayAtIndex(this._currentIndex + this._direction, forced);
            /*if (!done && this.loopType === Sequence.LOOP_TYPE_CIRCLE) {
                this.reverse();
            }*/
            return done;
        };
        Sequence.prototype.hasPrevious = function () {
            var previousIndex = this._currentIndex - this._direction;
            return !(previousIndex <= -1 || previousIndex >= this.states.length);
        };
        Sequence.prototype.displayPrevious = function (forced) {
            if (forced === void 0) {
                forced = false;
            }
            var done = this.displayAtIndex(this._currentIndex - this._direction, forced);
            /*if (!done && this.loopType === Sequence.LOOP_TYPE_CIRCLE) {
                this.reverse();
            }*/
            if (!done && this.loopType === Sequence.LOOP_TYPE_RESET) {
                this.resetIndex();
            }
            return done;
        };
        Sequence.prototype.reset = function () {
            if (this._currentIndex !== -1) {
                this.states[this._currentIndex].hide();
            }
            this._currentIndex = -1;
        };
        Sequence.prototype.resetIndex = function () {
            this._currentIndex = -1;
        };
        return Sequence;
    }(event_dispatcher_class_1.EventDispatcher);
    // 1 2 3 4 3 2 1 2 3 4
    Sequence.LOOP_TYPE_CIRCLE = "circle";
    // 1 2 3 4 1 2 3 4 1 2 3 4
    Sequence.LOOP_TYPE_RESET = "reset";
    exports.Sequence = Sequence;

});
System.registerDynamic("core/src/triggers/time-trigger.class.js", ["./base-trigger.class"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    var __extends = exports && exports.__extends || function () {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() {
                this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var base_trigger_class_1 = $__require("./base-trigger.class");
    var TimeTrigger = function (_super) {
        __extends(TimeTrigger, _super);
        function TimeTrigger(time, callback) {
            if (callback === void 0) {
                callback = null;
            }
            var _this = _super.call(this, callback) || this;
            _this.time = time;
            return _this;
        }
        TimeTrigger.prototype.enable = function () {
            var _this = this;
            setTimeout(function () {
                if (_this.callback) _this.callback();
            }, this.time * 1000);
        };
        return TimeTrigger;
    }(base_trigger_class_1.BaseTrigger);
    exports.TimeTrigger = TimeTrigger;

});
System.registerDynamic("core/src/triggers/trigger.class.js", ["./base-trigger.class"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    var __extends = exports && exports.__extends || function () {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() {
                this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var base_trigger_class_1 = $__require("./base-trigger.class");
    var Trigger = function (_super) {
        __extends(Trigger, _super);
        function Trigger(dispatcher, eventName, callback, argument) {
            if (callback === void 0) {
                callback = null;
            }
            if (argument === void 0) {
                argument = null;
            }
            var _this = _super.call(this, callback) || this;
            _this.dispatcher = dispatcher;
            _this.eventName = eventName;
            _this.argument = argument;
            return _this;
        }
        Trigger.prototype._callback = function (arg) {
            if (!this._enabled || !this.callback) return;
            if (this.argument) {
                if (arg !== this.argument) {
                    return;
                }
            }
            this.callback(arg);
        };
        Object.defineProperty(Trigger.prototype, "enabled", {
            get: function () {
                return this._enabled;
            },
            set: function (value) {
                if (value) {
                    this.enable();
                } else {
                    this.disable();
                }
            },
            enumerable: true,
            configurable: true
        });
        Trigger.prototype.enable = function () {
            var _this = this;
            if (!this._enabled) {
                this.subscription = this.dispatcher.listen(this.eventName, function (arg) {
                    _this._callback(arg);
                });
            }
            this._enabled = true;
        };
        Trigger.prototype.disable = function () {
            if (this._enabled) {
                this.subscription.stoplisten();
            }
            this._enabled = false;
        };
        return Trigger;
    }(base_trigger_class_1.BaseTrigger);
    exports.Trigger = Trigger;

});
System.registerDynamic("core/src/triggers/base-trigger.class.js", [], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Created by Christophe on 07/03/2017.
     */
    var BaseTrigger = function () {
        function BaseTrigger(callback) {
            if (callback === void 0) {
                callback = null;
            }
            this.callback = callback;
            this._enabled = false;
        }
        Object.defineProperty(BaseTrigger.prototype, "enabled", {
            get: function () {
                return this._enabled;
            },
            set: function (value) {
                if (value) {
                    this.enable();
                } else {
                    this.disable();
                }
            },
            enumerable: true,
            configurable: true
        });
        BaseTrigger.prototype.enable = function () {
            this._enabled = true;
        };
        BaseTrigger.prototype.disable = function () {
            this._enabled = false;
        };
        BaseTrigger.prototype.bind = function (callback) {
            this.callback = callback;
            this._enabled = true;
        };
        BaseTrigger.prototype.unbind = function () {
            this.callback = null;
            this._enabled = false;
        };
        return BaseTrigger;
    }();
    exports.BaseTrigger = BaseTrigger;

});
System.registerDynamic("core/src/triggers/sprites/sprites-collision-trigger.class.js", ["../base-trigger.class", "../../common/events.class"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    var __extends = exports && exports.__extends || function () {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() {
                this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Created by Christophe on 08/03/2017.
     */
    var base_trigger_class_1 = $__require("../base-trigger.class");
    var events_class_1 = $__require("../../common/events.class");
    var SpritesCollisionTrigger = function (_super) {
        __extends(SpritesCollisionTrigger, _super);
        function SpritesCollisionTrigger(baseSprite, targetSprite, callback, onEvent, offEvent) {
            if (callback === void 0) {
                callback = null;
            }
            if (onEvent === void 0) {
                onEvent = events_class_1.Events.DISPLAYED;
            }
            if (offEvent === void 0) {
                offEvent = events_class_1.Events.HIDDEN;
            }
            var _this = _super.call(this, callback) || this;
            _this.baseSprite = baseSprite;
            _this.targetSprite = targetSprite;
            _this.onEvent = onEvent;
            _this.offEvent = offEvent;
            _this.ON = "on";
            _this.OFF = "off";
            return _this;
        }
        SpritesCollisionTrigger.prototype.enable = function () {
            if (!this._enabled) {
                // dans un sens
                /*this.baseSprite.listen(this.onEvent, () => {
                    this._baseSpriteStatus = this.ON;
                });
                  this._baseSpriteSubscription1 = this.baseSprite.listen(this.onEvent, () => {
                    this._targetSpriteSubscription1 = this.targetSprite.listen(this.onEvent, () => this.callback());
                });*/
                // et dans l'autre
                /*this._targetSpriteSubscription2 = this.targetSprite.listen(this.onEvent, () => {
                    this._baseSpriteSubscription2 = this.baseSprite.listen(this.onEvent, () => this.callback());
                });*/
            }
            _super.prototype.enable.call(this);
        };
        SpritesCollisionTrigger.prototype.disable = function () {
            if (this._baseSpriteSubscription1) this._baseSpriteSubscription1.stoplisten();
            if (this._targetSpriteSubscription1) this._targetSpriteSubscription1.stoplisten();
            if (this._baseSpriteSubscription2) this._baseSpriteSubscription2.stoplisten();
            if (this._targetSpriteSubscription2) this._targetSpriteSubscription2.stoplisten();
            _super.prototype.disable.call(this);
        };
        return SpritesCollisionTrigger;
    }(base_trigger_class_1.BaseTrigger);
    exports.SpritesCollisionTrigger = SpritesCollisionTrigger;

});
System.registerDynamic("core/src/display/conditional-sprites-group-state.class.js", ["../common/event-dispatcher.class"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    var __extends = exports && exports.__extends || function () {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() {
                this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Created by Christophe on 14/02/2017.
     */
    var event_dispatcher_class_1 = $__require("../common/event-dispatcher.class");
    var ConditionalSpritesGroupState = function (_super) {
        __extends(ConditionalSpritesGroupState, _super);
        function ConditionalSpritesGroupState(state, condition) {
            var _this = _super.call(this) || this;
            _this.state = state;
            _this.condition = condition;
            return _this;
        }
        return ConditionalSpritesGroupState;
    }(event_dispatcher_class_1.EventDispatcher);
    exports.ConditionalSpritesGroupState = ConditionalSpritesGroupState;

});
System.registerDynamic("core/src/display/conditional-sprites-group-state-set.class.js", ["../common/event-dispatcher.class"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    var __extends = exports && exports.__extends || function () {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() {
                this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Created by Christophe on 14/02/2017.
     */
    var event_dispatcher_class_1 = $__require("../common/event-dispatcher.class");
    var ConditionalSpritesGroupStateSet = function (_super) {
        __extends(ConditionalSpritesGroupStateSet, _super);
        function ConditionalSpritesGroupStateSet(group, conditionalStates, defaultState) {
            if (conditionalStates === void 0) {
                conditionalStates = [];
            }
            var _this = _super.call(this) || this;
            _this.group = group;
            _this.conditionalStates = conditionalStates;
            _this.defaultState = defaultState;
            return _this;
        }
        ConditionalSpritesGroupStateSet.prototype.display = function () {
            for (var _i = 0, _a = this.conditionalStates; _i < _a.length; _i++) {
                var conditionalState = _a[_i];
                if (conditionalState.condition.eval()) {
                    conditionalState.state.display();
                    return;
                }
            }
            this.defaultState.display();
        };
        ConditionalSpritesGroupStateSet.prototype.update = function () {
            this.display();
        };
        ConditionalSpritesGroupStateSet.prototype.hide = function () {
            this.group.hide();
        };
        return ConditionalSpritesGroupStateSet;
    }(event_dispatcher_class_1.EventDispatcher);
    exports.ConditionalSpritesGroupStateSet = ConditionalSpritesGroupStateSet;

});
System.registerDynamic("core/src/display/control-sprite.class.js", ["./image-display-element"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    var __extends = exports && exports.__extends || function () {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() {
                this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var image_display_element_1 = $__require("./image-display-element");
    var ControlSprite = function (_super) {
        __extends(ControlSprite, _super);
        function ControlSprite(file, x, y, scale) {
            if (scale === void 0) {
                scale = 1;
            }
            return _super.call(this, file, x, y, scale) || this;
        }
        ControlSprite.prototype.getDOMElement = function () {
            var div = _super.prototype.getDOMElement.call(this);
            div.classList.add("control");
            return div;
        };
        Object.defineProperty(ControlSprite.prototype, "DOMElement", {
            get: function () {
                return this._DOMElement;
            },
            enumerable: true,
            configurable: true
        });
        return ControlSprite;
    }(image_display_element_1.ImageDisplayElement);
    exports.ControlSprite = ControlSprite;

});
System.registerDynamic("core/src/display/display-element.class.js", ["../common/status-dispatcher.class"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    var __extends = exports && exports.__extends || function () {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() {
                this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Created by Christophe on 21/02/2017.
     */
    var status_dispatcher_class_1 = $__require("../common/status-dispatcher.class");
    var DisplayElement = function (_super) {
        __extends(DisplayElement, _super);
        function DisplayElement(x, y, scale) {
            if (scale === void 0) {
                scale = 1;
            }
            var _this = _super.call(this) || this;
            _this.x = x;
            _this.y = y;
            _this.scale = scale;
            return _this;
        }
        DisplayElement.prototype.getDOMElement = function () {
            if (this._DOMElement) {
                return this._DOMElement;
            } else {
                var div = document.createElement("div");
                div.className = "game-element";
                div.style.left = this.x + "px";
                div.style.top = this.y + "px";
                div.style.transform = "scale(" + this.scale + ")";
                this._DOMElement = div;
                return div;
            }
        };
        DisplayElement.prototype.displayInDOMElement = function (container) {
            this._DOMElement = this.getDOMElement();
            container.appendChild(this._DOMElement);
            return this._DOMElement;
        };
        return DisplayElement;
    }(status_dispatcher_class_1.StatusDispatcher);
    exports.DisplayElement = DisplayElement;

});
System.registerDynamic("core/src/display/image-display-element.js", ["./display-element.class"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    var __extends = exports && exports.__extends || function () {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() {
                this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Created by Christophe on 22/02/2017.
     */
    var display_element_class_1 = $__require("./display-element.class");
    var ImageDisplayElement = function (_super) {
        __extends(ImageDisplayElement, _super);
        function ImageDisplayElement(file, x, y, scale) {
            if (scale === void 0) {
                scale = 1;
            }
            var _this = _super.call(this, x, y, scale) || this;
            _this.file = file;
            return _this;
        }
        ImageDisplayElement.prototype.getDOMElement = function () {
            var div = _super.prototype.getDOMElement.call(this);
            var image = document.createElement("img");
            image["src"] = this.file.path;
            div.appendChild(image);
            return div;
        };
        return ImageDisplayElement;
    }(display_element_class_1.DisplayElement);
    exports.ImageDisplayElement = ImageDisplayElement;

});
System.registerDynamic("core/src/display/sprite.class.js", ["./image-display-element", "../common/status.class"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    var __extends = exports && exports.__extends || function () {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() {
                this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var image_display_element_1 = $__require("./image-display-element");
    var status_class_1 = $__require("../common/status.class");
    //import {BehaviorSubject} from "rxjs/Rx";
    var Sprite = function (_super) {
        __extends(Sprite, _super);
        function Sprite(file, x, y, scale, initVisibility) {
            if (scale === void 0) {
                scale = 1;
            }
            if (initVisibility === void 0) {
                initVisibility = false;
            }
            var _this =
            //this.visibility = new BehaviorSubject<boolean>(initVisibility);
            _super.call(this, file, x, y, scale) || this;
            _this._visible = initVisibility;
            return _this;
        }
        Sprite.prototype.displayInDOMElement = function (container) {
            var elem = _super.prototype.displayInDOMElement.call(this, container);
            if (this._visible) {
                this.show();
            } else {
                this.hide();
            }
            return elem;
        };
        Sprite.prototype.show = function () {
            //this.visibility.next(true);
            /*if (this._DOMElement) {
                this._DOMElement.style.display = "block";
            }*/
            this.setStatus(status_class_1.Status.VISIBILITY, status_class_1.Status.VISIBLE);
            this._DOMElement.classList.remove("inactive");
            this._DOMElement.classList.add("active");
            this._visible = true;
        };
        Sprite.prototype.display = function () {
            this.show();
        };
        Sprite.prototype.hide = function () {
            //this.visibility.next(false);
            this.setStatus(status_class_1.Status.VISIBILITY, status_class_1.Status.HIDDEN);
            this._DOMElement.classList.add("inactive");
            this._DOMElement.classList.remove("active");
            this._visible = false;
        };
        Sprite.prototype.toggle = function () {
            if (this._visible) {
                this.hide();
            } else {
                this.show();
            }
        };
        return Sprite;
    }(image_display_element_1.ImageDisplayElement);
    exports.Sprite = Sprite;

});
System.registerDynamic("core/src/display/sprites-group.class.js", [], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    Object.defineProperty(exports, "__esModule", { value: true });
    var SpritesGroup = function () {
        function SpritesGroup(sprites) {
            this.sprites = sprites;
        }
        SpritesGroup.prototype.show = function () {
            this.sprites.forEach(function (sprite) {
                return sprite.show();
            });
        };
        SpritesGroup.prototype.hide = function () {
            this.sprites.forEach(function (sprite) {
                return sprite.hide();
            });
        };
        SpritesGroup.prototype.toggle = function () {
            this.sprites.forEach(function (sprite) {
                return sprite.toggle();
            });
        };
        return SpritesGroup;
    }();
    exports.SpritesGroup = SpritesGroup;

});
System.registerDynamic("core/src/display/sprites-group-state.class.js", [], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    Object.defineProperty(exports, "__esModule", { value: true });
    var SpritesGroupState = function () {
        function SpritesGroupState(group, sprites) {
            if (sprites === void 0) {
                sprites = [];
            }
            this.group = group;
            this.sprites = sprites;
        }
        SpritesGroupState.prototype.display = function () {
            this.group.hide();
            this.sprites.forEach(function (sprite) {
                return sprite.show();
            });
        };
        SpritesGroupState.prototype.hide = function () {
            this.group.hide();
        };
        return SpritesGroupState;
    }();
    exports.SpritesGroupState = SpritesGroupState;

});
System.registerDynamic("core/src/common/events.class.js", [], true, function ($__require, exports, module) {
    /**
     * Created by Christophe on 02/02/2017.
     */
    "use strict";

    var global = this || self,
        GLOBAL = global;
    Object.defineProperty(exports, "__esModule", { value: true });
    var Events = function () {
        function Events() {}
        return Events;
    }();
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

});
System.registerDynamic("core/src/common/status.class.js", [], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Created by Christophe on 08/03/2017.
     */
    var Status = function () {
        function Status() {}
        return Status;
    }();
    Status.VISIBILITY = "visibility";
    Status.VISIBLE = "visible";
    Status.HIDDEN = "hidden";
    exports.Status = Status;

});
System.registerDynamic("core/src/common/status-dispatcher.class.js", ["./status-subscription.class"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Created by Christophe on 08/03/2017.
     */
    var status_subscription_class_1 = $__require("./status-subscription.class");
    var StatusDispatcher = function () {
        function StatusDispatcher() {
            this._subscriptions = [];
            this._statusValues = {};
        }
        StatusDispatcher.prototype.setStatus = function (statusName, value) {
            var _this = this;
            this._subscriptions.forEach(function (subscription) {
                if (subscription.statusName === statusName && value != _this._statusValues[statusName]) {
                    subscription.call(value);
                }
            });
            this._statusValues[statusName] = value;
        };
        StatusDispatcher.prototype.subscribe = function (statusName, callback) {
            var subscription = new status_subscription_class_1.StatusSubscription(statusName, callback, this);
            if (this._statusValues[statusName]) {
                subscription.call(this._statusValues[statusName]);
            }
            this._subscriptions.push(subscription);
            return subscription;
        };
        StatusDispatcher.prototype.deleteSubscription = function (subscription) {
            var index = this._subscriptions.indexOf(subscription);
            if (index !== -1) {
                this._subscriptions.splice(index, 1);
            }
        };
        return StatusDispatcher;
    }();
    exports.StatusDispatcher = StatusDispatcher;

});
System.registerDynamic("core/src/common/status-subscription.class.js", [], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    Object.defineProperty(exports, "__esModule", { value: true });
    var StatusSubscription = function () {
        function StatusSubscription(statusName, _callback, _dispatcher) {
            this.statusName = statusName;
            this._callback = _callback;
            this._dispatcher = _dispatcher;
        }
        StatusSubscription.prototype.call = function (value) {
            this._callback(value);
        };
        StatusSubscription.prototype.unsubscribe = function () {
            this._dispatcher.deleteSubscription(this);
        };
        return StatusSubscription;
    }();
    exports.StatusSubscription = StatusSubscription;

});
System.registerDynamic("core/src/common/time-utils.class.js", [], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    Object.defineProperty(exports, "__esModule", { value: true });
    // tout ça est à voir plus tard
    var TimeUtils = function () {
        function TimeUtils() {}
        TimeUtils.setInterval = function (time, iterations) {
            if (time === void 0) {
                time = 0;
            }
            if (iterations === void 0) {
                iterations = 1;
            }
            return null;
        };
        return TimeUtils;
    }();
    exports.TimeUtils = TimeUtils;

});
System.registerDynamic("core/src/common/event-listener.class.js", [], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    Object.defineProperty(exports, "__esModule", { value: true });
    var EventListener = function () {
        function EventListener(eventName, _callback, _dispatcher) {
            this.eventName = eventName;
            this._callback = _callback;
            this._dispatcher = _dispatcher;
        }
        EventListener.prototype.call = function (param) {
            this._callback(param);
        };
        EventListener.prototype.stoplisten = function () {
            this._dispatcher.deleteListener(this);
        };
        return EventListener;
    }();
    exports.EventListener = EventListener;

});
System.registerDynamic("core/src/common/event-dispatcher.class.js", ["./event-listener.class"], true, function ($__require, exports, module) {
    "use strict";

    var global = this || self,
        GLOBAL = global;
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Created by Christophe on 01/02/2017.
     */
    var event_listener_class_1 = $__require("./event-listener.class");
    var EventDispatcher = function () {
        function EventDispatcher() {
            this._listeners = [];
        }
        EventDispatcher.prototype.dispatchEvent = function (eventType, param) {
            if (param === void 0) {
                param = null;
            }
            this._listeners.forEach(function (subscription) {
                if (subscription.eventName === eventType) {
                    subscription.call(param);
                }
            });
        };
        EventDispatcher.prototype.listen = function (eventName, callback) {
            var listener = new event_listener_class_1.EventListener(eventName, callback, this);
            this._listeners.push(listener);
            return listener;
        };
        EventDispatcher.prototype.deleteListener = function (listener) {
            var index = this._listeners.indexOf(listener);
            if (index !== -1) {
                this._listeners.splice(index, 1);
            }
        };
        return EventDispatcher;
    }();
    exports.EventDispatcher = EventDispatcher;

});
System.registerDynamic("core/index.js", ["./src/modules/lcd-displayer/lcd-displayer.class", "./src/modules/lcd-displayer/seg7-displayer.class", "./src/gamelogic/clock.class", "./src/gamelogic/condition.class", "./src/files/file.class", "./src/gamelogic/control.class", "./src/gamelogic/variable.class", "./src/gamelogic/conditions/condition-types.class", "./src/gamelogic/conditions/sequence-condition.class", "./src/gamelogic/conditions/sequence-conditions/onstate-sequence-condition.class", "./src/graphs/graph.class", "./src/graphs/graph-link.class", "./src/graphs/graph-node.class", "./src/sound/sound.class", "./src/spriteslogic/animation.class", "./src/spriteslogic/sequence.class", "./src/triggers/base-trigger.class", "./src/triggers/time-trigger.class", "./src/triggers/trigger.class", "./src/triggers/sprites/sprites-collision-trigger.class", "./src/display/conditional-sprites-group-state.class", "./src/display/conditional-sprites-group-state-set.class", "./src/display/control-sprite.class", "./src/display/display-element.class", "./src/display/image-display-element", "./src/display/sprite.class", "./src/display/sprites-group.class", "./src/display/sprites-group-state.class", "./src/common/event-listener.class", "./src/common/events.class", "./src/common/status.class", "./src/common/status-dispatcher.class", "./src/common/status-subscription.class", "./src/common/time-utils.class", "./src/common/event-dispatcher.class"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  var lcd_displayer_class_1 = $__require("./src/modules/lcd-displayer/lcd-displayer.class");
  exports.LcdDisplayer = lcd_displayer_class_1.LcdDisplayer;
  var seg7_displayer_class_1 = $__require("./src/modules/lcd-displayer/seg7-displayer.class");
  exports.Seg7Displayer = seg7_displayer_class_1.Seg7Displayer;
  var clock_class_1 = $__require("./src/gamelogic/clock.class");
  exports.Clock = clock_class_1.Clock;
  var condition_class_1 = $__require("./src/gamelogic/condition.class");
  exports.Condition = condition_class_1.Condition;
  var file_class_1 = $__require("./src/files/file.class");
  exports.File = file_class_1.File;
  var control_class_1 = $__require("./src/gamelogic/control.class");
  exports.Control = control_class_1.Control;
  var variable_class_1 = $__require("./src/gamelogic/variable.class");
  exports.Variable = variable_class_1.Variable;
  var condition_types_class_1 = $__require("./src/gamelogic/conditions/condition-types.class");
  exports.ConditionTypes = condition_types_class_1.ConditionTypes;
  var sequence_condition_class_1 = $__require("./src/gamelogic/conditions/sequence-condition.class");
  exports.SequenceCondition = sequence_condition_class_1.SequenceCondition;
  var onstate_sequence_condition_class_1 = $__require("./src/gamelogic/conditions/sequence-conditions/onstate-sequence-condition.class");
  exports.OnStateSequenceCondition = onstate_sequence_condition_class_1.OnStateSequenceCondition;
  var graph_class_1 = $__require("./src/graphs/graph.class");
  exports.Graph = graph_class_1.Graph;
  var graph_link_class_1 = $__require("./src/graphs/graph-link.class");
  exports.GraphLink = graph_link_class_1.GraphLink;
  var graph_node_class_1 = $__require("./src/graphs/graph-node.class");
  exports.GraphNode = graph_node_class_1.GraphNode;
  var sound_class_1 = $__require("./src/sound/sound.class");
  exports.Sound = sound_class_1.Sound;
  var animation_class_1 = $__require("./src/spriteslogic/animation.class");
  exports.Animation = animation_class_1.Animation;
  var sequence_class_1 = $__require("./src/spriteslogic/sequence.class");
  exports.Sequence = sequence_class_1.Sequence;
  var base_trigger_class_1 = $__require("./src/triggers/base-trigger.class");
  exports.BaseTrigger = base_trigger_class_1.BaseTrigger;
  var time_trigger_class_1 = $__require("./src/triggers/time-trigger.class");
  exports.TimeTrigger = time_trigger_class_1.TimeTrigger;
  var trigger_class_1 = $__require("./src/triggers/trigger.class");
  exports.Trigger = trigger_class_1.Trigger;
  var sprites_collision_trigger_class_1 = $__require("./src/triggers/sprites/sprites-collision-trigger.class");
  exports.SpritesCollisionTrigger = sprites_collision_trigger_class_1.SpritesCollisionTrigger;
  var conditional_sprites_group_state_class_1 = $__require("./src/display/conditional-sprites-group-state.class");
  exports.ConditionalSpritesGroupState = conditional_sprites_group_state_class_1.ConditionalSpritesGroupState;
  var conditional_sprites_group_state_set_class_1 = $__require("./src/display/conditional-sprites-group-state-set.class");
  exports.ConditionalSpritesGroupStateSet = conditional_sprites_group_state_set_class_1.ConditionalSpritesGroupStateSet;
  var control_sprite_class_1 = $__require("./src/display/control-sprite.class");
  exports.ControlSprite = control_sprite_class_1.ControlSprite;
  var display_element_class_1 = $__require("./src/display/display-element.class");
  exports.DisplayElement = display_element_class_1.DisplayElement;
  var image_display_element_1 = $__require("./src/display/image-display-element");
  exports.ImageDisplayElement = image_display_element_1.ImageDisplayElement;
  var sprite_class_1 = $__require("./src/display/sprite.class");
  exports.Sprite = sprite_class_1.Sprite;
  var sprites_group_class_1 = $__require("./src/display/sprites-group.class");
  exports.SpritesGroup = sprites_group_class_1.SpritesGroup;
  var sprites_group_state_class_1 = $__require("./src/display/sprites-group-state.class");
  exports.SpritesGroupState = sprites_group_state_class_1.SpritesGroupState;
  var event_listener_class_1 = $__require("./src/common/event-listener.class");
  exports.EventListener = event_listener_class_1.EventListener;
  var events_class_1 = $__require("./src/common/events.class");
  exports.Events = events_class_1.Events;
  var status_class_1 = $__require("./src/common/status.class");
  exports.Status = status_class_1.Status;
  var status_dispatcher_class_1 = $__require("./src/common/status-dispatcher.class");
  exports.StatusDispatcher = status_dispatcher_class_1.StatusDispatcher;
  var status_subscription_class_1 = $__require("./src/common/status-subscription.class");
  exports.StatusSubscription = status_subscription_class_1.StatusSubscription;
  var time_utils_class_1 = $__require("./src/common/time-utils.class");
  exports.TimeUtils = time_utils_class_1.TimeUtils;
  var event_dispatcher_class_1 = $__require("./src/common/event-dispatcher.class");
  exports.EventDispatcher = event_dispatcher_class_1.EventDispatcher;

});
//# sourceMappingURL=core.umd.js.map