(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Blip"] = factory();
	else
		root["Blip"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 46);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(21), __webpack_require__(22)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, status_subscription_class_1, event_listener_class_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Dispatcher = /** @class */ (function () {
        function Dispatcher() {
            // pour le status dispatcher
            this.subscriptions = [];
            this.statusValues = {};
            // pour l'event dispatcher
            this.listeners = [];
        }
        // méthodes originales du status dispatcher
        Dispatcher.prototype.setStatus = function (statusName, value) {
            var _this = this;
            this.subscriptions.forEach(function (subscription) {
                if (subscription.statusName === statusName && value != _this.statusValues[statusName]) {
                    subscription.call(value);
                }
            });
            this.statusValues[statusName] = value;
        };
        Dispatcher.prototype.getStatus = function (statusName) {
            for (var _i = 0, _a = this.subscriptions; _i < _a.length; _i++) {
                var subscription = _a[_i];
                if (subscription.statusName === statusName) {
                    return this.statusValues[statusName];
                }
            }
        };
        Dispatcher.prototype.subscribe = function (statusName, callback) {
            var subscription = new status_subscription_class_1.StatusSubscription(statusName, callback, this);
            if (this.statusValues[statusName]) {
                subscription.call(this.statusValues[statusName]);
            }
            this.subscriptions.push(subscription);
            return subscription;
        };
        Dispatcher.prototype.deleteSubscription = function (subscription) {
            var index = this.subscriptions.indexOf(subscription);
            if (index !== -1) {
                this.subscriptions.splice(index, 1);
            }
        };
        // méthodes originales de l'event dispatcher
        Dispatcher.prototype.dispatchEvent = function (eventType, param) {
            if (param === void 0) { param = null; }
            this.listeners.forEach(function (subscription) {
                if (subscription.eventName === eventType) {
                    subscription.call(param);
                }
            });
        };
        Dispatcher.prototype.listen = function (eventName, callback) {
            var listener = new event_listener_class_1.EventListener(eventName, callback, this);
            this.listeners.push(listener);
            return listener;
        };
        Dispatcher.prototype.deleteListener = function (listener) {
            var index = this.listeners.indexOf(listener);
            if (index !== -1) {
                this.listeners.splice(index, 1);
            }
        };
        Dispatcher.prototype.clearListeners = function () {
            this.listeners = [];
        };
        return Dispatcher;
    }());
    exports.Dispatcher = Dispatcher;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=dispatcher.class.js.map

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Created by Christophe on 02/02/2017.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Events = /** @class */ (function () {
        function Events() {
        }
        Events.SEQUENCE_ENTER_STATE = "event_enterstate";
        Events.ANIMATION_ITERATION_END = "animation_iteration_end";
        Events.ANIMATION_END = "animation_end";
        Events.END_PLAYING = "end_playing";
        Events.CLOCK_PERIOD = "clock_period";
        Events.CONTROL_UP = "control_up";
        Events.CONTROL_DOWN = "control_down";
        Events.VARIABLE_CHANGE = "variable_change";
        Events.DISPLAYED = "displayed";
        Events.HIDDEN = "hidden";
        Events.TRIGGER_ACTION = "trigger_action";
        return Events;
    }());
    exports.Events = Events;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=events.class.js.map

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(48)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, result_unit_class_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ParseUnit = /** @class */ (function () {
        function ParseUnit() {
            // for parsing
            this._pointer = 0;
            this._lastPointer = 0;
            this.resultUnits = [];
        }
        Object.defineProperty(ParseUnit.prototype, "pointer", {
            set: function (value) {
                if (this._pointer === undefined) {
                    this.startIndex = value;
                }
                else {
                    this.startIndex = 0;
                }
                this._pointer = value;
            },
            enumerable: true,
            configurable: true
        });
        ParseUnit.prototype.evaluate = function (newPointer) {
            if (newPointer === void 0) { newPointer = null; }
            if (newPointer) {
                this._pointer = newPointer;
            }
            if (this.closingExpression && this.parent) {
                var closingResult = this.evaluateSingleExpression(this.closingExpression);
                if (closingResult) {
                    this._lastPointer = this._pointer;
                    this._pointer += closingResult[0].length;
                    if (this.resultUnits) {
                        this.parent.resultUnits[this.parent.resultUnits.length - 1].endIndex = this._pointer - 1;
                    }
                    return this.parent.evaluate(this._pointer);
                }
            }
            for (var assertionName in this.assertions) {
                var res = this.evaluateGroup(this.assertions[assertionName]);
                if (this.assertions.hasOwnProperty(assertionName) && res) {
                    var resultUnit = new result_unit_class_1.ResultUnit();
                    resultUnit.startIndex = this._lastPointer;
                    resultUnit.endIndex = this._pointer;
                    resultUnit.type = assertionName;
                    resultUnit.results = res;
                    this.resultUnits.push(resultUnit);
                    if (this.parent) {
                        this.parent.resultUnits[this.parent.resultUnits.length - 1].children.push(resultUnit);
                    }
                    if (this.assertions[assertionName].next) {
                        //console.log("->", assertionName);
                        var unit = new this.assertions[assertionName].next();
                        unit.code = this.code;
                        unit.parent = this;
                        unit.pointer = this._pointer;
                        return unit.evaluate();
                    }
                    else {
                        //console.log("<->", assertionName);
                        return this.evaluate(this._pointer);
                    }
                }
            }
            if (this.parent) {
                //console.log("<-");
                if (this.resultUnits) {
                    this.parent.resultUnits[this.parent.resultUnits.length - 1].endIndex = this._pointer - 1;
                }
                return this.parent.evaluate(this._pointer);
            }
            else {
                console.log("EOP");
                return this.resultUnits;
            }
        };
        ParseUnit.prototype.evaluateSingleExpression = function (exp) {
            return this.evaluateExpression(this.code.substring(this._pointer), exp);
        };
        ParseUnit.prototype.evaluateGroup = function (group) {
            var results = {};
            var startPointer = this._pointer;
            var _loop_1 = function (exp) {
                var evaluation = this_1.evaluateExpression(this_1.code.substring(this_1._pointer), exp.expression);
                if (!evaluation) {
                    this_1._pointer = startPointer;
                    return { value: null };
                }
                else {
                    if (exp.values) {
                        exp.values.forEach(function (value, index) {
                            results[value] = evaluation[index + 1];
                        });
                    }
                    this_1._lastPointer = this_1._pointer;
                    this_1._pointer += evaluation[0].length;
                }
            };
            var this_1 = this;
            for (var _i = 0, _a = group.assertions; _i < _a.length; _i++) {
                var exp = _a[_i];
                var state_1 = _loop_1(exp);
                if (typeof state_1 === "object")
                    return state_1.value;
            }
            return results;
        };
        ParseUnit.prototype.evaluateExpression = function (partialCode, expression) {
            return expression.exec(partialCode);
        };
        return ParseUnit;
    }());
    exports.ParseUnit = ParseUnit;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=parse-unit.class.js.map

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Created by Christophe on 28/03/2017.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Utils = /** @class */ (function () {
        function Utils() {
        }
        Utils.verifyAndExtends = function (targetObject, defaults) {
            var retObject = {};
            for (var id in targetObject) {
                if (targetObject.hasOwnProperty(id)) {
                    if (defaults[id] === undefined) {
                        console.error("Parse object error !");
                        return null;
                    }
                }
            }
            for (var id in defaults) {
                if (defaults.hasOwnProperty(id)) {
                    if (!targetObject[id]) {
                        retObject[id] = defaults[id];
                    }
                    else {
                        retObject[id] = targetObject[id];
                    }
                }
            }
            return retObject;
        };
        return Utils;
    }());
    exports.Utils = Utils;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=utils.class.js.map

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Created by Christophe on 01/02/2017.
     */
    var File = /** @class */ (function () {
        function File(path) {
            this.path = path;
        }
        return File;
    }());
    exports.File = File;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=file.class.js.map

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(0), __webpack_require__(1)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, dispatcher_class_1, events_class_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var BaseTrigger = /** @class */ (function (_super) {
        __extends(BaseTrigger, _super);
        function BaseTrigger() {
            var _this = _super.call(this) || this;
            _this._enabled = false;
            return _this;
        }
        BaseTrigger.prototype.action = function (arg) {
            if (arg === void 0) { arg = null; }
            this.dispatchEvent(events_class_1.Events.TRIGGER_ACTION, arg);
        };
        BaseTrigger.prototype.enable = function () {
            this._enabled = true;
        };
        BaseTrigger.prototype.disable = function () {
            this._enabled = false;
        };
        Object.defineProperty(BaseTrigger.prototype, "enabled", {
            get: function () {
                return this._enabled;
            },
            enumerable: true,
            configurable: true
        });
        BaseTrigger.prototype.executeAction = function (actionName, args) {
            switch (actionName) {
                case "enable":
                    this.enable();
                    break;
                case "disable":
                    this.disable();
                    break;
            }
        };
        return BaseTrigger;
    }(dispatcher_class_1.Dispatcher));
    exports.BaseTrigger = BaseTrigger;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=base-trigger.class.js.map

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(15), __webpack_require__(0), __webpack_require__(1), __webpack_require__(3), __webpack_require__(4), __webpack_require__(18), __webpack_require__(40)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, control_sprite_class_1, dispatcher_class_1, events_class_1, utils_class_1, file_class_1, control_down_trigger_class_1, control_up_trigger_class_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ControlZone = /** @class */ (function () {
        function ControlZone(x, y, width, height) {
            this.x = x;
            this.y = y;
            this.width = width;
            this.height = height;
        }
        return ControlZone;
    }());
    exports.ControlZone = ControlZone;
    var Control = /** @class */ (function (_super) {
        __extends(Control, _super);
        function Control(sprite, zone, bindedKey) {
            if (zone === void 0) { zone = null; }
            if (bindedKey === void 0) { bindedKey = null; }
            var _this = _super.call(this) || this;
            _this.sprite = sprite;
            _this.zone = zone;
            _this.bindedKey = bindedKey;
            var self = _this;
            _this.upHandler = function (evt) {
                self.checkZoneEvent(events_class_1.Events.CONTROL_UP, evt);
            };
            _this.downHandler = function (evt) {
                self.checkZoneEvent(events_class_1.Events.CONTROL_DOWN, evt);
            };
            _this.keyDownHandler = function (evt) {
                if (_this.bindedKey === evt.key) {
                    _this.dispatchEvent(events_class_1.Events.CONTROL_DOWN);
                }
            };
            _this.keyUpHandler = function (evt) {
                if (_this.bindedKey === evt.key) {
                    _this.dispatchEvent(events_class_1.Events.CONTROL_UP);
                }
            };
            setTimeout(function () {
                _this.enable();
            });
            return _this;
        }
        Control.prototype.setZone = function (x, y, width, height) {
            this.zone = new ControlZone(x, y, width, height);
        };
        Control.prototype.checkZoneEvent = function (eventName, event) {
            if (this.zone) {
                var x = event.offsetX;
                var y = event.offsetY;
                if (x >= this.zone.x
                    &&
                        x <= this.zone.x + this.zone.width
                    &&
                        y >= this.zone.y
                    &&
                        y <= this.zone.y + this.zone.height) {
                    this.dispatchEvent(eventName);
                }
            }
            else {
                this.dispatchEvent(eventName);
            }
        };
        Control.prototype._onMouseDown = function (evt) {
            this.checkZoneEvent(events_class_1.Events.CONTROL_DOWN, evt);
        };
        Control.prototype._onMouseUp = function (evt) {
            this.checkZoneEvent(events_class_1.Events.CONTROL_UP, evt);
        };
        Control.fromData = function (data) {
            var defaults = {
                file: "",
                x: 0,
                y: 0,
                scale: 1
            };
            var spriteParams = utils_class_1.Utils.verifyAndExtends(data["sprite"], defaults);
            var file = new file_class_1.File(spriteParams["file"]);
            var controlSprite = new control_sprite_class_1.ControlSprite(file, spriteParams["x"], spriteParams["y"], spriteParams["scale"]);
            if (!data["zones"] || Object.keys(data["zones"]).length === 0) {
                return new Control(controlSprite, null, data["key"]);
            }
            else if (data["zones"]) {
                var multiControls = {};
                for (var zoneId in data["zones"]) {
                    if (data["zones"].hasOwnProperty(zoneId)) {
                        var zoneDatas = data["zones"][zoneId];
                        var zone = new ControlZone(zoneDatas["x"], zoneDatas["y"], zoneDatas["width"], zoneDatas["height"]);
                        multiControls[zoneId] = new Control(controlSprite, zone, zoneDatas["key"]);
                    }
                }
                return multiControls;
            }
        };
        Control.prototype.enable = function () {
            this.sprite.DOMElement.addEventListener("mousedown", this.downHandler);
            this.sprite.DOMElement.addEventListener("mouseup", this.upHandler);
            document.addEventListener("keydown", this.keyDownHandler);
            document.addEventListener("keyup", this.keyUpHandler);
        };
        Control.prototype.disable = function () {
            this.sprite.DOMElement.removeEventListener("mousedown", this.downHandler);
            this.sprite.DOMElement.removeEventListener("mouseup", this.upHandler);
            document.removeEventListener("keydown", this.keyDownHandler);
            document.removeEventListener("keyup", this.keyUpHandler);
        };
        Control.prototype.executeAction = function (actionName, args) {
            switch (actionName) {
                case "enable":
                    this.enable();
                    break;
                case "disable":
                    this.disable();
                    break;
            }
        };
        Control.prototype.getTrigger = function (name) {
            switch (name) {
                case "down":
                    return new control_down_trigger_class_1.ControlDownTrigger(this);
                case "up":
                    return new control_up_trigger_class_1.ControlUpTrigger(this);
            }
        };
        return Control;
    }(dispatcher_class_1.Dispatcher));
    exports.Control = Control;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=control.class.js.map

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(8)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, display_element_class_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /*const Draggable = require("draggable");
    const TweenLite = require("TweenLite");*/
    var ImageDisplayElement = /** @class */ (function (_super) {
        __extends(ImageDisplayElement, _super);
        function ImageDisplayElement(file, x, y, scale) {
            if (scale === void 0) { scale = 1; }
            var _this = _super.call(this, x, y, scale) || this;
            _this.file = file;
            return _this;
        }
        ImageDisplayElement.prototype.getDOMElement = function () {
            var div = _super.prototype.getDOMElement.call(this);
            var image = document.createElement("img");
            image["src"] = this.file.path;
            div.appendChild(image);
            var positionDisplayer = document.createElement("div");
            positionDisplayer.classList.add("position-displayer");
            div.appendChild(positionDisplayer);
            this.positionDisplayer = positionDisplayer;
            /*let draggable:any = Draggable.createBasicSprite(div, {
                onDrag: function () {
                    positionDisplayer.innerHTML = "(" + this.x + "," + this.y + ")";
                }
            });*/
            return div;
        };
        return ImageDisplayElement;
    }(display_element_class_1.DisplayElement));
    exports.ImageDisplayElement = ImageDisplayElement;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=image-display-element.js.map

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(0)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, dispatcher_class_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DisplayElement = /** @class */ (function (_super) {
        __extends(DisplayElement, _super);
        function DisplayElement(x, y, scale) {
            if (scale === void 0) { scale = 1; }
            var _this = _super.call(this) || this;
            _this.x = x;
            _this.y = y;
            _this.scale = scale;
            return _this;
        }
        DisplayElement.prototype.getDOMElement = function () {
            if (this._DOMElement) {
                return this._DOMElement;
            }
            else {
                var div = document.createElement("div");
                div.className = "game-element";
                div.style.left = this.x + "px";
                div.style.top = this.y + "px";
                div.style.transform = "scale(" + this.scale + ")";
                this._DOMElement = div;
                return div;
            }
        };
        DisplayElement.prototype.updateTransforms = function () {
            this._DOMElement.style.left = this.x + "px";
            this._DOMElement.style.top = this.y + "px";
            this._DOMElement.style.transform = "scale(" + this.scale + ")";
        };
        DisplayElement.prototype.displayInDOMElement = function (container) {
            this._DOMElement = this.getDOMElement();
            container.appendChild(this._DOMElement);
            return this._DOMElement;
        };
        DisplayElement.prototype.displayInDocumentById = function (id) {
            this._DOMElement = this.getDOMElement();
            var container = document.getElementById(id);
            container.appendChild(this._DOMElement);
        };
        return DisplayElement;
    }(dispatcher_class_1.Dispatcher));
    exports.DisplayElement = DisplayElement;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=display-element.class.js.map

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(0), __webpack_require__(1)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, dispatcher_class_1, events_class_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Clock = /** @class */ (function (_super) {
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
        Clock.prototype.executeAction = function (actionName, args) {
            switch (actionName) {
                case "start":
                    this.start();
                    break;
                case "stop":
                    this.stop();
                    break;
            }
        };
        return Clock;
    }(dispatcher_class_1.Dispatcher));
    exports.Clock = Clock;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=clock.class.js.map

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(0), __webpack_require__(1)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, dispatcher_class_1, events_class_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Sequence = /** @class */ (function (_super) {
        __extends(Sequence, _super);
        function Sequence(group, states, loopType) {
            if (states === void 0) { states = []; }
            if (loopType === void 0) { loopType = ""; }
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
            this.states.forEach(function (state) { return state.hide(); });
        };
        Sequence.prototype.displayAtIndex = function (index, forced) {
            //if (!this._isIndexValid(index)) return false;
            if (forced === void 0) { forced = false; }
            if (!forced && (index <= -1 || index >= this.states.length)) {
                return false;
            }
            if (index <= -1) {
                if (this.loopType === Sequence.LOOP_TYPE_CIRCLE) {
                    this.reverse();
                    this.displayAtIndex(1);
                }
                else if (this.loopType === Sequence.LOOP_TYPE_RESET) {
                    this.displayAtIndex(this.states.length - 1);
                }
                return false;
            }
            else if (index >= this.states.length) {
                if (this.loopType === Sequence.LOOP_TYPE_CIRCLE) {
                    this.reverse();
                    this.displayAtIndex(this.states.length - 2);
                }
                else if (this.loopType === Sequence.LOOP_TYPE_RESET) {
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
            if (forced === void 0) { forced = false; }
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
            if (forced === void 0) { forced = false; }
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
        Sequence.prototype.executeAction = function (actionName, args) {
            switch (actionName) {
                case "next":
                    this.displayNext();
                    break;
                case "previous":
                    this.displayPrevious();
                    break;
                case "index":
                    this.displayAtIndex(+args[0]);
                    break;
            }
        };
        // 1 2 3 4 3 2 1 2 3 4
        Sequence.LOOP_TYPE_CIRCLE = "circle";
        // 1 2 3 4 1 2 3 4 1 2 3 4
        Sequence.LOOP_TYPE_RESET = "reset";
        return Sequence;
    }(dispatcher_class_1.Dispatcher));
    exports.Sequence = Sequence;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=sequence.class.js.map

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(0)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, dispatcher_class_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GraphNode = /** @class */ (function (_super) {
        __extends(GraphNode, _super);
        function GraphNode(state, links) {
            if (links === void 0) { links = []; }
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
            this.links.forEach(function (link) { return link.enableTrigger(callback); });
        };
        GraphNode.prototype.disable = function () {
            this.links.forEach(function (link) { return link.disableTrigger(); });
        };
        GraphNode.prototype.getProperty = function (propertyName) {
            switch (propertyName) {
                case "state":
                    return this.state;
            }
        };
        return GraphNode;
    }(dispatcher_class_1.Dispatcher));
    exports.GraphNode = GraphNode;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=graph-node.class.js.map

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(0)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, dispatcher_class_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Graph = /** @class */ (function (_super) {
        __extends(Graph, _super);
        function Graph(nodes) {
            if (nodes === void 0) { nodes = null; }
            var _this = _super.call(this) || this;
            _this.nodes = nodes;
            return _this;
        }
        Graph.prototype.hide = function () {
            for (var id in this.nodes) {
                this.nodes[id].hide();
            }
        };
        Graph.prototype.setCurrentNodeIndex = function (index) {
            if (index === void 0) { index = 0; }
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
                setTimeout(function () {
                    _this.setNodeAsCurrent(newNode);
                });
            });
        };
        Graph.prototype.getNode = function (id) {
            return this.nodes[id];
        };
        Graph.prototype.executeAction = function (actionName, args) {
            switch (actionName) {
                case "setnode":
                    this.setCurrentNodeIndex(args[0]);
                    break;
            }
        };
        Graph.prototype.getProperty = function (propertyName) {
            switch (propertyName) {
                case "currentNodeId":
                    return this._currentNode.id;
                case "currentNode":
                    return this._currentNode;
            }
        };
        return Graph;
    }(dispatcher_class_1.Dispatcher));
    exports.Graph = Graph;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=graph.class.js.map

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(14), __webpack_require__(4), __webpack_require__(15), __webpack_require__(29)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, sprite_class_1, file_class_1, control_sprite_class_1, decoration_class_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SpriteDefinition = /** @class */ (function () {
        function SpriteDefinition(definition) {
            this.filePath = definition.children[0].results["value"];
            this.x = +definition.children[1].results["value"];
            this.y = +definition.children[2].results["value"];
        }
        SpriteDefinition.prototype.createBasicSprite = function (x, y) {
            var file = new file_class_1.File(this.filePath);
            return new sprite_class_1.Sprite(file, this.x + x, this.y + y);
        };
        SpriteDefinition.prototype.createControlSprite = function () {
            var file = new file_class_1.File(this.filePath);
            return new control_sprite_class_1.ControlSprite(file, this.x, this.y);
        };
        SpriteDefinition.prototype.createDecorationSprite = function () {
            var file = new file_class_1.File(this.filePath);
            return new decoration_class_1.Decoration(file, this.x, this.y);
        };
        return SpriteDefinition;
    }());
    exports.SpriteDefinition = SpriteDefinition;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=sprite-definition.class.js.map

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(7), __webpack_require__(3), __webpack_require__(4), __webpack_require__(1), __webpack_require__(28)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, image_display_element_1, utils_class_1, file_class_1, events_class_1, visibility_status_class_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Sprite = /** @class */ (function (_super) {
        __extends(Sprite, _super);
        /**
         * The sprite is the basic display unit in Blip
         * @param file
         * @param x
         * @param y
         * @param scale
         * @param initVisibility
         */
        function Sprite(file, x, y, scale, initVisibility) {
            if (scale === void 0) { scale = 1; }
            if (initVisibility === void 0) { initVisibility = false; }
            var _this = _super.call(this, file, x, y, scale) || this;
            _this.visibilities = [];
            _this.visible = initVisibility;
            _this.setStatus(visibility_status_class_1.VisibilityStatus.VISIBILITY, visibility_status_class_1.VisibilityStatus.HIDDEN);
            return _this;
        }
        Sprite.prototype.isVisible = function () {
            return this.visible;
        };
        /**
         * Create a sprite from raw datas
         * @param data
         * @returns {Sprite}
         */
        Sprite.fromData = function (data) {
            var defaults = {
                file: "",
                x: 0,
                y: 0,
                scale: 1,
                initVisibility: false
            };
            var param = utils_class_1.Utils.verifyAndExtends(data, defaults);
            var file = new file_class_1.File(param["file"]);
            return new Sprite(file, param["x"], param["y"], param["scale"], param["initVisibility"]);
        };
        /**
         * Displays the sprite in a DOM element
         * @param container - The DOM element where the sprite will be append
         * @returns {HTMLElement}
         */
        Sprite.prototype.displayInDOMElement = function (container) {
            var elem = _super.prototype.displayInDOMElement.call(this, container);
            this._DOMElement.classList.add("inactive");
            this._setVisibility();
            return elem;
        };
        /**
         * Displays the sprite in a DOM element, selected by id
         * @param id
         */
        Sprite.prototype.displayInDocumentById = function (id) {
            _super.prototype.displayInDocumentById.call(this, id);
            this._setVisibility();
        };
        /**
         * Show or hide the sprite, according to the visibility boolean variable
         * @private
         */
        Sprite.prototype._setVisibility = function () {
            if (this.visible) {
                this.show();
            }
            else {
                this.hide();
            }
        };
        /**
         * Displays the sprite and sets its status to visible
         */
        Sprite.prototype.show = function (instanceNumber) {
            if (instanceNumber === void 0) { instanceNumber = 0; }
            if (this.visibilities.length === 0) {
                this.setStatus(visibility_status_class_1.VisibilityStatus.VISIBILITY, visibility_status_class_1.VisibilityStatus.VISIBLE);
                this.dispatchEvent(events_class_1.Events.DISPLAYED);
                this._DOMElement.classList.remove("inactive");
                this._DOMElement.classList.add("active");
                this.visible = true;
            }
            if (this.visibilities.indexOf(instanceNumber) === -1) {
                this.visibilities.push(instanceNumber);
            }
        };
        /**
         * Alias to Show()
         */
        Sprite.prototype.display = function (instanceNumber) {
            if (instanceNumber === void 0) { instanceNumber = 0; }
            this.show();
        };
        /**
         * Hides the sprites, and sets its status to hidden
         */
        Sprite.prototype.hide = function (instanceNumber) {
            if (instanceNumber === void 0) { instanceNumber = 0; }
            if (this.visibilities.length === 1) {
                this.setStatus(visibility_status_class_1.VisibilityStatus.VISIBILITY, visibility_status_class_1.VisibilityStatus.HIDDEN);
                this._DOMElement.classList.add("inactive");
                this._DOMElement.classList.remove("active");
                this.visible = false;
            }
            var index = this.visibilities.indexOf(instanceNumber);
            if (index !== -1) {
                this.visibilities.splice(index, 1);
            }
        };
        /**
         * Toggles the sprite's visibility
         */
        Sprite.prototype.toggle = function () {
            if (this.visible) {
                this.hide();
            }
            else {
                this.show();
            }
        };
        Sprite.prototype.executeAction = function (actionName, args) {
            switch (actionName) {
                case "show":
                    this.show();
                    break;
                case "hide":
                    this.hide();
                    break;
            }
        };
        return Sprite;
    }(image_display_element_1.ImageDisplayElement));
    exports.Sprite = Sprite;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=sprite.class.js.map

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(7)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, image_display_element_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ControlSprite = /** @class */ (function (_super) {
        __extends(ControlSprite, _super);
        function ControlSprite(file, x, y, scale) {
            if (scale === void 0) { scale = 1; }
            return _super.call(this, file, x, y, scale) || this;
        }
        ControlSprite.prototype.getDOMElement = function () {
            var div = _super.prototype.getDOMElement.call(this);
            div.classList.add("control");
            return div;
        };
        ControlSprite.prototype.displayInDOMElement = function (container) {
            var elem = _super.prototype.displayInDOMElement.call(this, container);
            return elem;
        };
        Object.defineProperty(ControlSprite.prototype, "DOMElement", {
            get: function () {
                return this._DOMElement;
            },
            enumerable: true,
            configurable: true
        });
        return ControlSprite;
    }(image_display_element_1.ImageDisplayElement));
    exports.ControlSprite = ControlSprite;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=control-sprite.class.js.map

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(0), __webpack_require__(1), __webpack_require__(9), __webpack_require__(3)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, dispatcher_class_1, events_class_1, clock_class_1, utils_class_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Animation = /** @class */ (function (_super) {
        __extends(Animation, _super);
        function Animation(sequence, iterations, period, interruptable) {
            if (interruptable === void 0) { interruptable = true; }
            var _this = _super.call(this) || this;
            _this.sequence = sequence;
            _this.iterations = iterations;
            _this.period = period;
            _this.interruptable = interruptable;
            _this.isPlaying = false;
            return _this;
        }
        Animation.fromData = function (data, groupId, scene) {
            var defaults = {
                sequence: "",
                period: 1,
                iterations: 1,
                interruptable: false
            };
            var param = utils_class_1.Utils.verifyAndExtends(data, defaults);
            var period;
            if (typeof param.period === "number") {
                period = param.period;
            }
            else {
                period = scene.getClock(param.period);
            }
            var sequence = scene.getSequence(groupId, param.sequence);
            return new Animation(sequence, param.iterations, period, param.interruptable);
        };
        Animation.prototype.play = function () {
            var _this = this;
            var occurencesCounter;
            if (this.clockListener) {
                this.clockListener.stoplisten();
            }
            if (this.interruptable === false && this.isPlaying) {
                occurencesCounter = 0;
                return;
            }
            this.sequence.reset();
            this.sequence.displayNext(true);
            occurencesCounter = 0;
            this.isPlaying = true;
            if (this.period instanceof clock_class_1.Clock) {
                this.clockListener = this.period.listen(events_class_1.Events.CLOCK_PERIOD, function () {
                    _this.animationAction(occurencesCounter);
                });
            }
            else {
                this.animationInterval = setInterval(function () {
                    _this.animationAction(occurencesCounter);
                }, this.period * 1000);
            }
        };
        Animation.prototype.animationAction = function (occurencesCounter) {
            if (this.isPlaying === false)
                return;
            if (!this.sequence.displayNext(occurencesCounter < this.iterations - 1)) {
                this.dispatchEvent(events_class_1.Events.ANIMATION_ITERATION_END, occurencesCounter);
                occurencesCounter++;
                if (occurencesCounter >= this.iterations) {
                    clearInterval(this.animationInterval);
                    this.dispatchEvent(events_class_1.Events.ANIMATION_END);
                    this.dispatchEvent(events_class_1.Events.END_PLAYING);
                    this.isPlaying = false;
                }
                else {
                    // on repart à zéro
                    //this.sequence.resetIndex();
                    //this.sequence.displayNext(true);
                    //this.sequence.reverse();
                }
            }
        };
        Animation.prototype.stop = function () {
            if (this.period instanceof clock_class_1.Clock) {
                this.period.deleteListener(this.clockListener);
            }
            else {
                clearInterval(this.animationInterval);
            }
            this.isPlaying = false;
        };
        Animation.prototype.reset = function () {
            this.sequence.reset();
            if (this.animationInterval !== undefined) {
                clearInterval(this.animationInterval);
                this.animationInterval = undefined;
            }
            if (this.clockListener) {
                this.clockListener.stoplisten();
                this.clockListener = null;
            }
            this.isPlaying = false;
        };
        Animation.prototype.executeAction = function (actionName, args) {
            switch (actionName) {
                case "play":
                    this.play();
                    break;
            }
        };
        return Animation;
    }(dispatcher_class_1.Dispatcher));
    exports.Animation = Animation;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=animation.class.js.map

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(0)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, dispatcher_class_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GameUnitObject = /** @class */ (function (_super) {
        __extends(GameUnitObject, _super);
        function GameUnitObject(definition, objectsBank, parent, x, y) {
            if (parent === void 0) { parent = null; }
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            var _this = _super.call(this) || this;
            _this.objectsBank = objectsBank;
            _this.parent = parent;
            _this.x = x;
            _this.y = y;
            _this.sprites = {};
            _this.clocks = {};
            _this.sounds = {};
            _this.variables = {};
            _this.groups = {};
            _this.graphs = {};
            _this.triggers = {};
            _this.sequences = {};
            _this.animations = {};
            _this.states = {};
            _this.conditions = {};
            _this.objects = {};
            _this.scripts = {};
            _this.preinit(definition);
            return _this;
        }
        GameUnitObject.prototype.preinit = function (definition) {
            this.initializeObject(definition);
        };
        GameUnitObject.prototype.initializeObject = function (definition) {
            for (var id in definition.sprites) {
                this.sprites[id] = definition.sprites[id].createBasicSprite(this.x, this.y);
            }
            for (var id in definition.clocks) {
                this.clocks[id] = definition.clocks[id].create();
            }
            for (var id in definition.sounds) {
                this.sounds[id] = definition.sounds[id].create();
            }
            for (var id in definition.variables) {
                this.variables[id] = definition.variables[id].create();
            }
            for (var id in definition.groups) {
                this.groups[id] = definition.groups[id].create(this);
            }
            for (var id in definition.triggers) {
                this.triggers[id] = definition.triggers[id].create(this);
            }
            for (var id in definition.states) {
                this.states[id] = definition.states[id].create(this);
            }
            for (var id in definition.sequences) {
                this.sequences[id] = definition.sequences[id].create(this);
            }
            for (var id in definition.animations) {
                this.animations[id] = definition.animations[id].create(this, this);
            }
            for (var id in definition.objects) {
                this.objects[id] = definition.objects[id].create(this.objectsBank, this);
            }
            for (var id in definition.graphs) {
                this.graphs[id] = definition.graphs[id].create(this, this);
            }
            for (var id in definition.scripts) {
                this.scripts[id] = definition.scripts[id].create(this);
            }
            for (var id in definition.conditions) {
                this.conditions[id] = definition.conditions[id].create(this);
            }
        };
        GameUnitObject.prototype.display = function () {
            var startScript = this.scripts["start"];
            if (startScript) {
                startScript.execute();
            }
        };
        GameUnitObject.prototype.hide = function () {
            for (var id in this.sprites) {
                this.sprites[id].hide();
            }
            for (var id in this.triggers) {
                this.triggers[id].disable();
            }
            var nodeOutScript = this.scripts["nodeout"];
            if (nodeOutScript) {
                nodeOutScript.execute();
            }
        };
        GameUnitObject.prototype.getSprite = function (id) {
            return this.sprites[id] || this.parent.getSprite(id);
        };
        GameUnitObject.prototype.getClock = function (id) {
            return this.clocks[id] || this.parent.getClock(id);
        };
        GameUnitObject.prototype.getTrigger = function (id) {
            return this.triggers[id] || this.parent.getTrigger(id);
        };
        GameUnitObject.prototype.getGroup = function (id) {
            return this.groups[id] || this.parent.getGroup(id);
        };
        GameUnitObject.prototype.getControl = function (id) {
            return this.parent.getControl(id);
        };
        GameUnitObject.prototype.getGraph = function (id) {
            return this.graphs[id] || this.parent.getGraph(id);
        };
        GameUnitObject.prototype.getSequence = function (id) {
            return this.sequences[id] || this.parent.getSequence(id);
        };
        GameUnitObject.prototype.getAnimation = function (id) {
            return this.animations[id] || this.parent.getAnimation(id);
        };
        GameUnitObject.prototype.getState = function (id) {
            return this.states[id] || this.parent.getState(id);
        };
        GameUnitObject.prototype.getVariable = function (id) {
            return this.variables[id] || this.parent.getVariable(id);
        };
        GameUnitObject.prototype.getSound = function (id) {
            return this.sounds[id] || this.parent.getSound(id);
        };
        GameUnitObject.prototype.getObject = function (id) {
            return this.objects[id] || this.parent.getObject(id);
        };
        GameUnitObject.prototype.getScript = function (id) {
            return this.scripts[id] || this.parent.getScript(id);
        };
        GameUnitObject.prototype.getCondition = function (id) {
            return this.conditions[id] || this.parent.getCondition(id);
        };
        GameUnitObject.prototype.getActionable = function (type, id) {
            switch (type) {
                case "animation":
                    return this.getAnimation(id);
                case "control":
                    return this.getControl(id);
                case "clock":
                    return this.getClock(id);
                case "graph":
                    return this.getGraph(id);
                case "sequence":
                    return this.getSequence(id);
                case "sprite":
                    return this.getSprite(id);
                case "state":
                    return this.getState(id);
                case "variable":
                    return this.getVariable(id);
                case "sound":
                    return this.getSound(id);
                case "script":
                    return this.getScript(id);
                case "object":
                    return this.getObject(id);
                case "trigger":
                    return this.getTrigger(id);
            }
        };
        GameUnitObject.prototype.getGettable = function (type, id) {
            switch (type) {
                case "variable":
                    return this.getVariable(id);
                case "graph":
                    return this.getGraph(id);
            }
        };
        GameUnitObject.prototype.getTriggerable = function (type, id) {
            switch (type) {
                case "control":
                    return this.getControl(id);
            }
        };
        GameUnitObject.prototype.executeScript = function (id) {
            this.scripts[id].execute();
        };
        GameUnitObject.prototype.executeAction = function (actionName, args) {
        };
        GameUnitObject.prototype.getProperty = function (propertyName) {
            switch (propertyName) {
            }
        };
        return GameUnitObject;
    }(dispatcher_class_1.Dispatcher));
    exports.GameUnitObject = GameUnitObject;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=game-unit-object.class.js.map

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(36), __webpack_require__(1)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, control_trigger_class_1, events_class_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ControlDownTrigger = /** @class */ (function (_super) {
        __extends(ControlDownTrigger, _super);
        function ControlDownTrigger(control) {
            return _super.call(this, control, events_class_1.Events.CONTROL_DOWN) || this;
        }
        return ControlDownTrigger;
    }(control_trigger_class_1.ControlTrigger));
    exports.ControlDownTrigger = ControlDownTrigger;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=control-down-trigger.class.js.map

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(5)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, base_trigger_class_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TimeTrigger = /** @class */ (function (_super) {
        __extends(TimeTrigger, _super);
        function TimeTrigger(time) {
            var _this = _super.call(this) || this;
            _this.time = time;
            return _this;
        }
        TimeTrigger.prototype.enable = function () {
            var _this = this;
            this.timeout = setTimeout(function () {
                _this.action();
            }, this.time * 1000);
        };
        TimeTrigger.prototype.disable = function () {
            clearTimeout(this.timeout);
        };
        return TimeTrigger;
    }(base_trigger_class_1.BaseTrigger));
    exports.TimeTrigger = TimeTrigger;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=time-trigger.class.js.map

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Expressions = /** @class */ (function () {
        function Expressions() {
        }
        // template variable
        Expressions.variable = /\$[A-Za-z0-9]+/g;
        // left bracket
        Expressions.leftBracket = /\[\n*/;
        // right bracket
        Expressions.rightBracket = /\n*\]/;
        // used to split groups
        Expressions.groupSplitter = /\n+|;+/;
        // array group
        Expressions.arrayGroup = /^\[.*\]$/;
        // or
        Expressions.or = /\s*\|\s*/;
        // optional
        Expressions.optional = /\s*\*.*\*\s*/g;
        // right option
        Expressions.leftOption = /\*\n*/;
        // right option
        Expressions.rightOption = /\n*\*/;
        // content format
        Expressions.content = /([A-Za-z0-9]+)/;
        return Expressions;
    }());
    exports.Expressions = Expressions;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=expressions.class.js.map

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var StatusSubscription = /** @class */ (function () {
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
    }());
    exports.StatusSubscription = StatusSubscription;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=status-subscription.class.js.map

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var EventListener = /** @class */ (function () {
        function EventListener(eventName, callback, dispatcher) {
            this.eventName = eventName;
            this.callback = callback;
            this.dispatcher = dispatcher;
        }
        EventListener.prototype.call = function (param) {
            if (this.callback) {
                this.callback(param);
            }
        };
        EventListener.prototype.stoplisten = function () {
            this.dispatcher.deleteListener(this);
        };
        return EventListener;
    }());
    exports.EventListener = EventListener;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=event-listener.class.js.map

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(2), __webpack_require__(49), __webpack_require__(24), __webpack_require__(50)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, parse_unit_class_1, named_property_class_1, property_value_class_1, script_group_class_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TypedObject = /** @class */ (function (_super) {
        __extends(TypedObject, _super);
        function TypedObject() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.assertions = {
                typedObject: {
                    assertions: [
                        {
                            expression: /^#([A-Za-z0-9]+)\s*/,
                            values: ['type']
                        }
                    ],
                    next: named_property_class_1.NamedProperty
                },
                simplePropertyGroup: {
                    assertions: [
                        {
                            expression: /^([A-Za-z0-9]+)\s*:\s*/,
                            values: ['groupName']
                        }
                    ],
                    next: property_value_class_1.PropertyValue
                },
                scriptGroup: {
                    assertions: [
                        {
                            expression: /^@([A-Za-z0-9]+)\s*{\s*/,
                            values: ['scriptName']
                        }
                    ],
                    next: script_group_class_1.ScriptGroup
                }
            };
            _this.closingExpression = /^\s*\}\s*/;
            return _this;
        }
        return TypedObject;
    }(parse_unit_class_1.ParseUnit));
    exports.TypedObject = TypedObject;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=typed-object.class.js.map

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(2)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, parse_unit_class_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var PropertyValue = /** @class */ (function (_super) {
        __extends(PropertyValue, _super);
        function PropertyValue() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.separator = {
                expression: /^\s*,\s*|\s+/
            };
            _this.condition = {
                expression: /^(?:\s*(!?)\s*([A-Za-z0-9-]+)\s*\?\s*)?/,
                values: ["negation", "conditionId"]
            };
            _this.operand = {
                expression: /^/,
                values: []
            };
            _this.operator = {
                expression: /^(===|!==|>|>=|<|<=)\s*/,
                values: ["operator"]
            };
            _this.assertions = {
                graphLink: {
                    assertions: [
                        _this.condition,
                        {
                            expression: /^([A-Za-z0-9]+)\s*->\s*([A-Za-z0-9]+)/,
                            values: ['triggerId', 'destNode']
                        },
                        _this.separator
                    ]
                },
                string: {
                    assertions: [
                        {
                            expression: /^"([A-Za-z0-9\/._]+)"/,
                            values: ['value']
                        },
                        _this.separator
                    ]
                },
                logicalExpression: {
                    assertions: [
                        {
                            expression: /^([A-Za-z0-9.()"']+)\s*(===|!==|>={|<=|>|<)\s*([A-Za-z0-9.()"']+)(?=\s*[\n,])/,
                            values: ["operand1", "operator", "operand2"]
                        },
                        _this.separator
                    ]
                },
                selector: {
                    assertions: [
                        {
                            expression: /^([A-Za-z]+)\s*\(\s*([A-Za-z0-9_]+)\s*\)(?:\.([A-Za-z0-9.()"']+))\s*?/,
                            values: ["objectType", "objectId", "args"]
                        },
                        _this.separator
                    ]
                },
                number: {
                    assertions: [
                        {
                            expression: /^(-?[0-9]+(?:\.[0-9]*)?)/,
                            values: ['value']
                        },
                        _this.separator
                    ]
                },
                boolean: {
                    assertions: [
                        {
                            expression: /^(true|false)/,
                            values: ['value']
                        },
                        _this.separator
                    ]
                },
                free: {
                    assertions: [
                        _this.condition,
                        {
                            expression: /^(?:([A-Za-z0-9]+)(?:\s*\|\s*([A-Za-z0-9]+))?)(?=[\s+,]+)/,
                            values: ['value', 'altValue']
                        },
                        _this.separator
                    ]
                },
                typed: {
                    assertions: [
                        _this.condition,
                        {
                            expression: /^([A-Za-z]+)\(([A-Za-z0-9]+)\)/,
                            values: ['type', 'value']
                        },
                        _this.separator
                    ]
                },
            };
            return _this;
        }
        return PropertyValue;
    }(parse_unit_class_1.ParseUnit));
    exports.PropertyValue = PropertyValue;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=property-value.class.js.map

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(13), __webpack_require__(55), __webpack_require__(56), __webpack_require__(58), __webpack_require__(59), __webpack_require__(17), __webpack_require__(26), __webpack_require__(60), __webpack_require__(61), __webpack_require__(32), __webpack_require__(33), __webpack_require__(30), __webpack_require__(37), __webpack_require__(65)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, sprite_definition_class_1, clock_definition_class_1, group_definition_class_1, sound_definition_class_1, variable_definition_class_1, game_unit_object_class_1, graph_definition_class_1, trigger_definition_class_1, game_object_reference_class_1, sequence_definition_class_1, animation_definition_class_1, group_state_definition_class_1, script_definition_class_1, condition_definition_class_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GameObjectDefinition = /** @class */ (function () {
        function GameObjectDefinition(definition) {
            var _this = this;
            this.sprites = {};
            this.clocks = {};
            this.groups = {};
            this.sounds = {};
            this.variables = {};
            this.graphs = {};
            this.triggers = {};
            this.sequences = {};
            this.animations = {};
            this.states = {};
            this.conditions = {};
            this.objects = {};
            this.scripts = {};
            definition.getResult("bracketsGroup/typedObject@type=sprite/simplePropsGroup").forEach(function (definition) {
                _this.sprites[definition.results["groupName"]] = new sprite_definition_class_1.SpriteDefinition(definition);
            });
            definition.getResult("bracketsGroup/typedObject@type=clock/simplePropsGroup").forEach(function (definition) {
                _this.clocks[definition.results["groupName"]] = new clock_definition_class_1.ClockDefinition(definition);
            });
            definition.getResult("bracketsGroup/typedObject@type=group/bracketsGroup").forEach(function (definition) {
                _this.groups[definition.results["groupName"]] = new group_definition_class_1.GroupDefinition(definition);
            });
            definition.getResult("bracketsGroup/typedObject@type=sound/simplePropsGroup").forEach(function (definition) {
                _this.sounds[definition.results["groupName"]] = new sound_definition_class_1.SoundDefinition(definition);
            });
            definition.getResult("bracketsGroup/typedObject@type=variable/simplePropsGroup").forEach(function (definition) {
                _this.variables[definition.results["groupName"]] = new variable_definition_class_1.VariableDefinition(definition);
            });
            definition.getResult("bracketsGroup/typedObject@type=trigger/simplePropsGroup").forEach(function (definition) {
                _this.triggers[definition.results["groupName"]] = new trigger_definition_class_1.TriggerDefinition(definition);
            });
            definition.getResult("bracketsGroup/typedObject@type=condition/simplePropsGroup").forEach(function (definition) {
                _this.conditions[definition.results["groupName"]] = new condition_definition_class_1.ConditionDefinition(definition);
            });
            definition.getResult("bracketsGroup/typedObject@type=state/simplePropsGroup").forEach(function (definition) {
                _this.states[definition.results["groupName"]] = new group_state_definition_class_1.GroupStateDefinition(definition);
            });
            definition.getResult("bracketsGroup/typedObject@type=sequence/simplePropsGroup").forEach(function (definition) {
                _this.sequences[definition.results["groupName"]] = new sequence_definition_class_1.SequenceDefinition(definition);
            });
            definition.getResult("bracketsGroup/typedObject@type=animation/simplePropsGroup").forEach(function (definition) {
                _this.animations[definition.results["groupName"]] = new animation_definition_class_1.AnimationDefinition(definition);
            });
            definition.getResult("bracketsGroup/scriptGroup").forEach(function (script) {
                _this.scripts[script.results["scriptName"]] = new script_definition_class_1.ScriptDefinition(script);
            });
            definition.getResult("bracketsGroup/typedObject@type=object/simplePropsGroup").forEach(function (definition) {
                _this.objects[definition.results["groupName"]] = new game_object_reference_class_1.GameObjectReference(definition);
            });
            definition.getResult("bracketsGroup/typedObject@type=graph/bracketsGroup").forEach(function (definition) {
                _this.graphs[definition.results["groupName"]] = new graph_definition_class_1.GraphDefinition(definition);
            });
        }
        GameObjectDefinition.prototype.create = function (scene, objectsBank) {
            return new game_unit_object_class_1.GameUnitObject(this, objectsBank, scene);
        };
        return GameObjectDefinition;
    }());
    exports.GameObjectDefinition = GameObjectDefinition;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=game-object-definition.class.js.map

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(53), __webpack_require__(12)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, graph_node_definition_class_1, graph_class_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GraphDefinition = /** @class */ (function () {
        function GraphDefinition(definition) {
            var _this = this;
            this.nodeDefinitions = {};
            definition.getResult("typedObject@type=node/simplePropsGroup").forEach(function (definition) {
                _this.nodeDefinitions[definition.results["groupName"]] = new graph_node_definition_class_1.GraphNodeDefinition(definition);
            });
        }
        GraphDefinition.prototype.create = function (container, scope) {
            var nodes = {};
            for (var id in this.nodeDefinitions) {
                nodes[id] = this.nodeDefinitions[id].create(container);
                nodes[id].id = id;
            }
            var graph = new graph_class_1.Graph(nodes);
            var _loop_1 = function (id) {
                this_1.nodeDefinitions[id].links.forEach(function (link) {
                    nodes[id].addLink(link.create(graph, scope));
                });
            };
            var this_1 = this;
            for (var id in this.nodeDefinitions) {
                _loop_1(id);
            }
            return graph;
        };
        return GraphDefinition;
    }());
    exports.GraphDefinition = GraphDefinition;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=graph-definition.class.js.map

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(0), __webpack_require__(1)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, dispatcher_class_1, events_class_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GraphLink = /** @class */ (function (_super) {
        __extends(GraphLink, _super);
        function GraphLink(destNode, trigger, context, condition) {
            if (condition === void 0) { condition = null; }
            var _this = _super.call(this) || this;
            _this.destNode = destNode;
            _this.trigger = trigger;
            _this.context = context;
            _this.condition = condition;
            return _this;
        }
        GraphLink.prototype.enableTrigger = function (callback) {
            var _this = this;
            this.trigger.enable();
            if (this.triggerListener) {
                this.trigger.deleteListener(this.triggerListener);
            }
            this.triggerListener = this.trigger.listen(events_class_1.Events.TRIGGER_ACTION, function () {
                if (_this.condition.conditionId) {
                    var condition = _this.context.getCondition(_this.condition.conditionId);
                    if (condition.eval() === !_this.condition.negated) {
                        callback(_this.destNode);
                    }
                }
                else {
                    callback(_this.destNode);
                }
            });
        };
        GraphLink.prototype.disableTrigger = function () {
            this.trigger.disable();
            this.trigger.deleteListener(this.triggerListener);
        };
        return GraphLink;
    }(dispatcher_class_1.Dispatcher));
    exports.GraphLink = GraphLink;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=graph-link.class.js.map

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var VisibilityStatus = /** @class */ (function () {
        function VisibilityStatus() {
        }
        VisibilityStatus.VISIBILITY = "visibility";
        VisibilityStatus.VISIBLE = "visible";
        VisibilityStatus.HIDDEN = "hidden";
        return VisibilityStatus;
    }());
    exports.VisibilityStatus = VisibilityStatus;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=visibility-status.class.js.map

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(7), __webpack_require__(4), __webpack_require__(3)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, image_display_element_1, file_class_1, utils_class_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Decoration = /** @class */ (function (_super) {
        __extends(Decoration, _super);
        function Decoration(file, x, y, scale) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            if (scale === void 0) { scale = 1; }
            return _super.call(this, file, x, y, scale) || this;
        }
        Decoration.fromData = function (data) {
            var defaults = {
                file: "",
                x: 0,
                y: 0,
                scale: 1
            };
            var param = utils_class_1.Utils.verifyAndExtends(data, defaults);
            var file = new file_class_1.File(param["file"]);
            return new Decoration(file, param["x"], param["y"], param["scale"]);
        };
        return Decoration;
    }(image_display_element_1.ImageDisplayElement));
    exports.Decoration = Decoration;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=decoration.class.js.map

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(31)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, sprites_group_state_class_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GroupStateDefinition = /** @class */ (function () {
        function GroupStateDefinition(definition) {
            var _this = this;
            // or other, see later
            this.sprites = [];
            this.altSprites = [];
            this.conditions = [];
            definition.children.forEach(function (result) {
                _this.sprites.push(result.results["value"]);
                _this.altSprites.push(result.results["altValue"]);
                _this.conditions.push({
                    conditionId: result.results["conditionId"],
                    negated: result.results["negation"] === "!"
                });
            });
        }
        GroupStateDefinition.prototype.create = function (group) {
            var displayables = [];
            this.sprites.forEach(function (id) {
                displayables.push(group.getSprite(id));
            });
            return new sprites_group_state_class_1.SpritesGroupState(group, displayables, this.conditions);
        };
        return GroupStateDefinition;
    }());
    exports.GroupStateDefinition = GroupStateDefinition;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=group-state-definition.class.js.map

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(0)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, dispatcher_class_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SpritesGroupState = /** @class */ (function (_super) {
        __extends(SpritesGroupState, _super);
        function SpritesGroupState(group, sprites, conditions) {
            if (sprites === void 0) { sprites = []; }
            if (conditions === void 0) { conditions = []; }
            var _this = _super.call(this) || this;
            _this.group = group;
            _this.sprites = sprites;
            _this.conditions = conditions;
            return _this;
        }
        SpritesGroupState.prototype.display = function () {
            var _this = this;
            this.group.hide();
            this.sprites.forEach(function (sprite, index) {
                if (_this.conditions[index].conditionId) {
                    var condition = _this.group.getCondition(_this.conditions[index].conditionId);
                    if (condition.eval() === !_this.conditions[index].negated) {
                        sprite.display();
                    }
                }
                else {
                    console.log("oo");
                    sprite.display();
                }
            });
        };
        SpritesGroupState.prototype.hide = function () {
            this.group.hide();
        };
        SpritesGroupState.prototype.isVisible = function () {
            return true;
        };
        SpritesGroupState.prototype.executeAction = function (actionName, args) {
            switch (actionName) {
                case "show":
                    this.display();
                    break;
                case "hide":
                    this.hide();
                    break;
            }
        };
        return SpritesGroupState;
    }(dispatcher_class_1.Dispatcher));
    exports.SpritesGroupState = SpritesGroupState;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=sprites-group-state.class.js.map

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(10)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, sequence_class_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SequenceDefinition = /** @class */ (function () {
        function SequenceDefinition(definition) {
            // or others...
            this.states = [];
            this.statesTypes = [];
            for (var _i = 0, _a = definition.children; _i < _a.length; _i++) {
                var child = _a[_i];
                if (child.type === "free") {
                    this.states.push(child.results["value"]);
                    this.statesTypes.push("sprite");
                }
                else if (child.type === "typed") {
                    this.states.push(child.results["value"]);
                    this.statesTypes.push(child.results["type"]);
                }
            }
        }
        SequenceDefinition.prototype.create = function (group) {
            var _this = this;
            var states = [];
            this.states.forEach(function (id, index) {
                switch (_this.statesTypes[index]) {
                    case "sprite":
                        states.push(group.getSprite(id));
                        break;
                    case "state":
                        states.push(group.getState(id));
                        break;
                }
            });
            return new sequence_class_1.Sequence(group, states);
        };
        return SequenceDefinition;
    }());
    exports.SequenceDefinition = SequenceDefinition;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=sequence-definition.class.js.map

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(16)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, animation_class_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AnimationDefinition = /** @class */ (function () {
        function AnimationDefinition(definition) {
            this.sequenceId = definition.children[0].results["value"];
            var clockResult = definition.children[1];
            if (clockResult.type === "number") {
                this.period = +clockResult.results["value"];
            }
            else if (clockResult.type === "typed" && clockResult.results["type"] === "clock") {
                this.clockId = clockResult.results["value"];
            }
            if (definition.children[2]) {
                this.iterations = +definition.children[2].results["value"];
            }
            if (definition.children[3]) {
                this.interruptable = definition.children[3].results["value"] === "true";
            }
        }
        AnimationDefinition.prototype.create = function (group, scope) {
            var clockValue = this.clockId ? scope.getClock(this.clockId) : this.period;
            return new animation_class_1.Animation(group.getSequence(this.sequenceId), this.iterations, clockValue, this.interruptable);
        };
        return AnimationDefinition;
    }());
    exports.AnimationDefinition = AnimationDefinition;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=animation-definition.class.js.map

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var context = new AudioContext();
    var Sound = /** @class */ (function () {
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
                }, function () { return console.log("Sound loading failed"); });
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
        Sound.prototype.executeAction = function (actionName, args) {
            switch (actionName) {
                case "play":
                    this.play();
                    break;
            }
        };
        return Sound;
    }());
    exports.Sound = Sound;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=sound.class.js.map

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(0), __webpack_require__(1)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, dispatcher_class_1, events_class_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Created by Christophe on 03/02/2017.
     */
    var Variable = /** @class */ (function (_super) {
        __extends(Variable, _super);
        function Variable(initValue) {
            if (initValue === void 0) { initValue = null; }
            var _this = _super.call(this) || this;
            _this.initValue = initValue;
            _this.currentValue = initValue;
            return _this;
        }
        Object.defineProperty(Variable.prototype, "value", {
            get: function () {
                return this.currentValue;
            },
            set: function (value) {
                this.currentValue = value;
                this.dispatchEvent(events_class_1.Events.VARIABLE_CHANGE, this.value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Variable.prototype, "type", {
            get: function () {
                return typeof this.value;
            },
            enumerable: true,
            configurable: true
        });
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
            if (newInitValue === void 0) { newInitValue = null; }
            if (newInitValue) {
                this.initValue = newInitValue;
            }
            this.value = this.initValue;
        };
        Variable.prototype.executeAction = function (actionName, args) {
            switch (actionName) {
                case "set":
                    if (this.type === Variable.BOOLEAN_TYPE) {
                        this.value = args[0] === "true";
                    }
                    else if (this.type === Variable.NUMBER_TYPE) {
                        this.value = +args[0];
                    }
                    else {
                        console.log("h", args[0]);
                        this.value = args[0];
                    }
                    break;
                case "reinit":
                    this.reset();
                    break;
                case "increment":
                    this.increment();
                    break;
                case "decrement":
                    this.decrement();
                    break;
            }
        };
        Variable.prototype.getProperty = function (propertyName) {
            switch (propertyName) {
                case "":
                case "value":
                    return this.value;
            }
        };
        Variable.STRING_TYPE = "string";
        Variable.NUMBER_TYPE = "number";
        Variable.BOOLEAN_TYPE = "boolean";
        return Variable;
    }(dispatcher_class_1.Dispatcher));
    exports.Variable = Variable;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=variable.class.js.map

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(5)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, base_trigger_class_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ControlTrigger = /** @class */ (function (_super) {
        __extends(ControlTrigger, _super);
        function ControlTrigger(control, eventName) {
            var _this = _super.call(this) || this;
            _this.control = control;
            _this.eventName = eventName;
            return _this;
        }
        ControlTrigger.prototype.enable = function () {
            var _this = this;
            this.listener = this.control.listen(this.eventName, function () {
                _this.action();
            });
        };
        ControlTrigger.prototype.disable = function () {
            this.control.deleteListener(this.listener);
        };
        return ControlTrigger;
    }(base_trigger_class_1.BaseTrigger));
    exports.ControlTrigger = ControlTrigger;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=control-trigger.class.js.map

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(62)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, script_class_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ScriptDefinition = /** @class */ (function () {
        function ScriptDefinition(result) {
            this.result = result;
        }
        ScriptDefinition.prototype.create = function (context) {
            return new script_class_1.Script(this.result, context);
        };
        return ScriptDefinition;
    }());
    exports.ScriptDefinition = ScriptDefinition;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=script-definition.class.js.map

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ScriptUnit = /** @class */ (function () {
        function ScriptUnit(result) {
        }
        ScriptUnit.prototype.execute = function () {
        };
        return ScriptUnit;
    }());
    exports.ScriptUnit = ScriptUnit;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=script-unit.class.js.map

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Created by Christophe on 03/02/2017.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Condition = /** @class */ (function () {
        function Condition(testFunction) {
            if (testFunction === void 0) { testFunction = null; }
            this.testFunction = testFunction;
        }
        Condition.prototype.eval = function () {
            return this.testFunction();
        };
        return Condition;
    }());
    exports.Condition = Condition;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=condition.class.js.map

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(36), __webpack_require__(1)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, control_trigger_class_1, events_class_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ControlUpTrigger = /** @class */ (function (_super) {
        __extends(ControlUpTrigger, _super);
        function ControlUpTrigger(control) {
            return _super.call(this, control, events_class_1.Events.CONTROL_UP) || this;
        }
        return ControlUpTrigger;
    }(control_trigger_class_1.ControlTrigger));
    exports.ControlUpTrigger = ControlUpTrigger;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=control-up-trigger.class.js.map

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(14), __webpack_require__(3), __webpack_require__(42), __webpack_require__(29), __webpack_require__(6), __webpack_require__(10), __webpack_require__(9), __webpack_require__(16)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, sprite_class_1, utils_class_1, sprites_group_class_1, decoration_class_1, control_class_1, sequence_class_1, clock_class_1, animation_class_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GameObject = /** @class */ (function () {
        function GameObject(data) {
            if (data === void 0) { data = {}; }
            this._spritesDictionary = {};
            this._groupsDictionary = {};
            this._statesDictionary = {};
            this._controlsDictionary = {};
            this._sequencesDictionary = {};
            this._clocksDictionary = {};
            this._animationsDictionary = {};
            this.loadData(data);
        }
        GameObject.prototype.loadData = function (data) {
            var dataDefaults = {
                gameContainerScale: 1,
                sprites: {},
                groups: {},
                backgrounds: [],
                foregrounds: [],
                controls: {},
                clocks: {}
            };
            var param = utils_class_1.Utils.verifyAndExtends(data, dataDefaults);
            this._params = param;
            this.loadClocks(param["clocks"]);
            this.loadSprites(param["sprites"]);
            this.loadGroups(param["groups"]);
            return param;
        };
        GameObject.prototype.loadSprites = function (sprites) {
            var loadedSprites = [];
            for (var id in sprites) {
                if (sprites.hasOwnProperty(id)) {
                    var sprite = sprite_class_1.Sprite.fromData(sprites[id]);
                    this._spritesDictionary[id] = sprite;
                    loadedSprites.push(sprite);
                }
            }
            return loadedSprites;
        };
        GameObject.prototype.getSprite = function (spriteId) {
            return this._spritesDictionary[spriteId];
        };
        GameObject.prototype.getSprites = function (spriteIds) {
            var _this = this;
            var sprites = [];
            spriteIds.forEach(function (id) { return sprites.push(_this.getSprite(id)); });
            return sprites;
        };
        GameObject.prototype.getIdWithGroupPrefix = function (groupId, id) {
            return groupId + "_" + id;
        };
        GameObject.prototype.loadClocks = function (clocks) {
            for (var clockId in clocks) {
                if (clocks.hasOwnProperty(clockId)) {
                    var period = clocks[clockId]["period"];
                    this._clocksDictionary[clockId] = new clock_class_1.Clock(period);
                }
            }
        };
        GameObject.prototype.loadGroups = function (groups) {
            var _this = this;
            var groupDefaults = {
                sprites: [],
                states: [],
                offset: { x: 0, y: 0 },
                sequences: {},
                animations: {}
            };
            var _loop_1 = function (groupId) {
                if (groups.hasOwnProperty(groupId)) {
                    var param = utils_class_1.Utils.verifyAndExtends(groups[groupId], groupDefaults);
                    var xOffset_1 = param["offset"]["x"];
                    var yOffset_1 = param["offset"]["y"];
                    var sprites = this_1.getSprites(param["sprites"]);
                    sprites.forEach(function (sprite) {
                        sprite.x += xOffset_1;
                        sprite.y += yOffset_1;
                        sprite.updateTransforms();
                    });
                    var group = new sprites_group_class_1.SpritesGroup(sprites);
                    this_1._groupsDictionary[groupId] = group;
                    for (var stateId in param["states"]) {
                        if (param["states"].hasOwnProperty(stateId)) {
                            var sprites_1 = this_1.getFromDictionary(param["states"][stateId], this_1._spritesDictionary);
                            /*let state:SpritesGroupState = new SpritesGroupState(group, sprites);
                            let completeStateId:string = this.getIdWithGroupPrefix(groupId, stateId);
                            this._statesDictionary[completeStateId] = state;*/
                        }
                    }
                    var _loop_2 = function (sequenceId) {
                        if (param["sequences"].hasOwnProperty(sequenceId)) {
                            var displayables_1 = [];
                            param["sequences"][sequenceId]["states"].forEach(function (data) {
                                if (data["type"] === "sprite") {
                                    displayables_1.push(_this.getSprite(data["ref"]));
                                }
                                else if (data["type"] === "state") {
                                    displayables_1.push(_this.getState(groupId, data["ref"]));
                                }
                            });
                            loop = param["sequences"][sequenceId]["loop"];
                            var sequence = new sequence_class_1.Sequence(group, displayables_1, loop ? loop : "");
                            var id = this_1.getIdWithGroupPrefix(groupId, sequenceId);
                            this_1._sequencesDictionary[id] = sequence;
                        }
                    };
                    for (var sequenceId in param["sequences"]) {
                        _loop_2(sequenceId);
                    }
                    for (var animationId in param["animations"]) {
                        if (param["animations"].hasOwnProperty(animationId)) {
                            var id = this_1.getIdWithGroupPrefix(groupId, animationId);
                            this_1._animationsDictionary[id] = animation_class_1.Animation.fromData(param["animations"][animationId], groupId, this_1);
                        }
                    }
                }
            };
            var this_1 = this, loop;
            for (var groupId in groups) {
                _loop_1(groupId);
            }
        };
        GameObject.prototype.getFromDictionary = function (ids, dictionnary) {
            var ret = [];
            ids.forEach(function (id) { return ret.push(dictionnary[id]); });
            return ret;
        };
        GameObject.prototype.getGroup = function (groupId) {
            return this._groupsDictionary[groupId];
        };
        GameObject.prototype.getControl = function (controlId, zoneId) {
            if (zoneId === void 0) { zoneId = null; }
            var controlName = zoneId ? controlId + "_" + zoneId : controlId;
            return this._controlsDictionary[controlName];
        };
        GameObject.prototype.getGroups = function (groupIds) {
            var _this = this;
            var groups = [];
            groupIds.forEach(function (id) { return groups.push(_this.getGroup(id)); });
            return groups;
        };
        GameObject.prototype.getState = function (groupId, stateId) {
            var completeStateId = this.getIdWithGroupPrefix(groupId, stateId);
            return this._statesDictionary[completeStateId];
        };
        GameObject.prototype.getAnimation = function (groupId, animationId) {
            var id = this.getIdWithGroupPrefix(groupId, animationId);
            return this._animationsDictionary[id];
        };
        GameObject.prototype.getSequence = function (groupId, sequenceId) {
            var completeId = this.getIdWithGroupPrefix(groupId, sequenceId);
            return this._sequencesDictionary[completeId];
        };
        GameObject.prototype.getStates = function (groupId, stateIds) {
            var _this = this;
            var states = [];
            stateIds.forEach(function (id) { return states.push(_this.getState(groupId, id)); });
            return states;
        };
        GameObject.prototype.getClock = function (clockId) {
            return this._clocksDictionary[clockId];
        };
        GameObject.prototype.loadDecorations = function (decorationDatas) {
            var decorations = [];
            decorationDatas.forEach(function (data) { return decorations.push(decoration_class_1.Decoration.fromData(data)); });
            return decorations;
        };
        GameObject.prototype.loadControls = function (controlData) {
            var sprites = [];
            for (var id in controlData) {
                if (controlData.hasOwnProperty(id)) {
                    var controls = control_class_1.Control.fromData(controlData[id]);
                    if (controls instanceof control_class_1.Control) {
                        sprites.push(controls.sprite);
                        this._controlsDictionary[id] = controls;
                    }
                    else {
                        var sprite = void 0;
                        for (var zoneId in controls) {
                            if (controls.hasOwnProperty(zoneId)) {
                                var completeId = id + "_" + zoneId;
                                if (!sprite) {
                                    sprite = controls[zoneId].sprite;
                                }
                                this._controlsDictionary[completeId] = controls[zoneId];
                            }
                        }
                        sprites.push(sprite);
                    }
                }
            }
            return sprites;
        };
        return GameObject;
    }());
    exports.GameObject = GameObject;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=game-object.class.js.map

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(0)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, dispatcher_class_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SpritesGroup = /** @class */ (function (_super) {
        __extends(SpritesGroup, _super);
        function SpritesGroup(sprites, states) {
            if (states === void 0) { states = []; }
            var _this = _super.call(this) || this;
            _this.sprites = sprites;
            _this.states = states;
            return _this;
        }
        SpritesGroup.prototype.show = function () {
            this.sprites.forEach(function (sprite) { return sprite.show(); });
        };
        SpritesGroup.prototype.isVisible = function () {
            return true;
        };
        SpritesGroup.prototype.display = function () {
            this.show();
        };
        SpritesGroup.prototype.hide = function () {
            this.sprites.forEach(function (sprite) { return sprite.hide(); });
        };
        SpritesGroup.prototype.toggle = function () {
            this.sprites.forEach(function (sprite) { return sprite.toggle(); });
        };
        SpritesGroup.prototype.createState = function (sprites) {
            sprites.forEach(function (sprite) {
                if (sprites.indexOf(sprite) === -1) {
                    console.error("State sprite is not in group");
                    return null;
                }
            });
            /*let state:SpritesGroupState = new SpritesGroupState(this, sprites);
            this.states.push(state);
            return state;*/
            return;
        };
        return SpritesGroup;
    }(dispatcher_class_1.Dispatcher));
    exports.SpritesGroup = SpritesGroup;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=sprites-group.class.js.map

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(8), __webpack_require__(1)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, display_element_class_1, events_class_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Seg7Displayer = /** @class */ (function (_super) {
        __extends(Seg7Displayer, _super);
        function Seg7Displayer(x, y, scale, variable) {
            if (scale === void 0) { scale = 1; }
            if (variable === void 0) { variable = null; }
            var _this = _super.call(this, x, y, scale) || this;
            _this.variable = variable;
            _this._currentValue = null;
            if (variable)
                _this.bindVariable(variable);
            return _this;
        }
        Seg7Displayer.prototype.getDOMElement = function () {
            if (this._DOMElement) {
                return this._DOMElement;
            }
            else {
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
            if (variable.value !== null)
                this.value = +variable.value;
            variable.listen(events_class_1.Events.VARIABLE_CHANGE, function (value) { return _this.value = +value; });
        };
        Object.defineProperty(Seg7Displayer.prototype, "value", {
            get: function () {
                return this._currentValue;
            },
            set: function (value) {
                if (this.txtDiv)
                    this.txtDiv.innerHTML = String(value);
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
    }(display_element_class_1.DisplayElement));
    exports.Seg7Displayer = Seg7Displayer;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=seg7-displayer.class.js.map

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SequenceCondition = /** @class */ (function () {
        function SequenceCondition(sequence, operator, sequenceConditionType) {
            this.sequence = sequence;
            this.operator = operator;
            this.sequenceConditionType = sequenceConditionType;
            //super();
        }
        return SequenceCondition;
    }());
    exports.SequenceCondition = SequenceCondition;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=sequence-condition.class.js.map

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GroupType;
    (function (GroupType) {
        GroupType[GroupType["BASIC"] = 0] = "BASIC";
        GroupType[GroupType["ARRAY"] = 1] = "ARRAY";
    })(GroupType = exports.GroupType || (exports.GroupType = {}));
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=group-type.enum.js.map

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(47), __webpack_require__(3), __webpack_require__(41), __webpack_require__(73), __webpack_require__(74), __webpack_require__(43), __webpack_require__(9), __webpack_require__(39), __webpack_require__(4), __webpack_require__(6), __webpack_require__(35), __webpack_require__(75), __webpack_require__(44), __webpack_require__(76), __webpack_require__(12), __webpack_require__(27), __webpack_require__(11), __webpack_require__(34), __webpack_require__(16), __webpack_require__(10), __webpack_require__(5), __webpack_require__(19), __webpack_require__(77), __webpack_require__(78), __webpack_require__(79), __webpack_require__(80), __webpack_require__(15), __webpack_require__(8), __webpack_require__(7), __webpack_require__(14), __webpack_require__(42), __webpack_require__(31), __webpack_require__(22), __webpack_require__(1), __webpack_require__(81), __webpack_require__(21), __webpack_require__(82), __webpack_require__(83), __webpack_require__(84)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, code_file_loader_class_1, utils_class_1, game_object_class_1, html_game_object_class_1, lcd_displayer_class_1, seg7_displayer_class_1, clock_class_1, condition_class_1, file_class_1, control_class_1, variable_class_1, condition_types_class_1, sequence_condition_class_1, onstate_sequence_condition_class_1, graph_class_1, graph_link_class_1, graph_node_class_1, sound_class_1, animation_class_1, sequence_class_1, base_trigger_class_1, time_trigger_class_1, trigger_class_1, states_collision_trigger_class_1, conditional_sprites_group_state_class_1, conditional_sprites_group_state_set_class_1, control_sprite_class_1, display_element_class_1, image_display_element_1, sprite_class_1, sprites_group_class_1, sprites_group_state_class_1, event_listener_class_1, events_class_1, status_class_1, status_subscription_class_1, time_utils_class_1, triggers_object_class_1, graph_object_class_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CodeFileLoader = code_file_loader_class_1.CodeFileLoader;
    exports.Utils = utils_class_1.Utils;
    exports.GameObject = game_object_class_1.GameObject;
    exports.HTMLGameObject = html_game_object_class_1.HTMLGameObject;
    exports.LcdDisplayer = lcd_displayer_class_1.LcdDisplayer;
    exports.Seg7Displayer = seg7_displayer_class_1.Seg7Displayer;
    exports.Clock = clock_class_1.Clock;
    exports.Condition = condition_class_1.Condition;
    exports.File = file_class_1.File;
    exports.Control = control_class_1.Control;
    exports.Variable = variable_class_1.Variable;
    exports.ConditionTypes = condition_types_class_1.ConditionTypes;
    exports.SequenceCondition = sequence_condition_class_1.SequenceCondition;
    exports.OnStateSequenceCondition = onstate_sequence_condition_class_1.OnStateSequenceCondition;
    exports.Graph = graph_class_1.Graph;
    exports.GraphLink = graph_link_class_1.GraphLink;
    exports.GraphNode = graph_node_class_1.GraphNode;
    exports.Sound = sound_class_1.Sound;
    exports.Animation = animation_class_1.Animation;
    exports.Sequence = sequence_class_1.Sequence;
    exports.BaseTrigger = base_trigger_class_1.BaseTrigger;
    exports.TimeTrigger = time_trigger_class_1.TimeTrigger;
    exports.Trigger = trigger_class_1.Trigger;
    exports.StatesCollisionTrigger = states_collision_trigger_class_1.StatesCollisionTrigger;
    exports.ConditionalSpritesGroupState = conditional_sprites_group_state_class_1.ConditionalSpritesGroupState;
    exports.ConditionalSpritesGroupStateSet = conditional_sprites_group_state_set_class_1.ConditionalSpritesGroupStateSet;
    exports.ControlSprite = control_sprite_class_1.ControlSprite;
    exports.DisplayElement = display_element_class_1.DisplayElement;
    exports.ImageDisplayElement = image_display_element_1.ImageDisplayElement;
    exports.Sprite = sprite_class_1.Sprite;
    exports.SpritesGroup = sprites_group_class_1.SpritesGroup;
    exports.SpritesGroupState = sprites_group_state_class_1.SpritesGroupState;
    exports.EventListener = event_listener_class_1.EventListener;
    exports.Events = events_class_1.Events;
    exports.Status = status_class_1.Status;
    exports.StatusSubscription = status_subscription_class_1.StatusSubscription;
    exports.TimeUtils = time_utils_class_1.TimeUtils;
    exports.TriggersObject = triggers_object_class_1.TriggersObject;
    exports.GraphObject = graph_object_class_1.GraphObject;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(23), __webpack_require__(25), __webpack_require__(69), __webpack_require__(72)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, typed_object_class_1, game_object_definition_class_1, scene_object_definition_class_1, scene_unit_object_class_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CodeFileLoader = /** @class */ (function () {
        function CodeFileLoader(filePath, onCompleted, onError) {
            if (onCompleted === void 0) { onCompleted = null; }
            if (onError === void 0) { onError = null; }
            this.onCompleted = onCompleted;
            this.onError = onError;
            this.loadFromFile(filePath);
        }
        CodeFileLoader.prototype.loadFromFile = function (filePath) {
            var _this = this;
            var req = new XMLHttpRequest();
            req.open("GET", filePath, true);
            req.onreadystatechange = function () {
                if (req.readyState === XMLHttpRequest.DONE) {
                    if (req.status === 200) {
                        _this.parseCode(req.responseText);
                    }
                }
                else {
                }
            };
            req.send();
        };
        CodeFileLoader.prototype.parseCode = function (code) {
            var baseUnit = new typed_object_class_1.TypedObject();
            baseUnit.code = code;
            var results = baseUnit.evaluate();
            console.log(results);
            var scene;
            var objectsBank = {};
            for (var _i = 0, results_1 = results; _i < results_1.length; _i++) {
                var result = results_1[_i];
                if (result.results["type"] === "instantiable") {
                    var definition = new game_object_definition_class_1.GameObjectDefinition(result);
                    var id = result.children[0].results["groupName"];
                    objectsBank[id] = definition;
                }
            }
            for (var _a = 0, results_2 = results; _a < results_2.length; _a++) {
                var result = results_2[_a];
                if (result.results["type"] === "scene") {
                    var definition = new scene_object_definition_class_1.SceneObjectDefinition(result);
                    scene = new scene_unit_object_class_1.SceneUnitObject(definition, objectsBank);
                }
            }
            scene.displaySprites();
            console.log(scene);
            this.onCompleted(scene);
        };
        return CodeFileLoader;
    }());
    exports.CodeFileLoader = CodeFileLoader;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=code-file-loader.class.js.map

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ResultUnit = /** @class */ (function () {
        function ResultUnit() {
            this.results = {};
            this.children = [];
        }
        ResultUnit.prototype.getResult = function (path) {
            var results = this.children;
            var pathItems = path.split("/").filter(function (item) {
                return item !== "";
            });
            var last;
            var schema = /([A-Za-z0-9-]+)(?:@([A-Za-z0-9-]+)=(.+))?/;
            var nrm = [];
            for (var _i = 0, pathItems_1 = pathItems; _i < pathItems_1.length; _i++) {
                var item = pathItems_1[_i];
                var res = schema.exec(item);
                var type = res[1];
                var propertyName = res[2];
                var propertyValue = res[3];
                var nr = [];
                nrm = [];
                for (var _a = 0, results_1 = results; _a < results_1.length; _a++) {
                    var result = results_1[_a];
                    if (result.type === type) {
                        if (propertyName && propertyValue) {
                            if (result.results[propertyName] === propertyValue) {
                                nrm.push(result);
                                nr = nr.concat(result.children);
                            }
                        }
                        else {
                            nr = nr.concat(result.children);
                            nrm.push(result);
                        }
                    }
                }
                results = nr;
            }
            return nrm;
        };
        return ResultUnit;
    }());
    exports.ResultUnit = ResultUnit;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=result-unit.class.js.map

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(2), __webpack_require__(24), __webpack_require__(23)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, parse_unit_class_1, property_value_class_1, typed_object_class_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var NamedProperty = /** @class */ (function (_super) {
        __extends(NamedProperty, _super);
        function NamedProperty() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.assertions = {
                bracketsGroup: {
                    assertions: [
                        {
                            expression: /^([A-Za-z0-9]+)\s*:\s*\{\s*/,
                            values: ['groupName']
                        }
                    ],
                    next: typed_object_class_1.TypedObject
                },
                simplePropsGroup: {
                    assertions: [
                        {
                            expression: /^([A-Za-z0-9]+)\s*:\s*/,
                            values: ['groupName']
                        }
                    ],
                    next: property_value_class_1.PropertyValue
                }
            };
            return _this;
        }
        return NamedProperty;
    }(parse_unit_class_1.ParseUnit));
    exports.NamedProperty = NamedProperty;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=named-property.class.js.map

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(2), __webpack_require__(51)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, parse_unit_class_1, action_and_arguments_class_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ScriptGroup = /** @class */ (function (_super) {
        __extends(ScriptGroup, _super);
        function ScriptGroup() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.assertions = {
                actionOnObject: {
                    assertions: [
                        {
                            expression: /^([A-Za-z0-9]+)[ ]+([A-Za-z0-9_-]+)[ ]*>[ ]*/,
                            values: ["objectType", "objectName"]
                        }
                    ],
                    next: action_and_arguments_class_1.ActionAndArguments
                },
                triggerScript: {
                    assertions: [
                        {
                            expression: /^listen[ ]*\([ ]*([A-Za-z0-9-_]+)[ ]*\)\s*{\s*/,
                            values: ["triggerId"]
                        }
                    ],
                    next: ScriptGroup
                }
            };
            _this.closingExpression = /^\s*}\s*/;
            return _this;
        }
        return ScriptGroup;
    }(parse_unit_class_1.ParseUnit));
    exports.ScriptGroup = ScriptGroup;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=script-group.class.js.map

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(2), __webpack_require__(52)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, parse_unit_class_1, arguments_class_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ActionAndArguments = /** @class */ (function (_super) {
        __extends(ActionAndArguments, _super);
        function ActionAndArguments() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.assertions = {
                actionAndArguments: {
                    assertions: [
                        {
                            expression: /^([A-Za-z0-9]+)[ ]*/,
                            values: ["actionName"]
                        }
                    ],
                    next: arguments_class_1.Arguments
                }
            };
            _this.closingExpression = /^[ ]*[\n\r]+[ \t]*/;
            return _this;
        }
        return ActionAndArguments;
    }(parse_unit_class_1.ParseUnit));
    exports.ActionAndArguments = ActionAndArguments;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=action-and-arguments.class.js.map

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(2)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, parse_unit_class_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Arguments = /** @class */ (function (_super) {
        __extends(Arguments, _super);
        function Arguments() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.assertions = {
                argument: {
                    assertions: [
                        {
                            expression: /^"?([A-Za-z0-9]+)"?[ ]*/,
                            values: ["value"]
                        }
                    ]
                }
            };
            return _this;
        }
        return Arguments;
    }(parse_unit_class_1.ParseUnit));
    exports.Arguments = Arguments;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=arguments.class.js.map

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(54), __webpack_require__(11)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, graph_link_definition_class_1, graph_node_class_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GraphNodeDefinition = /** @class */ (function () {
        function GraphNodeDefinition(definition) {
            this.links = [];
            var stateDefinition = definition.children[0];
            if (stateDefinition.type === "typed") {
                this.stateType = stateDefinition.results["type"];
                this.stateId = stateDefinition.results["value"];
            }
            else if (stateDefinition.type === "free") {
                this.stateId = stateDefinition.results["value"];
            }
            for (var i = 1; i < definition.children.length; i++) {
                if (definition.children[i].type === "graphLink") {
                    this.links.push(new graph_link_definition_class_1.GraphLinkDefinition(definition.children[i]));
                }
            }
        }
        GraphNodeDefinition.prototype.create = function (object) {
            var state;
            switch (this.stateType) {
                case "object":
                    state = object.getObject(this.stateId);
                    break;
                default:
                    state = object.getSprite(this.stateId);
            }
            return new graph_node_class_1.GraphNode(state);
        };
        return GraphNodeDefinition;
    }());
    exports.GraphNodeDefinition = GraphNodeDefinition;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=graph-node-definition.class.js.map

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(27)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, graph_link_class_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GraphLinkDefinition = /** @class */ (function () {
        function GraphLinkDefinition(definition) {
            this.triggerId = definition.results["triggerId"];
            this.destNodeId = definition.results["destNode"];
            this.condition = {
                conditionId: definition.results["conditionId"],
                negated: definition.results["negation"] === "!"
            };
        }
        GraphLinkDefinition.prototype.create = function (graph, scope) {
            var trg = scope.getTrigger(this.triggerId);
            return new graph_link_class_1.GraphLink(graph.getNode(this.destNodeId), trg, scope, this.condition);
        };
        return GraphLinkDefinition;
    }());
    exports.GraphLinkDefinition = GraphLinkDefinition;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=graph-link-definition.class.js.map

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(9)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, clock_class_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ClockDefinition = /** @class */ (function () {
        function ClockDefinition(definition) {
            this.interval = +definition.children[0].results["value"];
        }
        ClockDefinition.prototype.create = function () {
            return new clock_class_1.Clock(this.interval);
        };
        return ClockDefinition;
    }());
    exports.ClockDefinition = ClockDefinition;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=clock-definition.class.js.map

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(30), __webpack_require__(32), __webpack_require__(33), __webpack_require__(26), __webpack_require__(57)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, group_state_definition_class_1, sequence_definition_class_1, animation_definition_class_1, graph_definition_class_1, extended_sprites_group_class_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GroupDefinition = /** @class */ (function () {
        function GroupDefinition(definition) {
            var _this = this;
            this.spriteIds = [];
            this.states = {};
            this.sequences = {};
            this.animations = {};
            this.graphs = {};
            definition.getResult("simplePropertyGroup@groupName=sprites/free").forEach(function (definition) {
                _this.spriteIds.push(definition.results["value"]);
            });
            definition.getResult("typedObject@type=state/simplePropsGroup").forEach(function (definition) {
                _this.states[definition.results["groupName"]] = new group_state_definition_class_1.GroupStateDefinition(definition);
            });
            definition.getResult("typedObject@type=sequence/simplePropsGroup").forEach(function (definition) {
                _this.sequences[definition.results["groupName"]] = new sequence_definition_class_1.SequenceDefinition(definition);
            });
            definition.getResult("typedObject@type=animation/simplePropsGroup").forEach(function (definition) {
                _this.animations[definition.results["groupName"]] = new animation_definition_class_1.AnimationDefinition(definition);
            });
            definition.getResult("typedObject@type=graph/bracketsGroup").forEach(function (definition) {
                _this.graphs[definition.results["groupName"]] = new graph_definition_class_1.GraphDefinition(definition);
            });
        }
        GroupDefinition.prototype.create = function (scope) {
            return new extended_sprites_group_class_1.ExtendedSpritesGroup(this, scope);
        };
        return GroupDefinition;
    }());
    exports.GroupDefinition = GroupDefinition;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=group-definition.class.js.map

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(0)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, dispatcher_class_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ExtendedSpritesGroup = /** @class */ (function (_super) {
        __extends(ExtendedSpritesGroup, _super);
        function ExtendedSpritesGroup(definition, scope) {
            var _this = _super.call(this) || this;
            _this.scope = scope;
            _this.sprites = {};
            _this.states = {};
            _this.sequences = {};
            _this.animations = {};
            _this.graphs = {};
            _this.fromDefinition(definition);
            return _this;
        }
        ExtendedSpritesGroup.prototype.fromDefinition = function (definition) {
            var _this = this;
            definition.spriteIds.forEach(function (id) {
                _this.sprites[id] = _this.scope.getSprite(id);
            });
            /*for (let id in definition.states) {
                this.states[id] = definition.states[id].create(this);
            }*/
            for (var id in definition.sequences) {
                this.sequences[id] = definition.sequences[id].create(this);
            }
            for (var id in definition.animations) {
                this.animations[id] = definition.animations[id].create(this, this.scope);
            }
            /*for (let id in definition.graphs) {
                this.graphs[id] = definition.graphs[id].create(this, this.scope);
            }*/
        };
        ExtendedSpritesGroup.prototype.getSprite = function (id) {
            var sp = this.sprites[id] || this.scope.getSprite(id);
            return sp;
        };
        ExtendedSpritesGroup.prototype.getState = function (id) {
            return this.states[id];
        };
        ExtendedSpritesGroup.prototype.getSequence = function (id) {
            return this.sequences[id];
        };
        ExtendedSpritesGroup.prototype.hide = function () {
            for (var id in this.sprites) {
                this.sprites[id].hide();
            }
        };
        ExtendedSpritesGroup.prototype.display = function () {
            for (var id in this.sprites) {
                this.sprites[id].display();
            }
        };
        return ExtendedSpritesGroup;
    }(dispatcher_class_1.Dispatcher));
    exports.ExtendedSpritesGroup = ExtendedSpritesGroup;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=extended-sprites-group.class.js.map

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(34), __webpack_require__(4)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, sound_class_1, file_class_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SoundDefinition = /** @class */ (function () {
        function SoundDefinition(definition) {
            this.filePath = definition.children[0].results["value"];
        }
        SoundDefinition.prototype.create = function () {
            var file = new file_class_1.File(this.filePath);
            return new sound_class_1.Sound(file);
        };
        return SoundDefinition;
    }());
    exports.SoundDefinition = SoundDefinition;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=sound-definition.class.js.map

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(35)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, variable_class_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var VariableDefinition = /** @class */ (function () {
        function VariableDefinition(definition) {
            var type = definition.children[0].type;
            var value = definition.children[0].results["value"];
            switch (type) {
                case "string":
                    this.initValue = value;
                    break;
                case "number":
                    this.initValue = +value;
                    break;
                case "boolean":
                    this.initValue = value === "true";
            }
        }
        VariableDefinition.prototype.create = function () {
            return new variable_class_1.Variable(this.initValue);
        };
        return VariableDefinition;
    }());
    exports.VariableDefinition = VariableDefinition;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=variable-definition.class.js.map

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(18), __webpack_require__(19)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, control_down_trigger_class_1, time_trigger_class_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TriggerDefinition = /** @class */ (function () {
        function TriggerDefinition(definition) {
            this.arguments = [];
            if (definition.children[0].type === "selector") {
                this.selectorDef = definition.children[0];
                this.type = "selector";
            }
            else {
                this.type = definition.children[0].results["value"];
                for (var i = 1; i < definition.children.length; i++) {
                    var valueUnit = definition.children[i];
                    // only string or number (must be extended)
                    if (valueUnit.type === "number") {
                        this.arguments.push(+valueUnit.results["value"]);
                    }
                    else {
                        this.arguments.push(valueUnit.results["value"]);
                    }
                }
            }
        }
        TriggerDefinition.prototype.create = function (scope) {
            switch (this.type) {
                case "controldown":
                    return new control_down_trigger_class_1.ControlDownTrigger(scope.getControl(this.arguments[0]));
                case "time":
                    return new time_trigger_class_1.TimeTrigger(+this.arguments[0]);
                case "selector":
                    var object = scope.getTriggerable(this.selectorDef.results["objectType"], this.selectorDef.results["objectId"]);
                    return object.getTrigger(this.selectorDef.results["args"], []);
            }
        };
        return TriggerDefinition;
    }());
    exports.TriggerDefinition = TriggerDefinition;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=trigger-definition.class.js.map

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(17)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, game_unit_object_class_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GameObjectReference = /** @class */ (function () {
        function GameObjectReference(definition) {
            this.x = 0;
            this.y = 0;
            this.objectId = definition.children[0].results["value"];
            this.x = +definition.children[1].results["value"];
            this.y = +definition.children[2].results["value"];
        }
        GameObjectReference.prototype.create = function (objectsBank, parent) {
            var obj = new game_unit_object_class_1.GameUnitObject(objectsBank[this.objectId], objectsBank, parent, this.x, this.y);
            obj.objectsBank = objectsBank;
            return obj;
        };
        return GameObjectReference;
    }());
    exports.GameObjectReference = GameObjectReference;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=game-object-reference.class.js.map

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(63), __webpack_require__(64)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, action_on_object_script_class_1, listen_trigger_script_class_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Script = /** @class */ (function () {
        function Script(results, context) {
            this.units = [];
            for (var _i = 0, _a = results.children; _i < _a.length; _i++) {
                var result = _a[_i];
                switch (result.type) {
                    case "actionOnObject":
                        this.units.push(new action_on_object_script_class_1.ActionOnObjectScript(result, context));
                        break;
                    case "triggerScript":
                        this.units.push(new listen_trigger_script_class_1.ListenTriggerScript(result, context));
                        break;
                }
            }
        }
        Script.prototype.execute = function () {
            this.units.forEach(function (unit) {
                unit.execute();
            });
        };
        Script.prototype.executeAction = function (actionName, args) {
            switch (actionName) {
                case "execute":
                    this.execute();
                    break;
            }
        };
        return Script;
    }());
    exports.Script = Script;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=script.class.js.map

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(38)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, script_unit_class_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ActionOnObjectScript = /** @class */ (function (_super) {
        __extends(ActionOnObjectScript, _super);
        function ActionOnObjectScript(result, context) {
            var _this = _super.call(this, result) || this;
            _this.actionArgs = [];
            _this.targetObject = context.getActionable(result.results["objectType"], result.results["objectName"]);
            _this.actionName = result.getResult("actionAndArguments")[0].results["actionName"];
            result.getResult("actionAndArguments/argument").forEach(function (res) {
                _this.actionArgs.push(res.results["value"]);
            });
            return _this;
        }
        ActionOnObjectScript.prototype.execute = function () {
            this.targetObject.executeAction(this.actionName, this.actionArgs);
        };
        return ActionOnObjectScript;
    }(script_unit_class_1.ScriptUnit));
    exports.ActionOnObjectScript = ActionOnObjectScript;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=action-on-object-script.class.js.map

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(38), __webpack_require__(37), __webpack_require__(1)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, script_unit_class_1, script_definition_class_1, events_class_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ListenTriggerScript = /** @class */ (function (_super) {
        __extends(ListenTriggerScript, _super);
        function ListenTriggerScript(result, context) {
            var _this = _super.call(this, result) || this;
            _this.trigger = context.getTrigger(result.results["triggerId"]);
            var scriptDefinition = new script_definition_class_1.ScriptDefinition(result);
            _this.script = scriptDefinition.create(context);
            return _this;
        }
        ListenTriggerScript.prototype.execute = function () {
            var _this = this;
            this.trigger.listen(events_class_1.Events.TRIGGER_ACTION, function () {
                _this.script.execute();
            });
        };
        return ListenTriggerScript;
    }(script_unit_class_1.ScriptUnit));
    exports.ListenTriggerScript = ListenTriggerScript;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=listen-trigger-script.class.js.map

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(39), __webpack_require__(66), __webpack_require__(68)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, condition_class_1, operand_class_1, logical_expression_class_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ConditionDefinition = /** @class */ (function () {
        function ConditionDefinition(definition) {
            var data = definition.children[0];
            this.type = data.results["type"];
            this.objectId = data.results["objectId"];
            this.operator = data.results["operator"];
            this.value = data.results["value"];
            this.propertyName = data.results["propertyName"];
            console.log(data);
            if (data.type === "logicalExpression") {
                var operand1Unit = new operand_class_1.Operand();
                operand1Unit.code = data.results["operand1"];
                this.operand1 = operand1Unit.evaluate()[0];
                var operand2Unit = new operand_class_1.Operand();
                operand2Unit.code = data.results["operand2"];
                this.operand2 = operand2Unit.evaluate()[0];
                this.operator = data.results["operator"];
            }
        }
        ConditionDefinition.prototype.create = function (context) {
            var _this = this;
            return new condition_class_1.Condition(function () {
                if (_this.operand1 && _this.operand2 && _this.operator) {
                    var expression = new logical_expression_class_1.LogicalExpression(_this.operand1, _this.operator, _this.operand2);
                    return expression.evaluate(context);
                }
                else {
                    // TODO: other cases must be implemented
                    return true;
                }
            });
        };
        return ConditionDefinition;
    }());
    exports.ConditionDefinition = ConditionDefinition;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=condition-definition.class.js.map

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(2), __webpack_require__(67)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, parse_unit_class_1, selector_properties_class_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Operand = /** @class */ (function (_super) {
        __extends(Operand, _super);
        function Operand() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.assertions = {
                string: {
                    assertions: [
                        {
                            expression: /^\s*"([A-Za-z0-9\/._]+)"\s*/,
                            values: ['value']
                        }
                    ]
                },
                number: {
                    assertions: [
                        {
                            expression: /^\s*(-?[0-9]+(?:\.[0-9]*)?)\s*/,
                            values: ['value']
                        }
                    ]
                },
                boolean: {
                    assertions: [
                        {
                            expression: /^\s*(true|false)\s*/,
                            values: ['value']
                        }
                    ]
                },
                selector: {
                    assertions: [
                        {
                            expression: /^\s*([A-Za-z]+)\s*\(\s*([A-Za-z0-9_]+)\s*\)\s*/,
                            values: ["objectType", "objectId"]
                        }
                    ],
                    next: selector_properties_class_1.SelectorProperties
                }
            };
            return _this;
        }
        return Operand;
    }(parse_unit_class_1.ParseUnit));
    exports.Operand = Operand;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=operand.class.js.map

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(2)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, parse_unit_class_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SelectorProperties = /** @class */ (function (_super) {
        __extends(SelectorProperties, _super);
        function SelectorProperties() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.assertions = {
                selectorProperties: {
                    assertions: [
                        {
                            expression: /^\s*\.([A-Za-z0-9_]+)\s*/,
                            values: ["propertyName"]
                        }
                    ],
                    next: SelectorProperties
                }
            };
            return _this;
        }
        return SelectorProperties;
    }(parse_unit_class_1.ParseUnit));
    exports.SelectorProperties = SelectorProperties;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=selector-properties.class.js.map

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var LogicalExpression = /** @class */ (function () {
        function LogicalExpression(operand1, operator, operand2) {
            this.operand1 = operand1;
            this.operator = operator;
            this.operand2 = operand2;
        }
        LogicalExpression.prototype.evaluate = function (context) {
            var op1 = this.getValueFromResultUnit(this.operand1, context);
            var op2 = this.getValueFromResultUnit(this.operand2, context);
            var evaluation = op1 + this.operator + op2;
            return eval(evaluation);
        };
        LogicalExpression.prototype.getValueFromResultUnit = function (result, context) {
            switch (result.type) {
                case "selector":
                    var value = context.getGettable(this.operand1.results["objectType"], this.operand1.results["objectId"]);
                    var propertiesResults = this.operand1.getResult("selectorProperties");
                    var propertyRes = propertiesResults.length > 0 ? propertiesResults[0] : null;
                    while (propertyRes) {
                        var propertyName = propertyRes.results["propertyName"] ? propertyRes.results["propertyName"] : "";
                        value = value.getProperty(propertyName);
                        propertiesResults = propertiesResults[0].getResult("selectorProperties");
                        propertyRes = propertiesResults.length > 0 ? propertiesResults[0] : null;
                    }
                    return typeof value === "string" ? "'" + value + "'" : value;
                case "string":
                    return "'" + result.results["value"] + "'";
                case "boolean":
                case "number":
                    return result.results["value"];
            }
        };
        return LogicalExpression;
    }());
    exports.LogicalExpression = LogicalExpression;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=logical-expression.class.js.map

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(13), __webpack_require__(70), __webpack_require__(25)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, sprite_definition_class_1, control_definition_class_1, game_object_definition_class_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SceneObjectDefinition = /** @class */ (function (_super) {
        __extends(SceneObjectDefinition, _super);
        function SceneObjectDefinition(definition) {
            var _this = _super.call(this, definition) || this;
            _this.backgrounds = {};
            _this.controls = {};
            _this.scale = 1;
            var scaleRes = definition.getResult("bracketsGroup/simplePropertyGroup@groupName=scale/number");
            if (scaleRes.length > 0) {
                _this.scale = +scaleRes[0].results["value"];
            }
            definition.getResult("bracketsGroup/typedObject@type=background/simplePropsGroup").forEach(function (definition) {
                _this.backgrounds[definition.results["groupName"]] = new sprite_definition_class_1.SpriteDefinition(definition);
            });
            definition.getResult("bracketsGroup/typedObject@type=control/bracketsGroup").forEach(function (definition) {
                _this.controls[definition.results["groupName"]] = new control_definition_class_1.ControlDefinition(definition);
            });
            return _this;
        }
        return SceneObjectDefinition;
    }(game_object_definition_class_1.GameObjectDefinition));
    exports.SceneObjectDefinition = SceneObjectDefinition;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=scene-object-definition.class.js.map

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(6), __webpack_require__(13), __webpack_require__(71)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, control_class_1, sprite_definition_class_1, control_zone_definition_class_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ControlDefinition = /** @class */ (function () {
        function ControlDefinition(definition) {
            //console.log(definition);
            var _this = this;
            this.zones = {};
            this.controlSprite = new sprite_definition_class_1.SpriteDefinition(definition.getResult("simplePropertyGroup@groupName=sprite")[0]);
            var keyResults = definition.getResult("simplePropertyGroup@groupName=key/string");
            if (keyResults.length > 0) {
                this.keyName = keyResults[0].results["value"];
            }
            definition.getResult("typedObject@type=zone/simplePropsGroup").forEach(function (definition) {
                _this.zones[definition.results["groupName"]] = new control_zone_definition_class_1.ControlZoneDefinition(definition);
            });
        }
        ControlDefinition.prototype.create = function () {
            var sprite = this.controlSprite.createControlSprite();
            if (Object.keys(this.zones).length > 0) {
                var controls = {};
                for (var id in this.zones) {
                    controls[id] = new control_class_1.Control(sprite, this.zones[id].create(), this.zones[id].keyName);
                }
                return controls;
            }
            else {
                return new control_class_1.Control(sprite, null, this.keyName);
            }
        };
        return ControlDefinition;
    }());
    exports.ControlDefinition = ControlDefinition;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=control-definition.class.js.map

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(6)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, control_class_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ControlZoneDefinition = /** @class */ (function () {
        function ControlZoneDefinition(definition) {
            this.x = +definition.children[0].results["value"];
            this.y = +definition.children[1].results["value"];
            this.width = +definition.children[2].results["value"];
            this.height = +definition.children[3].results["value"];
            this.keyName = definition.children[4].results["value"];
        }
        ControlZoneDefinition.prototype.create = function () {
            return new control_class_1.ControlZone(this.x, this.y, this.width, this.height);
        };
        return ControlZoneDefinition;
    }());
    exports.ControlZoneDefinition = ControlZoneDefinition;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=control-zone-definition.class.js.map

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(6), __webpack_require__(17)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, control_class_1, game_unit_object_class_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SceneUnitObject = /** @class */ (function (_super) {
        __extends(SceneUnitObject, _super);
        function SceneUnitObject(definition, objectsBank) {
            var _this = _super.call(this, definition, objectsBank) || this;
            _this.objectsBank = objectsBank;
            _this.scale = 1;
            //
            _this.backgrounds = [];
            _this.controls = {};
            _this.controlSprites = {};
            _this.scale = definition.scale;
            for (var id in definition.backgrounds) {
                _this.backgrounds.push(definition.backgrounds[id].createDecorationSprite());
            }
            for (var id in definition.controls) {
                var controls = definition.controls[id].create();
                if (controls instanceof control_class_1.Control) {
                    _this.controls[id] = controls;
                    _this.controlSprites[id] = controls.sprite;
                }
                else {
                    for (var zoneId in controls) {
                        if (!_this.controlSprites[id]) {
                            _this.controlSprites[id] = controls[zoneId].sprite;
                        }
                        _this.controls[id + "_" + zoneId] = controls[zoneId];
                    }
                }
            }
            _this.displayIn(document.body);
            _this.getDOMElement();
            _this.displayDecorations();
            _this.displayControls();
            // TODO temp
            setTimeout(function () {
                _this.initialize();
            });
            _this.initializeObject(definition);
            return _this;
        }
        SceneUnitObject.prototype.preinit = function () {
            // must be empty for override
        };
        SceneUnitObject.prototype.initialize = function () {
            // objects initialization
            for (var id in this.objects) {
                if (this.objects[id].scripts["start"]) {
                    this.objects[id].scripts["start"].execute();
                }
            }
            if (this.scripts["start"]) {
                this.scripts["start"].execute();
            }
        };
        SceneUnitObject.prototype.displaySprites = function () {
            for (var id in this.objects) {
                for (var spriteId in this.objects[id].sprites) {
                    if (this.objects[id].sprites.hasOwnProperty(spriteId)) {
                        this.objects[id].sprites[spriteId].displayInDOMElement(this._spritesContainer);
                    }
                }
            }
        };
        SceneUnitObject.prototype.displayDecorations = function () {
            var _this = this;
            this.backgrounds.forEach(function (sprite) {
                sprite.displayInDOMElement(_this._backgroundsContainer);
            });
        };
        SceneUnitObject.prototype.displayControls = function () {
            for (var id in this.controlSprites) {
                this.controlSprites[id].displayInDOMElement(this._controlsContainer);
            }
        };
        SceneUnitObject.prototype.getControl = function (id) {
            return this.controls[id];
        };
        // for display
        SceneUnitObject.prototype.getDOMElement = function () {
            if (this._DOMElement) {
                return this._DOMElement;
            }
            else {
                var div = document.createElement("div");
                div.className = "game-scene";
                this._DOMElement = div;
                var gameContainer = document.createElement("div");
                gameContainer.className = "game-container";
                div.appendChild(gameContainer);
                gameContainer.style.transform = "scale(" + this.scale + ")";
                //backgrounds
                this._backgroundsContainer = document.createElement("div");
                this._backgroundsContainer.classList.add("backgrounds-container");
                gameContainer.appendChild(this._backgroundsContainer);
                // sprites
                this._spritesContainer = document.createElement("div");
                this._spritesContainer.classList.add("sprites-container");
                gameContainer.appendChild(this._spritesContainer);
                // foregrounds
                this._foregroundsContainer = document.createElement("div");
                this._foregroundsContainer.classList.add("foregrounds-container");
                gameContainer.appendChild(this._foregroundsContainer);
                // controls
                this._controlsContainer = document.createElement("div");
                this._controlsContainer.classList.add("controls-container");
                div.appendChild(this._controlsContainer);
                return div;
            }
        };
        SceneUnitObject.prototype.displayIn = function (element) {
            var type = typeof element;
            if (type === "string") {
                this.displayInDOMElementById(element);
            }
            else if (element instanceof HTMLElement) {
                this.displayInDOMElement(element);
            }
        };
        SceneUnitObject.prototype.displayInDOMElement = function (container) {
            this._DOMElement = this.getDOMElement();
            container.appendChild(this._DOMElement);
            return this._DOMElement;
        };
        SceneUnitObject.prototype.displayInDOMElementById = function (containerId) {
            this._DOMElement = this.getDOMElement();
            var element = document.getElementById(containerId);
            element.appendChild(this._DOMElement);
        };
        return SceneUnitObject;
    }(game_unit_object_class_1.GameUnitObject));
    exports.SceneUnitObject = SceneUnitObject;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=scene-unit-object.class.js.map

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(41)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, game_object_class_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var HTMLGameObject = /** @class */ (function (_super) {
        __extends(HTMLGameObject, _super);
        function HTMLGameObject(data) {
            if (data === void 0) { data = {}; }
            return _super.call(this, data) || this;
        }
        HTMLGameObject.prototype.loadData = function (data) {
            var param = _super.prototype.loadData.call(this, data);
            this.loadDecorations(param["backgrounds"], this._backgroundsContainer);
            this.loadDecorations(param["foregrounds"], this._foregroundsContainer);
            this.loadControls(param["controls"], this._controlsContainer);
            return param;
        };
        HTMLGameObject.prototype.getDOMElement = function () {
            if (this._DOMElement) {
                return this._DOMElement;
            }
            else {
                var div = document.createElement("div");
                div.className = "game-scene";
                this._DOMElement = div;
                var gameContainer = document.createElement("div");
                gameContainer.className = "game-container";
                div.appendChild(gameContainer);
                gameContainer.style.transform = "scale(" + this._params["gameContainerScale"] + ")";
                //backgrounds
                this._backgroundsContainer = document.createElement("div");
                this._backgroundsContainer.classList.add("backgrounds-container");
                gameContainer.appendChild(this._backgroundsContainer);
                // sprites
                this._spritesContainer = document.createElement("div");
                this._spritesContainer.classList.add("sprites-container");
                gameContainer.appendChild(this._spritesContainer);
                // foregrounds
                this._foregroundsContainer = document.createElement("div");
                this._foregroundsContainer.classList.add("foregrounds-container");
                gameContainer.appendChild(this._foregroundsContainer);
                // controls
                this._controlsContainer = document.createElement("div");
                this._controlsContainer.classList.add("controls-container");
                div.appendChild(this._controlsContainer);
                return div;
            }
        };
        HTMLGameObject.prototype.displayIn = function (element) {
            var type = typeof element;
            if (type === "string") {
                this.displayInDOMElementById(element);
            }
            else if (element instanceof HTMLElement) {
                this.displayInDOMElement(element);
            }
        };
        HTMLGameObject.prototype.displayInDOMElement = function (container) {
            this._DOMElement = this.getDOMElement();
            container.appendChild(this._DOMElement);
            return this._DOMElement;
        };
        HTMLGameObject.prototype.displayInDOMElementById = function (containerId) {
            this._DOMElement = this.getDOMElement();
            var element = document.getElementById(containerId);
            element.appendChild(this._DOMElement);
        };
        HTMLGameObject.prototype.loadSprites = function (spritesData) {
            var _this = this;
            this.getDOMElement();
            var sprites = _super.prototype.loadSprites.call(this, spritesData);
            sprites.forEach(function (sprite) { return sprite.displayInDOMElement(_this._spritesContainer); });
            return sprites;
        };
        HTMLGameObject.prototype.loadDecorations = function (decorationDatas, container) {
            if (container === void 0) { container = null; }
            this.getDOMElement();
            var decorations = _super.prototype.loadDecorations.call(this, decorationDatas);
            decorations.forEach(function (decoration) { return decoration.displayInDOMElement(container); });
            return decorations;
        };
        HTMLGameObject.prototype.loadControls = function (controlsDatas, container) {
            if (container === void 0) { container = null; }
            this.getDOMElement();
            var sprites = _super.prototype.loadControls.call(this, controlsDatas);
            sprites.forEach(function (sprite) { return sprite.displayInDOMElement(container); });
            return null;
        };
        return HTMLGameObject;
    }(game_object_class_1.GameObject));
    exports.HTMLGameObject = HTMLGameObject;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=html-game-object.class.js.map

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(43), __webpack_require__(8)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, seg7_displayer_class_1, display_element_class_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var LcdDisplayer = /** @class */ (function (_super) {
        __extends(LcdDisplayer, _super);
        function LcdDisplayer(x, y, digitNumber, stepWidth, scale, variable) {
            if (digitNumber === void 0) { digitNumber = 1; }
            if (stepWidth === void 0) { stepWidth = 24; }
            if (scale === void 0) { scale = 1; }
            if (variable === void 0) { variable = null; }
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
            }
            else {
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
    }(display_element_class_1.DisplayElement));
    exports.LcdDisplayer = LcdDisplayer;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=lcd-displayer.class.js.map

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Created by Christophe on 03/02/2017.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ConditionTypes = /** @class */ (function () {
        function ConditionTypes() {
        }
        ConditionTypes.SEQUENCE_CONDITION = "sequence_condition";
        ConditionTypes.VARIABLE_CONDITION = "variable_condition";
        return ConditionTypes;
    }());
    exports.ConditionTypes = ConditionTypes;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=condition-types.class.js.map

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(44)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, sequence_condition_class_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var OnStateSequenceCondition = /** @class */ (function (_super) {
        __extends(OnStateSequenceCondition, _super);
        function OnStateSequenceCondition() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return OnStateSequenceCondition;
    }(sequence_condition_class_1.SequenceCondition));
    exports.OnStateSequenceCondition = OnStateSequenceCondition;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=onstate-sequence-condition.class.js.map

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(5)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, base_trigger_class_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Trigger = /** @class */ (function (_super) {
        __extends(Trigger, _super);
        function Trigger(dispatcher, eventName, argument) {
            if (argument === void 0) { argument = null; }
            var _this = _super.call(this) || this;
            _this.dispatcher = dispatcher;
            _this.eventName = eventName;
            _this.argument = argument;
            return _this;
        }
        Trigger.prototype._callback = function (arg) {
            /*if (!this._enabled || !this.callback) return;
            
            if (this.argument) {
                if (arg !== this.argument) {
                    return;
                }
            }
    
            this.callback(arg);*/
        };
        Object.defineProperty(Trigger.prototype, "enabled", {
            get: function () {
                return this._enabled;
            },
            set: function (value) {
                if (value) {
                    this.enable();
                }
                else {
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
                    _this.action(arg);
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
    }(base_trigger_class_1.BaseTrigger));
    exports.Trigger = Trigger;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=trigger.class.js.map

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(5), __webpack_require__(28)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, base_trigger_class_1, visibility_status_class_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var StatesCollisionTrigger = /** @class */ (function (_super) {
        __extends(StatesCollisionTrigger, _super);
        function StatesCollisionTrigger(baseSprite, targetSprite) {
            var _this = _super.call(this) || this;
            _this.baseSprite = baseSprite;
            _this.targetSprite = targetSprite;
            return _this;
        }
        StatesCollisionTrigger.prototype.enable = function () {
            var _this = this;
            if (!this._enabled) {
                this.baseSpriteSubscription = this.baseSprite.subscribe(visibility_status_class_1.VisibilityStatus.VISIBILITY, function (status) {
                    if (status === visibility_status_class_1.VisibilityStatus.VISIBLE && _this.targetSprite.getStatus(visibility_status_class_1.VisibilityStatus.VISIBILITY) === visibility_status_class_1.VisibilityStatus.VISIBLE) {
                        _this.action();
                    }
                });
                this.targetSpriteSubscription = this.targetSprite.subscribe(visibility_status_class_1.VisibilityStatus.VISIBILITY, function (status) {
                    if (status === visibility_status_class_1.VisibilityStatus.VISIBLE && _this.baseSprite.getStatus(visibility_status_class_1.VisibilityStatus.VISIBILITY) === visibility_status_class_1.VisibilityStatus.VISIBLE) {
                        _this.action();
                    }
                });
            }
            _super.prototype.enable.call(this);
        };
        StatesCollisionTrigger.prototype.disable = function () {
            if (this.baseSpriteSubscription)
                this.baseSpriteSubscription.unsubscribe();
            if (this.targetSpriteSubscription)
                this.targetSpriteSubscription.unsubscribe();
            _super.prototype.disable.call(this);
        };
        return StatesCollisionTrigger;
    }(base_trigger_class_1.BaseTrigger));
    exports.StatesCollisionTrigger = StatesCollisionTrigger;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=states-collision-trigger.class.js.map

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(0)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, dispatcher_class_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ConditionalSpritesGroupState = /** @class */ (function (_super) {
        __extends(ConditionalSpritesGroupState, _super);
        function ConditionalSpritesGroupState(state, condition) {
            var _this = _super.call(this) || this;
            _this.state = state;
            _this.condition = condition;
            return _this;
        }
        return ConditionalSpritesGroupState;
    }(dispatcher_class_1.Dispatcher));
    exports.ConditionalSpritesGroupState = ConditionalSpritesGroupState;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=conditional-sprites-group-state.class.js.map

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(0)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, dispatcher_class_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ConditionalSpritesGroupStateSet = /** @class */ (function (_super) {
        __extends(ConditionalSpritesGroupStateSet, _super);
        function ConditionalSpritesGroupStateSet(group, conditionalStates, defaultState) {
            if (conditionalStates === void 0) { conditionalStates = []; }
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
    }(dispatcher_class_1.Dispatcher));
    exports.ConditionalSpritesGroupStateSet = ConditionalSpritesGroupStateSet;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=conditional-sprites-group-state-set.class.js.map

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Created by Christophe on 08/03/2017.
     */
    var Status = /** @class */ (function () {
        function Status() {
        }
        return Status;
    }());
    exports.Status = Status;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=status.class.js.map

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Created by Christophe on 03/02/2017.
 */
//import {Observable} from "rxjs/Rx";
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // tout ça est à voir plus tard
    var TimeUtils = /** @class */ (function () {
        function TimeUtils() {
        }
        return TimeUtils;
    }());
    exports.TimeUtils = TimeUtils;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=time-utils.class.js.map

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(18), __webpack_require__(19), __webpack_require__(40)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, control_down_trigger_class_1, time_trigger_class_1, control_up_trigger_class_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TriggersObject = /** @class */ (function () {
        function TriggersObject(data, gameObject) {
            this.gameObject = gameObject;
            this._triggersDictionary = {};
            this._types = {
                controldown: control_down_trigger_class_1.ControlDownTrigger,
                controlup: control_up_trigger_class_1.ControlUpTrigger,
                time: time_trigger_class_1.TimeTrigger
            };
            this.loadData(data);
        }
        TriggersObject.prototype.loadData = function (data) {
            if (data.triggers) {
                for (var id in data.triggers) {
                    if (data.triggers.hasOwnProperty(id)) {
                        var type = data.triggers[id]["type"];
                        var trigger = void 0;
                        switch (type) {
                            case "controldown":
                                var ctrl = this.gameObject.getControl(data.triggers[id]["control"]);
                                trigger = new control_down_trigger_class_1.ControlDownTrigger(ctrl);
                                break;
                            case "time":
                                trigger = new time_trigger_class_1.TimeTrigger(data.triggers[id]["time"]);
                                break;
                        }
                        this._triggersDictionary[id] = trigger;
                    }
                }
            }
        };
        TriggersObject.prototype.getTrigger = function (triggerId) {
            return this._triggersDictionary[triggerId];
        };
        return TriggersObject;
    }());
    exports.TriggersObject = TriggersObject;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=triggers-object.class.js.map

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(11), __webpack_require__(12), __webpack_require__(85)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, graph_node_class_1, graph_class_1, data_templates_class_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GraphObject = /** @class */ (function () {
        function GraphObject(data, triggers, scene) {
            this.triggers = triggers;
            this.scene = scene;
            this._nodesDictionary = {};
            this.loadData(data);
        }
        GraphObject.prototype.getDataFromTextFormat = function (str) {
            var data = data_templates_class_1.DataTemplates.graphNode.extract(str);
            var nodeType = "sprite";
            var links = [];
            data[1].forEach(function (linkData) {
                var data = {
                    node: linkData["$nodeId"],
                    trigger: linkData["$triggerId"]
                };
                links.push(data);
            });
            var value = {
                state: {
                    type: nodeType,
                    ref: data[0]["$spriteId"]
                },
                links: links
            };
            return value;
        };
        GraphObject.prototype.loadData = function (data) {
            var _this = this;
            var nodesData = data.nodes;
            var nodeIds = Object.keys(nodesData);
            var nodes = {};
            // on crée d'abord les objets node
            nodeIds.forEach(function (nodeId) {
                var state;
                var nodeData;
                if (nodesData[nodeId].state) {
                    // mode normal
                    nodeData = nodesData[nodeId];
                }
                else if (typeof nodesData[nodeId] === "string") {
                    // mode abrégé
                    nodeData = _this.getDataFromTextFormat(nodesData[nodeId]);
                }
                var stateData = nodeData.state;
                if (!stateData.type || stateData.type === "sprite") {
                    state = _this.scene.getSprite(stateData.ref);
                }
                else if (stateData.type === "state") {
                    // states à faire
                }
                var node = new graph_node_class_1.GraphNode(state);
                _this._nodesDictionary[nodeId] = node;
                nodes[nodeId] = node;
            });
            nodeIds.forEach(function (nodeId) {
                var nodeData;
                if (nodesData[nodeId].state) {
                    // mode normal
                    nodeData = nodesData[nodeId];
                }
                else if (typeof nodesData[nodeId] === "string") {
                    // mode abrégé
                    nodeData = _this.getDataFromTextFormat(nodesData[nodeId]);
                }
                var linksDatas = nodeData.links;
                var currentNode = _this._nodesDictionary[nodeId];
                linksDatas.forEach(function (data) {
                    var destNode = _this._nodesDictionary[data.node];
                    var trigger = _this.triggers.getTrigger(data.trigger);
                    //currentNode.addLink(new GraphLink(destNode, trigger));
                });
            });
            this.graph = new graph_class_1.Graph(nodes);
        };
        return GraphObject;
    }());
    exports.GraphObject = GraphObject;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=graph-object.class.js.map

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(86)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, reverted_template_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DataTemplates = /** @class */ (function () {
        function DataTemplates() {
        }
        DataTemplates.graphNode = new reverted_template_1.RevertedTemplate("sprite($spriteId)|$spriteId;[*$conditionId:*$triggerId->$nodeId]");
        DataTemplates.condition = new reverted_template_1.RevertedTemplate("$type($applyTo)$variables");
        return DataTemplates;
    }());
    exports.DataTemplates = DataTemplates;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=data-templates.class.js.map

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(87)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, reverted_template_class_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(reverted_template_class_1);
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=index.js.map

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(20), __webpack_require__(88), __webpack_require__(45)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, expressions_class_1, template_group_class_1, group_type_enum_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var RevertedTemplate = /** @class */ (function () {
        function RevertedTemplate(templateText, contentFormat) {
            if (contentFormat === void 0) { contentFormat = "([A-Za-z0-9]+)"; }
            var _this = this;
            this.groups = [];
            var groupLines = this.getGroups(templateText);
            groupLines.forEach(function (line) {
                _this.groups.push(new template_group_class_1.TemplateGroup(line, contentFormat));
            });
        }
        RevertedTemplate.prototype.getGroups = function (text) {
            text = text.replace(expressions_class_1.Expressions.leftBracket, "[");
            text = text.replace(expressions_class_1.Expressions.rightBracket, "]");
            return this.splitGroups(text);
        };
        RevertedTemplate.prototype.splitGroups = function (text) {
            return text.split(expressions_class_1.Expressions.groupSplitter).filter(function (line) {
                return line !== "";
            });
        };
        RevertedTemplate.prototype.extract = function (text) {
            var result = [];
            var lineIndex = 0;
            var lines = this.splitGroups(text);
            var currentLine;
            for (var _i = 0, _a = this.groups; _i < _a.length; _i++) {
                var group = _a[_i];
                if (group.type === group_type_enum_1.GroupType.BASIC) {
                    currentLine = lines[lineIndex];
                    if (group.test(currentLine)) {
                        result.push(group.extractFirstMatchingContent(currentLine));
                        lineIndex++;
                    }
                    else {
                        this.incomplete(lineIndex, result);
                    }
                }
                else if (group.type === group_type_enum_1.GroupType.ARRAY) {
                    var groupArray = [];
                    currentLine = lines[lineIndex];
                    while (group.test(currentLine)) {
                        groupArray.push(group.extractFirstMatchingContent(currentLine));
                        lineIndex++;
                        currentLine = lines[lineIndex];
                    }
                    if (groupArray.length > 0) {
                        result.push(groupArray);
                    }
                    else {
                        this.incomplete(lineIndex, result);
                    }
                }
            }
            return result;
        };
        RevertedTemplate.prototype.incomplete = function (lineIndex, result) {
            console.warn("Error parsing template line " + (lineIndex + 1) + ", incomplete result");
            return result;
        };
        return RevertedTemplate;
    }());
    exports.RevertedTemplate = RevertedTemplate;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=reverted-template.class.js.map

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(45), __webpack_require__(20), __webpack_require__(89)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, group_type_enum_1, expressions_class_1, template_expression_class_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TemplateGroup = /** @class */ (function () {
        function TemplateGroup(textLine, contentFormat) {
            if (contentFormat === void 0) { contentFormat = null; }
            var _this = this;
            this.textLine = textLine;
            this.expressions = [];
            this.type = group_type_enum_1.GroupType.BASIC;
            this.optional = false;
            if (expressions_class_1.Expressions.arrayGroup.test(textLine)) {
                this.type = group_type_enum_1.GroupType.ARRAY;
                // brackets deletion
                textLine = textLine.replace(expressions_class_1.Expressions.leftBracket, "");
                textLine = textLine.replace(expressions_class_1.Expressions.rightBracket, "");
            }
            var expressionStrings = textLine.split(expressions_class_1.Expressions.or);
            expressionStrings.forEach(function (expression) {
                _this.expressions.push(new template_expression_class_1.TemplateExpression(expression, contentFormat));
            });
        }
        TemplateGroup.prototype.test = function (text) {
            for (var _i = 0, _a = this.expressions; _i < _a.length; _i++) {
                var expression = _a[_i];
                if (expression.test(text)) {
                    return true;
                }
            }
            return false;
        };
        TemplateGroup.prototype.extractFirstMatchingContent = function (text) {
            for (var _i = 0, _a = this.expressions; _i < _a.length; _i++) {
                var expression = _a[_i];
                var content = expression.extract(text);
                if (content) {
                    return content;
                }
            }
            return null;
        };
        return TemplateGroup;
    }());
    exports.TemplateGroup = TemplateGroup;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=template-group.class.js.map

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(20), __webpack_require__(90)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, expressions_class_1, escapeStringRegexp) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TemplateExpression = /** @class */ (function () {
        function TemplateExpression(expressionText, contentFormat, isOptional) {
            if (contentFormat === void 0) { contentFormat = null; }
            if (isOptional === void 0) { isOptional = false; }
            this.expressionText = expressionText;
            this.isOptional = isOptional;
            this.variables = [];
            this.optionalExpressions = [];
            // variables extraction
            var regExpText = expressionText;
            regExpText = escapeStringRegexp(regExpText);
            if (!isOptional) {
                regExpText = "^" + regExpText + "$";
            }
            // here for optional expressions
            var optionsRes = expressions_class_1.Expressions.optional.exec(expressionText);
            while (optionsRes) {
                expressionText = expressionText.replace(optionsRes[0], "");
                var subExpText = optionsRes[0].replace(/\*/g, "");
                var replacement = "(" + escapeStringRegexp(optionsRes[0].substring(1, optionsRes[0].length - 1)) + ")?";
                regExpText = regExpText.replace(escapeStringRegexp(optionsRes[0]), replacement);
                this.optionalExpressions.push(new TemplateExpression(subExpText, contentFormat, true));
                optionsRes = expressions_class_1.Expressions.optional.exec(expressionText);
            }
            // TODO: ne pas utiliser regExpText ici
            var res = expressions_class_1.Expressions.variable.exec(regExpText);
            while (res) {
                regExpText = regExpText.replace("\\" + res[0], contentFormat);
                res = expressions_class_1.Expressions.variable.exec(regExpText);
            }
            // TODO: idem, mais avec seulement l'expression sans les valeurs optionnelles
            res = expressions_class_1.Expressions.variable.exec(expressionText);
            while (res) {
                this.variables.push(res[0]);
                res = expressions_class_1.Expressions.variable.exec(expressionText);
            }
            this.expressionRegExp = new RegExp(regExpText);
            this.contentRegExp = new RegExp(contentFormat);
            expressionText = expressionText.replace(expressions_class_1.Expressions.optional, "");
        }
        TemplateExpression.prototype.test = function (text) {
            return this.expressionRegExp.test(text);
        };
        TemplateExpression.prototype.exec = function (text) {
            return this.expressionRegExp.exec(text);
        };
        TemplateExpression.prototype.extract = function (text) {
            // TODO: vérifier l'utilité de cleanExpressionText
            var cleanExpressionText = this.expressionText.replace(expressions_class_1.Expressions.optional, "");
            //console.log(cleanExpressionText);
            if (this.test(text)) {
                var values_1 = {};
                var extractionText_1 = text;
                console.log(extractionText_1);
                // les expressions optionnelles
                this.optionalExpressions.forEach(function (expression) {
                    values_1 = expression.extract(text);
                    if (values_1) {
                        extractionText_1 = extractionText_1.replace(expression.expressionRegExp, '');
                    }
                    // suppression de extractionText de la valeur testée
                    console.log("->", expression);
                });
                values_1 = !values_1 ? {} : values_1;
                var tab = cleanExpressionText.split(expressions_class_1.Expressions.variable);
                for (var i = 0; i < tab.length - 1; i++) {
                    var variable = this.variables[i];
                    var textElem = tab[i];
                    var nextTextElem = tab[i + 1];
                    // attention : index à 0 si textElem === "" (par défaut, if suivant inutile)
                    var elemStartIndex = void 0;
                    if (textElem !== "") {
                        elemStartIndex = extractionText_1.indexOf(textElem);
                    }
                    else {
                        elemStartIndex = 0;
                    }
                    extractionText_1 = extractionText_1.substring(elemStartIndex + textElem.length);
                    var elemEndIndex = void 0;
                    if (nextTextElem !== "") {
                        elemEndIndex = extractionText_1.indexOf(nextTextElem);
                    }
                    else {
                        // end of string
                        elemEndIndex = extractionText_1.length;
                    }
                    values_1[variable] = extractionText_1.slice(0, elemEndIndex);
                    extractionText_1 = extractionText_1.substr(elemEndIndex);
                }
                return values_1;
            }
            else {
                return null;
            }
        };
        return TemplateExpression;
    }());
    exports.TemplateExpression = TemplateExpression;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=template-expression.class.js.map

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var matchOperatorsRe = /[|\\{}()[\]^$+*?.]/g;

module.exports = function (str) {
	if (typeof str !== 'string') {
		throw new TypeError('Expected a string');
	}

	return str.replace(matchOperatorsRe, '\\$&');
};


/***/ })
/******/ ]);
});